// IndexNow (Bing, Yandex, Seznam, Naver…): after every PRODUCTION deploy, tell the engines which URLs exist.
// Hook: `onSuccess` — Netlify runs it after the deploy has been published and is live, so the engines never fetch a page
// that is not there yet. It also never fails the build: any error here is only logged (Netlify ignores onSuccess failures
// for the deploy, and this code catches everything anyway).
// Only CONTEXT=production: deploy previews and branch deploys never submit. The key lives in ./key.json and as
// public/<key>.txt (the proof of ownership IndexNow fetches); scripts/check-site.mjs checks both match.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'mer.studio';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const { key } = JSON.parse(readFileSync(new URL('./key.json', import.meta.url), 'utf8'));

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);

/** Internal helper — NOT exported: Netlify treats every named export of a plugin as an event handler, so `onSuccess` must be the only one. Every URL of the built sitemap (index → child sitemaps), EN + ES. */
function sitemapUrls(publishDir) {
  const index = join(publishDir, 'sitemap-index.xml');
  if (!existsSync(index)) return [];
  const files = locs(readFileSync(index, 'utf8')).map((u) => join(publishDir, new URL(u).pathname));
  return [...new Set(files.flatMap((f) => (existsSync(f) ? locs(readFileSync(f, 'utf8')) : [])))]
    .filter((u) => new URL(u).hostname === HOST);
}

export const onSuccess = async ({ constants }) => {
  try {
    if (process.env.CONTEXT !== 'production') return console.log(`IndexNow: skipped (CONTEXT=${process.env.CONTEXT ?? 'unset'}, only "production" submits).`);
    const urlList = sitemapUrls(constants.PUBLISH_DIR);
    if (!urlList.length) return console.log('IndexNow: no URLs found in the sitemap, nothing to submit.');
    const body = { host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList };
    if (process.env.INDEXNOW_DRY_RUN) return console.log('IndexNow (dry run):', JSON.stringify(body, null, 1));
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });
    // 200 = received, 202 = received, key validation pending; anything else is only logged.
    console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}${res.ok ? '' : ` ${(await res.text()).slice(0, 200)}`}`);
  } catch (err) {
    console.log(`IndexNow: failed (${err instanceof Error ? err.message : err}). The deploy is not affected.`);
  }
};
