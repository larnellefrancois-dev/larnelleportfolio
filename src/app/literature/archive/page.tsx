import type { Metadata } from 'next';
import Link from 'next/link';
import { AmbientSoundControl, ArchivePuzzleLayer } from '@/components/creative/CreativeExperiences';
import {
  ArchiveGate,
  ArtifactViewer,
  DossierViewer,
  SceneFrame,
  SceneScroller,
  VeyrathOrbitEngine,
} from '@/components/cinematic/CinematicPrimitives';
import SignalConsole from '@/components/literature/SignalConsole';
import ArchiveDocumentCard from '@/components/literature/ArchiveDocumentCard';
import StabilizeTransmission from '@/components/literature/StabilizeTransmission';
import {
  archivePageData,
  paleIntervalCharacters,
  paleIntervalLocations,
  paleIntervalProtocols,
  paleIntervalSeoDescription,
  paleIntervalTransmissions,
} from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'The Archive — The Pale Interval — L.F. Chambers',
  description:
    'Enter the recovered ICSE / NAIAD archive: corrupted VY-0031 transmissions, Veyrath survey data, redacted Protocol Seven files, recurrence evidence, and fragments from Adra Mares’s warning. ' +
    paleIntervalSeoDescription,
};

export default function ArchivePage() {
  return (
    <SceneScroller className="literature-archive-app">
      <ArchiveGate protocols={paleIntervalProtocols} transmissions={paleIntervalTransmissions} />

      <SceneFrame
        tone="literature"
        eyebrow={archivePageData.arcaneIndex}
        title="The Archive Is A Machine You Enter"
        lede={archivePageData.subtitle}
        meta={archivePageData.meta}
        visual={
          <ArtifactViewer
            src="/assets/literature/location-csb-31b.svg"
            alt="Generated Veyrath survey artifact plate."
            title="CSB-31B / Veyrath"
            meta="Recovered survey body"
          >
            <p style={{ color: 'rgba(240,230,211,.72)', lineHeight: 1.6 }}>
              Breathable does not mean safe. The archive is arranged as orbit, surface, signal,
              dossier, and refusal.
            </p>
          </ArtifactViewer>
        }
      >
        <p className="ds-prose" style={{ maxWidth: '62ch', color: 'rgba(240,230,211,.72)' }}>
          ARCHIVE NOTICE — Spoiler-aware by default. Sealed material remains marked. Return to{' '}
          <Link href="/literature/the-pale-interval" style={{ color: '#e05a6a' }}>
            The Pale Interval
          </Link>{' '}
          for the clean book page.
        </p>
      </SceneFrame>

      <section className="scene-frame scene-frame--literature" aria-labelledby="veyrath-orbit">
        <div style={{ width: 'min(1320px, 100%)', margin: '0 auto' }}>
          <p className="scene-frame__eyebrow">Playable field layer // orbit to surface</p>
          <h1 id="veyrath-orbit" className="scene-frame__title" style={{ marginBottom: 28 }}>
            Veyrath Orbit Engine
          </h1>
          <VeyrathOrbitEngine
            locations={paleIntervalLocations}
            characters={paleIntervalCharacters}
          />
        </div>
      </section>

      <SceneFrame
        tone="literature"
        eyebrow="Recovered Recording // VY-0031"
        title="The Signal Keeps Its Pressure"
        lede="Fragments of Adra Mares’s final warning, reassembled from NAIAD telemetry. Select a segment to inspect; corrupted areas preserve the shape of absence."
        visual={
          <ArtifactViewer
            src="/assets/literature/excerpt-recovered-recording.svg"
            alt="Generated redacted signal artifact for Adra Mares’s recovered recording."
            title="A. Mares / Partial"
            meta="Transmission plate"
          />
        }
      >
        <SignalConsole />
      </SceneFrame>

      <section className="scene-frame scene-frame--literature" aria-labelledby="protocol-seven">
        <div style={{ width: 'min(1240px, 100%)', margin: '0 auto' }}>
          <p className="scene-frame__eyebrow">ICSE files // classified language</p>
          <h1 id="protocol-seven" className="scene-frame__title" style={{ marginBottom: 28 }}>
            Protocol Seven
          </h1>
          <div
            style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}
          >
            {paleIntervalProtocols.map((doc) => (
              <ArchiveDocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      <section className="scene-frame scene-frame--literature" aria-labelledby="dossier-feed">
        <div style={{ width: 'min(1320px, 100%)', margin: '0 auto' }}>
          <p className="scene-frame__eyebrow">Dossier cross-feed // NAIAD cohort</p>
          <h1 id="dossier-feed" className="scene-frame__title" style={{ marginBottom: 28 }}>
            Survivor Records
          </h1>
          <DossierViewer characters={paleIntervalCharacters} />
        </div>
      </section>

      <SceneFrame
        tone="literature"
        eyebrow="Interactive stabilizer // refusal mechanic"
        title="Do Not Answer With The Wound"
        lede="The archive wants the phrase completed. The ending asks for something harder: keep the wound open without turning it into an entrance."
      >
        <ArchivePuzzleLayer />
        <StabilizeTransmission />
      </SceneFrame>

      <AmbientSoundControl />
    </SceneScroller>
  );
}
