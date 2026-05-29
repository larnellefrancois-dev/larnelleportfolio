'use client';

import React, { useState } from 'react';

import DetailPageTemplate from '@/components/DetailPageTemplate';

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.92)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        cursor: 'zoom-out',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: '28px',
          cursor: 'pointer',
          lineHeight: 1,
          padding: '8px',
        }}
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          cursor: 'default',
          borderRadius: '2px',
        }}
      />
    </div>
  );
}

export default function MobileBankingClient() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <DetailPageTemplate
      realm="product"
      breadcrumbs={[
        { label: 'Product Design', href: '/product-design' },
        { label: 'Case Studies', href: '/product-design/case-studies' },
        { label: 'Mobile Banking', href: '/case-studies/mobile-banking' },
      ]}
      arcaneIndex="M·II // STRUCTURA"
      title="NCB Mobile App Improvement"
      subtitle="Helping transition a large-scale banking product to a stronger, more consistent design system."
      meta={[
        { label: 'Client', value: 'NCB Financial Group' },
        { label: 'Type', value: 'Mobile UX' },
        { label: 'Year', value: '2023' },
        { label: 'Downloads', value: '1M+' },
        { label: 'Rating', value: '4.6★' },
      ]}
      navLinks={[
        { label: 'NCB Design System', href: '/case-studies/ncb-design-system', direction: 'prev' },
        { label: 'Type Design', href: '/case-studies/type-design', direction: 'next' },
      ]}
      sysLabel="SYS_LOC: CASE_MOBILE"
    >
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}

      {/* ── Overview + Role ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-1">
        <div className="md:col-span-3" style={{ backgroundColor: 'rgba(10,11,28,0.6)', padding: 'clamp(20px, 4vw, 32px)', border: '1px solid rgba(125,167,217,0.1)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.5)', display: 'block', marginBottom: '24px' }}>
            Overview
          </span>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: 1.7, color: 'rgba(232,208,153,0.8)', fontWeight: 300, marginBottom: '24px' }}>
            I supported the ongoing improvement of the NCB mobile app by helping the product design team transition key experiences into the new design system, creating missing components, and contributing to testing and design quality across the rollout.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: 1.7, color: 'rgba(232,208,153,0.8)', fontWeight: 300, marginBottom: '24px' }}>
            As the NCB mobile app evolved, different features and journeys had been designed and updated over time by multiple teams. That created a familiar enterprise problem: parts of the product worked well individually, but the overall experience risked becoming visually and structurally inconsistent.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: 1.7, color: 'rgba(232,208,153,0.8)', fontWeight: 300 }}>
            My contribution was centered on helping the team move more of the app into the new design system in a practical, usable way — guiding designers through the transition, creating new reusable components where gaps existed, and helping validate the quality of what was being shipped.
          </p>
        </div>
        <div className="md:col-span-1" style={{ backgroundColor: 'rgba(5,6,15,0.8)', padding: '32px', border: '1px solid rgba(125,167,217,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.5)', display: 'block', marginBottom: '24px' }}>
            My Role
          </span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Design System Adoption', 'Component Design', 'Quality Support', 'iOS + Android'].map((r) => (
              <li key={r} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#e8d099', padding: '12px 0', borderBottom: '1px solid rgba(125,167,217,0.1)', fontWeight: 300 }}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── The Challenge ── */}
      <div style={{ backgroundColor: 'rgba(10,11,28,0.6)', padding: '32px', marginBottom: '4px', border: '1px solid rgba(125,167,217,0.1)' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.5)', display: 'block', marginBottom: '24px' }}>
          The Challenge
        </span>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(232,208,153,0.8)', fontWeight: 300, maxWidth: '800px', marginBottom: '32px' }}>
          The app was serving a large, active customer base across iOS and Android, so even small inconsistencies had an outsized effect on usability, trust, and delivery speed.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '800px' }}>
          {[
            'Legacy patterns and newer patterns were coexisting',
            'Not every required mobile use case was fully covered by the new design system yet',
            'Designers needed support translating existing work into the new system without slowing delivery',
            'Feature teams needed reusable components and clearer guidance to avoid one-off solutions',
            'Testing and quality checks were important because banking flows have little room for confusion or error',
          ].map((item) => (
            <li key={item} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', lineHeight: 1.7, color: 'rgba(212,197,181,0.65)', fontWeight: 300, padding: '12px 0', borderBottom: '1px solid rgba(125,167,217,0.08)', paddingLeft: '16px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'rgba(125,167,217,0.4)' }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── What I Did ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-1">
        {[
          {
            num: '01',
            title: 'Helped designers transition to the new design system',
            body: 'One of the biggest needs was helping assigned designers apply the new system in real product work. A design system is only useful if teams can actually use it without friction.',
            items: ['Map older patterns to updated system patterns', 'Identify where existing screens could be standardized', 'Reduce avoidable variation in layouts, controls, and interaction patterns', 'Make design decisions that aligned more closely with the shared system'],
            dark: false,
          },
          {
            num: '02',
            title: 'Created new components and filled system gaps',
            body: 'As teams applied the new design system to real banking flows, gaps naturally appeared. Some mobile-specific needs were not yet fully supported by the available component set.',
            items: ['Reusable mobile UI patterns', 'Clearer states and behaviours', 'Consistency across iOS and Android contexts', 'Better alignment between product needs and the design system library'],
            dark: true,
          },
          {
            num: '03',
            title: 'Supported consistency across the app',
            body: 'Large banking products often become fragmented when different teams solve similar problems in slightly different ways. I helped reduce that fragmentation by reinforcing shared patterns.',
            items: ['Component usage', 'Spacing and layout consistency', 'Hierarchy and information clarity', 'Standardization of common UI patterns', 'Stronger alignment between visual design and system rules'],
            dark: false,
          },
          {
            num: '04',
            title: 'Contributed to testing and design validation',
            body: 'Because this was a banking product, quality and clarity mattered at every step. I supported testing and review efforts to help ensure that the updated designs held up in practice.',
            items: ['Reviewing flows before handoff or release', 'Checking that new components worked as intended in context', 'Identifying inconsistencies or friction points', 'Supporting validation of designs against expected behaviour'],
            dark: false,
          },
        ].map((section) => (
          <div key={section.num} style={{ backgroundColor: section.dark ? 'rgba(5,6,15,0.9)' : 'rgba(10,11,28,0.6)', padding: '32px', border: `1px solid ${section.dark ? 'rgba(125,167,217,0.15)' : 'rgba(125,167,217,0.1)'}` }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.4)', display: 'block', marginBottom: '16px' }}>{section.num}</span>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 400, letterSpacing: '0.05em', color: '#f7e6b7', marginBottom: '16px', lineHeight: 1.3 }}>{section.title}</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', lineHeight: 1.7, color: 'rgba(232,208,153,0.65)', fontWeight: 300, marginBottom: '20px' }}>{section.body}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.items.map((item) => (
                <li key={item} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(212,197,181,0.55)', fontWeight: 300, padding: '8px 0', borderBottom: '1px solid rgba(125,167,217,0.08)' }}>
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Outcome ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-1">
        <div className="md:col-span-3" style={{ backgroundColor: 'rgba(10,11,28,0.6)', padding: '32px', border: '1px solid rgba(125,167,217,0.1)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.5)', display: 'block', marginBottom: '24px' }}>
            Outcome and Impact
          </span>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(232,208,153,0.8)', fontWeight: 300, marginBottom: '24px' }}>
            My work helped strengthen the app in a few key ways. First, it made it easier for designers to work within a more unified system. Second, it expanded the design system through real product needs. Third, it supported a more consistent and polished customer experience across the app.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', lineHeight: 1.7, color: 'rgba(212,197,181,0.65)', fontWeight: 300 }}>
            The broader product continued to perform strongly, with 1M+ downloads, a 4.6★ rating on Google Play, and 75+ NPS. While those outcomes were the result of a larger team effort, my contribution helped support the consistency, scalability, and design quality behind that experience.
          </p>
        </div>
        <div className="md:col-span-1" style={{ backgroundColor: 'rgba(5,6,15,0.9)', padding: '32px', border: '1px solid rgba(125,167,217,0.15)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.5)', display: 'block' }}>Snapshot</span>
          {[{ value: '1M+', label: 'Downloads' }, { value: '4.6★', label: 'Google Play Rating' }, { value: '75+', label: 'NPS' }].map((m) => (
            <div key={m.label} style={{ borderBottom: '1px solid rgba(125,167,217,0.1)', paddingBottom: '20px' }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 400, display: 'block', color: '#f7e6b7' }}>{m.value}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(125,167,217,0.5)', marginTop: '4px', display: 'block' }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Image tiles ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-1">
        {[
          { src: '/assets/images/Screenshot_2026-04-04_at_12.01.10_PM-1775322190359.png', alt: 'Figma design file showing NCB mobile app screens and component work', caption: 'Updated NCB mobile app — key screens showing improved consistency, hierarchy, and design system alignment' },
          { src: '/assets/images/image-1775321950897.png', alt: 'NCB Mobile Banking app on Google Play Store showing 1M+ downloads and 4.6 star rating', caption: 'App store presence — 1M+ downloads and 4.6★ Google Play rating reflecting improved product quality' },
        ].map((tile) => (
          <button
            key={tile.src}
            onClick={() => setLightbox({ src: tile.src, alt: tile.alt })}
            aria-label={`View ${tile.alt} full size`}
            style={{ position: 'relative', height: '360px', overflow: 'hidden', padding: 0, border: '1px solid rgba(125,167,217,0.1)', cursor: 'zoom-in', display: 'block', width: '100%', backgroundColor: 'rgba(10,11,28,0.6)' }}
          >
            <img src={tile.src} alt={tile.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 32px 20px', background: 'linear-gradient(to top, rgba(5,6,15,0.9) 0%, transparent 100%)' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', color: 'rgba(232,208,153,0.7)', fontStyle: 'italic', lineHeight: 1.5 }}>{tile.caption}</span>
            </div>
          </button>
        ))}
      </div>
    </DetailPageTemplate>
  );
}
