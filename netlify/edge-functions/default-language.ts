// Default language for the root "/" only (first visit). Runs as a Netlify Edge Function, not as netlify.toml redirect rules:
// the rules' Language/Country conditions are AND-ed (no "Spanish OR country in list"), a cookie condition can only match
// presence (so it cannot say "no cookie → detect"), and rules cannot skip crawlers.
//
// Order: bot → stay · `mer_lang` cookie (set by the language switcher, 1 year) → honour it · Accept-Language starting with "es"
// or a Spanish-speaking country → 302 to /es/ · anything else (incl. US, CA, GB, BR) → stay on EN.
// Never a 301, never any other path. hreflang, canonicals and the sitemap are untouched.
import type { Config, Context } from 'https://edge.netlify.com';

const COUNTRIES = new Set(['AR', 'UY', 'CL', 'PY', 'BO', 'PE', 'EC', 'CO', 'VE', 'MX', 'GT', 'HN', 'SV', 'NI', 'CR', 'PA', 'CU', 'DO', 'PR', 'ES']);
const BOTS = /bot|crawl|spider|slurp|googlebot|bingbot|gptbot|claudebot|claude-web|anthropic|perplexity|oai-searchbot|chatgpt|duckduckbot|baiduspider|yandex|applebot|facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegram|slackbot|discordbot|ia_archiver|petalbot|bytespider|ccbot|cohere|amazonbot|youbot|lighthouse|headless/i;

export default async (request: Request, context: Context) => {
  const next = async () => {
    const res = await context.next();
    res.headers.append('Vary', 'Accept-Language, Cookie');
    return res;
  };
  const url = new URL(request.url);
  if (url.pathname !== '/' || (request.method !== 'GET' && request.method !== 'HEAD')) return context.next();
  if (BOTS.test(request.headers.get('user-agent') ?? '')) return context.next();

  const saved = /(?:^|;\s*)mer_lang=(en|es)(?:;|$)/.exec(request.headers.get('cookie') ?? '')?.[1];
  if (saved === 'en') return next();
  const wantsEs =
    saved === 'es' ||
    /^\s*es\b/i.test(request.headers.get('accept-language') ?? '') ||
    COUNTRIES.has((context.geo?.country?.code ?? '').toUpperCase());
  if (!wantsEs) return next();

  return new Response(null, {
    status: 302,
    headers: { Location: `/es/${url.search}`, Vary: 'Accept-Language, Cookie', 'Cache-Control': 'no-store' },
  });
};

export const config: Config = { path: '/' };
