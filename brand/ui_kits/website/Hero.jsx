// Hero — header bar, headline, m mark, industries. Figma: Website / Desktop › Hero (149:5103)
const heroMono = { fontFamily: 'var(--font-technical)', fontWeight: 400, textTransform: 'uppercase' };

function SiteNav({ onNav }) {
  const items = [['selected work', 'work'], ['Services', 'services'], ['AI Visibility', 'services'], ['About us', 'about']];
  return (
    <nav style={{ width: 339.418, height: 32, borderRadius: 30.333, backgroundColor: 'rgba(120,120,120,0.2)', backdropFilter: 'blur(7.222px)', WebkitBackdropFilter: 'blur(7.222px)', display: 'flex', alignItems: 'center', padding: '5.778px 11px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 19.262, padding: '0 12.316px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        {items.map(([label, id]) => (
          <a key={label} href={'#' + id} onClick={(e) => { e.preventDefault(); onNav(id); }} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 13, lineHeight: '13.972px', letterSpacing: '0.040em', color: 'rgb(20,20,20)', textTransform: 'uppercase', whiteSpace: 'nowrap', textDecoration: 'none' }}>{label}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero({ onNav }) {
  const { Button, SignatureDot } = window.DesignSystem_e0175b;
  const industries = ['[Agribusiness]', '[Fashion]', '[Insurance]', '[Finance]', '[Foreign Trade]', '[startups]', '[Enterprise]', '[Healthcare]'];
  return (
    <section data-screen-label="01 Hero" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', height: 778, backgroundColor: 'var(--surface-soft)', padding: '28px 48px 100px 48px', boxSizing: 'border-box', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 116 }}>
          <div style={{ height: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
              <img src="../../assets/logo.svg" alt="mer.studio" style={{ width: 181.815, height: 28.039, display: 'block' }} />
              <span style={{ ...heroMono, fontSize: 13, lineHeight: '10px', letterSpacing: '1.718px', color: 'rgb(119,119,119)', whiteSpace: 'nowrap' }}>DESIGN AND BUILD, END TO END</span>
            </div>
            <div style={{ marginRight: 12 }}><SiteNav onNav={onNav} /></div>
          </div>
          <div style={{ width: 1248, height: 502, display: 'flex', flexDirection: 'column', gap: 23.75, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <div style={{ width: 880, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: '100%', letterSpacing: '2px', color: 'rgb(20,20,20)' }}>From the first decision to the last detail.</span>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 95, lineHeight: '100%', letterSpacing: '-3.332px', color: 'rgb(20,20,20)' }}>Strategy, design and build, end to end.</h1>
            </div>
            <Button label="book a call" style={{ height: 52 }} onClick={() => onNav('contact')} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: -18, top: 548, width: 55, height: 55, borderRadius: '50%', backgroundColor: 'rgb(246,246,246)' }} />
      </div>
      <div style={{ position: 'relative', marginTop: -65, height: 684, padding: '0 48px 70px 0', boxSizing: 'border-box' }}>
        <div style={{ height: 614, display: 'flex', gap: 48, alignItems: 'center' }}>
          <div style={{ width: 929, height: 614, display: 'flex', flexDirection: 'column', gap: 24, flexShrink: 0 }}>
            <div data-slot="hero-visual" style={{ height: 507, background: 'rgb(240,240,240)' }} />
            <div style={{ padding: '22px 48px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span style={{ ...heroMono, fontSize: 16, lineHeight: '100%', letterSpacing: '0.020em', color: 'rgb(20,20,20)' }}>wHERE WE'VE WORKED</span>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {industries.map((t) => <span key={t} style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1, letterSpacing: '0.010em', color: 'rgb(20,20,20)', textTransform: 'capitalize', whiteSpace: 'nowrap' }}>{t}</span>)}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '25px 0', flexGrow: 1, alignSelf: 'stretch', boxSizing: 'border-box' }}>
            <div style={{ position: 'relative', width: 275, height: 188, flexShrink: 0 }}>
              <span style={{ position: 'absolute', left: 0, bottom: 0, fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 285.42, lineHeight: 0.66, letterSpacing: '-0.070em', color: 'rgb(20,20,20)' }}>m</span>
              <SignatureDot size={45.954} animate style={{ position: 'absolute', left: 190.281, top: 140.445 }} />
            </div>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, lineHeight: '100%', color: 'rgb(20,20,20)' }}>Strategy, design and code, handled end to end by one team. Twenty-five years across enterprise products and US startups, applied at any size — a brand, a website, an online store, a full platform.</p>
            <Button label="start a project" style={{ height: 52 }} onClick={() => onNav('contact')} />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 28, width: 32, height: 32, backgroundColor: 'rgb(52,52,52)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 12, lineHeight: '13.972px', color: '#fff' }}>EN</span>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
