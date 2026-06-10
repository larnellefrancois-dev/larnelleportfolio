import type { Metadata } from 'next';
import MobileBankingClient from './MobileBankingClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Mobile Banking App Design — Larnelle Chambers',
  description:
    'Improving a large-scale mobile banking app through design system adoption, component creation, and quality support. 1M+ downloads, 4.6★ rating.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/mobile-banking',
    title: 'Mobile Banking App Design — Larnelle Chambers',
    description:
      'Improving a large-scale mobile banking app through design system adoption, component creation, and quality support.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Mobile banking app design case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Banking App Design — Larnelle Chambers',
    description: 'Improving a large-scale mobile banking app through design system adoption.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/mobile-banking',
  },
};

export default function MobileBankingPage() {
  return <MobileBankingClient />;
}
