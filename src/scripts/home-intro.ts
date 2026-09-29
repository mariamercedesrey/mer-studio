// Home intro: the CSS timeline plays by itself. Any input during it (wheel, touch, click, key) accelerates it —
// the tagline fades run faster and the curtain starts lifting now, 3× quicker. Listeners are passive and never
// preventDefault, so scrolling is never blocked; the overlay is removed when the curtain finishes.
const SPEEDUP = 3;

export function initHomeIntro() {
  const el = document.querySelector<HTMLElement>('[data-home-intro]');
  if (!el) return;
  const root = document.documentElement;
  if (!root.hasAttribute('data-intro')) { el.remove(); return; }

  const done = () => { root.removeAttribute('data-intro'); el.remove(); };
  const curtain = el.getAnimations().find((a) => (a as CSSAnimation).animationName === 'home-intro-lift');
  if (!curtain) { done(); return; }
  curtain.finished.then(done, done);

  const events = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
  const stop = () => events.forEach((t) => removeEventListener(t, accelerate));
  function accelerate() {
    stop();
    el!.getAnimations({ subtree: true }).forEach((a) => {
      if (a === curtain) {
        const delay = Number(a.effect?.getTiming().delay ?? 0);
        if (Number(a.currentTime ?? 0) < delay) a.currentTime = delay;
      }
      a.playbackRate = SPEEDUP;
    });
  }
  events.forEach((t) => addEventListener(t, accelerate, { passive: true }));
  curtain.finished.then(stop, stop);
}
