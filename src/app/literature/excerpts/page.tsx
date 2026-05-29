import type { Metadata } from 'next';
import React from 'react';
import DetailPageTemplate from '@/components/DetailPageTemplate';

export const metadata: Metadata = {
  title: 'Excerpts — Literature — L.F. Chambers',
  description: 'Selected writing excerpts from The Pale Interval and other works by L.F. Chambers.',
};

const excerpts = [
  {
    id: 'interval-01',
    title: 'The First Signal',
    source: 'The Pale Interval',
    chapter: 'Chapter I',
    text: `The archive had no windows. This was intentional — the archivist had learned early that windows invited the sky, and the sky, since the Interval, was not something one looked at without preparation.

She catalogued by sound instead. The low hum of the retrieval system. The dry click of the index cards. The occasional distant tone from the signal tower, which meant another fragment had surfaced from the pale.`,
  },
  {
    id: 'interval-02',
    title: 'Twin Moons',
    source: 'The Pale Interval',
    chapter: 'Chapter IV',
    text: `Before the Interval, there had been one moon. Everyone agreed on this, though the records were inconsistent on its colour. Some said silver. Some said bone. The second moon appeared on the forty-third day after the rupture — smaller, redder, and positioned in a way that suggested it had always been there, waiting.

The archivist noted this in her log without comment. She had learned to note without comment.`,
  },
  {
    id: 'interval-03',
    title: 'Transmission Fragment 7',
    source: 'The Pale Interval',
    chapter: 'Archive Fragment',
    text: `[SIGNAL RECOVERED — PARTIAL — CONFIDENCE: 0.34]

...the mineral plain extends...
...no horizon visible from this position...
...the interval is not a gap. It is a...
...repeat: the interval is not a gap. It is a...

[SIGNAL LOST]`,
  },
];

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
      subtitle="Selected passages from The Pale Interval and other works."
      meta={[
        { label: 'Source', value: 'The Pale Interval' },
        { label: 'Fragments', value: `${excerpts.length}` },
      ]}
      navLinks={[
        { label: 'Literature', href: '/literature', direction: 'prev' },
        { label: 'Author', href: '/literature/author', direction: 'next' },
      ]}
      sysLabel="SYS_LOC: SCRIPTORIUM_DEEP"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {excerpts.map((excerpt) => (
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
