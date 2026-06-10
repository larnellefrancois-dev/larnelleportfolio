import type { Metadata } from 'next';
import MortgageCaseStudyClient from './MortgageCaseStudyClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Mortgage Journey Redesign — Larnelle Chambers',
  description:
    'Redesigning customer-facing mortgage experiences to improve clarity, reduce friction, and make next steps easier to understand and act on.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/mortgage',
    title: 'Mortgage Journey Redesign — Larnelle Chambers',
    description:
      'Redesigning customer-facing mortgage experiences to improve clarity and reduce friction.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Mortgage journey redesign case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Journey Redesign — Larnelle Chambers',
    description:
      'Redesigning customer-facing mortgage experiences to improve clarity and reduce friction.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/mortgage',
  },
};

export default function MortgagePage() {
  return <MortgageCaseStudyClient />;
}
