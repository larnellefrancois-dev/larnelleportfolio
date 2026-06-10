import type { Metadata } from 'next';
import PortalHomepage from './portal/PortalHomepage';

export const metadata: Metadata = {
  title: 'L.F. Chambers — Image. Interface. Story.',
  description:
    'Multidisciplinary creative portfolio spanning Art, Product Design, and Literature by L.F. Chambers / Larnelle Chambers.',
  alternates: { canonical: 'https://larnelle.me' },
};

/** Canonical home: the portal gateway. Rendered bare (no shell chrome). */
export default function RootPage() {
  return <PortalHomepage />;
}
