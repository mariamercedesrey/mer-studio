// How it works — the headline's signature dot is the traveller (Mer, PR #7 review). Linked to scroll,
// it detaches from "Four steps, no surprises", drops onto the dashed path where step 01 begins and
// travels it to the end. Each step is marked [data-reached] once the dot passes its number; state
// only, CSS owns the visuals. Desktop only (the path is hidden below 1200px). Under
// prefers-reduced-motion nothing runs: the dot stays on the title and every step stays visible.
import { clamp01 } from './easing';

const DROP = 0.25; // share of the scroll range spent falling from the title onto the path

export function initHiwTimeline() {
  const section = document.querySelector<HTMLElement>('[data-hiw-timeline]');
  const track = section?.querySelector<HTMLElement>('.hiw__path');
  const svg = track?.querySelector<SVGSVGElement>('svg');
  const path = svg?.querySelector<SVGPathElement>('path');
  const dot = section?.querySelector<HTMLElement>('[data-motion="scroll-path"]');
  if (!section || !track || !svg || !path || !dot) return;
  const steps = Array.from(section.querySelectorAll<HTMLElement>('.hiw__step'));
  const nums = steps.map((s) => s.querySelector<HTMLElement>('.hiw__num') ?? s);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1200px)');
  const view = svg.viewBox.baseVal;
  const length = path.getTotalLength();
  let stepX: number[] = [];
  let home = { x: 0, y: 0 }; // dot centre on the title, relative to the track, untransformed
  let landLen = 0; // path length where the dot lands (under step 01's number)
  let width = 0, height = 0;
  let frame = 0;
  let active = false;

  // The path is drawn stretched (preserveAspectRatio="none") and flipped vertically.
  const pointAt = (len: number) => {
    const pt = path.getPointAtLength(len);
    return { x: (pt.x / view.width) * width, y: height - (pt.y / view.height) * height };
  };

  // The path runs left to right, so its x grows with length: binary search the landing point.
  const lengthAtX = (x: number) => {
    let lo = 0, hi = length;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (pointAt(mid).x < x) lo = mid; else hi = mid;
    }
    return hi;
  };

  const measure = () => {
    dot.style.transform = '';
    const t = track.getBoundingClientRect();
    const d = dot.getBoundingClientRect();
    width = t.width; height = t.height;
    home = { x: d.left + d.width / 2 - t.left, y: d.top + d.height / 2 - t.top };
    stepX = nums.map((n) => n.getBoundingClientRect().left - t.left);
    landLen = lengthAtX(stepX[0] ?? 0);
  };

  const update = () => {
    frame = 0;
    const t = track.getBoundingClientRect();
    const vh = window.innerHeight;
    // Starts as the path's centre rises past 95 % of the viewport, ends at 25 %.
    const s = clamp01((vh * 0.95 - (t.top + t.height / 2)) / (vh * 0.7));
    let x: number, y: number;
    if (s < DROP) {
      // Detach and fall: steady horizontal travel, accelerating vertical drop.
      const k = s / DROP;
      const land = pointAt(landLen);
      x = home.x + (land.x - home.x) * k;
      y = home.y + (land.y - home.y) * k * k;
    } else {
      ({ x, y } = pointAt(landLen + ((s - DROP) / (1 - DROP)) * (length - landLen)));
    }
    dot.style.transform = s > 0 ? `translate(${(x - home.x).toFixed(2)}px, ${(y - home.y).toFixed(2)}px)` : '';
    steps.forEach((el, i) => el.toggleAttribute('data-reached', s >= DROP && x >= stepX[i] - 0.5));
  };
  const schedule = () => { if (active && !frame) frame = requestAnimationFrame(update); };

  const setMode = () => {
    active = !reduce.matches && desktop.matches;
    section.toggleAttribute('data-timeline', active);
    dot.style.transform = '';
    if (!active) {
      steps.forEach((s) => s.removeAttribute('data-reached'));
      return;
    }
    measure();
    update();
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', () => { if (active) { measure(); schedule(); } });
  reduce.addEventListener('change', setMode);
  desktop.addEventListener('change', setMode);
  // The title's line breaks (and so the dot's home) depend on the web font.
  document.fonts.ready.then(() => { if (active) { measure(); update(); } });
  setMode();
}
