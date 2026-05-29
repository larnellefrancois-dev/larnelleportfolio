import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Pale Interval — Literature — L.F. Chambers',
  description: 'The Pale Interval — a novel in progress by L.F. Chambers.',
};

export default function ThePaleIntervalPage() {
  return (
    <div className="literature-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '80px 24px',
            overflow: 'hidden',
          }}
        >
          {/* Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1600&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'sepia(0.7) contrast(1.3) brightness(0.4)',
            }}
            role="img"
            aria-label="Dark atmospheric landscape evoking the world of The Pale Interval"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8,5,8,1) 0%, rgba(8,5,8,0.6) 50%, rgba(8,5,8,0.2) 100%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
            <nav
              aria-label="Breadcrumb"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'rgba(179, 36, 53, 0.5)',
                textTransform: 'uppercase',
                marginBottom: '32px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <Link href="/literature" style={{ color: 'inherit', textDecoration: 'none' }}>Literature</Link>
              <span>/</span>
              <span style={{ color: 'rgba(212, 197, 181, 0.6)' }}>The Pale Interval</span>
            </nav>

            <p
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: 'rgba(179, 36, 53, 0.6)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Novel · In Progress
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 400,
                letterSpacing: '0.1em',
                color: 'var(--gold-glow)',
                marginBottom: '24px',
                textShadow: '0 4px 40px rgba(0,0,0,0.8)',
              }}
            >
              The Pale Interval
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body-serif)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'rgba(212, 197, 181, 0.7)',
                lineHeight: 1.7,
                maxWidth: '560px',
              }}
            >
              A novel of signal and silence. Twin moons. A dark mineral landscape. Transmission artifacts from a world between worlds.
            </p>
          </div>
        </section>

        {/* About the Novel */}
        <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              borderLeft: '1px solid rgba(138, 28, 42, 0.3)',
              paddingLeft: '32px',
              marginBottom: '64px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body-serif)',
                fontSize: '1.2rem',
                color: 'rgba(212, 197, 181, 0.8)',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              The Pale Interval is a work of speculative literary fiction set in a world defined by rupture — a geological and atmospheric event that split the sky, altered the moons, and left behind a landscape of dark mineral plains and fragmented signals.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body-serif)',
                fontSize: '1.2rem',
                color: 'rgba(212, 197, 181, 0.8)',
                lineHeight: 1.8,
              }}
            >
              The novel follows a signal archivist navigating the aftermath of the Interval — cataloguing transmissions, decoding fragments, and slowly uncovering the shape of what was lost.
            </p>
          </div>

          {/* Motifs */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'rgba(179, 36, 53, 0.5)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            Motifs & Themes
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '64px',
            }}
          >
            {[
              'Signal Waveforms',
              'Twin Moons',
              'Pale Rupture',
              'Dark Mineral Landscape',
              'Transmission Artifacts',
              'Fragmented Archives',
              'Red-Brown Haze',
              'Negative Space',
              'Data Noise',
              'Memory & Loss',
            ].map((motif) => (
              <span
                key={motif}
                style={{
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(212, 197, 181, 0.5)',
                  padding: '6px 14px',
                  border: '1px solid rgba(138, 28, 42, 0.2)',
                  borderRadius: '2px',
                }}
              >
                {motif}
              </span>
            ))}
          </div>

          {/* CTA Links */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/literature/excerpts"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold-bright)',
                textDecoration: 'none',
                padding: '14px 28px',
                border: '1px solid rgba(212, 178, 113, 0.3)',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            >
              Read Excerpts
            </Link>
            <Link
              href="/literature/worldbuilding"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(212, 197, 181, 0.6)',
                textDecoration: 'none',
                padding: '14px 28px',
                border: '1px solid rgba(138, 28, 42, 0.2)',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            >
              Worldbuilding Archive
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
