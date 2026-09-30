// Launch offer — the ONE source for every offer text on the site (hero line, diagram pill, list row [4],
// /ai-visibility/ notice, JSON-LD, and the llms.txt line checked by scripts/check-site.mjs).
//
// HOW TO TURN IT OFF: set `active: false` below and redeploy — every offer element disappears from the build and the
// services stay as normal (no tag). Even without a redeploy, an inline script in BaseLayout hides every `[data-offer]`
// once `endsAt` has passed (`html[data-offer-ended]`).
// AFTER THE OFFER ENDS: also delete the "Launch offer" line from public/llms.txt (the check script fails the build while
// `active` is true and that line is missing, and while `active` is false and it is still there).
export const offer = {
  active: true,
  tag: 'Free with your project · Oct 2026',
  more: 'read more',
  pill: 'Free · Oct 2026',            // diagram pill (Figma 2248:9353): "AI Visibility  FREE · OCT 2026 · read more"
  endsAt: '2026-10-31T23:59:59-03:00',
  validThrough: '2026-10-31',
  // Hero line (after the "—"): "Every project ships findable on [ChatGPT] — {hero}. Read more."
  hero: 'AI Visibility free for projects started in October 2026',
  free: {
    title: 'Included free',
    items: [
      'Base setup: schema / JSON-LD, llms.txt, AI-bot access in robots.txt, semantic content structure',
      'An initial visibility check in ChatGPT, Perplexity, Gemini and Google AI',
    ],
  },
  paid: {
    title: 'Still paid',
    items: ['AI content strategy', 'Full audit', 'Monthly measurement'],
  },
  intro: 'Launch offer: every project that starts in October 2026 includes the AI Visibility setup at no cost.',
  llms: 'Launch offer: projects started in October 2026 include AI Visibility setup free (schema, llms.txt, AI crawler access, semantic structure, and an initial AI visibility check). Content strategy, full audit and monthly measurement are paid.',
} as const;
