// Copy access. Every component and data module reads its text through `getCopy(locale)` (English: en.ts, Spanish: es.ts).
import { en } from './en';
import { es } from './es';
import { localeOf as pathLocale, type Locale } from './routes';

export type Copy = typeof en;
export type { Locale };
export { LOCALES, DEFAULT_LOCALE, pagePath, workPath, anchorHash, pathIn, pageOf } from './routes';

const dictionaries: Record<Locale, Copy> = { en, es };
export const getCopy = (locale: Locale): Copy => dictionaries[locale];

/** Language of a request: /es/… is Spanish, everything else English. */
export const localeOf = (url: URL): Locale => pathLocale(url.pathname);

/** Fills `{name}` tokens: fmt('{client} — {title}', { client, title }). Unknown tokens are left as they are. */
export const fmt = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (token, key: string) => (key in vars ? String(vars[key]) : token));
