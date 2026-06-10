import { galleryArtworks } from './realms-content';
import { PRODUCT_WORK } from './product-content';

export const mythologyThreads = [
  {
    symbol: 'Signal',
    realm: 'Literature',
    meaning: 'Messages that survive damage, grief, and institutional smoothing.',
    proof: 'The Pale Interval, archive consoles, redacted transmission fragments.',
  },
  {
    symbol: 'Ornament',
    realm: 'Art',
    meaning: 'Decoration behaving like memory: dots, white marks, flowers, gold, and field lines.',
    proof: 'Botanical portraits, red moon studies, ink-and-metallic mixed media.',
  },
  {
    symbol: 'System',
    realm: 'Product',
    meaning: 'Structure that lets many people move with less friction and more confidence.',
    proof: 'Design systems, banking flows, accessibility programmes, decision logs.',
  },
  {
    symbol: 'Rupture',
    realm: 'Across all work',
    meaning: 'A break that becomes readable instead of being hidden.',
    proof: 'Glitches, red fields, process scars, archive gaps, before-and-after UX work.',
  },
];

export const creativeTimeline = [
  {
    year: '2021',
    title: 'Editorial Systems',
    realm: 'Product',
    detail:
      'News, web, and information architecture work sharpened a taste for dense usable systems.',
  },
  {
    year: '2022',
    title: 'Type, Platform, Pattern',
    realm: 'Product',
    detail: 'Typeface, platform, and community work pushed structure into visual language.',
  },
  {
    year: '2023',
    title: 'Portrait Field',
    realm: 'Art',
    detail:
      'A run of mixed-media portraits established the gold, ink, botanical, and witness motifs.',
  },
  {
    year: '2024',
    title: 'Oasis and Enterprise Scale',
    realm: 'Product',
    detail: 'Design-system governance and banking flows turned craft into organizational leverage.',
  },
  {
    year: '2026',
    title: 'The Living Portfolio',
    realm: 'All realms',
    detail:
      'The site becomes a world engine: motion, archive puzzles, gallery viewers, and creative lore.',
  },
];

export const makingOfEntries = [
  {
    title: 'Remotion Loops',
    type: 'Motion',
    detail:
      'Local WebM loops carry the home portal, product grid, gallery atmosphere, and Pale Interval signal.',
    href: '/assets/motion/pale-interval-signal-loop.webm',
  },
  {
    title: 'HyperFrames Lore Panels',
    type: 'Trailer System',
    detail:
      'Veyrath Signal, Twin-Moon Bloom, and Archive Rupture are installed as cinematic lore slots.',
    href: '/literature/archive',
  },
  {
    title: 'Artwork Integration',
    type: 'Gallery',
    detail: `${galleryArtworks.length} compressed artwork assets are wired into a viewer with descriptions and process metadata.`,
    href: '/art/gallery',
  },
  {
    title: 'Product Archive',
    type: 'Design',
    detail: `${PRODUCT_WORK.length} product case studies are staged as a command-center surface with metrics and methods.`,
    href: '/product-design/case-studies',
  },
];

export const studioNotes = [
  'Graphite mass is treated as atmosphere, not only shadow.',
  'White linework often behaves like signal, ritual, or nervous annotation.',
  'Gold marks create a ceremonial register without turning the work into polish.',
  'Many figures are staged as witnesses: looking, holding, refusing, or listening.',
];

export const commissionBriefOptions = {
  formats: ['Portrait', 'Editorial image', 'Book or album artwork', 'Symbolic mixed-media piece'],
  mediums: [
    'Graphite and charcoal',
    'Acrylic and metallic paint',
    'Ink and white linework',
    'Layered mixed media',
  ],
  moods: ['Ceremonial', 'Tender', 'Mythic', 'Haunted', 'Bright and botanical'],
};
