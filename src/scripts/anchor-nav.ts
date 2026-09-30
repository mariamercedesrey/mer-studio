// In-page anchors (nav, hero arrow, "next project" past the last one) + the nav's scrollspy.
//  · Landing: the section's real top, offset by its CSS scroll-margin-top (= the sticky header's height, global.css).
//  · While an anchor scroll travels, the step-snap gate and its native mandatory snapping are suspended: crossing the Work /
//    Services tracks must not retarget the scroll to one of their stops (that dropped About onto the Services list).
//    The user taking over (wheel, touch, key) ends the suspension at once; the layout may still settle while we travel (fonts,
//    lazy media), so at the end the landing is re-aimed instead of trusting the position computed at click time.
//  · Direct entry (`/#about`): the browser's own fragment scroll runs before the pinned tracks and media have their final
//    height, so once the page has loaded the same landing runs (instant).
//  · Scrollspy: the nav link of the section under the header gets aria-current="location" (styled like the current page).
import { suspendStepSnap } from './step-snap';
import { ANCHOR_IDS } from '../i18n/routes';

// Spanish links carry Spanish hashes (/es/#servicios); the DOM ids stay English (#services): resolve the alias first.
const byHash = (hash: string) => {
  const h = decodeURIComponent(hash.replace(/^#/, ''));
  return document.getElementById(h) ?? document.getElementById(ANCHOR_IDS[h] ?? h);
};

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const marginTop = (el: HTMLElement) => parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
const landing = (el: HTMLElement) => Math.max(0, el.getBoundingClientRect().top + scrollY - marginTop(el));

let stop: (() => void) | null = null;

export function scrollToAnchor(el: HTMLElement, smooth = true) {
  stop?.();
  const animate = smooth && !reduced();
  suspendStepSnap(true);
  let done = false, retries = 0, timer = 0;
  const cleanup = () => {
    removeEventListener('scrollend', onEnd);
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => removeEventListener(t, end));
    clearTimeout(timer);
    stop = null;
  };
  const end = () => { if (done) return; done = true; cleanup(); suspendStepSnap(false); };
  const onEnd = () => {
    // Arrived: if the layout moved while travelling, aim again (instant) — at most twice.
    if (Math.abs(landing(el) - scrollY) > 3 && retries++ < 2) { scrollTo({ top: landing(el), behavior: 'instant' }); timer = window.setTimeout(end, 250); return; }
    end();
  };
  stop = () => { end(); };
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((t) => addEventListener(t, end, { passive: true, once: true }));
  const top = landing(el);
  if (Math.abs(top - scrollY) < 2) { timer = window.setTimeout(end, 50); return; }
  addEventListener('scrollend', onEnd);
  timer = window.setTimeout(onEnd, animate ? 3000 : 250); // safety net where `scrollend` is missing
  scrollTo({ top, behavior: animate ? 'smooth' : 'instant' });
}

export function initAnchorNav() {
  if (!document.querySelector('[data-site-header]')) return;

  // Same-page anchors (also `/#about` written from the home).
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.hash.length < 2) return;
    const el = byHash(url.hash);
    if (!el) return;
    e.preventDefault();
    history.replaceState(history.state, '', url.hash);
    scrollToAnchor(el);
  });

  // Direct entry with a fragment (skipped while the home intro holds the page).
  const hash = location.hash;
  if (hash.length > 1 && !document.documentElement.hasAttribute('data-intro')) {
    const land = () => {
      const el = byHash(hash);
      if (el) scrollToAnchor(el, false);
    };
    if (document.readyState === 'complete') land();
    else addEventListener('load', () => (document.fonts?.ready ?? Promise.resolve()).then(land), { once: true });
  }

  // Scrollspy.
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-site-header] .site-nav a[href^="#"], [data-menu] nav a[href^="#"]'));
  const sections = new Map<string, HTMLElement>();
  links.forEach((a) => { const el = byHash(a.hash); if (el) sections.set(a.hash, el); });
  if (!sections.size) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    const line = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 60) + 8;
    let active = '';
    sections.forEach((el, h) => { const r = el.getBoundingClientRect(); if (r.top <= line && r.bottom > line) active = h; });
    links.forEach((a) => (a.hash === active ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current')));
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  update();
}
