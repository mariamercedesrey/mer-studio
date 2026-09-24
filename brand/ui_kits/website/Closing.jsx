// Final CTA, contact block, footer. Figma: Website / Desktop › Final CTA, Contact, Footer
function Hairline() { return <div style={{ height: 0, borderTop: '0.3px solid rgb(200,200,200)' }} />; }

function Closing({ onNav }) {
  const { Button, SignatureDot } = window.DesignSystem_e0175b;
  const mono13 = { fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: '13.200px', letterSpacing: '0.825px', color: 'rgb(20,20,20)', textTransform: 'uppercase', whiteSpace: 'nowrap' };
  return (
    <>
      <Hairline /><Hairline />
      <section data-screen-label="08 Final CTA" style={{ position: 'relative', height: 447, overflow: 'hidden', backgroundColor: 'rgb(20,20,20)', display: 'flex', flexDirection: 'column', gap: 45, padding: '66px 48px', boxSizing: 'border-box' }}>
        <div style={{ width: 810, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ fontFamily: 'var(--font-technical)', fontSize: 16, lineHeight: '100%', letterSpacing: '0.020em', color: '#fff' }}>That's all for now.</span>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 80, lineHeight: '90px', letterSpacing: '-1.088px', color: '#fff' }}>Got a project in mind?<br />Let’s talk<SignatureDot size={24} animate style={{ marginLeft: 12 }} /></h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button label="lets talk" style={{ width: 172, height: 56 }} onClick={() => onNav('contact')} />
        </div>
      </section>
      <Hairline />
      <section id="contact" data-screen-label="09 Contact" style={{ backgroundColor: 'rgb(20,20,20)', padding: 48, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <img src="../../assets/logo-negative.svg" alt="mer.studio" style={{ width: 305.156, height: 47.788, display: 'block' }} />
            <div style={{ display: 'flex', gap: 22 }}>
              {['hello@mer.studio', '+54 9 11 41742309'].map((t) => <a key={t} href={t.includes('@') ? 'mailto:' + t : 'tel:+5491141742309'} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: 1.2, color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>{t}</a>)}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: 443 }}>
            {[['Selected Works', 'work'], ['Services', 'services'], ['AI Visibility', 'services'], ['About Us', 'about']].map(([t, id]) => (
              <a key={t} href={'#' + id} onClick={(e) => { e.preventDefault(); onNav(id); }} style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.010em', color: '#fff', textDecoration: 'none' }}>{t}</a>
            ))}
          </div>
        </div>
      </section>
      <footer data-screen-label="10 Footer" style={{ height: 51, display: 'flex', padding: '14px 48px', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', background: '#fff' }}>
        <span style={mono13}>©2026 mer.studio™ All Rights Reserved</span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={mono13}>Working Worldwide from</span>
          <span style={{ ...mono13, height: 23, boxShadow: 'inset 0 0 0 1px rgb(20,20,20)', display: 'inline-flex', alignItems: 'center', padding: '4px 14px', boxSizing: 'border-box' }}>argentina</span>
        </div>
      </footer>
    </>
  );
}
Object.assign(window, { Closing });
