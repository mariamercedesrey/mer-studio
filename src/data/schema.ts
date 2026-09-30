// JSON-LD (schema.org) for search and AI answer engines. Facts only from the site's own copy:
// Services (149:5756), About (149:6015), Contact (149:6087), Footer (149:6099), project-details.ts.
import { detailBlocks, type ProjectDetailData } from './project-details';
import { EMAIL, WHATSAPP } from './contact';

const SITE = 'https://mer.studio';
const ORG_ID = `${SITE}/#studio`;
const MER_ID = `${SITE}/#mer`;

const services = [
  { name: 'Branding', description: 'Identity, and the system to keep it consistent.' },
  { name: 'Websites', description: 'A landing, a full site, or an online store.' },
  { name: 'Digital Product', description: "An app or a platform that doesn't exist yet." },
  { name: 'AI Visibility · GEO / AEO', description: 'So people find you when they ask an AI, not just Google.' },
  { name: 'Design System', description: 'Exported tokens, a documented component library, and a usage guide — so your team, or an AI agent, can keep building on it without breaking the system.' },
  { name: 'Maintenance', description: 'Optional, after handover. Changes, updates, backups and priority response.' },
  { name: 'AI-assisted & Automation', description: 'AI assistants and automations that take repetitive work off your team — built into your site, store or product.' },
];

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: 'MER Studio',
        url: `${SITE}/`,
        logo: `${SITE}/logo.svg`,
        image: `${SITE}/og.png`,
        description: 'Strategy, design and code, handled end to end by one team. Twenty-five years across enterprise products and US startups, applied at any size — a brand, a website, an online store, a full platform.',
        slogan: 'Strategy, design and build, end to end.',
        email: EMAIL,
        telephone: WHATSAPP.tel,
        address: { '@type': 'PostalAddress', addressCountry: 'AR' },
        areaServed: 'Worldwide',
        contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: EMAIL, telephone: WHATSAPP.tel, url: WHATSAPP.href },
        founder: { '@id': MER_ID },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', ...s, provider: { '@id': ORG_ID } },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': MER_ID,
        name: 'Mer',
        alternateName: 'Mercedes Rey',
        jobTitle: 'Founder',
        worksFor: { '@id': ORG_ID },
        url: `${SITE}/#about`,
        description: "I've been designing digital products for more than 25 years. Eight of those years went into complex enterprise products, and seven into working with US startups, often directly with founders and CEOs.",
      },
    ],
  };
}

export function aiVisibilitySchema() {
  const url = `${SITE}/ai-visibility/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: 'AI Visibility (GEO / AEO)',
    serviceType: 'Generative engine optimization (GEO) and answer engine optimization (AEO)',
    url,
    description: 'We make your brand readable, understood and quotable by ChatGPT, Perplexity, Gemini and Google’s AI Overviews: crawlable pages, structured data, citable answers and a presence in the places models use to verify you.',
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Four things an AI needs before it recommends you',
      itemListElement: [
        { name: 'Readable', description: 'Crawlers can reach and parse your site: fast pages, clean HTML, an llms.txt, and a robots.txt that lets AI search bots in instead of blocking them.' },
        { name: 'Understood', description: 'Structured data (JSON-LD) and consistent entity details, so a model knows who you are, what you sell, where you work and who you work for — without guessing.' },
        { name: 'Quotable', description: 'Pages that answer the real questions your clients ask, in a format a model can lift and cite: clear FAQs, comparisons, scope and pricing ranges.' },
        { name: 'Present', description: 'Being named in the places models use to double-check you: Google Business Profile, directories, reviews, press and partner sites.' },
      ].map((d) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', ...d } })),
    },
  };
}

export function projectSchema(p: ProjectDetailData, url: string) {
  const blocks = detailBlocks(p);
  const neoris = /neoris/i.test(p.credit);
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: `${p.client} — ${p.title}`,
    headline: p.title,
    url,
    description: blocks[0].body,
    text: blocks.map((b) => `${b.heading}. ${b.body}`).join('\n\n'),
    keywords: p.roles.join(', '),
    genre: p.meta.replace(/\[|\]/g, '').replace(/\s+/g, ' ').trim(),
    about: { '@type': 'Organization', name: p.client, ...(p.link && { url: p.link.href }) },
    ...(neoris && { sourceOrganization: { '@type': 'Organization', name: 'Neoris' } }), // credit: "in collaboration with NEORIS"
    creator: { '@type': 'Person', '@id': MER_ID, name: 'Mer' },
    publisher: { '@type': 'ProfessionalService', '@id': ORG_ID, name: 'MER Studio', url: `${SITE}/` },
    inLanguage: 'en',
  };
}
