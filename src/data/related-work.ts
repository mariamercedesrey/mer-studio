// "More work" at the end of each case study: three related cases, by affinity (internal links between case studies).
// Groups: ecommerce (black-duck, orchard-mile, the-mile) · product (asociart, agente-mama, quilmes, hifi-hub) ·
// brand (carbon-optimum, american-padel-systems). A group with fewer than three others is completed with the closest case.
export const relatedWork: Record<string, readonly string[]> = {
  'black-duck': ['orchard-mile', 'the-mile', 'american-padel-systems'],
  'orchard-mile': ['the-mile', 'black-duck', 'american-padel-systems'],
  'the-mile': ['orchard-mile', 'black-duck', 'hifi-hub'],
  asociart: ['hifi-hub', 'agente-mama', 'quilmes'],
  'agente-mama': ['hifi-hub', 'asociart', 'quilmes'],
  quilmes: ['agente-mama', 'hifi-hub', 'asociart'],
  'hifi-hub': ['asociart', 'agente-mama', 'quilmes'],
  'carbon-optimum': ['american-padel-systems', 'hifi-hub', 'black-duck'],
  'american-padel-systems': ['carbon-optimum', 'hifi-hub', 'black-duck'],
};
