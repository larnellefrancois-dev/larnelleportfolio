import type { Metadata } from 'next';
import React from 'react';
import ArtworkGalleryViewer from '@/components/art/ArtworkGalleryViewer';
import { StudioWall } from '@/components/creative/CreativeExperiences';
import {
  SceneFrame,
  SceneScroller,
  ArtifactViewer,
} from '@/components/cinematic/CinematicPrimitives';
import { galleryArtworks } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Gallery — Art — L.F. Chambers',
  description: 'A curated gallery of artworks by L.F. Chambers.',
};

export default function ArtGalleryPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="art"
        eyebrow="Ars Visualis // Exhibition 02"
        title="The Gallery Keeps Its Own Light"
        lede="A curated collection across digital, traditional, and mixed media. Open any work to study it under glass — the archive remembers what you have seen."
        meta={[
          { label: 'Works', value: String(galleryArtworks.length) },
          { label: 'Medium', value: 'Mixed' },
          { label: 'Updated', value: '2026' },
        ]}
        visual={
          <ArtifactViewer
            src={galleryArtworks[0]?.img ?? '/assets/images/art/nocturne-bloom.jpg'}
            alt={galleryArtworks[0]?.alt ?? 'Featured artwork'}
            title={galleryArtworks[0]?.title ?? 'Featured work'}
            meta="Hanging now"
          />
        }
      />

      <section className="scene-frame scene-frame--art" aria-label="Studio wall">
        <div
          style={{ width: 'min(1320px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Studio wall // working surfaces</p>
          <StudioWall />
        </div>
      </section>

      <section className="scene-frame scene-frame--art" aria-label="Gallery works">
        <div
          style={{ width: 'min(1320px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Collection // select a work to view</p>
          <ArtworkGalleryViewer artworks={galleryArtworks} />
        </div>
      </section>
    </SceneScroller>
  );
}
