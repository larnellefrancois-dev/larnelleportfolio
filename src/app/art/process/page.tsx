import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process — Art — L.F. Chambers',
  description: 'Process, sketchbook pages, and studio documentation behind the traditional art of L.F. Chambers.',
};

/*
 * TODO (art process uploads): replace the placeholder entries below with
 * real sketchbook spreads, studio shots, and process documentation. To add
 * an item, drop the image in /public/assets/images and add an object here
 * with { title, stage, note, img, alt }. While `img` is undefined a tasteful
 * placeholder panel renders automatically.
 */
interface ProcessItem {
  title: string;
  stage: string;
  note: string;
  img?: string;
  alt: string;
}

const processItems: ProcessItem[] = [
  {
    title: 'Sketchbook — Gesture & Thumbnails',
    stage: 'Notation',
    note: 'Quick gesture studies and compositional thumbnails. The thinking before the painting.',
    alt: 'Placeholder for a sketchbook spread of gesture studies and thumbnails.',
  },
  {
    title: 'Underpainting & Block-in',
    stage: 'Foundation',
    note: 'Establishing value structure and large shapes before colour and detail.',
    alt: 'Placeholder for an underpainting block-in stage.',
  },
  {
    title: 'Studio Documentation',
    stage: 'In Progress',
    note: 'Work-in-progress shots from the studio — palette, surface, and revisions.',
    alt: 'Placeholder for a studio work-in-progress photograph.',
  },
  {
    title: 'Notes & References',
    stage: 'Reference',
    note: 'Source material, colour notes, and the small decisions that accumulate into a finished piece.',
    alt: 'Placeholder for reference and colour notes.',
  },
];

const STAGES = [
  { label: 'Observe', value: '01' },
  { label: 'Sketch', value: '02' },
  { label: 'Block-in', value: '03' },
  { label: 'Resolve', value: '04' },
];

export default function ArtProcessPage() {
  return (
    <div className="art-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        <section style={{ padding: '64px 24px 80px', maxWidth: '1000px', margin: '0 auto' }}>
          <nav
            aria-label="Breadcrumb"
            style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(212, 178, 113, 0.4)', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', gap: '8px', alignItems: 'center' }}
          >
            <Link href="/art" style={{ color: 'inherit', textDecoration: 'none' }}>Art</Link>
            <span>/</span>
            <span style={{ color: 'rgba(212, 178, 113, 0.7)' }}>Process</span>
          </nav>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, letterSpacing: '0.15em', color: 'var(--gold-glow)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Process
          </h1>
          <p style={{ fontFamily: 'var(--font-body-serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(240, 230, 211, 0.7)', lineHeight: 1.7, marginBottom: '48px', maxWidth: '60ch' }}>
            Sketchbook pages, studio documentation, and the working stages behind finished pieces. A space for the thinking, not just the result.
          </p>

          {/* Working method */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1px', marginBottom: '64px' }}>
            {STAGES.map((s) => (
              <div key={s.label} style={{ backgroundColor: 'rgba(26,15,8,0.6)', padding: '24px', border: '1px solid rgba(212,178,113,0.15)' }}>
                <span style={{ display: 'block', fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f7e6b7', marginBottom: '6px' }}>{s.value}</span>
                <span style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(212,178,113,0.45)' }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Process documentation grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginBottom: '64px' }}>
            {processItems.map((item) => (
              <article key={item.title} style={{ border: '1px solid rgba(212,178,113,0.15)', borderRadius: '3px', overflow: 'hidden', backgroundColor: 'rgba(26,15,8,0.4)' }}>
                <div
                  role="img"
                  aria-label={item.alt}
                  style={{
                    aspectRatio: '4 / 3',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'rgba(212,178,113,0.4)',
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    backgroundImage: item.img
                      ? `url('${item.img}')`
                      : 'repeating-linear-gradient(45deg, rgba(212,178,113,0.06) 0 10px, transparent 10px 20px)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {!item.img && <span>{item.stage}</span>}
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,178,113,0.45)', marginBottom: '8px' }}>{item.stage}</p>
                  <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 400, letterSpacing: '0.04em', color: '#f7e6b7', marginBottom: '8px' }}>{item.title}</h2>
                  <p style={{ fontFamily: 'var(--font-body-serif)', fontSize: '1rem', color: 'rgba(240,230,211,0.6)', lineHeight: 1.6 }}>{item.note}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Nav */}
          <nav aria-label="Page navigation" style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid rgba(212,178,113,0.15)', paddingTop: '32px' }}>
            <Link href="/art/projects" style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,178,113,0.5)', textDecoration: 'none' }}>← Projects</Link>
            <Link href="/art/commissions" style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,178,113,0.5)', textDecoration: 'none', marginLeft: 'auto' }}>Commissions →</Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
