import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Art — L.F. Chambers',
  description: 'Expressive forms, painterly manifestations, and the alchemy of image, contrast, and craft.'
};

const galleryWorks = [
{
  title: 'Chromatic Studies',
  medium: 'Digital / Mixed Media',
  year: '2025',
  img: "https://images.unsplash.com/photo-1729271170441-27c856c4922a",
  alt: 'Abstract chromatic study with layered warm tones and painterly texture',
  hero: true
},
{
  title: 'Architectural Fragments',
  medium: 'Ink / Collage',
  year: '2024',
  img: "https://images.unsplash.com/photo-1686662447832-468df00c792a",
  alt: 'Architectural ink collage with geometric fragments and warm amber tones',
  hero: false
},
{
  title: 'Interval Studies',
  medium: 'Oil / Canvas',
  year: '2024',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7a20973-1773752532806.png",
  alt: 'Oil painting study exploring intervals of light and shadow on canvas',
  hero: false
},
{
  title: 'Signal & Noise',
  medium: 'Digital',
  year: '2025',
  img: "https://images.unsplash.com/photo-1657916241319-0f9d21fcf8a0",
  alt: 'Digital artwork exploring signal and noise with abstract warm gradient forms',
  hero: false
}];


const artSections = [
{
  label: 'Gallery',
  href: '/art/gallery',
  meta: 'I',
  desc: 'Selected works across media, form, and surface.'
},
{
  label: 'Projects',
  href: '/art/projects',
  meta: 'II',
  desc: 'Collections, visual studies, and extended series.'
},
{
  label: 'Process',
  href: '/art/process',
  meta: 'III',
  desc: 'Sketchbook pages, studio documentation, and working stages.'
},
{
  label: 'Commissions',
  href: '/art/commissions',
  meta: 'IV',
  desc: 'Collaborative and commissioned work.'
}];


export default function ArtPage() {
  return (
    <div data-realm="art" className="art-realm-page" style={{ fontFamily: 'var(--font-body-serif)' }}>
      <main>

        {/* ── Hero: Gallery Grid ── */}
        <section
          aria-label="Art gallery hero"
          style={{
            padding: '0',
            background: 'var(--realm-gradient-hero, radial-gradient(ellipse at 50% 60%, rgba(139, 90, 43, 0.18) 0%, #0d0905 70%))'
          }}>
          
          {/* Editorial header above grid */}
          <div
            style={{
              padding: '56px 32px 32px',
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
            
            <div>
              <div
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.45em',
                  color: 'rgba(212, 178, 113, 0.4)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                
                <span style={{ display: 'block', width: '32px', height: '1px', backgroundColor: 'rgba(212, 178, 113, 0.3)' }} />
                M·I // VISIO
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: 'var(--gold-glow)',
                  textTransform: 'uppercase',
                  lineHeight: 0.9,
                  textShadow: '0 4px 40px rgba(212, 178, 113, 0.15)',
                  margin: 0
                }}>
                
                Art
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.35em',
                  color: 'rgba(212, 178, 113, 0.4)',
                  textTransform: 'uppercase',
                  marginTop: '10px'
                }}>
                
                Ars Visualis
              </p>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body-serif)',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: 'rgba(240, 230, 209, 0.6)',
                maxWidth: '380px',
                lineHeight: 1.65
              }}>
              
              Expressive forms, painterly manifestations, and the alchemy of image, contrast, and craft.
            </p>
          </div>

          {/* Gallery Grid Hero */}
          <div
            style={{ padding: '0 32px 0', maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="art-gallery-grid">
              {/* Hero cell — large left */}
              <Link
                href="/art/gallery"
                className="art-gallery-hero-cell"
                style={{
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  backgroundColor: '#1a0f08'
                }}
                aria-label={`View ${galleryWorks[0].title} in gallery`}>
                
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${galleryWorks[0].img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'sepia(0.3) contrast(1.1)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  role="img"
                  aria-label={galleryWorks[0].alt} />
                
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 9, 5, 0.92) 0%, rgba(80, 50, 20, 0.25) 50%, transparent 100%)'
                  }} />
                
                {/* Ornate corner marks */}
                <div aria-hidden="true" style={{ position: 'absolute', top: '16px', left: '16px', width: '20px', height: '20px', borderTop: '1px solid rgba(212,178,113,0.4)', borderLeft: '1px solid rgba(212,178,113,0.4)' }} />
                <div aria-hidden="true" style={{ position: 'absolute', top: '16px', right: '16px', width: '20px', height: '20px', borderTop: '1px solid rgba(212,178,113,0.4)', borderRight: '1px solid rgba(212,178,113,0.4)' }} />
                <div aria-hidden="true" style={{ position: 'absolute', bottom: '16px', left: '16px', width: '20px', height: '20px', borderBottom: '1px solid rgba(212,178,113,0.4)', borderLeft: '1px solid rgba(212,178,113,0.4)' }} />
                <div aria-hidden="true" style={{ position: 'absolute', bottom: '16px', right: '16px', width: '20px', height: '20px', borderBottom: '1px solid rgba(212,178,113,0.4)', borderRight: '1px solid rgba(212,178,113,0.4)' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px'
                  }}>
                  
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      letterSpacing: '0.1em',
                      color: 'var(--gold-glow)',
                      marginBottom: '6px'
                    }}>
                    
                    {galleryWorks[0].title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono-portal)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      color: 'rgba(212, 178, 113, 0.5)',
                      textTransform: 'uppercase'
                    }}>
                    
                    {galleryWorks[0].medium} · {galleryWorks[0].year}
                  </p>
                </div>
              </Link>

              {/* Side cells */}
              {galleryWorks.slice(1).map((work) =>
              <Link
                key={work.title}
                href="/art/gallery"
                className="art-gallery-side-cell"
                style={{
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  backgroundColor: '#1a0f08'
                }}
                aria-label={`View ${work.title} in gallery`}>
                
                  <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${work.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'sepia(0.35) contrast(1.1)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  role="img"
                  aria-label={work.alt} />
                
                  <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 9, 5, 0.9) 0%, rgba(60, 40, 20, 0.2) 60%, transparent 100%)'
                  }} />
                
                  <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px'
                  }}>
                  
                    <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      letterSpacing: '0.08em',
                      color: 'var(--gold-glow)',
                      marginBottom: '4px'
                    }}>
                    
                      {work.title}
                    </p>
                    <p
                    style={{
                      fontFamily: 'var(--font-mono-portal)',
                      fontSize: '0.5rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(212, 178, 113, 0.45)',
                      textTransform: 'uppercase'
                    }}>
                    
                      {work.medium} · {work.year}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* View all link */}
          <div style={{ padding: '24px 32px 0', maxWidth: '1200px', margin: '0 auto', textAlign: 'right' }}>
            <Link
              href="/art/gallery"
              style={{
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '0.55rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'rgba(212, 178, 113, 0.5)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'color 0.2s ease'
              }}>
              
              View Full Gallery
              <span aria-hidden="true" style={{ display: 'block', width: '28px', height: '1px', backgroundColor: 'currentColor' }} />
            </Link>
          </div>
        </section>

        {/* ── Divider ── */}
        <div
          aria-hidden="true"
          style={{
            maxWidth: '1200px',
            margin: '64px auto 0',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
          
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212, 178, 113, 0.2), transparent)' }} />
          <span style={{ fontFamily: 'var(--font-mono-portal)', fontSize: '0.5rem', letterSpacing: '0.4em', color: 'rgba(212, 178, 113, 0.3)', textTransform: 'uppercase' }}>Explore</span>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212, 178, 113, 0.2), transparent)' }} />
        </div>

        {/* ── Section Navigation Cards ── */}
        <section
          aria-label="Art sections"
          style={{
            padding: '48px 32px 96px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2px'
            }}>
            
            {artSections.map((section) =>
            <Link
              key={section.href}
              href={section.href}
              style={{
                display: 'block',
                padding: '40px 32px',
                backgroundColor: 'rgba(212, 178, 113, 0.03)',
                border: '1px solid rgba(212, 178, 113, 0.1)',
                textDecoration: 'none',
                position: 'relative',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
                overflow: 'hidden'
              }}>
              
                {/* Ornate corner */}
                <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(212, 178, 113, 0.25)'
                }}>
                
                  {section.meta}
                </div>

                <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: 'var(--gold-glow)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  lineHeight: 1
                }}>
                
                  {section.label}
                </p>

                <p
                style={{
                  fontFamily: 'var(--font-body-serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'rgba(240, 230, 209, 0.5)',
                  lineHeight: 1.5,
                  marginBottom: '24px'
                }}>
                
                  {section.desc}
                </p>

                <span
                style={{
                  fontFamily: 'var(--font-mono-portal)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(212, 178, 113, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                
                  Enter
                  <span aria-hidden="true" style={{ display: 'block', width: '20px', height: '1px', backgroundColor: 'currentColor' }} />
                </span>
              </Link>
            )}
          </div>
        </section>
      </main>

    </div>);

}