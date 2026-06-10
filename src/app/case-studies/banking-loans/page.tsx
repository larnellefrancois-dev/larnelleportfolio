import type { Metadata } from 'next';
import BankingLoansClient from './BankingLoansClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Internal Loans Management Platform — Larnelle Chambers',
  description:
    'Streamlining an internal loans management platform through improved task flow, information structure, and interface clarity. 40% faster tasks, +28 NPS points.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/banking-loans',
    title: 'Internal Loans Management Platform — Larnelle Chambers',
    description:
      'Streamlining an internal loans management platform through improved task flow and interface clarity.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Banking loans management platform case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internal Loans Management Platform — Larnelle Chambers',
    description:
      'Streamlining an internal loans management platform through improved task flow and interface clarity.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/banking-loans',
  },
};

export default function BankingLoansPage() {
  return <BankingLoansClient />;
}
