import * as React from 'react';
export interface LogotypoProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "vertical" | "horizontal";
  /** Text content; defaults to "Agente". */
  text1?: string;
  /** Text content; defaults to "Mamá". */
  text2?: string;
  /** Text content; defaults to "AI". */
  text3?: string;
}
export declare const Logotypo: React.FC<LogotypoProps>;
export default Logotypo;
