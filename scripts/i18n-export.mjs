// Exports src/i18n/en.ts to docs/i18n/copy-en.md: every key with its English text, grouped by page, as the source for translation.
// Run: npm run i18n:export  (regenerate whenever en.ts changes; the file is generated: do not edit it by hand).
import { writeFileSync } from 'node:fs';
import { en } from '../src/i18n/en.ts';

const GROUPS = [
  ['Global (every page)', ['site', 'a11y', 'buttons', 'faqCta', 'nav', 'footer', 'intake', 'projectDetail']],
  ['Home (/)', ['home', 'hero', 'marquee', 'work', 'banner', 'services', 'howItWorks', 'about', 'finalCta']],
  ['Launch offer (hero line, Services, /ai-visibility/, JSON-LD, llms.txt)', ['offer']],
  ['/faq/', ['faqPage', 'faq.groups']],
  ['/ai-visibility/', ['aiVisibility', 'faq.aiVisibility']],
  ['/start-a-project/ and its form', ['startProject', 'form']],
  ['/start-a-project/thanks/', ['thanks']],
  ['404', ['notFound']],
  ['JSON-LD (textual fields)', ['jsonld']],
  ['Case studies (/work/<slug>/ and the Project Detail overlay)', ['caseStudies']],
];

const get = (path) => path.split('.').reduce((o, k) => o[k], en);
const flat = (value, path, out = []) => {
  if (typeof value === 'string') out.push([path, value]);
  else if (Array.isArray(value)) value.forEach((v, i) => flat(v, `${path}[${i}]`, out));
  else Object.entries(value).forEach(([k, v]) => flat(v, path ? `${path}.${k}` : k, out));
  return out;
};
const esc = (t) => t.replace(/\n/g, '\\n');

const covered = new Set(GROUPS.flatMap(([, keys]) => keys.map((k) => k.split('.')[0])));
const missing = Object.keys(en).filter((k) => !covered.has(k));
if (missing.length) throw new Error(`i18n-export: top-level keys without a group: ${missing.join(', ')}`);

let total = 0;
let md = `# MER Studio — English copy (source for translation)

Generated from \`src/i18n/en.ts\` by \`npm run i18n:export\` — do not edit by hand. Each line is \`key\` → text.

- \`{placeholder}\` tokens (\`{client}\`, \`{title}\`, \`{name}\`, \`{code}\`, \`{email}\`) must be kept verbatim.
- \`\\n\` inside a title is a line break.
- Array items are written \`key[0]\`, \`key[1]\`… and keep their order.
- Proper names (MER Studio, Shopify, Tiendanube, ChatGPT, client and product names) are copy too but are expected to stay as they are.
- Not in this file on purpose: URLs, e-mail, phone, and the \`value\` of form fields (they stay English so the inbox is uniform).
- Also still in English outside \`en.ts\`: \`public/llms.txt\` (the launch-offer line must match \`offer.llms\`; \`scripts/check-site.mjs\` enforces it).

`;
const body = [];
for (const [title, keys] of GROUPS) {
  const entries = keys.flatMap((k) => flat(get(k), k));
  total += entries.length;
  if (title.startsWith('Case studies')) {
    body.push(`## ${title}\n`);
    for (const [slug, cs] of Object.entries(en.caseStudies)) {
      const rows = flat(cs, `caseStudies.${slug}`);
      body.push(`### ${cs.client} — \`${slug}\`\n`, ...rows.map(([k, v]) => `- \`${k}\` → ${esc(v)}`), '');
    }
  } else {
    body.push(`## ${title}\n`, ...entries.map(([k, v]) => `- \`${k}\` → ${esc(v)}`), '');
  }
}
md += `Strings: ${total}.\n\n` + body.join('\n');
writeFileSync(new URL('../docs/i18n/copy-en.md', import.meta.url), md);
console.log(`docs/i18n/copy-en.md: ${total} strings`);
