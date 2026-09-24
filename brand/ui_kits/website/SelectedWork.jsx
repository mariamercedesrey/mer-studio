// Selected Work — scroll-driven editorial list. Items rest at 30% opacity; the one nearest the viewport centre
// becomes active (100%) and clickable. Thresholds/easing are provisional — refine when motion specs arrive.
const W = '../../assets/work/';
const bg = (src, extra = '') => `${extra}url(${W}${src}) center / cover no-repeat`;
const abs = (l, t, w, h, more = {}) => ({ position: 'absolute', left: l, top: t, width: w, height: h, ...more });

const PROJECTS = [
  {
    id: 'asociart', align: 'start', w: 1049, title: 'Reengineering a 13-module legacy platform ', meta: '[Insurance & Finance] AT NEORIS',
    roles: ['Design System', 'PRODUCT DESIGN', 'Front-End'],
    media: () => (
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgb(239,239,239)' }}>
        <div style={abs(0, -28.87, 748, 711, { background: `linear-gradient(90deg, rgba(239,239,239,0) 64.89%, rgb(239,239,239) 100%), ${bg('asociart-system.png')}` })} />
        <div style={abs(232, 153.1, 584.992, 347.76, { background: bg('asociart-desktop.png'), boxShadow: '0px 3.780px 3.780px 0px rgba(0,0,0,0.25)' })} />
        <div style={abs(802.189, 94.135, 210.638, 490.35, { background: bg('asociart-mobile.png') })} />
      </div>
    ),
    detail: {
      client: 'Asociart', linkLabel: 'asociart.com', linkHref: 'https://asociart.com',
      title: 'Reengineering a 13-module legacy platform',
      blocks: [
        { heading: 'Starting point', body: 'Asociart brought Neoris in to replace a monolithic legacy system running claims, legal, medical and financial operations across ten-plus departments. There was no UX practice on the product and no shared visual system. We were brought in to build that foundation while the platform was reengineered.' },
        { heading: 'What we did', body: 'Research with internal users and stakeholders, service blueprints for thirteen interconnected modules, and the Core Design System underneath all of them — 71+ components, token architecture for colour, type and spacing, documented in Storybook. Component states and interaction behaviour specified against WCAG contrast. Hands-on in Angular to keep the specs and the production UI aligned.' },
        { heading: 'Outcome', body: 'One shared foundation across thirteen modules and multiple teams, serving 500+ internal users. Five years on the account, 130+ sprints, a 98% successful build rate across active modules.' },
      ],
      heroImage: W + 'asociart-system.png',
      gallery: [
        { src: W + 'asociart-mobile.png', width: 153.785, height: 357.999, overlay: true },
        { src: W + 'asociart-desktop.png', width: 621.349, height: 369.374, shadow: true },
        { src: W + 'asociart-detail.png', width: 525, height: 321, radius: 8 },
      ],
    },
  },
  {
    id: 'orchardmile', align: 'end', w: 922, title: 'Turning creators into storefronts', meta: '[Ecommerce & Fashion] AT ORCHARDMILE',
    roles: ['Design System', 'PRODUCT DESIGN', 'Prototyping'],
    media: () => (
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgb(235,235,235)' }}>
        <div style={abs(36, 1.1, 886, 651, { background: bg('orchardmile-bg.png') })} />
        <div style={abs(36, 24.074, 328.288, 617.851, { background: bg('orchardmile-phone.png') })} />
      </div>
    ),
    heroImage: 'orchardmile-bg.png', client: 'Orchardmile',
  },
  {
    id: 'storefront', align: 'start', w: 1060, title: '250 brands, one storefront', meta: '[Ecommerce & Fashion] ',
    roles: ['Front-End', 'Growth Design'],
    media: () => (
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff' }}>
        <div style={{ position: 'absolute', left: -134.539, top: -189.63, display: 'flex' }}>
          {[0, 1, 2].map((i) => <div key={i} style={{ width: 410.992, height: 777.549, opacity: 0.7, background: `url(${W}storefront-bg.jpg) 50% 0% / 139.760% 373.563% no-repeat` }} />)}
        </div>
        <div style={abs(233, 153, 584.992, 347.76, { background: bg('asociart-desktop.png'), boxShadow: '0px 3.780px 3.780px 0px rgba(0,0,0,0.25)' })} />
      </div>
    ),
    heroImage: 'storefront-bg.jpg',
  },
  { id: 'coupon', align: 'end', w: 654, title: 'A coupon that works one-handed, in a crowd', meta: '[Consumer Brands]', roles: ['UX/UI', 'Mobile'], media: null },
  {
    id: 'industrial', align: 'start', w: 1049, title: 'Making an industrial process legible', meta: '[Agrobusiness] [Enterprise]',
    roles: ['branding', 'Brand System', 'Web Development'],
    media: () => (
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff', overflow: 'hidden' }}>
        <div style={abs(0, -45.9, 1063.946, 729, { background: `linear-gradient(180deg, rgba(2,18,36,0) 65.43%, rgb(2,18,36) 100%), ${bg('industrial-ocean.jpg')}` })} />
        <div style={abs(211, 70.1, 626, 513, { background: `url(${W}industrial-screen.png) 104.932% 50% / 100.412% 100% no-repeat` })} />
      </div>
    ),
    heroImage: 'industrial-ocean.jpg',
  },
  {
    id: 'safety', align: 'end', w: 831, h: 653, title: 'A safety net, not a productivity app', meta: '[Startups] ',
    roles: ['UX Research', 'Design System', 'AI-Assisted Build'],
    media: () => (
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgb(229,229,229)', overflow: 'hidden' }}>
        <div style={abs(342.662, 26.436, 227.137, 108.161, { background: bg('safety-logo.png') })} />
        <div style={abs(27.541, 27.025, 246.616, 970.19, { background: `url(${W}safety-long.png) 49.756% 0% / 111.171% 99.965% no-repeat` })} />
        <div style={abs(292.846, 170.4, 421.826, 456.978, { opacity: 0.55, background: bg('safety-group.png') })} />
        <div style={abs(578, 130, 256.102, 487.988, { transform: 'matrix(0.987,0.159,-0.159,0.987,0,0)', transformOrigin: '0 0', background: bg('safety-phone.png') })} />
      </div>
    ),
    heroImage: 'safety-group.png',
  },
  {
    id: 'aps', align: 'start', w: 1154.305, title: 'A site that answers "does it pay for itself?"', meta: '[Enterprise] ',
    roles: ['Web Design', 'Interactive Tool', 'Web Development'],
    media: () => {
      const { MockupScreen } = window.DesignSystem_e0175b;
      return <div style={{ position: 'absolute', inset: 0 }}><MockupScreen style={{ position: 'absolute', left: 40, top: 40, width: 950, height: 572.3 }} /></div>;
    },
    heroImage: 'aps-site.png', client: 'American Padel Systems',
  },
  { id: 'units', align: 'end', w: 1081, title: 'Six business units, one product', meta: '[Startups] [Ecommerce]', roles: ['Product Design', 'Design System', 'Information Architecture'], media: null },
];

function WorkRole({ children }) {
  return <span style={{ height: 28, display: 'inline-flex', alignItems: 'center', padding: '7px 9px', boxSizing: 'border-box', backgroundColor: 'rgb(63,63,63)', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 13, lineHeight: 1, letterSpacing: '0.020em', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{children}</span>;
}

function WorkItem({ p, active, onOpen, refCb }) {
  const end = p.align === 'end';
  return (
    <div ref={refCb} data-work={p.id} onClick={() => active && onOpen(p)} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: end ? 'flex-end' : 'flex-start', opacity: active ? 1 : 0.3, transition: 'opacity 500ms var(--ease-precise)', cursor: active ? 'pointer' : 'default' }}>
      <div style={{ position: 'relative', width: p.w, height: p.h ?? 654, overflow: 'hidden', flexShrink: 0, outline: p.media ? 'none' : '1px dashed rgba(246,246,246,0.25)', outlineOffset: -1 }}>
        {p.media ? p.media() : <span style={{ position: 'absolute', left: 20, bottom: 18, fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.04em', color: 'rgb(131,131,131)', textTransform: 'uppercase' }}>Imagery not in Figma source</span>}
      </div>
      <div style={{ width: p.w > 900 ? p.w : undefined, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>{p.roles.map((r) => <WorkRole key={r}>{r}</WorkRole>)}</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 34, lineHeight: 1.2, color: '#fff', whiteSpace: 'nowrap' }}>{p.title}</span>
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: '100%', letterSpacing: '0.020em', color: '#fff', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{p.meta}</span>
      </div>
    </div>
  );
}

function SelectedWork({ onOpen }) {
  const { SignatureDot } = window.DesignSystem_e0175b;
  const refs = React.useRef({});
  const [active, setActive] = React.useState(PROJECTS[0].id);
  React.useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = null, bestD = Infinity;
      for (const p of PROJECTS) {
        const el = refs.current[p.id]; if (!el) continue;
        const r = el.getBoundingClientRect();
        const d = Math.abs((r.top + r.bottom) / 2 - mid);
        if (d < bestD) { bestD = d; best = p.id; }
      }
      if (best) setActive(best);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <section id="work" data-screen-label="03 Selected work" style={{ backgroundColor: 'rgb(20,20,20)', display: 'flex', flexDirection: 'column', gap: 54, padding: '100px 48px 100px 48px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 16, lineHeight: '100%', letterSpacing: '0.020em', color: '#fff', textTransform: 'uppercase' }}>selected work</span>
        <h2 style={{ margin: 0, display: 'flex', alignItems: 'flex-end', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 45, lineHeight: '100%', letterSpacing: '-0.020em', color: '#fff', whiteSpace: 'nowrap' }}>What we've built<SignatureDot size={24} animate style={{ marginBottom: 2 }} /></h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 83 }}>
        {PROJECTS.map((p) => <WorkItem key={p.id} p={p} active={active === p.id} onOpen={onOpen} refCb={(el) => (refs.current[p.id] = el)} />)}
      </div>
    </section>
  );
}
Object.assign(window, { SelectedWork, WORK_PROJECTS: PROJECTS, WORK_ASSET_BASE: W });
