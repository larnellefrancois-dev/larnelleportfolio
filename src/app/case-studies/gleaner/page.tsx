import type { Metadata } from 'next';
import GleanerCaseStudyClient from './GleanerCaseStudyClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Editorial Design System — The Gleaner | Larnelle Chambers',
  description:
    'Contributing to the design system and editorial experience direction for a content-rich publishing platform with focus on structure, consistency, and reading flow.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/gleaner',
    title: 'Editorial Design System — The Gleaner | Larnelle Chambers',
    description:
      'Contributing to the design system and editorial experience for a content-rich publishing platform.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'The Gleaner editorial design system case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Design System — The Gleaner | Larnelle Chambers',
    description:
      'Contributing to the design system and editorial experience for a content-rich publishing platform.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/gleaner',
  },
};

export default function GleanerPage() {
  return <GleanerCaseStudyClient />;
}
