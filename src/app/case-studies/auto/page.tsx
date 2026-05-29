import type { Metadata } from 'next';
import AutoCaseStudyClient from './AutoCaseStudyClient';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'Auto Loan Journey Simplification — Larnelle Chambers',
  description: 'Improving the structure and usability of auto loan journeys so users could better understand the offering, their options, and how to move forward.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/auto',
    title: 'Auto Loan Journey Simplification — Larnelle Chambers',
    description: 'Improving the structure and usability of auto loan journeys for better decision-making.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Auto loan journey case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Loan Journey Simplification — Larnelle Chambers',
    description: 'Improving the structure and usability of auto loan journeys for better decision-making.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/auto',
  },
};

export default function AutoPage() {
  return <AutoCaseStudyClient />;
}
