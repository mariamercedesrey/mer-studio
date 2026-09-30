// Stepped tracks (Services, Selected Work; desktop ≥1024, motion allowed).
//
// 1) Native scroll-snap (`html[data-step-snap]`, see global.css) is switched on only while the reader is between the two
//    buffer stops of a track, so the rest of the page keeps free scrolling. It handles keyboard, touch and slow wheels.
// 2) A small wheel GATE (the exception to CLAUDE.md §22, approved by Mer) makes ONE wheel/trackpad gesture = ONE step:
//    native snapping alone lets a Mac trackpad's inertia run through 2–3 stops. The gate only exists while the reader is
//    inside a track (the listener is attached/removed with the snap state), and:
//      · a gesture ends when no wheel event arrives for GAP ms; its inertia tail is swallowed (preventDefault) until then;
//      · a step needs MIN_DELTA px of accumulated delta, then COOLDOWN ms during which nothing advances; inside the
//        cooldown a NEW flick is only recognised when the delta grows again (momentum decays, a new gesture does not);
//      · it never acts on the first stop going up nor on the last one going down: the gesture passes through natively
//        (leaving the track, in both directions), and a gesture that carries momentum INTO the track stops on the nearest stop;
//      · a track may declare a HOLD stop (`opts.hold`, Services stage 3): the full diagram stays until a NEW, deliberate gesture —
//        one that started after `dwell` ms of rest on the stop and, going down (the exit), accumulated `exitFactor` × MIN_DELTA;
//      · keyboard, touch, mobile (<1024), reduced motion, ctrl+wheel (zoom), horizontal wheels and open dialogs are untouched;
//      · the step itself is a plain smooth scroll to the stop (`scrollTo`), so the scroll is never blocked or slowed.
const GAP = 90;         // ms without wheel events = the gesture (and its inertia) is over
const COOLDOWN = 700;   // ms after a step before another can start
const MIN_DELTA = 12;   // px accumulated before a gesture counts as intent
const ACCEL = 1.6;      // a delta this many times the previous one (after the cooldown) is a new flick

const active = new Set<HTMLElement>();
const sync = () => document.documentElement.toggleAttribute('data-step-snap', active.size > 0);
const DOWN = new Set(['ArrowDown', 'PageDown', ' ']);
const UP = new Set(['ArrowUp', 'PageUp']);
const canGate = () => matchMedia('(min-width: 1024px)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches && !document.querySelector('dialog[open]');
// Passive, always-on recorder of the wheel stream (timestamps only, never prevents anything): the gate must know whether a
// gesture was already running before it reached the track (momentum carried in), so `prev*` is the event BEFORE this one.
const wheelSeen = { prev: -1e9, prevAbs: 0, last: -1e9, lastAbs: 0 };
let recording = false;
const wheelPx = (e: WheelEvent) => e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;

const record = (e: WheelEvent) => {
  wheelSeen.prev = wheelSeen.last; wheelSeen.prevAbs = wheelSeen.lastAbs;
  wheelSeen.last = e.timeStamp; wheelSeen.lastAbs = Math.abs(wheelPx(e));
};

export interface StepSnapOptions {
  /** A stop that must rest before it is left: `at` = stop index; leaving it needs a gesture that began ≥ `dwell` ms after arrival. */
  hold?: { at: number; dwell: number; exitFactor: number };
}

export function initStepSnap(track: HTMLElement, steps: number, stepPx: () => number, opts: StepSnapOptions = {}) {
  if (!recording) { recording = true; addEventListener('wheel', record, { passive: true }); } // registered first: runs before any gate
  let frame = 0;
  const travelled = () => -track.getBoundingClientRect().top;
  const inside = (t: number, step: number) => t > -step + 1 && t < steps * step - 1;

  // ── wheel gate ──
  let owned = false, entering = false, consumed = false, acc = 0, lockUntil = 0, gestureStart = 0, holdSince = 0;
  const hold = opts.hold;
  // The buffer stop before the first step is part of the gate going down: the first gesture from it lands on stop 0 (step 1,
  // fixed) and its inertia is swallowed, so it can never carry the page on to step 2.
  const canStep = (t: number, dir: number, step: number) => (dir > 0 && t > -step + 1 && t < (steps - 1) * step - 2) || (dir < 0 && t > 2 && t <= (steps - 1) * step + 2);
  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey || e.defaultPrevented || !canGate()) return;
    const dy = wheelPx(e);
    if (!dy || Math.abs(e.deltaX) > Math.abs(dy)) return;
    const now = e.timeStamp, abs = Math.abs(dy), dir = dy > 0 ? 1 : -1;
    const step = stepPx(), t = travelled();
    const idle = now - wheelSeen.prev > GAP;
    const flick = !idle && now > lockUntil && abs >= 20 && abs > wheelSeen.prevAbs * ACCEL; // momentum decays; a new flick grows again
    const fresh = idle || flick;
    if (fresh) { owned = false; consumed = false; acc = 0; entering = false; gestureStart = now; }
    if (!owned) {
      if (!canStep(t, dir, step)) return;          // first/last stop, or outside: native scroll (free)
      owned = true;
      entering = !fresh;                           // the gesture was already running before it reached a stop: momentum carried it in
    }
    e.preventDefault();                            // inertia tail of an owned gesture is swallowed
    if (consumed || now < lockUntil) return;
    acc += dy;
    let need = MIN_DELTA;
    if (hold && Math.abs(t - hold.at * step) < 3) {
      // Resting on the hold stop: only a gesture that began after the dwell counts; the exit (down) also asks for more delta.
      if (!holdSince || gestureStart < holdSince + hold.dwell) { consumed = true; return; }
      if (dir > 0) need = MIN_DELTA * hold.exitFactor;
    }
    if (Math.abs(acc) < need) return;
    consumed = true;
    lockUntil = now + COOLDOWN;
    const clamp = (i: number) => Math.min(steps - 1, Math.max(0, i));
    // Momentum carried the page into the track (the wheel animation the browser had already accepted overshoots): rest on the
    // stop it entered through — the first coming from above, the last coming from below.
    const target = entering ? (dir > 0 ? 0 : steps - 1) : clamp((t < 0 ? -1 : Math.round(t / step)) + dir);
    const top = track.getBoundingClientRect().top + scrollY + target * step;
    scrollTo({ top, behavior: 'smooth' });
  };

  const set = (on: boolean) => {
    if (on === active.has(track)) return;
    if (on) { active.add(track); addEventListener('wheel', onWheel, { passive: false }); }
    else { active.delete(track); removeEventListener('wheel', onWheel); owned = consumed = false; }
    sync();
  };
  const update = () => {
    frame = 0;
    const t = travelled(), step = stepPx();
    set(inside(t, step));
    if (hold) { // when the page settled on the hold stop (dwell counts from here)
      const on = Math.abs(t - hold.at * step) < 3;
      if (on && !holdSince) holdSince = performance.now();
      else if (!on) holdSince = 0;
    }
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  // Keyboard steps (40 px) are shorter than half a step: before a key that heads into the track from a released buffer,
  // native snapping is switched on ahead of the native scroll (state only — the key is never prevented).
  const onKey = (e: KeyboardEvent) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const t = e.target as HTMLElement | null;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const step = stepPx(), pos = travelled();
    const down = DOWN.has(e.key) && !e.shiftKey, up = UP.has(e.key) || (e.key === ' ' && e.shiftKey);
    if ((down && pos <= -step + 1 && pos > -2 * step) || (up && pos >= steps * step - 1 && pos < (steps + 1) * step)) set(true);
  };

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('keydown', onKey);
  update();
  return () => {
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    removeEventListener('keydown', onKey);
    cancelAnimationFrame(frame);
    set(false);
  };
}
