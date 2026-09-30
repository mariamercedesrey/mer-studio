// FAQ copy — the ONE source for /faq/ and the FAQ on /ai-visibility/: the visible accordion and the FAQPage JSON-LD are both
// built from these arrays, so the schema always carries exactly the visible text.
// `offer: true` items belong to the launch offer (src/data/offer.ts): they are left out when `offer.active` is false, and the
// rendered item carries `data-offer`, so an expired offer also hides them without a redeploy (html[data-offer-ended]).
// /faq/ 9–10 are deliberately shorter than the /ai-visibility/ answers: two pages must never carry the same FAQPage text.
import { offer } from './offer';

export interface FaqItem { q: string; a: string; offer?: boolean }
export interface FaqGroup { num: string; label: string; items: FaqItem[] }

export const faqGroups: FaqGroup[] = [
  {
    num: '01', label: 'process',
    items: [
      { q: 'How much does a project cost?', a: 'Every project is quoted after a 20-minute call. You get a fixed scope and price before we start — no surprises.' },
      { q: 'How long does a project take?', a: 'From one week, depending on scope. A landing moves faster than a full store or product, and we agree on dates before we start.' },
      { q: 'How many rounds of revisions are included?', a: 'Two rounds of revisions, built into every project.' },
      { q: 'What do I get at handover?', a: 'Your files and accounts, all in your name.' },
    ],
  },
  {
    num: '02', label: 'services',
    items: [
      { q: 'Which e-commerce platforms do you work with?', a: 'Shopify, Tiendanube and WooCommerce. We recommend one based on your market, your catalog and how you sell.' },
      { q: 'Can you work with my existing brand or site?', a: 'Yes. We can evolve what you already have or start from scratch.' },
      { q: 'Do you work with clients outside Argentina?', a: "Yes. We're based in Buenos Aires and work remotely, in English or Spanish." },
      { q: 'Can you add AI assistants or automations?', a: 'Yes, as an add-on: assistants that answer with your own content, and automated flows connected to the tools you already use.' },
    ],
  },
  {
    num: '03', label: 'ai visibility',
    items: [
      { q: 'What is AI Visibility (GEO / AEO)?', a: 'Making your brand easy for AI to find, understand and cite — not just to rank on Google.' },
      { q: 'Is AI Visibility free in October?', a: 'Yes, the setup is free for projects started in October 2026. The rest is paid.', offer: true },
    ],
  },
];

export const aiVisibilityFaq: FaqItem[] = [
  { q: 'What is Generative Engine Optimization (GEO)?', a: "Making your brand easy for AI engines like ChatGPT, Perplexity and Google AI to find, understand and cite when people ask them questions — not just ranking in Google's list of links." },
  { q: 'What is Answer Engine Optimization (AEO)?', a: 'Structuring your content so it becomes the direct answer: clear questions and answers, structured data, and pages AI crawlers can read.' },
  { q: 'How is GEO different from SEO?', a: 'SEO gets you ranked; GEO and AEO get you mentioned. They work together — a solid technical base helps both.' },
  { q: "What's free for projects started in October?", a: 'The setup: schema, llms.txt, AI crawler access, semantic structure and an initial visibility check. Content strategy, full audit and monthly tracking are paid.', offer: true },
  { q: 'Do you guarantee AI mentions?', a: 'No one can. We build the conditions for AI engines to find and trust you, and we measure what changes.' },
];

/** Items that should exist in the build: offer items drop out when the offer is off. */
export const live = (items: FaqItem[]) => items.filter((i) => !i.offer || offer.active);

export function faqSchema(items: FaqItem[], url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    mainEntity: live(items).map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}
