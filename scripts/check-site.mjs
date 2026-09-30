// Post-build checks (runs after `astro build`, see package.json). Fails the build when:
//  1. any <img> in dist/**/*.html has no `alt` attribute (alt="" is allowed: it marks a decorative image);
//  2. the launch offer (src/data/offer.ts) and public/llms.txt disagree: `active` needs the "Launch offer" line, and
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

let total = 0, decorative = 0;
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    total++;
    const tag = m[0];
    if (!/\salt\s*(=|\s|\/?>)/i.test(tag)) errors.push(`${relative(dist, file)}: <img> without alt → ${tag.slice(0, 120)}`);
    else if (/\salt=(""|'')/.test(tag)) decorative++;
  }
}

const llms = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8');
const hasLine = llms.includes(offer.llms);
if (offer.active && !hasLine) errors.push('public/llms.txt is missing the launch-offer line from src/data/offer.ts (offer.llms).');
if (!offer.active && /^Launch offer:/m.test(llms)) errors.push('offer.active is false but public/llms.txt still has the "Launch offer" line: remove it.');

if (errors.length) {
  console.error(`\ncheck-site: ${errors.length} problem(s)\n - ${errors.join('\n - ')}\n`);
  process.exit(1);
}
console.log(`check-site: ${total} <img> checked (${decorative} decorative alt=""), all have alt; offer/llms.txt in sync.`);
