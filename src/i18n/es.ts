// Spanish copy (neutral Spanish, "tú") — mirrors src/i18n/en.ts key by key.
// Adapted, not literal: headlines and metas use the search terms people use in Spanish
// ("diseño web", "tiendas online", "visibilidad en IA", "aparecer en ChatGPT").
// Brand and proper names stay as they are. Keep `{placeholder}` tokens verbatim.

export const es = {
  site: {
    lang: 'es',
    name: 'MER Studio',
    defaultTitle: 'MER Studio — Estrategia, diseño y desarrollo, de principio a fin',
    defaultDescription: 'Estudio independiente de diseño y desarrollo. Estrategia, diseño y código en manos de un solo equipo: una marca, un sitio web, una tienda online, una plataforma completa.',
    ogImageAlt: 'MER Studio — Estrategia, diseño y desarrollo, de principio a fin.',
    skipLink: 'Ir al contenido',
    logoAlt: 'MER Studio',
    caseStudyTitle: '{client} — {title} | MER Studio',
  },

  a11y: {
    opensInNewTab: '(se abre en una pestaña nueva)',
    whatsapp: 'WhatsApp',
  },

  buttons: {
    bookCall: 'agenda una llamada',
    startProject: 'empieza un proyecto',
    letsTalk: 'hablemos',
    backToHome: 'volver al inicio',
    faq: 'preguntas frecuentes',
    showLess: 'ver menos',
    nextProject: 'siguiente proyecto',
    nextSection: 'siguiente sección',
    nextStep: 'Siguiente paso',
    sendInquiry: 'enviar consulta',
    sending: 'enviando…',
    checkMyBrand: 'revisar mi marca',
  },

  faqCta: {
    prompt: '¿Quieres saber más?',
    questionsFirst: '¿Tienes dudas antes de empezar?',
    readFaq: 'Revisa las preguntas frecuentes',
  },

  nav: {
    ariaLabel: 'Principal',
    tagline: 'Diseño y desarrollo, de principio a fin',
    items: {
      work: 'Proyectos',
      services: 'Servicios',
      howItWorks: 'Cómo trabajamos',
      about: 'Nosotros',
    },
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuLabel: 'Menú',
    language: 'Idioma',
    languageEnglish: 'English',
    languageSpanish: 'Español',
  },

  footer: {
    ariaLabel: 'Pie de página',
    links: {
      work: 'Proyectos',
      services: 'Servicios',
      howItWorks: 'Cómo trabajamos',
      aiVisibility: 'Visibilidad en IA',
      about: 'Nosotros',
      faq: 'Preguntas frecuentes',
    },
    copyright: '©2026 mer.studio™ Todos los derechos reservados',
    workingFrom: 'Trabajamos para todo el mundo desde',
    country: 'argentina',
  },

  home: {
    intro: {
      line1: '“De la primera decisión al último detalle.',
      line2: 'Estrategia, diseño y desarrollo, de principio a fin.”',
    },
  },

  hero: {
    lead: 'De la primera decisión al último detalle.',
    title: 'Estrategia, diseño y desarrollo, de principio a fin.',
    offerPrefix: 'Cada proyecto sale listo para aparecer en',
    offerSr: 'Cada proyecto sale listo para aparecer en ChatGPT, Perplexity, Gemini y Google AI',
    engines: ['ChatGPT', 'Perplexity', 'Gemini', 'Google AI'],
    readMore: 'Leer más.',
    posterAlt: 'Un smartphone atado con un cordón rojo a bloques de hormigón',
    workedTitle: 'DÓNDE HEMOS TRABAJADO',
    industries: ['Ecommerce', 'Agronegocios', 'Moda', 'Seguros', 'Finanzas', 'Comercio exterior', 'Startups', 'Empresas', 'Salud'],
    summary: 'Estrategia, diseño y código en manos de un solo equipo. Veinticinco años entre productos para grandes empresas y startups de Estados Unidos, aplicados a proyectos de cualquier tamaño: una marca, un sitio web, una tienda online, una plataforma completa.',
    scrollLabel: 'Ir a los proyectos',
  },

  marquee: {
    ariaLabel: 'Clientes con los que hemos trabajado',
    logoAlt: 'Logo de {name}',
  },

  work: {
    eyebrow: 'proyectos',
    title: 'Lo que hemos construido',
    indexAriaLabel: 'Proyectos seleccionados',
    mosaicAlt: 'Mosaico de miniaturas de proyectos de MER Studio',
    projects: {
      asociart: { title: 'Rediseño de una plataforma legacy de 13 módulos', meta: '[Seguros y Finanzas] EN NEORIS', roles: ['UX Research', 'Design System', 'Product Designer', 'Front-End'], index: 'Rediseño del Core', alt: 'Pantalla de gestión de siniestros de Asociart en una laptop, sobre láminas con los colores y la tipografía del design system de Asociart' },
      'the-mile': { title: 'Creadores convertidos en tiendas', meta: '[Ecommerce y Moda] EN ORCHARDMILE', roles: ['UX/UI', 'Design System', 'DISEÑO DE PRODUCTO', 'Prototipado'], index: 'App de live shopping', alt: 'La app The Mile Fashion en teléfonos: la pantalla de bienvenida con una modelo vestida de negro, rodeada de otras pantallas de la app' },
      'orchard-mile': { title: '250 marcas, una sola tienda', meta: '[Ecommerce y Moda]', roles: ['UX/UI', 'Front-End', 'Growth Design'], index: 'Sitio de lujo', alt: 'La home de Orchard Mile en una laptop, rodeada de páginas editoriales de moda inclinadas' },
      quilmes: { title: 'Un cupón que se usa con una mano, en medio de la gente', meta: '[Marcas de consumo]', roles: ['Concepto de producto', 'UX/UI', 'Mobile'], index: 'App de promociones', alt: 'Pantallas de la app Pasaporte Quilmes en teléfonos: mapa de locales, páginas de locales y un cupón de descuento con código QR' },
      'carbon-optimum': { title: 'Un proceso industrial, fácil de entender', meta: '[Agronegocios] [Empresas]', roles: ['Diseño web', 'branding', 'Sistema de marca', 'Desarrollo web'], index: 'Sitio de soluciones ecológicas', alt: 'El sitio de Carbon Optimum en un monitor, sobre una fotografía del océano, junto a la paleta de colores de la marca' },
      'agente-mama': { title: 'Una red de contención, no una app de productividad', meta: '[Startups]', roles: ['Estrategia de producto', 'UX Research', 'Design System', 'Desarrollo asistido por IA'], index: 'Asistente familiar con IA', alt: 'Agente Mamá AI en teléfonos: el panel del día y la agenda, alimentados por mensajes del grupo de WhatsApp y de la plataforma escolar' },
      'american-padel-systems': { title: 'Un sitio que responde "¿se paga solo?"', meta: '[Empresas]', roles: ['branding', 'Diseño web', 'Herramienta interactiva', 'Desarrollo web'], index: 'Pádel que rinde', alt: 'El sitio de American Padel Systems en una laptop inclinada, sobre un fondo azul marino cruzado por líneas naranjas' },
      'hifi-hub': { title: 'Seis unidades de negocio, un solo producto', meta: '[Startups] [Ecommerce]', roles: ['branding', 'Diseño de producto', 'Design System', 'Arquitectura de información'], index: 'Directorio audiófilo', alt: 'HiFi Hub — vista previa del proyecto' },
    },
  },

  banner: {
    ariaLabel: 'El diseño, para nosotros',
    quote: '[Para nosotros, el diseño no es decoración. Es transformación. Hace avanzar lo que está estancado, refuerza lo que importa y abre espacio para algo mejor.]',
  },

  services: {
    eyebrow: 'servicios',
    title: 'Estrategia, diseño y desarrollo, de principio a fin',
    diagramLabel: 'Diagrama de servicios: Marca y Producto, conectados por Estrategia, Diseño y Desarrollo — una sola práctica conectada, más de 25 años de experiencia.',
    diagram: {
      brand: 'Marca',
      product: 'Producto',
      mer: 'MER',
      years: '+25 años de experiencia',
      coreTitleLines: ['Estrategia', 'Diseño', 'Desarrollo'],
      coreDescLines: ['Una práctica', 'conectada', 'MER Studio'],
    },
    rows: {
      branding: { name: 'Branding', body: 'Identidad, y el sistema para mantenerla coherente.' },
      websites: { name: 'Sitios web', body: 'Una landing, un sitio completo o una tienda online — en Shopify, Tiendanube o WooCommerce.' },
      digitalProduct: { name: 'Producto digital', body: 'Una app o una plataforma que todavía no existe.' },
      aiVisibility: { name: 'Visibilidad en IA', body: 'GEO / AEO — para que te encuentren cuando le preguntan a una IA, no solo a Google.' },
    },
    caption: 'Servicios que se complementan para diseñar, desarrollar, implementar, mantener y hacer crecer una experiencia coherente',
    included: {
      title: 'TODO PROYECTO INCLUYE',
      items: ['Alcance y precio cerrados', 'Dos rondas de revisiones', 'Responsive, mobile y desktop', 'Archivos y cuentas a tu nombre'],
    },
    addonsLead: 'Servicios adicionales, para sumar a cualquier proyecto.',
    addonFor: 'Para:',
    addons: {
      designSystem: {
        title: 'Design System', cta: 'qué incluye',
        body: 'Tokens exportados, una librería de componentes documentada y una guía de uso, para que tu equipo, o un agente de IA, pueda seguir construyendo sin romper el sistema.',
        more: ['Design tokens (color, tipografía, espaciado) exportados a código', 'Librería de componentes en Figma + código, con estados y variantes', 'Guía de uso con reglas de qué hacer y qué no', 'Sesión de traspaso con tu equipo'],
        for: 'productos que van a seguir creciendo después del lanzamiento.',
      },
      aiAssistants: {
        title: 'Asistentes con IA y automatización', cta: 'cómo funciona',
        body: 'Asistentes con IA y automatizaciones que le sacan a tu equipo el trabajo repetitivo, integrados en tu sitio, tu tienda o tu producto.',
        more: ['Asistentes que responden a tus clientes con tu propio contenido', 'Flujos automáticos: leads, pedidos, seguimientos, reportes (n8n / API)', 'Conectados a las herramientas que ya usas', 'Medidos: cuánto ahorran, qué resuelven, qué derivan'],
        for: 'equipos que responden las mismas preguntas o repiten los mismos pasos todos los días.',
      },
      maintenance: {
        title: 'Mantenimiento', cta: 'ver más',
        body: 'Opcional, después de la entrega. Cambios, actualizaciones, backups y respuesta prioritaria.',
        more: ['Cambios y actualizaciones de contenido', 'Actualizaciones de plataforma y plugins', 'Backups', 'Respuesta prioritaria'],
        for: 'sitios y tiendas que necesitan mantenerse al día después del lanzamiento.',
      },
    },
  },

  howItWorks: {
    eyebrow: 'Cómo trabajamos',
    title: 'Cuatro pasos, sin sorpresas',
    lead: 'Cada proyecto empieza con una llamada de 20 minutos. Después recibes una propuesta con alcance cerrado, precio final y fecha de entrega.',
    asciiAlt: 'Ilustración en estilo ASCII del proceso en cuatro pasos',
    steps: [
      { n: '01', title: 'Llamada', body: 'Veinte minutos. Nos cuentas qué necesitas, para cuándo y con qué presupuesto cuentas.' },
      { n: '02', title: 'Propuesta', body: 'En 48 horas recibes el alcance, el precio final, la fecha de entrega y lo que queda afuera. Si no te sirve, ahí termina.' },
      { n: '03', title: 'Diseño y desarrollo', body: 'Trabajamos por etapas y te mostramos el avance en el camino. Incluye dos rondas de revisiones.' },
      { n: '04', title: 'Entrega', body: 'Lanzamiento, archivos y cuentas a tu nombre. Treinta días de soporte por si algo falla.' },
    ],
  },

  about: {
    eyebrow: 'Nosotros',
    title: 'Trabajamos con founders que ven el diseño como algo imprescindible, no como un extra. Desde la primera inversión hasta cada ronda que sigue, los ayudamos a validar ideas, convencer a inversores y construir marcas y productos que perduran.',
    body: 'Tratamos cada proyecto como si fuera propio: un founder merece un socio, no un proveedor. Estuvimos en esa situación las veces suficientes como para saber lo que está en juego. Usamos la IA para avanzar más rápido, no para recortar calidad, y así el tiempo va a donde más importa: la estrategia y el oficio.',
    portraitAlt: 'Mer Rey, fundadora de MER Studio',
    name: 'Mer Rey',
    role: 'Fundadora · Design Lead',
    quote: 'Hace más de 25 años que diseño productos digitales para empresas de Estados Unidos y Latinoamérica, grandes compañías y startups, muchas veces trabajando directamente con founders y CEOs.',
    stats: [
      { value: '25+', label: 'años de experiencia diseñando productos, marcas y sitios web' },
      { value: '35+', label: 'sitios web y productos digitales entregados directamente a clientes' },
      { value: '1:1', label: 'Acceso directo a la diseñadora senior, de la primera llamada a los archivos finales' },
      { value: '+300%', label: 'pedidos en el primer año de The Mile después del lanzamiento' },
    ],
  },

  finalCta: {
    eyebrow: 'Por ahora, eso es todo.',
    title: '¿Tienes un proyecto en mente?\nHablemos',
    letsTalkSr: '(escríbenos por WhatsApp, se abre en una pestaña nueva)',
  },

  faqPage: {
    meta: {
      title: 'Preguntas frecuentes — Proceso, plazos y plataformas | MER Studio',
      description: 'Respuestas sobre costos, plazos, revisiones, entrega, plataformas de ecommerce (Shopify, Tiendanube, WooCommerce) y visibilidad en IA, de un estudio de diseño y desarrollo.',
    },
    eyebrow: 'preguntas frecuentes',
    title: 'Preguntas, respondidas.',
    noteBefore: 'Proceso, plazos, plataformas y visibilidad en IA: todo lo que conviene saber antes de empezar. Si falta algo, pregúntanos en una ',
    noteLink: 'llamada de 20 minutos',
    noteAfter: '.',
    listAriaLabel: 'Preguntas frecuentes',
    moreAiVisibility: 'Todas las preguntas sobre visibilidad en IA → leer más',
    cta: { eyebrow: '¿No encontraste la respuesta?', title: '¿Te queda\nalguna duda?' },
  },

  faq: {
    groups: [
      { num: '01', label: 'proceso', items: [
        { q: '¿Cuánto cuesta un proyecto?', a: 'Cada proyecto se cotiza después de una llamada de 20 minutos. Antes de empezar tienes el alcance y el precio cerrados, sin sorpresas.' },
        { q: '¿Cuánto tarda un proyecto?', a: 'Desde una semana, según el alcance. Una landing avanza más rápido que una tienda completa o un producto, y acordamos las fechas antes de empezar.' },
        { q: '¿Cuántas rondas de revisiones incluye?', a: 'Dos rondas de revisiones, incluidas en todos los proyectos.' },
        { q: '¿Qué recibo en la entrega?', a: 'Tus archivos y tus cuentas, todo a tu nombre.' },
      ] },
      { num: '02', label: 'servicios', items: [
        { q: '¿Con qué plataformas de ecommerce trabajan?', a: 'Shopify, Tiendanube y WooCommerce. Te recomendamos una según tu mercado, tu catálogo y la forma en que vendes.' },
        { q: '¿Pueden trabajar sobre mi marca o mi sitio actual?', a: 'Sí. Podemos hacer evolucionar lo que ya tienes o empezar desde cero.' },
        { q: '¿Trabajan con clientes fuera de Argentina?', a: 'Sí. Estamos en Buenos Aires y trabajamos de forma remota, en español o en inglés.' },
        { q: '¿Pueden sumar asistentes con IA o automatizaciones?', a: 'Sí, como servicio adicional: asistentes que responden con tu propio contenido y flujos automáticos conectados a las herramientas que ya usas.' },
      ] },
      { num: '03', label: 'visibilidad en ia', items: [
        { q: '¿Qué es la visibilidad en IA (GEO / AEO)?', a: 'Hacer que a la IA le resulte fácil encontrar, entender y citar tu marca, no solo posicionarla en Google.' },
        { q: '¿La visibilidad en IA es gratis en octubre?', a: 'Sí, la configuración es gratis para los proyectos que empiezan en octubre de 2026. El resto es pago.' },
      ] },
    ],
    aiVisibility: [
      { q: '¿Qué es el GEO (Generative Engine Optimization)?', a: 'Es hacer que motores de IA como ChatGPT, Perplexity y Google AI puedan encontrar, entender y citar tu marca cuando la gente les hace preguntas, además de aparecer en la lista de resultados de Google.' },
      { q: '¿Qué es el AEO (Answer Engine Optimization)?', a: 'Es estructurar tu contenido para que se convierta en la respuesta directa: preguntas y respuestas claras, datos estructurados y páginas que los rastreadores de IA puedan leer.' },
      { q: '¿En qué se diferencia el GEO del SEO?', a: 'El SEO te posiciona; el GEO y el AEO hacen que te mencionen. Funcionan juntos: una buena base técnica ayuda a los dos.' },
      { q: '¿Qué es gratis en los proyectos que empiezan en octubre?', a: 'La configuración: schema, llms.txt, acceso de los rastreadores de IA, estructura semántica y un chequeo inicial de visibilidad. La estrategia de contenido, la auditoría completa y el seguimiento mensual son pagos.' },
      { q: '¿Garantizan que la IA los mencione?', a: 'Nadie puede garantizarlo. Creamos las condiciones para que los motores de IA te encuentren y confíen en ti, y medimos qué cambia.' },
    ],
  },

  aiVisibility: {
    meta: {
      title: 'Visibilidad en IA — Cómo aparecer en ChatGPT (GEO y AEO)',
      description: 'Posicionamiento en IA con GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization): hacemos que ChatGPT, Perplexity y Google AI lean y citen tu marca.',
    },
    intro: {
      eyebrow: 'visibilidad en ia · geo / aeo',
      title: 'Cuando alguien le pregunta a una IA, ¿te nombra?',
      note: 'La búsqueda está pasando de una lista de enlaces a una sola respuesta. Con GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization), hacemos que tu marca sea legible, se entienda y pueda citarse en ChatGPT, Perplexity, Gemini y los resúmenes con IA de Google.',
    },
    method: {
      eyebrow: 'el método',
      title: 'Cuatro cosas que una IA necesita antes de recomendarte.',
      lede: 'El posicionamiento sigue importando. Pero una IA solo nombra lo que puede leer, entender y verificar en otros lugares.',
      items: [
        { t: 'Legible', d: 'Los rastreadores pueden llegar a tu sitio y leerlo: páginas rápidas, HTML limpio, un llms.txt y un robots.txt que deja entrar a los bots de búsqueda con IA en lugar de bloquearlos.' },
        { t: 'Comprensible', d: 'Datos estructurados (JSON-LD) e información coherente sobre tu marca, para que un modelo sepa quién eres, qué vendes, dónde trabajas y para quién, sin adivinar.' },
        { t: 'Citable', d: 'Páginas que responden las preguntas reales de tus clientes, en un formato que un modelo puede tomar y citar: FAQs claras, comparaciones, alcances y rangos de precios.' },
        { t: 'Presente', d: 'Aparecer en los lugares que los modelos usan para verificarte: Perfil de Empresa en Google, directorios, reseñas, prensa y sitios de partners.' },
      ],
      note: 'Nadie puede garantizar que una IA te nombre. Nos aseguramos de que pueda hacerlo, y medimos en qué preguntas apareces, antes y después.',
    },
    proof: {
      eyebrow: 'pruebas, no promesas',
      title: 'Este sitio está hecho de la misma forma.',
      steps: [
        { t: 'Un llms.txt', d: 'Un resumen en lenguaje simple de quiénes somos y qué hacemos, escrito para los rastreadores de IA.' },
        { t: 'Datos estructurados', d: 'El JSON-LD les dice a las máquinas nuestro nombre, servicios y ubicación, sin adivinar.' },
        { t: 'Abierto a los rastreadores de IA', d: 'Nuestro robots.txt da la bienvenida a GPTBot, ClaudeBot, PerplexityBot y Google-Extended en lugar de bloquearlos.' },
      ],
      snippetLabel: 'mer.studio/llms.txt',
    },
    faq: { eyebrow: 'preguntas frecuentes', title: 'Preguntas sobre visibilidad en IA.' },
    cta: { eyebrow: 'Una pregunta para empezar.', title: '¿Qué dice la IA\nsobre tu marca?' },
  },

  offer: {
    tag: 'Gratis con tu proyecto · Oct 2026',
    more: 'leer más',
    pill: 'Gratis · Oct 2026',
    hero: 'Visibilidad en IA gratis para proyectos que empiezan en octubre de 2026',
    free: {
      title: 'Incluido gratis',
      items: [
        'Configuración base: schema / JSON-LD, llms.txt, acceso de los bots de IA en robots.txt, estructura semántica del contenido',
        'Un chequeo inicial de visibilidad en ChatGPT, Perplexity, Gemini y Google AI',
      ],
    },
    paid: {
      title: 'Sigue siendo pago',
      items: ['Estrategia de contenido para IA', 'Auditoría completa', 'Medición mensual'],
    },
    intro: 'Oferta de lanzamiento: todo proyecto que empieza en octubre de 2026 incluye sin costo la configuración de visibilidad en IA.',
    llms: 'Oferta de lanzamiento: los proyectos que empiezan en octubre de 2026 incluyen gratis la configuración de visibilidad en IA (schema, llms.txt, acceso de rastreadores de IA, estructura semántica y un chequeo inicial de visibilidad). La estrategia de contenido, la auditoría completa y la medición mensual son pagas.',
  },

  intake: {
    preferEmail: '¿PREFIERES EMAIL?',
  },

  startProject: {
    meta: {
      title: 'Empieza un proyecto — MER Studio',
      description: 'Cuéntanos qué quieres construir. Comparte algunos detalles de tu proyecto y te respondemos en 2 días hábiles con un próximo paso concreto.',
    },
    intro: {
      eyebrow: 'empieza un proyecto',
      title: 'Cuéntanos qué quieres construir.',
      note: 'Algunos detalles bien pensados nos ayudan a llegar preparados a la primera conversación. Te lleva unos 4 minutos.',
    },
    brief: {
      eyebrow: 'el brief',
      title: 'Un buen trabajo empieza con una conversación clara.',
      lede: 'No todas las respuestas tienen que ser definitivas. Comparte lo que sepas y el resto lo definimos juntos.',
    },
    next: {
      eyebrow: 'qué pasa después',
      title: 'Simple, transparente, humano.',
      steps: [
        { t: 'Leemos cada brief', d: 'Una persona senior del equipo revisa tus objetivos, el encaje y los tiempos.' },
        { t: 'Nos reunimos 20 minutos', d: 'Sin guion de ventas: contexto, preguntas y próximos pasos útiles.' },
        { t: 'Recibes un plan claro', d: 'Si encajamos, te proponemos alcance, equipo, tiempos e inversión.' },
      ],
    },
  },

  form: {
    ariaLabel: 'Consulta de proyecto',
    honeypot: 'Deja este campo vacío',
    sections: {
      who: 'Primero, ¿quién eres?',
      together: '¿Qué podemos hacer juntos?',
      timing: 'Tiempos',
    },
    fields: {
      name: { label: 'TU NOMBRE *', placeholder: 'Nombre y apellido' },
      email: { label: 'EMAIL DE TRABAJO *', placeholder: 'tu@empresa.com' },
      company: { label: 'EMPRESA / ORGANIZACIÓN', placeholder: '¿Dónde trabajas?' },
      phone: { label: 'TELÉFONO / WHATSAPP', placeholder: 'Código de país + número' },
      message: { label: 'CUÉNTANOS SOBRE EL PROYECTO *', placeholder: '¿Qué estás construyendo, cambiando o intentando resolver? Si tienes un link, también suma.' },
    },
    servicesLegend: 'Servicios (elige los que quieras)',
    services: ['Branding', 'Sitio web', 'Producto digital', 'Visibilidad en IA', 'Asistentes con IA y automatización', 'Design system', 'Otra cosa'],
    idealStart: 'INICIO IDEAL',
    timing: ['Lo antes posible', 'En 1–3 meses', '3–6 meses', 'Solo estoy explorando'],
    submitNote: 'Revisamos tu mensaje y te respondemos en 2 días hábiles con un próximo paso concreto, casi siempre una llamada de presentación de 20 minutos.',
    errors: {
      name: 'Dinos tu nombre, por favor.',
      emailMissing: 'Agrega tu email para que podamos responderte.',
      emailInvalid: 'Ese email no parece correcto. Prueba con tu@empresa.com.',
      message: 'Cuéntanos un poco sobre el proyecto.',
      localOnly: 'Los formularios solo funcionan en el deploy de Netlify (Netlify recibe el POST); este servidor local no puede recibirlos.',
      generic: 'Algo falló al enviar tu mensaje. Vuelve a intentarlo, o escríbenos a {email}.',
      withCode: 'Algo falló al enviar tu mensaje (error {code}). Vuelve a intentarlo, o escríbenos a {email}.',
    },
    doneText: 'Gracias. Te respondemos en 2 días hábiles.',
  },

  thanks: {
    meta: { title: 'Gracias — MER Studio' },
    eyebrow: 'consulta enviada',
    title: 'Gracias. Te respondemos en 2 días hábiles.',
  },

  notFound: {
    meta: { title: 'Página no encontrada — MER Studio' },
    eyebrow: 'Error 404',
    title: 'Esta página no existe',
  },

  projectDetail: {
    close: 'Cerrar proyecto',
  },

  jsonld: {
    areaServed: 'Todo el mundo',
    home: {
      description: 'Estrategia, diseño y código en manos de un solo equipo. Veinticinco años entre productos para grandes empresas y startups de Estados Unidos, aplicados a proyectos de cualquier tamaño: una marca, un sitio web, una tienda online, una plataforma completa.',
      slogan: 'Estrategia, diseño y desarrollo, de principio a fin.',
      catalogName: 'Servicios',
      aiVisibilityService: { name: 'Visibilidad en IA · GEO / AEO', description: 'Para que te encuentren cuando le preguntan a una IA, no solo a Google.' },
      founderJobTitle: 'Fundadora',
      founderDescription: 'Hace más de 25 años que diseño productos digitales. Ocho de esos años los dediqué a productos complejos para grandes empresas, y siete a trabajar con startups de Estados Unidos, muchas veces directamente con founders y CEOs.',
    },
    aiVisibility: {
      name: 'Visibilidad en IA (GEO / AEO)',
      serviceType: 'Generative engine optimization (GEO) y answer engine optimization (AEO)',
      description: 'Hacemos que tu marca sea legible, se entienda y pueda citarse en ChatGPT, Perplexity, Gemini y los resúmenes con IA de Google: páginas rastreables, datos estructurados, respuestas citables y presencia en los lugares que los modelos usan para verificarte.',
      catalogName: 'Cuatro cosas que una IA necesita antes de recomendarte',
    },
  },

  caseStudies: {
    asociart: {
      client: 'Asociart',
      credit: 'trabajo realizado a través de NEORIS',
      linkLabel: 'asociart.com',
      title: 'Rediseño de una plataforma legacy de 13 módulos',
      meta: '[Seguros y Finanzas]',
      roles: ['UX Research', 'Design System', 'DISEÑO DE PRODUCTO', 'Front-End'],
      poc: {
        title: 'Flujo de Design System asistido por IA',
        subtitle: 'De historias de usuario a interfaces basadas en el design system',
        intro: [
          'Construí una prueba de concepto para validar si un flujo asistido por IA podía traducir requerimientos de producto en interfaces editables en Figma, manteniendo como fuente de verdad un Design System empresarial existente.',
          'Seleccioné pares de historias de usuario anteriores con sus resultados aprobados en Figma como ejemplos few-shot / in-context, para darle al modelo referencias concretas de cómo los requerimientos se habían traducido históricamente en patrones de UX, componentes y layouts. El flujo combinaba esa guía de contexto con reglas explícitas de UX e información estructurada del Design System —componentes, variantes, variables, tokens y patrones de interacción—, que llegaba al sistema a través de una capa de contexto basada en MCP en lugar de inventar UI desde cero.',
        ],
        tested: { label: 'Qué probé', body: 'Al pasar una historia de usuario real por el flujo, el agente generó vistas editables en Figma construidas con componentes existentes del Design System, no UI genérica. La traducción funcionó: se mantuvieron la reutilización de componentes y la intención de UX, y el resultado se podía revisar y editar en lugar de ser un mockup plano.' },
        status: { label: 'Estado', body: 'POC validada. No se llevó a producción: el objetivo era probar que la capa de traducción funcionaba, no automatizar decisiones de diseño. La diseñadora conserva la validación y el criterio final.' },
        facts: {
          domain: { label: 'Dominio', value: 'Automatización de Design System' },
          length: { label: 'Duración', value: 'POC · 2026' },
          role: { label: 'Rol', value: 'Diseño y ejecución' },
        },
        humanInLoop: { label: 'Humano en el circuito', body: 'La IA acelera la traducción y el mapeo de componentes; la diseñadora conserva la validación y las decisiones finales de diseño.' },
      },
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'Asociart convocó a Neoris para reemplazar un sistema legacy monolítico que manejaba las operaciones de siniestros, legales, médicas y financieras de más de diez áreas. El producto no tenía práctica de UX ni un sistema visual compartido. Como parte del equipo de Neoris, me sumé para construir esa base mientras se rediseñaba la plataforma.' },
        theWork: { heading: 'El trabajo', body: 'Lideré la investigación con usuarios internos y stakeholders, mapeé los service blueprints de trece módulos interconectados y construí el Core Design System que los sostiene a todos: más de 71 componentes, una arquitectura de tokens para color, tipografía y espaciado, documentada en Storybook. Especifiqué los estados de los componentes y el comportamiento de las interacciones según el contraste WCAG, y trabajé directamente en Angular para mantener alineadas las especificaciones y la interfaz en producción.' },
        criticalityFirst: { heading: 'La criticidad primero', body: 'Recuperos fue el primer módulo que rediseñé, reemplazando una pantalla legacy muy pesada. Un proceso diario toma cada siniestro recuperable, calcula su criticidad y lo asigna a un gestor. La bandeja se abre ordenada por ese puntaje, y un panel de vista rápida muestra los datos clave sin salir de la lista: menos pantallas entre el gestor y el próximo caso que importa.' },
        outcome: { heading: 'Resultado', body: 'Una base compartida para trece módulos y varios equipos, que usan más de 500 personas internas. Cinco años en la cuenta, más de 130 sprints y un 98 % de builds exitosos en los módulos activos.' },
      },
      images: {
        legacy: { alt: 'El sistema legacy de Asociart: una pantalla densa y cargada de formularios de la plataforma de interconexión con prestadores' },
        recoveriesA: { alt: 'Core Design System de Asociart: fundamentos de color y tipografía' },
        recoveriesB: { alt: 'Documentación en Storybook de Asociart para el componente aso-button' },
        outcome: { alt: 'La pantalla rediseñada de gestión de siniestros de Asociart en una laptop' },
        workflow: { alt: 'Flujo de Design System asistido por IA: un diagrama que va de la historia de usuario, los ejemplos few-shot y las reglas, pasando por Claude y el MCP de Figma, hasta una interfaz editable en Figma construida con el Design System' },
      },
    },
    'the-mile': {
      client: 'The Mile',
      credit: 'contrato · equipo interno',
      linkLabel: 'orchardmile.com/the-mile',
      title: 'Creadores convertidos en tiendas',
      meta: '[Ecommerce y Moda] EN THE MILE',
      roles: ['Branding', 'Diseño de producto', 'Design System', 'Prototipado'],
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'Orchard Mile había construido un marketplace de lujo sólido, pero la adquisición paga y la competencia de catálogo frenaban su crecimiento. La respuesta fue convertirse en The Mile: el sitio se adaptó al nuevo modelo y se creó una app mobile desde cero que convirtió a los creadores en tiendas distribuidas, que venden las marcas del marketplace a sus propias audiencias y cobran comisión por cada venta.' },
        theWork: { heading: 'El trabajo', body: 'Empecé por la marca: logo, guía de marca y sistema de marca. Después la app, diseñada desde cero con el CEO y el equipo de marketing tras una breve ronda de investigación, cubriendo de punta a punta los recorridos de consumidores y creadores: onboarding, shows comprables en vivo y grabados, reels, tiendas de creadores, links de afiliados, descubrimiento y checkout. También rediseñé el sitio de Orchard Mile para acompañarlo, con una nueva sección de Reels; armé prototipos navegables para presentar a inversores y sumar influencers antes del desarrollo, y acompañé al desarrollador de React Native en algunos componentes.' },
        checkoutInsideTheApp: { heading: 'El checkout dentro de la app', body: 'La mayoría de las apps de creator commerce mandan a los compradores a pagar a otro lado. Acá toda la compra pasaba dentro de la app: los productos venían de Orchard Mile como retailer, así que el descubrimiento, la confianza en el creador y el checkout quedaban en un mismo circuito.' },
        outcome: { heading: 'Resultado', body: 'Primer año después del lanzamiento (abr–oct 2023): comunidad de creadores +200 %, audiencia de los shows ×2, pedidos +300 %, artículos por pedido de 1,7 a 2,7.' },
        academy: { heading: 'Academy', body: 'El negocio dependía de qué tan bien vendieran los creadores, así que armé The Mile Academy: documentación y clases en video para ayudarlos a planificar, filmar y presentar productos de forma más profesional. Así, la habilidad del creador pasó a ser algo que el producto impulsa, en lugar de algo que solo espera.' },
      },
      images: {
        flow: { alt: 'Flujo de usuario de la app The Mile: onboarding, registro, verificación y el recorrido de la tienda del creador' },
        brand: { alt: 'Sistema de marca de The Mile: colores, logotipos y tipografías de marca' },
        checkout: { alt: 'The Mile en desktop y mobile, sobre las pantallas conectadas de onboarding y cuenta del prototipo navegable', desc: 'Prototipos navegables usados con inversores y creadores para validar cada recorrido antes del desarrollo.', label: 'Prototipos navegables' },
        outcomeHero: { alt: 'La app The Mile en un teléfono: una creadora conduciendo un show comprable' },
        outcomePhone: { alt: 'La pantalla de bienvenida de la app The Mile en un teléfono' },
        academyBoard: { alt: 'Flujo de The Mile Academy: pantallas de las clases y sus conexiones' },
        academyLogo: { alt: 'Identidad de The Mile Academy' },
      },
    },
    'orchard-mile': {
      client: 'Orchard Mile',
      credit: 'contrato · equipo interno',
      linkLabel: 'orchardmile.com',
      title: '250 marcas, una sola tienda',
      meta: '[Ecommerce y Moda]',
      roles: ['UX/UI', 'Front-End', 'Editorial', 'Growth Design'],
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'Lanzada en Nueva York en 2015 por una ex ejecutiva de Bergdorf Goodman, Orchard Mile reunió moda de diseñador, belleza y hogar de boutiques independientes y grandes retailers en una sola tienda organizada por marca. Pasó de 30 marcas en el lanzamiento a 120 en menos de dos años, y sus propias fundadoras identificaron el riesgo: la parálisis por exceso de opciones. Cuando me sumé, el catálogo ya tenía más de 250 marcas y unos 80.000 SKUs, provenientes de tiendas con datos inconsistentes.' },
        theWork: { heading: 'El trabajo', body: 'Cinco años diseñando y construyendo las páginas que vendían el catálogo: landings, historias editoriales, páginas de influencers y páginas de ecommerce, que implementé en Angular junto al equipo de front-end. Llevé las campañas de temporada —Black Friday, el Día del Padre y cada lanzamiento intermedio— del brief a la página publicada, además del contenido para modales del sitio, campañas de email en Klaviyo y piezas de marketing, con pruebas A/B en AB Tasty. También trabajé con el equipo de back-end en los scrapers que traían los datos de producto de la tienda de cada marca.' },
        outcome: { heading: 'Resultado', body: 'Un flujo constante de páginas de campaña y editoriales que mantuvo visibles más de 250 marcas en un catálogo en cambio permanente, campañas de ciclo de vida para más de 200.000 suscriptores y la base de lo que después fue The Mile.' },
      },
      images: {
        start: { alt: 'Editorial de Orchard Mile: una modelo con un conjunto tejido junto a una página de colección comprable' },
        storefront: { alt: 'El cartel de Orchard Mile en la fachada de una boutique' },
        campaigns: { alt: 'Tres páginas editoriales de Orchard Mile una al lado de otra: entrevistas a influencers con productos comprables' },
        site: { alt: 'La home de Orchard Mile en una laptop' },
      },
    },
    quilmes: {
      client: 'Quilmes',
      credit: 'cliente del estudio',
      title: 'Un cupón que se usa con una mano, en medio de la gente',
      meta: '[Marcas de consumo]',
      note: '35.000 visitantes por semana',
      roles: ['Concepto de producto', 'UX/UI', 'Mobile'],
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'Todo el que visita Puerto Iguazú termina en las Cataratas —unos 35.000 turistas por semana, 1,6 millones al año— y la Cabaña Quilmes es el único refugio dentro del parque nacional. Pero los hoteles, las atracciones y los locales del pueblo funcionaban cada uno por su lado. Quilmes quería un ecosistema digital que los conectara y llevara a esos visitantes a sus puntos de venta.' },
        theWork: { heading: 'El trabajo', body: 'Pasaporte Quilmes, una plataforma de beneficios para visitantes. Quilmes definió la necesidad; yo diseñé y desarrollé el producto: una web app, sin descarga. Los visitantes se registran, eligen un local y una promoción, escanean un QR y lo canjean con el mozo. El descubrimiento por categoría y cercanía, las páginas de los locales y el canje con QR se diseñaron con una sola restricción: el recorrido tenía que funcionar rápido, con una mano y en un entorno real y ruidoso.' },
        outcome: { heading: 'Resultado', body: 'Lanzada en 2022 como MVP exclusivo para visitantes de las Cataratas del Iguazú. Lo que dijeron los dueños de los locales: “Haría conocer la Cabaña a cada visitante del parque.” · “Traería clientes nuevos y más rotación de mesas.” · “La app es muy simple y fácil de usar.”' },
      },
      images: {
        falls: { alt: 'Cataratas del Iguazú' },
        cheers: { alt: 'Amigos brindando con vasos de cerveza Quilmes' },
        screens: { alt: 'Pasaporte Quilmes: pantallas de onboarding, idioma, login, panel, menú, mapa, cupones, página de local, escaneo de QR, canje y agradecimiento' },
      },
    },
    'carbon-optimum': {
      client: 'Carbon Optimum',
      credit: 'cliente del estudio',
      linkLabel: 'carbonoptimum.com',
      title: 'Un proceso industrial, fácil de entender',
      meta: '[Climate Tech] [Empresas]',
      roles: ['Branding', 'Arquitectura de marca', 'Diseño web', 'Desarrollo web'],
      startingPoint: {
        heading: 'Punto de partida',
        steps: ['Materia prima', 'Microalgas', 'Biomasa', 'Productos orgánicos'],
        body: 'Carbon Optimum convierte el CO₂ capturado en valor: las microalgas lo absorben, la biomasa se cosecha en un solo día y se transforma en materia prima para productos orgánicos. Una empresa de Miami con un proceso realmente complejo, y una marca que tenía que hacerlo fácil de entender para partners y compradores.',
      },
      blocks: {
        theWork: { heading: 'El trabajo', body: 'Rediseñé el logo de Carbon Optimum y construí una arquitectura de marca a su alrededor: Optimarine, la línea de ingredientes marinos basada en microalgas, y sus tres marcas de producto, OptiCosmetics, OptiOmega3 y Biomass. Después diseñé y desarrollé el sitio: arquitectura de información y un sistema visual que convierten el proceso en un relato claro, construido con páginas modulares y responsive.' },
        outcome: { heading: 'Resultado', body: 'Marca y sitio publicados; me ocupo del mantenimiento continuo.' },
      },
      images: {
        hero: { alt: 'Fotografía aérea de olas de océano en azul oscuro, junto a la paleta de colores de la marca Carbon Optimum' },
        logoCarbon: { alt: 'El logo rediseñado de Carbon Optimum, con el lema “Carbon dioxide is the problem. We are the solution.”', caption: 'Rediseño del logo de Carbon Optimum' },
        logoOptimarine: { alt: 'El nuevo logo de Optimarine, con el lema “Sustainable Marine Ingredients, Powered by Microalgae”', caption: 'Diseño del logo de Optimarine' },
        site: { alt: 'El sitio de Carbon Optimum en una computadora de escritorio y sus páginas modulares, con las marcas OptiCosmetics, OptiOmega3 y Biomass' },
      },
    },
    'agente-mama': {
      client: 'Agente Mamá',
      credit: 'producto propio',
      linkLabel: 'Ver proyecto → landing',
      title: 'Una red de contención, no una app de productividad',
      meta: '[Startups]',
      roles: ['Estrategia de producto', 'UX Research', 'Design System', 'Desarrollo asistido por IA'],
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'La información escolar de un chico vive en cuatro sistemas que no se hablan entre sí: el grupo de WhatsApp de padres, la plataforma del colegio, el email y el calendario familiar. Alguien tiene que leerlo todo, filtrarlo y recordarlo, y casi siempre es la madre.' },
        theWork: { heading: 'El trabajo', body: 'Hice diez entrevistas de descubrimiento que redefinieron el público: ya no por la edad del hijo, sino por su autonomía. Y eliminé un módulo planificado antes de construirlo. Después vinieron la estrategia de producto, el UX/UI y el Design System: 38 pantallas diseñadas alrededor de una idea, sacar la carga mental sin quitar el control.' },
        trustIsEarnedNotAssumed: { heading: 'La confianza se gana, no se supone', body: 'Los eventos claros —una fecha, un hijo, una acción— se agendan solos, con opción de deshacer. Los ambiguos o delicados, como pagos o cambios de horario, van a una cola de revisión que se achica a medida que el agente demuestra que acierta.' },
        everyEventShowsItsSource: { heading: 'Cada evento muestra su origen', body: 'Cada evento lleva una etiqueta: plataforma del colegio, WhatsApp o calendario. Cuando una IA actúa sobre la información de una familia, poder rastrear el origen de cada dato es lo que hace que la adopten.' },
        outcome: { heading: 'Resultado', body: 'POC funcional: 38 pantallas en alta fidelidad, un Design System completo y los flujos clave de IA definidos y probados. Landing publicada para una primera validación de mercado.' },
      },
      images: {
        kids: { alt: 'Ilustración de cuatro chicos en estilo de papel recortado' },
        sources: { alt: 'Mensajes del grupo de WhatsApp y de la plataforma escolar que confluyen en un solo evento agendado' },
        landing: { alt: 'La landing de Agente Mamá en un teléfono' },
        matrix: { alt: '¿Qué es lo que más les importa a las madres? Un mapa de necesidades según su importancia para las madres y su impacto en la carga mental', desc: 'Un mapa ilustrativo de necesidades y decisiones de producto para Agente Mamá. Oportunidad central, alto impacto y alta prioridad: agenda escolar unificada, confianza en las decisiones de la IA, origen visible de la información, recordatorios de los hijos. Postergadas o repensadas: recetas y listas de compras, mensajes escolares automáticos, aprobar cada evento. Síntesis conceptual de 10 conversaciones exploratorias. Las posiciones son ilustrativas, no puntajes medidos.', label: '¿Qué es lo que más les importa a las madres?' },
        brand: { alt: 'Marca de Agente Mamá AI: el ícono de la casa en versiones clara, oscura y de acento, y el logotipo' },
        screens: { alt: 'Cuatro pantallas de Agente Mamá: bienvenida, perfil del hijo, panel del día y agenda' },
      },
    },
    'american-padel-systems': {
      client: 'American Padel Systems',
      credit: 'cliente del estudio',
      linkLabel: 'americanpadelsystems.com',
      title: 'Un sitio que responde "¿se paga solo?"',
      seoTitle: '¿Se paga solo?',
      meta: '[Empresas]',
      roles: ['branding', 'Diseño web', 'Herramienta interactiva', 'Desarrollo web'],
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'Una empresa de Miami que fabrica, instala y mantiene canchas de pádel para clubes, hoteles y conversiones de canchas de tenis necesitaba construir su marca y su sitio desde cero.' },
        theWork: { heading: 'El trabajo', body: 'Empecé con un análisis, junto al fundador, de lo que necesitaba el negocio. Después, el sistema de marca completo —logo, identidad corporativa y guía de marca— y luego el diseño y desarrollo web, que incluyó un simulador de ganancias: los interesados cargan el precio de la cancha, las horas de uso, la ocupación, la cantidad de canchas y los días de operación, y ven cuánto podría generar una instalación.' },
        outcome: { heading: 'Resultado', body: 'Marca y sitio publicados, con el simulador respondiendo la primera pregunta del comprador —¿se paga solo?— antes de la primera llamada. Me ocupo del mantenimiento continuo.' },
      },
      images: {
        brand: { alt: 'Logo de American Padel Systems sobre azul marino' },
        courts: { alt: 'Vista aérea de cuatro canchas de pádel azules' },
        site: { alt: 'El sitio de American Padel Systems en una laptop' },
        simulator: { alt: 'El simulador de ganancias: precio de la cancha, horas de uso, ocupación, cantidad de canchas y días de operación' },
        materials: { alt: 'Un carrusel de productos con una muestra de superficie de cancha de pádel' },
      },
    },
    'hifi-hub': {
      client: 'HiFi Hub',
      credit: 'diseñadora fundadora',
      linkLabel: 'hifihub.ai',
      title: 'Seis unidades de negocio, un solo producto',
      meta: '[Startups] [Ecommerce]',
      roles: ['branding', 'Diseño de producto', 'Design System', 'Arquitectura de información'],
      blocks: {
        startingPoint: { heading: 'Punto de partida', body: 'El audio de alta gama es una industria fragmentada: miles de marcas, distribuidores, revendedores y disquerías operan cada uno por su lado, así que descubrir algo pasa por casualidad. HiFi Hub se propuso reunirlos en una sola capa de descubrimiento —el modelo que Zillow aplicó en bienes raíces y Farfetch en moda de lujo, llevado al audio—, unificando seis unidades de negocio, cada una con sus propios datos, reglas y objetivo comercial.' },
        theWork: { heading: 'El trabajo', body: 'Primera y única diseñadora en un equipo de diez personas. Planteé que la taxonomía tenía que seguir el modelo de negocio, no el modelo de datos, y diseñé un único modelo de entidades —una tarjeta, una estructura de detalle, una misma lógica de comparación— con espacios de contenido variables por unidad en lugar de layouts variables. Un revendedor muestra su ubicación donde un producto muestra sus especificaciones; la estructura es la misma.' },
        branding: { heading: 'Branding', body: 'Un rebranding completo de The Audiophile Directory a HiFi Hub. Design tokens de dimensión, espaciado y radio, 65 tokens de color y una escala tipográfica, y una librería de componentes completa con todos los estados de interacción y temas claro y oscuro, consumida directamente por el front-end en React.' },
        outcome: { heading: 'Resultado', body: 'Publicado en hifihub.ai: 634 marcas, 17.923 productos, 1.384 revendedores, 7.034 disquerías y 124.308 publicaciones de equipos usados. Los equipos usados, que pasaron a ser una unidad principal después de analizar el uso, hoy son el catálogo más grande.' },
      },
      images: {
        hero: { alt: 'Una laptop abierta, vista desde dos ángulos' },
        listingA: { alt: 'Página de producto de HiFi Hub para el Bowers & Wilkins 801 Abbey Road Limited Edition' },
        listingB: { alt: 'Página de marca de HiFi Hub para Bowers & Wilkins' },
        logo: { alt: 'Logo de HiFi Hub' },
        brandSystem: { alt: 'Paleta de colores de HiFi Hub, matriz de tokens de color y documentación de design tokens' },
        outcome: { alt: 'La wishlist de HiFi Hub en una laptop' },
      },
    },
  },
};
