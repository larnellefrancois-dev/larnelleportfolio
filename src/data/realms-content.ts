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
  title: 'The Drone Returns',
  source: 'The Pale Interval',
  chapter: 'Opening',
  text: `They told her the drone came home at night, the way bad news always seems to. Sela was awake for it anyway. She had been awake for most of the things that mattered.

On the recovery feed, NAIAD looked smaller than it did in the ICSE briefings — scorched along one flank, antenna folded like a broken wing. It had been gone eleven years. It had come back carrying her mother's voice.`
},
{
  id: 'interval-02',
  title: 'Twin Moons Over Calyx',
  source: 'The Pale Interval',
  chapter: 'Chapter IV',
  text: `Calyx came up red-brown in the old survey plates, two moons hung above it like a held breath, and between them a pale seam in the sky that the cartographers had labelled and then, very deliberately, never measured again.

Her mother had measured it. That was the part the ICSE kept sealed. That was the part Sela had come for.`
},
{
  id: 'interval-03',
  title: 'Transmission Fragment — A. Mares',
  source: 'The Pale Interval',
  chapter: 'Recovered Recording',
  text: `[SIGNAL RECOVERED — PARTIAL — CONFIDENCE: 0.34]

...the haze isn't weather. We had that wrong from the start...
...NAIAD is intact. Telemetry is — telemetry is good. Mostly good...
...Sela, if they let you hear this — don't trust the clean version...
...it's been listening longer than we have. Be careful what you—

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
  '"If you\'re hearing this, then the interval held. NAIAD is intact. Sela — if they let you hear this — don\'t trust the clean version."',
  coverImg:
  "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
  coverAlt: 'Twin moons above a fractured mineral landscape under a pale red-brown haze',
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
  subtitle: 'A YA literary sci-fi horror novel. A daughter, a dead world, and the last transmission no one was meant to recover.',
  meta: [
  { label: 'Author', value: 'L.F. Chambers' },
  { label: 'Genre', value: 'YA Literary Sci-Fi Horror' },
  { label: 'Status', value: 'In Progress' }],

  content: [
  {
    type: 'text',
    heading: 'Logline',
    body: 'When a survey-corps daughter recovers her dead mother\'s final transmission, she has to decide how much of the truth a buried world — and a buried institution — can survive.'
  },
  {
    type: 'text',
    heading: 'Synopsis',
    body: 'Sela Mares has spent her life inside the long shadow of the Intercolonial Survey and Cartography Executive, the agency that lost her mother. When a NAIAD drone returns from the Calyx system carrying Adra Mares\'s corrupted last recording, Sela is pulled into a recovery effort the ICSE would rather keep sealed. The deeper she listens, the less the static behaves like static — and the more it sounds like an answer to a question no one was supposed to ask.'
  },
  {
    type: 'text',
    body: 'Reconstruction is its own kind of haunting. As Sela stabilises fragment after fragment, she runs up against Protocol 7 — the sealed institutional response that governs what the ICSE does when a survey finds something surveys are not supposed to find. The Pale Interval is a story about grief and inheritance, about institutions that mistake concealment for safety, and about a girl learning that listening, truly listening, changes the listener.'
  },
  {
    type: 'list',
    heading: 'Themes',
    items: [
    'Grief, inheritance, and the voice of a lost parent',
    'Signal and silence — meaning carried in what is not transmitted',
    'Institutional concealment and the ethics of the sealed record',
    'Identity, memory, and survival under a pale rupture',
    'First contact as something closer to being heard than to speaking']

  },
  {
    type: 'grid',
    heading: 'At a Glance',
    gridItems: [
    { label: 'Genre', value: 'YA Sci-Fi Horror' },
    { label: 'Protagonist', value: 'Sela Mares' },
    { label: 'Setting', value: 'Calyx' },
    { label: 'Status', value: 'In Progress' }]

  }],

  navLinks: [
  { label: 'Literature', href: '/literature', direction: 'prev' },
  { label: 'The Archive', href: '/literature/archive', direction: 'next' }],

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
  subtitle: 'Glossary, locations, and lore from the Calyx survey records of The Pale Interval.',
  meta: [
  { label: 'System', value: 'Calyx' },
  { label: 'Authority', value: 'ICSE' }],

  content: [
  {
    type: 'text',
    heading: 'The Calyx System',
    body: 'Calyx is a catalogued, classified, and quietly abandoned world at the heart of the novel. Its surface is a fractured mineral landscape under a persistent red-brown haze; twin moons hang above it, and between them runs a pale rupture in the sky that the ICSE measured exactly once and then sealed. The survey called it a navigational loss. Adra Mares called it something else.'
  },
  {
    type: 'text',
    heading: 'The Institution',
    body: 'The Intercolonial Survey and Cartography Executive (ICSE) maps, classifies, and decides what is recorded and what is sealed. When a survey finds something it was not supposed to find, Protocol 7 governs the silence that follows. NAIAD — the Navigational Assessment and Integrated Approach Drone tied to Adra\'s final mission — is the thread that brings the sealed record home.'
  },
  {
    type: 'list',
    heading: 'Glossary',
    items: [
    'ICSE — Intercolonial Survey and Cartography Executive: the surveying, mapping, and classifying authority',
    'NAIAD — Navigational Assessment and Integrated Approach Drone: tied to Adra Mares\'s last transmission and Calyx telemetry',
    'Calyx — the abandoned world: red-brown haze, twin moons, a pale rupture',
    'kaen — a term recovered from the Calyx survey records (meaning withheld, spoiler-safe)',
    'nara — a term recovered from the Calyx survey records (meaning withheld, spoiler-safe)',
    'the Knot — a named feature the ICSE measured once and never again',
    'Soth — a name surfacing in the deeper, sealed fragments',
    'Protocol 7 — the sealed institutional response to a survey finding something it should not']

  },
  {
    type: 'list',
    heading: 'Key Locations',
    items: [
    'Calyx (CLX-0) — fractured mineral plain beneath twin moons and the pale rupture',
    'The Approach Corridor (CLX-A1) — the descent path NAIAD followed inward',
    'The Knot — origin point of the strongest recovered fragments',
    'The Relay Margin — outer boundary where the recovery effort listens from']

  }],

  navLinks: [
  { label: 'Author', href: '/literature/author', direction: 'prev' },
  { label: 'Characters', href: '/literature/characters', direction: 'next' }],

  sysLabel: 'SYS_LOC: MUNDUS_CALYX'
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
  subtitle: 'Author of The Pale Interval. Multidisciplinary creative working across image, interface, and story.',
  meta: [
  { label: 'Current Work', value: 'The Pale Interval' },
  { label: 'Genre', value: 'YA Literary Sci-Fi Horror' },
  { label: 'Status', value: 'In Progress' }],

  content: [
  {
    type: 'text',
    body: 'L.F. Chambers writes literary science fiction with the lights low. The current project, The Pale Interval, is a YA literary sci-fi horror novel about grief, signal, and a daughter recovering her mother\'s final transmission from a sealed world.'
  },
  {
    type: 'text',
    body: 'The work sits where atmospheric horror meets hard-edged institutional science fiction: recovered recordings, classified archives, redacted protocols, and the slow, careful act of listening to something that may be listening back.'
  },
  {
    type: 'text',
    body: 'The literary work is informed by a background in visual design and systems thinking — an attention to structure, negative space, and the architecture of meaning. L.F. Chambers also works as the product designer Larnelle Chambers and as a visual artist.'
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

// ─────────────────────────────────────────────────────────────────────────────
// THE PALE INTERVAL — CONTENT BIBLE (new canon)
// ─────────────────────────────────────────────────────────────────────────────
//
// Single source of truth for the novel's marketing copy + archive content.
// Spoiler-safe by default; `spoilerLocked` fields hold deeper reveals that
// stay behind an explicit opt-in. Replace placeholder prose with final,
// manuscript-approved copy as it is ready.

export interface BuyLink {
  label: string;
  href: string;
  available: boolean;
}

export const paleIntervalBook = {
  title: 'The Pale Interval',
  author: 'L.F. Chambers',
  genre: 'YA literary sci-fi horror',
  // Cover art pending. Drop a file at /public/assets/images and set coverImg.
  coverImg: undefined as string | undefined,
  coverAlt:
    'The Pale Interval — twin moons above a fractured mineral landscape under a red-brown haze.',
  logline:
    'When a survey-corps daughter recovers her dead mother’s final transmission, she has to decide how much of the truth a buried world — and a buried institution — can survive.',
  shortSynopsis:
    'Sela Mares has spent her life inside the long shadow of the Intercolonial Survey and Cartography Executive, the agency that lost her mother. When a NAIAD drone returns from the Calyx system carrying Adra Mares’s corrupted last recording, Sela is pulled into a recovery effort the ICSE would rather keep sealed. The deeper she listens, the less the static behaves like static.',
  longSynopsis: [
    'The Pale Interval follows Sela Mares, seventeen, raised among the cartographers and signal analysts of the ICSE. Her mother Adra disappeared on a long survey of Calyx — a world the agency catalogued, classified, and quietly stopped discussing. The official record calls it a navigational loss.',
    'When NAIAD, the Navigational Assessment and Integrated Approach Drone tied to Adra’s last mission, finally limps home, it brings telemetry no one can fully explain and a recording that should not have survived. Granted limited access to the recovery archive, Sela begins to reconstruct her mother’s voice out of damage and silence.',
    'But reconstruction is its own kind of haunting. As Sela stabilises fragment after fragment, she runs up against Protocol 7 — the sealed institutional response that governs what the ICSE does when a survey finds something surveys are not supposed to find. The Pale Interval is a story about grief and inheritance, about institutions that mistake concealment for safety, and about a girl learning that listening, truly listening, changes the listener.'
  ],
  motifs: [
    'Twin moons',
    'A pale rupture in the sky',
    'Animated signal / waveform',
    'Fractured mineral landscape',
    'Red-brown haze',
    'Negative space',
    'Recovered transmission artifacts',
    'Redacted institutional documents'
  ],
  buyLinks: [
    // TODO: replace with real retailer / pre-order links when available.
    { label: 'Pre-order (coming soon)', href: '#', available: false }
  ] as BuyLink[],
  mailingListNote:
    'Get a note when The Pale Interval is available to pre-order. No spam, ever.'
} as const;

export const paleIntervalSeoDescription =
  'The Pale Interval by L.F. Chambers — a YA literary sci-fi horror novel about grief, signal, and a daughter recovering her mother’s final transmission from the Calyx system.';

// ── Character dossiers ────────────────────────────────────────────────────────

export interface CharacterDossier {
  name: string;
  slug: string;
  role: string;
  classification: string;
  /** Spoiler-safe summary. */
  description: string;
  quote?: string;
  /** Relationship to Sela / Calyx / ICSE, spoiler-safe. */
  relationship?: string;
  /** Optional spoiler-locked expanded content. */
  spoilerLocked?: string[];
}

export const paleIntervalCharacters: CharacterDossier[] = [
{
  name: 'Sela Mares',
  slug: 'sela-mares',
  role: 'Protagonist',
  classification: 'ICSE — Dependent, Recovery Access (provisional)',
  description:
    'Seventeen, precise, and raised inside the agency that lost her mother. A natural signal-reader who would rather rebuild a damaged recording than talk about why.',
  quote: '“Static is just an answer I haven’t finished listening to.”',
  relationship: 'Daughter of Adra Mares. Granted limited access to the Calyx recovery archive.',
  spoilerLocked: ['Placeholder for spoiler-locked character development. Replace with approved content.']
},
{
  name: 'Adra Mares',
  slug: 'adra-mares',
  role: 'The Recovered Voice',
  classification: 'ICSE — Survey Lead, Calyx (status: lost)',
  description:
    'Sela’s mother and lead of the final Calyx survey. Present in the story only through the recovered transmission — a voice reconstructed from damage.',
  quote: '“If you’re hearing this, then the interval held. Listen carefully.”',
  relationship: 'Tied to NAIAD and the Calyx telemetry. The centre of Sela’s search.',
  spoilerLocked: ['Placeholder for spoiler-locked content about Adra.']
},
{
  name: 'NAIAD',
  slug: 'naiad',
  role: 'Returned Drone',
  classification: 'ICSE — Navigational Assessment and Integrated Approach Drone',
  description:
    'The drone that carried Adra’s last transmission home. Damaged, partial, and not behaving entirely like a machine should.',
  quote: '“…re-establishing approach. Re-establishing. Re—”',
  relationship: 'Bonded to the Calyx survey telemetry and Adra’s recording.',
  spoilerLocked: ['Placeholder for spoiler-locked content about NAIAD.']
},
{
  name: 'The Archivist',
  slug: 'the-archivist',
  role: 'ICSE Gatekeeper',
  classification: 'ICSE — Recovery & Records (Protocol 7 cleared)',
  description:
    'The institution’s human face: the person deciding which fragments Sela is allowed to hear, and which stay sealed.',
  quote: '“Some recordings are evidence. Some are warnings. This one is both.”',
  relationship: 'Controls Sela’s access to the archive and to Protocol 7 material.',
  spoilerLocked: ['Placeholder for spoiler-locked content about the Archivist.']
}];

export function getCharacter(slug: string): CharacterDossier | undefined {
  return paleIntervalCharacters.find((c) => c.slug === slug);
}

// ── Glossary terms ──────────────────────────────────────────────────────────

export interface GlossaryTerm {
  term: string;
  expansion?: string;
  definition: string;
  category: 'institution' | 'technology' | 'place' | 'language' | 'concept';
}

export const paleIntervalGlossary: GlossaryTerm[] = [
{ term: 'ICSE', expansion: 'Intercolonial Survey and Cartography Executive', definition: 'The institution responsible for surveying, mapping, and classifying systems across the colonies — and for deciding what is recorded and what is sealed.', category: 'institution' },
{ term: 'NAIAD', expansion: 'Navigational Assessment and Integrated Approach Drone', definition: 'A long-range survey drone class tied to the Calyx telemetry and to Adra Mares’s final transmission.', category: 'technology' },
{ term: 'Calyx', definition: 'A catalogued, classified, and quietly abandoned world. Red-brown haze, twin moons, a pale rupture overhead.', category: 'place' },
{ term: 'kaen', definition: 'A term recovered from the Calyx survey records. Meaning withheld — spoiler-safe placeholder.', category: 'language' },
{ term: 'nara', definition: 'A term recovered from the Calyx survey records. Meaning withheld — spoiler-safe placeholder.', category: 'language' },
{ term: 'the Knot', definition: 'A named feature in the survey records the ICSE measured once and never again.', category: 'concept' },
{ term: 'Soth', definition: 'A name surfacing in the deeper, sealed fragments. Spoiler-safe placeholder.', category: 'concept' },
{ term: 'Protocol 7', definition: 'The sealed institutional response governing what the ICSE does when a survey finds something it was not supposed to find. Most of its documents are redacted.', category: 'institution' }];

// ── Survey locations ────────────────────────────────────────────────────────

export type RiskClass = 'nominal' | 'caution' | 'restricted' | 'sealed';

export interface SurveyLocation {
  name: string;
  designation: string;
  environment: string;
  signalNotes: string;
  risk: RiskClass;
  related?: string[];
}

export const paleIntervalLocations: SurveyLocation[] = [
{ name: 'Calyx', designation: 'CLX-0', environment: 'Fractured mineral landscape under a persistent red-brown haze. Twin moons; a pale rupture along the upper sky.', signalNotes: 'Background telemetry never fully settles. Survey instruments logged a low, periodic return the agency declined to classify.', risk: 'sealed', related: ['adra-mares'] },
{ name: 'Approach Corridor', designation: 'CLX-A1', environment: 'The mapped descent path NAIAD followed inward.', signalNotes: 'Telemetry degrades sharply past the corridor midpoint.', risk: 'restricted', related: ['naiad'] },
{ name: 'The Knot', designation: 'CLX-?', environment: 'A named feature in the survey records the ICSE measured once and never again.', signalNotes: 'Origin point of the strongest recovered fragments.', risk: 'sealed' },
{ name: 'Relay Margin', designation: 'CLX-R', environment: 'The outer relay boundary where the recovery effort listens from.', signalNotes: 'Where Adra’s transmission was finally re-acquired by NAIAD.', risk: 'caution' }];

// ── Transmission fragments (Signal Console) ─────────────────────────────────

export interface TransmissionFragment {
  id: string;
  /** Position along the timeline, 0–100. */
  position: number;
  timestamp: string;
  /** Stabilised text, or null if irrecoverable. */
  text: string | null;
  corrupted: boolean;
}

export const transmissionTitle = 'Recovered Recording — A. Mares, Calyx Survey';

export const paleIntervalTransmissions: TransmissionFragment[] = [
{ id: 'frag-01', position: 4, timestamp: '00:03', text: 'If you’re hearing this, then the interval held.', corrupted: false },
{ id: 'frag-02', position: 16, timestamp: '00:11', text: 'NAIAD is intact. Telemetry is— telemetry is good. Mostly good.', corrupted: false },
{ id: 'frag-03', position: 28, timestamp: '00:24', text: null, corrupted: true },
{ id: 'frag-04', position: 40, timestamp: '00:37', text: 'The haze isn’t weather. We had that wrong from the start.', corrupted: false },
{ id: 'frag-05', position: 54, timestamp: '00:49', text: 'Sela — if they let you hear this — don’t trust the clean version.', corrupted: false },
{ id: 'frag-06', position: 66, timestamp: '01:02', text: null, corrupted: true },
{ id: 'frag-07', position: 80, timestamp: '01:18', text: 'It’s been listening longer than we have. Be careful what you—', corrupted: false },
{ id: 'frag-08', position: 93, timestamp: '01:31', text: null, corrupted: true }];

// ── Protocol 7 documents ────────────────────────────────────────────────────

export type Classification = 'restricted' | 'confidential' | 'sealed';

export interface ProtocolDocument {
  id: string;
  code: string;
  title: string;
  classification: Classification;
  /** Spoiler-safe lines; use [REDACTED] for redaction bars. */
  body: string[];
  spoilerLocked?: string[];
}

export const paleIntervalProtocols: ProtocolDocument[] = [
{
  id: 'p7-001',
  code: 'P7 / DIR-001',
  title: 'Directive — Conditions for Survey Seal',
  classification: 'restricted',
  body: [
    'Upon detection of a return signal meeting the criteria in [REDACTED], the survey lead shall cease active measurement and initiate seal procedures.',
    'No further [REDACTED] of the affected catalogue entry is authorised without Executive sign-off.',
    'Dependents and non-cleared personnel are to be informed only that a navigational loss has occurred.'
  ],
  spoilerLocked: ['Placeholder spoiler-locked annex. Replace with approved content.']
},
{
  id: 'p7-002',
  code: 'P7 / MEMO-014',
  title: 'Internal Memo — Recovery of NAIAD Asset',
  classification: 'confidential',
  body: [
    'NAIAD has re-acquired the relay margin after [REDACTED] years.',
    'Onboard recording is degraded but [REDACTED]. Recommend restricted reconstruction only.',
    'Note: requests for access from [REDACTED] should be routed to the Archivist.'
  ],
  spoilerLocked: ['Placeholder spoiler-locked annex.']
},
{
  id: 'p7-003',
  code: 'P7 / FILE-███',
  title: 'Incident File — Calyx',
  classification: 'sealed',
  body: ['Contents sealed under Protocol 7.', '[REDACTED]', '[REDACTED]', 'Authorisation required.'],
  spoilerLocked: ['Placeholder spoiler-locked file. Replace with approved content.']
}];

// ── New literature page data: Archive + Characters ──────────────────────────

export const archivePageData: RealmPageData = {
  slug: 'archive',
  realm: 'literature',
  breadcrumbs: [
  { label: 'Literature', href: '/literature' },
  { label: 'The Archive', href: '/literature/archive' }],
  arcaneIndex: 'M·III // ICSE ARCHIVE',
  title: 'The Archive',
  subtitle: 'A recovered ICSE / NAIAD archive: corrupted transmissions, classified files, Calyx survey data, and fragments from Adra’s recording.',
  meta: [
  { label: 'Authority', value: 'ICSE' },
  { label: 'Status', value: 'Recovered — Partial' },
  { label: 'Clearance', value: 'Provisional' }],
  navLinks: [
  { label: 'The Pale Interval', href: '/literature/the-pale-interval', direction: 'prev' },
  { label: 'Characters', href: '/literature/characters', direction: 'next' }],
  sysLabel: 'SYS_LOC: ICSE_ARCHIVE'
};

export const charactersPageData: RealmPageData = {
  slug: 'characters',
  realm: 'literature',
  breadcrumbs: [
  { label: 'Literature', href: '/literature' },
  { label: 'Characters', href: '/literature/characters' }],
  arcaneIndex: 'M·III // DRAMATIS',
  title: 'Characters',
  subtitle: 'Dossiers from the Calyx recovery. Spoiler-safe by default.',
  meta: [
  { label: 'Records', value: `${paleIntervalCharacters.length}` },
  { label: 'Authority', value: 'ICSE' }],
  navLinks: [
  { label: 'Worldbuilding', href: '/literature/worldbuilding', direction: 'prev' },
  { label: 'The Archive', href: '/literature/archive', direction: 'next' }],
  sysLabel: 'SYS_LOC: DRAMATIS_PERSONAE'
};

/** All page data records keyed by realm for CMS-style enumeration */
export const allRealmPages = {
  art: [galleryPageData, artProjectsPageData, commissionsPageData],
  literature: [excerptsPageData, thePaleIntervalPageData, worldbuildingPageData, authorPageData, archivePageData, charactersPageData],
  product: caseStudies
} as const;