import type { Metadata } from 'next';
import React from 'react';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import { authorPageData } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'L.F. Chambers — Author of The Pale Interval',
  description:
    'Author profile for L.F. Chambers, writer of The Pale Interval — a YA literary sci-fi horror novel of grief, signal, and recovered transmission.',
};

export default function AuthorPage() {
  return (
    <DetailPageTemplate {...authorPageData}>
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
