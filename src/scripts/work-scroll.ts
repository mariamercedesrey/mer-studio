// Selected Work, desktop (≥1024 px): text scrolls in the centre column, the image of the active project is
// sticky on the right and swaps with a pixelated transition (pixel-transition.ts). The active project is the
// text block closest to the viewport centre; the left index mirrors it and scrolls to a project on click.
// Never hijacks the scroll: no wheel/touch handlers, only smooth `scrollIntoView` on an explicit index click.
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
    items.forEach((el, j) => el.toggleAttribute('data-active', j === i));
    links.forEach((a, j) => {
      a.toggleAttribute('data-active', j === i);
      if (j === i) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
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

  // ── Activation: block closest to the viewport centre ──
  let lock = false, lockTimer = 0, frame = 0, inView = false;
  const update = () => {
    frame = 0;
    if (lock || !inView) return;
    const mid = window.innerHeight / 2;
    let best = 0, bestDist = Infinity;
    items.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActive(best);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  // ── Index click: smooth scroll to the block; intermediate projects don't flash by ──
  const release = () => { lock = false; window.clearTimeout(lockTimer); schedule(); };
  const goTo = (i: number) => {
    lock = true;
    setActive(i);
    items[i].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    window.clearTimeout(lockTimer);
    lockTimer = window.setTimeout(release, reduced ? 50 : 1600); // safety net; scroll events below release earlier
  };
  const onScroll = () => {
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

  links.forEach((a, i) => on(a, 'click', (e: Event) => { e.preventDefault(); goTo(i); }));
  // Title link of a block that isn't the active one: bring it to the centre first (the modal opens from the active one).
  const list = section.querySelector<HTMLElement>('[data-work-list]');
  if (list) on(list, 'click', (e: MouseEvent) => {
    const li = (e.target as HTMLElement).closest<HTMLElement>('[data-work-item]');
    const i = li ? items.indexOf(li) : -1;
    if (i >= 0 && i !== current && !(e.metaKey || e.ctrlKey || e.shiftKey)) { e.preventDefault(); e.stopPropagation(); goTo(i); }
  }, true);
  items.forEach((el, i) => on(el, 'focusin', () => { if (!lock) { setActive(i); } }));
  on(window, 'scroll', onScroll, { passive: true });
  on(window, 'resize', schedule);

  const io = new IntersectionObserver((entries) => {
    inView = entries[0].isIntersecting;
    if (inView) schedule();
  }, { rootMargin: '0px' });
  io.observe(section);
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

  return () => {
    cleanups.forEach((f) => f());
    io.disconnect(); preIo.disconnect();
    cancelAnimationFrame(frame); window.clearTimeout(lockTimer);
    pt?.stop();
    stage.classList.remove('is-swapping');
  };
}
