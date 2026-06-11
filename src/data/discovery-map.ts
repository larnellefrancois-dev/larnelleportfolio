/* Single source of truth for the Archive's progression system.
   Every discoverable artefact and every achievement is defined here so the
   HUD counter, the toasts, and the unlock gates all agree on one ledger. */

export type RealmId = 'home' | 'product' | 'art' | 'literature';

/** Realms that count toward the Triune Key (the portal itself is not a realm). */
export const TRACKED_REALMS = ['product', 'art', 'literature'] as const;

/** ICSE protocol documents that can be declassified in /literature/archive. */
export const PROTOCOL_DOCS = ['p7-001', 'p7-002', 'p7-003'] as const;

/** Veyrath survey locations on the world map (ids match location-*.svg plates). */
export const MAP_LOCATIONS = [
  'csb-31b',
  'cal-r',
  'vy-sp',
  'vy-dw',
  'vy-sm',
  'vy-mk',
  'vy-cb',
  'vy-wp',
] as const;

/** Published excerpts of The Pale Interval (ids from literatureExcerpts). */
export const EXCERPTS = ['interval-01', 'interval-02', 'interval-03'] as const;

/** Case study slugs tracked for the Systems Analyst achievement. */
export const CASE_STUDIES = [
  'mobile-banking',
  'ncb-design-system',
  'banking-loans',
  'auto',
  'mortgage',
  'welink',
  'gleaner',
  'type-design',
  'enterprise-loans',
  'enterprise-platform',
  'accessibility-programme',
  'design-ops',
  'hsbc-design-system',
] as const;

/** Signal codes accepted by the decoder console. */
export const SIGNAL_CODES = ['VY-0031'] as const;

/** Artworks viewed in the lightbox needed for Curator. */
export const CURATOR_ARTWORK_TARGET = 10;

export interface ProgressSnapshot {
  visitedRealms: string[];
  declassifiedDocs: string[];
  visitedLocations: string[];
  readExcerpts: string[];
  viewedArtworks: string[];
  openedCaseStudies: string[];
  decodedSignals: string[];
}

export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  /** What the unlock grants, surfaced in the toast. */
  reward: string;
  isUnlocked: (p: ProgressSnapshot) => boolean;
}

const hasAll = (have: string[], want: readonly string[]) => want.every((id) => have.includes(id));

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: 'triune-key',
    title: 'Triune Key',
    description: 'All three realms of the archive entered.',
    reward: 'Deep Archive section unsealed — Scriptorium.',
    isUnlocked: (p) => hasAll(p.visitedRealms, TRACKED_REALMS),
  },
  {
    id: 'protocol-seven',
    title: 'Protocol Seven Clearance',
    description: 'Every Protocol Seven document declassified.',
    reward: 'Extended record lines un-redacted across the archive.',
    isUnlocked: (p) => hasAll(p.declassifiedDocs, PROTOCOL_DOCS),
  },
  {
    id: 'cartographer',
    title: 'Cartographer',
    description: 'Every surveyed location on Veyrath charted.',
    reward: 'Annotated surface excerpt unlocked.',
    isUnlocked: (p) => hasAll(p.visitedLocations, MAP_LOCATIONS),
  },
  {
    id: 'close-reader',
    title: 'Close Reader',
    description: 'All published excerpts of The Pale Interval read.',
    reward: 'A hidden dossier surfaces among the characters.',
    isUnlocked: (p) => hasAll(p.readExcerpts, EXCERPTS),
  },
  {
    id: 'signal-acquired',
    title: 'Signal Acquired',
    description: 'The repeating transmission decoded.',
    reward: 'Hyperframe ARCHIVE-RUPTURE viewer unlocked.',
    isUnlocked: (p) => hasAll(p.decodedSignals, SIGNAL_CODES),
  },
  {
    id: 'curator',
    title: 'Curator',
    description: `${CURATOR_ARTWORK_TARGET} works studied in the gallery.`,
    reward: 'Process notes layer enabled in the viewer.',
    isUnlocked: (p) => p.viewedArtworks.length >= CURATOR_ARTWORK_TARGET,
  },
  {
    id: 'systems-analyst',
    title: 'Systems Analyst',
    description: 'Every case study in Systema opened.',
    reward: 'Making-of annotations unlocked.',
    isUnlocked: (p) => hasAll(p.openedCaseStudies, CASE_STUDIES),
  },
];

/** Total countable discoveries for the HUD "ARCHIVE n/N" readout. */
export const DISCOVERY_TOTAL =
  TRACKED_REALMS.length +
  PROTOCOL_DOCS.length +
  MAP_LOCATIONS.length +
  EXCERPTS.length +
  SIGNAL_CODES.length +
  CURATOR_ARTWORK_TARGET +
  CASE_STUDIES.length;

export function countDiscoveries(p: ProgressSnapshot): number {
  return (
    p.visitedRealms.filter((r) => (TRACKED_REALMS as readonly string[]).includes(r)).length +
    p.declassifiedDocs.length +
    p.visitedLocations.length +
    p.readExcerpts.length +
    p.decodedSignals.length +
    Math.min(p.viewedArtworks.length, CURATOR_ARTWORK_TARGET) +
    p.openedCaseStudies.length
  );
}
