// Intentional addition — reusable Project Detail pattern, modelled on Figma "Frame 1984078285" (node 2033:1913).
// Structure only. Open/close transitions, scroll behaviour and image motion are intentionally NOT defined yet —
// hook into data-state / onClose / the section slots when motion specs arrive.
import React from 'react';

function PDRoleChip({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height: 27, padding: '7px 9px', boxSizing: 'border-box',
      backgroundColor: 'var(--surface-raised-dark)', color: 'var(--color-neutral-0)',
      fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 13, lineHeight: 1, letterSpacing: '0.020em',
      textTransform: 'uppercase', whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

function PDArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M9 6.5h8.5V15M17.5 6.5 6.5 17.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PDCloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectDetail(_p = {}) {
  const {
    client = 'Asociart',
    linkLabel = 'asociart.com',
    linkHref,
    title = 'Reengineering a 13-module legacy platform',
    meta = '[Insurance & Finance] AT NEORIS',
    roles = ['Design System', 'PRODUCT DESIGN', 'Front-End'],
    blocks = [],
    heroImage,
    gallery = [],
    overlay = false,
    open = true,
    onClose,
    children,
    className,
    style,
  } = _p;

  React.useEffect(() => {
    if (!overlay || !open || !onClose) return;
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [overlay, open, onClose]);

  if (!open) return null;
  const ink = 'var(--text-primary)';

  return (
    <article
      role={overlay ? 'dialog' : undefined}
      aria-modal={overlay || undefined}
      aria-label={title}
      data-state={open ? 'open' : 'closed'}
      className={className}
      style={{
        position: overlay ? 'fixed' : 'relative',
        inset: overlay ? 0 : undefined,
        zIndex: overlay ? 100 : undefined,
        overflowY: overlay ? 'auto' : undefined,
        backgroundColor: 'var(--surface-soft)',
        color: ink,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <header style={{ position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'var(--surface-soft)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '30px 16px 0 48px', minHeight: 83, boxSizing: 'border-box' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{client}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {linkLabel && (
              <a href={linkHref ?? '#'} target={linkHref ? '_blank' : undefined} rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 9, height: 48, padding: '0 26px', borderRadius: 55,
                boxShadow: 'inset 0 0 0 1px rgb(20,20,20)', color: ink, textDecoration: 'none', boxSizing: 'border-box',
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, lineHeight: '11.581px', letterSpacing: '0.030em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>{linkLabel}<PDArrowIcon /></a>
            )}
            {onClose && (
              <button type="button" onClick={onClose} aria-label="Close project" style={{
                width: 48, height: 48, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'transparent', border: 'none', color: ink, cursor: 'pointer', padding: 0,
              }}><PDCloseIcon /></button>
            )}
          </div>
        </div>
        <div style={{ height: 0, margin: '36px 16px 0 20px', borderTop: '0.5px solid rgb(141,141,141)' }} />
      </header>

      <section style={{ padding: '47px 48px 0 48px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 200, fontSize: 62, lineHeight: 1.2, textWrap: 'pretty' }}>{title}</h1>
        {meta && <span style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: '100%', letterSpacing: '0.020em', textTransform: 'uppercase' }}>{meta}</span>}
        {roles.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>{roles.map((r) => <PDRoleChip key={r}>{r}</PDRoleChip>)}</div>
        )}
      </section>

      <section style={{ padding: '72px 48px 95px 43px', display: 'flex', flexDirection: 'column', gap: 64 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 48 }}>
          <div style={{ flex: '1 1 400px', maxWidth: 561, display: 'flex', flexDirection: 'column', gap: 29 }}>
            {blocks.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: '100%' }}>{b.heading}</h2>
                <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 18, lineHeight: '100%', textWrap: 'pretty' }}>{b.body}</p>
              </div>
            ))}
          </div>
          {heroImage && <div style={{ flex: '0 1 725px', aspectRatio: '725 / 688', background: `url(${heroImage}) center / cover no-repeat` }} />}
        </div>
        {gallery.length > 0 && (
          <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
            {gallery.map((g, i) => (
              <div key={i} style={{
                position: g.overlay ? 'absolute' : 'relative', left: g.overlay ? 0 : undefined, top: g.overlay ? 0 : undefined, zIndex: g.overlay ? 1 : undefined,
                width: g.width, height: g.height, maxWidth: '100%', flexShrink: 0, borderRadius: g.radius ?? 0,
                boxShadow: g.shadow ? '22.431px 44.863px 12.462px 0px rgba(0,0,0,0.12)' : undefined,
                background: `url(${g.src}) center / cover no-repeat`,
              }} />
            ))}
          </div>
        )}
        {children}
      </section>
    </article>
  );
}
export default ProjectDetail;
