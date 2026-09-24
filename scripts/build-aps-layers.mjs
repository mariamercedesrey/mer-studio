// Downscale the APS "Rubber Laptop Mockup" layers (4000×3000 Figma originals in
// brand/assets/work/aps-mockup) to 2× their 697×523 display size as WebP.
// Masks keep their alpha channel (CSS mask-image uses alpha).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'brand/assets/work/aps-mockup';
const OUT = 'public/work/aps';
const layers = [
  'base-images', 'rope-mask', 'rope-shadow', 'rope-highlight',
  'reflection-mask-1', 'reflection-mask-2', 'reflection-mask-3', 'screen-layer-mask',
];
mkdirSync(OUT, { recursive: true });
for (const name of layers) {
  const info = await sharp(`${SRC}/${name}.png`)
    .resize({ width: 1400 })
    .webp({ quality: name.includes('mask') ? 90 : 82, alphaQuality: 90 })
    .toFile(`${OUT}/${name}.webp`);
  console.log(name, `${info.width}×${info.height}`, `${(info.size / 1024).toFixed(0)} KB`);
}
