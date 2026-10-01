// English copy — the ONE source for every visible string, meta tag, alt text and textual JSON-LD field of the site.
// Components and data modules read from here through `src/i18n/index.ts`; nothing is hard-coded in markup.
//
// Conventions (so the Spanish file can mirror it key by key):
//  - Objects are grouped by page / section. Keys are stable and camelCase; never rename one without renaming it in every locale.
//  - `{placeholder}` tokens are filled by `fmt()` (src/i18n/index.ts): keep them verbatim in translations.
//  - "\n" inside a title is a line break (DecodeTitle).
//  - Brand and proper names (MER Studio, Shopify, ChatGPT, client names) are copy too, but are expected to stay as they are.
//  - Not here on purpose: URLs, e-mail, phone (src/data/contact.ts), and form `value`s (they stay English so the inbox is uniform).
// This file must stay import-free: scripts/check-site.mjs loads it (through src/data/offer.ts) with plain Node.

export const en = {
  site: {
    lang: 'en',
    name: 'MER Studio',
    defaultTitle: 'MER Studio — Strategy, design and build, end to end',
    defaultDescription: 'Independent design-and-build studio. Strategy, design and code, handled end to end by one team — a brand, a website, an online store, a full platform.',
    ogImageAlt: 'MER Studio — Strategy, design and build, end to end.',
    skipLink: 'Skip to content',
    logoAlt: 'MER Studio',
    caseStudyTitle: '{client} — {title} | MER Studio',
  },

  a11y: {
    opensInNewTab: '(opens in a new tab)',
    whatsapp: 'WhatsApp',
  },

  buttons: {
    bookCall: 'book a call',
    startProject: 'start a project',
    letsTalk: "let's talk",
    backToHome: 'back to home',
    faq: 'faq',
    showLess: 'show less',
    nextProject: 'next project',
    nextSection: 'next section',
    nextStep: 'Next step',
    sendInquiry: 'send inquiry',
    sending: 'sending…',
    checkMyBrand: 'check my brand',
  },

  // Shared by the home (How it works, Services), the Final CTA and the inquiry form.
  faqCta: {
    prompt: 'Want to know more?',
    questionsFirst: 'Questions before you start?',
    readFaq: 'Read the faq',
  },

  nav: {
    ariaLabel: 'Primary',
    tagline: 'Design and build, end to end',
    items: {
      work: 'Work',
      services: 'Services',
      howItWorks: 'How it works',
      about: 'About',
    },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Menu',
    language: 'Language',
    languageEnglish: 'English',
    languageSpanish: 'Español',
  },

  footer: {
    ariaLabel: 'Footer',
    links: {
      work: 'Selected Works',
      services: 'Services',
      howItWorks: 'How it works',
      aiVisibility: 'AI Visibility',
      about: 'About Us',
      faq: 'FAQ',
    },
    copyright: '©2026 mer.studio™ All Rights Reserved',
    workingFrom: 'Working Worldwide from',
    country: 'argentina',
  },

  home: {
    intro: {
      line1: '“From the first decision to the last detail.',
      line2: 'Strategy, design & build, end to end.”',
    },
  },

  hero: {
    lead: 'From the first decision to the last detail.',
    title: 'Strategy, design and build, end to end.',
    offerPrefix: 'Every project ships findable on',
    offerSr: 'Every project ships findable on ChatGPT, Perplexity, Gemini and Google AI',
    engines: ['ChatGPT', 'Perplexity', 'Gemini', 'Google AI'],
    readMore: 'Read more.',
    posterAlt: 'Smartphone tied with a red cord to raw concrete blocks',
    workedTitle: "WHERE WE'VE WORKED",
    industries: ['Ecommerce', 'Agribusiness', 'Fashion', 'Insurance', 'Finance', 'Foreign Trade', 'Startups', 'Enterprise', 'Healthcare'],
    summary: 'Strategy, design and code, handled end to end by one team. Twenty-five years across enterprise products and US startups, applied at any size — a brand, a website, an online store, a full platform.',
    scrollLabel: 'Go to selected work',
  },

  marquee: {
    ariaLabel: "Clients we've worked with",
    logoAlt: '{name} logo',
  },

  work: {
    eyebrow: 'selected work',
    title: "What we've built",
    indexAriaLabel: 'Selected projects',
    mosaicAlt: 'Mosaic of MER Studio project thumbnails',
    // Selected Work cards, by project slug (src/data/projects.ts).
    projects: {
      asociart: { title: 'Reengineering a 13-module legacy platform', meta: '[Insurance & Finance] AT NEORIS', roles: ['UX Research', 'Design System', 'Product Designer', 'Front-End'], index: 'Reengineering Core', alt: 'Asociart claims-management screen on a laptop, over sheets of the Asociart design-system colours and type' },
      'the-mile': { title: 'Turning creators into storefronts', meta: '[Ecommerce & Fashion] AT ORCHARDMILE', roles: ['UX/UI', 'Design System', 'PRODUCT DESIGN', 'Prototyping'], index: 'Live Shoppable App', alt: 'The Mile Fashion app on phones: the welcome screen with a model in black, surrounded by other app screens' },
      'orchard-mile': { title: '250 brands, one storefront', meta: '[Ecommerce & Fashion]', roles: ['UX/UI', 'Front-End', 'Growth Design'], index: 'Luxury Website', alt: 'The Orchard Mile homepage on a laptop, surrounded by tilted editorial fashion pages' },
      quilmes: { title: 'A coupon that works one-handed, in a crowd', meta: '[Consumer Brands]', roles: ['Product Concept', 'UX/UI', 'Mobile'], index: 'Special Promotion App', alt: 'Pasaporte Quilmes app screens on phones: venue map, venue pages and a discount coupon with a QR code' },
      'carbon-optimum': { title: 'Making an industrial process legible', meta: '[Agrobusiness] [Enterprise]', roles: ['Web design', 'branding', 'Brand System', 'Web Development'], index: 'Climate Tech Brand', alt: 'The Carbon Optimum website on a desktop monitor over an ocean photograph, next to the brand colour palette' },
      'agente-mama': { title: 'A safety net, not a productivity app', meta: '[Startups]', roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'], index: 'AI Family Assistant', alt: 'Agente Mamá AI on phones: the daily dashboard and agenda, fed by WhatsApp group and school platform messages' },
      'american-padel-systems': { title: 'A site that answers "does it pay for itself?"', meta: '[Enterprise]', roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'], index: 'Empowering Padel', alt: 'The American Padel Systems website on a tilted laptop, on a navy background crossed by orange lines' },
      'hifi-hub': { title: 'Six business units, one product', meta: '[Startups] [Ecommerce]', roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'], index: 'Audiophile Directory', alt: 'HiFi Hub — project preview' },
      'black-duck': { title: 'Every print technique, one storefront', meta: '[Tienda Nube] [Ecommerce]', roles: ['Web Design', 'Store Setup', 'AI Automation'], index: 'Black Duck Tee', alt: 'The Black Duck store on a desktop monitor and a phone, on a dark grey background' },
    },
  },

  banner: {
    ariaLabel: 'Design, for us',
    quote: "[For us, design isn't decoration. It's a transformation. It evolves what's stuck, strengthens what matters, and makes space for something better.]",
  },

  services: {
    eyebrow: 'services',
    title: 'Strategy, Design & Build, end to end',
    diagramLabel: 'Services diagram: Brand and Product, connected by Strategy, Design and Build — one connected practice, 25+ years of experience.',
    diagram: {
      brand: 'Brand',
      product: 'Product',
      mer: 'MER',
      years: '25+ years of experience',
      coreTitleLines: ['Strategy', 'Design', 'Build'],
      coreDescLines: ['One connected', 'practice', 'MER Studio'],
    },
    // Row titles = diagram pills, exactly (one list, one vocabulary).
    rows: {
      branding: { name: 'Branding', body: 'Identity, and the system to keep it consistent.' },
      websites: { name: 'Websites', body: 'A landing, a full site, or an online store — on Shopify, Tiendanube or WooCommerce.' },
      digitalProduct: { name: 'Digital Product', body: "An app or a platform that doesn't exist yet." },
      aiVisibility: { name: 'AI Visibility', body: 'GEO / AEO — so people find you when they ask an AI, not just Google.' },
    },
    caption: 'Set of services that complement each other and allow us to design, develop, implement, maintain, and extend a consistent experience',
    included: {
      title: 'EVERY PROJECT INCLUDES',
      items: ['Fixed scope and price', 'Two rounds of revisions', 'Responsive, mobile & desktop', 'Files & accounts in your name'],
    },
    addonsLead: 'Add-ons for any project.',
    addonFor: 'For:',
    // Add-ons = outer-ring chips, exactly. `more` = the expandable copy; `cta` = its button label (⇄ buttons.showLess).
    addons: {
      designSystem: {
        title: 'Design System', cta: "what's included",
        body: 'Exported tokens, a documented component library, and a usage guide — so your team, or an AI agent, can keep building on it without breaking the system.',
        more: ['Design tokens (color, type, spacing) exported to code', 'Component library in Figma + code, with states and variants', "Usage guide and do/don't rules", 'Handover session with your team'],
        for: 'products that will keep growing after launch.',
      },
      aiAssistants: {
        title: 'AI Assistants & Automation', cta: 'how it works',
        body: 'AI assistants and automations that take repetitive work off your team — built into your site, store or product.',
        more: ['Assistants that answer customers with your own content', 'Automated flows: leads, orders, follow-ups, reports (n8n / API)', 'Connected to the tools you already use', 'Measured: what it saves, what it handles, what it escalates'],
        for: 'teams answering the same questions or doing the same steps every day.',
      },
      maintenance: {
        title: 'Maintenance', cta: 'learn more',
        body: 'Optional, after handover. Changes, updates, backups and priority response.',
        more: ['Changes and content updates', 'Platform and plugin updates', 'Backups', 'Priority response'],
        for: 'sites and stores that need to stay current after launch.',
      },
    },
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Four steps, no surprises',
    lead: 'Every project starts with a 20-minute call. You get back a proposal with a fixed scope, a final price and a delivery date.',
    asciiAlt: 'ASCII-style illustration of the four-step process',
    steps: [
      { n: '01', title: 'Call', body: 'Twenty minutes. You tell us what you need, by when, and what budget you have.' },
      { n: '02', title: 'Proposal', body: 'Within 48 hours you get scope, final price, delivery date and what is out of scope. If it does not work for you, we stop there.' },
      { n: '03', title: 'Design and build', body: 'We work in blocks and show you progress along the way. Two rounds of revisions included.' },
      { n: '04', title: 'Handover', body: 'Launch, files and accounts in your name. Thirty days of support in case anything breaks.' },
    ],
  },

  about: {
    eyebrow: 'About us',
    title: 'We partner with early-stage founders who treat design as a must, not a nice-to-have. From seed to Series A and beyond, we help them validate ideas, win over investors and build brands and products that last.',
    body: "We treat every project as our own — founders deserve a partner, not a vendor. We've been in that room enough times to know what's at stake. We use AI to move faster, not to cut corners, so the time goes where it matters most: strategy and craft.",
    portraitAlt: 'Mer Rey, founder of MER Studio',
    name: 'Mer Rey',
    role: 'Founder · Design Lead',
    quote: "For more than 25 years I've designed digital products for companies in the US and Latin America — enterprises and startups, often working directly with founders and CEOs.",
    stats: [
      { value: '25+', label: 'years of experience designing products, brands and websites' },
      { value: '35+', label: 'websites and digital products delivered directly to clients' },
      { value: '1:1', label: 'Direct access to the senior designer, from first call to final files' },
      { value: '+300%', label: "orders in The Mile's first year after launch" },
    ],
  },

  finalCta: {
    eyebrow: "That's all for now.",
    title: 'Got a project in mind?\nLet’s talk',
    letsTalkSr: '(message us on WhatsApp, opens in a new tab)',
  },

  faqPage: {
    meta: {
      title: 'FAQ — Process, Timing & Platforms | MER Studio',
      description: 'Answers on cost, timing, revisions, handover, e-commerce platforms (Shopify, Tiendanube, WooCommerce) and AI visibility — from a design-and-build studio.',
    },
    eyebrow: 'faq',
    title: 'Questions, answered.',
    noteBefore: 'Process, timing, platforms and AI visibility — everything worth knowing before we start. If something is missing, ask us on a ',
    noteLink: '20-min call',
    noteAfter: '.',
    listAriaLabel: 'Frequently asked questions',
    moreAiVisibility: 'All AI Visibility questions → read more',
    cta: { eyebrow: 'Didn’t find it?', title: 'Still have\na question?' },
  },

  // FAQ entries: /faq/ (groups) and /ai-visibility/ (aiVisibility). The FAQPage JSON-LD is built from these same strings.
  // Which entries belong to the launch offer is structural and lives in src/data/faq.ts.
  faq: {
    groups: [
      { num: '01', label: 'process', items: [
        { q: 'How much does a project cost?', a: 'Every project is quoted after a 20-minute call. You get a fixed scope and price before we start — no surprises.' },
        { q: 'How long does a project take?', a: 'From one week, depending on scope. A landing moves faster than a full store or product, and we agree on dates before we start.' },
        { q: 'How many rounds of revisions are included?', a: 'Two rounds of revisions, built into every project.' },
        { q: 'What do I get at handover?', a: 'Your files and accounts, all in your name.' },
      ] },
      { num: '02', label: 'services', items: [
        { q: 'Which e-commerce platforms do you work with?', a: 'Shopify, Tiendanube and WooCommerce. We recommend one based on your market, your catalog and how you sell.' },
        { q: 'Can you work with my existing brand or site?', a: 'Yes. We can evolve what you already have or start from scratch.' },
        { q: 'Do you work with clients outside Argentina?', a: "Yes. We're based in Buenos Aires and work remotely, in English or Spanish." },
        { q: 'Can you add AI assistants or automations?', a: 'Yes, as an add-on: assistants that answer with your own content, and automated flows connected to the tools you already use.' },
      ] },
      { num: '03', label: 'ai visibility', items: [
        { q: 'What is AI Visibility (GEO / AEO)?', a: 'Making your brand easy for AI to find, understand and cite — not just to rank on Google.' },
        { q: 'Is AI Visibility free in October?', a: 'Yes, the setup is free for projects started in October 2026. The rest is paid.' },
      ] },
    ],
    aiVisibility: [
      { q: 'What is Generative Engine Optimization (GEO)?', a: "Making your brand easy for AI engines like ChatGPT, Perplexity and Google AI to find, understand and cite when people ask them questions — not just ranking in Google's list of links." },
      { q: 'What is Answer Engine Optimization (AEO)?', a: 'Structuring your content so it becomes the direct answer: clear questions and answers, structured data, and pages AI crawlers can read.' },
      { q: 'How is GEO different from SEO?', a: 'SEO gets you ranked; GEO and AEO get you mentioned. They work together — a solid technical base helps both.' },
      { q: "What's free for projects started in October?", a: 'The setup: schema, llms.txt, AI crawler access, semantic structure and an initial visibility check. Content strategy, full audit and monthly tracking are paid.' },
      { q: 'Do you guarantee AI mentions?', a: 'No one can. We build the conditions for AI engines to find and trust you, and we measure what changes.' },
    ],
  },

  aiVisibility: {
    meta: {
      title: 'AI Visibility — Generative Engine Optimization (GEO & AEO)',
      description: 'Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO): we make your brand readable and quotable by ChatGPT, Perplexity and Google AI.',
    },
    intro: {
      eyebrow: 'ai visibility · geo / aeo',
      title: 'When people ask an AI, does it name you?',
      note: 'Search is moving from a list of links to a single answer. With Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), we make your brand readable, understood and quotable by ChatGPT, Perplexity, Gemini and Google’s AI Overviews.',
    },
    method: {
      eyebrow: 'the method',
      title: 'Four things an AI needs before it recommends you.',
      lede: 'Ranking still matters. But an AI only names what it can read, understand and verify somewhere else.',
      items: [
        { t: 'Readable', d: 'Crawlers can reach and parse your site: fast pages, clean HTML, an llms.txt, and a robots.txt that lets AI search bots in instead of blocking them.' },
        { t: 'Understood', d: 'Structured data (JSON-LD) and consistent entity details, so a model knows who you are, what you sell, where you work and who you work for — without guessing.' },
        { t: 'Quotable', d: 'Pages that answer the real questions your clients ask, in a format a model can lift and cite: clear FAQs, comparisons, scope and pricing ranges.' },
        { t: 'Present', d: 'Being named in the places models use to double-check you: Google Business Profile, directories, reviews, press and partner sites.' },
      ],
      note: 'No one can guarantee an AI will name you. We make sure it can — and we measure which questions mention you, before and after.',
    },
    proof: {
      eyebrow: 'proof, not promises',
      title: 'This site is built the same way.',
      steps: [
        { t: 'An llms.txt', d: 'A plain-language summary of who we are and what we do, written for AI crawlers.' },
        { t: 'Structured data', d: 'JSON-LD tells machines our name, services and location — no guessing.' },
        { t: 'Open to AI crawlers', d: 'Our robots.txt welcomes GPTBot, ClaudeBot, PerplexityBot and Google-Extended instead of blocking them.' },
      ],
      snippetLabel: 'mer.studio/llms.txt',
    },
    faq: { eyebrow: 'faq', title: 'Questions about AI Visibility.' },
    cta: { eyebrow: 'One question to start.', title: 'What does AI say\nabout your brand?' },
  },

  // Launch offer (flags and dates: src/data/offer.ts). Every offer text of the site comes from here.
  offer: {
    tag: 'Free with your project · Oct 2026',
    more: 'read more',
    pill: 'Free · Oct 2026', // diagram pill: "AI Visibility  FREE · OCT 2026 · read more"
    hero: 'AI Visibility free for projects started in October 2026', // hero line, after the "—"
    free: {
      title: 'Included free',
      items: [
        'Base setup: schema / JSON-LD, llms.txt, AI-bot access in robots.txt, semantic content structure',
        'An initial visibility check in ChatGPT, Perplexity, Gemini and Google AI',
      ],
    },
    paid: {
      title: 'Still paid',
      items: ['AI content strategy', 'Full audit', 'Monthly measurement'],
    },
    intro: 'Launch offer: every project that starts in October 2026 includes the AI Visibility setup at no cost.',
    // Also the JSON-LD description of the offer, and the line that public/llms.txt must carry (scripts/check-site.mjs).
    llms: 'Launch offer: projects started in October 2026 include AI Visibility setup free (schema, llms.txt, AI crawler access, semantic structure, and an initial AI visibility check). Content strategy, full audit and monthly measurement are paid.',
  },

  // Left column of the dark intake panel (start a project, AI Visibility).
  intake: {
    preferEmail: 'PREFER EMAIL?',
  },

  startProject: {
    meta: {
      title: 'Start a project — MER Studio',
      description: 'Tell us what you’re ready to build. Share a few details about your project and we’ll reply within 2 business days with a focused next step.',
    },
    intro: {
      eyebrow: 'start a project',
      title: 'Tell us what you’re ready to build.',
      note: 'A few thoughtful details help us bring the right people to the first conversation. It takes about 4 minutes.',
    },
    brief: {
      eyebrow: 'the brief',
      title: 'Good work starts with a clear conversation.',
      lede: 'Not every answer needs to be final. Share what you know and we’ll shape the rest together.',
    },
    next: {
      eyebrow: 'what happens next',
      title: 'Simple, transparent, human.',
      steps: [
        { t: 'We read every brief', d: 'A senior team member reviews your goals, fit, and timing.' },
        { t: 'We meet for 20 minutes', d: 'No sales script — just context, questions, and useful next steps.' },
        { t: 'You get a clear plan', d: 'If it’s a fit, we’ll outline scope, team, timing, and investment.' },
      ],
    },
  },

  // The inquiry form (Netlify Forms "project-inquiry"). Field `value`s are not copy: they stay English in the component.
  form: {
    ariaLabel: 'Project inquiry',
    honeypot: 'Leave this empty',
    sections: {
      who: 'First, who are you?',
      together: 'What can we make together?',
      timing: 'Timing',
    },
    fields: {
      name: { label: 'YOUR NAME *', placeholder: 'Name and surname' },
      email: { label: 'WORK EMAIL *', placeholder: 'you@company.com' },
      company: { label: 'COMPANY / ORGANIZATION', placeholder: 'Where do you work?' },
      phone: { label: 'PHONE / WHATSAPP', placeholder: 'Country code + number' },
      message: { label: 'TELL US ABOUT THE PROJECT *', placeholder: 'What are you building, changing, or trying to solve? A link is welcome, too.' },
    },
    servicesLegend: 'Services (choose any)',
    // Same order as the `values` in the component: Branding, Website, Digital product, AI visibility, AI Assistants & Automation, Design system, Something else.
    services: ['Branding', 'Website', 'Digital product', 'AI visibility', 'AI Assistants & Automation', 'Design system', 'Something else'],
    idealStart: 'IDEAL START',
    // Same order as the `values` in the component.
    timing: ['As soon as possible', 'Within 1–3 months', '3–6 months', 'Just exploring'],
    submitNote: 'We’ll review your note and reply within 2 business days with a focused next step — usually a 20-minute introduction call.',
    errors: {
      name: 'Please tell us your name.',
      emailMissing: 'Please add your email so we can reply.',
      emailInvalid: 'That email doesn’t look right — try you@company.com.',
      message: 'Tell us a little about the project.',
      localOnly: 'Forms only work on the Netlify deploy (Netlify handles the POST); this local server can’t receive them.',
      generic: 'Something went wrong sending your note. Try again, or write to {email}.',
      withCode: 'Something went wrong sending your note (error {code}). Try again, or write to {email}.',
    },
    doneText: "Thanks — we'll reply within 2 business days.",
  },

  thanks: {
    meta: { title: 'Thanks — MER Studio' },
    eyebrow: 'inquiry sent',
    title: "Thanks — we'll reply within 2 business days.",
  },

  notFound: {
    meta: { title: 'Page not found — MER Studio' },
    eyebrow: 'Error 404',
    title: "This page doesn't exist",
  },

  // Project Detail chrome (the content of each project is in `caseStudies`).
  projectDetail: {
    close: 'Close project',
  },

  // Textual JSON-LD fields (src/data/schema.ts). Service names/descriptions are reused from `services`.
  jsonld: {
    areaServed: 'Worldwide',
    home: {
      description: 'Strategy, design and code, handled end to end by one team. Twenty-five years across enterprise products and US startups, applied at any size — a brand, a website, an online store, a full platform.',
      slogan: 'Strategy, design and build, end to end.',
      catalogName: 'Services',
      aiVisibilityService: { name: 'AI Visibility · GEO / AEO', description: 'So people find you when they ask an AI, not just Google.' },
      founderJobTitle: 'Founder',
      founderDescription: "I've been designing digital products for more than 25 years. Eight of those years went into complex enterprise products, and seven into working with US startups, often directly with founders and CEOs.",
    },
    aiVisibility: {
      name: 'AI Visibility (GEO / AEO)',
      serviceType: 'Generative engine optimization (GEO) and answer engine optimization (AEO)',
      description: 'We make your brand readable, understood and quotable by ChatGPT, Perplexity, Gemini and Google’s AI Overviews: crawlable pages, structured data, citable answers and a presence in the places models use to verify you.',
      catalogName: 'Four things an AI needs before it recommends you',
    },
  },

  // Case studies, by slug (/work/<slug>/). Structure and layout: src/data/project-details.ts.
  caseStudies: {
    asociart: {
      client: 'Asociart',
      credit: 'delivered through NEORIS',
      linkLabel: 'asociart.com',
      title: 'Reengineering a 13-module legacy platform',
      meta: '[Insurance & Finance]',
      roles: ['UX Research', 'Design System', 'PRODUCT DESIGN', 'Front-End'],
      poc: {
        title: 'AI-Assisted Design System Workflow',
        subtitle: 'From user stories to design-system-driven interfaces',
        intro: [
          'I built a Proof of Concept to test whether an AI-assisted workflow could translate product requirements into editable Figma interfaces while preserving an existing enterprise Design System as the source of truth.',
          'I curated pairs of previous user stories and their approved Figma outcomes as few-shot / in-context examples, giving the model concrete references for how requirements had historically translated into UX patterns, components and layouts. The workflow combined that contextual guidance with explicit UX rules and structured Design System information — components, variants, variables, tokens and interaction patterns — reaching the system through an MCP-based context layer instead of inventing UI from scratch.',
        ],
        tested: { label: 'What I tested', body: 'Running a real user story through the pipeline, the agent produced editable Figma views built from existing Design System components — not generic UI. The translation held: component reuse and UX intent survived, and the output was reviewable and editable rather than a flat mockup.' },
        status: { label: 'Status', body: 'Validated POC. Not taken to production — the goal was to prove the translation layer worked, not to automate design decisions. The designer retains validation and final judgment.' },
        facts: {
          domain: { label: 'Domain', value: 'Design System Automation' },
          length: { label: 'Length', value: 'POC · 2026' },
          role: { label: 'Role', value: 'Design & Execution' },
        },
        humanInLoop: { label: 'Human-in-the-loop', body: 'AI accelerates translation and component mapping; the designer retains validation and final design decisions.' },
      },
      blocks: {
        startingPoint: { heading: 'Starting point', body: "Asociart brought Neoris in to replace a monolithic legacy system running claims, legal, medical and financial operations across ten-plus departments. There was no UX practice on the product and no shared visual system. As part of Neoris' team, I was brought in to build that foundation while the platform was reengineered." },
        theWork: { heading: 'The work', body: 'I led research with internal users and stakeholders, mapped service blueprints for thirteen interconnected modules and built the Core Design System underneath all of them — 71+ components, token architecture for colour, type and spacing, documented in Storybook. I specified component states and interaction behaviour against WCAG contrast, and worked hands-on in Angular to keep the specs and the production UI aligned.' },
        criticalityFirst: { heading: 'Criticality first', body: 'The Recoveries module was the first one I reengineered, replacing a heavy legacy screen. A daily process pulls every claim eligible for recovery, scores its criticality and assigns it to a case manager. The tray opens sorted by that score, and a quick-view panel shows the key data without leaving the list — fewer screens between a manager and the next case that matters.' },
        outcome: { heading: 'Outcome', body: 'One shared foundation across thirteen modules and multiple teams, serving 500+ internal users. Five years on the account, 130+ sprints, a 98% successful build rate across active modules.' },
      },
      images: {
        legacy: { alt: 'The legacy Asociart system: a dense, form-heavy screen from the provider interconnection platform' },
        recoveriesA: { alt: 'Asociart Core Design System: colour and typography foundations' },
        recoveriesB: { alt: 'Asociart Storybook documentation for the aso-button component' },
        outcome: { alt: 'The reengineered Asociart claims management screen on a laptop' },
        workflow: { alt: 'AI-Assisted Design System Workflow: a diagram from user story, few-shot examples and rules through Claude and the Figma MCP to an editable Figma interface built from the Design System' },
      },
    },
    'the-mile': {
      client: 'The Mile',
      credit: 'contract · in-house team',
      linkLabel: 'orchardmile.com/the-mile',
      title: 'Turning creators into storefronts',
      meta: '[Ecommerce & Fashion] AT THE MILE',
      roles: ['Branding', 'Product Design', 'Design System', 'Prototyping'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: "Orchard Mile had built a strong luxury marketplace, but paid acquisition and catalogue competition were capping growth. The answer was to become The Mile: the site was adapted to the new model and a mobile app was built from scratch, turning creators into distributed storefronts that sell the marketplace's brands to their own audiences and earn commission on every sale." },
        theWork: { heading: 'The work', body: 'I started with the brand — logo, brand guide and brand system. Then the app, designed from zero with the CEO and the marketing team after a short round of research, covering consumer and creator journeys end to end: onboarding, live and pre-recorded shoppable shows, reels, creator storefronts, affiliate links, discovery and checkout. I also redesigned the Orchard Mile site to match, with a new Reels section, built navigable prototypes to pitch investors and recruit influencers before development, and supported the React Native developer on selected components.' },
        checkoutInsideTheApp: { heading: 'Checkout inside the app', body: 'Most creator-commerce apps send buyers somewhere else to pay. Here the whole purchase happened in the app: products came from Orchard Mile as the retailer, so discovery, trust in the creator and checkout stayed in one loop.' },
        outcome: { heading: 'Outcome', body: 'First year after launch (Apr–Oct 2023): creator community +200%, show viewership 2×, orders +300%, items per order from 1.7 to 2.7.' },
        academy: { heading: 'Academy', body: 'The business depended on how well creators could sell, so I built The Mile Academy: documentation and video lessons to help them plan, shoot and present products more professionally — turning creator skill into something the product supports, instead of something it hopes for.' },
      },
      images: {
        flow: { alt: 'The Mile app user flow: onboarding, sign-up, verification and the creator storefront journey' },
        brand: { alt: 'The Mile brand system: colours, logotypes and brand fonts' },
        checkout: { alt: 'The Mile on desktop and mobile, above the connected onboarding and account screens of the navigable prototype', desc: 'Navigable prototypes used with investors and creators to validate each journey before development.', label: 'Navigable prototypes' },
        outcomeHero: { alt: 'The Mile app on a phone: a creator hosting a shoppable show' },
        outcomePhone: { alt: 'The Mile app welcome screen on a phone' },
        academyBoard: { alt: 'The Mile Academy flow: lesson screens and their connections' },
        academyLogo: { alt: 'The Mile Academy identity' },
      },
    },
    'orchard-mile': {
      client: 'Orchard Mile',
      credit: 'contract · in-house team',
      linkLabel: 'orchardmile.com',
      title: '250 brands, one storefront',
      meta: '[Ecommerce & Fashion]',
      roles: ['UX/UI', 'Front-End', 'Editorial', 'Growth Design'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: 'Launched in New York in 2015 by a former Bergdorf Goodman executive, Orchard Mile brought designer fashion, beauty and home from independent boutiques and major retailers into one shop-by-brand storefront. It grew from 30 brands at launch to 120 in under two years — and its founders named the risk themselves: choice paralysis. By the time I joined, the catalogue had scaled to 250+ brands and ~80,000 SKUs, sourced from stores with inconsistent data.' },
        theWork: { heading: 'The work', body: "Five years designing and building the pages that sold the catalogue: landings, editorial stories, influencer pages and e-commerce pages, which I implemented in Angular alongside the front-end team. I took seasonal campaigns — Black Friday, Father's Day and every drop in between — from brief to live page, along with content for on-site modals, email campaigns in Klaviyo and marketing pieces, with A/B testing in AB Tasty. I also worked with the back-end team on the scrapers that pulled product data from each brand's store." },
        outcome: { heading: 'Outcome', body: 'A steady pipeline of campaign and editorial pages that kept 250+ brands visible across a constantly changing catalogue, lifecycle campaigns across a 200K+ subscriber base — and the groundwork for what became The Mile.' },
      },
      images: {
        start: { alt: 'Orchard Mile editorial: a model in a knit set beside a shoppable collection page' },
        storefront: { alt: 'The Orchard Mile storefront sign outside a boutique' },
        campaigns: { alt: 'Three Orchard Mile editorial pages shown side by side: influencer interviews with shoppable products' },
        site: { alt: 'The Orchard Mile homepage on a laptop' },
      },
    },
    quilmes: {
      client: 'Quilmes',
      credit: 'studio client',
      title: 'A coupon that works one-handed, in a crowd',
      meta: '[Consumer Brands]',
      note: '35,000 visitors a week',
      roles: ['Product Concept', 'UX/UI', 'Mobile'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: 'Every visitor to Puerto Iguazú ends up at the Falls — around 35,000 tourists a week, 1.6 million a year — and Cabaña Quilmes is the only refuge inside the national park. But hotels, attractions and venues in town worked in isolation. Quilmes wanted a digital ecosystem that connected them and brought those visitors to its points of sale.' },
        theWork: { heading: 'The work', body: 'Pasaporte Quilmes, a benefits platform for visitors. Quilmes defined the need; I designed and developed the product — a web app, no download required. Visitors register, pick a venue and a deal, scan a QR and redeem it with the waiter. Discovery by category and proximity, venue pages and QR redemption were all designed around one constraint: the journey had to work fast, one-handed, in a noisy real-world setting.' },
        outcome: { heading: 'Outcome', body: 'Launched in 2022 as an MVP exclusively for visitors at Iguazú Falls. What venue owners said: “It would make the Cabaña known to every visitor to the park.” · “It would bring new customers and more table turnover.” · “The app is very simple and easy to use.”' },
      },
      images: {
        falls: { alt: 'Iguazú Falls' },
        cheers: { alt: 'Friends toasting with glasses of Quilmes beer' },
        screens: { alt: 'Pasaporte Quilmes: onboarding, language, login, dashboard, menu, map, coupons, venue page, QR scan, redemption and thank-you screens' },
      },
    },
    'carbon-optimum': {
      client: 'Carbon Optimum',
      credit: 'studio client',
      linkLabel: 'carbonoptimum.com',
      title: 'Making an industrial process legible',
      meta: '[Climate Tech] [Enterprise]',
      roles: ['Branding', 'Brand Architecture', 'Web Design', 'Web Development'],
      startingPoint: {
        heading: 'Starting point',
        steps: ['Raw material', 'Microalgae', 'Biomass', 'Organic goods'],
        body: 'Carbon Optimum turns captured CO₂ into value: microalgae absorb it, the biomass is harvested in a single day, and it becomes raw material for organic goods. A Miami-based company with a genuinely complex process — and a brand that had to make it easy to understand for partners and buyers.',
      },
      blocks: {
        theWork: { heading: 'The work', body: 'I redesigned the Carbon Optimum logo and built a brand architecture around it: Optimarine, the marine-ingredients line powered by microalgae, and its three product brands — OptiCosmetics, OptiOmega3 and Biomass. Then I designed and developed the site: information architecture and a visual system that turn the process into a clear narrative, built as modular, responsive pages.' },
        outcome: { heading: 'Outcome', body: 'Brand and site live; I handle ongoing maintenance.' },
      },
      images: {
        hero: { alt: 'Aerial photograph of dark blue ocean waves, beside the Carbon Optimum brand palette' },
        logoCarbon: { alt: 'The redesigned Carbon Optimum logo, with the slogan “Carbon dioxide is the problem. We are the solution.”', caption: 'Carbon Optimum logo redesign' },
        logoOptimarine: { alt: 'The new Optimarine logo, with the slogan “Sustainable Marine Ingredients, Powered by Microalgae”', caption: 'Optimarine logo design' },
        site: { alt: 'The Carbon Optimum website on a desktop computer and its modular pages, with the OptiCosmetics, OptiOmega3 and Biomass brands' },
      },
    },
    'agente-mama': {
      client: 'Agente Mamá',
      credit: 'own product',
      linkLabel: 'Launch Project → landing',
      title: 'A safety net, not a productivity app',
      meta: '[Startups]',
      roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: "A child's school information lives in four systems that don't talk to each other: the parents' WhatsApp group, the school platform, email and the family calendar. Someone has to read it all, filter it and remember it — usually the mother." },
        theWork: { heading: 'The work', body: "I ran ten discovery interviews that redefined the target from the child's age to the child's autonomy, and cut a planned module before it was built. Then product strategy, UX/UI and the Design System — 38 screens designed around one idea: take the mental load off without taking control away." },
        trustIsEarnedNotAssumed: { heading: 'Trust is earned, not assumed', body: 'Clear events — a date, a child, an action — are scheduled automatically with an undo. Ambiguous or high-stakes ones, like payments or schedule changes, go to a review queue that shrinks as the agent proves it gets things right.' },
        everyEventShowsItsSource: { heading: 'Every event shows its source', body: "A badge on each event — school platform, WhatsApp or calendar. When an AI acts on a family's information, being able to trace every item back is what makes it adoptable." },
        outcome: { heading: 'Outcome', body: 'Functional POC: 38 high-fidelity screens, a complete Design System and the key AI workflows defined and tested. Landing live for early market validation.' },
      },
      images: {
        kids: { alt: 'Illustration of four children in cut-paper style' },
        sources: { alt: 'Messages from the WhatsApp group and the school platform flowing into one scheduled calendar event' },
        landing: { alt: 'The Agente Mamá landing page on a phone' },
        matrix: { alt: 'What matters most to mothers? A map of needs by importance to mothers and impact on mental load', desc: 'An illustrative map of needs and product decisions for Agente Mamá. Core opportunity, high impact and high priority: Unified school agenda, Trust in AI decisions, Visible information source, Child reminders. Deprioritized or reconsidered: Recipes & shopping lists, Automated school messages, Approve every event. Conceptual synthesis of 10 exploratory conversations. Positions are illustrative, not measured scores.', label: 'What matters most to mothers?' },
        brand: { alt: 'Agente Mamá AI brand: the house icon in light, dark and accent modes, and the logotype' },
        screens: { alt: 'Four Agente Mamá screens: welcome, child profile, daily dashboard and agenda' },
      },
    },
    'american-padel-systems': {
      client: 'American Padel Systems',
      credit: 'studio client',
      linkLabel: 'americanpadelsystems.com',
      title: 'A site that answers "does it pay for itself?"',
      seoTitle: 'Does it pay for itself?',
      meta: '[Enterprise]',
      roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: 'A Miami-based company that manufactures, installs and maintains padel courts for clubs, hotels and tennis-court conversions needed its brand and site built from the ground up.' },
        theWork: { heading: 'The work', body: 'I started with an analysis with the founder of what the business needed. Then the full brand system — logo, corporate identity and brand guide — followed by web design and development, including an earnings simulator: prospects enter court price, operating hours, occupancy, number of courts and operating days, and see what an installation could earn.' },
        outcome: { heading: 'Outcome', body: "Brand and site live, with the simulator answering the buyer's first question — does it pay for itself? — before the first call. I handle ongoing maintenance." },
      },
      images: {
        brand: { alt: 'American Padel Systems logo on navy' },
        courts: { alt: 'Aerial view of four blue padel courts' },
        site: { alt: 'The American Padel Systems website on a laptop' },
        simulator: { alt: 'The earnings simulator: court price, hours of operation, occupancy, number of courts and operating days' },
        materials: { alt: 'A product carousel showing a padel court surface sample' },
      },
    },
    'hifi-hub': {
      client: 'HiFi Hub',
      credit: 'founding designer',
      linkLabel: 'hifihub.ai',
      title: 'Six business units, one product',
      meta: '[Startups] [Ecommerce]',
      roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: 'High-end audio is a siloed industry: thousands of brands, dealers, distributors and record stores operate in isolation, so discovery happens by accident. HiFi Hub set out to aggregate them into one discovery layer — the model Zillow ran in real estate and Farfetch in luxury fashion, applied to audio — unifying six business units, each with its own data, rules and commercial goal.' },
        theWork: { heading: 'The work', body: 'First and only designer on a ten-person team. I argued the taxonomy should follow the business model, not the data model, and designed one entity model — one card, one detail structure, one comparison grammar — with variable content slots per unit instead of variable layouts. A dealer surfaces its location where a product surfaces specs; the structure stays the same.' },
        branding: { heading: 'Branding', body: 'A full rebrand from The Audiophile Directory to HiFi Hub. Design tokens for dimension, spacing and radius, 65 colour tokens and a type scale, and a complete component library with every interaction state and light/dark themes — consumed directly by the React front end.' },
        outcome: { heading: 'Outcome', body: 'Live at hifihub.ai: 634 brands, 17,923 products, 1,384 dealers, 7,034 record stores and 124,308 used listings. Used gear, promoted to a first-order unit after usage analysis, is now the largest catalogue.' },
      },
      images: {
        hero: { alt: 'A laptop opened and shown from two angles' },
        listingA: { alt: 'HiFi Hub product page for the Bowers & Wilkins 801 Abbey Road Limited Edition' },
        listingB: { alt: 'HiFi Hub brand page for Bowers & Wilkins' },
        logo: { alt: 'HiFi Hub logo' },
        brandSystem: { alt: 'HiFi Hub colour palette, colour-token matrix and design-token documentation' },
        outcome: { alt: 'The HiFi Hub wishlist on a laptop' },
      },
    },
    'black-duck': {
      client: 'Black Duck',
      credit: 'studio client',
      linkLabel: 'blackduck.com.ar',
      title: 'Every print technique, one storefront',
      seoTitle: 'Every print technique, one storefront',
      meta: '[E-commerce] [Tiendanube]',
      roles: ['Web Design', 'Store Setup', 'Product Imagery', 'AI Automation'],
      blocks: {
        startingPoint: { heading: 'Starting point', body: 'Black Duck is an Argentine apparel brand selling tees with music and culture prints, made with an unusually wide range of techniques: water-based and plastisol inks, metallics, raised 3D, flock, shimmer, glitter and puff. It needed an online store that could show that craft, not just the product.' },
        theWork: { heading: 'The work', body: 'I built the store on Tiendanube end to end: design, catalogue structure and product pages, payments, shipping, and the Meta integration that connects the catalogue to Instagram and Facebook. Product imagery was produced with Midjourney and Photoshop, and an n8n automation retouches new product photos with AI and files them into organised Google Drive folders, so new drops go online faster.' },
        outcome: { heading: 'Outcome', body: 'Store live and selling nationwide, with cards, cash and bank-transfer payments and shipping configured, and the catalogue synced to Instagram and Facebook.' },
      },
      images: {
        store: { alt: 'The Black Duck store on a desktop monitor and a phone' },
        automation: { alt: 'An n8n workflow connecting AI image models and Google Drive to the product-photo pipeline' },
      },
    },
  },
};
