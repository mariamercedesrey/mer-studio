// Home intro gate: heavy ambient work (pixel rain) waits until the intro overlay is gone, so it never competes
// with the intro for the main thread. Runs `cb` at once when there is no intro (other pages, later visits,
// reduced motion, no JS). A timeout guards against the intro never signalling.
export const INTRO_DONE_EVENT = 'mer:intro-done';

export function afterIntro(cb: () => void, maxWait = 8000) {
  if (!document.documentElement.hasAttribute('data-intro')) { cb(); return; }
  let ran = false;
  const run = () => { if (ran) return; ran = true; removeEventListener(INTRO_DONE_EVENT, run); cb(); };
  addEventListener(INTRO_DONE_EVENT, run);
  setTimeout(run, maxWait);
}
