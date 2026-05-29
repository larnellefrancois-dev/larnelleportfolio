import React from 'react';
import RedactedText from './RedactedText';
import type { ProtocolDocument } from '@/data/realms-content';

const MONO = "'Space Mono', monospace";
const BORDER = 'rgba(138,28,42,0.3)';
const BODY = 'rgba(212,197,181,0.7)';

/** A classified Protocol 7 document card with redaction bars and an
    optional spoiler-locked annex behind a native <details> warning. */
export default function ArchiveDocumentCard({ doc }: { doc: ProtocolDocument }) {
  const sealed = doc.classification === 'sealed';
  return (
    <article
      style={{
        border: `1px solid ${BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '24px',
        fontFamily: MONO,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'baseline', borderBottom: `1px solid ${BORDER}`, paddingBottom: '10px' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: '#b32435' }}>{doc.code}</span>
        <span
          style={{
            fontSize: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            padding: '3px 10px',
            borderRadius: '999px',
            border: `1px solid ${sealed ? '#b32435' : BORDER}`,
            color: sealed ? '#e05a6a' : BODY,
          }}
        >
          {doc.classification}
        </span>
      </div>

      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.05rem', fontWeight: 400, letterSpacing: '0.06em', color: '#f7e6b7', margin: '16px 0 12px' }}>
        {doc.title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {doc.body.map((line, i) => (
          <p key={i} style={{ position: 'relative', fontSize: '0.82rem', color: BODY, lineHeight: 1.6 }}>
            <RedactedText>{line}</RedactedText>
          </p>
        ))}
      </div>

      {doc.spoilerLocked && doc.spoilerLocked.length > 0 && (
        <details style={{ marginTop: '16px' }}>
          <summary style={{ cursor: 'pointer', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#e05a6a' }}>
            ⚠ Reveal sealed annex (spoilers)
          </summary>
          <div style={{ marginTop: '10px' }}>
            {doc.spoilerLocked.map((line, i) => (
              <p key={i} style={{ fontSize: '0.8rem', color: BODY, lineHeight: 1.6 }}>{line}</p>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}
