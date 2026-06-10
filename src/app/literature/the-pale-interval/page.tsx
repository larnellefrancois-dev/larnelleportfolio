import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import MailingListSignup from '@/components/literature/MailingListSignup';
import { paleIntervalBook, paleIntervalSeoDescription } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'The Pale Interval by L.F. Chambers — YA Literary Sci-Fi Horror',
  description: paleIntervalSeoDescription,
  openGraph: {
    type: 'book',
    title: 'The Pale Interval by L.F. Chambers — YA Literary Sci-Fi Horror',
    description: paleIntervalSeoDescription,
    url: 'https://larnelle.me/literature/the-pale-interval',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pale Interval by L.F. Chambers',
    description: paleIntervalSeoDescription,
  },
  alternates: { canonical: 'https://larnelle.me/literature/the-pale-interval' },
};

const GOLD = 'var(--gold-glow)';
const SERIF = 'var(--font-body-serif)';
const MONO = 'var(--font-mono-portal)';
const DISPLAY = 'var(--font-display)';
const BODY = 'rgba(212, 197, 181, 0.78)';
const BORDER = 'rgba(138, 28, 42, 0.25)';

const ctaPrimary: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: '0.6rem',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--gold-bright)',
  textDecoration: 'none',
  padding: '14px 28px',
  border: '1px solid rgba(212, 178, 113, 0.4)',
  borderRadius: '2px',
  display: 'inline-block',
};
const ctaGhost: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: '0.6rem',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'rgba(212, 197, 181, 0.7)',
  textDecoration: 'none',
  padding: '14px 28px',
  border: `1px solid ${BORDER}`,
  borderRadius: '2px',
  display: 'inline-block',
};

export default function ThePaleIntervalPage() {
  return (
    <div className="literature-realm" style={{ fontFamily: SERIF }}>
      {/* Book structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: paleIntervalBook.title,
            author: { '@type': 'Person', name: paleIntervalBook.author },
            genre: paleIntervalBook.genre,
            inLanguage: 'en',
            description: paleIntervalBook.shortSynopsis,
            url: 'https://larnelle.me/literature/the-pale-interval',
          }),
        }}
      />

      <main>
        {/* ── Hero: cover + headline ── */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 48px' }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: MONO,
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: 'rgba(179,36,53,0.5)',
              textTransform: 'uppercase',
              marginBottom: '40px',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Link href="/literature" style={{ color: 'inherit', textDecoration: 'none' }}>
              Literature
            </Link>
            <span>/</span>
            <span style={{ color: 'rgba(212,197,181,0.6)' }}>The Pale Interval</span>
          </nav>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
              gap: '48px',
              alignItems: 'center',
            }}
            className="pi-book-hero"
          >
            {/* Cover */}
            <div
              role="img"
              aria-label={paleIntervalBook.coverAlt}
              style={{
                position: 'relative',
                aspectRatio: '2 / 3',
                borderRadius: '6px',
                border: '1px solid rgba(212,178,113,0.25)',
                overflow: 'hidden',
                boxShadow: '0 32px 80px -28px rgba(0,0,0,0.85)',
                background:
                  'radial-gradient(60% 40% at 50% 22%, rgba(179,36,53,0.45), transparent 70%), linear-gradient(160deg, #1c1012, #07050a)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '32px',
              }}
            >
              {paleIntervalBook.coverImg ? (
                <img
                  src={paleIntervalBook.coverImg}
                  alt={paleIntervalBook.coverAlt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '16%',
                      width: '58%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        width: '2.4rem',
                        height: '2.4rem',
                        borderRadius: '50%',
                        border: '1px solid rgba(125,167,217,0.6)',
                      }}
                    />
                    <span
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        border: '1px solid rgba(179,36,53,0.7)',
                      }}
                    />
                  </div>
                  <span
                    className="pi-rupture"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '52%',
                      width: '2px',
                      height: '52%',
                      background: 'linear-gradient(180deg, #f7e6b7, transparent)',
                      filter: 'blur(1px)',
                    }}
                  />
                  <h1
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      color: GOLD,
                      zIndex: 1,
                    }}
                  >
                    The Pale Interval
                  </h1>
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(212,178,113,0.7)',
                      marginTop: '16px',
                      zIndex: 1,
                    }}
                  >
                    L.F. Chambers
                  </p>
                </>
              )}
            </div>

            {/* Headline copy */}
            <div>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(179,36,53,0.7)',
                  marginBottom: '20px',
                }}
              >
                {paleIntervalBook.genre} · Novel in Progress
              </p>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: GOLD,
                  lineHeight: 1.1,
                  marginBottom: '8px',
                }}
              >
                The Pale Interval
              </h2>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,197,181,0.6)',
                  marginBottom: '28px',
                }}
              >
                by L.F. Chambers
              </p>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: '1.35rem',
                  fontStyle: 'italic',
                  color: '#f0e6d3',
                  lineHeight: 1.55,
                  marginBottom: '32px',
                }}
              >
                {paleIntervalBook.logline}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/literature/excerpts" style={ctaPrimary}>
                  Read Excerpts
                </Link>
                <Link href="/literature/archive" style={ctaGhost}>
                  Enter the Archive
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Synopsis ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'rgba(179,36,53,0.6)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Synopsis
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: '1.3rem',
              color: '#f0e6d3',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            {paleIntervalBook.shortSynopsis}
          </p>
          <div
            style={{
              borderLeft: `1px solid ${BORDER}`,
              paddingLeft: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {paleIntervalBook.longSynopsis.map((para, i) => (
              <p
                key={i}
                style={{ fontFamily: SERIF, fontSize: '1.15rem', color: BODY, lineHeight: 1.8 }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ── Motifs ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 24px 48px' }}>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'rgba(179,36,53,0.6)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Visual Motifs
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {paleIntervalBook.motifs.map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,197,181,0.5)',
                  padding: '6px 14px',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '2px',
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </section>

        {/* ── Mailing list + buy links ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 24px 96px' }}>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: '4px',
              padding: '40px',
              backgroundColor: 'rgba(138,28,42,0.04)',
            }}
          >
            <MailingListSignup />
            <div
              style={{
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: `1px solid ${BORDER}`,
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,197,181,0.5)',
                }}
              >
                Availability:
              </span>
              {paleIntervalBook.buyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-disabled={!link.available}
                  style={{
                    ...ctaGhost,
                    opacity: link.available ? 1 : 0.55,
                    pointerEvents: link.available ? 'auto' : 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
