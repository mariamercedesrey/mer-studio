// Home intro: the CSS timeline plays by itself and the curtain lifts after a 1 s hold. While it is active the page does
// not scroll (html overflow hidden, see HomeIntro.astro): the first wheel / touch / key gesture only lifts the curtain
// and is consumed (preventDefault), and so is everything until the curtain is gone. This is the one sanctioned exception
// to "never block the scroll" (CLAUDE.md §22). When the curtain finishes the page is forced to the top and released.
// history.scrollRestoration is 'manual' only while the intro lasts, so a restored scroll position never shows under it.
const SCROLL_KEYS = new Set([' ', 'Spacebar', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End']);

export function initHomeIntro() {
  const el = document.querySelector<HTMLElement>('[data-home-intro]');
  if (!el) return;
  const root = document.documentElement;
  if (!root.hasAttribute('data-intro')) { el.remove(); return; }

  const prevRestoration = history.scrollRestoration;
  history.scrollRestoration = 'manual';
  scrollTo({ top: 0, left: 0, behavior: 'instant' });

  const events: Array<[string, EventListener, AddEventListenerOptions]> = [];
  const on = (type: string, fn: EventListener, opts: AddEventListenerOptions) => { addEventListener(type, fn, opts); events.push([type, fn, opts]); };

  const done = () => {
    events.forEach(([t, fn, o]) => removeEventListener(t, fn, o));
    root.removeAttribute('data-intro'); // releases the scroll lock
    el.remove();
    scrollTo({ top: 0, left: 0, behavior: 'instant' });
    history.scrollRestoration = prevRestoration;
  };
  const anims = el.getAnimations({ subtree: true });
  const curtain = anims.find((a) => (a as CSSAnimation).animationName === 'home-intro-lift');
  if (!curtain) { done(); return; }
  curtain.finished.then(done, done);

  function lift() {
    anims.forEach((a) => { if (a !== curtain) a.finish(); });
    const delay = Number(curtain!.effect?.getTiming().delay ?? 0);
    if (Number(curtain!.currentTime ?? 0) < delay) curtain!.currentTime = delay;
  }
  // Scroll gestures: lift and consume. Non-passive on purpose.
  on('wheel', (e) => { if ((e as WheelEvent).ctrlKey) return; e.preventDefault(); lift(); }, { passive: false });
  on('touchmove', (e) => { e.preventDefault(); lift(); }, { passive: false });
  on('keydown', (e) => {
    const k = e as KeyboardEvent;
    if (k.metaKey || k.ctrlKey || k.altKey) return;
    if (SCROLL_KEYS.has(k.key)) e.preventDefault();
    lift();
  }, { passive: false });
  // Taps / clicks only lift (nothing to consume).
  on('touchstart', lift, { passive: true });
  on('pointerdown', lift, { passive: true });
}
