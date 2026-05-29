'use client';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

type ModalTab = 'old' | 'new' | 'compare';

function DesignEvolutionModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<ModalTab>('old');
  const [mounted, setMounted] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
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
        style={{
          width: 'min(96vw, 1400px)',
          height: 'min(92vh, 900px)',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(10px, 2vw, 16px) clamp(12px, 3vw, 24px)',
            borderBottom: '1px solid #E5E5E5',
            flexShrink: 0,
            backgroundColor: '#FAFAFA',
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1, overflow: 'hidden' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111111', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginBottom: '3px' }}>
                Interactive Design Evolution
              </p>
              <p style={{ fontSize: '13px', color: '#555555', fontWeight: 300 }}>
                Explore the earlier workflow and the refined interface to see how the product evolved.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              border: '1px solid #E5E5E5',
              borderRadius: '2px',
              background: 'white',
              cursor: 'pointer',
              color: '#666666',
              flexShrink: 0,
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128,205.66,194.34Z" />
            </svg>
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid #E5E5E5',
            padding: '0 clamp(12px, 3vw, 24px)',
            flexShrink: 0,
            backgroundColor: '#FAFAFA',
          }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 16px',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? 500 : 400,
                color: activeTab === tab.id ? '#111111' : '#888888',
                borderBottom: activeTab === tab.id ? '2px solid #111111' : '2px solid transparent',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'color 0.15s',
                marginBottom: '-1px',
                minHeight: '44px',
              }}>
              {tab.label}
              {tab.id === 'compare' && (
                <span style={{ marginLeft: '6px', fontSize: '9px', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.06em', color: activeTab === tab.id ? '#999999' : '#BBBBBB' }}>
                  side-by-side
                </span>
              )}
            </button>
          ))}
        </div>

        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {activeTab === 'old' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px clamp(12px, 3vw, 24px)', borderBottom: '1px solid #F0F0F0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FAFAFA' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#CCCCCC', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Earlier Interface</span>
                <span style={{ fontSize: '10px', color: '#BBBBBB' }}>— Create Work Item flow with sidebar navigation</span>
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <iframe
                  src="/assets/prototypes/banking-loans-old.html"
                  title="Old Design Prototype"
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
          )}

          {activeTab === 'new' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px clamp(12px, 3vw, 24px)', borderBottom: '1px solid #F0F0F0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FAFAFA' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#111111', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Refined Interface</span>
                <span style={{ fontSize: '10px', color: '#BBBBBB' }}>— Streamlined workflow with improved information hierarchy</span>
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <iframe
                  src="/assets/prototypes/banking-loans-new.html"
                  title="New Design Prototype"
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
          )}

          {activeTab === 'compare' && (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '8px clamp(12px, 3vw, 24px)', borderBottom: '1px solid #F0F0F0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FAFAFA' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#999999', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Side-by-Side Comparison</span>
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex' }}>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <iframe
                    src="/assets/prototypes/banking-loans-old.html"
                    title="Old Design Prototype"
                    style={{ position: 'absolute', top: 0, left: 0, width: '1280px', height: '100%', border: 'none', transformOrigin: 'top left' }}
                    ref={(el) => {
                      if (el) {
                        const updateScale = () => {
                          const containerWidth = el.parentElement?.offsetWidth || 640;
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
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderLeft: '1px solid #E5E5E5' }}>
                  <iframe
                    src="/assets/prototypes/banking-loans-new.html"
                    title="New Design Prototype"
                    style={{ position: 'absolute', top: 0, left: 0, width: '1280px', height: '100%', border: 'none', transformOrigin: 'top left' }}
                    ref={(el) => {
                      if (el) {
                        const updateScale = () => {
                          const containerWidth = el.parentElement?.offsetWidth || 640;
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
          )}
        </div>
      </div>
    </div>
  );

  return mounted ? ReactDOM.createPortal(modalContent, document.body) : null;
}

export default function BankingLoansClient() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader activePage="Case Studies" />
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-[120px] lg:pb-[80px] max-w-[1000px]">
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-10" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Product Design</span>
          <span>Banking</span>
          <span>Case Study</span>
        </div>
        <TypingH1
          text="Banking Loans Management"
          style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 200, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '32px', color: '#111111' }}
        />
        <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, maxWidth: '720px' }}>
          Improved the usability of a complex internal loan-operations platform used by internal stakeholders by refining task flow, information structure, and interface clarity.
        </p>
      </section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mb-1">
        {[
          { value: '40%', label: 'Faster Tasks' },
          { value: '+28', label: 'NPS Points' },
          { value: '8.4%', label: 'Error Reduction' },
          { value: '14', label: 'Views Consolidated' },
        ]?.map((m) => (
          <div key={m?.label} style={{ backgroundColor: '#F7F7F7', padding: '24px' }}>
            <span style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 200, display: 'block', color: '#111111' }}>{m?.value}</span>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', marginTop: '8px', display: 'block' }}>{m?.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-1">
        <div className="md:col-span-3" style={{ backgroundColor: '#F7F7F7', padding: 'clamp(20px, 4vw, 32px)' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>Overview</span>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300, marginBottom: '32px' }}>
            The existing loan management system suffered from high cognitive load, with loan officers navigating 14+ disjointed views per application. Error rates in data entry were exceeding 8.4% monthly, creating downstream processing delays and compliance risks.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', lineHeight: 1.7, color: '#111111', fontWeight: 300 }}>
            I led the redesign of the core workflows, consolidating fragmented views into a unified interface, improving information hierarchy, and creating clearer pathways for the most common tasks. The result was 40% faster task completion and a 28-point NPS improvement.
          </p>
        </div>
        <div className="md:col-span-1" style={{ backgroundColor: '#111111', padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999', display: 'block', marginBottom: '24px' }}>My Role</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Lead Product Designer', 'UX Audit', 'Workflow Redesign', 'Interface Design']?.map((r) => (
              <li key={r} style={{ fontSize: '13px', color: '#ffffff', padding: '12px 0', borderBottom: '1px solid #333333', fontWeight: 300 }}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      {showModal && <DesignEvolutionModal onClose={() => setShowModal(false)} />}

      {/* ── EXPANDED CASE STUDY CONTENT ── */}

      {/* Challenge + Operational Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        <div style={{ backgroundColor: '#111111', padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666' }}>The Challenge</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff' }}>Overcoming Dense Workflows</h2>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#888888', fontWeight: 300 }}>
            Internal operators were managing high-volume loan applications across fourteen separate views. Cognitive load was high, and manual data entry led to an 8.4% error rate in compliance documentation — creating downstream processing delays and audit risk.
          </p>
        </div>
        <div style={{ backgroundColor: '#F7F7F7', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Operational Alignment</span>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#333333', marginTop: 'auto', borderTop: '1px solid #E5E5E5', paddingTop: '24px' }}>
            <span style={{ color: '#999999' }}>{'// SYSTEM_REQUIREMENTS'}</span><br />
            <span>&gt; Latency: &lt;100ms on data fetch</span><br />
            <span>&gt; Accessibility: WCAG 2.1 AA</span><br />
            <span>&gt; Security: Role-based access control</span><br />
            <span>&gt; Audit trail: Full action logging</span>
          </div>
        </div>
      </div>

      {/* Process Phases */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-1">
        {[
          { phase: 'Process / Phase 01', title: 'Audit & Discovery', copy: 'Mapping existing friction points and shadowing loan officers to identify ghost-work patterns and redundant data entry across 14+ views.' },
          { phase: 'Process / Phase 02', title: 'Information Arch', copy: 'Restructuring data hierarchies to prioritise actionable loan metadata over static logs, reducing the number of views required per task.' },
          { phase: 'Process / Phase 03', title: 'Rapid Iteration', copy: 'Low-fidelity prototypes tested against real production workloads to validate flow speed and surface edge cases early.' },
          { phase: 'Process / Phase 04', title: 'System Scale', copy: 'Building a modular component library to ensure future features align with the core UX and maintain consistency at scale.' },
        ].map((p) => (
          <div key={p.phase} style={{ backgroundColor: '#F7F7F7', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '260px' }}>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>{p.phase}</span>
            <h3 style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#111111' }}>{p.title}</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#666666', fontWeight: 300 }}>{p.copy}</p>
          </div>
        ))}
      </div>

      {/* Key Decisions — full-width dark panel */}
      <div className="mt-1" style={{ backgroundColor: '#111111', padding: '48px 40px', minHeight: '360px' }}>
        <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666666' }}>Key Decisions</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {[
            { title: 'Navigation Clarity', copy: 'Implemented a global vertical sidebar with contextual deep-links to reduce tab switching and orient users within complex workflows.' },
            { title: 'Visibility', copy: 'Density-optimised data tables with customisable column views so each team member can surface the fields most relevant to their role.' },
            { title: 'Reduced Friction', copy: 'Keyboard-first navigation (Vim-inspired motions) for power users processing 50+ applications per day, cutting interaction overhead.' },
            { title: 'Sync Protocol', copy: 'Real-time collaboration markers to prevent duplicate underwriting on the same file and surface live status across the team.' },
          ].map((d) => (
            <div key={d.title}>
              <h4 style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff', marginBottom: '12px' }}>{d.title}</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#888888', fontWeight: 300 }}>{d.copy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Changed + Outcome Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-1">
        <div className="md:col-span-2" style={{ backgroundColor: '#F7F7F7', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>What Changed</span>
          <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#111111' }}>The Human Impact</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#666666', fontWeight: 300 }}>
            By unifying the toolset, we removed the "context-switching tax" that plagued the team. The interface transitioned from a passive record-keeper to an active partner in the decision-making process — surfacing the right information at the right moment.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#666666' }}>
            {[
              'Consolidated 14 views into a single unified workspace',
              'Reduced compliance documentation errors from 8.4% to under 1%',
              'Introduced real-time status markers across all active files',
              'Established a modular component library for future scale',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#111111', flexShrink: 0 }}>&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ backgroundColor: '#F7F7F7', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Outcome / Efficiency</span>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 300, color: '#111111', marginBottom: '8px' }}>Processing Speed</h3>
            <div style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 200, letterSpacing: '-0.04em', color: '#111111', lineHeight: 1, marginTop: '16px' }}>
              40%<span style={{ fontSize: '24px' }}>↑</span>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#F7F7F7', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Outcome / Compliance</span>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 300, color: '#111111', marginBottom: '8px' }}>Error Reduction</h3>
            <div style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 200, letterSpacing: '-0.04em', color: '#111111', lineHeight: 1, marginTop: '16px' }}>
              0.8%<span style={{ fontSize: '20px', marginLeft: '4px' }}>LOW</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── END EXPANDED CONTENT ── */}

      {/* Interactive Prototype Block */}
      <div className="mt-1" style={{ backgroundColor: '#F7F7F7', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>Interactive Prototype</span>
          <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#111111' }}>Explore the Design Evolution</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#666666', fontWeight: 300, maxWidth: '600px' }}>
            Step through the earlier workflow and the refined interface side-by-side to see how the product evolved — from a fragmented multi-tab experience to a unified, task-optimised platform.
          </p>
        </div>
        <div>
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
      </div>

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
          href="/case-studies/welink"
          style={{ display: 'flex', flexDirection: 'column', gap: '4px', textDecoration: 'none', padding: '8px 0', minHeight: '44px' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999999' }}>← Previous</span>
          <span style={{ fontSize: '13px', color: '#111111', fontWeight: 300 }}>Designing a Caribbean Service Discovery Platform</span>
        </Link>
        <span style={{ visibility: 'hidden' }} />
      </div>
      <SiteFooter />
    </div>
  );
}
