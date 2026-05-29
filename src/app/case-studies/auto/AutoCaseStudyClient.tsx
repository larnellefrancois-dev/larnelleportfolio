'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';


function AutoLoansModal({ onClose }: { onClose: () => void }) {
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
      aria-label="Auto Loans Redesign Preview">
      <div
        className="relative flex flex-col bg-white"
        style={{ width: 'min(96vw, 1400px)', height: 'min(92vh, 900px)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #E5E5E5', flexShrink: 0, backgroundColor: '#FAFAFA' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111111', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginBottom: '3px' }}>Product Design Preview</p>
              <p style={{ fontSize: '13px', color: '#555555', fontWeight: 300 }}>Auto Loan Journey Redesign — Product Design</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', border: '1px solid #E5E5E5', borderRadius: '2px', background: 'white', cursor: 'pointer', color: '#666666', flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>
          </button>
        </div>
        <div style={{ flex: 1, position: 'relative', overflow: 'auto', backgroundColor: '#F0F0F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/images/image-1775328065254.png"
            alt="Auto Loan Journey Redesign — Product Design"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );

  return mounted ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default function AutoCaseStudyClient() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#ffffff', color: '#111111', WebkitFontSmoothing: 'antialiased' }}>
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 py-10">
        <SiteHeader activePage="Case Studies" />

        <main className="grid grid-cols-1 md:grid-cols-4 gap-1 w-full" style={{ gridAutoRows: 'minmax(300px, auto)' }}>

          {/* Hero — col-span-3 */}
          <article className="col-span-1 md:col-span-3 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
            <div>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>Case Study / Journey Optimization</span>
              <h1 style={{ fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 200, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '24px', textTransform: 'uppercase' }}>Auto Loan Journey Redesign.</h1>
              <p style={{ fontSize: '15px', color: '#666666', lineHeight: 1.6, maxWidth: '600px' }}>
                This work focused on improving the structure and usability of auto loan journeys so users could more easily understand the offering, their options, and the steps required to move forward.
              </p>
            </div>
          </article>

          {/* Stats Tile — dark panel */}
          <div className="col-span-1 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: '#111111', color: '#ffffff' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666', display: 'block', marginBottom: '16px' }}>At a Glance</span>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ borderBottom: '1px solid #333333', paddingBottom: '20px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '36px', fontWeight: 200, color: '#ffffff', display: 'block', lineHeight: 1 }}>+40</span>
                <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666', marginTop: '6px', display: 'block' }}>NPS POINTS</span>
              </div>
              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '36px', fontWeight: 200, color: '#ffffff', display: 'block', lineHeight: 1 }}>4</span>
                <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666', marginTop: '6px', display: 'block' }}>CORE UX IMPROVEMENTS</span>
              </div>
            </div>
          </div>

          {/* Process Phase Breakdown — col-span-2 row-span-2 */}
          <div className="col-span-1 md:col-span-2 p-6 sm:p-8 flex flex-col relative overflow-hidden" style={{ backgroundColor: '#F7F7F7', gridRow: 'span 2' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>Process / Phase Breakdown</span>
            <div className="flex-1 flex flex-col mt-4">
              {[
                { num: '01', title: 'Audit', desc: 'Reviewed the current journey to identify weak spots in hierarchy, content, and action visibility.' },
                { num: '02', title: 'Restructuring', desc: 'Clarified page flow, product communication, and next-step logic to ensure a seamless progression.' },
                { num: '03', title: 'Interface Design', desc: 'Refined CTA placement, visual hierarchy, and supporting interface structure for maximum legibility.' },
                { num: '04', title: 'Validation', desc: 'Used stakeholder feedback, analytics, and lightweight evaluation to improve the direction iteratively.' },
              ].map((item, i, arr) => (
                <div key={item.num} className="flex items-start gap-5 py-6" style={{ borderBottom: i < arr.length - 1 ? '1px solid #E5E5E5' : 'none' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999999', marginTop: '4px' }}>{item.num}</span>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '12px', color: '#666666', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge block — col-span-2 */}
          <div className="col-span-1 md:col-span-2 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
            <div>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>The Challenge</span>
              <h3 style={{ fontSize: '28px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>Structural Fragmentation</h3>
              <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>
                The original experience needed clearer hierarchy, stronger CTA visibility, more consistent UI, and more understandable flow logic in order to better support decision-making and task progression.
              </p>
            </div>
            {/* Before/after bar visual */}
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '24px', opacity: 0.7 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '128px' }}>
                <div style={{ height: '8px', width: '100%', backgroundColor: '#D1D1D1' }} />
                <div style={{ height: '8px', width: '75%', backgroundColor: '#D1D1D1', marginLeft: '16px' }} />
                <div style={{ height: '8px', width: '50%', backgroundColor: '#D1D1D1' }} />
                <div style={{ height: '8px', width: '100%', backgroundColor: '#D1D1D1', marginLeft: '8px' }} />
              </div>
              <svg width="20" height="20" fill="none" stroke="#999999" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '128px' }}>
                <div style={{ height: '8px', width: '100%', backgroundColor: '#111111' }} />
                <div style={{ height: '8px', width: '100%', backgroundColor: '#111111' }} />
                <div style={{ height: '8px', width: '100%', backgroundColor: '#111111' }} />
                <div style={{ height: '8px', width: '50%', backgroundColor: '#111111' }} />
              </div>
            </div>
          </div>

          {/* Dark pull quote — col-span-2 */}
          <div className="col-span-1 md:col-span-2 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden" style={{ backgroundColor: '#111111', color: '#ffffff' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666', display: 'block', marginBottom: '32px' }}>Design Philosophy</span>
            <p style={{ fontSize: '26px', fontWeight: 300, lineHeight: 1.4, color: '#E5E5E5', letterSpacing: '-0.01em' }}>
              "For products like auto loans, users need the interface to guide them with clarity. The strongest improvements often come from making the path more legible, not just more attractive."
            </p>
          </div>

          {/* Key Decisions & CTA Refinement — col-span-2 */}
          <div className="col-span-1 md:col-span-2 p-6 sm:p-8 flex flex-col relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>Key Decisions &amp; CTA Refinement</span>
            <div className="grid grid-cols-2 gap-8 mb-8" style={{ borderBottom: '1px solid #E5E5E5', paddingBottom: '32px' }}>
              {[
                { num: '01', text: 'Clarified core product communication.' },
                { num: '02', text: 'Improved CTA visibility and made pathways easier to follow.' },
                { num: '03', text: 'Reduced friction in key action points.' },
                { num: '04', text: 'Increased visual consistency across the journey.' },
              ].map((item) => (
                <div key={item.num} className="flex flex-col gap-2">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999' }}>{item.num}</span>
                  <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.5 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-2">
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '16px' }}>What Changed</span>
              <ul className="flex flex-col gap-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#666666', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Made product pathways easier to understand.',
                  'Improved next-step visibility.',
                  'Reduced friction in the journey.',
                  'Created a more coherent user flow.',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span style={{ color: '#111111' }}>&gt;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Journey Flow + Final UI Direction — col-span-2 dark */}
          <div className="col-span-1 md:col-span-2 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: '#111111', color: '#ffffff' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666', display: 'block', marginBottom: '16px' }}>Journey Flow + Final UI Direction</span>
            <div className="flex-1 flex flex-col items-center justify-center py-10 w-full">
              {/* Progress line */}
              <div className="w-full flex justify-between items-center relative px-4 mb-10">
                <div style={{ position: 'absolute', left: '16px', right: '16px', height: '1px', backgroundColor: '#333333', top: '50%', transform: 'translateY(-50%)', zIndex: 0 }} />
                <div style={{ position: 'absolute', left: '16px', width: '50%', height: '1px', backgroundColor: '#ffffff', top: '50%', transform: 'translateY(-50%)', zIndex: 0 }} />
                {[true, true, false, false].map((active, i) => (
                  <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: active ? '#ffffff' : '#333333', zIndex: 10, boxShadow: '0 0 0 4px #111111' }} />
                ))}
              </div>
              {/* UI wireframe cards */}
              <div className="flex gap-4 w-full">
                <div className="flex-1 rounded p-4" style={{ border: '1px solid #333333', backgroundColor: '#1A1A1A', opacity: 0.5 }}>
                  <div style={{ width: '50%', height: '8px', backgroundColor: '#333333', marginBottom: '16px' }} />
                  <div style={{ width: '100%', height: '4px', backgroundColor: '#333333', marginBottom: '8px' }} />
                  <div style={{ width: '75%', height: '4px', backgroundColor: '#333333' }} />
                </div>
                <div className="flex-1 rounded p-4 relative" style={{ border: '1px solid #E5E5E5', backgroundColor: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transform: 'scale(1.05)', zIndex: 10 }}>
                  <div style={{ width: '50%', height: '8px', backgroundColor: '#111111', marginBottom: '16px' }} />
                  <div style={{ width: '100%', height: '4px', backgroundColor: '#E5E5E5', marginBottom: '8px' }} />
                  <div style={{ width: '75%', height: '4px', backgroundColor: '#E5E5E5', marginBottom: '24px' }} />
                  <div style={{ width: '100%', height: '24px', backgroundColor: '#111111', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '33%', height: '4px', backgroundColor: '#ffffff', opacity: 0.5 }} />
                  </div>
                </div>
                <div className="flex-1 rounded p-4" style={{ border: '1px solid #333333', backgroundColor: '#1A1A1A', opacity: 0.5 }}>
                  <div style={{ width: '50%', height: '8px', backgroundColor: '#333333', marginBottom: '16px' }} />
                  <div style={{ width: '100%', height: '32px', backgroundColor: '#333333', borderRadius: '2px' }} />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#666666', borderTop: '1px solid #333333', paddingTop: '16px' }}>
              <span>SYSTEM ARCHITECTURE</span>
              <span style={{ color: '#ffffff' }}>PROTOTYPE_V2.4</span>
            </div>
          </div>

          {/* Indicative Outcomes — col-span-4 */}
          <div className="col-span-1 md:col-span-4 p-6 sm:p-8 flex flex-col relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '32px' }}>Indicative Outcomes</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { label: 'Metric 01', value: '+40 NPS Points', desc: 'Improved customer sentiment after simplifying the journey and making next steps clearer.' },
                { label: 'Metric 02', value: '15% Higher CTA Engagement', desc: 'Stronger movement from product exploration to action through improved hierarchy and CTA visibility.' },
                { label: 'Metric 03', value: '60% Better Task Clarity', desc: 'Better understanding of options, eligibility, and next steps across key entry points.' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col" style={{ borderLeft: '1px solid #111111', paddingLeft: '24px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', textTransform: 'uppercase', marginBottom: '8px' }}>{m.label}</span>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '28px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#111111', marginBottom: '12px' }}>{m.value}</div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Prototype CTA */}
          <div className="col-span-1 md:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8" style={{ backgroundColor: '#111111', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'inline-block' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live Site</span>
              </div>
              <p style={{ fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 200, color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                Explore the redesigned auto loan experience
              </p>
              <p style={{ fontSize: '14px', color: '#888888', fontWeight: 300, lineHeight: 1.6 }}>
                The redesigned site is now live at drive.jncb.com — browse the updated product experience directly.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              style={{ padding: '14px 32px', border: '1px solid #333333', background: 'transparent', color: '#ffffff', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'Inter', sans-serif", flexShrink: 0, minHeight: '44px', transition: 'border-color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#333333')}>
              View Product Design →
            </button>
          </div>

        </main>

        {/* Prev / Next Case Study Navigation */}
        <div className="flex justify-between items-center mt-8 pt-8" style={{ borderTop: '1px solid #E5E5E5' }}>
          <Link
            href="/case-studies/gleaner"
            style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px' }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>← Previous</span>
            <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Modernizing The Gleaner</span>
          </Link>
          <Link
            href="/case-studies/welink"
            style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px', textAlign: 'right' }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Next →</span>
            <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Designing a Caribbean Service Discovery Platform</span>
          </Link>
        </div>

        <SiteFooter />

      </div>
      {showModal && <AutoLoansModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
