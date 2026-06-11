import React from 'react';
import { CommissionBriefBuilder } from '@/components/creative/CreativeExperiences';
import {
  SceneFrame,
  SceneScroller,
  ArtifactViewer,
} from '@/components/cinematic/CinematicPrimitives';

export const metadata = {
  title: 'Commissions — Art — L.F. Chambers',
  description: 'Commission and collaboration information for art projects by L.F. Chambers.',
};

const COMMISSION_TYPES = [
  {
    type: 'Original Works',
    desc: 'Paintings, drawings, and mixed media pieces for private collectors.',
  },
  {
    type: 'Editorial Illustration',
    desc: 'Illustration for books, publications, and editorial projects.',
  },
  {
    type: 'Creative Collaboration',
    desc: 'Cross-disciplinary projects at the intersection of art, design, and narrative.',
  },
];

export default function ArtCommissionsPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="art"
        eyebrow="Ars Visualis // Open Commissions"
        title="A Limited Number of Works, Made With Intention"
        lede="Original works, editorial illustration, and creative collaborations — each commission approached with the same care as personal work."
        meta={[
          { label: 'Slots', value: 'Limited / year' },
          { label: 'Turnaround', value: '4–8 weeks' },
          { label: 'Status', value: 'Accepting' },
        ]}
        visual={
          <ArtifactViewer
            src="/assets/images/art/nocturne-bloom.jpg"
            alt="Black, white, and gold mixed-media portrait surrounded by flowers and wings."
            title="Nocturne Bloom"
            meta="Commissioned register"
          />
        }
      >
        <div className="scene-frame__meta" aria-label="Commission types" style={{ marginTop: 28 }}>
          {COMMISSION_TYPES.map((item) => (
            <span key={item.type}>
              <b>{item.type}</b>
              {item.desc}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a
            href="mailto:chambersuiux@gmail.com?subject=Art Commission Inquiry"
            className="ds-btn ds-btn--primary"
          >
            Inquire about a commission
          </a>
        </div>
      </SceneFrame>

      <section className="scene-frame scene-frame--art" aria-label="Commission brief builder">
        <div
          style={{ width: 'min(900px, 100%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="scene-frame__eyebrow">Brief assembler // shape the request</p>
          <CommissionBriefBuilder />
        </div>
      </section>
    </SceneScroller>
  );
}
