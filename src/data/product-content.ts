/**
 * product-content.ts — Product Design vertical content (case studies, writing,
 * design systems). Single source for the unified Product Design templates.
 */

export interface ProductWork {
  id: string;
  title: string;
  client: string;
  type: string;
  year: string;
  description: string;
  href: string;
  img?: string;
  alt?: string;
  tags: string[];
  featured?: boolean;
}

export const PRODUCT_WORK: ProductWork[] = [
  {
    id: 'ncb-design-system',
    title: 'Oasis Design System',
    client: 'NCB Financial Group',
    type: 'Design System',
    year: '2024',
    description: 'Building and evolving a living design system that improved team efficiency and created a reliable foundation for design at scale.',
    href: '/case-studies/ncb-design-system',
    img: '/assets/images/Personal-1775589530525.png',
    alt: 'Oasis design system component library screenshot',
    tags: ['Design System', 'Tokens', 'Governance'],
    featured: true,
  },
  {
    id: 'banking-loans',
    title: 'Banking Loans Platform',
    client: 'NCB Financial Group',
    type: 'UX / Product Design',
    year: '2024',
    description: 'End-to-end redesign of the digital loans application experience for retail and enterprise banking customers.',
    href: '/case-studies/banking-loans',
    img: '/assets/images/iStock-2208901213_1_-1775233406320.jpg',
    alt: 'Banking loans platform interface',
    tags: ['UX Research', 'Product Design', 'Banking'],
    featured: true,
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking',
    client: 'NCB Financial Group',
    type: 'Mobile UX',
    year: '2023',
    description: 'Redesigning the mobile banking experience for accessibility, clarity, and conversion.',
    href: '/case-studies/mobile-banking',
    img: '/assets/images/iStock-2177184278-1775233995703.jpg',
    alt: 'Mobile banking app interface on smartphone',
    tags: ['Mobile', 'Accessibility', 'UX Design'],
    featured: true,
  },
  {
    id: 'auto',
    title: 'Auto Loans',
    client: 'NCB Financial Group',
    type: 'Product Design',
    year: '2023',
    description: 'Streamlining the auto loan application process for digital-first customers.',
    href: '/case-studies/auto',
    img: '/assets/images/portfolio_work_tile.png',
    alt: 'Auto loans product design interface',
    tags: ['Product Design', 'Banking', 'UX'],
  },
  {
    id: 'mortgage',
    title: 'Mortgage Experience',
    client: 'NCB Financial Group',
    type: 'Product Design',
    year: '2023',
    description: 'End-to-end redesign of the mortgage product experience — from discovery to application.',
    href: '/case-studies/mortgage',
    alt: 'Mortgage experience product design',
    tags: ['Product Design', 'Banking', 'Calculator'],
  },
  {
    id: 'welink',
    title: 'WeLink Platform',
    client: 'WeLink',
    type: 'Product Design',
    year: '2022',
    description: 'Designing a Caribbean platform for discovering skilled workers through clearer browsing and stronger structure.',
    href: '/case-studies/welink',
    img: '/assets/images/featured_work_designing_for_millions.png',
    alt: 'WeLink platform interface showing community features',
    tags: ['Platform', 'Community', 'UX'],
  },
  {
    id: 'gleaner',
    title: 'Jamaica Gleaner Redesign',
    client: 'The Gleaner Company',
    type: 'Editorial Design',
    year: '2021',
    description: 'Modernising the digital editorial experience of Jamaica’s oldest newspaper while preserving its authority.',
    href: '/case-studies/gleaner',
    alt: 'Jamaica Gleaner editorial redesign',
    tags: ['Editorial', 'IA', 'Responsive'],
  },
  {
    id: 'type-design',
    title: 'Oasis Geometric Typeface',
    client: 'NCB Financial Group',
    type: 'Type Design',
    year: '2022',
    description: 'A custom geometric sans-serif typeface designed for the Oasis design system.',
    href: '/case-studies/type-design',
    img: '/assets/images/image-1775321950897.png',
    alt: 'Type design system showing typographic scale and specimens',
    tags: ['Typography', 'Type Design', 'Brand'],
  },
];

export interface ProductArticle {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
}

export const PRODUCT_WRITING: ProductArticle[] = [
  { slug: 'semantic-tokens-architecture', tag: 'Design Systems', title: 'The Architecture of Semantic Tokens', excerpt: 'Why primitive color scales are no longer sufficient for complex enterprise systems, and how to build a robust semantic layer.', date: 'MAR 24, 2024' },
  { slug: 'designers-who-code', tag: 'Engineering', title: 'Bridging the Gap: Designers Who Code', excerpt: 'Why the hybrid designer is becoming a necessity for teams building high-fidelity design systems.', date: 'FEB 12, 2024' },
  { slug: 'systems-governance', tag: 'Leadership', title: 'Systems Governance', excerpt: 'How to keep a system alive when you are managing 200+ individual contributors.', date: 'JAN 28, 2024' },
  { slug: 'measuring-success', tag: 'Product', title: 'Measuring Success', excerpt: 'Defining the KPIs that actually matter for internal design system adoption.', date: 'DEC 04, 2023' },
  { slug: 'death-of-static-mockup', tag: 'Opinion', title: 'The Death of the Static Mockup', excerpt: 'Why Figma is no longer the final destination, and how prototyping in code redefines the workflow.', date: 'NOV 19, 2023' },
];

export const articleHref = (slug: string) => `/product-design/writing/${slug}`;
