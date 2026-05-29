import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'Enterprise Banking Platform Design — Larnelle Chambers',
  description: 'Improving the usability of a complex internal loan-operations platform through refined task flow, information structure, and interface clarity.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/enterprise-platform',
    title: 'Enterprise Banking Platform Design — Larnelle Chambers',
    description: 'Improving the usability of a complex internal loan-operations platform.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise banking platform case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Banking Platform Design — Larnelle Chambers',
    description: 'Improving the usability of a complex internal loan-operations platform.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/enterprise-platform',
  },
};

export default function EnterprisePlatformPage() {
  return null;
}
