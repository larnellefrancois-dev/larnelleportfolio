import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'Enterprise Loans Platform — Larnelle Chambers',
  description: 'Improved the usability of a complex internal loan-operations platform used by internal stakeholders by refining task flow, information structure, and interface clarity.',
  openGraph: {
    type: 'article',
    url: 'https://larnellepo4855.builtwithrocket.new/work/enterprise-loans',
    title: 'Enterprise Loans Platform — Larnelle Chambers',
    description: 'Improved the usability of a complex internal loan-operations platform.',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise loans platform project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Loans Platform — Larnelle Chambers',
    description: 'Improved the usability of a complex internal loan-operations platform.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/work/enterprise-loans',
  },
};

export default function EnterpriseLoanPage() {
  return null;
}
