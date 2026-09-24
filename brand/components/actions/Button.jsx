// figma node: 2007:229 Button (6 variants: Style × State)
import React from 'react';

const BTN_BG = {
  primary: 'var(--action-primary-background)',
  secondary: 'var(--action-secondary-background)',
  ghost: 'transparent',
};
const BTN_FG = {
  primary: 'var(--action-primary-text)',
  secondary: 'var(--action-secondary-text)',
  ghost: 'var(--action-ghost-text)',
};
const BTN_HOVER_BG = {
  primary: 'var(--accent-bright)',
  secondary: 'var(--color-neutral-800)',
  ghost: 'var(--fills-primary)',
};

export function Button(_p = {}) {
  const { label = 'discover more', style2, variant, state = 'default', disabled, onClick, href, type = 'button', className, style, children, ...rest } = _p;
  const v = variant ?? style2 ?? 'primary';
  const isDisabled = disabled || state === 'disabled';
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  let bg = BTN_BG[v] ?? BTN_BG.primary;
  let fg = BTN_FG[v] ?? BTN_FG.primary;
  if (isDisabled) {
    bg = v === 'ghost' ? 'transparent' : 'var(--action-disabled-background)';
    fg = 'var(--action-disabled-text)';
  } else if (hover) {
    bg = BTN_HOVER_BG[v];
  }

  const Tag = href && !isDisabled ? 'a' : 'button';
  return (
    <Tag
      {...rest}
      href={Tag === 'a' ? href : undefined}
      type={Tag === 'button' ? type : undefined}
      disabled={Tag === 'button' ? isDisabled : undefined}
      aria-disabled={isDisabled || undefined}
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      className={className}
      style={{
        width: 'fit-content',
        minHeight: 48,
        borderRadius: 999,
        border: 'none',
        backgroundColor: bg,
        display: 'inline-flex',
        flexDirection: 'row',
        gap: 8,
        padding: '14px 20px 14px 20px',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        textDecoration: 'none',
        transform: press && !isDisabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'background-color 160ms var(--ease-precise), transform 160ms var(--ease-precise)',
        outlineOffset: 3,
        ...style,
      }}
    >
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: 'nowrap',
        lineHeight: '20px',
        color: fg,
      }}>{children ?? label}</span>
    </Tag>
  );
}
export default Button;
