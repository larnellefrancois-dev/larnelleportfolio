import type { Metadata } from 'next';
import React from 'react';
import DetailPageTemplate from '@/components/DetailPageTemplate';

export const metadata: Metadata = {
  title: 'Author — Literature — L.F. Chambers',
  description: 'Author profile for L.F. Chambers, writer of The Pale Interval.',
};

export default function AuthorPage() {
  return (
    <DetailPageTemplate
      realm="literature"
      breadcrumbs={[
        { label: 'Literature', href: '/literature' },
        { label: 'Author', href: '/literature/author' },
      ]}
      arcaneIndex="M·III // AUCTOR"
      title="L.F. Chambers"
      subtitle="Multidisciplinary creative working across image, interface, and story."
      meta={[
        { label: 'Current Work', value: 'The Pale Interval' },
        { label: 'Genre', value: 'Speculative Fiction' },
        { label: 'Status', value: 'In Progress' },
      ]}
      navLinks={[
        { label: 'Excerpts', href: '/literature/excerpts', direction: 'prev' },
        { label: 'Worldbuilding', href: '/literature/worldbuilding', direction: 'next' },
      ]}
      sysLabel="SYS_LOC: AUCTOR_ARCHIVE"
      content={[
        {
          type: 'text',
          body: 'L.F. Chambers is a multidisciplinary creative working across image, interface, and story. The literary work operates in the space between speculative fiction, atmospheric prose, and archival narrative.',
        },
        {
          type: 'text',
          body: 'Current project: The Pale Interval, a novel in progress. Themes include signal and silence, geological rupture, archival memory, and the space between worlds.',
        },
        {
          type: 'text',
          body: 'The literary work is informed by a background in visual design and systems thinking — an attention to structure, negative space, and the architecture of meaning.',
        },
      ]}
    >
      {/* Literary Inquiries CTA */}
      <div
        style={{
          padding: '32px',
          border: '1px solid rgba(138,28,42,0.2)',
          borderRadius: '2px',
          backgroundColor: 'rgba(138,28,42,0.04)',
          marginTop: '8px',
        }}
      >
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: 'rgba(179,36,53,0.5)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Literary Inquiries
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1rem',
            color: 'rgba(212,197,181,0.65)',
            lineHeight: 1.6,
            marginBottom: '24px',
          }}
        >
          For publishing inquiries, literary collaborations, or correspondence about the work:
        </p>
        <a
          href="mailto:chambersuiux@gmail.com?subject=Literary Inquiry"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#e8d099',
            textDecoration: 'none',
            padding: '14px 28px',
            border: '1px solid rgba(212,178,113,0.3)',
            borderRadius: '2px',
            display: 'inline-block',
          }}
        >
          Send a Message
        </a>
      </div>
    </DetailPageTemplate>
  );
}
