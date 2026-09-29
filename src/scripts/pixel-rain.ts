// Pixel banner ambient texture: grid-sized squares fall from the top like Lego bricks — they accelerate, land with a
// short squash (no bounce), rest a moment and fade out. Pieces fade with their distance to the statement, so the
// text always reads clean. A continuous, low-density loop on a single <canvas>; it sleeps when the banner is off
// screen or the tab is hidden, and doesn't run at all with prefers-reduced-motion (the mosaic stays static).
import { prefersReducedMotion } from './reveal';

type Piece = {
  x: number; y: number; vy: number; land: number;
  color: string; state: 'fall' | 'settle' | 'hold' | 'fade'; t: number; hold: number;
};

const SETTLE_MS = 140;   // short squash, not a bounce
const FADE_MS = 520;
const GRID_COLS = 169;   // cells across the mosaic (1436 px wide, 8.5 px pitch)
const YELLOW_ONE_IN = 40;

export function initPixelRain(root: HTMLElement) {
  const canvas = root.querySelector<HTMLCanvasElement>('canvas');
  const avoid = root.querySelector<HTMLElement>('[data-rain-avoid]');
  if (!canvas || !avoid || prefersReducedMotion()) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const css = getComputedStyle(document.documentElement);
  const token = (n: string, fb: string) => css.getPropertyValue(n).trim() || fb;
  // System greys (weighted toward the mid tones) + the signature-dot yellow, all from the tokens.
  const greys = ['--color-neutral-400', '--color-neutral-500', '--color-neutral-500', '--color-neutral-600', '--color-neutral-700', '--color-neutral-800']
    .map((n) => token(n, '#838383'));
  const yellow = token('--signature-dot', '#eebb0a');

  let W = 0, H = 0, cell = 8, cols = 1, dpr = 1;
  let avoidRect = { x: 0, y: 0, w: 0, h: 0 };
  let bandTop = 0; // pieces land in the open band under the mosaic's ragged edge
  let fadeRange = 90;
  let maxLive = 16;
  let gap: [number, number] = [220, 520];
  const pieces: Piece[] = [];
  const recentCols: number[] = [];

  const measure = () => {
    const r = root.getBoundingClientRect();
    W = r.width; H = r.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    const mobile = W < 768;
    // Desktop: exactly the mosaic's cell. Mobile: twice as big, half as many.
    cell = W / GRID_COLS * (mobile ? 2 : 1);
    cols = Math.max(1, Math.floor(W / cell));
    maxLive = mobile ? 8 : 16;
    gap = mobile ? [440, 1040] : [220, 520];
    fadeRange = cell * 7;
    const a = avoid.getBoundingClientRect();
    avoidRect = { x: a.left - r.left, y: a.top - r.top, w: a.width, h: a.height };
    const art = root.querySelector<HTMLElement>('.pixel-banner__art')?.getBoundingClientRect();
    bandTop = art ? art.top - r.top + art.height * 0.5 : 0;
    pieces.length = 0;
  };

  const pickCol = () => {
    let c = 0;
    for (let i = 0; i < 8; i++) {
      c = Math.floor(Math.random() * cols);
      if (!recentCols.includes(c)) break;   // controlled randomness: no obvious repeats
    }
    recentCols.push(c);
    if (recentCols.length > 6) recentCols.shift();
    return c;
  };

  const spawn = () => {
    // Land on the grid in the open band between the mosaic's lower half and just above the statement.
    const floor = Math.max(bandTop + cell, avoidRect.y - cell * 3);
    const r0 = Math.floor(bandTop / cell), r1 = Math.max(r0, Math.floor(floor / cell));
    const row = r0 + Math.floor(Math.random() * (r1 - r0 + 1));
    const color = Math.floor(Math.random() * YELLOW_ONE_IN) === 0 ? yellow : greys[Math.floor(Math.random() * greys.length)];
    pieces.push({ x: pickCol() * cell, y: -cell, vy: 0, land: row * cell, color, state: 'fall', t: 0, hold: 500 + Math.random() * 900 });
  };

  const proximity = (p: Piece) => {
    const dx = Math.max(avoidRect.x - (p.x + cell), 0, p.x - (avoidRect.x + avoidRect.w));
    const dy = Math.max(avoidRect.y - (p.y + cell), 0, p.y - (avoidRect.y + avoidRect.h));
    return Math.min(1, Math.hypot(dx, dy) / fadeRange);
  };

  let raf = 0, last = 0, nextSpawn = 0;
  let onScreen = false;

  const frame = (now: number) => {
    raf = 0;
    if (!onScreen || document.hidden) return;
    const dt = Math.min(now - last, 50);
    last = now;
    const g = H * 3; // px/s², a full-banner fall takes ≈ 0.8 s
    if (now >= nextSpawn && pieces.length < maxLive) {
      spawn();
      nextSpawn = now + gap[0] + Math.random() * (gap[1] - gap[0]);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i];
      let alpha = 1, sy = 1;
      if (p.state === 'fall') {
        p.vy += g * dt / 1000;
        p.y += p.vy * dt / 1000;
        if (p.y >= p.land) { p.y = p.land; p.state = 'settle'; p.t = 0; }
      } else if (p.state === 'settle') {
        p.t += dt;
        const k = Math.min(1, p.t / SETTLE_MS);
        sy = 1 - 0.22 * Math.sin(k * Math.PI);             // squash and back, once
        if (k >= 1) { p.state = 'hold'; p.t = 0; }
      } else if (p.state === 'hold') {
        p.t += dt;
        if (p.t >= p.hold) { p.state = 'fade'; p.t = 0; }
      } else {
        p.t += dt;
        alpha = 1 - Math.min(1, p.t / FADE_MS);
        if (alpha <= 0) { pieces.splice(i, 1); continue; }
      }
      alpha *= proximity(p);
      if (alpha <= 0.01) continue;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      const h = cell * sy;
      ctx.fillRect(Math.round(p.x), p.y + cell - h, Math.ceil(cell), Math.ceil(h)); // squash anchored to the floor
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(frame);
  };

  const wake = () => {
    if (raf || !onScreen || document.hidden) return;
    last = performance.now();
    nextSpawn = last + 150;
    raf = requestAnimationFrame(frame);
  };

  measure();
  let firstResize = true; // the observer reports once on observe(); that would re-measure for nothing
  new ResizeObserver(() => { if (firstResize) { firstResize = false; return; } measure(); }).observe(root);
  new IntersectionObserver((e) => { onScreen = e[0].isIntersecting; if (onScreen) wake(); else { cancelAnimationFrame(raf); raf = 0; } }).observe(root);
  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else wake(); });
}
