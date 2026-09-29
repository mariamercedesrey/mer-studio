// Fallback for WordReveal where CSS scroll-driven animations (animation-timeline: view()) don't exist yet.
// Same maths as the CSS: with s = scrolled distance since the block's top edge entered the viewport (vh - top),
// the range is S = 15 % of vh (top edge at 85 % of the viewport) → E = (vh + h) / 2 (block centre at viewport centre);
// word i of n starts at S + 0.8·(E - S)·i/(n - 1) and takes 20 % of (E - S). Scroll is only read, never hijacked.
import { prefersReducedMotion } from './reveal';

export function initWordReveal() {
  if (CSS.supports('animation-timeline: view()') || prefersReducedMotion()) return;
  const root = document.documentElement;
  document.querySelectorAll<HTMLElement>('[data-word-reveal]').forEach((el) => {
    const words = Array.from(el.querySelectorAll<HTMLElement>('.wr__w'));
    const last = Math.max(words.length - 1, 1);
    const min = parseFloat(getComputedStyle(el).getPropertyValue('--word-reveal-min')) || 0.12;
    el.classList.add('wr--js');
    let raf = 0;
    let near = false;
    const paint = () => {
      raf = 0;
      const held = root.hasAttribute('data-intro'); // nothing plays under the home intro curtain
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const s = vh - r.top;
      const from = 0.15 * vh;
      const span = (vh + r.height) / 2 - from;
      words.forEach((w, i) => {
        const start = from + 0.8 * span * (i / last);
        const t = held ? 0 : Math.min(1, Math.max(0, (s - start) / (0.2 * span)));
        w.style.setProperty('--wr-o', String(min + (1 - min) * t));
      });
    };
    const schedule = () => { if (near && !raf) raf = requestAnimationFrame(paint); };
    new IntersectionObserver((e) => { near = e[0].isIntersecting; schedule(); }, { rootMargin: '10% 0px' }).observe(el);
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    new MutationObserver(schedule).observe(root, { attributes: true, attributeFilter: ['data-intro'] });
    paint();
  });
}
