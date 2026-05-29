import type { Metadata } from 'next';
import PortalHomepage from '../portal/PortalHomepage';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'L.F. Chambers — Image. Interface. Story.',
  description: 'A multidisciplinary creative portal. Art, Product Design, and Literature by L.F. Chambers.',
  openGraph: {
    type: 'website',
    url: 'https://larnellepo4855.builtwithrocket.new/homepage',
    title: 'L.F. Chambers — Image. Interface. Story.',
    description: 'A multidisciplinary creative portal. Art, Product Design, and Literature.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'L.F. Chambers — multidisciplinary creative portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L.F. Chambers — Image. Interface. Story.',
    description: 'A multidisciplinary creative portal. Art, Product Design, and Literature.',
    images: ['/assets/images/app_logo.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/homepage',
  },
};

export default function HomepagePage() {
  return <PortalHomepage />;
}