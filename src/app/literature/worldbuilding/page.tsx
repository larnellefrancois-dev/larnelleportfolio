import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { HyperFrameLoreStrip, MotionReveal } from '@/components/motion';
import VeyrathWorldEngine from '@/components/literature/VeyrathWorldEngine';
import { paleIntervalGlossary, paleIntervalLocations } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Worldbuilding — The Pale Interval — L.F. Chambers',
  description:
    'Glossary, atlas, and lore from the Veyrath survey records of The Pale Interval — ICSE, NAIAD, Protocol Seven, Kaen, the Knot, and more.',
};

export default function WorldbuildingPage() {
  const anchorFor = (value: string) =>
    `glossary-${value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;

  return (
    <div className="literature-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        <section className="worldbuilding-stage">
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
            <Link href="/literature" style={{ color: 'inherit', textDecoration: 'none' }}>
              Literature
            </Link>
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
              marginBottom: '56px',
            }}
          >
            Glossary, route atlas, and lore from the Veyrath contact record of The Pale Interval.
          </p>

          <MotionReveal style={{ marginBottom: '64px' }} variant="scale">
            <VeyrathWorldEngine />
          </MotionReveal>

          <HyperFrameLoreStrip compact />

          {/* Glossary */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'rgba(179,36,53,0.6)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Glossary
          </h2>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '64px' }}
          >
            {paleIntervalGlossary.map((entry, index) => (
              <MotionReveal
                key={entry.term}
                id={anchorFor(entry.term)}
                delay={index * 35}
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid rgba(138, 28, 42, 0.12)',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                }}
                className="pi-glossary-row"
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
                  {entry.expansion && (
                    <p
                      style={{
                        fontFamily: 'var(--font-body-serif)',
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: 'rgba(212,197,181,0.5)',
                        marginBottom: '6px',
                      }}
                    >
                      {entry.expansion}
                    </p>
                  )}
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
              </MotionReveal>
            ))}
          </div>

          {/* Locations */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'rgba(179,36,53,0.6)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Key Locations
          </h2>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '48px' }}
          >
            {paleIntervalLocations.map((loc) => (
              <div
                key={loc.designation}
                style={{
                  padding: '24px 0',
                  borderBottom: '1px solid rgba(138, 28, 42, 0.12)',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                }}
                className="pi-glossary-row"
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
                    {loc.name}
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
                    {loc.designation} · {loc.risk}
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
                  {loc.environment} {loc.signalNotes}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/literature/archive"
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
              }}
            >
              Enter the Archive
            </Link>
            <Link
              href="/literature/characters"
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
              }}
            >
              Characters
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
