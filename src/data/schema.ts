// JSON-LD (schema.org) for search and AI answer engines. Facts only from the site's own copy:
// Services (149:5756), About (149:6015), Contact (149:6087), Footer (149:6099), project-details.ts.
import { detailBlocks, type ProjectDetailData } from './project-details';
import { EMAIL, SOCIAL, WHATSAPP } from './contact';
import { getOffer } from './offer';
import { getCopy, pagePath, anchorHash, type Locale } from '../i18n';

const SITE = 'https://mer.studio';
const ORG_ID = `${SITE}/#studio`;
const MER_ID = `${SITE}/#mer`;

// Names and descriptions are the site's own copy: rows / add-ons of the Services section (src/i18n → `services`).
const servicesOf = (locale: Locale) => {
  const svc = getCopy(locale).services;
  return [
    { name: svc.rows.branding.name, description: svc.rows.branding.body },
    { name: svc.rows.websites.name, description: svc.rows.websites.body },
    { name: svc.rows.digitalProduct.name, description: svc.rows.digitalProduct.body },
    { name: getCopy(locale).jsonld.home.aiVisibilityService.name, description: getCopy(locale).jsonld.home.aiVisibilityService.description, offer: true },
    { name: svc.addons.designSystem.title, description: svc.addons.designSystem.body },
    { name: svc.addons.aiAssistants.title, description: svc.addons.aiAssistants.body },
    { name: svc.addons.maintenance.title, description: svc.addons.maintenance.body },
  ];
};

export function homeSchema(locale: Locale = 'en') {
  const copy = getCopy(locale);
  const j = copy.jsonld;
  const offer = getOffer(locale);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: copy.site.name,
        alternateName: 'mer.studio',
        url: `${SITE}${pagePath('home', locale)}`,
        sameAs: SOCIAL,
        logo: `${SITE}/logo.svg`,
        image: `${SITE}/og.png`,
        description: j.home.description,
        slogan: j.home.slogan,
        email: EMAIL,
        telephone: WHATSAPP.tel,
        address: { '@type': 'PostalAddress', addressCountry: 'AR' },
        areaServed: j.areaServed,
        contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: EMAIL, telephone: WHATSAPP.tel, url: WHATSAPP.href, availableLanguage: ['en', 'es'] },
        founder: { '@id': MER_ID },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: j.home.catalogName,
          itemListElement: servicesOf(locale).map(({ offer: isOffer, ...s }) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', ...s, provider: { '@id': ORG_ID } },
            // Launch offer (src/data/offer.ts): the AI Visibility setup is free for projects started in October 2026. Setup only.
            ...(offer.active && isOffer ? { price: 0, priceCurrency: 'USD', validThrough: offer.validThrough, description: offer.llms } : {}),
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': MER_ID,
        name: 'Mer',
        alternateName: 'Mercedes Rey',
        jobTitle: j.home.founderJobTitle,
        worksFor: { '@id': ORG_ID },
        url: `${SITE}${pagePath('home', locale)}${anchorHash('about', locale)}`,
        description: j.home.founderDescription,
      },
    ],
  };
}

// A service page (/ai-visibility/, /ecommerce/): Service + the page's four method rows as its offer catalogue.
function serviceSchema(key: 'aiVisibility' | 'ecommerce', locale: Locale) {
  const copy = getCopy(locale);
  const j = copy.jsonld;
  const url = `${SITE}${pagePath(key, locale)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: j[key].name,
    serviceType: j[key].serviceType,
    url,
    description: j[key].description,
    provider: { '@id': ORG_ID },
    areaServed: j.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: j[key].catalogName,
      itemListElement: copy[key].method.items.map((m) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.t, description: m.d } })),
    },
  };
}

export const aiVisibilitySchema = (locale: Locale = 'en') => serviceSchema('aiVisibility', locale);
export const ecommerceSchema = (locale: Locale = 'en') => serviceSchema('ecommerce', locale);

export function projectSchema(p: ProjectDetailData, url: string, locale: Locale = 'en') {
  const copy = getCopy(locale);
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
    ...(neoris && { sourceOrganization: { '@type': 'Organization', name: 'Neoris' } }), // credit: "delivered through NEORIS"
    creator: { '@type': 'Person', '@id': MER_ID, name: 'Mer' },
    publisher: { '@type': 'ProfessionalService', '@id': ORG_ID, name: copy.site.name, url: `${SITE}${pagePath('home', locale)}` },
    inLanguage: copy.site.lang,
  };
}
