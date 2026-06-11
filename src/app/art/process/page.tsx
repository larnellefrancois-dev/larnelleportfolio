import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import {
  SceneFrame,
  SceneScroller,
  ArtifactViewer,
} from '@/components/cinematic/CinematicPrimitives';

export const metadata: Metadata = {
  title: 'Process — Art — L.F. Chambers',
  description:
    'Process, sketchbook pages, and studio documentation behind the traditional art of L.F. Chambers.',
};

interface ProcessItem {
  title: string;
  stage: string;
  note: string;
  img: string;
  alt: string;
}

const processItems: ProcessItem[] = [
  {
    title: 'Line Density',
    stage: 'Ink',
    note: 'A face built through repetition, pressure, and restless contour before anything settles into tone.',
    img: '/assets/images/art/for-the-love-of-ink.jpg',
    alt: 'Black ink portrait made from dense overlapping scribbled lines.',
  },
  {
    title: 'Tonal Ground',
    stage: 'Charcoal',
    note: 'Large value masses and soft transitions hold the gesture before detail, ornament, or color enter the surface.',
    img: '/assets/images/art/hand-to-crown.jpg',
    alt: 'Charcoal portrait with a hand lifted into the hair and soft tonal shading.',
  },
  {
    title: 'Color Field',
    stage: 'Paint',
    note: 'A saturated field sets the emotional temperature, then graphite and white marks pull the figure back into focus.',
    img: '/assets/images/art/red-moon-profile.jpg',
    alt: 'Red-ground mixed-media profile portrait with silver circle and white markings.',
  },
  {
    title: 'Surface Archive',
    stage: 'Collage',
    note: 'Handwritten fragments, grids, and repeated symbols become an emotional record around the figure.',
    img: '/assets/images/art/shine-archive.jpg',
    alt: 'Dense mixed-media piece with handwritten notes, grids, symbols, and a central figure.',
  },
];

export default function ArtProcessPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="art"
        eyebrow="Ars Visualis // Studio Record"
        title="How a Surface Learns Its Image"
        lede="Observe, sketch, block-in, resolve. Four stages of the same discipline of looking — documented from the studio wall."
        meta={[
          { label: 'Stage 01', value: 'Observe' },
          { label: 'Stage 02', value: 'Sketch' },
          { label: 'Stage 03', value: 'Block-in' },
          { label: 'Stage 04', value: 'Resolve' },
        ]}
        visual={
          <ArtifactViewer
            src={processItems[0].img}
            alt={processItems[0].alt}
            title="Studio plate — line density"
            meta="Process documentation"
          />
        }
      />

      {processItems.map((item, index) => (
        <SceneFrame
          key={item.title}
          tone="art"
          eyebrow={`Stage ${String(index + 1).padStart(2, '0')} // ${item.stage}`}
          title={item.title}
          lede={item.note}
          visual={
            <ArtifactViewer src={item.img} alt={item.alt} title={item.title} meta={item.stage} />
          }
        >
          {index === processItems.length - 1 && (
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/art/gallery" className="ds-btn ds-btn--primary">
                Enter the gallery
              </Link>
              <Link href="/art/commissions" className="ds-btn ds-btn--ghost">
                Commission a work
              </Link>
            </div>
          )}
        </SceneFrame>
      ))}
    </SceneScroller>
  );
}
