// Post-build checks (runs after `astro build`, see package.json). Fails the build when:
//  1. any <img> in dist/**/*.html has no `alt` attribute, or has an empty alt (alt="" / bare `alt`) without the
//     `data-decorative` attribute (empty alt is only for images that are purely decorative, and says so);
//  2. any page <title> is longer than 70 characters (Bing);
//  3. the launch offer (src/data/offer.ts) and public/llms.txt disagree: `active` needs the "Launch offer" line, and
//     an inactive offer must not leave it behind.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { offer } from '../src/data/offer.ts';

const dist = new URL('../dist', import.meta.url).pathname;
const errors = [];

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});

const decode = (t) => t.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
let total = 0, decorative = 0;
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(dist, file);
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    total++;
    const tag = m[0];
    const hasAlt = /\salt(\s*=|\s|\/?>)/i.test(tag);
    const empty = /\salt(?!\s*=\s*["'][^"']|\s*=\s*[^\s"'>])(?=[\s/>=]|$)/i.test(tag) || /\salt\s*=\s*(""|'')/.test(tag);
    const deco = /\sdata-decorative(\s|=|\/?>)/i.test(tag);
    if (!hasAlt) errors.push(`${rel}: <img> without alt → ${tag.slice(0, 120)}`);
    else if (empty && !deco) errors.push(`${rel}: empty alt without data-decorative → ${tag.slice(0, 120)}`);
    else if (empty) decorative++;
    else if (deco) errors.push(`${rel}: data-decorative on an <img> that has alt text → ${tag.slice(0, 120)}`);
  }
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  if (title && decode(title).length > 70) errors.push(`${rel}: <title> is ${decode(title).length} characters (max 70) → ${decode(title)}`);
}

const llms = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8');
const hasLine = llms.includes(offer.llms);
if (offer.active && !hasLine) errors.push('public/llms.txt is missing the launch-offer line from src/data/offer.ts (offer.llms).');
if (!offer.active && /^Launch offer:/m.test(llms)) errors.push('offer.active is false but public/llms.txt still has the "Launch offer" line: remove it.');

if (errors.length) {
  console.error(`\ncheck-site: ${errors.length} problem(s)\n - ${errors.join('\n - ')}\n`);
  process.exit(1);
}
console.log(`check-site: ${total} <img> checked (${decorative} decorative, marked data-decorative), titles ≤ 70; offer/llms.txt in sync.`);
