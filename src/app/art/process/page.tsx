import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process — Art — L.F. Chambers',
  description:
    'Process, sketchbook pages, and studio documentation behind the traditional art of L.F. Chambers.',
};

interface ProcessItem {
  title: string;
  stage: string;
  note: string;
  img: string;
  alt: string;
}

const processItems: ProcessItem[] = [
  {
    title: 'Line Density',
    stage: 'Ink',
    note: 'A face built through repetition, pressure, and restless contour before anything settles into tone.',
    img: '/assets/images/art/for-the-love-of-ink.jpg',
    alt: 'Black ink portrait made from dense overlapping scribbled lines.',
  },
  {
    title: 'Tonal Ground',
    stage: 'Charcoal',
    note: 'Large value masses and soft transitions hold the gesture before detail, ornament, or color enter the surface.',
    img: '/assets/images/art/hand-to-crown.jpg',
    alt: 'Charcoal portrait with a hand lifted into the hair and soft tonal shading.',
  },
  {
    title: 'Color Field',
    stage: 'Paint',
    note: 'A saturated field sets the emotional temperature, then graphite and white marks pull the figure back into focus.',
    img: '/assets/images/art/red-moon-profile.jpg',
    alt: 'Red-ground mixed-media profile portrait with silver circle and white markings.',
  },
  {
    title: 'Surface Archive',
    stage: 'Collage',
    note: 'Handwritten fragments, grids, and repeated symbols become an emotional record around the figure.',
    img: '/assets/images/art/shine-archive.jpg',
    alt: 'Dense mixed-media piece with handwritten notes, grids, symbols, and a central figure.',
  },
];

const STAGES = [
  { label: 'Observe', value: '01' },
  { label: 'Sketch', value: '02' },
  { label: 'Block-in', value: '03' },
  { label: 'Resolve', value: '04' },
];

export default function ArtProcessPage() {
  return (
    <div className="art-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        <section style={{ padding: '64px 24px 80px', maxWidth: '1000px', margin: '0 auto' }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: 'rgba(212, 178, 113, 0.4)',
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Link href="/art" style={{ color: 'inherit', textDecoration: 'none' }}>
              Art
            </Link>
            <span>/</span>
            <span style={{ color: 'rgba(212, 178, 113, 0.7)' }}>Process</span>
          </nav>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'var(--gold-glow)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Process
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body-serif)',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: 'rgba(240, 230, 211, 0.7)',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '60ch',
            }}
          >
            Sketchbook pages, studio documentation, and the working stages behind finished pieces. A
            space for the thinking, not just the result.
          </p>

          {/* Working method */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1px',
              marginBottom: '64px',
            }}
          >
            {STAGES.map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: 'rgba(26,15,8,0.6)',
                  padding: '24px',
                  border: '1px solid rgba(212,178,113,0.15)',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    color: '#f7e6b7',
                    marginBottom: '6px',
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(212,178,113,0.45)',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Process documentation grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '64px',
            }}
          >
            {processItems.map((item) => (
              <article
                key={item.title}
                style={{
                  border: '1px solid rgba(212,178,113,0.15)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(26,15,8,0.4)',
                }}
              >
                <div
                  role="img"
                  aria-label={item.alt}
                  style={{
                    aspectRatio: '4 / 3',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'rgba(212,178,113,0.4)',
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    backgroundImage: `url('${item.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono-portal)',
                      fontSize: '0.5rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(212,178,113,0.45)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.stage}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                      color: '#f7e6b7',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body-serif)',
                      fontSize: '1rem',
                      color: 'rgba(240,230,211,0.6)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Nav */}
          <nav
            aria-label="Page navigation"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(212,178,113,0.15)',
              paddingTop: '32px',
            }}
          >
            <Link
              href="/art/projects"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,178,113,0.5)',
                textDecoration: 'none',
              }}
            >
              ← Projects
            </Link>
            <Link
              href="/art/commissions"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,178,113,0.5)',
                textDecoration: 'none',
                marginLeft: 'auto',
              }}
            >
              Commissions →
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
