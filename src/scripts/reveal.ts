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

// ── One shared IntersectionObserver for every entrance (titles + [data-reveal]) ────────────────────────────
// Order inside a batch: decode titles first, then the rest of their section (LEAD later), siblings staggered.
const LEAD = 350;        // ms the section waits behind its title's decode ("one protagonist per screen")
const STAGGER = 70;      // ms between siblings entering together
const MAX_STAGGERED = 5; // siblings beyond the 5th share the last step

type Watch = { kind: 'decode' | 'reveal'; run: (delay: number) => void; skip: () => void };
const watched = new Map<Element, Watch>();
let io: IntersectionObserver | undefined;

/** Runs `fn` once the home intro curtain is gone (nothing plays underneath it). Immediately when there is none. */
const introQueue: Array<() => void> = [];
export function afterIntro(fn: () => void) {
  const root = document.documentElement;
  if (!root.hasAttribute('data-intro')) return fn();
  if (!introQueue.length) {
    const mo = new MutationObserver(() => {
      if (root.hasAttribute('data-intro')) return;
      mo.disconnect();
      introQueue.splice(0).forEach((f) => f());
    });
    mo.observe(root, { attributes: true, attributeFilter: ['data-intro'] });
  }
  introQueue.push(fn);
}

/** Time this element still has to wait behind the decode of its section's title. */
function sectionLead(el: Element) {
  const title = el.closest('section, article')?.querySelector<HTMLElement>('[data-decode]');
  const state = title?.dataset.decodeState;
  if (state === 'pending') return LEAD;
  if (state === 'running') return Math.max(0, LEAD - (performance.now() - Number(title!.dataset.decodeT0)));
  return 0;
}

function flush(targets: Element[]) {
  const ready = targets.filter((el) => watched.has(el));
  const passed = (el: Element) => el.getBoundingClientRect().bottom < 0; // scrolled past before it could play
  const take = (el: Element) => { const w = watched.get(el)!; watched.delete(el); io!.unobserve(el); return w; };
  for (const el of ready.filter((e) => watched.get(e)!.kind === 'decode')) {
    const w = take(el);
    passed(el) ? w.skip() : w.run(0);
  }
  const reveals = ready.filter((e) => watched.get(e)?.kind === 'reveal');
  const groups = new Map<Element | null, Element[]>();
  reveals.forEach((el) => { const g = groups.get(el.parentElement) ?? []; g.push(el); groups.set(el.parentElement, g); });
  groups.forEach((els) => {
    els.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    els.forEach((el, i) => {
      const lead = sectionLead(el);
      const w = take(el);
      passed(el) ? w.skip() : w.run(lead + Math.min(i, MAX_STAGGERED - 1) * STAGGER);
    });
  });
}

function watch(el: Element, w: Watch) {
  io ??= new IntersectionObserver((entries) => {
    const ready = entries.filter((e) => e.isIntersecting || e.boundingClientRect.bottom < 0).map((e) => e.target);
    if (ready.length) afterIntro(() => flush(ready));
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
  watched.set(el, w);
  io.observe(el);
}
export { watch as watchOnce };

/** [data-reveal] entrances. `rise` = fade + 16 px lift, once (CSS owns the transition, this only flips state);
 *  a bare [data-reveal] only gets `.is-in` (About card: its own CSS). Elements already on screen at load are never
 *  hidden (no flash, no LCP hit). Reduced motion / no JS: everything stays visible. */
export function initReveals() {
  const reduced = prefersReducedMotion();
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.closest('dialog')) return; // overlays are not part of the page flow
    if (el.closest('[data-pinned]')) return; // pinned Services reveals by step (services-stages.ts), not by viewport
    if (reduced) { el.classList.add('is-in'); return; }
    const rise = el.dataset.reveal === 'rise';
    if (rise && el.getBoundingClientRect().top < innerHeight) return;
    if (rise) el.dataset.rs = 'hidden';
    const show = (delay: number) => {
      el.classList.add('is-in');
      if (!rise) return;
      const clean = () => { delete el.dataset.rs; el.style.removeProperty('--rd'); };
      el.style.setProperty('--rd', `${delay}ms`);
      el.dataset.rs = 'in';
      el.addEventListener('transitionend', (e) => { if (e.target === el && (e as TransitionEvent).propertyName === 'opacity') clean(); });
      setTimeout(clean, delay + cssMs('--dur-slow', 600) + 200); // failsafe if transitionend never fires
    };
    watch(el, { kind: 'reveal', run: show, skip: () => { el.classList.add('is-in'); delete el.dataset.rs; } });
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
