// Selected Work activation: the item whose centre is closest to the viewport centre gets
// [data-active]. State only — CSS owns the visuals (opacity, cursor, hover).
export function initWorkActivation() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-work-item]'));
  if (!items.length) return;

  let frame = 0;
  const update = () => {
    frame = 0;
    const mid = window.innerHeight / 2;
    let best: HTMLElement | null = null;
    let bestDist = Infinity;
    for (const el of items) {
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.top + r.height / 2 - mid);
      if (dist < bestDist) { bestDist = dist; best = el; }
    }
    for (const el of items) el.toggleAttribute('data-active', el === best);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  // Focus activates an item too, so keyboard users never land on a subdued one.
  items.forEach((el) => el.addEventListener('focusin', () => {
    items.forEach((other) => other.toggleAttribute('data-active', other === el));
  }));

  // Media compositions are drawn at their Figma size and scaled to the column width.
  const ro = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const el = entry.target as HTMLElement;
      const w = parseFloat(getComputedStyle(el).getPropertyValue('--media-w'));
      if (w) el.style.setProperty('--media-scale', String(entry.contentRect.width / w));
    }
  });
  document.querySelectorAll<HTMLElement>('.work-item__media').forEach((el) => ro.observe(el));

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}
