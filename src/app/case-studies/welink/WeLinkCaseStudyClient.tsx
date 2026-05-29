'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

function WeLinkDesignModal({ onClose }: { onClose: () => void }) {
  const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const modalContent = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.72)' }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="WeLink Platform Preview">
      <div
        className="relative flex flex-col bg-white"
        style={{ width: 'min(96vw, 1400px)', height: 'min(92vh, 900px)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #E5E5E5', flexShrink: 0, backgroundColor: '#FAFAFA' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4CAF50', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginBottom: '3px' }}>Interactive Platform Preview</p>
              <p style={{ fontSize: '13px', color: '#555555', fontWeight: 300 }}>Explore the WeLink Caribbean concept platform design — homepage, service discovery, and worker listings.</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', border: '1px solid #E5E5E5', borderRadius: '2px', background: 'white', cursor: 'pointer', color: '#666666', flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128,192.66,205.66A8,8,0,0,1,205.66,216.34Z" />
            </svg>
          </button>
        </div>
        <div style={{ padding: '8px 24px', borderBottom: '1px solid #F0F0F0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FAFAFA' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4CAF50', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>WeLink Caribbean</span>
          <span style={{ fontSize: '10px', color: '#BBBBBB' }}>— Full platform concept with homepage, search, service categories, and app download</span>
        </div>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="/assets/prototypes/welink.html"
            title="WeLink Platform Prototype"
            style={{ position: 'absolute', top: 0, left: 0, width: '1280px', height: '100%', border: 'none', transformOrigin: 'top left' }}
            ref={(el) => {
              if (el) {
                const updateScale = () => {
                  const containerWidth = el.parentElement?.offsetWidth || 1280;
                  const scale = containerWidth / 1280;
                  el.style.transform = `scale(${scale})`;
                  el.style.height = `${100 / scale}%`;
                };
                updateScale();
                const ro = new ResizeObserver(updateScale);
                if (el.parentElement) ro.observe(el.parentElement);
              }
            }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );

  return mounted ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default function WeLinkCaseStudyClient() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-[1600px] mx-auto px-5 sm:px-10 py-10" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader activePage="Case Studies" />
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-[120px] lg:pb-[80px] max-w-[1000px]">
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-10" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Product Design</span>
          <span>Platform Concept</span>
          <span>Case Study</span>
        </div>
        <TypingH1
          text="WeLink Caribbean"
          style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 200, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '32px', color: '#111111' }}
        />
        <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, maxWidth: '720px' }}>
          A concept platform designed to help users discover skilled workers across the Caribbean through clearer browsing, stronger structure, and more practical service discovery.
        </p>
      </section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mb-1">
        {[
          { value: 'Discovery', label: 'Core Focus' },
          { value: 'Concept', label: 'Project Stage' },
          { value: 'Multi-region', label: 'Platform Context' },
          { value: 'Service browsing', label: 'UX Priority' },
        ]?.map((m) => (
          <div key={m?.label} style={{ backgroundColor: '#F7F7F7', padding: '24px' }}>
            <span style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 200, display: 'block', color: '#111111', lineHeight: 1.2 }}>{m?.value}</span>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', marginTop: '8px', display: 'block' }}>{m?.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-1">
        <div className="md:col-span-3" style={{ backgroundColor: '#F7F7F7', padding: 'clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>Overview</span>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, marginBottom: '32px' }}>
            WeLink is a platform designed to help users discover skilled workers and services across the Caribbean. The challenge was to create a browsing and discovery experience that felt intuitive, trustworthy, and easy to navigate across multiple service categories and geographic regions.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300 }}>
            I led the design work across the platform, focusing on service discovery, worker profiles, booking flows, and the overall information architecture. The goal was to make it easy for users to find what they needed, understand their options, and take action with confidence.
          </p>
        </div>
        <div className="md:col-span-1" style={{ backgroundColor: '#111111', padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>My Role</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Lead Product Designer', 'Platform Architecture', 'Discovery & Search Design', 'Interaction Design']?.map((r) => (
              <li key={r} style={{ fontSize: '13px', color: '#ffffff', padding: '12px 0', borderBottom: '1px solid #333333', fontWeight: 300 }}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* ── Challenge + Process ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-1">
        {/* Challenge */}
        <div className="lg:col-span-2" style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>The Challenge</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px', color: '#111111' }}>Marketplace Clarity</h2>
          <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, maxWidth: '400px' }}>
            Marketplace and services platforms need to reduce ambiguity quickly. Users need to understand what the platform offers, how to find the right person, and how to move toward action without friction — especially in a multi-region context.
          </p>
        </div>

        {/* Process Workflow */}
        <div className="lg:col-span-2" style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '32px' }}>Process Workflow</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
            {[
              { num: '01', title: 'Discovery Review', desc: 'Reviewed discovery and service-browsing patterns to clarify the core user need and platform logic.' },
              { num: '02', title: 'Information Structuring', desc: 'Improved hierarchy, navigation, and service organization so users could better understand how to explore the platform.' },
              { num: '03', title: 'Interface Direction', desc: 'Refined interface ideas and page structure to support clearer matching and service discovery.' },
              { num: '04', title: 'Concept Development', desc: 'Used the project as a way to shape a stronger product direction, even though the platform did not go live.' },
            ].map((step, i) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: i === 0 ? '8px' : '20px', paddingBottom: '20px', borderTop: '1px solid #E5E5E5' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999' }}>{step.num}</span>
                <h4 style={{ fontSize: '16px', fontWeight: 500, color: '#111111', margin: 0 }}>{step.title}</h4>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, margin: 0, maxWidth: '400px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Dark Pull Quote ── */}
      <div className="mt-1" style={{ backgroundColor: '#111111', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 48px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)', pointerEvents: 'none' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', display: 'block', marginBottom: '32px', position: 'relative', zIndex: 1 }}>Design Philosophy</span>
        <h3 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.4, letterSpacing: '-0.01em', color: '#eeeeee', maxWidth: '700px', position: 'relative', zIndex: 1, margin: 0 }}>
          "Concept work still benefits from rigor. Even when a platform does not launch, the value lies in how clearly the problem is framed and how effectively the solution structure supports the intended experience."
        </h3>
      </div>

      {/* ── Key Decisions + Platform Concept ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-1">
        {/* Key Decisions */}
        <div style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '32px' }}>Key Decisions</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 32px', marginBottom: '40px' }}>
            {[
              { num: '01', text: 'Improved discoverability of skilled-worker listings.' },
              { num: '02', text: 'Clarified platform pathways and structure.' },
              { num: '03', text: 'Made service exploration easier to understand.' },
              { num: '04', text: 'Supported a more coherent browsing experience.' },
            ].map((d) => (
              <div key={d.num} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', borderBottom: '1px solid #E5E5E5', paddingBottom: '8px' }}>{d.num}</span>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, margin: 0 }}>{d.text}</p>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #E5E5E5', color: '#666666', lineHeight: 1.8 }}>
            <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', marginBottom: '12px' }}>What Changed</div>
            <div><span style={{ color: '#999999' }}>➜</span> Improved clarity of the platform structure.</div>
            <div><span style={{ color: '#999999' }}>➜</span> Made service discovery easier to navigate.</div>
            <div><span style={{ color: '#999999' }}>➜</span> Strengthened the overall concept journey.</div>
            <div><span style={{ color: '#999999' }}>➜</span> Created a clearer foundation for a service-matching experience.</div>
          </div>
        </div>

        {/* Platform Concept Interface Abstraction */}
        <div style={{ backgroundColor: '#111111', padding: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)', pointerEvents: 'none' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', display: 'block', marginBottom: '32px', position: 'relative', zIndex: 1 }}>Platform Concept / Interface Abstraction</span>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', opacity: 0.9, maxWidth: '500px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
            {/* Search bar */}
            <div style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', padding: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              Find skilled workers in your region...
            </div>
            {/* Category pills */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { label: 'Plumbing', active: false },
                { label: 'Electrical', active: true },
                { label: 'Carpentry', active: false },
                { label: 'Masonry', active: false },
              ].map((cat) => (
                <div key={cat.label} style={{ border: cat.active ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.2)', backgroundColor: cat.active ? 'rgba(255,255,255,0.1)' : 'transparent', borderRadius: '999px', padding: '6px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: cat.active ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>{cat.label}</div>
              ))}
            </div>
            {/* Worker cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { wide: false, w1: '66%', w2: '100%', w3: '80%' },
                { wide: false, w1: '50%', w2: '100%', w3: '75%' },
              ].map((card, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                    <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', width: card.w1 }} />
                    <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', width: card.w2 }} />
                    <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', width: card.w3 }} />
                  </div>
                </div>
              ))}
              <div style={{ gridColumn: '1 / -1', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                  <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', width: '33%' }} />
                  <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', width: '75%' }} />
                  <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '999px', width: '50%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Indicative Outcomes ── */}
      <div className="mt-1" style={{ backgroundColor: '#F7F7F7', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 48px)' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '40px' }}>Indicative Outcomes</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: '01', text: 'Improved clarity of service discovery and browsing structure.' },
            { num: '02', text: 'Increased visibility of key worker categories or listings.' },
            { num: '03', text: 'Strengthened matching-flow clarity.' },
          ].map((o) => (
            <div key={o.num} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ fontSize: '64px', fontWeight: 200, letterSpacing: '-0.04em', marginBottom: '16px', lineHeight: 1, color: '#999999' }}>{o.num}</div>
              <p style={{ fontSize: '15px', color: '#111111', lineHeight: 1.6, marginBottom: '24px', maxWidth: '300px' }}>{o.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => setShowModal(true)}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#ffffff',
            backgroundColor: '#111111',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            minHeight: '44px',
            minWidth: '44px',
            transition: 'background-color 0.2s ease',
          }}
          onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#333333'; }}
          onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#111111'; }}
          onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#333333'; }}
          onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#111111'; }}>
          View Interactive Prototype
        </button>
      </div>
      {showModal && <WeLinkDesignModal onClose={() => setShowModal(false)} />}
      <div style={{ marginTop: '48px' }}>
        <Link
          href="/case-studies"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#111111',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            minHeight: '44px',
            minWidth: '44px',
            padding: '8px 16px',
          }}>
          ← Back to Case Studies
        </Link>
      </div>
      {/* Prev / Next Case Study Navigation */}
      <div className="flex justify-between items-center mt-8 pt-8" style={{ borderTop: '1px solid #E5E5E5' }}>
        <Link
          href="/case-studies/auto"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>← Previous</span>
          <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Simplifying the Auto Loan Journey</span>
        </Link>
        <Link
          href="/case-studies/banking-loans"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px', textAlign: 'right' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Next →</span>
          <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Streamlining an Internal Loans Management Platform</span>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
