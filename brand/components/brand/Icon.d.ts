import * as React from 'react';
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "positive" | "negative" | "alternative";
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
