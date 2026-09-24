import * as React from 'react';
/**
 * MER pill CTA. Primary (yellow), Secondary (ink), Ghost (text only). Default + Disabled. Min 48px tall.
 */
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Label text. Lowercase in MER copy: "book a call", "start a project". Default "discover more". */
  label?: string;
  children?: React.ReactNode;
  /** Visual style. Alias of `style2` (the Figma property name). */
  variant?: "primary" | "secondary" | "ghost";
  /** Figma property name for the style axis. */
  style2?: "primary" | "secondary" | "ghost";
  state?: "default" | "disabled";
  disabled?: boolean;
  /** Renders an <a> when provided. */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
