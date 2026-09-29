// Pixelated image swap for the Selected Work stage. One <canvas>, one requestAnimationFrame that only exists
// while a transition runs (nothing loops when idle). The outgoing image pixelates in growing blocks (8 → 48 px),
// then the incoming one resolves from large blocks down to sharp — ≈ 550 ms in total.
import { easePrecise, clamp01 } from './easing';

const DURATION = 550;
const BLOCK_FROM = 8;
const BLOCK_MAX = 48;
const SWAP: [number, number] = [0.42, 0.58]; // cross-over window, around the coarsest point (k = 0.5)

export function createPixelTransition(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  const small = document.createElement('canvas');
  const sctx = small.getContext('2d');
  if (!ctx || !sctx) return null;

  let W = 0, H = 0, dpr = 1, raf = 0, run = 0;

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  };
  resize();
  new ResizeObserver(resize).observe(canvas);

  /** Draws `img` (contain-fit, centred) pixelated in `block`-px squares at `alpha`. */
  const draw = (img: HTMLImageElement, block: number, alpha: number) => {
    if (alpha <= 0.003 || !img.naturalWidth) return;
    const s = Math.min(W / img.naturalWidth, H / img.naturalHeight);
    const rw = img.naturalWidth * s, rh = img.naturalHeight * s;
    const rx = (W - rw) / 2, ry = (H - rh) / 2;
    const b = Math.max(1, Math.round(block));
    small.width = Math.ceil(W / b); small.height = Math.ceil(H / b);
    sctx.imageSmoothingEnabled = true;
    sctx.drawImage(img, rx / b, ry / b, rw / b, rh / b);
    ctx.globalAlpha = alpha;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, small.width, small.height, 0, 0, small.width * b, small.height * b);
    ctx.globalAlpha = 1;
  };

  const clear = () => { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); };

  /** Plays from → to; resolves when the canvas is clear again and `to` may be shown as a plain image. */
  const play = (from: HTMLImageElement | null, to: HTMLImageElement) => new Promise<void>((resolve) => {
    cancelAnimationFrame(raf);
    const id = ++run;
    const t0 = performance.now();
    const frame = (now: number) => {
      if (id !== run) return resolve();
      const k = clamp01((now - t0) / DURATION);
      const mix = clamp01((k - SWAP[0]) / (SWAP[1] - SWAP[0]));
      clear();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (from && mix < 1) draw(from, BLOCK_FROM + (BLOCK_MAX - BLOCK_FROM) * easePrecise(clamp01(k / 0.5)), 1 - mix);
      if (mix > 0) draw(to, BLOCK_MAX - (BLOCK_MAX - 1) * easePrecise(clamp01((k - 0.5) / 0.5)), mix);
      if (k >= 1) { clear(); return resolve(); }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  });

  /** Cancels a running transition and clears the canvas. */
  const stop = () => { run++; cancelAnimationFrame(raf); clear(); };

  return { play, stop };
}
