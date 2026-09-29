// Pixelated image swap for the Selected Work stage. One <canvas>, one requestAnimationFrame that only exists
// while a transition runs (nothing loops when idle). Discrete steps, no interpolation between sizes: the outgoing
// image goes 12 → 32 → 64 → 128 px blocks, the incoming one resolves 64 → 32 → 12 → sharp; every step is held.
const STEPS: Array<{ block: number; incoming: boolean }> = [
  { block: 12, incoming: false }, { block: 32, incoming: false }, { block: 64, incoming: false },
  { block: 128, incoming: false },
  { block: 64, incoming: true }, { block: 32, incoming: true }, { block: 12, incoming: true },
];
const STEP_MS = 95; // 7 steps ≈ 665 ms

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

  /** Draws `img` (contain-fit, centred) pixelated in `block`-px squares. */
  const draw = (img: HTMLImageElement, block: number) => {
    if (!img.naturalWidth) return;
    const s = Math.min(W / img.naturalWidth, H / img.naturalHeight);
    const rw = img.naturalWidth * s, rh = img.naturalHeight * s;
    const rx = (W - rw) / 2, ry = (H - rh) / 2;
    small.width = Math.ceil(W / block); small.height = Math.ceil(H / block);
    sctx.imageSmoothingEnabled = true;
    sctx.drawImage(img, rx / block, ry / block, rw / block, rh / block);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, small.width, small.height, 0, 0, small.width * block, small.height * block);
  };

  const clear = () => { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); };

  /** Plays from → to; resolves when the canvas is clear again and `to` may be shown as a plain image. */
  const play = (from: HTMLImageElement | null, to: HTMLImageElement) => new Promise<void>((resolve) => {
    cancelAnimationFrame(raf);
    const id = ++run;
    const t0 = performance.now();
    let drawn = -1;
    const frame = (now: number) => {
      if (id !== run) return resolve();
      const k = Math.floor((now - t0) / STEP_MS);
      if (k >= STEPS.length) { clear(); return resolve(); }
      if (k !== drawn) { // only repaint when the step changes
        drawn = k;
        clear();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const st = STEPS[k];
        const img = st.incoming ? to : from;
        if (img) draw(img, st.block);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  });

  /** Cancels a running transition and clears the canvas. */
  const stop = () => { run++; cancelAnimationFrame(raf); clear(); };

  return { play, stop };
}
