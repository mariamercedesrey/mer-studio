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
const wheelPx = (e: WheelEvent) => e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;

export function initStepSnap(track: HTMLElement, steps: number, stepPx: () => number) {
  let frame = 0;
  const travelled = () => -track.getBoundingClientRect().top;
  const inside = (t: number, step: number) => t > -step + 1 && t < steps * step - 1;

  // ── wheel gate ──
  let owned = false, entering = false, consumed = false, acc = 0, lastAt = -1e9, prevAbs = 0, lockUntil = 0;
  const canStep = (t: number, dir: number, step: number) => (dir > 0 && t >= -2 && t < (steps - 1) * step - 2) || (dir < 0 && t > 2 && t <= (steps - 1) * step + 2);
  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey || e.defaultPrevented || !canGate()) return;
    const dy = wheelPx(e);
    if (!dy || Math.abs(e.deltaX) > Math.abs(dy)) return;
    const now = e.timeStamp, abs = Math.abs(dy), dir = dy > 0 ? 1 : -1;
    const step = stepPx(), t = travelled();
    const idle = now - lastAt > GAP;
    const flick = !idle && now > lockUntil && abs >= 20 && abs > prevAbs * ACCEL; // momentum decays; a new flick grows again
    lastAt = now; prevAbs = abs;
    if (idle || flick) { owned = false; consumed = false; acc = 0; entering = !canStep(t, dir, step); }
    if (!owned) {
      if (!canStep(t, dir, step)) return;          // first/last stop, or outside: native scroll (free)
      owned = true;
    }
    e.preventDefault();                            // inertia tail of an owned gesture is swallowed
    if (consumed || now < lockUntil) return;
    acc += dy;
    if (Math.abs(acc) < MIN_DELTA) return;
    consumed = true;
    lockUntil = now + COOLDOWN;
    const clamp = (i: number) => Math.min(steps - 1, Math.max(0, i));
    // Momentum carried the page into the track (the wheel animation the browser had already accepted overshoots): rest on the
    // stop it entered through — the first coming from above, the last coming from below.
    const target = entering ? (dir > 0 ? 0 : steps - 1) : clamp(Math.round(t / step) + dir);
    const top = track.getBoundingClientRect().top + scrollY + target * step;
    scrollTo({ top, behavior: 'smooth' });
  };

  const set = (on: boolean) => {
    if (on === active.has(track)) return;
    if (on) { active.add(track); addEventListener('wheel', onWheel, { passive: false }); }
    else { active.delete(track); removeEventListener('wheel', onWheel); owned = consumed = false; }
    sync();
  };
  const update = () => { frame = 0; set(inside(travelled(), stepPx())); };
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
