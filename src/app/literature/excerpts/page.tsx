import type { Metadata } from 'next';
import React from 'react';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import { literatureExcerpts } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Excerpts — The Pale Interval — L.F. Chambers',
  description: 'Selected excerpts from The Pale Interval by L.F. Chambers — a YA literary sci-fi horror novel of grief, signal, and recovered transmission.',
};

export default function ExcerptsPage() {
  return (
    <DetailPageTemplate
      realm="literature"
      breadcrumbs={[
        { label: 'Literature', href: '/literature' },
        { label: 'Excerpts', href: '/literature/excerpts' },
      ]}
      arcaneIndex="M·III // SCRIPTORIUM"
      title="Excerpts"
      subtitle="Selected passages from The Pale Interval."
      meta={[
        { label: 'Source', value: 'The Pale Interval' },
        { label: 'Fragments', value: `${literatureExcerpts.length}` },
      ]}
      navLinks={[
        { label: 'The Pale Interval', href: '/literature/the-pale-interval', direction: 'prev' },
        { label: 'Characters', href: '/literature/characters', direction: 'next' },
      ]}
      sysLabel="SYS_LOC: SCRIPTORIUM_DEEP"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {literatureExcerpts.map((excerpt) => (
          <article
            key={excerpt.id}
            style={{
              borderTop: '1px solid rgba(138,28,42,0.15)',
              paddingTop: '40px',
            }}
          >
            <header style={{ marginBottom: '28px' }}>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(179,36,53,0.5)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {excerpt.source} · {excerpt.chapter}
              </p>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: '#f7e6b7',
                }}
              >
                {excerpt.title}
              </h2>
            </header>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'rgba(212,197,181,0.75)',
                whiteSpace: 'pre-line',
              }}
            >
              {excerpt.text}
            </div>
          </article>
        ))}
      </div>
    </DetailPageTemplate>
  );
}
