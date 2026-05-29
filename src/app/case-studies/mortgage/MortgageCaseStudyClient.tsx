'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

function MortgageModal({ onClose }: { onClose: () => void }) {
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
      aria-label="Mortgage Journey Preview">
      <div
        className="relative flex flex-col bg-white"
        style={{ width: 'min(96vw, 1400px)', height: 'min(92vh, 900px)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #E5E5E5', flexShrink: 0, backgroundColor: '#FAFAFA' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111111', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginBottom: '3px' }}>Interactive Journey Preview</p>
              <p style={{ fontSize: '13px', color: '#555555', fontWeight: 300 }}>Explore the redesigned mortgage experience — products, calculator, application journey, and FAQ.</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', border: '1px solid #E5E5E5', borderRadius: '2px', background: 'white', cursor: 'pointer', color: '#666666', flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>
          </button>
        </div>
        <div style={{ padding: '8px 24px', borderBottom: '1px solid #F0F0F0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FAFAFA' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111111', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>NCB Mortgage</span>
          <span style={{ fontSize: '10px', color: '#BBBBBB' }}>— Overview · Products · Calculator · Application Journey · FAQ</span>
        </div>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="/assets/prototypes/mortgage.html"
            title="Mortgage Journey Prototype"
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

export default function MortgageCaseStudyClient() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="case-study-sheet max-w-[1600px] mx-auto px-5 sm:px-10 py-10" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader activePage="Case Studies" />

      {/* Hero */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-[120px] lg:pb-[80px] max-w-[1000px]">
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-10" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Mortgage</span>
          <span>Product Design</span>
          <span>Case Study</span>
        </div>
        <TypingH1
          text="Mortgage Journeys"
          style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 200, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '32px', color: '#111111' }}
        />
        <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, maxWidth: '720px' }}>
          Redesigned customer-facing mortgage experiences to improve clarity, reduce friction, and make next steps easier to understand and act on.
        </p>
      </section>

      {/* Overview + Role */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        <div className="md:col-span-3" style={{ backgroundColor: '#F7F7F7', padding: 'clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>Overview</span>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, marginBottom: '24px' }}>
            The mortgage experience had grown across multiple pages, content types, and decision points over time. As a result, customers were often asked to navigate a lot of information before they fully understood which mortgage option suited them, what they needed to prepare, or what action to take next.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, marginBottom: '24px' }}>
            I helped improve the mortgage journeys by restructuring content, simplifying key paths, and designing clearer, more supportive interfaces across the customer-facing experience.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300 }}>
            Rather than treating the work as a single page redesign, I approached it as a journey problem: customers needed better orientation, better content flow, and clearer next steps from exploration through application readiness.
          </p>
        </div>
        <div className="md:col-span-1" style={{ backgroundColor: '#111111', padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>My Role</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['UX and Interface Improvement', 'Information Architecture', 'Journey Flow Design', 'Content Presentation', 'Design System Alignment'].map((r) => (
              <li key={r} style={{ fontSize: '13px', color: '#ffffff', padding: '12px 0', borderBottom: '1px solid #333333', fontWeight: 300 }}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* The Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-1">
        <div className="md:col-span-2" style={{ backgroundColor: '#F7F7F7', padding: '32px' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>The Challenge</span>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444444', fontWeight: 300 }}>
            The original experience suffered from weak hierarchy, unclear pathways, inconsistent UI, and next steps that were not obvious enough for users navigating a high-consideration financial product.
          </p>
        </div>
        <div className="md:col-span-2" style={{ backgroundColor: '#F7F7F7', padding: '32px', borderLeft: '1px solid #E5E5E5' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>My Role</span>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444444', fontWeight: 300 }}>
            I was the main designer driving the work through audits, restructuring, wireframes, prototypes, interface design, and stakeholder reviews.
          </p>
        </div>
      </div>

      {/* Process — Service Blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-1">
        {/* Blueprint list */}
        <div className="md:col-span-2 row-span-2" style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>Process / Hierarchy Refinement</span>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
            {[
              { num: '01', title: 'Audit', desc: 'Reviewed existing pages and journeys to identify friction points.' },
              { num: '02', title: 'Restructuring', desc: 'Improved information hierarchy, content logic, and task flow.' },
              { num: '03', title: 'Interface Design', desc: 'Created wireframes, prototypes, and refined visual direction.' },
              { num: '04', title: 'Validation', desc: 'Used analytics, lightweight testing, competitor review, and stakeholder input to refine decisions.' },
            ].map((item, i, arr) => (
              <div key={item.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px 0', borderBottom: i < arr.length - 1 ? '1px solid #E5E5E5' : 'none' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999999', marginTop: '2px', flexShrink: 0 }}>{item.num}</span>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '6px', color: '#111111' }}>{item.title}</h4>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Tracker */}
        <div className="md:col-span-2" style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block' }}>Key Touchpoint / Flow Structure</span>
          <div style={{ margin: '40px 16px', width: 'calc(100% - 32px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              <span>Explore</span>
              <span>Compare</span>
              <span style={{ color: '#999999' }}>Apply</span>
              <span style={{ color: '#999999' }}>Complete</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '4px', backgroundColor: '#E5E5E5', borderRadius: '9999px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '45%', backgroundColor: '#111111', borderRadius: '9999px' }} />
              <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#111111', borderRadius: '50%', boxShadow: '0 0 0 4px #F7F7F7' }} />
              <div style={{ position: 'absolute', top: '50%', left: '33%', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#111111', borderRadius: '50%', boxShadow: '0 0 0 4px #F7F7F7' }} />
              <div style={{ position: 'absolute', top: '50%', left: '66%', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#E5E5E5', borderRadius: '50%', boxShadow: '0 0 0 4px #F7F7F7' }} />
              <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#E5E5E5', borderRadius: '50%', boxShadow: '0 0 0 4px #F7F7F7' }} />
            </div>
            <div style={{ marginTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#111111', textAlign: 'center' }}>
              {'> CURRENT PHASE: '}<span style={{ backgroundColor: '#111111', color: '#ffffff', padding: '2px 8px', marginLeft: '4px' }}>COMPARE</span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>
            Production-ready screens designed to guide users through each stage of the mortgage journey — from initial exploration to confident next steps.
          </p>
        </div>

        {/* Friction Point */}
        <div className="md:col-span-1" style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>Friction Point Resolution</span>
          <h3 style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px', color: '#111111' }}>Hierarchy Refinement</h3>
          <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6, marginBottom: '24px' }}>
            Replaced unclear page structures with a consistent visual hierarchy that guides users from awareness to action.
          </p>
          <div style={{ backgroundColor: '#111111', height: '60px', width: '100%', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#00ff00', fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', letterSpacing: '0.1em' }}>&gt; STRUCTURE_OK</span>
          </div>
        </div>

        {/* Compliance / Security block */}
        <div className="md:col-span-1" style={{ backgroundColor: '#111111', padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>Design Approach</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {[
              { label: 'Aa', title: 'Typography' },
              { label: '⬡', title: 'Hierarchy' },
              { label: '→', title: 'Flow' },
              { label: '◻', title: 'Screens' },
            ].map((item) => (
              <div key={item.label} style={{ aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #333333', gap: '8px' }}>
                <span style={{ fontSize: '20px', color: '#ffffff', fontWeight: 300 }}>{item.label}</span>
                <span style={{ fontSize: '9px', fontFamily: "'JetBrains Mono', monospace", color: '#999999' }}>{item.title}</span>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#aaaaaa', borderTop: '1px solid #333333', paddingTop: '20px', lineHeight: 1.6 }}>
            <span style={{ color: '#666666' }}>// Design outputs</span><br />
            &gt; Wireframes: Delivered<br />
            &gt; Prototypes: Validated
          </div>
        </div>
      </div>

      {/* Pull Quote */}
      <div className="mt-1" style={{ backgroundColor: '#111111', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 40px)' }}>
        <p style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 200, lineHeight: 1.5, color: '#ffffff', letterSpacing: '-0.01em', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          "In mortgage experiences, users need more than information — they need structure, confidence, and clear next steps. This work focused on making that journey easier to follow."
        </p>
      </div>

      {/* Key Decisions */}
      <div className="mt-1" style={{ backgroundColor: '#F7F7F7', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 32px)' }}>
        <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '32px' }}>Key Decisions</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
          {[
            { num: '01', text: 'Improved hierarchy and scanning across product pages.' },
            { num: '02', text: 'Clarified next steps and reduced ambiguity in the journey.' },
            { num: '03', text: 'Strengthened action visibility and CTA clarity.' },
            { num: '04', text: 'Aligned the experience more closely with user expectations.' },
            { num: '05', text: 'Created a stronger base for future standardisation.' },
          ].map((item) => (
            <div key={item.num} style={{ backgroundColor: '#ffffff', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999999' }}>{item.num}</span>
              <p style={{ fontSize: '13px', color: '#444444', lineHeight: 1.6, fontWeight: 300 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Changed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <div style={{ backgroundColor: '#F7F7F7', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '32px' }}>What Changed</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Improved product understanding and clarity of progression.',
              'Made actions easier to identify and act on.',
              'Supported stronger task completion across important flow points.',
              'Gave stakeholders a more coherent direction for iteration and rollout.',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 0', borderBottom: '1px solid #E5E5E5' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111111', flexShrink: 0, marginTop: '6px' }} />
                <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicative Outcomes */}
        <div style={{ backgroundColor: '#111111', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '8px' }}>Indicative Outcomes</span>
          <p style={{ fontSize: '11px', color: '#555555', marginBottom: '32px', fontFamily: "'JetBrains Mono', monospace" }}>Illustrative outcome structure — replace with validated numbers or verified measures later.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { num: '01', text: 'Improved progression from information pages to key next steps by [insert validated measure]' },
              { num: '02', text: 'Increased engagement with calculators, eligibility tools, or application pathways by [insert confirmed figure]' },
              { num: '03', text: 'Reduced ambiguity at critical decision points [insert validated behavioral or feedback measure]' },
            ].map((item) => (
              <div key={item.num} style={{ display: 'flex', gap: '20px', paddingBottom: '24px', borderBottom: '1px solid #222222' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#555555', flexShrink: 0, marginTop: '2px' }}>{item.num}</span>
                <p style={{ fontSize: '14px', color: '#aaaaaa', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcome Summary */}
      <div className="mt-1" style={{ backgroundColor: '#F7F7F7', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 32px)' }}>
        <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>Outcome</span>
        <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, maxWidth: '720px' }}>
          The redesign made mortgage journeys easier to understand and navigate, while supporting a more coherent and user-friendly experience overall.
        </p>
      </div>

      {/* Prototype CTA */}
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

      {showModal && <MortgageModal onClose={() => setShowModal(false)} />}

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
          href="/case-studies/type-design"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>← Previous</span>
          <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Designing a Typeface for a National Brand</span>
        </Link>
        <Link
          href="/case-studies/gleaner"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px', textAlign: 'right' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Next →</span>
          <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Modernizing The Gleaner for Digital Reading</span>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
