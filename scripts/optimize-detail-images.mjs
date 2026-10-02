// One-off: turns the 2× Figma exports of the modal frames (page "05 — Product Screens",
// "modal — <client>") into web-ready WebP under src/assets/work-detail/<slug>/.
// Usage: node scripts/optimize-detail-images.mjs <dir-with-figma-pngs>
// Files are named "<slug-prefix>-<name>.png"; Astro (<WorkImage>-style) makes the AVIF/WebP srcsets at build time.
import sharp from 'sharp';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const src = process.argv[2];
if (!src) throw new Error('pass the folder with the Figma PNG exports');
const out = new URL('../src/assets/work-detail/', import.meta.url).pathname;

const prefixes = {
  'asociart-': 'asociart', 'the-mile-': 'the-mile', 'orchard-mile-': 'orchard-mile', 'quilmes-': 'quilmes',
  'carbon-optimum-': 'carbon-optimum', 'agente-mama-': 'agente-mama', 'aps-': 'american-padel-systems', 'hifi-hub-': 'hifi-hub', 'black-duck-': 'black-duck',
};
const MAX_W = 2400;
// Flattened Figma frames that also contain live text: crop the media part only (2× px).
// (the frame's text sits on the left, so the APS brand card is the right-hand 693 px of its frame.)
const crop = {
  'the-mile-checkout': { top: 700 },
  'aps-brand': { left: 1238, width: 1386 },
};

mkdirSync(out, { recursive: true });
for (const f of readdirSync(src).filter((n) => n.endsWith('.png'))) {
  const base = f.replace(/\.png$/, '');
  const prefix = Object.keys(prefixes).find((p) => base.startsWith(p));
  if (!prefix) continue;
  const name = base.slice(prefix.length);
  let img = sharp(join(src, f));
  const meta = await img.metadata();
  const c = crop[base];
  if (c) {
    const left = c.left ?? 0, top = c.top ?? 0;
    img = img.extract({ left, top, width: c.width ?? meta.width - left, height: meta.height - top });
  }
  const dir = join(out, prefixes[prefix]);
  mkdirSync(dir, { recursive: true });
  const info = await img
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(join(dir, `${name}.webp`));
  console.log(`${prefixes[prefix]}/${name}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}
