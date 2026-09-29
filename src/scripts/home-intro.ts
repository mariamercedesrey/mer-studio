// Home intro: the CSS timeline plays by itself and the curtain lifts after a 3 s hold. Any input during it
// (wheel, touch, click, key) lifts it now instead: entrances still in progress complete at once and the curtain
// starts at its normal speed. Listeners are passive and never preventDefault, so scrolling is never blocked;
// the overlay is removed when the curtain finishes.
import { INTRO_DONE_EVENT } from './intro-gate';

export function initHomeIntro() {
  const el = document.querySelector<HTMLElement>('[data-home-intro]');
  if (!el) return;
  const root = document.documentElement;
  if (!root.hasAttribute('data-intro')) { el.remove(); return; }

  const done = () => { root.removeAttribute('data-intro'); el.remove(); dispatchEvent(new Event(INTRO_DONE_EVENT)); };
  const anims = el.getAnimations({ subtree: true });
  const curtain = anims.find((a) => (a as CSSAnimation).animationName === 'home-intro-lift');
  if (!curtain) { done(); return; }
  curtain.finished.then(done, done);

  const events = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
  const stop = () => events.forEach((t) => removeEventListener(t, lift));
  function lift() {
    stop();
    anims.forEach((a) => { if (a !== curtain) a.finish(); });
    const delay = Number(curtain!.effect?.getTiming().delay ?? 0);
    if (Number(curtain!.currentTime ?? 0) < delay) curtain!.currentTime = delay;
  }
  events.forEach((t) => addEventListener(t, lift, { passive: true }));
  curtain.finished.then(stop, stop);
}
