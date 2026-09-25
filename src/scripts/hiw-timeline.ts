// How it works — signature dot travelling the dashed path, linked to scroll (Mer's brief, motion PR).
// Each step is marked [data-reached] once the dot passes its number; state only, CSS owns the visuals.
// Desktop only (the path is hidden below 1200px). Under prefers-reduced-motion nothing runs:
// the dot rests at its Figma position and every step stays fully visible.
import { clamp01 } from './easing';

export function initHiwTimeline() {
  const section = document.querySelector<HTMLElement>('[data-hiw-timeline]');
  const track = section?.querySelector<HTMLElement>('.hiw__path');
  const svg = track?.querySelector<SVGSVGElement>('svg');
  const path = svg?.querySelector<SVGPathElement>('path');
  const dot = track?.querySelector<HTMLElement>('[data-motion="scroll-path"]');
  if (!section || !track || !svg || !path || !dot) return;
  const steps = Array.from(section.querySelectorAll<HTMLElement>('.hiw__step'));
  const nums = steps.map((s) => s.querySelector<HTMLElement>('.hiw__num') ?? s);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1200px)');
  const view = svg.viewBox.baseVal;
  const length = path.getTotalLength();
  let stepX: number[] = [];
  let frame = 0;
  let active = false;

  const measure = () => {
    const t = track.getBoundingClientRect();
    stepX = nums.map((n) => n.getBoundingClientRect().left - t.left);
  };

  const update = () => {
    frame = 0;
    const t = track.getBoundingClientRect();
    const vh = window.innerHeight;
    // Travel starts as the path's centre rises past 90 % of the viewport and ends at 30 %.
    const centre = t.top + t.height / 2;
    const p = clamp01((vh * 0.9 - centre) / (vh * 0.6));
    const pt = path.getPointAtLength(p * length);
    // The path is drawn stretched (preserveAspectRatio="none") and flipped vertically.
    const x = (pt.x / view.width) * t.width;
    const y = t.height - (pt.y / view.height) * t.height;
    dot.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) translate(-50%, -50%)`;
    steps.forEach((s, i) => s.toggleAttribute('data-reached', x >= stepX[i]));
  };
  const schedule = () => { if (active && !frame) frame = requestAnimationFrame(update); };

  const setMode = () => {
    active = !reduce.matches && desktop.matches;
    section.toggleAttribute('data-timeline', active);
    if (!active) {
      dot.style.transform = '';
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
  setMode();
}
