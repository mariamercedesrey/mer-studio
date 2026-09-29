// CountUp driver: [data-countup="count"] counts 0 → data-to once, when it enters the viewport; [data-countup="fade"]
// only fades in. The final value is real text in the markup (visually hidden copy + the visible span), so
// reduced motion, no-JS, crawlers and screen readers all get it; the count is purely visual (aria-hidden).
import { cssMs, onceInView, prefersReducedMotion, tween } from './reveal';

export function initCountUps() {
  const els = document.querySelectorAll<HTMLElement>('[data-countup]');
  if (!els.length) return;
  const reduced = prefersReducedMotion();

  els.forEach((el) => {
    if (reduced) { el.classList.add('is-in'); return; }
    if (el.dataset.countup === 'fade') {
      onceInView(el, () => el.classList.add('is-in'));
      return;
    }
    const vis = el.querySelector<HTMLElement>('.countup__vis');
    const to = parseFloat(el.dataset.to ?? '');
    if (!vis || Number.isNaN(to)) { el.classList.add('is-in'); return; }
    const { prefix = '', suffix = '' } = el.dataset;
    const paint = (n: number) => { vis.textContent = `${prefix}${Math.round(n)}${suffix}`; };
    paint(0); // the ghost keeps the final width, so nothing shifts while it counts
    el.classList.add('is-in');
    onceInView(el, () => tween(cssMs('--dur-count', 1200), (t) => paint(to * t), () => paint(to)));
  });
}
