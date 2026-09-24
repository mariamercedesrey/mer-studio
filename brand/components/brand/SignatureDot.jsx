// Intentional addition — the MER signature yellow dot as a reusable, motion-ready element.
import React from 'react';

export function SignatureDot(_p = {}) {
  const { size = 24, tone = 'accent', animate = false, className, style, ...rest } = _p;
  const bg = tone === 'dark' ? 'var(--accent-dark)' : tone === 'muted' ? 'rgb(126,126,126)' : 'var(--accent-primary)';
  return (
    <span
      aria-hidden="true"
      data-mer-dot=""
      {...rest}
      className={[animate ? 'mer-dot-anim' : '', className].filter(Boolean).join(' ') || undefined}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: bg,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
export default SignatureDot;
