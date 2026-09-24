// JSON-LD (schema.org) for search and AI answer engines. Facts only from the site's own copy:
// Services (149:5756), About (149:6015), Contact (149:6087), Footer (149:6099), project-details.ts.
import type { ProjectDetailData } from './project-details';

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
        email: 'hello@mer.studio',
        telephone: '+54 9 11 41742309',
        address: { '@type': 'PostalAddress', addressCountry: 'AR' },
        areaServed: 'Worldwide',
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

export function projectSchema(p: ProjectDetailData, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${p.client} — ${p.title}`,
    headline: p.title,
    url,
    description: p.blocks[0].body,
    text: p.blocks.map((b) => `${b.heading}. ${b.body}`).join('\n\n'),
    keywords: p.roles.join(', '),
    about: { '@type': 'Organization', name: p.client, url: p.link.href },
    sourceOrganization: { '@type': 'Organization', name: 'Neoris' }, // meta: "AT NEORIS"
    creator: { '@type': 'Person', '@id': MER_ID, name: 'Mer' },
    publisher: { '@type': 'ProfessionalService', '@id': ORG_ID, name: 'MER Studio', url: `${SITE}/` },
    inLanguage: 'en',
  };
}
