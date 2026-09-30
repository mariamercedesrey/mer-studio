// Project Detail content — Figma page "05 — Product Screens": Asociart (2033:1913) and the
// "modal — <client>" frames (2099:43 … 2099:337). One entry per project; the slug is the URL (/work/<slug>/).
//
// A detail is a header (client, credit, link) + intro (title, meta, roles) + a list of sections. Sections
// are laid out from Figma coordinates:
//   flow  — columns side by side (`w` = Figma px width of the column, `cw` = width of the frame they sit in)
//   stage — free composition; every item has Figma x/y/w inside a `w`×`h` frame (overlaps, offsets)
// Images live in src/assets/work-detail/<slug>/<name>.webp (see scripts/optimize-detail-images.mjs).
// Copy is NOT written here: it comes from src/i18n/en.ts (`caseStudies`).
import { copy } from '../i18n';

export type DetailText = { t: 'text'; heading: string; body: string; panel?: boolean };
export type DetailImage = {
  t: 'img';
  src: string;      // '<slug>/<name>' under src/assets/work-detail
  w: number;        // Figma display width (px at 1440)
  alt: string;
  desc?: string;    // copy that is baked into the image, kept as real (visually hidden) text
  label?: string;   // heading for `desc` (JSON-LD / meta)
};
export type DetailItem = DetailText | DetailImage;
export type Placed = DetailItem & { x: number; y: number; tw?: number; back?: boolean }; // tw: width of a text block (Figma px)

export type FlowSection = {
  kind: 'flow';
  cw?: number; // container width in Figma (default 1312)
  align?: 'start' | 'center' | 'end';
  cols: { w: number; items: DetailItem[]; justify?: 'start' | 'center' | 'end' }[];
};
export type StageSection = { kind: 'stage'; w: number; h: number; items: Placed[] };
export type DetailSection = FlowSection | StageSection;

export type ProjectDetailData = {
  id: string; // slug
  client: string;
  credit: string;
  link?: { label: string; href: string };
  title: string;
  seoTitle?: string; // shorter <title> text when `client — title | MER Studio` would pass 70 characters (Bing)
  meta: string;
  note?: string; // extra meta line under the title (same style as meta)
  roles: readonly string[];
  sections: DetailSection[];
};

type Block = { heading: string; body: string };
type ImageCopy = { alt: string; desc?: string; label?: string };
const text = (b: Block, panel = false): DetailText => ({ t: 'text', heading: b.heading, body: b.body, panel });
const img = (src: string, w: number, i: ImageCopy): DetailImage => ({ t: 'img', src, w, alt: i.alt, desc: i.desc, label: i.label });
const at = (x: number, y: number, item: DetailItem, tw?: number): Placed => ({ ...item, x, y, tw });

// All copy (client, credit, titles, meta, roles, text blocks, alt texts, baked-in image copy) is in src/i18n/en.ts → `caseStudies[slug]`.
// This file keeps what is not language: URLs, the Figma layout (widths, positions), image files and reading order.
const cs = copy.caseStudies;
const asociart = cs.asociart;
const theMile = cs['the-mile'];
const orchardMile = cs['orchard-mile'];
const quilmes = cs.quilmes;
const carbon = cs['carbon-optimum'];
const agenteMama = cs['agente-mama'];
const padel = cs['american-padel-systems'];
const hifi = cs['hifi-hub'];

export const projectDetails: Record<string, ProjectDetailData> = {
  asociart: {
    id: 'asociart',
    client: asociart.client,
    credit: asociart.credit,
    link: { label: asociart.linkLabel, href: 'https://asociart.com' },
    title: asociart.title,
    meta: asociart.meta,
    roles: asociart.roles,
    sections: [
      { kind: 'flow', cw: 1349, align: 'center', cols: [
        { w: 737, items: [text(asociart.blocks.startingPoint, true)] },
        { w: 554, items: [img('asociart/legacy', 554, asociart.images.legacy)] },
      ] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text(asociart.blocks.theWork)] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text(asociart.blocks.criticalityFirst)] }] },
      { kind: 'flow', cw: 1349, cols: [
        { w: 529, items: [img('asociart/recoveries-a', 529, asociart.images.recoveriesA)] },
        { w: 593, items: [img('asociart/recoveries-b', 593, asociart.images.recoveriesB)] },
      ] },
      { kind: 'flow', cw: 1349, align: 'center', cols: [
        { w: 620, items: [text(asociart.blocks.outcome)] },
        { w: 698, items: [img('asociart/outcome', 698, asociart.images.outcome)] },
      ] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('asociart/workflow', 1349, asociart.images.workflow)] }] },
    ],
  },

  'the-mile': {
    id: 'the-mile',
    client: theMile.client,
    credit: theMile.credit,
    link: { label: theMile.linkLabel, href: 'https://orchardmile.com/the-mile' },
    title: theMile.title,
    meta: theMile.meta,
    roles: theMile.roles,
    sections: [
      { kind: 'flow', cols: [
        { w: 688, items: [
          text(theMile.blocks.startingPoint),
          img('the-mile/flow', 686, theMile.images.flow),
        ] },
        { w: 614, items: [img('the-mile/brand', 614, theMile.images.brand)] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(theMile.blocks.theWork)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [
        text(theMile.blocks.checkoutInsideTheApp),
        img('the-mile/checkout', 1312, theMile.images.checkout),
      ] }] },
      { kind: 'stage', w: 1312, h: 585, items: [
        at(0, 0, img('the-mile/outcome-hero', 844, theMile.images.outcomeHero)),
        at(687, 88, img('the-mile/outcome-phone', 220, theMile.images.outcomePhone)),
        at(932, 225, text(theMile.blocks.outcome), 380),
      ] },
      { kind: 'stage', w: 1312, h: 790, items: [
        at(0, 105, text(theMile.blocks.academy), 315),
        at(379, 0, img('the-mile/academy-board', 933, theMile.images.academyBoard)),
        at(0, 409, img('the-mile/academy-logo', 823, theMile.images.academyLogo)),
      ] },
    ],
  },

  'orchard-mile': {
    id: 'orchard-mile',
    client: orchardMile.client,
    credit: orchardMile.credit,
    link: { label: orchardMile.linkLabel, href: 'https://orchardmile.com' },
    title: orchardMile.title,
    meta: orchardMile.meta,
    roles: orchardMile.roles,
    sections: [
      { kind: 'flow', cols: [
        { w: 227, items: [text(orchardMile.blocks.startingPoint)] },
        { w: 1035, items: [img('orchard-mile/start', 1035, orchardMile.images.start)] },
      ] },
      { kind: 'flow', align: 'end', cols: [
        { w: 814, items: [img('orchard-mile/storefront', 814, orchardMile.images.storefront)] },
        { w: 458, items: [text(orchardMile.blocks.theWork)] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('orchard-mile/campaigns', 1312, orchardMile.images.campaigns)] }] },
      { kind: 'stage', w: 1312, h: 561, items: [
        at(0, 43, img('orchard-mile/site', 788, orchardMile.images.site)),
        at(762, 202, text(orchardMile.blocks.outcome), 524),
      ] },
    ],
  },

  quilmes: {
    id: 'quilmes',
    client: quilmes.client,
    credit: quilmes.credit,
    title: quilmes.title,
    meta: quilmes.meta,
    note: quilmes.note,
    roles: quilmes.roles,
    sections: [
      { kind: 'flow', align: 'center', cols: [
        { w: 459, items: [img('quilmes/falls', 459, quilmes.images.falls)] },
        { w: 310, items: [text(quilmes.blocks.startingPoint)] },
        { w: 459, items: [img('quilmes/cheers', 459, quilmes.images.cheers)] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(quilmes.blocks.theWork)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('quilmes/screens', 1312, quilmes.images.screens)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(quilmes.blocks.outcome)] }] },
    ],
  },

  'carbon-optimum': {
    id: 'carbon-optimum',
    client: carbon.client,
    credit: carbon.credit,
    link: { label: carbon.linkLabel, href: 'https://carbonoptimum.com' },
    title: carbon.title,
    meta: carbon.meta,
    roles: carbon.roles,
    sections: [
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('carbon-optimum/hero', 1349, carbon.images.hero)] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text(carbon.blocks.theWork)] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('carbon-optimum/logos', 1349, carbon.images.logos)] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text(carbon.blocks.outcome)] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('carbon-optimum/site', 1349, carbon.images.site)] }] },
    ],
  },

  'agente-mama': {
    id: 'agente-mama',
    client: agenteMama.client,
    credit: agenteMama.credit,
    link: { label: agenteMama.linkLabel, href: 'https://agentemama.ai' }, // label as in Figma; URL confirmed by Mer
    title: agenteMama.title,
    meta: agenteMama.meta,
    roles: agenteMama.roles,
    sections: [
      { kind: 'stage', w: 1312, h: 506, items: [
        at(0, 0, text(agenteMama.blocks.startingPoint), 470),
        at(9, 239, img('agente-mama/kids', 452, agenteMama.images.kids)),
        at(528, 29, img('agente-mama/sources', 414, agenteMama.images.sources)),
        // sits behind the rest (its export has an opaque ground) but comes last in reading order
        { ...at(768, -130, img('agente-mama/landing', 611, agenteMama.images.landing)), back: true },
      ] },
      { kind: 'flow', cols: [{ w: 691, items: [
        text(agenteMama.blocks.theWork),
        text(agenteMama.blocks.trustIsEarnedNotAssumed),
        text(agenteMama.blocks.everyEventShowsItsSource),
      ] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('agente-mama/matrix', 1312, agenteMama.images.matrix)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(agenteMama.blocks.outcome)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('agente-mama/brand', 1312, agenteMama.images.brand)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('agente-mama/screens', 1312, agenteMama.images.screens)] }] },
    ],
  },

  'american-padel-systems': {
    id: 'american-padel-systems',
    client: padel.client,
    credit: padel.credit,
    link: { label: padel.linkLabel, href: 'https://americanpadelsystems.com' },
    title: padel.title,
    seoTitle: padel.seoTitle,
    meta: padel.meta,
    roles: padel.roles,
    sections: [
      { kind: 'flow', align: 'center', cols: [
        { w: 561, items: [
          text(padel.blocks.startingPoint),
          text(padel.blocks.theWork),
        ] },
        { w: 693, items: [img('american-padel-systems/brand', 693, padel.images.brand)] },
      ] },
      { kind: 'flow', cols: [
        { w: 624, items: [img('american-padel-systems/courts', 624, padel.images.courts)] },
        { w: 624, items: [img('american-padel-systems/site', 624, padel.images.site)] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(padel.blocks.outcome)] }] },
      { kind: 'flow', cols: [
        { w: 651, items: [img('american-padel-systems/simulator', 651, padel.images.simulator)] },
        { w: 651, items: [img('american-padel-systems/materials', 651, padel.images.materials)] },
      ] },
    ],
  },

  'hifi-hub': {
    id: 'hifi-hub',
    client: hifi.client,
    credit: hifi.credit,
    link: { label: hifi.linkLabel, href: 'https://hifihub.ai' },
    title: hifi.title,
    meta: hifi.meta,
    roles: hifi.roles,
    sections: [
      { kind: 'flow', cols: [{ w: 1312, items: [text(hifi.blocks.startingPoint)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('hifi-hub/hero', 1312, hifi.images.hero)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(hifi.blocks.theWork)] }] },
      { kind: 'flow', cols: [
        { w: 651, items: [img('hifi-hub/listing-a', 651, hifi.images.listingA)] },
        { w: 651, items: [img('hifi-hub/listing-b', 651, hifi.images.listingB)] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text(hifi.blocks.branding)] }] },
      { kind: 'flow', cols: [{ w: 312, items: [img('hifi-hub/logo', 312, hifi.images.logo)] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('hifi-hub/brand-system', 1312, hifi.images.brandSystem)] }] },
      { kind: 'flow', align: 'center', cols: [
        { w: 636, items: [text(hifi.blocks.outcome)] },
        { w: 612, items: [img('hifi-hub/outcome', 612, hifi.images.outcome)] },
      ] },
    ],
  },
};

/** Every text block of a project (headings + bodies, incl. copy baked into images), for JSON-LD and meta. */
export function detailBlocks(p: ProjectDetailData): { heading: string; body: string }[] {
  const out: { heading: string; body: string }[] = [];
  const visit = (i: DetailItem) => {
    if (i.t === 'text') out.push({ heading: i.heading, body: i.body });
    else if (i.desc) out.push({ heading: i.label ?? i.alt, body: i.desc });
  };
  for (const s of p.sections) {
    if (s.kind === 'flow') s.cols.forEach((c) => c.items.forEach(visit));
    else s.items.forEach(visit);
  }
  return out;
}
