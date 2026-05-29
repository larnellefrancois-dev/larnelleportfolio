/**
 * realms-content.ts
 *
 * Single source of truth for all detail-page content across the three realms:
 *   - Art      (gallery artworks, projects, commissions)
 *   - Literature (volumes/excerpts, worldbuilding, author)
 *   - Product  (case studies)
 *
 * Architecture notes
 * ──────────────────
 * • Every record is typed and self-contained so pages can be rendered from
 *   data alone via DetailPageTemplate — no hard-coded JSX required.
 * • `content` blocks map 1-to-1 with DetailContentBlock from DetailPageTemplate.
 * • `meta`, `breadcrumbs`, `navLinks`, `arcaneIndex`, and `sysLabel` are all
 *   present so a template-driven page needs zero additional props.
 * • CMS-ready: replace static arrays with async fetchers without changing
 *   the shape of the data.
 */

import type {
  DetailRealm,
  DetailBreadcrumb,
  DetailMetaItem,
  DetailContentBlock,
  DetailNavLink } from
'@/components/DetailPageTemplate';

// ─── Shared base type ─────────────────────────────────────────────────────────

export interface RealmPageData {
  /** Unique slug used as the URL segment */
  slug: string;
  realm: DetailRealm;
  breadcrumbs: DetailBreadcrumb[];
  arcaneIndex: string;
  title: string;
  subtitle?: string;
  meta?: DetailMetaItem[];
  content?: DetailContentBlock[];
  navLinks?: DetailNavLink[];
  sysLabel?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ART REALM
// ─────────────────────────────────────────────────────────────────────────────

// ── Gallery artworks ──────────────────────────────────────────────────────────

export interface ArtworkItem {
  id: number;
  title: string;
  medium: string;
  year: string;
  img: string;
  alt: string;
}

export const galleryArtworks: ArtworkItem[] = [
{
  id: 1,
  title: 'Chromatic Studies I',
  medium: 'Digital / Mixed Media',
  year: '2025',
  img: 'https://images.unsplash.com/photo-1564573435382-0ab8293551c6',
  alt: 'Abstract expressionist painting with warm gold and crimson tones, layered textures'
},
{
  id: 2,
  title: 'Architectural Fragment II',
  medium: 'Ink',
  year: '2024',
  img: 'https://images.unsplash.com/photo-1725384785187-27d597e3a943',
  alt: 'Detailed ink drawing of architectural ruins with fine linework'
},
{
  id: 3,
  title: 'Interval Study',
  medium: 'Oil on Canvas',
  year: '2024',
  img: 'https://img.rocket.new/generatedImages/rocket_gen_img_17af69bf7-1775653560360.png',
  alt: 'Oil painting with deep atmospheric tones and painterly brushwork'
},
{
  id: 4,
  title: 'Signal & Noise',
  medium: 'Digital',
  year: '2025',
  img: 'https://images.unsplash.com/photo-1724358750966-3fee269c728a',
  alt: 'Digital artwork with signal-like patterns and noise textures in dark tones'
},
{
  id: 5,
  title: 'Pale Rupture',
  medium: 'Mixed Media',
  year: '2025',
  img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1937f5bcd-1773166031804.png',
  alt: 'Mixed media artwork with pale tones and dramatic contrast'
},
{
  id: 6,
  title: 'Mineral Dark',
  medium: 'Charcoal',
  year: '2024',
  img: 'https://img.rocket.new/generatedImages/rocket_gen_img_156daa527-1779910005320.png',
  alt: 'Charcoal landscape drawing with dark mineral textures and atmospheric depth'
}];


export const galleryPageData: RealmPageData = {
  slug: 'gallery',
  realm: 'art',
  breadcrumbs: [
  { label: 'Art', href: '/art' },
  { label: 'Gallery', href: '/art/gallery' }],

  arcaneIndex: 'M·I // VISIO',
  title: 'Gallery',
  subtitle: 'A curated collection of works spanning digital, traditional, and mixed media.',
  meta: [
  { label: 'Medium', value: 'Mixed' },
  { label: 'Works', value: `${galleryArtworks.length}` },
  { label: 'Updated', value: '2025' }],

  navLinks: [
  { label: 'Art Home', href: '/art', direction: 'prev' },
  { label: 'Projects', href: '/art/projects', direction: 'next' }],

  sysLabel: 'SYS_LOC: REALM_VISIO'
};

// ── Art Projects ──────────────────────────────────────────────────────────────

export interface ArtProject {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  img: string;
  alt: string;
}

export const artProjects: ArtProject[] = [
{
  id: 'chromatic-studies',
  title: 'Chromatic Studies',
  type: 'Series',
  year: '2025',
  description:
  'An ongoing series exploring the emotional resonance of color relationships, pigment layering, and the tension between warm and cool tones.',
  img: 'https://images.unsplash.com/photo-1674458988478-631147985faa',
  alt: 'Abstract painting with layered warm and cool chromatic tones'
},
{
  id: 'interval-studies',
  title: 'Interval Studies',
  type: 'Collection',
  year: '2024',
  description:
  'Visual explorations of negative space, pause, and the interval between forms — inspired by the novel project The Pale Interval.',
  img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b74db23c-1777743800738.png',
  alt: 'Atmospheric painting with deep tones exploring negative space'
},
{
  id: 'signal-archive',
  title: 'Signal Archive',
  type: 'Digital Series',
  year: '2025',
  description:
  'Digital works drawing from transmission artifacts, data noise, and the visual language of signal and interference.',
  img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1aa94029f-1779910010152.png',
  alt: 'Digital artwork with signal patterns and noise textures'
}];


export const artProjectsPageData: RealmPageData = {
  slug: 'projects',
  realm: 'art',
  breadcrumbs: [
  { label: 'Art', href: '/art' },
  { label: 'Projects', href: '/art/projects' }],

  arcaneIndex: 'M·I // OPERA',
  title: 'Projects',
  subtitle: 'Selected collections, visual studies, and ongoing series.',
  meta: [
  { label: 'Series', value: `${artProjects.length}` },
  { label: 'Updated', value: '2025' }],

  navLinks: [
  { label: 'Gallery', href: '/art/gallery', direction: 'prev' },
  { label: 'Commissions', href: '/art/commissions', direction: 'next' }],

  sysLabel: 'SYS_LOC: REALM_OPERA'
};

// ── Commissions ───────────────────────────────────────────────────────────────

export const commissionsPageData: RealmPageData = {
  slug: 'commissions',
  realm: 'art',
  breadcrumbs: [
  { label: 'Art', href: '/art' },
  { label: 'Commissions', href: '/art/commissions' }],

  arcaneIndex: 'M·I // MANDATUM',
  title: 'Commissions',
  subtitle: 'Original works created on commission — painting, illustration, and mixed media.',
  meta: [
  { label: 'Status', value: 'Open' },
  { label: 'Turnaround', value: '4–8 wks' }],

  content: [
  {
    type: 'text',
    heading: 'About Commissions',
    body: 'Original commissioned works are available across painting, illustration, and mixed media. Each piece is created to brief and delivered as a high-resolution digital file or physical work depending on medium.'
  },
  {
    type: 'list',
    heading: 'Available Work Types',
    items: [
    'Oil and acrylic painting — portrait, landscape, abstract',
    'Ink illustration — architectural, figurative, decorative',
    'Mixed media — layered works combining traditional and digital',
    'Digital illustration — editorial, conceptual, atmospheric']

  },
  {
    type: 'grid',
    heading: 'Process',
    gridItems: [
    { label: 'Brief', value: '01' },
    { label: 'Sketch', value: '02' },
    { label: 'Execution', value: '03' },
    { label: 'Delivery', value: '04' }]

  },
  {
    type: 'text',
    heading: 'Enquiries',
    body: 'To discuss a commission, use the contact form or send a direct message with your brief, preferred medium, dimensions, and timeline.'
  }],

  navLinks: [
  { label: 'Projects', href: '/art/projects', direction: 'prev' },
  { label: 'Art Home', href: '/art', direction: 'next' }],

  sysLabel: 'SYS_LOC: REALM_MANDATUM'
};

// ─────────────────────────────────────────────────────────────────────────────
// LITERATURE REALM
// ─────────────────────────────────────────────────────────────────────────────

// ── Volumes / Excerpts ────────────────────────────────────────────────────────

export interface LiteratureExcerpt {
  id: string;
  title: string;
  source: string;
  chapter: string;
  text: string;
}

export const literatureExcerpts: LiteratureExcerpt[] = [
{
  id: 'interval-01',
  title: 'The First Signal',
  source: 'The Pale Interval',
  chapter: 'Chapter I',
  text: `The archive had no windows. This was intentional — the archivist had learned early that windows invited the sky, and the sky, since the Interval, was not something one looked at without preparation.

She catalogued by sound instead. The low hum of the retrieval system. The dry click of the index cards. The occasional distant tone from the signal tower, which meant another fragment had surfaced from the pale.`
},
{
  id: 'interval-02',
  title: 'Twin Moons',
  source: 'The Pale Interval',
  chapter: 'Chapter IV',
  text: `Before the Interval, there had been one moon. Everyone agreed on this, though the records were inconsistent on its colour. Some said silver. Some said bone. The second moon appeared on the forty-third day after the rupture — smaller, redder, and positioned in a way that suggested it had always been there, waiting.

The archivist noted this in her log without comment. She had learned to note without comment.`
},
{
  id: 'interval-03',
  title: 'Transmission Fragment 7',
  source: 'The Pale Interval',
  chapter: 'Archive Fragment',
  text: `[SIGNAL RECOVERED — PARTIAL — CONFIDENCE: 0.34]

...the mineral plain extends...
...no horizon visible from this position...
...the interval is not a gap. It is a...
...repeat: the interval is not a gap. It is a...

[SIGNAL LOST]`
}];


export const excerptsPageData: RealmPageData = {
  slug: 'excerpts',
  realm: 'literature',
  breadcrumbs: [
  { label: 'Literature', href: '/literature' },
  { label: 'Excerpts', href: '/literature/excerpts' }],

  arcaneIndex: 'M·III // SCRIPTORIUM',
  title: 'Excerpts',
  subtitle: 'Selected passages from The Pale Interval and other works.',
  meta: [
  { label: 'Source', value: 'The Pale Interval' },
  { label: 'Fragments', value: `${literatureExcerpts.length}` }],

  navLinks: [
  { label: 'Literature', href: '/literature', direction: 'prev' },
  { label: 'Author', href: '/literature/author', direction: 'next' }],

  sysLabel: 'SYS_LOC: SCRIPTORIUM_DEEP'
};

// ── Literature Volumes (Scriptorium tomes) ────────────────────────────────────

export interface LiteratureVolume {
  id: string;
  volumeLabel: string;
  cycle: string;
  title: string;
  excerpt: string;
  coverImg: string;
  coverAlt: string;
  status: 'In Progress' | 'Complete' | 'Forthcoming';
  href: string;
}

export const literatureVolumes: LiteratureVolume[] = [
{
  id: 'the-pale-interval',
  volumeLabel: 'VOL. I',
  cycle: 'THE OBSIDIAN CYCLE',
  title: 'The Pale Interval',
  excerpt:
  '"The trees did not merely grow; they observed. Each knot in the bark was a silent eye, recording the passage of souls who dared to wander from the lit path."',
  coverImg:
  "https://images.unsplash.com/photo-1675749766352-84c1e023b430",
  coverAlt: 'Dark atmospheric forest with mist and deep shadows suggesting mystery',
  status: 'In Progress',
  href: '/literature/the-pale-interval'
},
{
  id: 'mechanics-of-the-void',
  volumeLabel: 'VOL. II',
  cycle: 'ASTRAL CHRONICLES',
  title: 'Mechanics of the Void',
  excerpt:
  '"To understand the emptiness between stars is to grasp the architecture of silence. It is not absence, but rather a space waiting patiently to be carved."',
  coverImg:
  "https://img.rocket.new/generatedImages/rocket_gen_img_153fe2dd7-1772087072661.png",
  coverAlt: 'Deep space photograph with star clusters and dark nebulae',
  status: 'Forthcoming',
  href: '/literature/worldbuilding'
},
{
  id: 'the-crimson-almanac',
  volumeLabel: 'VOL. III',
  cycle: 'FORGOTTEN LORE',
  title: 'The Crimson Almanac',
  excerpt:
  '"Blood and ink share a common viscosity when spilled in earnest. The histories written in one are invariably bound by the other."',
  coverImg:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1ea032be5-1768266966556.png",
  coverAlt: 'Ancient manuscript pages with aged parchment and handwritten text',
  status: 'Forthcoming',
  href: '/literature/excerpts'
}];


// ── The Pale Interval (novel detail) ─────────────────────────────────────────

export const thePaleIntervalPageData: RealmPageData = {
  slug: 'the-pale-interval',
  realm: 'literature',
  breadcrumbs: [
  { label: 'Literature', href: '/literature' },
  { label: 'The Pale Interval', href: '/literature/the-pale-interval' }],

  arcaneIndex: 'M·III // VOL. I',
  title: 'The Pale Interval',
  subtitle: 'A novel in progress. Signal, silence, and the space between worlds.',
  meta: [
  { label: 'Status', value: 'In Progress' },
  { label: 'Genre', value: 'Speculative Fiction' },
  { label: 'Cycle', value: 'The Obsidian Cycle' }],

  content: [
  {
    type: 'text',
    heading: 'Premise',
    body: 'After an unexplained atmospheric rupture known as the Interval, an archivist catalogues fragments of a world that may no longer exist. The novel is structured as a series of recovered transmissions, field notes, and archive entries — each piece partial, each piece pointing toward a silence at the centre of the story.'
  },
  {
    type: 'list',
    heading: 'Themes',
    items: [
    'Signal and silence — the meaning carried in what is not transmitted',
    'Geological rupture as metaphor for psychological fracture',
    'Archival memory and the unreliability of records',
    'The space between worlds — literal and emotional intervals',
    'Observation as a form of survival']

  },
  {
    type: 'grid',
    heading: 'At a Glance',
    gridItems: [
    { label: 'Status', value: 'Draft' },
    { label: 'Form', value: 'Novel' },
    { label: 'POV', value: 'Third' },
    { label: 'Tone', value: 'Atmospheric' }]

  },
  {
    type: 'text',
    heading: 'Structure',
    body: 'The novel is divided into three parts: The Archive, The Field, and The Pale. Each part shifts perspective and register — from the controlled precision of archival prose to the fragmented, signal-interrupted language of the field transmissions.'
  }],

  navLinks: [
  { label: 'Literature', href: '/literature', direction: 'prev' },
  { label: 'Excerpts', href: '/literature/excerpts', direction: 'next' }],

  sysLabel: 'SYS_LOC: VOL_I_PALE'
};

// ── Worldbuilding ─────────────────────────────────────────────────────────────

export const worldbuildingPageData: RealmPageData = {
  slug: 'worldbuilding',
  realm: 'literature',
  breadcrumbs: [
  { label: 'Literature', href: '/literature' },
  { label: 'Worldbuilding', href: '/literature/worldbuilding' }],

  arcaneIndex: 'M·III // MUNDUS',
  title: 'Worldbuilding',
  subtitle: 'The architecture of invented worlds — geography, cosmology, and lore.',
  meta: [
  { label: 'Primary World', value: 'The Pale' },
  { label: 'Secondary', value: 'The Void' }],

  content: [
  {
    type: 'text',
    heading: 'The Pale',
    body: 'The Pale is the name given to the altered atmospheric layer that appeared after the Interval. It is not a sky in the conventional sense — it is a membrane, semi-translucent, through which the original sky can sometimes be glimpsed. Looking at it directly requires preparation. Most people have stopped trying.'
  },
  {
    type: 'text',
    heading: 'The Archive',
    body: 'The Archive is the central institution of the novel — a repository of pre-Interval records, post-Interval transmissions, and the archivist\'s own cataloguing work. It has no windows. It is located in a structure that predates the Interval by several centuries, which is considered significant.'
  },
  {
    type: 'list',
    heading: 'Key Locations',
    items: [
    'The Archive — windowless repository at the edge of the mineral plain',
    'The Signal Tower — transmission point for recovered fragments',
    'The Mineral Plain — vast flat expanse with no visible horizon',
    'The Rupture Site — location of the original Interval event, now inaccessible',
    'The Second Moon — not a location but a presence; redder, smaller, always watching']

  },
  {
    type: 'list',
    heading: 'Cosmological Rules',
    items: [
    'The Interval is not a gap — it is a presence',
    'The second moon appeared on day forty-three; its origin is unrecorded',
    'Transmissions from the field arrive partial — confidence ratings attached',
    'The sky cannot be looked at without preparation since the rupture',
    'Time in the novel is measured in days since the Interval, not calendar dates']

  }],

  navLinks: [
  { label: 'Author', href: '/literature/author', direction: 'prev' },
  { label: 'Literature', href: '/literature', direction: 'next' }],

  sysLabel: 'SYS_LOC: MUNDUS_ARCHIVE'
};

// ── Author ────────────────────────────────────────────────────────────────────

export const authorPageData: RealmPageData = {
  slug: 'author',
  realm: 'literature',
  breadcrumbs: [
  { label: 'Literature', href: '/literature' },
  { label: 'Author', href: '/literature/author' }],

  arcaneIndex: 'M·III // AUCTOR',
  title: 'L.F. Chambers',
  subtitle: 'Multidisciplinary creative working across image, interface, and story.',
  meta: [
  { label: 'Current Work', value: 'The Pale Interval' },
  { label: 'Genre', value: 'Speculative Fiction' },
  { label: 'Status', value: 'In Progress' }],

  content: [
  {
    type: 'text',
    body: 'L.F. Chambers is a multidisciplinary creative working across image, interface, and story. The literary work operates in the space between speculative fiction, atmospheric prose, and archival narrative.'
  },
  {
    type: 'text',
    body: 'Current project: The Pale Interval, a novel in progress. Themes include signal and silence, geological rupture, archival memory, and the space between worlds.'
  },
  {
    type: 'text',
    body: 'The literary work is informed by a background in visual design and systems thinking — an attention to structure, negative space, and the architecture of meaning.'
  }],

  navLinks: [
  { label: 'Excerpts', href: '/literature/excerpts', direction: 'prev' },
  { label: 'Worldbuilding', href: '/literature/worldbuilding', direction: 'next' }],

  sysLabel: 'SYS_LOC: AUCTOR_ARCHIVE'
};

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT REALM — Case Studies
// ─────────────────────────────────────────────────────────────────────────────

export interface CaseStudyMeta extends RealmPageData {
  client: string;
  type: string;
  year: string;
  /** Short summary for listing cards */
  summary: string;
  /** Cover image for listing cards */
  coverImg?: string;
  coverAlt?: string;
  /** Whether the page has a dedicated interactive prototype */
  hasPrototype?: boolean;
}

export const caseStudies: CaseStudyMeta[] = [
// ── NCB Mobile Banking ──────────────────────────────────────────────────────
{
  slug: 'mobile-banking',
  realm: 'product',
  client: 'NCB Financial Group',
  type: 'Mobile UX',
  year: '2023',
  summary:
  'Helping transition a large-scale banking product to a stronger, more consistent design system.',
  coverImg: '/assets/images/Screenshot_2026-04-04_at_12.01.10_PM-1775322190359.png',
  coverAlt: 'Figma design file showing NCB mobile app screens and component work',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'Mobile Banking', href: '/case-studies/mobile-banking' }],

  arcaneIndex: 'M·II // STRUCTURA',
  title: 'NCB Mobile App Improvement',
  subtitle:
  'Helping transition a large-scale banking product to a stronger, more consistent design system.',
  meta: [
  { label: 'Client', value: 'NCB Financial Group' },
  { label: 'Type', value: 'Mobile UX' },
  { label: 'Year', value: '2023' },
  { label: 'Downloads', value: '1M+' },
  { label: 'Rating', value: '4.6★' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'I supported the ongoing improvement of the NCB mobile app by helping the product design team transition key experiences into the new design system, creating missing components, and contributing to testing and design quality across the rollout.'
  },
  {
    type: 'list',
    heading: 'The Challenge',
    items: [
    'Legacy patterns and newer patterns were coexisting',
    'Not every required mobile use case was fully covered by the new design system yet',
    'Designers needed support translating existing work into the new system without slowing delivery',
    'Feature teams needed reusable components and clearer guidance to avoid one-off solutions',
    'Testing and quality checks were important because banking flows have little room for confusion or error']

  },
  {
    type: 'grid',
    heading: 'Outcome Snapshot',
    gridItems: [
    { label: 'Downloads', value: '1M+' },
    { label: 'Google Play Rating', value: '4.6★' },
    { label: 'NPS', value: '75+' }]

  },
  {
    type: 'text',
    heading: 'Outcome',
    body: 'My work helped strengthen the app in a few key ways. First, it made it easier for designers to work within a more unified system. Second, it expanded the design system through real product needs. Third, it supported a more consistent and polished customer experience across the app.'
  }],

  navLinks: [
  { label: 'NCB Design System', href: '/case-studies/ncb-design-system', direction: 'prev' },
  { label: 'Type Design', href: '/case-studies/type-design', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_MOBILE'
},

// ── NCB Design System ───────────────────────────────────────────────────────
{
  slug: 'ncb-design-system',
  realm: 'product',
  client: 'NCB Financial Group',
  type: 'Design Systems',
  year: '2022–2023',
  summary:
  'Building Oasis — a comprehensive design system for one of the Caribbean\'s largest financial institutions.',
  coverImg: '/assets/images/Personal-1775589530525.png',
  coverAlt: 'Desktop screen designed using the Oasis NCB design system',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'NCB Design System', href: '/case-studies/ncb-design-system' }],

  arcaneIndex: 'M·II // SYSTEMA',
  title: 'NCB Design System — Oasis',
  subtitle:
  'Building a comprehensive design system for one of the Caribbean\'s largest financial institutions.',
  meta: [
  { label: 'Client', value: 'NCB Financial Group' },
  { label: 'Type', value: 'Design Systems' },
  { label: 'Year', value: '2022–2023' },
  { label: 'Components', value: '200+' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'Oasis is the design system built for NCB Financial Group — a token-based, component-driven system covering web and mobile surfaces across the enterprise. The system was built to support multiple product teams working simultaneously on a large, complex financial platform.'
  },
  {
    type: 'list',
    heading: 'Scope',
    items: [
    'Design token architecture — colour, typography, spacing, elevation',
    '200+ Figma components with documented variants and states',
    'Mobile component library for iOS and Android',
    'Contribution guidelines and governance model',
    'Adoption support across product teams']

  },
  {
    type: 'grid',
    heading: 'Scale',
    gridItems: [
    { label: 'Components', value: '200+' },
    { label: 'Token Sets', value: '12' },
    { label: 'Teams', value: '6+' },
    { label: 'Platforms', value: '3' }]

  }],

  navLinks: [
  { label: 'Banking Loans', href: '/case-studies/banking-loans', direction: 'prev' },
  { label: 'Mobile Banking', href: '/case-studies/mobile-banking', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_OASIS',
  hasPrototype: true
},

// ── Banking Loans ───────────────────────────────────────────────────────────
{
  slug: 'banking-loans',
  realm: 'product',
  client: 'NCB Financial Group',
  type: 'Product Design',
  year: '2022',
  summary:
  'Redesigning the personal loans journey for a major Caribbean bank — from discovery to disbursement.',
  coverImg: '/assets/images/Credit_cards-1775590834479.png',
  coverAlt: 'Desktop screen showing the Credit Cards page designed using the Oasis NCB design system',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'Banking Loans', href: '/case-studies/banking-loans' }],

  arcaneIndex: 'M·II // PECUNIA',
  title: 'NCB Personal Loans Redesign',
  subtitle:
  'Redesigning the personal loans journey for a major Caribbean bank — from discovery to disbursement.',
  meta: [
  { label: 'Client', value: 'NCB Financial Group' },
  { label: 'Type', value: 'Product Design' },
  { label: 'Year', value: '2022' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'The personal loans journey was one of the highest-traffic flows in the NCB digital product. The redesign focused on reducing friction, improving clarity around loan products, and creating a more guided application experience.'
  },
  {
    type: 'list',
    heading: 'Key Focus Areas',
    items: [
    'Simplifying product discovery and comparison',
    'Reducing form complexity in the application journey',
    'Improving feedback and status communication',
    'Aligning the experience with the new Oasis design system']

  }],

  navLinks: [
  { label: 'WeLink', href: '/case-studies/welink', direction: 'prev' },
  { label: 'NCB Design System', href: '/case-studies/ncb-design-system', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_LOANS',
  hasPrototype: true
},

// ── Auto Loans ──────────────────────────────────────────────────────────────
{
  slug: 'auto',
  realm: 'product',
  client: 'NCB Financial Group',
  type: 'Product Design',
  year: '2023',
  summary:
  'Redesigning the auto loan application journey to reduce drop-off and improve completion rates.',
  coverImg: '/assets/images/image-1775328065254.png',
  coverAlt: 'Auto Loan Journey Redesign — Product Design screens',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'Auto Loans', href: '/case-studies/auto' }],

  arcaneIndex: 'M·II // VEHICULUM',
  title: 'Auto Loan Journey Redesign',
  subtitle:
  'Redesigning the auto loan application journey to reduce drop-off and improve completion rates.',
  meta: [
  { label: 'Client', value: 'NCB Financial Group' },
  { label: 'Type', value: 'Product Design' },
  { label: 'Year', value: '2023' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'The auto loans journey had high drop-off at key stages of the application. The redesign focused on restructuring the information architecture, simplifying the form experience, and providing clearer guidance at decision points.'
  },
  {
    type: 'list',
    heading: 'Design Decisions',
    items: [
    'Restructured the journey into clearer, shorter stages',
    'Added contextual guidance at high-abandonment points',
    'Simplified document upload and verification flows',
    'Improved status and progress communication throughout']

  }],

  navLinks: [
  { label: 'Mortgage', href: '/case-studies/mortgage', direction: 'prev' },
  { label: 'WeLink', href: '/case-studies/welink', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_AUTO',
  hasPrototype: true
},

// ── Mortgage ────────────────────────────────────────────────────────────────
{
  slug: 'mortgage',
  realm: 'product',
  client: 'NCB Financial Group',
  type: 'Product Design',
  year: '2023',
  summary:
  'End-to-end redesign of the mortgage product experience — from product discovery to application.',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'Mortgage', href: '/case-studies/mortgage' }],

  arcaneIndex: 'M·II // DOMUS',
  title: 'NCB Mortgage Experience',
  subtitle:
  'End-to-end redesign of the mortgage product experience — from product discovery to application.',
  meta: [
  { label: 'Client', value: 'NCB Financial Group' },
  { label: 'Type', value: 'Product Design' },
  { label: 'Year', value: '2023' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'The mortgage redesign covered the full customer journey — from initial product discovery and comparison through to the application process. The work included a new mortgage calculator, a restructured product overview, and a simplified application journey.'
  },
  {
    type: 'list',
    heading: 'Scope',
    items: [
    'Product overview and comparison pages',
    'Interactive mortgage calculator',
    'Application journey — restructured and simplified',
    'FAQ and support content architecture',
    'Alignment with Oasis design system']

  }],

  navLinks: [
  { label: 'Gleaner', href: '/case-studies/gleaner', direction: 'prev' },
  { label: 'Auto Loans', href: '/case-studies/auto', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_MORTGAGE',
  hasPrototype: true
},

// ── WeLink ──────────────────────────────────────────────────────────────────
{
  slug: 'welink',
  realm: 'product',
  client: 'WeLink Caribbean',
  type: 'Product Design',
  year: '2022',
  summary:
  'Designing a Caribbean gig-economy platform connecting skilled workers with clients across the region.',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'WeLink', href: '/case-studies/welink' }],

  arcaneIndex: 'M·II // NEXUS',
  title: 'WeLink Caribbean Platform',
  subtitle:
  'Designing a Caribbean gig-economy platform connecting skilled workers with clients across the region.',
  meta: [
  { label: 'Client', value: 'WeLink Caribbean' },
  { label: 'Type', value: 'Product Design' },
  { label: 'Year', value: '2022' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'WeLink is a concept platform designed to connect skilled workers with clients across the Caribbean. The design work covered the full platform — homepage, service discovery, worker profiles, and the booking flow.'
  },
  {
    type: 'list',
    heading: 'Design Scope',
    items: [
    'Platform homepage and value proposition',
    'Service category discovery and search',
    'Worker listing and profile pages',
    'Booking and enquiry flow',
    'App download and onboarding']

  }],

  navLinks: [
  { label: 'Auto Loans', href: '/case-studies/auto', direction: 'prev' },
  { label: 'Banking Loans', href: '/case-studies/banking-loans', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_WELINK',
  hasPrototype: true
},

// ── Gleaner ─────────────────────────────────────────────────────────────────
{
  slug: 'gleaner',
  realm: 'product',
  client: 'The Gleaner Company',
  type: 'Editorial Design',
  year: '2021',
  summary:
  'Redesigning the digital presence of Jamaica\'s oldest and most widely read newspaper.',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'Gleaner', href: '/case-studies/gleaner' }],

  arcaneIndex: 'M·II // SCRIPTURA',
  title: 'Jamaica Gleaner Redesign',
  subtitle:
  'Redesigning the digital presence of Jamaica\'s oldest and most widely read newspaper.',
  meta: [
  { label: 'Client', value: 'The Gleaner Company' },
  { label: 'Type', value: 'Editorial Design' },
  { label: 'Year', value: '2021' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'The Gleaner redesign focused on modernising the digital editorial experience while preserving the authority and trust of a 180-year-old institution. The work covered information architecture, visual design, and the reading experience across devices.'
  },
  {
    type: 'list',
    heading: 'Key Areas',
    items: [
    'Homepage hierarchy and editorial curation',
    'Article reading experience — typography, layout, and pacing',
    'Navigation and section architecture',
    'Mobile-first responsive design',
    'Advertising integration without compromising editorial integrity']

  }],

  navLinks: [
  { label: 'Type Design', href: '/case-studies/type-design', direction: 'prev' },
  { label: 'Mortgage', href: '/case-studies/mortgage', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_GLEANER',
  hasPrototype: true
},

// ── Type Design ─────────────────────────────────────────────────────────────
{
  slug: 'type-design',
  realm: 'product',
  client: 'NCB Financial Group',
  type: 'Type Design',
  year: '2022',
  summary:
  'Designing Oasis Geometric — a custom geometric sans-serif typeface for the NCB design system.',
  breadcrumbs: [
  { label: 'Product Design', href: '/product-design' },
  { label: 'Case Studies', href: '/product-design/case-studies' },
  { label: 'Type Design', href: '/case-studies/type-design' }],

  arcaneIndex: 'M·II // LITERA',
  title: 'Oasis Geometric Typeface',
  subtitle:
  'Designing a custom geometric sans-serif typeface for the NCB Oasis design system.',
  meta: [
  { label: 'Client', value: 'NCB Financial Group' },
  { label: 'Type', value: 'Type Design' },
  { label: 'Year', value: '2022' },
  { label: 'Weights', value: '4' }],

  content: [
  {
    type: 'text',
    heading: 'Overview',
    body: 'Oasis Geometric is a custom typeface designed specifically for the NCB Oasis design system. The typeface was designed to balance geometric precision with warmth and legibility at small sizes — requirements driven by the financial product context.'
  },
  {
    type: 'list',
    heading: 'Design Criteria',
    items: [
    'Geometric construction with humanist corrections for legibility',
    'Optimised for screen rendering at small sizes',
    'Four weights — Regular, Medium, SemiBold, Bold',
    'Full Latin character set with financial symbols',
    'Consistent with the Oasis system\'s visual language']

  },
  {
    type: 'grid',
    heading: 'Typeface Specs',
    gridItems: [
    { label: 'Weights', value: '4' },
    { label: 'Glyphs', value: '300+' },
    { label: 'Format', value: 'WOFF2' },
    { label: 'Style', value: 'Geometric' }]

  }],

  navLinks: [
  { label: 'Mobile Banking', href: '/case-studies/mobile-banking', direction: 'prev' },
  { label: 'Gleaner', href: '/case-studies/gleaner', direction: 'next' }],

  sysLabel: 'SYS_LOC: CASE_TYPE',
  hasPrototype: true
}];


// ─── Convenience lookup helpers ───────────────────────────────────────────────

/** Find a case study by slug */
export function getCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

/** Find an art project by id */
export function getArtProject(id: string): ArtProject | undefined {
  return artProjects.find((p) => p.id === id);
}

/** Find a literature volume by id */
export function getLiteratureVolume(id: string): LiteratureVolume | undefined {
  return literatureVolumes.find((v) => v.id === id);
}

/** All page data records keyed by realm for CMS-style enumeration */
export const allRealmPages = {
  art: [galleryPageData, artProjectsPageData, commissionsPageData],
  literature: [excerptsPageData, thePaleIntervalPageData, worldbuildingPageData, authorPageData],
  product: caseStudies
} as const;