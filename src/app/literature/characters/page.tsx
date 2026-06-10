import type { Metadata } from 'next';
import {
  DossierViewer,
  SceneFrame,
  SceneScroller,
} from '@/components/cinematic/CinematicPrimitives';
import { charactersPageData, paleIntervalCharacters } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Characters — The Pale Interval — L.F. Chambers',
  description:
    'Character dossiers from The Pale Interval by L.F. Chambers — Sela Mares, Adra Mares, Ithe, Lyren, Nae, Cael, Voss, Phoebe, Rao, Davi, and the Knot. Spoiler-aware by default.',
};

export default function CharactersPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="literature"
        eyebrow={charactersPageData.arcaneIndex}
        title="Personnel Files From A Planet That Learns"
        lede={charactersPageData.subtitle}
        meta={charactersPageData.meta}
        visual={
          <div className="dossier-viewer__portrait" style={{ minHeight: 540 }}>
            <img
              src="/assets/literature/character-sela-mares.svg"
              alt="Generated dossier portrait plate for Sela Mares."
            />
            <div className="dossier-viewer__overlay" aria-hidden="true">
              <span>NAIAD</span>
              <span>VY-0031</span>
              <span>RECORD</span>
            </div>
          </div>
        }
      />

      <section className="scene-frame scene-frame--literature" aria-labelledby="character-dossiers">
        <div style={{ width: 'min(1320px, 100%)', margin: '0 auto' }}>
          <p className="scene-frame__eyebrow">Classified dossier browser // spoiler-aware</p>
          <h1 id="character-dossiers" className="scene-frame__title" style={{ marginBottom: 28 }}>
            Character Dossiers
          </h1>
          <DossierViewer characters={paleIntervalCharacters} />
        </div>
      </section>
    </SceneScroller>
  );
}
