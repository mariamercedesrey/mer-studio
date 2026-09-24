import * as React from 'react';
export interface ProjectDetailBlock { heading: string; body: string; }
export interface ProjectDetailImage {
  src: string;
  width: number | string;
  height: number | string;
  /** Soft drop shadow used on desktop screenshots (22.431px 44.863px 12.462px rgba(0,0,0,.12)). */
  shadow?: boolean;
  radius?: number;
  /** Absolutely positioned at the row's top-left, over the next image (the mobile-over-desktop layout). */
  overlay?: boolean;
}
/**
 * Immersive full-screen case study for one Selected Work project. Intentional addition modelled on Figma
 * "Frame 1984078285" — reuse for every project with its own content. Transitions not yet specified.
 * @intentionalAddition
 */
export interface ProjectDetailProps {
  className?: string;
  style?: React.CSSProperties;
  /** Client name, top-left, Outfit 400 48px. */
  client?: string;
  /** Live-site pill label (uppercase). Omit to hide. */
  linkLabel?: string;
  linkHref?: string;
  /** Project title, Outfit 200 62px. */
  title?: string;
  /** Mono meta line: "[Industry] AT COMPANY". */
  meta?: string;
  /** Role chips (dark raised chip, uppercase). */
  roles?: string[];
  /** Left column narrative: "Starting point", "What we did", "Outcome"… */
  blocks?: ProjectDetailBlock[];
  /** Right-column key visual (725×688 ratio). */
  heroImage?: string;
  /** Second-row image strip. */
  gallery?: ProjectDetailImage[];
  /** Fixed, full-viewport dialog (Esc closes). */
  overlay?: boolean;
  open?: boolean;
  onClose?: () => void;
  /** Extra case-study sections appended after the gallery. */
  children?: React.ReactNode;
}
export declare const ProjectDetail: React.FC<ProjectDetailProps>;
export default ProjectDetail;
