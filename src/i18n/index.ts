// Copy access. Every component and data module reads its text from `copy` (English today: src/i18n/en.ts).
import { en } from './en';

export type Copy = typeof en;
export const copy: Copy = en;

/** Fills `{name}` tokens: fmt('{client} — {title}', { client, title }). Unknown tokens are left as they are. */
export const fmt = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (token, key: string) => (key in vars ? String(vars[key]) : token));
