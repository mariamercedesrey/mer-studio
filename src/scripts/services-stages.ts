// Services stepped sequence (desktop ≥1024, motion allowed). The section is a pinned track with one snap stop per step
// (StepSnap → CSS scroll-snap, see step-snap.ts). Here we only READ the scroll position: the nearest stop decides the
// stage, exposed as data-s2 / data-s3 / data-s4 on the section (CSS owns every transition):
//   1 Venn · 2 drops separate, core + rings · 3 axis + pills · 4 diagram closes, content revealed.
// The "continue" arrow scrolls to the next stop. No wheel/touch/keyboard handlers; scroll is never intercepted.
// Also announces the stage (`services:stage`) so the signature dot (services-active.ts) travels to the list only at stage 4.
import { initStepSnap } from './step-snap';
import { prefersReducedMotion } from './reveal';

const PINNED = '(min-width: 1024px)';
const STAGES = 4;

export function initServicesStages() {
  const root = document.querySelector<HTMLElement>('[data-services]');
  if (!root) return;
  const mq = matchMedia(PINNED);
  let teardown: (() => void) | null = null;
  const sync = () => {
    teardown?.();
    const on = mq.matches && !prefersReducedMotion();
    teardown = on ? setup(root) : release(root);
  };
  mq.addEventListener('change', sync);
  sync();
}

// Not pinned (mobile, reduced motion): the static stage 3, exactly what the markup ships.
function release(root: HTMLElement) {
  root.removeAttribute('data-pinned');
  root.setAttribute('data-s2', '');
  root.setAttribute('data-s3', '');
  root.removeAttribute('data-s4');
  root.dispatchEvent(new CustomEvent('services:stage', { detail: { stage: 0 } }));
  return null;
}

function setup(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('[data-svc-track]');
  const next = root.querySelector<HTMLAnchorElement>('[data-svc-next]');
  if (!track) return null;
  root.setAttribute('data-pinned', '');

  const unit = track.querySelector<HTMLElement>('[data-step-unit]');
  const stepPx = () => unit?.offsetHeight || innerHeight * 0.18;
  let stage = 0, frame = 0;

  const apply = (n: number) => {
    if (n === stage) return;
    stage = n;
    root.toggleAttribute('data-s2', n >= 2);
    root.toggleAttribute('data-s3', n >= 3);
    root.toggleAttribute('data-s4', n >= 4);
    root.dispatchEvent(new CustomEvent('services:stage', { detail: { stage: n } }));
  };
  const update = () => {
    frame = 0;
    const travelled = -track.getBoundingClientRect().top;
    const step = stepPx();
    // Stages 1–3: nearest stop. Stage 4 (content) only once the last stop is reached: the pin has released, so the content
    // and the heading move together from there on — the dot's target row can't drift under it.
    const last = travelled >= (STAGES - 1) * step - 8;
    apply(last ? STAGES : Math.min(STAGES - 1, Math.max(0, Math.round(travelled / step)) + 1));
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  const goTo = (n: number) => {
    const top = track.getBoundingClientRect().top + scrollY + (n - 1) * stepPx();
    scrollTo({ top, behavior: 'smooth' });
  };
  const onNext = (e: Event) => { e.preventDefault(); goTo(Math.min(STAGES, stage + 1)); };
  next?.addEventListener('click', onNext);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  // Stage 3 (stop 2) is the hold: the full diagram waits for a new, deliberate gesture (≥ 800 ms of rest, 2× delta to exit).
  const stopSnap = initStepSnap(track, STAGES, stepPx, { hold: { at: STAGES - 2, dwell: 800, exitFactor: 2 }, flickMin: 40 });

  update();
  return () => {
    next?.removeEventListener('click', onNext);
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    cancelAnimationFrame(frame);
    stopSnap();
  };
}
