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
  DetailNavLink,
} from '@/components/DetailPageTemplate';

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
  description?: string;
}

export const galleryArtworks: ArtworkItem[] = [
  {
    id: 17,
    title: 'Green Oracle',
    medium: 'Acrylic, graphite, ink, and metallic paint',
    year: '2023',
    img: '/assets/images/art/green-butterfly-collar.jpg',
    alt: 'Mixed-media portrait on a green ground with white butterflies, gold leaf shapes, dotted collar marks, and expressive white linework.',
    description:
      'A frontal figure set against green, where butterflies, gold accents, and white gestural markings turn ornament into a living field.',
  },
  {
    id: 18,
    title: 'Red Moon Profile',
    medium: 'Acrylic, graphite, and metallic paint',
    year: '2023',
    img: '/assets/images/art/red-moon-profile.jpg',
    alt: 'Profile portrait on a vivid red ground with a silver moon circle behind the head and white body markings.',
    description:
      'A red-field profile built around a silver moon form, reflective facial modelling, and white patterning across the neck and shoulder.',
  },
  {
    id: 21,
    title: 'Lime Veil Study',
    medium: 'Graphite, acrylic, and wash',
    year: '2023',
    img: '/assets/images/art/lime-veil-study.jpg',
    alt: 'Soft portrait partly obscured by translucent lime green paint and pale brushwork.',
    description:
      'A dissolving portrait where lime wash and smudged graphite blur the figure into memory, surface, and atmosphere.',
  },
  {
    id: 22,
    title: 'Shine Archive',
    medium: 'Acrylic, ink, collage, and graphite',
    year: '2023',
    img: '/assets/images/art/shine-archive.jpg',
    alt: 'Dense mixed-media collage with a small portrait figure, handwritten text, eyes, waves, grids, and the word Shine.',
    description:
      'A layered archive piece built from handwritten fragments, graphic symbols, grids, eyes, and a figure carrying text across the body.',
  },
  {
    id: 23,
    title: 'Sunflower Witness',
    medium: 'Acrylic, graphite, ink, and metallic paint',
    year: '2023',
    img: '/assets/images/art/sunflower-witness.jpg',
    alt: 'Portrait of a Black figure against a deep green field with yellow flowers and white ornamental linework.',
    description:
      'A green and gold portrait where sunflowers, white linework, and a centered gaze create a bright, ceremonial stillness.',
  },
  {
    id: 24,
    title: 'Shelter Study',
    medium: 'Charcoal, graphite, and white paint',
    year: '2023',
    img: '/assets/images/art/shelter-study.jpg',
    alt: 'Dark grayscale mixed-media study of a seated figure leaning into folded arms with white gestural markings.',
    description:
      'A close, compressed figure study using darkness, stripes, and white scrawl to hold a private moment of tension.',
  },
  {
    id: 25,
    title: 'Red Earring Study',
    medium: 'Acrylic, graphite, ink, and metallic paint',
    year: '2023',
    img: '/assets/images/art/red-earring-study.jpg',
    alt: 'Portrait with short dark hair, red background, gold earrings, and white painted marks on the neck and clothing.',
    description:
      'A red-ground portrait balancing cool facial tones, gold earrings, and calligraphic white marks across the body.',
  },
  {
    id: 7,
    title: 'Sideward Study',
    medium: 'Graphite and mixed media on paper',
    year: '2023',
    img: '/assets/images/art/sideward-study.jpg',
    alt: 'Graphite profile portrait of a young Black man with small color swatches on the paper margin.',
    description:
      'A profile portrait study built around lifted gaze, dense graphite modelling, and small residual color tests left in the margin.',
  },
  {
    id: 8,
    title: 'Nocturne Bloom',
    medium: 'Acrylic, ink, and metallic paint',
    year: '2023',
    img: '/assets/images/art/nocturne-bloom.jpg',
    alt: 'Black, white, and gold mixed-media portrait surrounded by flowers, wings, and ornamental linework.',
    description:
      'A black, white, and gold figure composition where flowers, wings, and ornamental marks push portraiture toward myth.',
  },
  {
    id: 9,
    title: 'Quiet Weather',
    medium: 'Charcoal on paper',
    year: '2023',
    img: '/assets/images/art/quiet-weather.jpg',
    alt: 'Charcoal portrait of a young girl looking forward from a softly shaded background.',
    description:
      'A charcoal study using soft smudged value and unfinished negative space to hold a guarded, direct gaze.',
  },
  {
    id: 10,
    title: 'Crown in Coral',
    medium: 'Acrylic, ink, and mixed media',
    year: '2023',
    img: '/assets/images/art/crown-in-coral.jpg',
    alt: 'Mixed-media portrait of a Black man against a coral ground with white ornamental marks across the figure.',
    description:
      'A portrait against a coral ground, with white ornamental linework and muted botanical marks moving through the figure.',
  },
  {
    id: 11,
    title: 'Sunflower Apparition',
    medium: 'Graphite, acrylic, and metallic paint',
    year: '2023',
    img: '/assets/images/art/sunflower-apparition.jpg',
    alt: 'Graphite and paint portrait framed by large metallic gold sunflowers.',
    description:
      'A graphite and paint portrait framed by gold sunflowers, balancing delicate facial modelling with expressive floral gesture.',
  },
  {
    id: 12,
    title: 'For the Love of Ink',
    medium: 'Ink on paper',
    year: '2023',
    img: '/assets/images/art/for-the-love-of-ink.jpg',
    alt: 'Black ink scribble portrait of a suited man with a handwritten note reading For the love of ink.',
    description:
      'A portrait constructed from restless black line, letting density, repetition, and movement build the face.',
  },
  {
    id: 13,
    title: 'Hand to Crown',
    medium: 'Charcoal on paper',
    year: '2023',
    img: '/assets/images/art/hand-to-crown.jpg',
    alt: 'Charcoal portrait of a woman with one hand lifted into her hair.',
    description:
      'A resting portrait study where tonal mass and loose hairline marks hold the figure in a suspended gesture.',
  },
  {
    id: 14,
    title: 'Downcast Study',
    medium: 'Graphite on paper',
    year: '2023',
    img: '/assets/images/art/downcast-study.jpg',
    alt: 'Pencil portrait of a long-haired person looking down with soft graphite shading.',
    description:
      'A pencil portrait focused on a lowered gaze, light graphite transitions, and a deliberately unfinished shoulder line.',
  },
  {
    id: 15,
    title: 'Silver Wash Portrait',
    medium: 'Ink, graphite, and wash',
    year: '2023',
    img: '/assets/images/art/silver-wash-portrait.jpg',
    alt: 'Ink and wash portrait of a woman with voluminous hair and fine line texture.',
    description:
      'A cool grey portrait using wash, loose contour, and pen-line texture to sit between likeness and atmosphere.',
  },
];

export const galleryPageData: RealmPageData = {
  slug: 'gallery',
  realm: 'art',
  breadcrumbs: [
    { label: 'Art', href: '/art' },
    { label: 'Gallery', href: '/art/gallery' },
  ],

  arcaneIndex: 'M·I // VISIO',
  title: 'Gallery',
  subtitle: 'A curated collection of works spanning digital, traditional, and mixed media.',
  meta: [
    { label: 'Medium', value: 'Mixed' },
    { label: 'Works', value: `${galleryArtworks.length}` },
    { label: 'Updated', value: '2026' },
  ],

  navLinks: [
    { label: 'Art Home', href: '/art', direction: 'prev' },
    { label: 'Projects', href: '/art/projects', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: REALM_VISIO',
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
    id: 'botanical-portraits',
    title: 'Botanical Portraits',
    type: 'Series',
    year: '2023',
    description:
      'Mixed-media portraits where flowers, insects, gold marks, and ornamental linework become part of the sitter rather than a background.',
    img: '/assets/images/art/green-butterfly-collar.jpg',
    alt: 'Green mixed-media portrait with butterflies, gold accents, and white ornamental marks.',
  },
  {
    id: 'red-ground-moon-studies',
    title: 'Red Ground / Moon Studies',
    type: 'Collection',
    year: '2023',
    description:
      'A focused set of portraits using vivid red fields, silver circular forms, gold accents, and white body markings to stage the figure as an icon.',
    img: '/assets/images/art/red-moon-profile.jpg',
    alt: 'Profile portrait on a red ground with a silver moon circle behind the head.',
  },
  {
    id: 'text-and-shelter-studies',
    title: 'Text & Shelter Studies',
    type: 'Mixed-media Studies',
    year: '2023',
    description:
      'Dense grayscale works that fold handwriting, symbolic marks, interior pressure, and figure studies into layered emotional records.',
    img: '/assets/images/art/shine-archive.jpg',
    alt: 'Layered mixed-media composition with handwriting, symbols, and a central figure.',
  },
];

export const artProjectsPageData: RealmPageData = {
  slug: 'projects',
  realm: 'art',
  breadcrumbs: [
    { label: 'Art', href: '/art' },
    { label: 'Projects', href: '/art/projects' },
  ],

  arcaneIndex: 'M·I // OPERA',
  title: 'Projects',
  subtitle: 'Selected collections, visual studies, and ongoing series.',
  meta: [
    { label: 'Series', value: `${artProjects.length}` },
    { label: 'Updated', value: '2026' },
  ],

  navLinks: [
    { label: 'Gallery', href: '/art/gallery', direction: 'prev' },
    { label: 'Commissions', href: '/art/commissions', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: REALM_OPERA',
};

// ── Commissions ───────────────────────────────────────────────────────────────

export const commissionsPageData: RealmPageData = {
  slug: 'commissions',
  realm: 'art',
  breadcrumbs: [
    { label: 'Art', href: '/art' },
    { label: 'Commissions', href: '/art/commissions' },
  ],

  arcaneIndex: 'M·I // MANDATUM',
  title: 'Commissions',
  subtitle: 'Original works created on commission — painting, illustration, and mixed media.',
  meta: [
    { label: 'Status', value: 'Open' },
    { label: 'Turnaround', value: '4–8 wks' },
  ],

  content: [
    {
      type: 'text',
      heading: 'About Commissions',
      body: 'Original commissioned works are available across painting, illustration, and mixed media. Each piece is created to brief and delivered as a high-resolution digital file or physical work depending on medium.',
    },
    {
      type: 'list',
      heading: 'Available Work Types',
      items: [
        'Oil and acrylic painting — portrait, landscape, abstract',
        'Ink illustration — architectural, figurative, decorative',
        'Mixed media — layered works combining traditional and digital',
        'Digital illustration — editorial, conceptual, atmospheric',
      ],
    },
    {
      type: 'grid',
      heading: 'Process',
      gridItems: [
        { label: 'Brief', value: '01' },
        { label: 'Sketch', value: '02' },
        { label: 'Execution', value: '03' },
        { label: 'Delivery', value: '04' },
      ],
    },
    {
      type: 'text',
      heading: 'Enquiries',
      body: 'To discuss a commission, use the contact form or send a direct message with your brief, preferred medium, dimensions, and timeline.',
    },
  ],

  navLinks: [
    { label: 'Projects', href: '/art/projects', direction: 'prev' },
    { label: 'Art Home', href: '/art', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: REALM_MANDATUM',
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
  plateImg?: string;
  plateAlt?: string;
}

export const literatureExcerpts: LiteratureExcerpt[] = [
  {
    id: 'interval-01',
    title: 'The Gap Has Shape',
    source: 'The Pale Interval',
    chapter: 'Auxiliary Navigation Annex',
    plateImg: '/assets/literature/excerpt-auxiliary-navigation-annex.svg',
    plateAlt:
      'Generated cinematic waveform plate for The Gap Has Shape, showing a structured absence in the transmission.',
    text: `Sela did not smooth the silence.

Every consumer tool tried to heal Adra Mares's final recording into something merciful: hiss softened, gaps rounded, dead air replaced by polite prediction. Her module did the opposite. It left the hole open. It let the missing section keep its pressure, its rhythm, its edge.

The Pale Interval was not damage. Damage scattered. This returned.`,
  },
  {
    id: 'interval-02',
    title: 'Twin-Moon Bloom',
    source: 'The Pale Interval',
    chapter: 'Veyrath Surface',
    plateImg: '/assets/literature/excerpt-veyrath-surface.svg',
    plateAlt: 'Generated cinematic plate of blue-white Kaen bloom under twin moons on Veyrath.',
    text: `The black ground answered the moons before the instruments did.

Blue-white light moved through the Kaen in veins, not shining on the surface but waking from inside it. The field had looked dead at crash-light. Under alignment it became a map of everything that had crossed it, every pressure, every dragged boot, every handprint made while trying not to fall.

Breathable, Sela thought, did not mean safe.`,
  },
  {
    id: 'interval-03',
    title: 'Transmission Fragment — A. Mares',
    source: 'The Pale Interval',
    chapter: 'Recovered Recording',
    plateImg: '/assets/literature/excerpt-recovered-recording.svg',
    plateAlt: 'Generated redacted signal plate for Adra Mares’s recovered transmission fragment.',
    text: `[VY-0031 RECOVERED — PARTIAL — CONFIDENCE: 0.34]

...the absence is structured. Do not call it static...
...it listens through what we repeat...
...Sela, if they let you hear this, do not answer with the wound...
...love is not return. Tell Sela—

[SIGNAL LOST]`,
  },
];

export const excerptsPageData: RealmPageData = {
  slug: 'excerpts',
  realm: 'literature',
  breadcrumbs: [
    { label: 'Literature', href: '/literature' },
    { label: 'Excerpts', href: '/literature/excerpts' },
  ],

  arcaneIndex: 'M·III // SCRIPTORIUM',
  title: 'Excerpts',
  subtitle: 'Selected passages from The Pale Interval and other works.',
  meta: [
    { label: 'Source', value: 'The Pale Interval' },
    { label: 'Fragments', value: `${literatureExcerpts.length}` },
  ],

  navLinks: [
    { label: 'Literature', href: '/literature', direction: 'prev' },
    { label: 'Author', href: '/literature/author', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: SCRIPTORIUM_DEEP',
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
    coverImg: '/assets/literature/location-csb-31b.svg',
    coverAlt: 'Generated Veyrath cover plate with orbital scan lines and mineral light.',
    status: 'In Progress',
    href: '/literature/the-pale-interval',
  },
  {
    id: 'mechanics-of-the-void',
    volumeLabel: 'VOL. II',
    cycle: 'ASTRAL CHRONICLES',
    title: 'Mechanics of the Void',
    excerpt:
      '"To understand the emptiness between stars is to grasp the architecture of silence. It is not absence, but rather a space waiting patiently to be carved."',
    coverImg: '/assets/literature/excerpt-auxiliary-navigation-annex.svg',
    coverAlt: 'Generated abstract cover plate with a structured absence waveform.',
    status: 'Forthcoming',
    href: '/literature/worldbuilding',
  },
  {
    id: 'the-crimson-almanac',
    volumeLabel: 'VOL. III',
    cycle: 'FORGOTTEN LORE',
    title: 'The Crimson Almanac',
    excerpt:
      '"Blood and ink share a common viscosity when spilled in earnest. The histories written in one are invariably bound by the other."',
    coverImg: '/assets/literature/protocol-p7-001.svg',
    coverAlt: 'Generated classified document cover plate with Protocol Seven redactions.',
    status: 'Forthcoming',
    href: '/literature/excerpts',
  },
];

// ── The Pale Interval (novel detail) ─────────────────────────────────────────

export const thePaleIntervalPageData: RealmPageData = {
  slug: 'the-pale-interval',
  realm: 'literature',
  breadcrumbs: [
    { label: 'Literature', href: '/literature' },
    { label: 'The Pale Interval', href: '/literature/the-pale-interval' },
  ],

  arcaneIndex: 'M·III // VOL. I',
  title: 'The Pale Interval',
  subtitle:
    'A YA literary hard sci-fi horror novel about grief, first contact, recurrence, and the alien world that learns by listening.',
  meta: [
    { label: 'Author', value: 'L.F. Chambers' },
    { label: 'Genre', value: 'YA Literary Sci-Fi Horror' },
    { label: 'Status', value: 'In Progress' },
  ],

  content: [
    {
      type: 'text',
      heading: 'Logline',
      body: "When Apex trainee navigator Sela Mares proves that the missing section of her mother's final transmission points through a red dwarf to an unlisted world, her private grief crashes NAIAD onto Veyrath: a planet that records repetition, studies loss, and turns the human need for answers into a system of return.",
    },
    {
      type: 'text',
      heading: 'Synopsis',
      body: 'Sela Mares has spent twelve years studying the damaged final transmission of her mother, xenosemiotician Adra Mares. ICSE calls the missing section signal damage. Sela knows it has shape. When NAIAD passes near the Calyx sector, she overlays the gap against live Rheal telemetry and discovers that the Pale Interval points through the star toward Calyx Survey Body 31-B, the sealed world known as Veyrath.',
    },
    {
      type: 'text',
      body: 'Her secret course correction causes a catastrophic crash on a planet that should not officially exist. What begins as survival becomes first-contact horror: black Kaen mineral records passage, Clickers fall silent before danger, Hollow figures rehearse human grief, and the Knot learns through repetition. The final question is not how to escape, but how to refuse the pattern without pretending love has ended.',
    },
    {
      type: 'list',
      heading: 'Themes',
      items: [
        'Grief as signal: repeated loss becomes readable behaviour',
        'Listening vs answering: not every invitation is rescue',
        'Survival as a moral problem: evidence, rescue, and contamination',
        'Institutional containment: ICSE, Protocol Seven, and euphemism as defence',
        'Nara: the wound remains open without becoming an entrance',
      ],
    },
    {
      type: 'grid',
      heading: 'At a Glance',
      gridItems: [
        { label: 'Genre', value: 'YA Sci-Fi Horror' },
        { label: 'Protagonist', value: 'Sela Mares' },
        { label: 'Setting', value: 'Veyrath / 31-B' },
        { label: 'Status', value: 'In Progress' },
      ],
    },
  ],

  navLinks: [
    { label: 'Literature', href: '/literature', direction: 'prev' },
    { label: 'The Archive', href: '/literature/archive', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: VOL_I_PALE',
};

// ── Worldbuilding ─────────────────────────────────────────────────────────────

export const worldbuildingPageData: RealmPageData = {
  slug: 'worldbuilding',
  realm: 'literature',
  breadcrumbs: [
    { label: 'Literature', href: '/literature' },
    { label: 'Worldbuilding', href: '/literature/worldbuilding' },
  ],

  arcaneIndex: 'M·III // MUNDUS',
  title: 'Worldbuilding',
  subtitle:
    'A spoiler-aware field atlas for Veyrath, the sealed Calyx body where signal, grief, ecology, and recurrence become one system.',
  meta: [
    { label: 'Body', value: 'Calyx Survey Body 31-B' },
    { label: 'Status', value: 'Protocol Seven' },
  ],

  content: [
    {
      type: 'text',
      heading: 'Veyrath / Calyx Survey Body 31-B',
      body: 'Veyrath is an unlisted body in the Calyx sector, hidden behind Rheal and sealed by ICSE under Protocol Seven. Its atmosphere is close enough to breathe and unsafe enough to kill: oxygen-nitrogen pressure, suspended mineral particulate, and biological, neurological, perceptual, and memetic hazards that cannot be ruled out.',
    },
    {
      type: 'text',
      heading: 'The Planet as Recorder',
      body: 'The black mineral substrate, Kaen, reflects Rheal strangely, resonates electromagnetically, records heat and pressure, and appears to carry low-frequency pattern returns. The white mineral, by contrast, preserves evidence across recurrence events. The site is not a monster in a simple sense. It is an environment that listens, records, tests, and learns.',
    },
    {
      type: 'list',
      heading: 'Glossary',
      items: [
        'ICSE — Intercolonial Survey and Cartography Executive: the surveying, mapping, and classifying authority',
        'NAIAD — Navigational Assessment and Integrated Approach Drone: old, legible, repairable survey and training hull',
        'Veyrath / 31-B — sealed Calyx body orbiting near Rheal',
        'Kaen / K-31 — black mineral substrate that records passage and resonates with the Pale Interval',
        'The Knot — recurrence and intake mechanism that reads pattern, attention, grief, and return',
        'Thal — continuance; the self-thread that persists through versions',
        'Nara — love without return; grief that remains grief instead of becoming a key',
        'Protocol Seven — sealed contact-event classification forbidding ground contact, signal response, and rescue assumptions',
      ],
    },
    {
      type: 'list',
      heading: 'Key Locations',
      items: [
        'Crash Basin / Shatterlands — NAIAD impact site, recurrence return point, black mineral and shattered hull',
        'Southern Mudline / Sinkskin — unstable substrate that converts rather than simply consumes',
        'The Murk — fog, Bleeders, Sparks, Clicker silence, and acoustic pressure',
        'Door Slabs / Deepway — 3-4-3 marked thresholds and non-human road architecture',
        'The Spine — summit structure linked to the Knot and the strongest Pale Interval returns',
        'The White Passage — proof-space where marks and density shifts survive reset',
      ],
    },
  ],

  navLinks: [
    { label: 'Author', href: '/literature/author', direction: 'prev' },
    { label: 'Characters', href: '/literature/characters', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: MUNDUS_CALYX',
};

// ── Author ────────────────────────────────────────────────────────────────────

export const authorPageData: RealmPageData = {
  slug: 'author',
  realm: 'literature',
  breadcrumbs: [
    { label: 'Literature', href: '/literature' },
    { label: 'Author', href: '/literature/author' },
  ],

  arcaneIndex: 'M·III // AUCTOR',
  title: 'L.F. Chambers',
  subtitle:
    'Author of The Pale Interval. Multidisciplinary creative working across image, interface, and story.',
  meta: [
    { label: 'Current Work', value: 'The Pale Interval' },
    { label: 'Genre', value: 'YA Literary Sci-Fi Horror' },
    { label: 'Status', value: 'In Progress' },
  ],

  content: [
    {
      type: 'text',
      body: "L.F. Chambers writes literary science fiction with the lights low. The current project, The Pale Interval, is a YA literary sci-fi horror novel about grief, signal, and a daughter recovering her mother's final transmission from a sealed world.",
    },
    {
      type: 'text',
      body: 'The work sits where atmospheric horror meets hard-edged institutional science fiction: recovered recordings, classified archives, redacted protocols, and the slow, careful act of listening to something that may be listening back.',
    },
    {
      type: 'text',
      body: 'The literary work is informed by a background in visual design and systems thinking — an attention to structure, negative space, and the architecture of meaning. L.F. Chambers also works as the product designer Larnelle Chambers and as a visual artist.',
    },
  ],

  navLinks: [
    { label: 'Excerpts', href: '/literature/excerpts', direction: 'prev' },
    { label: 'Worldbuilding', href: '/literature/worldbuilding', direction: 'next' },
  ],

  sysLabel: 'SYS_LOC: AUCTOR_ARCHIVE',
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
      { label: 'Mobile Banking', href: '/case-studies/mobile-banking' },
    ],

    arcaneIndex: 'M·II // STRUCTURA',
    title: 'NCB Mobile App Improvement',
    subtitle:
      'Helping transition a large-scale banking product to a stronger, more consistent design system.',
    meta: [
      { label: 'Client', value: 'NCB Financial Group' },
      { label: 'Type', value: 'Mobile UX' },
      { label: 'Year', value: '2023' },
      { label: 'Downloads', value: '1M+' },
      { label: 'Rating', value: '4.6★' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'I supported the ongoing improvement of the NCB mobile app by helping the product design team transition key experiences into the new design system, creating missing components, and contributing to testing and design quality across the rollout.',
      },
      {
        type: 'list',
        heading: 'The Challenge',
        items: [
          'Legacy patterns and newer patterns were coexisting',
          'Not every required mobile use case was fully covered by the new design system yet',
          'Designers needed support translating existing work into the new system without slowing delivery',
          'Feature teams needed reusable components and clearer guidance to avoid one-off solutions',
          'Testing and quality checks were important because banking flows have little room for confusion or error',
        ],
      },
      {
        type: 'grid',
        heading: 'Outcome Snapshot',
        gridItems: [
          { label: 'Downloads', value: '1M+' },
          { label: 'Google Play Rating', value: '4.6★' },
          { label: 'NPS', value: '75+' },
        ],
      },
      {
        type: 'text',
        heading: 'Outcome',
        body: 'My work helped strengthen the app in a few key ways. First, it made it easier for designers to work within a more unified system. Second, it expanded the design system through real product needs. Third, it supported a more consistent and polished customer experience across the app.',
      },
    ],

    navLinks: [
      { label: 'NCB Design System', href: '/case-studies/ncb-design-system', direction: 'prev' },
      { label: 'Type Design', href: '/case-studies/type-design', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_MOBILE',
  },

  // ── NCB Design System ───────────────────────────────────────────────────────
  {
    slug: 'ncb-design-system',
    realm: 'product',
    client: 'NCB Financial Group',
    type: 'Design Systems',
    year: '2022–2023',
    summary:
      "Building Oasis — a comprehensive design system for one of the Caribbean's largest financial institutions.",
    coverImg: '/assets/images/Personal-1775589530525.png',
    coverAlt: 'Desktop screen designed using the Oasis NCB design system',
    breadcrumbs: [
      { label: 'Product Design', href: '/product-design' },
      { label: 'Case Studies', href: '/product-design/case-studies' },
      { label: 'NCB Design System', href: '/case-studies/ncb-design-system' },
    ],

    arcaneIndex: 'M·II // SYSTEMA',
    title: 'NCB Design System — Oasis',
    subtitle:
      "Building a comprehensive design system for one of the Caribbean's largest financial institutions.",
    meta: [
      { label: 'Client', value: 'NCB Financial Group' },
      { label: 'Type', value: 'Design Systems' },
      { label: 'Year', value: '2022–2023' },
      { label: 'Components', value: '200+' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'Oasis is the design system built for NCB Financial Group — a token-based, component-driven system covering web and mobile surfaces across the enterprise. The system was built to support multiple product teams working simultaneously on a large, complex financial platform.',
      },
      {
        type: 'list',
        heading: 'Scope',
        items: [
          'Design token architecture — colour, typography, spacing, elevation',
          '200+ Figma components with documented variants and states',
          'Mobile component library for iOS and Android',
          'Contribution guidelines and governance model',
          'Adoption support across product teams',
        ],
      },
      {
        type: 'grid',
        heading: 'Scale',
        gridItems: [
          { label: 'Components', value: '200+' },
          { label: 'Token Sets', value: '12' },
          { label: 'Teams', value: '6+' },
          { label: 'Platforms', value: '3' },
        ],
      },
    ],

    navLinks: [
      { label: 'Banking Loans', href: '/case-studies/banking-loans', direction: 'prev' },
      { label: 'Mobile Banking', href: '/case-studies/mobile-banking', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_OASIS',
    hasPrototype: true,
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
    coverAlt:
      'Desktop screen showing the Credit Cards page designed using the Oasis NCB design system',
    breadcrumbs: [
      { label: 'Product Design', href: '/product-design' },
      { label: 'Case Studies', href: '/product-design/case-studies' },
      { label: 'Banking Loans', href: '/case-studies/banking-loans' },
    ],

    arcaneIndex: 'M·II // PECUNIA',
    title: 'NCB Personal Loans Redesign',
    subtitle:
      'Redesigning the personal loans journey for a major Caribbean bank — from discovery to disbursement.',
    meta: [
      { label: 'Client', value: 'NCB Financial Group' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Year', value: '2022' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'The personal loans journey was one of the highest-traffic flows in the NCB digital product. The redesign focused on reducing friction, improving clarity around loan products, and creating a more guided application experience.',
      },
      {
        type: 'list',
        heading: 'Key Focus Areas',
        items: [
          'Simplifying product discovery and comparison',
          'Reducing form complexity in the application journey',
          'Improving feedback and status communication',
          'Aligning the experience with the new Oasis design system',
        ],
      },
    ],

    navLinks: [
      { label: 'WeLink', href: '/case-studies/welink', direction: 'prev' },
      { label: 'NCB Design System', href: '/case-studies/ncb-design-system', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_LOANS',
    hasPrototype: true,
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
      { label: 'Auto Loans', href: '/case-studies/auto' },
    ],

    arcaneIndex: 'M·II // VEHICULUM',
    title: 'Auto Loan Journey Redesign',
    subtitle:
      'Redesigning the auto loan application journey to reduce drop-off and improve completion rates.',
    meta: [
      { label: 'Client', value: 'NCB Financial Group' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Year', value: '2023' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'The auto loans journey had high drop-off at key stages of the application. The redesign focused on restructuring the information architecture, simplifying the form experience, and providing clearer guidance at decision points.',
      },
      {
        type: 'list',
        heading: 'Design Decisions',
        items: [
          'Restructured the journey into clearer, shorter stages',
          'Added contextual guidance at high-abandonment points',
          'Simplified document upload and verification flows',
          'Improved status and progress communication throughout',
        ],
      },
    ],

    navLinks: [
      { label: 'Mortgage', href: '/case-studies/mortgage', direction: 'prev' },
      { label: 'WeLink', href: '/case-studies/welink', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_AUTO',
    hasPrototype: true,
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
      { label: 'Mortgage', href: '/case-studies/mortgage' },
    ],

    arcaneIndex: 'M·II // DOMUS',
    title: 'NCB Mortgage Experience',
    subtitle:
      'End-to-end redesign of the mortgage product experience — from product discovery to application.',
    meta: [
      { label: 'Client', value: 'NCB Financial Group' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Year', value: '2023' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'The mortgage redesign covered the full customer journey — from initial product discovery and comparison through to the application process. The work included a new mortgage calculator, a restructured product overview, and a simplified application journey.',
      },
      {
        type: 'list',
        heading: 'Scope',
        items: [
          'Product overview and comparison pages',
          'Interactive mortgage calculator',
          'Application journey — restructured and simplified',
          'FAQ and support content architecture',
          'Alignment with Oasis design system',
        ],
      },
    ],

    navLinks: [
      { label: 'Gleaner', href: '/case-studies/gleaner', direction: 'prev' },
      { label: 'Auto Loans', href: '/case-studies/auto', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_MORTGAGE',
    hasPrototype: true,
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
      { label: 'WeLink', href: '/case-studies/welink' },
    ],

    arcaneIndex: 'M·II // NEXUS',
    title: 'WeLink Caribbean Platform',
    subtitle:
      'Designing a Caribbean gig-economy platform connecting skilled workers with clients across the region.',
    meta: [
      { label: 'Client', value: 'WeLink Caribbean' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Year', value: '2022' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'WeLink is a concept platform designed to connect skilled workers with clients across the Caribbean. The design work covered the full platform — homepage, service discovery, worker profiles, and the booking flow.',
      },
      {
        type: 'list',
        heading: 'Design Scope',
        items: [
          'Platform homepage and value proposition',
          'Service category discovery and search',
          'Worker listing and profile pages',
          'Booking and enquiry flow',
          'App download and onboarding',
        ],
      },
    ],

    navLinks: [
      { label: 'Auto Loans', href: '/case-studies/auto', direction: 'prev' },
      { label: 'Banking Loans', href: '/case-studies/banking-loans', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_WELINK',
    hasPrototype: true,
  },

  // ── Gleaner ─────────────────────────────────────────────────────────────────
  {
    slug: 'gleaner',
    realm: 'product',
    client: 'The Gleaner Company',
    type: 'Editorial Design',
    year: '2021',
    summary: "Redesigning the digital presence of Jamaica's oldest and most widely read newspaper.",
    breadcrumbs: [
      { label: 'Product Design', href: '/product-design' },
      { label: 'Case Studies', href: '/product-design/case-studies' },
      { label: 'Gleaner', href: '/case-studies/gleaner' },
    ],

    arcaneIndex: 'M·II // SCRIPTURA',
    title: 'Jamaica Gleaner Redesign',
    subtitle:
      "Redesigning the digital presence of Jamaica's oldest and most widely read newspaper.",
    meta: [
      { label: 'Client', value: 'The Gleaner Company' },
      { label: 'Type', value: 'Editorial Design' },
      { label: 'Year', value: '2021' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'The Gleaner redesign focused on modernising the digital editorial experience while preserving the authority and trust of a 180-year-old institution. The work covered information architecture, visual design, and the reading experience across devices.',
      },
      {
        type: 'list',
        heading: 'Key Areas',
        items: [
          'Homepage hierarchy and editorial curation',
          'Article reading experience — typography, layout, and pacing',
          'Navigation and section architecture',
          'Mobile-first responsive design',
          'Advertising integration without compromising editorial integrity',
        ],
      },
    ],

    navLinks: [
      { label: 'Type Design', href: '/case-studies/type-design', direction: 'prev' },
      { label: 'Mortgage', href: '/case-studies/mortgage', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_GLEANER',
    hasPrototype: true,
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
      { label: 'Type Design', href: '/case-studies/type-design' },
    ],

    arcaneIndex: 'M·II // LITERA',
    title: 'Oasis Geometric Typeface',
    subtitle: 'Designing a custom geometric sans-serif typeface for the NCB Oasis design system.',
    meta: [
      { label: 'Client', value: 'NCB Financial Group' },
      { label: 'Type', value: 'Type Design' },
      { label: 'Year', value: '2022' },
      { label: 'Weights', value: '4' },
    ],

    content: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'Oasis Geometric is a custom typeface designed specifically for the NCB Oasis design system. The typeface was designed to balance geometric precision with warmth and legibility at small sizes — requirements driven by the financial product context.',
      },
      {
        type: 'list',
        heading: 'Design Criteria',
        items: [
          'Geometric construction with humanist corrections for legibility',
          'Optimised for screen rendering at small sizes',
          'Four weights — Regular, Medium, SemiBold, Bold',
          'Full Latin character set with financial symbols',
          "Consistent with the Oasis system's visual language",
        ],
      },
      {
        type: 'grid',
        heading: 'Typeface Specs',
        gridItems: [
          { label: 'Weights', value: '4' },
          { label: 'Glyphs', value: '300+' },
          { label: 'Format', value: 'WOFF2' },
          { label: 'Style', value: 'Geometric' },
        ],
      },
    ],

    navLinks: [
      { label: 'Mobile Banking', href: '/case-studies/mobile-banking', direction: 'prev' },
      { label: 'Gleaner', href: '/case-studies/gleaner', direction: 'next' },
    ],

    sysLabel: 'SYS_LOC: CASE_TYPE',
    hasPrototype: true,
  },
];

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
  coverImg: '/assets/images/veyrath-kaen-bloom.png',
  coverAlt:
    'Veyrath under a red dwarf, with twin moons above black Kaen mineral and a pale white passage.',
  logline:
    'A hidden world listens to grief, records repetition, and turns the human need for answers into a system of return.',
  shortSynopsis:
    'The Pale Interval is a YA literary hard sci-fi horror novel about Sela Mares, an Apex trainee navigator whose search for her mother’s final warning crashes NAIAD onto Veyrath, a sealed alien world where memory, ecology, signal, and survival become impossible to separate.',
  longSynopsis: [
    'Sela Mares has spent twelve years studying the missing section of Adra Mares’s final transmission. ICSE calls it signal damage. Sela hears structure: a patterned absence, VY-0031, centred around an unlisted body beyond Rheal.',
    'When NAIAD passes through the Calyx sector, Sela secretly alters course to prove the Pale Interval is real. The confirmation becomes disaster. NAIAD crashes on Veyrath, a world with breathable air, black Kaen fields, white-mineral proof-spaces, and an ecology that appears to listen through repetition.',
    'The survivors learn that rescue, grief, evidence, and hope can all become inputs for the Knot. To live, Sela has to stop treating loss as a route back to her mother and choose nara: love that remains love without becoming return.',
  ],
  motifs: [
    'Structured absence',
    'Twin-moon Bloom',
    'Black Kaen',
    'White mineral proof',
    '3-4-3 rhythm',
    'Not an archive',
    'Protocol Seven',
    'Nara',
  ],
  buyLinks: [
    // TODO: replace with real retailer / pre-order links when available.
    { label: 'Pre-order (coming soon)', href: '#', available: false },
  ] as BuyLink[],
  mailingListNote: 'Get a note when The Pale Interval is available to pre-order. No spam, ever.',
} as const;

export const paleIntervalSeoDescription =
  'The Pale Interval by L.F. Chambers — a YA literary hard sci-fi horror novel about grief, signal, recurrence, and the sealed alien world Veyrath.';

// ── Character dossiers ────────────────────────────────────────────────────────

export interface CharacterDossier {
  name: string;
  slug: string;
  role: string;
  classification: string;
  portraitImg?: string;
  portraitAlt?: string;
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
    role: 'Protagonist · Apex trainee navigator',
    classification: 'NAIAD — Apex cohort / VY-0031 exposure',
    portraitImg: '/assets/literature/character-sela-mares.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Sela Mares.',
    description:
      'Brilliant, secretive, and dangerous when private certainty outruns shared risk. Sela has spent twelve years studying Adra’s missing transmission segment until grief becomes navigation.',
    quote: '“The gap does not point at Rheal. It points through it.”',
    relationship: 'Daughter of Adra and Davi Mares. Her course correction brings NAIAD to Veyrath.',
    spoilerLocked: ['Arc: from answering the signal alone to refusing to let love become return.'],
  },
  {
    name: 'Adra Mares',
    slug: 'adra-mares',
    role: 'Xenosemiotician · original witness',
    classification: 'ICSE — Calyx / Veyrath survey, status sealed',
    portraitImg: '/assets/literature/character-adra-mares.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Adra Mares.',
    description:
      'Sela’s mother, present as fragment, warning, grief-object, and contested reconstruction. Her absence is the first pattern Sela teaches the planet to read.',
    quote: '“Do not answer with the wound.”',
    relationship: 'The emotional centre of Sela’s search and the source of the final warning.',
    spoilerLocked: [
      'True status: not intact; partly preserved, copied, or reconstructed by the Veyrath/Knot system.',
    ],
  },
  {
    name: 'Ithe Asare',
    slug: 'ithe-asare',
    role: 'Emotional anchor · present fact',
    classification: 'NAIAD — Apex cohort',
    portraitImg: '/assets/literature/character-ithe-asare.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Ithe Asare.',
    description:
      'Grounded, exact, and loving without making love easy. Ithe keeps Sela connected to what is happening now rather than what grief wants to recover.',
    quote: '“What is happening now?”',
    relationship: 'Sela’s closest emotional anchor and one of the group’s hardest moral voices.',
    spoilerLocked: ['Her survival becomes one of Sela’s key recurrence tests.'],
  },
  {
    name: 'Lyren Osei-Khan',
    slug: 'lyren-osei-khan',
    role: 'Cohort leader · moral commander',
    classification: 'NAIAD — Apex cohort command',
    portraitImg: '/assets/literature/character-lyren-osei-khan.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Lyren Osei-Khan.',
    description:
      'A disciplined leader who starts with formation and triage, then learns that the summit itself may be the trap. Lyren keeps the group coherent when objectives collapse.',
    quote: '“An answer the team cannot use is just a private way to die.”',
    relationship: 'Sela’s command counterweight and one of the first to name the cost of secrecy.',
    spoilerLocked: [
      'Arc: from institutional leader to commander who turns the group away from the designed route.',
    ],
  },
  {
    name: 'Nae',
    slug: 'nae',
    role: 'Systems analyst · recurrence empiricist',
    classification: 'NAIAD — Apex cohort / evidence board',
    portraitImg: '/assets/literature/character-nae.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Nae.',
    description:
      'Rigorous, suspicious, and often right. Nae builds the framework for distinguishing ordinary memory, emotional residue, Sela’s retention, and physical proof.',
    quote: '“Evidence first. Naming second.”',
    relationship: 'Carries the core, tests the white mineral, and refuses Sela’s comforting terms.',
    spoilerLocked: ['Labels the contained core NOT AN ARCHIVE.'],
  },
  {
    name: 'Cael Runningwater',
    slug: 'cael-runningwater',
    role: 'Sensory translator · acoustic interpreter',
    classification: 'NAIAD — Apex cohort / perceptual notes',
    portraitImg: '/assets/literature/character-cael-runningwater.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Cael Runningwater.',
    description:
      'An artist-listener who notices frequency, mismatch, and emotional resonance before instruments can classify them. Cael helps translate Kaenic concepts without flattening them.',
    quote: '“Not technically accurate. True, though.”',
    relationship: 'Interprets Hollow mimicry, marks, thal, and nara.',
    spoilerLocked: ['Vulnerable to involuntary pattern reproduction.'],
  },
  {
    name: 'Voss',
    slug: 'voss',
    role: 'Protector · physical anchor',
    classification: 'NAIAD — Apex cohort / watch protocol',
    portraitImg: '/assets/literature/character-voss.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Voss.',
    description:
      'Practical, blunt, brave, and body-first. Voss turns survival rules into embodied habits: cut the mark, hold the line, no one watches alone.',
    quote: '“No one watches alone.”',
    relationship: 'Anchors lines, marks white mineral, and keeps bodies alive when language fails.',
    spoilerLocked: ['One of the strongest defenders of the final counter-pattern.'],
  },
  {
    name: 'Phoebe Nassar',
    slug: 'phoebe-nassar',
    role: 'Field namer · survivor record keeper',
    classification: 'NAIAD — Apex cohort / taxonomy notes',
    portraitImg: '/assets/literature/character-phoebe-nassar.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Phoebe Nassar.',
    description:
      'Funny until naming becomes survival. Phoebe makes the world speakable: Clickers, Bleeders, Sparks, Priors, Deepway, and the hand-scratched record.',
    quote: '“If it can scare us, it can have a name.”',
    relationship:
      'Her missing brother Marc makes grief close to the surface and therefore readable.',
    spoilerLocked: ['Her records resist institutional smoothing and planetary rewriting.'],
  },
  {
    name: 'Rao',
    slug: 'rao',
    role: 'Life-support and terrain specialist',
    classification: 'NAIAD — Apex cohort / ground rules',
    portraitImg: '/assets/literature/character-rao.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Rao.',
    description:
      'Quiet, methodical, and precise about the difference between ground and surface. Rao reads filters, pressure, false crust, and Sinkskin risk.',
    quote: '“Solid is not the same as safe.”',
    relationship: 'Keeps survival physical and measurable.',
    spoilerLocked: ['Her patched boot and altered gait become recurrence data.'],
  },
  {
    name: 'Davi Mares',
    slug: 'davi-mares',
    role: 'Sela’s father · keeper of the private log',
    classification: 'Family record / ICSE-adjacent',
    portraitImg: '/assets/literature/character-davi-mares.svg',
    portraitAlt: 'Generated classified dossier portrait plate for Davi Mares.',
    description:
      'Davi knows enough to fear the recording and loves Sela enough to hide from what hiding costs. His unsent logs form a counter-archive to ICSE language.',
    quote: '“Do not let them call it damage if damage is what keeps her listening.”',
    relationship: 'Adra’s partner and Sela’s surviving parent.',
    spoilerLocked: [
      'Late-book logs confirm ICSE is frightened and that Davi will not stay passive if Sela is alive.',
    ],
  },
  {
    name: 'The Knot',
    slug: 'the-knot',
    role: 'Recurrence mechanism · antagonist-system',
    classification: 'VY-0031 / contact hazard',
    portraitImg: '/assets/literature/character-the-knot.svg',
    portraitAlt: 'Generated classified dossier portrait plate for the Knot.',
    description:
      'Not a creature in the ordinary sense. The Knot reads absence, attention, grief, repetition, rescue behaviour, and return, then turns reliable human responses into routes.',
    quote: '“Invitation is not rescue.”',
    relationship: 'Uses the summit, the core, copies, and Sela’s grief as inputs.',
    spoilerLocked: [
      'Its danger is not malice, but pattern-use without human understanding of loss.',
    ],
  },
];

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
  {
    term: 'ICSE',
    expansion: 'Intercolonial Survey and Cartography Executive',
    definition:
      'The institution responsible for surveying, mapping, and classifying systems across the colonies — and for deciding what is recorded and what is sealed.',
    category: 'institution',
  },
  {
    term: 'NAIAD',
    expansion: 'Navigational Assessment and Integrated Approach Drone',
    definition:
      'An old, legible, repairable ICSE deep-survey and training hull tied to the Calyx route. Its navigation core survives the crash and becomes both evidence and contamination vector.',
    category: 'technology',
  },
  {
    term: 'Veyrath',
    expansion: 'Calyx Survey Body 31-B',
    definition:
      'The sealed body near Rheal. Breathable does not mean safe: Veyrath’s atmosphere, mineral field, ecology, and signal behaviour make ground contact a Protocol Seven hazard.',
    category: 'place',
  },
  {
    term: 'Kaen',
    expansion: 'K-31',
    definition:
      'The black mineral substrate of Veyrath. It reflects Rheal strangely, records heat and pressure, resonates electromagnetically, and may carry organic inclusions.',
    category: 'concept',
  },
  {
    term: 'White Mineral',
    definition:
      'A pale counter-pattern mineral that preserves marks, cuts, and density shifts across recurrence events. It is proof-space, not simple safety.',
    category: 'concept',
  },
  {
    term: 'The Pale Interval',
    expansion: 'VY-0031',
    definition:
      'A structured absence inside Adra’s final transmission. Officially anomalous signal degradation; functionally a place where grief, contact, and invitation overlap.',
    category: 'concept',
  },
  {
    term: '3-4-3 Pattern',
    definition:
      'A recurring rhythm found in waveform gaps, door slabs, Clicker warnings, and copied marks. It is one of the interfaces between human perception and Veyrath’s signal architecture.',
    category: 'language',
  },
  {
    term: 'Thal',
    definition:
      'A Kaenic concept closest to continuance: the self-thread that persists through versions, bodies, and days.',
    category: 'language',
  },
  {
    term: 'Nara',
    definition:
      'Love without return. Grief that remains grief instead of becoming a key, route, or repeated input.',
    category: 'language',
  },
  {
    term: 'The Knot',
    definition:
      'A recurrence and intake mechanism that reads pattern, attention, grief, rescue behaviour, and return. It is the central antagonist-system, not a simple monster.',
    category: 'concept',
  },
  {
    term: 'Protocol Seven',
    definition:
      'A sealed ICSE contact-event classification forbidding ground contact, signal response, rescue assumptions, and personal interpretation of VY-0031.',
    category: 'institution',
  },
];

// ── Survey locations ────────────────────────────────────────────────────────

export type RiskClass = 'nominal' | 'caution' | 'restricted' | 'sealed';

export interface SurveyLocation {
  name: string;
  designation: string;
  environment: string;
  signalNotes: string;
  risk: RiskClass;
  img?: string;
  alt?: string;
  related?: string[];
}

export const paleIntervalLocations: SurveyLocation[] = [
  {
    name: 'Rheal',
    designation: 'CAL-R',
    environment:
      'Low-luminosity red dwarf whose output acts as a carrier medium for the Pale Interval.',
    signalNotes:
      'Sela’s overlay proves the gap does not point at Rheal; it points through Rheal toward a fixed orbital position.',
    risk: 'restricted',
    img: '/assets/literature/location-cal-r.svg',
    alt: 'Generated survey plate for Rheal, the red dwarf carrier star.',
    related: ['sela-mares'],
  },
  {
    name: 'Veyrath',
    designation: 'CSB-31B',
    environment:
      'Breathable oxygen-nitrogen atmosphere with mineral particulate and unruled-out biological, neurological, perceptual, and memetic hazards.',
    signalNotes:
      'Officially anomalous. Survivor records treat the planet as a listening and recording environment.',
    risk: 'sealed',
    img: '/assets/literature/location-csb-31b.svg',
    alt: 'Generated survey plate for Veyrath, sealed body CSB-31B.',
    related: ['adra-mares', 'the-knot'],
  },
  {
    name: 'Crash Basin / Shatterlands',
    designation: 'VY-CB',
    environment:
      'NAIAD impact site: black mineral, glass, dust, shattered hull, red light, and scattered survivors.',
    signalNotes: 'Becomes a recurrence return point after the first summit event.',
    risk: 'sealed',
    img: '/assets/literature/location-vy-cb.svg',
    alt: 'Generated survey plate for Crash Basin and the Shatterlands.',
    related: ['sela-mares'],
  },
  {
    name: 'Southern Mudline / Sinkskin',
    designation: 'VY-SM',
    environment:
      'False organic-mineral substrate that swallows bodies and equipment; conversion risk exceeds simple drowning or entrapment.',
    signalNotes: 'First major proof that Veyrath’s biology is active, not passive.',
    risk: 'sealed',
    img: '/assets/literature/location-vy-sm.svg',
    alt: 'Generated survey plate for Southern Mudline and Sinkskin.',
    related: ['ithe-asare', 'rao'],
  },
  {
    name: 'The Murk',
    designation: 'VY-MK',
    environment:
      'Fog biome with red trunk-like Bleeders, acoustic absorption, Clickers, Sparks, and deep pressure events.',
    signalNotes:
      'Clicker silence precedes dangerous shifts; Sparks may indicate safer ground near roots.',
    risk: 'restricted',
    img: '/assets/literature/location-vy-mk.svg',
    alt: 'Generated survey plate for the Murk and Clicker silence.',
    related: ['phoebe-nassar', 'cael-runningwater'],
  },
  {
    name: 'Door Slabs / Deepway',
    designation: 'VY-DW',
    environment:
      'Vertical Kaen slabs marked in 3-4-3 rhythm, connected to roads, arches, doorways, and lower city structures.',
    signalNotes:
      'Clickers avoid the slabs. The Road That Remembers begins counting group behaviour.',
    risk: 'sealed',
    img: '/assets/literature/location-vy-dw.svg',
    alt: 'Generated survey plate for the Door Slabs and Deepway.',
    related: ['lyren-osei-khan'],
  },
  {
    name: 'The White Passage',
    designation: 'VY-WP',
    environment:
      'Pale mineral corridor and refuge architecture that resists the Knot’s recurrence system.',
    signalNotes:
      'Marks in white mineral survive resets as density changes. Proof-space, not sanctuary.',
    risk: 'restricted',
    img: '/assets/literature/location-vy-wp.svg',
    alt: 'Generated survey plate for the White Passage proof mineral.',
    related: ['nae', 'voss'],
  },
  {
    name: 'The Spine / Summit',
    designation: 'VY-SP',
    environment:
      'Mountain-ridge structure grown around older architecture and linked to the Knot’s strongest return behaviour.',
    signalNotes:
      'The summit is not the objective. It is the trap that trains survivors to keep completing the pattern.',
    risk: 'sealed',
    img: '/assets/literature/location-vy-sp.svg',
    alt: 'Generated survey plate for the Spine and summit trap.',
    related: ['the-knot'],
  },
];

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

export const transmissionTitle = 'VY-0031 — A. Mares / Pale Interval';

export const paleIntervalTransmissions: TransmissionFragment[] = [
  {
    id: 'frag-01',
    position: 4,
    timestamp: '00:03',
    text: 'Do not call the absence damage.',
    corrupted: false,
  },
  {
    id: 'frag-02',
    position: 16,
    timestamp: '00:11',
    text: 'It has shape. It has rhythm. It is not a hole in the record.',
    corrupted: false,
  },
  { id: 'frag-03', position: 28, timestamp: '00:24', text: null, corrupted: true },
  {
    id: 'frag-04',
    position: 40,
    timestamp: '00:37',
    text: 'Breathable does not mean safe.',
    corrupted: false,
  },
  {
    id: 'frag-05',
    position: 54,
    timestamp: '00:49',
    text: 'Sela — if they let you hear this — do not answer with the wound.',
    corrupted: false,
  },
  { id: 'frag-06', position: 66, timestamp: '01:02', text: null, corrupted: true },
  {
    id: 'frag-07',
    position: 80,
    timestamp: '01:18',
    text: 'It learns through what we repeat.',
    corrupted: false,
  },
  { id: 'frag-08', position: 93, timestamp: '01:31', text: null, corrupted: true },
];

// ── Protocol 7 documents ────────────────────────────────────────────────────

export type Classification = 'restricted' | 'confidential' | 'sealed';

export interface ProtocolDocument {
  id: string;
  code: string;
  title: string;
  classification: Classification;
  img?: string;
  alt?: string;
  /** Spoiler-safe lines; use [REDACTED] for redaction bars. */
  body: string[];
  spoilerLocked?: string[];
}

export const paleIntervalProtocols: ProtocolDocument[] = [
  {
    id: 'p7-001',
    code: 'P7 / DIR-001',
    title: 'Directive — VY-0031 Contact Seal',
    classification: 'restricted',
    img: '/assets/literature/protocol-p7-001.svg',
    alt: 'Generated Protocol Seven plate for the VY-0031 contact seal directive.',
    body: [
      'Upon detection of a structured absence meeting VY-0031 criteria, active interpretation shall cease.',
      'Do not transmit audio. Do not answer non-human signal returns. Do not assume invitation indicates rescue.',
      'Public explanation remains anomalous relay degradation / signal damage unless Executive clearance overrides.',
    ],
    spoilerLocked: ['Protocol Seven notation predates Adra Mares by five years.'],
  },
  {
    id: 'p7-002',
    code: 'P7 / MEMO-014',
    title: 'Internal Memo — NAIAD Course Deviation',
    classification: 'confidential',
    img: '/assets/literature/protocol-p7-002.svg',
    alt: 'Generated Protocol Seven plate for the NAIAD course deviation memo.',
    body: [
      'NAIAD deviated from the Calyx training route after auxiliary navigation activity outside approved exercise windows.',
      'Crash beacon fired after structural threshold breach. Survivors may be present. Ground contact remains prohibited.',
      'Remote extraction package authorised with contamination safeguards. Rescue assumptions remain unsafe.',
    ],
    spoilerLocked: ['The extraction marker becomes exploitable by the recurrence system.'],
  },
  {
    id: 'p7-003',
    code: 'P7 / FILE-███',
    title: 'Incident File — Calyx Survey Body 31-B',
    classification: 'sealed',
    img: '/assets/literature/protocol-p7-003.svg',
    alt: 'Generated Protocol Seven plate for Calyx Survey Body 31-B.',
    body: [
      'Contents sealed under Protocol Seven.',
      'Entry name: [REDACTED] / Veyrath.',
      'Classification: living archive terminology prohibited.',
      'Authorisation required.',
    ],
    spoilerLocked: [
      'Restricted language includes recurrence, Knot, invitation, preservation, survivor continuation, and living archive.',
    ],
  },
];

// ── New literature page data: Archive + Characters ──────────────────────────

export const archivePageData: RealmPageData = {
  slug: 'archive',
  realm: 'literature',
  breadcrumbs: [
    { label: 'Literature', href: '/literature' },
    { label: 'The Archive', href: '/literature/archive' },
  ],
  arcaneIndex: 'M·III // ICSE ARCHIVE',
  title: 'The Archive',
  subtitle:
    'A recovered ICSE / NAIAD archive for Veyrath: corrupted transmissions, Protocol Seven files, route data, recurrence evidence, and fragments from Adra’s warning.',
  meta: [
    { label: 'Authority', value: 'ICSE' },
    { label: 'Status', value: 'Recovered / contested' },
    { label: 'Clearance', value: 'Protocol Seven' },
  ],
  navLinks: [
    { label: 'The Pale Interval', href: '/literature/the-pale-interval', direction: 'prev' },
    { label: 'Characters', href: '/literature/characters', direction: 'next' },
  ],
  sysLabel: 'SYS_LOC: ICSE_ARCHIVE',
};

export const charactersPageData: RealmPageData = {
  slug: 'characters',
  realm: 'literature',
  breadcrumbs: [
    { label: 'Literature', href: '/literature' },
    { label: 'Characters', href: '/literature/characters' },
  ],
  arcaneIndex: 'M·III // DRAMATIS',
  title: 'Characters',
  subtitle:
    'Dossiers from the NAIAD crash record, survivor annotations, and Veyrath contact files. Spoiler-aware by default.',
  meta: [
    { label: 'Records', value: `${paleIntervalCharacters.length}` },
    { label: 'Authority', value: 'ICSE' },
  ],
  navLinks: [
    { label: 'Worldbuilding', href: '/literature/worldbuilding', direction: 'prev' },
    { label: 'The Archive', href: '/literature/archive', direction: 'next' },
  ],
  sysLabel: 'SYS_LOC: DRAMATIS_PERSONAE',
};

/** All page data records keyed by realm for CMS-style enumeration */
export const allRealmPages = {
  art: [galleryPageData, artProjectsPageData, commissionsPageData],
  literature: [
    excerptsPageData,
    thePaleIntervalPageData,
    worldbuildingPageData,
    authorPageData,
    archivePageData,
    charactersPageData,
  ],
  product: caseStudies,
} as const;
