import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects — Art — L.F. Chambers',
  description: 'Selected art projects, collections, and visual studies by L.F. Chambers.'
};

const projects = [
{
  id: 'chromatic-studies',
  title: 'Chromatic Studies',
  type: 'Series',
  year: '2025',
  description: 'An ongoing series exploring the emotional resonance of color relationships, pigment layering, and the tension between warm and cool tones.',
  img: "https://images.unsplash.com/photo-1674458988478-631147985faa",
  alt: 'Abstract painting with layered warm and cool chromatic tones'
},
{
  id: 'interval-studies',
  title: 'Interval Studies',
  type: 'Collection',
  year: '2024',
  description: 'Visual explorations of negative space, pause, and the interval between forms — inspired by the novel project The Pale Interval.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1b74db23c-1777743800738.png",
  alt: 'Atmospheric painting with deep tones exploring negative space'
},
{
  id: 'signal-archive',
  title: 'Signal Archive',
  type: 'Digital Series',
  year: '2025',
  description: 'Digital works drawing from transmission artifacts, data noise, and the visual language of signal and interference.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa94029f-1779910010152.png",
  alt: 'Digital artwork with signal patterns and noise textures'
}];


export default function ArtProjectsPage() {
  return (
    <div className="art-realm" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>
        <section style={{ padding: '64px 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: 'var(--font-mono-portal)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              color: 'rgba(212, 178, 113, 0.4)',
              textTransform: 'uppercase',
              marginBottom: '32px',
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
            
            <Link href="/art" style={{ color: 'inherit', textDecoration: 'none' }}>Art</Link>
            <span>/</span>
            <span style={{ color: 'rgba(212, 178, 113, 0.7)' }}>Projects</span>
          </nav>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: 'var(--gold-glow)',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
            
            Projects
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body-serif)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'rgba(240, 230, 211, 0.6)',
              maxWidth: '480px',
              marginBottom: '64px'
            }}>
            
            Selected collections, visual studies, and ongoing series.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {projects.map((project) =>
            <div
              key={project.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2px',
                backgroundColor: 'rgba(212, 178, 113, 0.03)',
                border: '1px solid rgba(212, 178, 113, 0.08)',
                overflow: 'hidden'
              }}>
              
                {/* Image */}
                <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  backgroundColor: '#1a0f08'
                }}>
                
                  <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'sepia(0.4) contrast(1.1)'
                  }}
                  role="img"
                  aria-label={project.alt} />
                
                  <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(13,8,4,0.3) 0%, transparent 60%)'
                  }} />
                
                </div>

                {/* Content */}
                <div
                style={{
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                
                  <p
                  style={{
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.3em',
                    color: 'rgba(212, 178, 113, 0.4)',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}>
                  
                    {project.type} · {project.year}
                  </p>
                  <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: 'var(--gold-glow)',
                    marginBottom: '16px'
                  }}>
                  
                    {project.title}
                  </h2>
                  <p
                  style={{
                    fontFamily: 'var(--font-body-serif)',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: 'rgba(240, 230, 211, 0.6)',
                    lineHeight: 1.6,
                    marginBottom: '32px'
                  }}>
                  
                    {project.description}
                  </p>
                  <Link
                  href="/art/gallery"
                  style={{
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan-bright)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(125, 167, 217, 0.3)',
                    paddingBottom: '4px',
                    display: 'inline-block'
                  }}>
                  
                    View Works
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

    </div>);

}