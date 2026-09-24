// Project Detail copy — Figma 2033:1913 (Asociart). Only projects listed here can open (D5).
export type ProjectDetailData = {
  id: string;
  client: string;
  link: { label: string; href: string };
  title: string;
  meta: string;
  roles: string[];
  blocks: { heading: string; body: string }[];
};

export const projectDetails: Record<string, ProjectDetailData> = {
  asociart: {
    id: 'asociart',
    client: 'Asociart',
    link: { label: 'asociart.com', href: 'https://asociart.com' },
    title: 'Reengineering a 13-module legacy platform',
    meta: '[Insurance & Finance] AT NEORIS',
    roles: ['UX Research', 'Design System', 'PRODUCT DESIGN', 'Front-End'],
    blocks: [
      { heading: 'Starting point', body: 'Asociart brought Neoris in to replace a monolithic legacy system running claims, legal, medical and financial operations across ten-plus departments. There was no UX practice on the product and no shared visual system. We were brought in to build that foundation while the platform was reengineered.' },
      { heading: 'What we did', body: 'Research with internal users and stakeholders, service blueprints for thirteen interconnected modules, and the Core Design System underneath all of them — 71+ components, token architecture for colour, type and spacing, documented in Storybook. Component states and interaction behaviour specified against WCAG contrast. Hands-on in Angular to keep the specs and the production UI aligned.' },
      { heading: 'Outcome', body: 'One shared foundation across thirteen modules and multiple teams, serving 500+ internal users. Five years on the account, 130+ sprints, a 98% successful build rate across active modules.' },
    ],
  },
};
