'use client';
import React from 'react';
import Link from 'next/link';
import RealmNav from '@/components/RealmNav';

export default function ProductWritingPage() {
  return (
    <>
      <RealmNav brandName="Larnelle Chambers" />
      <div
        style={{
          backgroundColor: '#05060f',
          color: '#e8d099',
          minHeight: '100vh',
          fontFamily: "'Cormorant Garamond', serif",
          paddingTop: '56px',
        }}
      >
        <main>
          <section style={{ padding: '64px 40px 100px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '64px' }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.4em',
                  color: 'rgba(125,167,217,0.6)',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ display: 'block', width: '32px', height: '1px', backgroundColor: 'rgba(125,167,217,0.3)' }} />
                M·II // STRUCTURA
              </div>
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: '#f7e6b7',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                }}
              >
                Writing
              </h1>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'rgba(232,208,153,0.65)',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                }}
              >
                Articles, essays, and reflections on design practice, systems thinking, and the craft of building products.
              </p>
            </div>

            {/* Redirect card */}
            <div
              style={{
                padding: '48px',
                backgroundColor: 'rgba(10,11,28,0.6)',
                border: '1px solid rgba(212,178,113,0.15)',
                position: 'relative',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '3px', height: '100%',
                  background: 'linear-gradient(to bottom, rgba(125,167,217,0.6), rgba(125,167,217,0.1))',
                }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'rgba(232,208,153,0.6)',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                Design writing and essays are available in the main writing archive — covering design systems, engineering culture, and the intersection of architecture and digital products.
              </p>
              <Link
                href="/writing"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(125,167,217,0.8)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(125,167,217,0.3)',
                  paddingBottom: '3px',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(125,167,217,1)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(125,167,217,0.8)')}
              >
                View Writing Archive →
              </Link>
            </div>
          </section>
        </main>

        <footer
          style={{
            padding: '40px',
            borderTop: '1px solid rgba(212,178,113,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'rgba(232,208,153,0.3)',
            textTransform: 'uppercase',
          }}
        >
          <div>SYS_LOC: STRUCTURA_SCRIPTORIUM</div>
          <div>VER. 9.4.2 // OBSIDIAN</div>
        </footer>
      </div>
    </>
  );
}
