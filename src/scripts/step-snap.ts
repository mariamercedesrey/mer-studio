// Turns native scroll-snap on (`html[data-step-snap]`, see global.css) only while the reader is between the two buffer
// stops of a stepped track, so the rest of the page keeps free scrolling. Nothing here intercepts or replaces scrolling:
// the browser does the snapping, one stop per gesture (`scroll-snap-stop: always` on the stops, see StepSnap.astro).
// Resting on a buffer stop means "released" (snap off): the first nudge into the track turns it on and the browser settles
// on the nearest stop. Keyboard steps (40 px) are shorter than half a step, so before an arrow/page/space key that heads
// into the track from a released buffer, the state is switched on ahead of the native scroll (state only — the key is
// never prevented). Wheel notches (100 px) and trackpad flicks travel more than half a step on their own.
const active = new Set<HTMLElement>();
const sync = () => document.documentElement.toggleAttribute('data-step-snap', active.size > 0);
const DOWN = new Set(['ArrowDown', 'PageDown', ' ']);
const UP = new Set(['ArrowUp', 'PageUp']);

export function initStepSnap(track: HTMLElement, steps: number, stepPx: () => number) {
  let frame = 0;
  const travelled = () => -track.getBoundingClientRect().top;
  const inside = (t: number, step: number) => t > -step + 1 && t < steps * step - 1;
  const set = (on: boolean) => {
    if (on === active.has(track)) return;
    on ? active.add(track) : active.delete(track);
    sync();
  };
  const update = () => { frame = 0; set(inside(travelled(), stepPx())); };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

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
