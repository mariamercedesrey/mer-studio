// Google Analytics 4 — single source for the measurement ID and the Consent Mode v2 regions. Used by
// src/components/primitives/Analytics.astro and checked by scripts/check-site.mjs (the ID must appear exactly once per page).
export const GA_ID = 'G-1YXB0D7MGB';
/** Consent defaults to "denied" here: EEA (EU + IS, LI, NO), the United Kingdom and Switzerland. Granted everywhere else. */
export const CONSENT_DENIED_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO', 'GB', 'CH',
] as const;
/** Client-side stand-in for CONSENT_DENIED_REGIONS (the browser has no country): IANA time zones of Europe (EEA, GB, CH and, on purpose, the rest of
 *  Europe), the Atlantic/African/Asian zones of EEA territories, and Iceland. Third-party embeds that need consent (Clutch widget) use it; errs towards asking. */
export const CONSENT_TIMEZONE_RE = '^(Europe/|Atlantic/(Reykjavik|Canary|Madeira|Azores|Faroe)$|Africa/Ceuta$|Asia/Nicosia$|Arctic/Longyearbyen$)';
