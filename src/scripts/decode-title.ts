// DecodeTitle driver (CLAUDE.md §22): every letter of a title shows random characters and resolves to the real one,
// left to right, in ~900 ms whatever the length. The real text never leaves the flow (it is only transparent while it
// decodes), so layout cannot shift: the scramble is an aria-hidden overlay whose glyphs are placed on the real
// letters' own rects (Range.getClientRects). Spaces and punctuation never scramble. One rAF loop drives every run.
import { afterIntro, prefersReducedMotion, watchOnce } from './reveal';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=?/';
const TOTAL = 900; // ms, first frame to last letter resolved
const HEAD = 180;  // ms before the first letter resolves
const TICK = 55;   // ms a random glyph is held before it changes

type Char = { el: HTMLElement; final: string; narrow: boolean; at: number; phase: number; k: number; done: boolean };
type Run = { host: HTMLElement; fx: HTMLElement; chars: Char[]; t0: number };

const runs = new Set<Run>();
let raf = 0;
const NARROW = 'iljtfrI1'; // same set, only its slim glyphs: used on slim letters (i, l, t, 1…) so the overlay never crowds its neighbours
const pick = (narrow: boolean) => { const g = narrow ? NARROW : GLYPHS; return g[(Math.random() * g.length) | 0]; };

function finish(r: Run) {
  runs.delete(r);
  r.fx.remove();
  r.host.dataset.decodeState = 'done';
}

function frame(now: number) {
  raf = 0;
  runs.forEach((r) => {
    const t = now - r.t0;
    let pending = false;
    for (const c of r.chars) {
      if (c.done) continue;
      if (t >= c.at) { c.el.textContent = c.final; c.el.classList.add('is-final'); c.done = true; continue; }
      pending = true;
      const k = Math.floor((t + c.phase) / TICK);
      if (k !== c.k) { c.k = k; c.el.textContent = pick(c.narrow); }
    }
    if (!pending) finish(r);
  });
  if (runs.size) raf = requestAnimationFrame(frame);
}

function build(host: HTMLElement): Run | null {
  const text = host.querySelector<HTMLElement>('.decode__t');
  if (!text) return null;
  const origin = host.getBoundingClientRect();
  const fx = document.createElement('span');
  fx.className = 'decode__fx';
  fx.setAttribute('aria-hidden', 'true');
  const spans: Array<{ el: HTMLElement; ch: string; narrow: boolean }> = [];
  const size = parseFloat(getComputedStyle(host).fontSize) || 16;
  const range = document.createRange();
  const walker = document.createTreeWalker(text, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode() as Text | null; n; n = walker.nextNode() as Text | null) {
    for (let i = 0; i < n.data.length; i++) {
      const ch = n.data[i];
      if (/\s/.test(ch)) continue;
      range.setStart(n, i);
      range.setEnd(n, i + 1);
      const rect = range.getClientRects()[0];
      if (!rect || !rect.width) continue;
      const el = document.createElement('span');
      el.className = 'decode__c';
      el.style.cssText = `left:${rect.left - origin.left}px;top:${rect.top - origin.top}px;width:${rect.width}px;height:${rect.height}px;line-height:${rect.height}px`;
      el.textContent = ch;
      if (!/[A-Za-z0-9]/.test(ch)) el.classList.add('is-final'); // punctuation never scrambles
      fx.append(el);
      spans.push({ el, ch, narrow: rect.width / size < 0.36 });
    }
  }
  if (!spans.length) return null;
  const words = spans.filter((s) => /[A-Za-z0-9]/.test(s.ch));
  const chars: Char[] = words.map((s, i) => {
    s.el.textContent = pick(s.narrow);
    return { el: s.el, final: s.ch, narrow: s.narrow, at: HEAD + ((TOTAL - HEAD) * i) / Math.max(1, words.length - 1), phase: Math.random() * TICK, k: -1, done: false };
  });
  host.append(fx);
  return { host, fx, chars, t0: performance.now() };
}

function start(host: HTMLElement) {
  if (host.dataset.decodeState === 'running' || host.dataset.decodeState === 'done') return;
  host.dataset.decodeState = 'running';
  host.dataset.decodeT0 = String(performance.now());
  const go = () => {
    const run = build(host);
    if (!run) { host.dataset.decodeState = 'done'; return; }
    runs.add(run);
    if (!raf) raf = requestAnimationFrame(frame);
  };
  document.fonts?.ready.then(go, go) ?? go();
}

const HERO_DELAY = 450; // ms after the curtain starts to rise: it hides the h1 for its first ~half, so the decode plays in view

/** Home h1: decodes once, HERO_DELAY after the intro curtain starts to rise (its real text stays painted under it, so LCP is
 *  untouched). No intro (reload, session already seen) or reduced motion: static — a later first paint would become the LCP. */
function initHero(el: HTMLElement) {
  const intro = document.querySelector<HTMLElement>('[data-home-intro]');
  if (!document.documentElement.hasAttribute('data-intro') || !intro) { el.dataset.decodeState = 'done'; return; }
  el.dataset.decodeState = 'pending';
  const onStart = (e: AnimationEvent) => {
    if (e.target !== intro || e.animationName !== 'home-intro-lift') return;
    intro.removeEventListener('animationstart', onStart);
    setTimeout(() => start(el), HERO_DELAY);
  };
  intro.addEventListener('animationstart', onStart);
}

/** Titles on the page decode once, when they enter the viewport (and never under the home intro curtain). */
export function initDecodeTitles() {
  const reduced = prefersReducedMotion();
  document.querySelectorAll<HTMLElement>('[data-decode]').forEach((el) => {
    if (reduced) { el.dataset.decodeState = 'done'; return; }
    if (el.dataset.decode === 'hero') { initHero(el); return; }
    el.dataset.decodeState = 'pending';
    if (el.closest('dialog')) return; // Project Detail overlay: replayed on open (replayDecode)
    watchOnce(el, { kind: 'decode', run: () => start(el), skip: () => { el.dataset.decodeState = 'done'; } });
  });
}

/** Plays the decode of every title inside `root` again (Project Detail overlay, each time it opens). */
export function replayDecode(root: ParentNode) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>('[data-decode]').forEach((el) => {
    runs.forEach((r) => { if (r.host === el) finish(r); });
    el.dataset.decodeState = 'pending';
    afterIntro(() => start(el));
  });
}
