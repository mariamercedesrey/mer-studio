// Shared helpers for entrance motion (CLAUDE.md §22). Durations and easing come from the CSS tokens
// (--dur-*, --ease-enter); nothing here hardcodes a curve or a time.
import { easePrecise } from './easing';

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reads a duration token (e.g. --dur-count: 1200ms) in ms. */
export function cssMs(name: string, fallback: number) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (v.endsWith('ms')) return parseFloat(v);
  if (v.endsWith('s')) return parseFloat(v) * 1000;
  return fallback;
}

/** Runs `cb` the first time `el` is at least `threshold` visible, then stops watching. */
export function onceInView(el: Element, cb: () => void, threshold = 0.35) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); cb(); }
  }, { threshold });
  io.observe(el);
}

/** Runs `cb` once `el` is within `margin` of the viewport (default: one viewport ahead), so off-screen setup never competes with first paint. */
export function whenNear(el: Element, cb: () => void, margin = '100% 0px') {
  if (!('IntersectionObserver' in window)) { cb(); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); cb(); }
  }, { rootMargin: margin });
  io.observe(el);
}

/** Runs `cb` when the main thread is idle (falls back to a short timeout), so heavy setup is its own task. */
export function whenIdle(cb: () => void, timeout = 600) {
  if ('requestIdleCallback' in window) requestIdleCallback(() => cb(), { timeout });
  else setTimeout(cb, 1);
}

/** [data-reveal] elements get `.is-in` once, when they enter the viewport. CSS owns the transition. */
export function initEnterReveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (prefersReducedMotion()) { el.classList.add('is-in'); return; }
    onceInView(el, () => el.classList.add('is-in'), 0.3);
  });
}

/** 0 → 1 over `ms` with the entrance easing. Returns a cancel function. */
export function tween(ms: number, onFrame: (t: number) => void, onDone?: () => void) {
  let raf = 0;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / ms);
    onFrame(easePrecise(p));
    if (p < 1) raf = requestAnimationFrame(tick); else onDone?.();
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}
