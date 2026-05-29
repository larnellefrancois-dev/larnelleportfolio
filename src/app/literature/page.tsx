import type { Metadata } from 'next';
import React from 'react';
import SectionLanding from '@/components/templates/SectionLanding';

export const metadata: Metadata = {
  title: 'L.F. Chambers — The Pale Interval and Literary Work',
  description: 'The literary realm of L.F. Chambers, featuring The Pale Interval — a YA literary sci-fi horror novel — with excerpts, characters, worldbuilding, and a recovered ICSE archive.',
  alternates: { canonical: 'https://larnelle.me/literature' },
};

/** Twin-moon + pale-rupture motif for the literature hero. */
function LitMotif() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <div style={{ position: 'absolute', top: '18%', left: '22%', width: '80px', height: '80px', borderRadius: '50%', border: '1px solid rgba(154,169,196,0.4)' }} />
      <div style={{ position: 'absolute', top: '22%', left: '34%', width: '54px', height: '54px', borderRadius: '50%', border: '1px solid rgba(179,36,53,0.5)' }} />
      <div className="pi-rupture" style={{ position: 'absolute', top: 0, left: '30%', width: '2px', height: '46%', background: 'linear-gradient(180deg, var(--accent-contrast), transparent)', filter: 'blur(1px)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 50% at 50% 60%, rgba(179,36,53,0.18), transparent 70%)' }} />
    </div>
  );
}

export default function LiteraturePage() {
  return (
    <SectionLanding
      eyebrow="Scriptorium · Literature"
      title="Signal and silence. Grief and inheritance."
      lede="Home to the novel The Pale Interval and a recovered ICSE archive — excerpts, characters, worldbuilding, and transmissions from the Calyx system."
      actions={[
        { label: 'The Pale Interval', href: '/literature/the-pale-interval', primary: true },
        { label: 'Enter the archive', href: '/literature/archive' },
      ]}
      featuredTitle="Explore the realm"
      features={[
        { title: 'The Pale Interval', meta: 'Novel · In Progress', excerpt: 'A daughter recovers her dead mother’s final transmission from the abandoned world of Calyx — and the static begins to answer.', href: '/literature/the-pale-interval' },
        { title: 'The Archive', meta: 'ICSE · Recovered', excerpt: 'An interactive recovered archive: Signal Console, Protocol 7 files, Calyx survey, and dossiers.', href: '/literature/archive' },
        { title: 'Excerpts', meta: 'Selected passages', excerpt: 'Read from the manuscript — spoiler-safe selections.', href: '/literature/excerpts' },
        { title: 'Characters', meta: 'Dossiers', excerpt: 'Sela Mares, Adra Mares, NAIAD, and the ICSE Archivist.', href: '/literature/characters' },
        { title: 'Worldbuilding', meta: 'Glossary · Lore', excerpt: 'ICSE, NAIAD, Calyx, Protocol 7, and the language of the survey records.', href: '/literature/worldbuilding' },
        { title: 'Author', meta: 'L.F. Chambers', excerpt: 'On the work, the genre, and how to get in touch about it.', href: '/literature/author' },
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
    />
  );
}
