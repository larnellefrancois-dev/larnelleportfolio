import type { Metadata } from 'next';
import WeLinkCaseStudyClient from './WeLinkCaseStudyClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Caribbean Service Discovery Platform — Larnelle Chambers',
  description:
    'Designing a platform to help users discover skilled workers across the Caribbean through clearer browsing, stronger structure, and practical service discovery.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/welink',
    title: 'Caribbean Service Discovery Platform — Larnelle Chambers',
    description: 'Designing a platform for discovering skilled workers across the Caribbean.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'WeLink service discovery platform case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caribbean Service Discovery Platform — Larnelle Chambers',
    description: 'Designing a platform for discovering skilled workers across the Caribbean.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/welink',
  },
};

export default function WeLinkPage() {
  return <WeLinkCaseStudyClient />;
}
