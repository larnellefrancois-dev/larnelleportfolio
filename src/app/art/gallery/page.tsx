import type { Metadata } from 'next';
import React from 'react';
import ArtworkGalleryViewer from '@/components/art/ArtworkGalleryViewer';
import { AmbientSoundControl, StudioWall } from '@/components/creative/CreativeExperiences';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import { galleryArtworks } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Gallery — Art — L.F. Chambers',
  description: 'A curated gallery of artworks by L.F. Chambers.',
};

export default function ArtGalleryPage() {
  return (
    <DetailPageTemplate
      realm="art"
      breadcrumbs={[
        { label: 'Art', href: '/art' },
        { label: 'Gallery', href: '/art/gallery' },
      ]}
      arcaneIndex="M·I // VISIO"
      title="Gallery"
      subtitle="A curated collection of works spanning digital, traditional, and mixed media."
      meta={[
        { label: 'Medium', value: 'Mixed' },
        { label: 'Works', value: `${galleryArtworks.length}` },
        { label: 'Updated', value: '2026' },
      ]}
      navLinks={[
        { label: 'Art Home', href: '/art', direction: 'prev' },
        { label: 'Projects', href: '/art/projects', direction: 'next' },
      ]}
      sysLabel="SYS_LOC: REALM_VISIO"
    >
      <StudioWall />
      <ArtworkGalleryViewer artworks={galleryArtworks} />
      <AmbientSoundControl />
    </DetailPageTemplate>
  );
}
