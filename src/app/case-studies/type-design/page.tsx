import type { Metadata } from 'next';
import TypeDesignCaseStudyClient from './TypeDesignCaseStudyClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Custom Typeface Design for Banking — Larnelle Chambers',
  description:
    'Designing a custom institutional typeface from stakeholder discovery through geometric construction, glyph balancing, and optimized deployment across digital banking infrastructure.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/type-design',
    title: 'Custom Typeface Design for Banking — Larnelle Chambers',
    description: 'Designing a custom institutional typeface for digital banking infrastructure.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Custom typeface design case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Typeface Design for Banking — Larnelle Chambers',
    description: 'Designing a custom institutional typeface for digital banking infrastructure.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/type-design',
  },
};

export default function TypeDesignPage() {
  return <TypeDesignCaseStudyClient />;
}
