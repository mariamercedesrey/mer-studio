// Client marquee — looping logo carousel on ink at 55% opacity. Figma: Client Marquee (149:5176)
const MQ = '../../assets/clients/';
function MqMask({ src, w, h }) {
  const m = `url(${src}) center / contain no-repeat`;
  return <span style={{ display: 'block', width: w, height: h, flexShrink: 0, background: 'rgb(246,246,246)', WebkitMask: m, mask: m }} />;
}
function MqImg({ src, w, h, whiteBg }) {
  return <span style={{ display: 'block', width: w, height: h, flexShrink: 0, background: `url(${src}) center / contain no-repeat`, filter: whiteBg ? 'grayscale(1) invert(1)' : 'brightness(0) invert(0.965)', mixBlendMode: whiteBg ? 'screen' : 'normal' }} />;
}
function MqLogos() {
  const { Icon, Logotypo } = window.DesignSystem_e0175b;
  return (
    <>
      <MqImg src={MQ + 'client-01.png'} w={117.403} h={37.543} />
      <MqMask src={MQ + 'client-09.svg'} w={112.269} h={30.076} />
      <MqImg src={MQ + 'client-02.png'} w={126.7} h={54.014} />
      <MqMask src={MQ + 'client-10.svg'} w={66.921} h={31.059} />
      <MqImg src={MQ + 'client-03.png'} w={92.465} h={36.62} />
      <MqMask src={MQ + 'client-11.svg'} w={92.465} h={46.69} />
      {['04', '05', '06', '07', '08'].map((n) => <MqImg key={n} src={MQ + 'client-' + n + '.png'} w={74.48} h={59.248} whiteBg />)}
      <div style={{ display: 'flex', gap: 3.307, alignItems: 'center', flexShrink: 0, '--primary-color': 'rgb(246,246,246)' }}>
        <Icon type="positive" style={{ width: 39.683, height: 39.683 }} />
        <Logotypo type="horizontal" style={{ gap: 1.653 }} />
      </div>
      <MqMask src={MQ + 'client-12.svg'} w={169.105} h={33.873} />
    </>
  );
}
function ClientMarquee() {
  const m = 'url(../../assets/icons/scroll-arrow.svg) center / contain no-repeat';
  return (
    <section data-screen-label="02 Client marquee" style={{ position: 'relative', height: 249, backgroundColor: 'rgb(20,20,20)', display: 'flex', flexDirection: 'column', padding: '80px 0 20px 0', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div className="mer-marquee-track" style={{ display: 'flex', width: 'max-content', opacity: 0.55 }}>
          <div style={{ display: 'flex', gap: 55, alignItems: 'center', paddingRight: 55 }}><MqLogos /></div>
          <div aria-hidden="true" style={{ display: 'flex', gap: 55, alignItems: 'center', paddingRight: 55 }}><MqLogos /></div>
        </div>
      </div>
      <span style={{ width: 50, height: 50, transform: 'rotate(180deg)', background: 'rgb(238,187,10)', WebkitMask: m, mask: m }} />
    </section>
  );
}
Object.assign(window, { ClientMarquee });
