import type { Metadata } from 'next';
import React from 'react';
import SectionLanding from '@/components/templates/SectionLanding';
import { galleryArtworks } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'L.F. Chambers — Traditional Art & Visual Work',
  description:
    'The art realm of L.F. Chambers — traditional and mixed-media work, studies, projects, process, and commissions.',
  alternates: { canonical: 'https://larnelle.me/art' },
};

/** Warm, gallery-grade radial motif for the art hero. */
function ArtMotif() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(70% 60% at 25% 20%, rgba(224,161,85,0.25), transparent 60%),' +
          'radial-gradient(60% 70% at 85% 80%, rgba(184,65,47,0.2), transparent 60%)',
      }}
    />
  );
}

export default function ArtPage() {
  const featured = galleryArtworks.slice(0, 6);
  return (
    <SectionLanding
      eyebrow="Ars Visualis · Art"
      title="Pigment, surface, and the discipline of looking."
      lede="Traditional and mixed-media work — paintings, drawings, studies, and commissions. A gallery, a sketchbook, and the process in between."
      actions={[
        { label: 'Enter the gallery', href: '/art/gallery', primary: true },
        { label: 'Commissions', href: '/art/commissions' },
      ]}
      featuredTitle="Selected works"
      featuredDesc="A rotating selection across media. The full collection lives in the gallery."
      features={featured.map((a) => ({
        title: a.title,
        meta: `${a.medium} · ${a.year}`,
        excerpt: a.description ?? a.alt,
        href: '/art/gallery',
        img: a.img,
        alt: a.alt,
      }))}
      cta={{
        title: 'Commissions & collaborations',
        desc: 'A limited number of commissions each year across painting, illustration, and mixed media.',
        actions: [
          { label: 'Inquire', href: '/contact', primary: true },
          { label: 'See the process', href: '/art/process' },
        ],
      }}
      motif={<ArtMotif />}
    />
  );
}
