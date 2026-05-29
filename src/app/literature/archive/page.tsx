import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import SignalConsole from '@/components/literature/SignalConsole';
import ArchiveDocumentCard from '@/components/literature/ArchiveDocumentCard';
import CalyxSurveyViewer from '@/components/literature/CalyxSurveyViewer';
import StabilizeTransmission from '@/components/literature/StabilizeTransmission';
import CharacterDossierCard from '@/components/literature/CharacterDossierCard';
import {
  archivePageData,
  paleIntervalProtocols,
  paleIntervalCharacters,
  paleIntervalSeoDescription,
} from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'The Archive — The Pale Interval — L.F. Chambers',
  description:
    'Enter the recovered ICSE / NAIAD archive: corrupted transmissions, Calyx survey data, redacted Protocol 7 files, and fragments from Adra Mares’s recording. ' +
    paleIntervalSeoDescription,
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Cinzel', serif",
  fontSize: '1rem',
  fontWeight: 400,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#b32435',
  margin: '0 0 8px',
};
const descStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1.1rem',
  color: 'rgba(212,197,181,0.7)',
  lineHeight: 1.6,
  maxWidth: '60ch',
  marginBottom: '24px',
};
const sectionStyle: React.CSSProperties = { marginBottom: '64px' };

export default function ArchivePage() {
  return (
    <DetailPageTemplate {...archivePageData}>
      {/* Orientation note — always know where you are / how to leave */}
      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          color: 'rgba(212,197,181,0.5)',
          lineHeight: 1.7,
          border: '1px solid rgba(138,28,42,0.2)',
          borderRadius: '3px',
          padding: '16px 20px',
          marginBottom: '56px',
        }}
      >
        ARCHIVE NOTICE — You are inside a recovered, partial ICSE record. Content is
        spoiler-safe by default; sealed material is marked. Return to the clean book page at{' '}
        <Link href="/literature/the-pale-interval" style={{ color: '#e05a6a' }}>
          The Pale Interval
        </Link>
        .
      </p>

      {/* 1 · Signal Console */}
      <section style={sectionStyle} aria-labelledby="sec-signal">
        <h2 id="sec-signal" style={headingStyle}>Recovered Recording</h2>
        <p style={descStyle}>
          Fragments of Adra Mares’s final transmission, reassembled from NAIAD telemetry. Select a
          segment to listen; some are corrupted beyond recovery.
        </p>
        <SignalConsole />
      </section>

      {/* 2 · Protocol 7 */}
      <section style={sectionStyle} aria-labelledby="sec-protocol">
        <h2 id="sec-protocol" style={headingStyle}>Protocol 7 — Classified Files</h2>
        <p style={descStyle}>
          Institutional documents governing the Calyx seal. Redacted lines are sealed under
          Protocol 7; some files expose a spoiler-locked annex.
        </p>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paleIntervalProtocols.map((doc) => (
            <ArchiveDocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      {/* 3 · Calyx survey */}
      <section style={sectionStyle} aria-labelledby="sec-calyx">
        <h2 id="sec-calyx" style={headingStyle}>Calyx Survey Data</h2>
        <p style={descStyle}>
          Location records recovered from the survey. Risk classifications follow ICSE convention.
        </p>
        <CalyxSurveyViewer />
      </section>

      {/* 4 · Dossiers teaser */}
      <section style={sectionStyle} aria-labelledby="sec-dossiers">
        <h2 id="sec-dossiers" style={headingStyle}>Personnel Dossiers</h2>
        <p style={descStyle}>
          A selection of recovered records. Full dossiers live in the{' '}
          <Link href="/literature/characters" style={{ color: '#e05a6a' }}>Characters</Link> archive.
        </p>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {paleIntervalCharacters.slice(0, 2).map((c) => (
            <CharacterDossierCard key={c.slug} character={c} />
          ))}
        </div>
      </section>

      {/* 5 · Stabilize the Transmission */}
      <section style={sectionStyle} aria-labelledby="sec-stabilize">
        <h2 id="sec-stabilize" style={headingStyle}>Interactive · Stabilize the Transmission</h2>
        <StabilizeTransmission />
      </section>
    </DetailPageTemplate>
  );
}
