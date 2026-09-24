// Services — pixel banner, service list, always-included card, add-ons. Figma: Website / Desktop › Services
function SectionHeading({ eyebrow, children, color = 'rgb(20,20,20)', width, size = 45 }) {
  const { SignatureDot } = window.DesignSystem_e0175b;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, width }}>
      <span style={{ fontFamily: 'var(--font-technical)', fontSize: 16, lineHeight: '100%', letterSpacing: '0.020em', color, textTransform: 'uppercase' }}>{eyebrow}</span>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size, lineHeight: '100%', letterSpacing: '-0.020em', color }}>
        {children}<SignatureDot size={24} style={{ marginLeft: 8, verticalAlign: 'baseline' }} />
      </h2>
    </div>
  );
}

const SERVICES = [
  ['Branding', 'Identity, and the system to keep it consistent.'],
  ['Websites', 'A landing, a full site, or an online store.'],
  ['Digital Product', "An app or a platform that doesn't exist yet."],
  ['AI VISIBILITY · GEO / AEO', 'So people find you when they ask an AI, not just Google.'],
];
const INCLUDED = [
  ['Strategy', 'Every project starts with the business decision, not the screen.'],
  ['Design & build, end to end', 'The same hands design it and ship it. No handoff, nothing lost in translation.'],
  ['You own it', 'Files and accounts handed over in your name.'],
];
const ADDONS = [
  ['Design System', 'Exported tokens, a documented component library, and a usage guide — so your team, or an AI agent, can keep building on it without breaking the system.'],
  ['Maintenance', 'Optional, after handover. Changes, updates, backups and priority response.'],
];

function ServiceRow({ n, name, desc }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ height: 1, backgroundColor: 'rgba(120,120,120,0.2)' }} />
      <div style={{ height: 29, display: 'flex', padding: '0 2px 0 55px', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 25, lineHeight: 1, letterSpacing: '0.070em', color: 'rgb(20,20,20)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 14, lineHeight: '17.400px', color: 'rgb(20,20,20)', whiteSpace: 'nowrap' }}>{desc}</span>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15, lineHeight: 1, letterSpacing: '0.020em', color: hover ? 'var(--accent-dark)' : 'rgb(20,20,20)', transition: 'color 160ms' }}>[{n}]</span>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <div data-screen-label="04 Pixel banner" style={{ width: 1436, height: 255, background: 'url(../../assets/img/pixel-banner.png) 49.999% 17.594% / 100.182% 159.296% no-repeat, rgb(245,243,243)' }} />
      <section id="services" data-screen-label="05 Services" style={{ backgroundColor: 'rgb(245,243,243)', padding: '3px 48px 100px 48px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 45 }}>
          <SectionHeading eyebrow="services" width={822}>Strategy, Design &amp; Build, end to end</SectionHeading>
          <div style={{ position: 'relative', height: 285, display: 'flex', alignItems: 'center', paddingLeft: 44 }}>
            <span style={{ position: 'absolute', left: 0, top: 0, width: 285, height: 30, transform: 'matrix(0,-1,1,0,0,285)', transformOrigin: '0 0', fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontWeight: 400, fontSize: 37, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: '30px', letterSpacing: '1.320px', color: 'rgb(214,169,12)' }}>Always included</span>
            <div style={{ width: 354, alignSelf: 'stretch', borderRadius: 2.25, backgroundColor: 'rgb(63,63,63)', display: 'flex', flexDirection: 'column', gap: 12, padding: '23px 24px', justifyContent: 'center', boxSizing: 'border-box', flexShrink: 0 }}>
              {INCLUDED.map(([t, d]) => (
                <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 306 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1, letterSpacing: '0.070em', color: '#fff' }}>{t}</span>
                  <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 14, lineHeight: '17.400px', color: '#fff' }}>{d}</span>
                </div>
              ))}
            </div>
            <div style={{ height: 285, display: 'flex', flexDirection: 'column', gap: 26, justifyContent: 'center', flexGrow: 1 }}>
              {SERVICES.map(([name, desc], i) => <ServiceRow key={name} n={i + 1} name={name} desc={desc} />)}
              <div style={{ height: 1, backgroundColor: 'rgba(120,120,120,0.2)' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 54, justifyContent: 'center', alignItems: 'flex-start' }}>
            <span style={{ width: 332, flexShrink: 0, fontFamily: 'var(--font-technical)', fontSize: 26, textAlign: 'right', lineHeight: '38.400px', letterSpacing: '-0.480px', color: 'rgb(20,20,20)' }}>Added to any project — or contracted on their own.</span>
            <div style={{ display: 'flex', gap: 2, flexGrow: 1, alignSelf: 'stretch' }}>
              {ADDONS.map(([t, d]) => (
                <article key={t} style={{ border: '1px dashed rgb(155,155,155)', padding: '22px 20px', flexGrow: 1, flexBasis: 0, display: 'flex', flexDirection: 'column', gap: 5.83 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: '25.920px', letterSpacing: '-0.480px', color: 'rgb(20,20,20)' }}>{t}</span>
                  <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 12, lineHeight: '17.400px', color: 'rgb(20,20,20)' }}>{d}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
Object.assign(window, { Services, SectionHeading });
