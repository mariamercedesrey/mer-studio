// Services animated list (Figma 2204:616). The row nearest the viewport centre is active: 100 % opacity and
// the title's yellow dot beside it; the rest are subdued (CSS owns opacity). Read-only — never touches scroll.
// The dot is the heading's own signature dot: it travels once to the list when the section enters, then follows
// the active row. Transform/opacity only; hover (mouse) also activates a row on desktop; rows are not focusable.
export function initServicesActive() {
  const root = document.querySelector<HTMLElement>('[data-services]');
  if (!root) return;
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-services-row]'));
  const dot = root.querySelector<HTMLElement>('.section-heading__dot');
  if (!rows.length || !dot) return;
  // Reduced motion / no IntersectionObserver: leave every row at 100 % and the dot on the title.
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  root.setAttribute('data-live', '');
  const slotOf = (row: HTMLElement) => row.querySelector<HTMLElement>('[data-services-slot]')!;

  let scrollRow = rows[0];
  let hoverRow: HTMLElement | null = null;
  let entered = false;

  const current = () => hoverRow ?? scrollRow;

  const place = (row: HTMLElement) => {
    // Rest position = current rect minus the in-flight translate (correct even mid-transition).
    const m = new DOMMatrix(getComputedStyle(dot).transform);
    const d = dot.getBoundingClientRect();
    const restLeft = d.left - m.e;
    const restTop = d.top - m.f;
    const t = slotOf(row).getBoundingClientRect();
    dot.style.setProperty('--dot-x', `${(t.left - restLeft).toFixed(2)}px`);
    dot.style.setProperty('--dot-y', `${(t.top - restTop).toFixed(2)}px`);
    dot.style.setProperty('--dot-s', (t.width / dot.offsetWidth).toFixed(4));
  };

  const apply = () => {
    const active = current();
    rows.forEach((r) => r.toggleAttribute('data-active', r === active));
    if (entered) place(active);
  };

  // Active by scroll: a thin band at the viewport centre; the last row it touched stays active across gaps.
  const band = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) scrollRow = e.target as HTMLElement;
    apply();
  }, { rootMargin: '-49% 0px -49% 0px' });
  rows.forEach((r) => band.observe(r));

  // One-time travel: title → list, 700 ms (--dur-section) on --ease-enter; later moves use --dur-base.
  const enter = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    enter.disconnect();
    entered = true;
    dot.style.setProperty('--dot-dur', 'var(--dur-section)');
    apply();
    dot.addEventListener('transitionend', () => dot.style.removeProperty('--dot-dur'), { once: true });
  }, { rootMargin: '0px 0px -30% 0px' });
  enter.observe(root);

  rows.forEach((r) => {
    r.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hoverRow = r; apply(); } });
    r.addEventListener('pointerleave', () => { if (hoverRow === r) { hoverRow = null; apply(); } });
  });

  // Layout changes (resize, font load) move the slots: re-place without animating the jump.
  let raf = 0;
  addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      dot.style.setProperty('--dot-dur', '0ms');
      if (entered) place(current());
      requestAnimationFrame(() => dot.style.removeProperty('--dot-dur'));
    });
  });
  apply();
}
