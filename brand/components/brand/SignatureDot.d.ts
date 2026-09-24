import * as React from 'react';
/**
 * The MER signature yellow dot — punctuation after headlines, the dot in "mer.", and the brand's moving character.
 * Intentional addition (not a Figma component): wraps the repeated 24px ellipse + the documented 2s loop.
 * @intentionalAddition
 */
export interface SignatureDotProps {
  className?: string;
  style?: React.CSSProperties;
  /** Diameter in px. Headline punctuation = 24; wordmark = 6.6–10; hero mark = 45.954. Default 24. */
  size?: number;
  /** accent = rgb(238,187,10); dark = rgb(214,169,12) (on light header); muted = rgb(126,126,126) (process line). */
  tone?: "accent" | "dark" | "muted";
  /** Enables the 2s bounce/translate/rotate/squash loop. Static under prefers-reduced-motion. */
  animate?: boolean;
}
export declare const SignatureDot: React.FC<SignatureDotProps>;
export default SignatureDot;
