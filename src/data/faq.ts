// FAQ copy — the ONE source for /faq/ and the FAQs on /ai-visibility/ and /ecommerce/: the visible accordion and the FAQPage JSON-LD are both
// built from these arrays, so the schema always carries exactly the visible text.
// `offer: true` items belong to the launch offer (src/data/offer.ts): they are left out when `offer.active` is false, and the
// rendered item carries `data-offer`, so an expired offer also hides them without a redeploy (html[data-offer-ended]).
// /faq/ 9–10 are deliberately shorter than the /ai-visibility/ answers: two pages must never carry the same FAQPage text.
import { offer } from './offer';
import { getCopy, type Locale } from '../i18n';

export interface FaqItem { q: string; a: string; offer?: boolean }
export interface FaqGroup { id: FaqGroupId; num: string; label: string; items: FaqItem[] }

// Copy: src/i18n/{en,es}.ts → `faq`. Structure stays here: group ids, and which entries belong to the launch offer.
const GROUP_IDS = ['process', 'services', 'aiVisibility'] as const;
export type FaqGroupId = (typeof GROUP_IDS)[number];
const OFFER_GROUP_ITEM = { group: 'aiVisibility', index: 1 }; // "Is AI Visibility free in October?"
const OFFER_AIV_ITEM = 3; // "What's free for projects started in October?"
const OFFER_ECOMMERCE_ITEM = 5; // "Is AI Visibility included?"

export const faqGroups = (locale: Locale): FaqGroup[] => getCopy(locale).faq.groups.map((g, gi) => ({
  id: GROUP_IDS[gi],
  ...g,
  items: g.items.map((it, i): FaqItem => (GROUP_IDS[gi] === OFFER_GROUP_ITEM.group && i === OFFER_GROUP_ITEM.index ? { ...it, offer: true } : it)),
}));

export const aiVisibilityFaq = (locale: Locale): FaqItem[] => getCopy(locale).faq.aiVisibility.map((it, i): FaqItem => (i === OFFER_AIV_ITEM ? { ...it, offer: true } : it));

export const ecommerceFaq = (locale: Locale): FaqItem[] => getCopy(locale).faq.ecommerce.map((it, i): FaqItem => (i === OFFER_ECOMMERCE_ITEM ? { ...it, offer: true } : it));

/** Items that should exist in the build: offer items drop out when the offer is off. */
export const live = (items: FaqItem[]) => items.filter((i) => !i.offer || offer.active);

export function faqSchema(items: FaqItem[], url: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: getCopy(locale).site.lang,
    '@id': `${url}#faq`,
    url,
    mainEntity: live(items).map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}
