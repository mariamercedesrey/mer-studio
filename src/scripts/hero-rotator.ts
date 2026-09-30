// Hero offer line: "[ChatGPT]" → Perplexity → Gemini → Google AI. Reuses the DecodeTitle effect (decode-title.ts): each
// change swaps the word and replays the decode on it, then holds it for a readable pause. The brackets never move, the
// width is reserved by the longest word (CSS), screen readers read the static sr-only sentence (the rotator is aria-hidden).
// Starts after the intro (afterIntro); sleeps while off-screen or in a hidden tab; reduced motion never starts it
// (the word stays "ChatGPT"). CLAUDE.md §22: an ambient loop is allowed if it sleeps off-screen.
import { afterIntro, prefersReducedMotion } from './reveal';
import { replayDecode } from './decode-title';

const WORDS = ['ChatGPT', 'Perplexity', 'Gemini', 'Google AI'];
const HOLD = 2500;   // ms a word stays readable once decoded
const DECODE = 900;  // decode-title.ts TOTAL

export function initHeroRotator() {
  const root = document.querySelector<HTMLElement>('[data-hero-rot]');
  const text = root?.querySelector<HTMLElement>('[data-rot-text]');
  if (!root || !text || prefersReducedMotion()) return;

  let i = 0, timer = 0, onScreen = false;
  const awake = () => onScreen && !document.hidden;
  const schedule = (ms: number) => { window.clearTimeout(timer); timer = window.setTimeout(next, ms); };
  const next = () => {
    if (!awake()) return; // resumed by the observer / visibilitychange
    i = (i + 1) % WORDS.length;
    text.textContent = WORDS[i];
    replayDecode(root);
    schedule(DECODE + HOLD);
  };
  const sync = () => { window.clearTimeout(timer); if (awake()) schedule(HOLD); };

  afterIntro(() => {
    new IntersectionObserver((entries) => { onScreen = entries[0].isIntersecting; sync(); }).observe(root);
    document.addEventListener('visibilitychange', sync);
  });
}
