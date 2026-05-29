import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Worldbuilding — Literature — L.F. Chambers',
  description: 'Worldbuilding archive, glossary, and story material for The Pale Interval by L.F. Chambers.',
};

const entries = [
  {
    term: 'The Interval',
    category: 'Event',
    definition: 'The rupture event that split the sky and altered the atmospheric and geological composition of the world. Its exact cause remains disputed in the archive records. Duration: approximately 72 hours. Aftermath: ongoing.',
  },
  {
    term: 'The Pale',
    category: 'Geography',
    definition: 'The vast mineral plain that emerged following the Interval. Characterized by pale grey-white mineral deposits, low atmospheric pressure, and persistent signal interference. Navigation is possible but unreliable.',
  },
  {
    term: 'Signal Archive',
    category: 'Institution',
    definition: 'The institution responsible for cataloguing, recovering, and interpreting transmission fragments from before, during, and after the Interval. Located at the edge of the Pale. Staff: classified.',
  },
  {
    term: 'The Second Moon',
    category: 'Astronomical',
    definition: 'A smaller, reddish celestial body that appeared on Day 43 post-Interval. Its origin is unknown. It does not follow the orbital patterns of the original moon. Some archivists believe it was always present but invisible.',
  },
  {
    term: 'Transmission Fragment',
    category: 'Artefact',
    definition: 'Partial signal recordings recovered from the Pale. Fragments are classified by confidence rating (0.0–1.0) and source proximity. Most fragments are below 0.5 confidence. None have been fully decoded.',
  },
  {
    term: 'The Archivist',
    category: 'Character',
    definition: 'The unnamed protagonist of The Pale Interval. A signal archivist assigned to the edge station. Background: redacted. Current status: active.',
  },
];

export default function WorldbuildingPage() {
  return (
    <div className="literature-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        <section style={{ padding: '64px 24px 80px', maxWidth: '900px', margin: '0 auto' }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: 'rgba(179, 36, 53, 0.4)',
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Link href="/literature" style={{ color: 'inherit', textDecoration: 'none' }}>Literature</Link>
            <span>/</span>
            <span style={{ color: 'rgba(212, 197, 181, 0.6)' }}>Worldbuilding</span>
          </nav>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'var(--gold-glow)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Worldbuilding Archive
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body-serif)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'rgba(212, 197, 181, 0.55)',
              marginBottom: '64px',
            }}
          >
            Glossary, archive entries, and story material for The Pale Interval.
          </p>

          {/* Archive entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {entries.map((entry) => (
              <div
                key={entry.term}
                style={{
                  padding: '32px 0',
                  borderBottom: '1px solid rgba(138, 28, 42, 0.12)',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      letterSpacing: '0.05em',
                      color: 'var(--gold-glow)',
                      marginBottom: '6px',
                    }}
                  >
                    {entry.term}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono-portal)',
                      fontSize: '0.5rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(179, 36, 53, 0.5)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {entry.category}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body-serif)',
                    fontSize: '1rem',
                    color: 'rgba(212, 197, 181, 0.65)',
                    lineHeight: 1.7,
                  }}
                >
                  {entry.definition}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
