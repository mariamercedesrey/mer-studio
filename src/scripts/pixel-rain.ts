// Pixel rain engine — one canvas, one requestAnimationFrame, grid-sized squares. Two presets share it:
//  · 'banner' (PixelBanner): squares fall like Lego bricks — accelerate, land with a short squash (no bounce),
//    rest a moment and fade out; they fade with their distance to the statement so the text always reads clean.
//  · 'index'  (Selected Work index block): squares fall one by one down their column, stepping cell by cell, and
//    turn transparent with the distance travelled until they vanish ("code rain").
// Continuous, low-density loop. It sleeps when the root is off screen or the tab is hidden, and doesn't run at all
// with prefers-reduced-motion (the static mosaic underneath stays).
import { prefersReducedMotion } from './reveal';

type Piece = {
  x: number; y: number; y0: number; vy: number; land: number; fadeLen: number;
  color: string; state: 'fall' | 'settle' | 'hold' | 'fade'; t: number; hold: number;
};

export type RainOptions = {
  mode: 'land' | 'trail';
  direction: 'down' | 'up';
  /** Cell size in px for a root of W × H. */
  cell: (W: number, H: number) => number;
  /** Greys from the system tokens (repeat a token to weight it). */
  palette: string[];
  accent?: { token: string; fallback: string; oneIn: number };
  maxLive: (W: number) => number;
  gap: (W: number) => [number, number];
  /** trail mode: rows travelled per second. */
  speed?: number;
  /** land mode: squares fade near this element and land in the band under `band`'s upper half. */
  avoid?: HTMLElement;
  band?: HTMLElement;
};

const SETTLE_MS = 140;   // short squash, not a bounce
const FADE_MS = 520;
const BANNER_COLS = 169; // cells across the mosaic (1436 px wide, 8.5 px pitch)

const bannerPreset = (root: HTMLElement): RainOptions | null => {
  const avoid = root.querySelector<HTMLElement>('[data-rain-avoid]');
  if (!avoid) return null;
  return {
    mode: 'land',
    direction: 'down',
    cell: (W) => W / BANNER_COLS * (W < 768 ? 2 : 1), // desktop: exactly the mosaic's cell; mobile: twice as big
    palette: ['--color-neutral-400', '--color-neutral-500', '--color-neutral-500', '--color-neutral-600', '--color-neutral-700', '--color-neutral-800'],
    accent: { token: '--signature-dot', fallback: '#eebb0a', oneIn: 40 },
    maxLive: (W) => (W < 768 ? 8 : 16),
    gap: (W) => (W < 768 ? [440, 1040] : [220, 520]),
    avoid,
    band: root.querySelector<HTMLElement>('.pixel-banner__art') ?? undefined,
  };
};

// Figma 2220:5787 — 230 × 144.6 block of ~9.6 px squares under the Selected Work index (24 × 15 cells).
const indexPreset = (): RainOptions => ({
  mode: 'trail',
  direction: 'down',
  cell: (W) => W / 24,
  palette: ['--color-neutral-600', '--color-neutral-600', '--color-neutral-700', '--color-neutral-700', '--color-neutral-800', '--color-neutral-500', '--color-neutral-400'],
  maxLive: () => 9,
  gap: () => [260, 620],
  speed: 11,
});

export function initPixelRain(root: HTMLElement, preset: 'banner' | 'index' = 'banner') {
  const canvas = root.querySelector<HTMLCanvasElement>('canvas');
  const opt = preset === 'index' ? indexPreset() : bannerPreset(root);
  if (!canvas || !opt || prefersReducedMotion()) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const css = getComputedStyle(document.documentElement);
  const token = (n: string, fb: string) => css.getPropertyValue(n).trim() || fb;
  const greys = opt.palette.map((n) => token(n, '#838383'));
  const accent = opt.accent ? token(opt.accent.token, opt.accent.fallback) : '';
  const down = opt.direction === 'down';

  let W = 0, H = 0, cell = 8, cols = 1, rows = 1, dpr = 1;
  let avoidRect = { x: 0, y: 0, w: 0, h: 0 };
  let bandTop = 0;
  let fadeRange = 90;
  let maxLive = 16;
  let gap: [number, number] = [220, 520];
  const pieces: Piece[] = [];
  const recentCols: number[] = [];

  const measure = () => {
    const r = root.getBoundingClientRect();
    W = r.width; H = r.height;
    if (!W || !H) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    cell = opt.cell(W, H);
    cols = Math.max(1, Math.floor(W / cell));
    rows = Math.max(1, Math.round(H / cell));
    maxLive = opt.maxLive(W);
    gap = opt.gap(W);
    fadeRange = cell * 7;
    if (opt.avoid) {
      const a = opt.avoid.getBoundingClientRect();
      avoidRect = { x: a.left - r.left, y: a.top - r.top, w: a.width, h: a.height };
    }
    if (opt.band) {
      const b = opt.band.getBoundingClientRect();
      bandTop = b.top - r.top + b.height * 0.5; // pieces land in the open band under the mosaic's ragged edge
    }
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
    const color = accent && Math.floor(Math.random() * opt.accent!.oneIn) === 0 ? accent : greys[Math.floor(Math.random() * greys.length)];
    const x = pickCol() * cell;
    const y0 = down ? -cell : H;
    if (opt.mode === 'trail') {
      // Fades over 55–95 % of the block's height, so most squares vanish before reaching the far edge.
      pieces.push({ x, y: y0, y0, vy: 0, land: 0, fadeLen: H * (0.55 + Math.random() * 0.4), color, state: 'fall', t: 0, hold: 0 });
      return;
    }
    // Land on the grid in the open band between the mosaic's lower half and just above the statement.
    const floor = Math.max(bandTop + cell, avoidRect.y - cell * 3);
    const r0 = Math.floor(bandTop / cell), r1 = Math.max(r0, Math.floor(floor / cell));
    const row = r0 + Math.floor(Math.random() * (r1 - r0 + 1));
    pieces.push({ x, y: y0, y0, vy: 0, land: row * cell, fadeLen: 0, color, state: 'fall', t: 0, hold: 500 + Math.random() * 900 });
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
    const g = H * 3; // land mode, px/s²: a full-banner fall takes ≈ 0.8 s
    if (now >= nextSpawn && pieces.length < maxLive) {
      spawn();
      nextSpawn = now + gap[0] + Math.random() * (gap[1] - gap[0]);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i];
      let alpha = 1, sy = 1;
      if (opt.mode === 'trail') {
        p.t += dt;
        const travelled = (opt.speed ?? 10) * cell * p.t / 1000;
        if (travelled >= p.fadeLen) { pieces.splice(i, 1); continue; }
        // Steps cell by cell (digital, not smooth) and turns transparent with the distance travelled.
        const step = Math.floor(travelled / cell) * cell;
        p.y = down ? p.y0 + step : p.y0 - step - cell;
        alpha = 1 - travelled / p.fadeLen;
      } else if (p.state === 'fall') {
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
      if (opt.avoid) alpha *= proximity(p);
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

  root.setAttribute('data-rain-live', '');
  measure();
  new ResizeObserver(() => { measure(); }).observe(root);
  new IntersectionObserver((e) => { onScreen = e[0].isIntersecting; if (onScreen) wake(); else { cancelAnimationFrame(raf); raf = 0; } }).observe(root);
  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else wake(); });
}
