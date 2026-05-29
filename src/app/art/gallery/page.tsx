import type { Metadata } from 'next';
import React from 'react';
import DetailPageTemplate from '@/components/DetailPageTemplate';

export const metadata: Metadata = {
  title: 'Gallery — Art — L.F. Chambers',
  description: 'A curated gallery of artworks by L.F. Chambers.',
};

const artworks = [
  {
    id: 1,
    title: 'Chromatic Studies I',
    medium: 'Digital / Mixed Media',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1564573435382-0ab8293551c6',
    alt: 'Abstract expressionist painting with warm gold and crimson tones, layered textures',
  },
  {
    id: 2,
    title: 'Architectural Fragment II',
    medium: 'Ink',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1725384785187-27d597e3a943',
    alt: 'Detailed ink drawing of architectural ruins with fine linework',
  },
  {
    id: 3,
    title: 'Interval Study',
    medium: 'Oil on Canvas',
    year: '2024',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_17af69bf7-1775653560360.png',
    alt: 'Oil painting with deep atmospheric tones and painterly brushwork',
  },
  {
    id: 4,
    title: 'Signal & Noise',
    medium: 'Digital',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1724358750966-3fee269c728a',
    alt: 'Digital artwork with signal-like patterns and noise textures in dark tones',
  },
  {
    id: 5,
    title: 'Pale Rupture',
    medium: 'Mixed Media',
    year: '2025',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1937f5bcd-1773166031804.png',
    alt: 'Mixed media artwork with pale tones and dramatic contrast',
  },
  {
    id: 6,
    title: 'Mineral Dark',
    medium: 'Charcoal',
    year: '2024',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_156daa527-1779910005320.png',
    alt: 'Charcoal landscape drawing with dark mineral textures and atmospheric depth',
  },
];

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
        { label: 'Works', value: `${artworks.length}` },
        { label: 'Updated', value: '2025' },
      ]}
      navLinks={[
        { label: 'Art Home', href: '/art', direction: 'prev' },
        { label: 'Projects', href: '/art/projects', direction: 'next' },
      ]}
      sysLabel="SYS_LOC: REALM_VISIO"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
      >
        {artworks.map((work) => (
          <div
            key={work.id}
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              backgroundColor: '#1a0f08',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${work.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'sepia(0.3) contrast(1.1)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(13,8,4,0.95) 0%, rgba(13,8,4,0.3) 50%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  color: '#f7e6b7',
                  marginBottom: '4px',
                }}
              >
                {work.title}
              </p>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.5rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(212,178,113,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                {work.medium} · {work.year}
              </p>
            </div>
            <span
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                clip: 'rect(0,0,0,0)',
              }}
            >
              {work.alt}
            </span>
          </div>
        ))}
      </div>
    </DetailPageTemplate>
  );
}