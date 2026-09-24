// Signature dot drivers. The dot's markup never changes; a driver is chosen by data-motion.
// "hero-path": Figma 149:5173 timeline (32 s frame, motion in the first 9.757 % ≈ 3.12 s) played once on load.
// The Figma track ends at translate (75.485, −0.777), scale 1.034, rotate −0.057 rad; Mer's rest position is
// the static frame on the "m", so every track is normalised to end at identity (no transform) there.
// Lengths are converted to em of the "m" glyph (285.422 px in Figma) so the path scales with the mark.

const FIG_M = 285.422;
const END = 9.757; // % of the 32 s Figma timeline
const DURATION = (END / 100) * 32000;
const EASE = 'cubic-bezier(0.5, 0, 0.5, 1)';
const off = (pct: number) => pct / END;

// Figma translate keyframes [pct, x, y] (px).
const TRANSLATE: [number, number, number][] = [
  [0, -306.467, -5.663], [0.313, -286.576, 7.299], [0.625, -267.309, 14.584], [0.938, -246.168, -5.295],
  [1.25, -220.595, -76.275], [1.517, -192.207, -206.37], [1.563, -190.847, -204.425], [1.875, -182.102, -191.132],
  [2.188, -174.359, -177.839], [2.5, -167.682, -164.545], [2.813, -162.157, -151.252], [2.957, -160.024, -145.114],
  [3.125, -147.926, -156.026], [3.438, -126.54, -176.299], [3.75, -106.722, -196.571], [3.883, -98.808, -205.205],
  [4.063, -83.853, -182.042], [4.375, -59.468, -141.694], [4.453, -53.774, -131.673], [4.688, 15.312, -191.99],
  [4.8, 19.721, -195.752], [5.04, 19.509, -195.563], [5.242, 75.632, -0.698], [END, 75.485, -0.777],
];
const T_END = TRANSLATE[TRANSLATE.length - 1];

// Rotation (rad) with Figma's per-segment easing.
const ROTATE: [number, number, string][] = [[0, 0, EASE], [1.517, -0.7, EASE], [2.957, -0.057, 'linear'], [END, -0.057, 'linear']];
const R_END = -0.057;

// Height (px, of a 45.954 px dot) → squash on Y; uniform scale 1 → 1.034 eased over 0–4.704 %.
const HEIGHT: [number, number][] = [[0, 40.573], [1.517, 35.116], [2.957, 45.036], [END, 40.62]];
const H_END = 40.62;

function bezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sy = (t: number) => ((ay * t + by) * t + cy) * t;
  return (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const d = (3 * ax * t + 2 * bx) * t + cx;
      if (Math.abs(d) < 1e-6) break;
      t -= (sx(t) - x) / d;
    }
    return sy(Math.min(1, Math.max(0, t)));
  };
}
const ease = bezier(0.5, 0, 0.5, 1);

function lerpTrack(track: [number, number][], pct: number) {
  for (let i = 1; i < track.length; i++) {
    const [p0, v0] = track[i - 1];
    const [p1, v1] = track[i];
    if (pct <= p1) return v0 + (v1 - v0) * ((pct - p0) / (p1 - p0));
  }
  return track[track.length - 1][1];
}

function scaleFrames(): Keyframe[] {
  const frames: Keyframe[] = [];
  for (let i = 0; i <= 48; i++) {
    const pct = (END * i) / 48;
    const s = pct >= 4.704 ? 1.034 : 1 + 0.034 * ease(pct / 4.704);
    const h = lerpTrack(HEIGHT, pct);
    frames.push({ offset: off(pct), scale: `${s / 1.034} ${(s * (h / H_END)) / 1.034}` });
  }
  return frames;
}

function heroPath(el: HTMLElement) {
  const em = (px: number) => `${(px / FIG_M).toFixed(4)}em`;
  const timing: KeyframeAnimationOptions = { duration: DURATION, fill: 'backwards' };
  const anims = [
    el.animate(
      TRANSLATE.map(([p, x, y]) => ({ offset: off(p), translate: `${em(x - T_END[1])} ${em(y - T_END[2])}` })),
      timing,
    ),
    el.animate(
      ROTATE.map(([p, r, easing]) => ({ offset: off(p), rotate: `${r - R_END}rad`, easing })),
      timing,
    ),
    el.animate(scaleFrames(), timing),
  ];
  el.dataset.motionState = 'playing';
  Promise.all(anims.map((a) => a.finished)).then(
    () => { el.dataset.motionState = 'done'; },
    () => { el.dataset.motionState = 'done'; },
  );
}

const drivers: Record<string, (el: HTMLElement) => void> = { 'hero-path': heroPath };

export function initDotMotion() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll<HTMLElement>('[data-motion]').forEach((el) => {
    const driver = drivers[el.dataset.motion ?? ''];
    if (!driver) return;
    // Static on the "m" under reduced motion, without WAAPI individual transforms,
    // or when the page opens already scrolled past the dot.
    const offscreen = el.getBoundingClientRect().bottom < 0;
    if (reduce || offscreen || !('animate' in el) || !CSS.supports('translate', '1px')) {
      el.dataset.motionState = 'static';
      return;
    }
    document.fonts.ready.then(() => driver(el));
  });
}
