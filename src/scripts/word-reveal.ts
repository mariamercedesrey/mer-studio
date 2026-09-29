// Fallback for WordReveal where CSS scroll-driven animations (animation-timeline: view()) don't exist yet.
// Same maths as the CSS: word i of n runs over [6 + 28·i/n, 18 + 28·i/n] % of the block's "cover" range
// (0 % = top edge enters the viewport, 100 % = bottom edge leaves it). Scroll is only read, never hijacked.
import { prefersReducedMotion } from './reveal';

export function initWordReveal() {
  if (CSS.supports('animation-timeline: view()') || prefersReducedMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-word-reveal]').forEach((el) => {
    const words = Array.from(el.querySelectorAll<HTMLElement>('.wr__w'));
    const n = words.length;
    const min = parseFloat(getComputedStyle(el).getPropertyValue('--word-reveal-min')) || 0.15;
    el.classList.add('wr--js');
    let raf = 0;
    let near = false;
    const paint = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = ((vh - r.top) / (vh + r.height)) * 100;
      words.forEach((w, i) => {
        const start = 6 + (i * 28) / n;
        const t = Math.min(1, Math.max(0, (p - start) / 12));
        w.style.setProperty('--wr-o', String(min + (1 - min) * t));
      });
    };
    const schedule = () => { if (near && !raf) raf = requestAnimationFrame(paint); };
    new IntersectionObserver((e) => { near = e[0].isIntersecting; schedule(); }, { rootMargin: '10% 0px' }).observe(el);
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    paint();
  });
}
