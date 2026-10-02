// Black Duck "electro-wave" (Figma 2305:1421): an ambient loop, so it sleeps off-screen and in a hidden tab (§22.6).
// CSS owns the motion (components/work/AutomationBlock.astro); this only flips `data-live` while the scene is visible.
export function initAutomationWave(root: ParentNode = document): void {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; // static final state, never live
  root.querySelectorAll<HTMLElement>('[data-n8n]').forEach((el) => {
    if (el.dataset.n8nInit) return;
    el.dataset.n8nInit = '';
    let onScreen = false;
    const sync = () => { if (onScreen && !document.hidden) el.setAttribute('data-live', ''); else el.removeAttribute('data-live'); };
    if (!('IntersectionObserver' in window)) return; // no observer: static final state
    new IntersectionObserver((entries) => { onScreen = entries[entries.length - 1].isIntersecting; sync(); }).observe(el);
    document.addEventListener('visibilitychange', sync);
  });
}
