'use client';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

type ModalTab = 'old' | 'new' | 'compare';

const OLD_URL = 'https://web.archive.org/web/20260129122535/https://jamaica-gleaner.com/';
const NEW_URL = 'https://jamaica-gleaner.com/';

function ScaledIframe({ src, title, baseWidth = 1280 }: { src: string; title: string; baseWidth?: number }) {
  return (
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      <iframe
        src={src}
        title={title}
        style={{ position: 'absolute', top: 0, left: 0, width: `${baseWidth}px`, height: '100%', border: 'none', transformOrigin: 'top left' }}
        ref={(el) => {
          if (el) {
            const updateScale = () => {
              const containerWidth = el.parentElement?.offsetWidth || baseWidth;
              const scale = containerWidth / baseWidth;
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
  );
}

function DesignEvolutionModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<ModalTab>('old');
  const [mounted, setMounted] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    setMounted(true);
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const tabs: { id: ModalTab; label: string }[] = [
    { id: 'old', label: 'Old Design' },
    { id: 'new', label: 'New Design' },
    { id: 'compare', label: 'Compare' },
  ];

  const modalContent = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.72)' }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Design Evolution">
      <div
        className="relative flex flex-col bg-white"
        style={{ width: 'min(96vw, 1400px)', height: 'min(92vh, 900px)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid #1a1d30', flexShrink: 0, backgroundColor: '#080a16' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f7e6b7', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6f87aa', marginBottom: '3px' }}>Interactive Design Evolution</p>
              <p style={{ fontSize: '13px', color: '#b3c4d9', fontWeight: 300 }}>Explore the earlier site and the current live experience to see how the Gleaner evolved.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', border: '1px solid #1a1d30', borderRadius: '2px', background: '#05060f', cursor: 'pointer', color: '#9fb3cc', flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128,205.66,194.34Z" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #1a1d30', padding: '0 24px', flexShrink: 0, backgroundColor: '#080a16' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 16px',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? 500 : 400,
                color: activeTab === tab.id ? '#f7e6b7' : '#8198b8',
                borderBottom: activeTab === tab.id ? '2px solid #f7e6b7' : '2px solid transparent',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'color 0.15s',
                marginBottom: '-1px',
                minHeight: '44px',
              }}>
              {tab.label}
              {tab.id === 'compare' && (
                <span style={{ marginLeft: '6px', fontSize: '9px', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.06em', color: activeTab === tab.id ? '#6f87aa' : '#44567a' }}>
                  side-by-side
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {activeTab === 'old' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px 24px', borderBottom: '1px solid #0e1020', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#080a16' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2b3450', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#6f87aa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Earlier Design</span>
                <span style={{ fontSize: '10px', color: '#44567a' }}>— Archived version via Wayback Machine</span>
              </div>
              <ScaledIframe src={OLD_URL} title="Old Gleaner Design (Wayback Machine)" />
            </div>
          )}

          {activeTab === 'new' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px 24px', borderBottom: '1px solid #0e1020', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#080a16' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f7e6b7', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#6f87aa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Current Design</span>
                <span style={{ fontSize: '10px', color: '#44567a' }}>— Live jamaica-gleaner.com</span>
              </div>
              <ScaledIframe src={NEW_URL} title="New Gleaner Design (Live)" />
            </div>
          )}

          {activeTab === 'compare' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px 24px', borderBottom: '1px solid #0e1020', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#080a16' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6f87aa', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#6f87aa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Side-by-Side Comparison</span>
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex' }}>
                <ScaledIframe src={OLD_URL} title="Old Gleaner Design (Wayback Machine)" baseWidth={1280} />
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderLeft: '1px solid #1a1d30', display: 'flex', flexDirection: 'column' }}>
                  <ScaledIframe src={NEW_URL} title="New Gleaner Design (Live)" baseWidth={1280} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return mounted ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default function GleanerCaseStudyClient() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="case-study-sheet max-w-[1600px] mx-auto px-5 sm:px-10 py-10" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader activePage="Case Studies" />
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-[120px] lg:pb-[80px] max-w-[1000px]">
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-10" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#6f87aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Editorial Design</span>
          <span>Publishing</span>
          <span>Case Study</span>
        </div>
        <TypingH1
          text="The Gleaner"
          style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 200, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '32px', color: '#f7e6b7' }}
        />
        <p style={{ fontSize: '19px', lineHeight: 1.7, color: '#f7e6b7', fontWeight: 300, maxWidth: '720px' }}>
          Contributed to the design system and editorial experience direction for a content-rich publishing platform, with a focus on structure, consistency, and reading flow.
        </p>
      </section>

      {/* Challenge Block */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(300px,auto)] gap-1 mt-1">
        <div className="md:col-span-2 flex flex-col relative overflow-hidden" style={{ backgroundColor: '#0a0b1c', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
          <div className="mb-10">
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f87aa', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '16px' }}>The Challenge</span>
            <h3 style={{ fontSize: '32px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px', color: '#f7e6b7' }}>Editorial Platform Complexity</h3>
            <p style={{ fontSize: '14px', color: '#9fb3cc', lineHeight: 1.65 }}>
              Editorial platforms carry a different kind of complexity from transactional products. The challenge here was not only visual consistency, but also supporting clearer content hierarchy, stronger reading experiences, and a more cohesive framework for editorial design decisions across the platform.
            </p>
          </div>
          {/* Content Hierarchy Map */}
          <div className="mt-auto border border-[#1a1d30] bg-white p-6 rounded-sm shadow-sm relative">
            <span className="absolute -top-2.5 left-4 bg-[#0a0b1c] px-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#6f87aa', letterSpacing: '0.08em' }}>CONTENT HIERARCHY MAP</span>
            <div className="flex flex-col gap-3">
              <div className="border border-[#f7e6b7] bg-[#f7e6b7] text-white p-2 flex items-center justify-between">
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase' }}>Homepage / Front</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex gap-3 pl-4 border-l border-[#273048] ml-4 relative">
                <div className="absolute -left-[1px] top-4 w-4 border-t border-[#273048]" />
                <div className="absolute -left-[1px] bottom-4 w-4 border-t border-[#273048]" />
                <div className="flex-1 border border-[#273048] bg-[#080a16] p-2 flex flex-col gap-1">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#9fb3cc', textTransform: 'uppercase' }}>Section Header</span>
                  <div className="w-3/4 h-1 bg-[#f7e6b7] mt-1" />
                </div>
                <div className="flex-1 border border-[#273048] bg-[#080a16] p-2 flex flex-col gap-1">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#9fb3cc', textTransform: 'uppercase' }}>Feature Article</span>
                  <div className="w-full h-1 bg-[#f7e6b7] mt-1" />
                  <div className="w-5/6 h-1 bg-[#6f87aa]" />
                </div>
              </div>
              <div className="flex gap-2 pl-8 border-l border-[#273048] ml-4 mt-1 relative">
                <div className="absolute -left-[1px] top-3 w-4 border-t border-[#273048]" />
                <div className="flex-1 border border-[#1a1d30] p-2">
                  <div className="w-full h-1.5 bg-[#1a1d30] mb-1" />
                  <div className="w-2/3 h-1.5 bg-[#1a1d30]" />
                </div>
                <div className="flex-1 border border-[#1a1d30] p-2">
                  <div className="w-full h-1.5 bg-[#1a1d30] mb-1" />
                  <div className="w-1/2 h-1.5 bg-[#1a1d30]" />
                </div>
                <div className="flex-1 border border-[#1a1d30] p-2">
                  <div className="w-full h-1.5 bg-[#1a1d30] mb-1" />
                  <div className="w-3/4 h-1.5 bg-[#1a1d30]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process / Methodology */}
        <div className="md:col-span-2 md:row-span-2 flex flex-col relative overflow-hidden" style={{ backgroundColor: '#05060f', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f87aa', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '32px' }}>Process / Methodology</span>
          <div className="flex-1 flex flex-col justify-between">
            {[
              { num: '01', title: 'Editorial Review', desc: 'Reviewed content structure, scanability, and presentation patterns.' },
              { num: '02', title: 'Pattern Thinking', desc: 'Identified reusable editorial structures and content modules.' },
              { num: '03', title: 'Design Direction', desc: 'Helped shape a cleaner, more modern design direction.' },
              { num: '04', title: 'Collaboration', desc: 'Worked with local and international stakeholders to align direction.' },
            ].map((step, i, arr) => (
              <div key={step.num} className={`flex items-start gap-6 ${i < arr.length - 1 ? 'pb-8 border-b border-[#0e1020]' : 'pt-8'} ${i > 0 && i < arr.length - 1 ? 'py-8' : ''} group`}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#273048', marginTop: '4px', transition: 'color 0.2s' }} className="group-hover:text-[#f7e6b7]">{step.num}</span>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '8px', color: '#f7e6b7' }}>{step.title}</h4>
                  <p style={{ fontSize: '14px', color: '#9fb3cc', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Pull Quote */}
        <div className="md:col-span-2 flex flex-col justify-center relative overflow-hidden" style={{ backgroundColor: '#f7e6b7', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
          <svg className="w-10 h-10 mb-6" style={{ color: '#d9c79a' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', fontFamily: "'Playfair Display', serif", lineHeight: 1.4, color: '#1a1d30', fontStyle: 'italic' }}>
            "Editorial platforms require a different kind of systems thinking — one grounded in reading flow, repeatability, and content structure at scale."
          </p>
        </div>
      </div>

      {/* Key Decisions + What Changed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <div className="flex flex-col relative" style={{ backgroundColor: '#0a0b1c', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f87aa', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '32px' }}>Key Decisions</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {[
              { num: '01', text: 'Strengthened editorial hierarchy to support scanability and reading flow.' },
              { num: '02', text: 'Focused on reusable structures instead of isolated page-by-page solutions.' },
              { num: '03', text: 'Improved readability and scanability across the platform.' },
              { num: '04', text: 'Treated the work as both a content experience and a system problem.' },
            ].map((d) => (
              <div key={d.num} className="flex flex-col">
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: '#f7e6b7', borderBottom: '1px solid #273048', paddingBottom: '8px', marginBottom: '12px' }}>{d.num}</span>
                <p style={{ fontSize: '14px', color: '#9fb3cc', lineHeight: 1.6 }}>{d.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center relative" style={{ backgroundColor: '#05060f', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f87aa', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '32px' }}>What Changed</span>
          <ul className="flex flex-col gap-6">
            {[
              'Improved editorial clarity and structure.',
              'Supported more cohesive presentation across content experiences.',
              'Strengthened consistency across the platform.',
              'Demonstrated design systems thinking in a content-rich environment.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0e1020] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#f7e6b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p style={{ fontSize: '15px', color: '#f7e6b7', lineHeight: 1.5 }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* System Artifacts */}
      <div className="mt-1" style={{ backgroundColor: '#f7e6b7', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)' }}>
        <div className="flex justify-between items-end mb-10 border-b border-[#d9c79a] pb-4">
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6f87aa', fontFamily: "'JetBrains Mono', monospace" }}>System Artifacts</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#9fb3cc' }}>v1.0.0-rc</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Typography */}
          <div className="border border-[#d9c79a] bg-[#efddb0] p-6 rounded flex flex-col" style={{ height: '280px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#9fb3cc', textTransform: 'uppercase', marginBottom: 'auto' }}>Typography</span>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div style={{ color: '#05060f', fontFamily: "'Museo Sans', sans-serif", fontSize: '72px', lineHeight: 1, marginBottom: '8px', letterSpacing: '-0.02em' }}>Aa</div>
              <div className="flex items-end gap-4 mt-4 opacity-70">
                <span style={{ color: '#1a1d30', fontFamily: "'Museo Sans', sans-serif", fontSize: '32px', lineHeight: 1 }}>Aa</span>
                <span style={{ color: '#6f87aa', fontFamily: "'Museo Sans', sans-serif", fontSize: '20px', lineHeight: 1, marginBottom: '4px' }}>Aa</span>
                <span style={{ color: '#9fb3cc', fontSize: '16px', lineHeight: 1, marginBottom: '4px' }}>Aa</span>
              </div>
            </div>
            <div className="w-full flex justify-between border-t border-[#d9c79a] pt-3 mt-4">
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#9fb3cc' }}>Museo Sans</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#9fb3cc' }}>Titillium Web</span>
            </div>
          </div>

          {/* Reusable Content Patterns */}
          <div className="border border-[#d9c79a] bg-[#efddb0] p-6 rounded flex flex-col" style={{ height: '280px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#9fb3cc', textTransform: 'uppercase', marginBottom: '24px' }}>Reusable content patterns</span>
            <div className="flex-1 w-full bg-white rounded shadow-lg p-3 flex flex-col gap-3 cursor-pointer" style={{ transform: 'rotate(-1deg)', transformOrigin: 'bottom left', transition: 'transform 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-1deg)')}>
              <div className="w-full bg-[#1a1d30] rounded flex items-center justify-center" style={{ height: '80px' }}>
                <svg className="w-5 h-5 text-[#6f87aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="w-1/4 h-2 bg-red-600 opacity-80 rounded-sm" />
                <div className="w-full h-3 bg-[#f7e6b7] rounded-sm" />
                <div className="w-5/6 h-3 bg-[#f7e6b7] rounded-sm" />
                <div className="w-full h-1.5 bg-[#273048] rounded-sm mt-1" />
                <div className="w-2/3 h-1.5 bg-[#273048] rounded-sm" />
              </div>
            </div>
          </div>

          {/* Platform Direction */}
          <div className="border border-[#d9c79a] bg-[#efddb0] p-6 rounded flex flex-col" style={{ height: '280px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#9fb3cc', textTransform: 'uppercase', marginBottom: '24px' }}>Platform direction</span>
            <div className="flex-1 w-full border border-[#c9d6e6] rounded p-2 flex flex-col gap-2">
              <div className="w-full h-4 border-b border-[#c9d6e6] flex justify-between items-center px-1 pb-1">
                <div className="w-8 h-1.5 bg-[#9fb3cc]" />
                <div className="flex gap-1">
                  <div className="w-4 h-1 bg-[#c9d6e6]" />
                  <div className="w-4 h-1 bg-[#c9d6e6]" />
                </div>
              </div>
              <div className="flex gap-2 h-full">
                <div className="flex-[2] bg-[#e8d099] rounded-sm flex flex-col p-2">
                  <div className="w-full bg-[#d9c79a] mb-2 rounded-sm" style={{ height: '60px' }} />
                  <div className="w-3/4 h-2 bg-[#b3c4d9] mb-1 rounded-sm" />
                  <div className="w-1/2 h-2 bg-[#b3c4d9] rounded-sm" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="w-full flex-1 border border-[#c9d6e6] rounded-sm bg-[#f7e6b7]" />
                  <div className="w-full flex-1 border border-[#c9d6e6] rounded-sm bg-[#f7e6b7]" />
                  <div className="w-full flex-1 border border-[#c9d6e6] rounded-sm bg-[#f7e6b7]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8" style={{ backgroundColor: '#f7e6b7', padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 32px)', marginTop: '4px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#05060f', display: 'inline-block' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#9fb3cc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Interactive</span>
          </div>
          <p style={{ fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 200, color: '#05060f', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
            Explore the Gleaner design evolution
          </p>
          <p style={{ fontSize: '14px', color: '#8198b8', fontWeight: 300, lineHeight: 1.6 }}>
            Compare the earlier archived site with the current live experience — see how the editorial design system shaped the publication's digital presence.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: '14px 32px',
            border: '1px solid #d9c79a',
            background: 'transparent',
            color: '#05060f',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            flexShrink: 0,
            minHeight: '44px',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#05060f')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d9c79a')}
          onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#05060f'; (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
          onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#d9c79a'; (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; }}>
          View Design Evolution →
        </button>
      </div>
      {showModal && <DesignEvolutionModal onClose={() => setShowModal(false)} />}
      <div style={{ marginTop: '48px' }}>
        <Link
          href="/case-studies"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: '#f7e6b7',
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
      <div className="flex justify-between items-center mt-8 pt-8" style={{ borderTop: '1px solid #1a1d30' }}>
        <Link
          href="/case-studies/mortgage"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f87aa' }}>← Previous</span>
          <span style={{ fontSize: '13px', color: '#f7e6b7', fontWeight: 300 }}>Redesigning Mortgage Journeys for Clearer Next Steps</span>
        </Link>
        <Link
          href="/case-studies/auto"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px', textAlign: 'right' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6f87aa' }}>Next →</span>
          <span style={{ fontSize: '13px', color: '#f7e6b7', fontWeight: 300 }}>Simplifying the Auto Loan Journey</span>
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
