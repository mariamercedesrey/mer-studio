// Launch offer — flags and dates. Its texts (hero line, diagram pill, list row [4], /ai-visibility/ notice, JSON-LD and the
// llms.txt line checked by scripts/check-site.mjs) come from src/i18n/en.ts → `offer`.
//
// HOW TO TURN IT OFF: set `active: false` below and redeploy — every offer element disappears from the build and the
// services stay as normal (no tag). Even without a redeploy, an inline script in BaseLayout hides every `[data-offer]`
// once `endsAt` has passed (`html[data-offer-ended]`).
// AFTER THE OFFER ENDS: also delete the "Launch offer" line from public/llms.txt (the check script fails the build while
// `active` is true and that line is missing, and while `active` is false and it is still there).
import { en } from '../i18n/en.ts'; // explicit extensions: scripts/check-site.mjs loads this file with plain Node
import { es } from '../i18n/es.ts';

// Copy (tag, hero line, lists, the llms.txt line…) lives in src/i18n/{en,es}.ts → `offer`; this module owns the flags and dates.
// Both languages share them: one switch, one expiry.
const flags = {
  active: true,
  endsAt: '2026-10-31T23:59:59-03:00',
  validThrough: '2026-10-31',
} as const;

/** English offer: what public/llms.txt and scripts/check-site.mjs check against. */
export const offer = { ...flags, ...en.offer } as const;

/** The offer with the copy of a language. */
export const getOffer = (locale: 'en' | 'es') => ({ ...flags, ...(locale === 'es' ? es : en).offer });
