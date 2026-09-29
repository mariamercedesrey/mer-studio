// Typewriter for the "Where we've worked" industry labels (CLAUDE.md §22). The real text stays in the HTML (SEO, screen
// readers); on init each label splits into [typed part][cursor][untyped part]. The untyped part is only `opacity: 0`,
// so the full label already occupies its place and nothing shifts (CLS 0). One rAF loop, once, no library.
// Entrance timing is shared with every other entrance through watchOnce (reveal.ts); reduced motion never initialises.
import { prefersReducedMotion, watchOnce } from './reveal';

const CHAR = 30;   // ms per character (25–35 ms)
const PAUSE = 180; // ms between labels
const HOLD = 1000; // ms after the last label before the cursor's 3 closing blinks (1 s each)

type Item = { typed: Text; rest: HTMLElement; text: string };

function prepare(li: HTMLElement): Item {
  const text = li.textContent ?? '';
  const typed = document.createTextNode('');
  const rest = document.createElement('span');
  rest.textContent = text;
  rest.style.opacity = '0';
  li.replaceChildren(typed, rest);
  return { typed, rest, text };
}

function run(list: HTMLElement, items: Item[], cursor: HTMLElement) {
  // Schedule: label i starts at starts[i]; its k-th character lands at starts[i] + (k + 1) * CHAR.
  const starts: number[] = [];
  let t = 0;
  items.forEach((it) => { starts.push(t); t += it.text.length * CHAR + PAUSE; });
  const end = t - PAUSE;
  let shown = items.map(() => 0);
  let at = -1;
  const t0 = performance.now();

  const place = (i: number) => {
    if (at === i) return;
    at = i;
    items[i].typed.after(cursor); // the cursor lives right after the typed text of the label being written
  };
  const frame = (now: number) => {
    const el = now - t0;
    for (let i = 0; i < items.length; i++) {
      if (el < starts[i]) break;
      const n = Math.min(items[i].text.length, Math.floor((el - starts[i]) / CHAR));
      if (n === shown[i]) continue;
      shown[i] = n;
      items[i].typed.data = items[i].text.slice(0, n);
      items[i].rest.textContent = items[i].text.slice(n);
      place(i);
    }
    if (el < end) { requestAnimationFrame(frame); return; }
    items.forEach((it) => { it.typed.data = it.text; it.rest.remove(); });
    cursor.classList.add('is-closing');
    cursor.addEventListener('animationend', () => { cursor.remove(); list.dataset.twState = 'done'; }, { once: true });
  };
  requestAnimationFrame(frame);
}

export function initTypewriter() {
  const list = document.querySelector<HTMLElement>('[data-typewriter]');
  if (!list) return;
  const lis = [...list.querySelectorAll<HTMLElement>('li')];
  if (prefersReducedMotion() || !lis.length) { list.dataset.twState = 'done'; return; }
  const items = lis.map(prepare);
  const cursor = document.createElement('span');
  cursor.className = 'tw__cur';
  cursor.setAttribute('aria-hidden', 'true');
  list.dataset.twState = 'ready';
  const finish = () => { items.forEach((it) => { it.typed.data = it.text; it.rest.remove(); }); list.dataset.twState = 'done'; };
  watchOnce(list, {
    kind: 'reveal',
    run: (delay) => setTimeout(() => { list.dataset.twState = 'running'; run(list, items, cursor); }, delay),
    skip: finish,
  });
}
