import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Literature — L.F. Chambers',
  description: 'Worldbuilding, narrative threads, and echoes from the dark forest. Literary work by L.F. Chambers.',
};

export default function LiteraturePage() {
  return (
    <div data-realm="literature" className="literature-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        {/* Hero */}
        <section
          style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px 24px',
            position: 'relative',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(94, 13, 22, 0.15) 0%, transparent 70%)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'rgba(179, 36, 53, 0.4)',
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: 'rgba(179, 36, 53, 0.3)' }} />
            M·III // FABULA
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: 'rgba(179, 36, 53, 0.3)' }} />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'var(--gold-glow)',
              textTransform: 'uppercase',
              marginBottom: '16px',
              textShadow: '0 4px 40px rgba(179, 36, 53, 0.2)',
            }}
          >
            Literature
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              letterSpacing: '0.3em',
              color: 'rgba(179, 36, 53, 0.5)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            Scriptorium
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body-serif)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'rgba(212, 197, 181, 0.7)',
              maxWidth: '560px',
              lineHeight: 1.6,
              marginBottom: '48px',
            }}
          >
            Worldbuilding, narrative threads, and echoes from the dark forest.
          </p>

          <nav aria-label="Literature sections" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'The Pale Interval', href: '/literature/the-pale-interval' },
              { label: 'Excerpts', href: '/literature/excerpts' },
              { label: 'Worldbuilding', href: '/literature/worldbuilding' },
              { label: 'Author', href: '/literature/author' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(212, 197, 181, 0.8)',
                  textDecoration: 'none',
                  padding: '12px 28px',
                  border: '1px solid rgba(138, 28, 42, 0.3)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(138, 28, 42, 0.05)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        {/* Current Project Feature */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              color: 'rgba(179, 36, 53, 0.5)',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            Current Project
          </h2>

          <Link
            href="/literature/the-pale-interval"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2px',
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid rgba(138, 28, 42, 0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#120508' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=800&auto=format&fit=crop')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'sepia(0.6) contrast(1.2) brightness(0.6)',
                }}
                role="img"
                aria-label="Dark atmospheric landscape with pale light suggesting the novel The Pale Interval"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,5,8,0.4) 0%, transparent 60%)' }} />
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(179, 36, 53, 0.5)',
                  textTransform: 'uppercase',
                }}
                aria-hidden="true"
              >
                Novel in Progress
              </div>
            </div>

            <div style={{ padding: '48px', backgroundColor: 'rgba(138, 28, 42, 0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(179, 36, 53, 0.5)', textTransform: 'uppercase', marginBottom: '20px' }}>
                Novel · In Progress
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, letterSpacing: '0.1em', color: 'var(--gold-glow)', marginBottom: '24px', lineHeight: 1.2 }}>
                The Pale Interval
              </h3>
              <p style={{ fontFamily: 'var(--font-body-serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(212, 197, 181, 0.65)', lineHeight: 1.7, marginBottom: '32px' }}>
                A novel of signal and silence. Twin moons. A dark mineral landscape. Transmission artifacts from a world between worlds.
              </p>
              <span style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#e05a6a', borderBottom: '1px solid rgba(224, 90, 106, 0.3)', paddingBottom: '4px', display: 'inline-block' }}>
                Enter the Archive
              </span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
