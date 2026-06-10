import type { Metadata } from 'next';
import React from 'react';
import SectionLanding from '@/components/templates/SectionLanding';
import { HyperFrameLoreStrip } from '@/components/motion';
import { motionAssets } from '@/data/motion-assets';

export const metadata: Metadata = {
  title: 'L.F. Chambers — The Pale Interval and Literary Work',
  description:
    'The literary realm of L.F. Chambers, featuring The Pale Interval — a YA literary hard sci-fi horror novel — with excerpts, character dossiers, a Veyrath world engine, and a recovered ICSE archive.',
  alternates: { canonical: 'https://larnelle.me/literature' },
};

/** Twin-moon + pale-rupture motif for the literature hero. */
function LitMotif() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '22%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '1px solid rgba(154,169,196,0.4)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '22%',
          left: '34%',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          border: '1px solid rgba(179,36,53,0.5)',
        }}
      />
      <div
        className="pi-rupture"
        style={{
          position: 'absolute',
          top: 0,
          left: '30%',
          width: '2px',
          height: '46%',
          background: 'linear-gradient(180deg, var(--accent-contrast), transparent)',
          filter: 'blur(1px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(60% 50% at 50% 60%, rgba(179,36,53,0.18), transparent 70%)',
        }}
      />
    </div>
  );
}

export default function LiteraturePage() {
  return (
    <>
      <SectionLanding
        eyebrow="Scriptorium · Literature"
        title="A sealed world listens through grief."
        lede="Home to The Pale Interval and the recovered ICSE/NAIAD archive: VY-0031 transmissions, character dossiers, Veyrath atlas, recurrence evidence, and interactive field systems."
        actions={[
          { label: 'The Pale Interval', href: '/literature/the-pale-interval', primary: true },
          { label: 'Enter the archive', href: '/literature/archive' },
        ]}
        featuredTitle="Explore the realm"
        features={[
          {
            title: 'The Pale Interval',
            meta: 'Novel · In Progress',
            excerpt:
              'Sela Mares follows the structured absence in Adra’s final transmission to Veyrath, a world that records repetition and learns through grief.',
            href: '/literature/the-pale-interval',
            img: '/assets/literature/location-csb-31b.svg',
            alt: 'Generated survey plate of Veyrath.',
          },
          {
            title: 'The Archive',
            meta: 'ICSE · Recovered',
            excerpt:
              'A playable recovered archive: Veyrath world engine, Signal Console, Protocol Seven files, route data, recurrence proof, and dossiers.',
            href: '/literature/archive',
            img: '/assets/literature/protocol-p7-003.svg',
            alt: 'Generated Protocol Seven archive plate.',
          },
          {
            title: 'Excerpts',
            meta: 'Selected passages',
            excerpt: 'Read from the manuscript — spoiler-safe selections.',
            href: '/literature/excerpts',
            img: '/assets/literature/excerpt-auxiliary-navigation-annex.svg',
            alt: 'Generated excerpt plate for The Gap Has Shape.',
          },
          {
            title: 'Characters',
            meta: 'Dossiers',
            excerpt: 'Sela, Adra, Ithe, Lyren, Nae, Cael, Voss, Phoebe, Rao, Davi, and the Knot.',
            href: '/literature/characters',
            img: '/assets/literature/character-sela-mares.svg',
            alt: 'Generated dossier portrait plate for Sela Mares.',
          },
          {
            title: 'Worldbuilding',
            meta: 'Atlas · Lore',
            excerpt:
              'Veyrath, Kaen, white mineral, 3-4-3, Thal, Nara, Protocol Seven, and the route through the sealed body.',
            href: '/literature/worldbuilding',
            img: '/assets/literature/location-vy-dw.svg',
            alt: 'Generated survey plate for the Door Slabs and Deepway.',
          },
          {
            title: 'Author',
            meta: 'L.F. Chambers',
            excerpt: 'On the work, the genre, and how to get in touch about it.',
            href: '/literature/author',
            img: '/assets/literature/character-davi-mares.svg',
            alt: 'Generated private-log dossier plate.',
          },
        ]}
        cta={{
          title: 'Stay close to the signal',
          desc: 'Get a note when The Pale Interval is available to pre-order.',
          actions: [
            { label: 'Visit the book page', href: '/literature/the-pale-interval', primary: true },
            { label: 'Author', href: '/literature/author' },
          ],
        }}
        motif={<LitMotif />}
        motionAsset={motionAssets.paleSignal}
      />
      <div className="ds-container">
        <HyperFrameLoreStrip />
      </div>
    </>
  );
}
