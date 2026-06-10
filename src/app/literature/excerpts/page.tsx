import type { Metadata } from 'next';
import {
  ExcerptSceneDeck,
  SceneFrame,
  SceneScroller,
} from '@/components/cinematic/CinematicPrimitives';
import { excerptsPageData, literatureExcerpts } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Excerpts — The Pale Interval — L.F. Chambers',
  description:
    'Selected excerpts from The Pale Interval by L.F. Chambers — a YA literary sci-fi horror novel of grief, signal, and recovered transmission.',
};

export default function ExcerptsPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="literature"
        eyebrow={excerptsPageData.arcaneIndex}
        title="Read The Signal In Scenes"
        lede={excerptsPageData.subtitle}
        meta={excerptsPageData.meta}
        visual={
          <div className="excerpt-scene__plate" style={{ minHeight: 500 }}>
            <img
              src="/assets/literature/excerpt-auxiliary-navigation-annex.svg"
              alt="Generated visual plate for The Gap Has Shape."
            />
          </div>
        }
      />
      <ExcerptSceneDeck excerpts={literatureExcerpts} />
    </SceneScroller>
  );
}
