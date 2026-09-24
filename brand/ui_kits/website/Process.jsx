// How it works (charcoal) + About (ink). Figma: Website / Desktop › How It Works, About
const STEPS = [
  ['01', 'Call', 'Twenty minutes. You tell us what you need, by when, and what budget you have.'],
  ['02', 'Proposal', 'Within 48 hours you get scope, final price, delivery date and what is out of scope. If it does not work for you, we stop there.'],
  ['03', 'Design and build', 'We work in blocks and show you progress along the way. Two rounds of revisions included.'],
  ['04', 'Handover', 'Launch, files and accounts in your name. Thirty days of support in case anything breaks.'],
];
const STATS = [
  ['25+', 'years of experience designing products, brands and websites'],
  ['35+', 'websites and digital products delivered directly to clients'],
  ['1:1', 'Direct access to the senior designer, from first call to final files'],
  ['7', 'years designing for US startups, working alongside founders'],
];

function HowItWorks() {
  const { SignatureDot } = window.DesignSystem_e0175b;
  return (
    <section data-screen-label="06 How it works" style={{ position: 'relative', height: 624.25, backgroundColor: 'rgb(52,52,52)', padding: '95.25px 48px 96px 48px', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 81 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ fontFamily: 'var(--font-technical)', fontSize: 16, lineHeight: '100%', letterSpacing: '0.020em', color: 'rgb(245,243,243)', textTransform: 'uppercase' }}>How it works</span>
          <h2 style={{ margin: 0, width: 810, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 45, lineHeight: '100%', letterSpacing: '-1.088px', color: 'rgb(245,243,243)' }}>Four steps, no surprises<SignatureDot size={24} style={{ marginLeft: 8 }} /></h2>
          <p style={{ margin: 0, width: 739, fontFamily: 'var(--font-body-alt)', fontSize: 16, lineHeight: '21.600px', color: 'rgb(245,243,243)' }}>Every project starts with a 20-minute call. You get back a proposal with a fixed scope, a final price and a delivery date.</p>
        </div>
        <div style={{ display: 'flex', gap: 0.75, justifyContent: 'center' }}>
          {STEPS.map(([n, t, d]) => (
            <div key={n} style={{ width: 335.438, display: 'flex', flexDirection: 'column', gap: 14, padding: '22px 12px', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: 'var(--font-technical)', fontSize: 17, lineHeight: '13.200px', letterSpacing: '1.155px', color: 'rgb(245,243,243)' }}>{n}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: '25.920px', letterSpacing: '-0.480px', color: 'rgb(245,243,243)' }}>{t}</span>
              <span style={{ fontFamily: 'var(--font-body-alt)', fontSize: 15, lineHeight: '20px', color: 'rgb(245,243,243)' }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: -16, top: 397.264, width: 1472, height: 148, overflow: 'hidden' }}>
        <img src="../../assets/img/process-line.svg" alt="" style={{ position: 'absolute', left: 0, top: 0, width: 1472, height: 148, transform: 'scaleY(-1)' }} />
        <SignatureDot size={24} tone="muted" style={{ position: 'absolute', left: 1183, top: 34 }} />
      </div>
      <div style={{ position: 'absolute', left: 923, top: 125.463, width: 517, height: 259, background: 'url(../../assets/img/how-it-works.png) center / cover no-repeat' }} />
    </section>
  );
}

function About({ onNav }) {
  const { Button } = window.DesignSystem_e0175b;
  return (
    <section id="about" data-screen-label="07 About" style={{ height: 760, backgroundColor: 'rgb(20,20,20)', display: 'flex', flexDirection: 'column', gap: 58, padding: '100px 48px', alignItems: 'center', boxSizing: 'border-box' }}>
      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 297, outline: '0.750px dashed rgb(246,246,246)', outlineOffset: '-0.375px', display: 'flex', gap: 50, alignItems: 'center' }}>
          <div style={{ width: 334, height: 297, flexShrink: 0, transform: 'scaleX(-1)', background: 'url(../../assets/img/mer-portrait.png) center / cover no-repeat', outline: '0.311px dashed rgb(246,246,246)', outlineOffset: '-0.311px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flexGrow: 1, paddingRight: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '3.952px 0' }}>
              <span style={{ fontFamily: 'var(--font-technical)', fontSize: 16, lineHeight: '100%', letterSpacing: '0.020em', color: 'rgb(246,246,246)', textTransform: 'uppercase' }}>about us</span>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 43.5, lineHeight: '44.370px', letterSpacing: '-1.088px', color: 'rgb(246,246,246)' }}>I'm Mer.&nbsp; I've been designing digital products for more than 25 years.</h2>
            </div>
            <p style={{ margin: 0, fontFamily: 'var(--font-body-alt)', fontSize: 16, lineHeight: '21.600px', color: 'rgb(246,246,246)' }}>Eight of those years went into complex enterprise products, and seven into working with US startups, often directly with founders and CEOs. That is what I bring to a small project: the judgement to decide quickly and well, and the ability to build what I design.</p>
          </div>
        </div>
        <div style={{ height: 157.42, border: '0.450px solid rgb(246,246,246)', display: 'flex' }}>
          {STATS.map(([v, d]) => (
            <div key={v} style={{ flex: 1, border: '0.400px dashed rgb(246,246,246)', display: 'flex', flexDirection: 'column', gap: 12, padding: '25px 40px', justifyContent: 'center', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 42, lineHeight: '31.500px', letterSpacing: '-0.945px', color: 'rgb(238,187,10)', height: 53, display: 'flex', alignItems: 'center' }}>{v}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '100%', color: 'rgb(246,246,246)', minHeight: 42 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <Button label="book a call" style={{ width: 201, height: 56 }} onClick={() => onNav('contact')} />
    </section>
  );
}
Object.assign(window, { HowItWorks, About });
