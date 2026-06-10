import React from 'react';
import Link from 'next/link';
import { CommissionBriefBuilder } from '@/components/creative/CreativeExperiences';

export const metadata = {
  title: 'Commissions — Art — L.F. Chambers',
  description: 'Commission and collaboration information for art projects by L.F. Chambers.',
};

export default function ArtCommissionsPage() {
  return (
    <div className="art-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        <section style={{ padding: '64px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>
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
            <span style={{ color: 'rgba(212, 178, 113, 0.7)' }}>Commissions</span>
          </nav>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'var(--gold-glow)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            Commissions
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body-serif)',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: 'rgba(240, 230, 211, 0.7)',
              lineHeight: 1.7,
              marginBottom: '48px',
            }}
          >
            I accept a limited number of commissions each year for original works, editorial
            illustration, and creative collaborations. Each commission is approached with the same
            care and intention as personal work.
          </p>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '64px' }}
          >
            {[
              {
                type: 'Original Works',
                desc: 'Paintings, drawings, and mixed media pieces for private collectors.',
              },
              {
                type: 'Editorial Illustration',
                desc: 'Illustration for books, publications, and editorial projects.',
              },
              {
                type: 'Creative Collaboration',
                desc: 'Cross-disciplinary projects at the intersection of art, design, and narrative.',
              },
            ].map((item) => (
              <div
                key={item.type}
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid rgba(212, 178, 113, 0.1)',
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(212, 178, 113, 0.4)',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                    paddingTop: '4px',
                    minWidth: '120px',
                  }}
                >
                  {item.type}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body-serif)',
                    fontSize: '1rem',
                    color: 'rgba(240, 230, 211, 0.6)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="mailto:chambersuiux@gmail.com?subject=Art Commission Inquiry"
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold-bright)',
              textDecoration: 'none',
              padding: '16px 36px',
              border: '1px solid rgba(212, 178, 113, 0.3)',
              borderRadius: '2px',
              display: 'inline-block',
            }}
          >
            Inquire About a Commission
          </a>

          <CommissionBriefBuilder />
        </section>
      </main>
    </div>
  );
}
