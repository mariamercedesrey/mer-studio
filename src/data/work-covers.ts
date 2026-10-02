// Selected Work covers (Figma 2× exports of each project block), by project slug: the home's Selected Work and the case cards on /ecommerce/.
import type { ImageMetadata } from 'astro';
import asociart from '../assets/work-cover/asociart.png';
import theMile from '../assets/work-cover/the-mile.png';
import orchardMile from '../assets/work-cover/orchard-mile.png';
import quilmes from '../assets/work-cover/quilmes.png';
import carbonOptimum from '../assets/work-cover/carbon-optimum.png';
import agenteMama from '../assets/work-cover/agente-mama.png';
import americanPadel from '../assets/work-cover/american-padel-systems.png';
import hifiHub from '../assets/work-cover/hifi-hub.png';
import blackDuck from '../assets/work-cover/black-duck.png';

export const covers: Record<string, ImageMetadata> = {
  asociart, 'the-mile': theMile, 'orchard-mile': orchardMile, quilmes, 'carbon-optimum': carbonOptimum,
  'agente-mama': agenteMama, 'american-padel-systems': americanPadel, 'hifi-hub': hifiHub, 'black-duck': blackDuck,
};
