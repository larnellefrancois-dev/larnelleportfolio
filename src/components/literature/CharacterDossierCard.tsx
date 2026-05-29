import React from 'react';
import type { CharacterDossier } from '@/data/realms-content';

const MONO = "'Space Mono', monospace";
const SERIF = "'Cormorant Garamond', serif";
const BORDER = 'rgba(138,28,42,0.3)';
const BODY = 'rgba(212,197,181,0.78)';

/** A spoiler-safe character dossier styled as a classified record.
    Deeper notes are tucked behind a native <details> (no JS required). */
export default function CharacterDossierCard({ character }: { character: CharacterDossier }) {
  return (
    <article
      style={{
        border: `1px solid ${BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '28px',
      }}
    >
      <p style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(179,36,53,0.55)', textTransform: 'uppercase' }}>
        {character.classification}
      </p>
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.6rem', fontWeight: 400, letterSpacing: '0.06em', color: '#f7e6b7', margin: '6px 0 4px' }}>
        {character.name}
      </h3>
      <p style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b32435' }}>
        {character.role}
      </p>

      {character.quote && (
        <blockquote style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: '1.15rem', color: '#f7e6b7', borderLeft: `2px solid #b32435`, paddingLeft: '16px', margin: '20px 0' }}>
          {character.quote}
        </blockquote>
      )}

      <p style={{ fontFamily: SERIF, fontSize: '1.05rem', color: BODY, lineHeight: 1.7, marginTop: '12px' }}>
        {character.description}
      </p>

      {character.relationship && (
        <p style={{ fontFamily: MONO, fontSize: '0.7rem', color: 'rgba(212,197,181,0.45)', marginTop: '14px', lineHeight: 1.6 }}>
          {character.relationship}
        </p>
      )}

      {character.spoilerLocked && character.spoilerLocked.length > 0 && (
        <details style={{ marginTop: '16px' }}>
          <summary style={{ cursor: 'pointer', fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.1em', color: '#e05a6a' }}>
            ⚠ Spoiler-locked notes
          </summary>
          <div style={{ marginTop: '10px' }}>
            {character.spoilerLocked.map((line, i) => (
              <p key={i} style={{ fontFamily: SERIF, fontSize: '1rem', color: BODY, lineHeight: 1.7 }}>{line}</p>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}
