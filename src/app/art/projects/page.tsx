import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { artProjects } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Projects — Art — L.F. Chambers',
  description: 'Selected art projects, collections, and visual studies by L.F. Chambers.',
};

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
              alignItems: 'center',
            }}
          >
            <Link href="/art" style={{ color: 'inherit', textDecoration: 'none' }}>
              Art
            </Link>
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
              marginBottom: '16px',
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body-serif)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'rgba(240, 230, 211, 0.6)',
              maxWidth: '480px',
              marginBottom: '64px',
            }}
          >
            Selected collections, visual studies, and ongoing series.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {artProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2px',
                  backgroundColor: 'rgba(212, 178, 113, 0.03)',
                  border: '1px solid rgba(212, 178, 113, 0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    overflow: 'hidden',
                    backgroundColor: '#1a0f08',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${project.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'sepia(0.4) contrast(1.1)',
                    }}
                    role="img"
                    aria-label={project.alt}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(13,8,4,0.3) 0%, transparent 60%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono-portal)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.3em',
                      color: 'rgba(212, 178, 113, 0.4)',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    {project.type} · {project.year}
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      color: 'var(--gold-glow)',
                      marginBottom: '16px',
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body-serif)',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: 'rgba(240, 230, 211, 0.6)',
                      lineHeight: 1.6,
                      marginBottom: '32px',
                    }}
                  >
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
                      display: 'inline-block',
                    }}
                  >
                    View Works
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
