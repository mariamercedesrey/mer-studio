// Selected Work, desktop (≥1024 px): stepped scroll. The section pins (CSS sticky inside a track that is
// 100svh + projects × 60svh tall) and the scroll progress picks the project: one 60svh stretch per project.
// The scroll stays 100 % native — no wheel/touch handlers, nothing is intercepted or slowed; JS only reads the
// position and, on an explicit index click, scrolls to that project's stretch.
// A change swaps the text (out up / in from below, CSS via data-pos) and the image (pixelated canvas transition).
// Below 1024 px nothing runs here — text and image stack (CSS) and reveal.ts does the fade + rise.
import { createPixelTransition } from './pixel-transition';
import { prefersReducedMotion } from './reveal';

const DESKTOP = '(min-width: 1024px)';

export function initWorkScroll() {
  const section = document.querySelector<HTMLElement>('[data-work-scroll]');
  if (!section) return;
  const mq = matchMedia(DESKTOP);
  let teardown: (() => void) | null = null;
  const sync = () => { teardown?.(); teardown = mq.matches ? setup(section) : null; };
  mq.addEventListener('change', sync);
  sync();
}

function setup(section: HTMLElement) {
  const items = Array.from(section.querySelectorAll<HTMLElement>('[data-work-item]'));
  const links = Array.from(section.querySelectorAll<HTMLAnchorElement>('[data-work-index-link]'));
  const stage = section.querySelector<HTMLElement>('[data-work-stage]');
  const stageLink = section.querySelector<HTMLAnchorElement>('[data-work-stage-link]');
  const canvas = stage?.querySelector<HTMLCanvasElement>('canvas');
  const nextBtn = section.querySelector<HTMLAnchorElement>('[data-work-next]');
  const nextLabel = section.querySelector<HTMLElement>('[data-work-next-label]');
  const pics = Array.from(section.querySelectorAll<HTMLElement>('[data-stage-pic]'));
  if (!items.length || !stage || !stageLink || pics.length !== items.length) return null;

  const reduced = prefersReducedMotion();
  const pt = !reduced && canvas ? createPixelTransition(canvas) : null;
  const imgs = pics.map((p) => p.querySelector('img') as HTMLImageElement);

  // ── Loading: the first two as the section nears the viewport, the next one as each project activates, the rest lazy.
  const load = (i: number) => {
    const pic = pics[i];
    if (!pic || pic.dataset.loaded) return;
    pic.dataset.loaded = '';
    pic.querySelectorAll<HTMLSourceElement>('source[data-srcset]').forEach((s) => { s.srcset = s.dataset.srcset!; });
    const img = imgs[i];
    img.loading = 'eager';
    if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    if (img.dataset.src) img.src = img.dataset.src;
  };

  // ── Which image is on screen (plain <img>, crossfaded by CSS with reduced motion) ──
  let shown = -1, swapId = 0, current = -1;
  const setShown = (i: number) => {
    pics.forEach((p, j) => p.toggleAttribute('data-on', j === i));
    shown = i;
  };
  const swapTo = async (i: number) => {
    const id = ++swapId;
    load(i);
    try { await imgs[i].decode(); } catch { /* not decodable yet: show it anyway when it arrives */ }
    if (id !== swapId) return;
    const from = shown >= 0 ? imgs[shown] : null;
    if (!pt || !from || from === imgs[i]) { setShown(i); return; }
    stage.classList.add('is-swapping'); // plain images hidden, the canvas owns the frame
    await pt.play(from, imgs[i]);
    if (id !== swapId) return;
    setShown(i);
    stage.classList.remove('is-swapping');
  };

  const mark = (i: number) => {
    items.forEach((el, j) => {
      el.toggleAttribute('data-active', j === i);
      el.dataset.pos = j === i ? 'current' : j < i ? 'before' : 'after'; // before: exited up · after: waiting below
    });
    links.forEach((a, j) => {
      a.toggleAttribute('data-active', j === i);
      if (j === i) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    if (nextBtn && nextLabel) { // "next project" → the following project; on the last one "next section" → Services
      const last = i === items.length - 1;
      nextLabel.textContent = last ? 'next section' : 'next project';
      nextBtn.href = last ? '#services' : `#${items[i + 1].id}`;
      nextBtn.parentElement!.style.setProperty('--cur-img-top', items[i].style.getPropertyValue('--img-top'));
    }
    const opener = items[i].querySelector<HTMLAnchorElement>('[data-project-open]');
    if (opener) { stageLink.href = opener.href; stageLink.dataset.projectOpen = opener.dataset.projectOpen ?? ''; }
  };
  const setActive = (i: number) => {
    if (i === current) return;
    current = i;
    mark(i);
    swapTo(i);
    load(i + 1); // preload the next project
  };

  // ── Activation: scroll progress through the track. One stretch of `step` px per project; project 1 is in place on
  //    arrival (progress ≤ 0) and the change to project 2 starts once the first stretch has been scrolled. ──
  const track = section.querySelector<HTMLElement>('[data-work-track]');
  const pin = section.querySelector<HTMLElement>('[data-work-pin]');
  if (!track || !pin) return null;
  const stepEl = section.querySelector<HTMLElement>('[data-work-step]');
  const stepPx = () => stepEl?.offsetHeight || window.innerHeight * 0.6;
  let lock = false, lockTimer = 0, frame = 0;
  const update = () => {
    frame = 0;
    if (lock) return;
    const travelled = -track.getBoundingClientRect().top;
    const i = Math.min(items.length - 1, Math.max(0, Math.floor(travelled / stepPx())));
    setActive(i);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  // ── Index click: smooth scroll to the middle of that project's stretch; intermediate projects don't flash by ──
  const release = () => { lock = false; window.clearTimeout(lockTimer); schedule(); };
  const goTo = (i: number) => {
    lock = true;
    setActive(i);
    load(i);
    const top = track.getBoundingClientRect().top + window.scrollY + (i + 0.5) * stepPx();
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
    window.clearTimeout(lockTimer);
    lockTimer = window.setTimeout(release, reduced ? 50 : 1600); // safety net; scroll events below release earlier
  };
  // ── "next project" arrow bob: starts once the section is in view and the scroll has settled, stops for good at the
  //    next scroll. Never under reduced motion. ──
  let inView = false, armed = false, bobDone = reduced, bobTimer = 0;
  const syncBob = () => section.toggleAttribute('data-bob', !bobDone && armed && inView);
  const settleBob = () => { window.clearTimeout(bobTimer); bobTimer = window.setTimeout(() => { if (inView) { armed = true; syncBob(); } }, 250); };
  const bobScroll = () => {
    if (bobDone) return;
    if (armed) { bobDone = true; armed = false; syncBob(); return; }
    settleBob();
  };
  const bobIo = new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; if (!inView) { armed = false; } syncBob(); if (inView && !armed) settleBob(); }, { threshold: 0.6 });
  bobIo.observe(pin);

  const onScroll = () => {
    bobScroll();
    if (lock) {
      window.clearTimeout(lockTimer);
      lockTimer = window.setTimeout(release, 140); // scroll settled
    } else schedule();
  };

  const cleanups: Array<() => void> = [];
  const on = (el: HTMLElement | Window, type: string, fn: (e: any) => void, opts?: AddEventListenerOptions | boolean) => {
    el.addEventListener(type, fn, opts);
    cleanups.push(() => el.removeEventListener(type, fn, opts));
  };
  if (nextBtn) on(nextBtn, 'click', (e: Event) => {
    e.preventDefault();
    if (current < items.length - 1) goTo(current + 1);
    else document.getElementById('services')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  });
  links.forEach((a, i) => on(a, 'click', (e: Event) => { e.preventDefault(); goTo(i); }));
  on(window, 'scroll', onScroll, { passive: true });
  on(window, 'resize', schedule);

  // Images: the first two as the section nears the viewport, the next one as each project activates, the rest lazy.
  const preIo = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    preIo.disconnect();
    load(0); load(1);
  }, { rootMargin: '900px 0px' });
  preIo.observe(section);

  // First paint: project 1 (its <img> is already in the markup, lazy — nothing is fetched before the section nears).
  current = 0;
  mark(0);
  setShown(0);
  schedule(); // e.g. reload in the middle of the track

  return () => {
    cleanups.forEach((f) => f());
    preIo.disconnect(); bobIo.disconnect(); window.clearTimeout(bobTimer);
    section.removeAttribute('data-bob');
    cancelAnimationFrame(frame); window.clearTimeout(lockTimer);
    pt?.stop();
    stage.classList.remove('is-swapping');
    items.forEach((el) => { delete el.dataset.pos; });
  };
}
