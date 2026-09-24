import * as React from 'react';
/** Bracketed uppercase tag used inside project "number_component" labels: [DESIGN] [DEVELOPMENT]. */
export interface TagComponentProps {
  className?: string;
  style?: React.CSSProperties;
  /** Tag text. Default "Tag". */
  label?: string;
  /** Figma text-layer prop (alias of label). */
  text1?: string;
  /** Text + bracket color. Default rgba(0,0,0,0.6). */
  color?: string;
  /** Font size in px. Default 14 (website instances use 12.528). */
  size?: number;
}
export declare const TagComponent: React.FC<TagComponentProps>;
export default TagComponent;
