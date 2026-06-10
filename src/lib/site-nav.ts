/**
 * site-nav.ts — single source of truth for the unified navigation model.
 *
 * One nav model drives the AppShell header, the persistent section
 * switcher, the mobile menu, and the footer across every route. Sections
 * map 1:1 to the three content verticals plus the portal home.
 */

export type SectionId = 'home' | 'product' | 'art' | 'literature';

export interface Section {
  id: SectionId;
  /** Plain-English label (always visible). */
  label: string;
  /** Arcane secondary flavor. */
  arcane: string;
  href: string;
  /** Short descriptor for cards / switcher tooltips. */
  blurb: string;
}

/** The three switchable verticals (home/portal is handled separately). */
export const SECTIONS: Section[] = [
  {
    id: 'product',
    label: 'Product Design',
    arcane: 'Systema',
    href: '/product-design',
    blurb: 'Case studies, systems, and interfaces.',
  },
  {
    id: 'art',
    label: 'Art',
    arcane: 'Ars Visualis',
    href: '/art',
    blurb: 'Traditional work, studies, and commissions.',
  },
  {
    id: 'literature',
    label: 'Literature',
    arcane: 'Scriptorium',
    href: '/literature',
    blurb: 'The Pale Interval and recovered archives.',
  },
];

/** Secondary links shown per section in the header sub-nav + mobile menu. */
export const SECTION_NAV: Record<SectionId, { label: string; href: string }[]> = {
  home: [],
  product: [
    { label: 'Overview', href: '/product-design' },
    { label: 'Case Studies', href: '/product-design/case-studies' },
    { label: 'Archive', href: '/product-design/archive' },
    { label: 'Design Systems', href: '/product-design/design-systems' },
    { label: 'Writing', href: '/product-design/writing' },
    { label: 'About', href: '/product-design/about' },
  ],
  art: [
    { label: 'Overview', href: '/art' },
    { label: 'Gallery', href: '/art/gallery' },
    { label: 'Projects', href: '/art/projects' },
    { label: 'Process', href: '/art/process' },
    { label: 'Commissions', href: '/art/commissions' },
  ],
  literature: [
    { label: 'Overview', href: '/literature' },
    { label: 'The Pale Interval', href: '/literature/the-pale-interval' },
    { label: 'Archive', href: '/literature/archive' },
    { label: 'Excerpts', href: '/literature/excerpts' },
    { label: 'Characters', href: '/literature/characters' },
    { label: 'Worldbuilding', href: '/literature/worldbuilding' },
    { label: 'Author', href: '/literature/author' },
  ],
};

/** Identity lockup. Product Design uses the professional name. */
export function brandFor(section: SectionId): { name: string; tagline: string } {
  if (section === 'product') {
    return { name: 'Larnelle Chambers', tagline: 'Product & Systems Design' };
  }
  return { name: 'L.F. Chambers', tagline: 'Image · Interface · Story' };
}

/** Resolve which section a pathname belongs to (for theming + active state). */
export function sectionFromPath(pathname: string): SectionId {
  if (pathname === '/' || pathname === '' || pathname.startsWith('/portal')) return 'home';
  if (
    pathname.startsWith('/product-design') ||
    pathname.startsWith('/case-studies') ||
    pathname.startsWith('/work') ||
    pathname.startsWith('/writing') ||
    pathname.startsWith('/about')
  )
    return 'product';
  if (pathname.startsWith('/art')) return 'art';
  if (pathname.startsWith('/literature')) return 'literature';
  return 'home';
}

/** data-realm value used by the theme system. */
export function realmFromSection(section: SectionId): 'home' | 'product' | 'art' | 'literature' {
  return section;
}

export const CONTACT_EMAIL = 'chambersuiux@gmail.com';
