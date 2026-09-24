// Decorative videos (hero, Selected Work) play only while on screen and never under
// prefers-reduced-motion — the poster frame stays instead. Pausing off-screen saves CPU/battery.
export function initInviewVideos() {
  const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video[data-inview-video]'));
  if (!videos.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  const io = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      const v = target as HTMLVideoElement;
      if (isIntersecting && !reduce.matches) {
        if (v.preload === 'none') v.preload = 'auto';
        v.play().catch(() => { /* autoplay refused: poster stays */ });
      } else {
        v.pause();
      }
    }
  }, { rootMargin: '200px 0px' });

  videos.forEach((v) => {
    v.muted = true;
    if (v.hasAttribute('data-reveal-on-play')) {
      v.addEventListener('playing', () => v.setAttribute('data-playing', ''), { once: true });
    }
    io.observe(v);
  });
  reduce.addEventListener('change', () => { if (reduce.matches) videos.forEach((v) => v.pause()); });
}
