// figma node: 7:1202 tag_component — bracketed uppercase tag: [ DESIGN ]
import React from 'react';

export function TagComponent(_p = {}) {
  const { text1, label, color = 'rgba(0,0,0,0.6)', size = 14, className, style } = _p;
  const bracket = (side) => ({
    width: 3,
    alignSelf: 'stretch',
    boxSizing: 'border-box',
    borderTop: '1.5px solid currentColor',
    borderBottom: '1.5px solid currentColor',
    [side === 'left' ? 'borderLeft' : 'borderRight']: '1.5px solid currentColor',
    flexShrink: 0,
  });
  return (
    <span className={className} style={{
      width: 'fit-content',
      display: 'inline-flex',
      flexDirection: 'row',
      gap: 4,
      alignItems: 'stretch',
      color,
      ...style,
    }}>
      <span aria-hidden="true" style={bracket('left')} />
      <span style={{
        fontFamily: 'Aspekta, var(--font-display)',
        fontWeight: 700,
        fontSize: size,
        whiteSpace: 'nowrap',
        lineHeight: 1,
        letterSpacing: '0.020em',
        color,
        textTransform: 'uppercase',
        padding: '1px 0',
      }}>{label ?? text1 ?? 'Tag'}</span>
      <span aria-hidden="true" style={bracket('right')} />
    </span>
  );
}
export default TagComponent;
