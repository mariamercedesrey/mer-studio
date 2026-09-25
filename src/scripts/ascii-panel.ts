// How it works — ASCII panel drawn as live glyphs on a canvas (Mer's brief, motion PR).
// · Hidden until the panel enters the viewport, then it appears at once and the glyphs assemble.
// · Scroll: the further the panel travels up, the more glyphs fall out of it; scrolling back re-forms them.
//   Fall is a pure function of scroll position, so it is exactly reversible.
// · Fine pointer only: glyphs near the cursor are pushed away and spring back.
// · Split-flap (Mer, PR #7 review): like an airport departures board, glyphs roll through other
//   characters while they fly in, then short runs along a row keep flipping for as long as it is on screen.
// · prefers-reduced-motion / no canvas: never initialised, the static <picture> stays (CSS handles it).
// The loop only runs while the panel is on screen.
import { ASCII_ROWS, ASCII_GEOMETRY as G } from '../data/how-it-works-ascii';
import { easePrecise, clamp01 } from './easing';

const ASSEMBLE_MS = 900; // per glyph
const STAGGER_MS = 450; // spread of glyph start times
const FALL_WINDOW = 0.22; // share of scroll progress a single glyph takes to fall
const POINTER_RADIUS = 150; // asset px (≈ 50 CSS px on desktop)
const POINTER_FORCE = 14000;
const SPRING = 140;
const DAMPING = 16;
const FLAP_MS = 65; // one character change
const FLAP_STAGGER_MS = 35; // left-to-right delay inside a run
const RUN_EVERY_MS = 280; // a new run starts this often

interface Glyph {
  ch: string;
  row: number;
  hx: number; hy: number; // home (baseline origin), asset px
  sx: number; sy: number; // assembly start
  delay: number;
  t: number; // scroll progress at which it starts to fall
  drop: number; drift: number; spin: number;
  ox: number; oy: number; vx: number; vy: number; // pointer displacement
  shown: string; // character on the flap right now
  step: number; // last flap step drawn
  flipAt: number; flips: number; // current run: start time (ms) and number of flaps before landing
}

// Deterministic PRNG so the scatter is identical on every visit.
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGlyphs(): Glyph[] {
  const rand = rng(7);
  const last = ASCII_ROWS.length - 1;
  const glyphs: Glyph[] = [];
  ASCII_ROWS.forEach((line, row) => {
    [...line].forEach((ch, col) => {
      if (ch === ' ') return;
      const hx = G.x0 + G.pitch * col;
      const hy = G.baseline0 + G.lineHeight * row;
      glyphs.push({
        ch, row, hx, hy,
        sx: rand() * G.width, sy: G.fontSize + rand() * (G.height - G.fontSize),
        delay: rand() * STAGGER_MS,
        // Lower rows go first, with enough noise that it reads as crumbling, not as a wipe.
        t: (1 - FALL_WINDOW) * (0.55 * rand() + 0.45 * (1 - row / last)),
        drop: G.height - hy + G.fontSize * (1.5 + rand() * 4),
        drift: (rand() - 0.5) * 160,
        spin: (rand() - 0.5) * 1.6,
        ox: 0, oy: 0, vx: 0, vy: 0,
        shown: ch, step: -1, flipAt: 0, flips: 0,
      });
    });
  });
  return glyphs;
}

export function initAsciiPanel() {
  const root = document.querySelector<HTMLElement>('[data-ascii-panel]');
  const canvas = root?.querySelector('canvas');
  if (!root || !canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) { root.dataset.ascii = 'fallback'; return; }

  const styles = getComputedStyle(root);
  const ink = styles.getPropertyValue('--ascii-ink').trim() || '#cacbd1';
  const family = styles.getPropertyValue('--font-technical').trim() || 'monospace';
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const glyphs = buildGlyphs();
  let scale = 1, offX = 0, offY = 0, dpr = 1;
  let cssW = 0, cssH = 0;
  let revealAt = -1; // ms timestamp, -1 = not revealed yet
  let fall = 0;
  let visible = false;
  let pointer: { x: number; y: number } | null = null;
  let frame = 0;
  let last = 0;
  let fontReady = false;
  let nextRun = 0;

  // Glyph atlas: each distinct character pre-rendered once per size, then blitted.
  const chars = [...new Set(glyphs.map((g) => g.ch))];
  const atlas = document.createElement('canvas');
  const actx = atlas.getContext('2d')!;
  let cellW = 0, cellH = 0, ascent = 0;
  const slot = new Map(chars.map((c, i) => [c, i]));
  const randomChar = () => chars[(Math.random() * chars.length) | 0];

  // A run: a few neighbouring glyphs on one row (glyphs are stored row by row) flip left to right.
  function startRun(now: number) {
    const len = 3 + ((Math.random() * 8) | 0);
    const from = (Math.random() * glyphs.length) | 0;
    const row = glyphs[from].row;
    for (let j = 0; j < len; j++) {
      const g = glyphs[from + j];
      if (!g || g.row !== row) break;
      g.flipAt = now + j * FLAP_STAGGER_MS;
      g.flips = 4 + ((Math.random() * 6) | 0);
      g.step = -1;
    }
  }

  // Updates g.shown and returns the flap's vertical scale (1 = flat, at rest).
  function flap(g: Glyph, now: number, assembling: boolean) {
    const t = assembling ? now - revealAt + g.delay * 3 : now - g.flipAt;
    if (!assembling && (g.flips === 0 || t < 0)) return 1;
    const step = Math.floor(t / FLAP_MS);
    if (!assembling && step >= g.flips) { g.flips = 0; g.shown = g.ch; return 1; }
    if (step !== g.step) { g.step = step; g.shown = randomChar(); }
    return 0.2 + 0.8 * easePrecise((t % FLAP_MS) / FLAP_MS);
  }

  function buildAtlas() {
    const px = G.fontSize * scale * dpr;
    cellW = Math.ceil(G.pitch * scale * dpr) + 4;
    cellH = Math.ceil(px * 1.4) + 4;
    ascent = Math.ceil(px * 1.05) + 2;
    atlas.width = cellW * chars.length;
    atlas.height = cellH;
    actx.font = `400 ${px}px ${family}`;
    actx.fillStyle = ink;
    actx.textBaseline = 'alphabetic';
    chars.forEach((c, i) => actx.fillText(c, i * cellW + 2, ascent));
  }

  function resize() {
    const r = root!.getBoundingClientRect();
    cssW = r.width; cssH = r.height;
    if (!cssW || !cssH) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Same crop as the <img>'s object-fit: cover.
    scale = Math.max(cssW / G.width, cssH / G.height);
    offX = (cssW - G.width * scale) / 2;
    offY = (cssH - G.height * scale) / 2;
    canvas!.width = Math.round(cssW * dpr);
    canvas!.height = Math.round(cssH * dpr);
    if (fontReady) buildAtlas();
    draw(performance.now());
  }

  function readScroll() {
    const r = root!.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 while the panel's centre is below 35 % of the viewport, 1 once the panel has left the top.
    const start = vh * 0.35;
    const centre = r.top + r.height / 2;
    fall = clamp01((start - centre) / (start + r.height / 2));
  }

  // Returns true while anything is still in motion.
  function draw(now: number) {
    const w = canvas!.width, h = canvas!.height;
    ctx!.setTransform(1, 0, 0, 1, 0, 0);
    ctx!.clearRect(0, 0, w, h);
    if (revealAt < 0 || !fontReady) return false;

    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 0;
    last = now;
    // Ambient flaps keep the board alive for as long as it is on screen.
    const moving = true;
    const elapsed = now - revealAt;
    const px = pointer && finePointer.matches ? pointer : null;
    if (elapsed > ASSEMBLE_MS + STAGGER_MS && now >= nextRun) { startRun(now); nextRun = now + RUN_EVERY_MS; }
    const mid = G.fontSize * 0.36 * scale * dpr; // flap hinge: middle of the x-height

    for (const g of glyphs) {
      // Assembly: start → home.
      const a = easePrecise(clamp01((elapsed - g.delay) / ASSEMBLE_MS));
      if (a >= 1 && g.flips === 0) g.shown = g.ch;
      // Scroll fall, accelerating like gravity.
      const k = clamp01((fall - g.t) / FALL_WINDOW);
      const fx = g.hx + g.drift * k;
      const fy = g.hy + g.drop * k * k;
      // Pointer spring (applies to glyphs at rest in the panel).
      let ax = -SPRING * g.ox - DAMPING * g.vx;
      let ay = -SPRING * g.oy - DAMPING * g.vy;
      if (px && k < 1) {
        const dx = fx + g.ox - px.x, dy = fy - G.fontSize * 0.35 + g.oy - px.y;
        const d = Math.hypot(dx, dy);
        if (d < POINTER_RADIUS && d > 0.01) {
          const f = (1 - d / POINTER_RADIUS) ** 2 * POINTER_FORCE;
          ax += (dx / d) * f; ay += (dy / d) * f;
        }
      }
      g.vx += ax * dt; g.vy += ay * dt;
      g.ox += g.vx * dt; g.oy += g.vy * dt;
      // Settled = no velocity and back home: snap to rest (unless the cursor is holding it away).
      if (!px && Math.abs(g.vx) + Math.abs(g.vy) < 0.5 && Math.abs(g.ox) + Math.abs(g.oy) < 0.05) {
        g.ox = g.oy = g.vx = g.vy = 0;
      }

      const x = g.sx + (fx + g.ox - g.sx) * a;
      const y = g.sy + (fy + g.oy - g.sy) * a;
      if (y - G.fontSize > G.height + G.fontSize) continue; // fallen out of the panel
      const sy = flap(g, now, a < 1);
      const i = slot.get(g.shown)!;
      // Rotation (fall) × vertical squash (flap) about the glyph's hinge line.
      const rot = g.spin * k;
      const c = Math.cos(rot), sn = Math.sin(rot);
      const bx = (offX + x * scale) * dpr, by = (offY + y * scale) * dpr;
      ctx!.setTransform(c, sn, -sn * sy, c * sy, bx + sn * mid, by - c * mid);
      ctx!.drawImage(atlas, i * cellW, 0, cellW, cellH, -2, mid - ascent, cellW, cellH);
    }
    return moving;
  }

  function tick(now: number) {
    frame = 0;
    if (draw(now) && visible) frame = requestAnimationFrame(tick);
    else last = 0;
  }
  const schedule = () => { if (!frame && visible) frame = requestAnimationFrame(tick); };

  // Visibility: loop only while on screen; the first time the panel is well into view, reveal it.
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && revealAt < 0 && entry.intersectionRatio >= 0.35 && fontReady) {
      revealAt = performance.now();
      root.dataset.ascii = 'on';
    }
    if (visible) { readScroll(); schedule(); }
  }, { threshold: [0, 0.35] });

  window.addEventListener('scroll', () => { if (visible) { readScroll(); schedule(); } }, { passive: true });
  new ResizeObserver(resize).observe(root);

  root.addEventListener('pointermove', (e) => {
    if (!finePointer.matches || e.pointerType !== 'mouse') return;
    const r = canvas.getBoundingClientRect();
    pointer = { x: (e.clientX - r.left - offX) / scale, y: (e.clientY - r.top - offY) / scale };
    schedule();
  });
  root.addEventListener('pointerleave', () => { pointer = null; schedule(); });

  document.fonts.load(`400 ${G.fontSize}px ${family}`).catch(() => undefined).then(() => {
    fontReady = true;
    resize();
    io.observe(root);
  });
}
