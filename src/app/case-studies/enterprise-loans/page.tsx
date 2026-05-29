import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import TypingH1 from '@/components/ui/TypingH1';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Enterprise Loans Platform Redesign — Larnelle Chambers',
  description: 'Case study on re-engineering a legacy loans management platform from fragmented manual entries to a unified, automated risk-assessment engine with improved efficiency.',
  alternates: {
    canonical: '/case-studies/enterprise-loans',
  },
  openGraph: {
    title: 'Enterprise Loans Platform Redesign',
    description: 'Re-engineered loan infrastructure from fragmented manual entries to unified automation.',
    type: 'article',
    url: '/case-studies/enterprise-loans',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise loans platform redesign showing unified interface and workflow consolidation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Loans Platform Redesign',
    description: 'Re-engineered loan infrastructure from fragmented manual entries to unified automation.',
    images: ['/assets/images/app_logo.png'],
  },
};

export default function EnterpriseLoansPage() {
  return (
    <div
      className="case-study-sheet max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SiteHeader activePage="Case Studies" />
      {/* Header */}
      <header
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-8 pt-8"
        style={{
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 500, fontSize: '14px' }}>LARNELLE CHAMBERS</span>
          <span style={{ color: '#999999', fontSize: '10px', marginTop: '4px' }}>CASE STUDY // 04</span>
        </div>

        <ul className="flex flex-wrap gap-2 sm:gap-6 list-none p-0 m-0">
          {['Overview', 'Process', 'Outcomes']?.map((item) => (
            <li key={item}>
              <a
                href={`#${item?.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: '#111111',
                  fontSize: '11px',
                  border: '1px solid #E5E5E5',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  display: 'inline-block',
                  minHeight: '44px',
                  minWidth: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          style={{
            backgroundColor: '#111111',
            color: '#ffffff',
            padding: '10px 24px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: 500,
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            alignSelf: 'flex-start',
            minHeight: '44px',
            minWidth: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          CONTACT
        </Link>
      </header>
      {/* Bento Grid */}
      <main
        id="overview"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full"
        style={{ gridAutoRows: 'minmax(280px, auto)' }}
      >
        {/* Card 1 — Project Overview (span 3) */}
        <section
          className="sm:col-span-2 lg:col-span-3"
          style={{
            backgroundColor: '#F7F7F7',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#999999',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            PROJECT_OVERVIEW / 2024
          </span>
          <TypingH1
            text="LENDX: RE-ENGINEERING LOAN INFRASTRUCTURE."
            style={{
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 200,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              color: '#111111',
            }}
          />
          <p
            style={{
              fontSize: '14px',
              color: '#666666',
              lineHeight: 1.6,
              maxWidth: '480px',
            }}
          >
            A comprehensive overhaul of a legacy loans management platform, transitioning from fragmented manual entries to a unified, automated risk-assessment engine.
          </p>
        </section>

        {/* Card 2 — Role Summary */}
        <section
          className="sm:col-span-1"
          style={{
            backgroundColor: '#F7F7F7',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#999999',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            ROLE_SUMMARY
          </span>
          <div style={{ marginTop: 'auto' }}>
            <p
              style={{
                fontSize: '12px',
                color: '#666666',
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              Lead Systems Designer &amp; Frontend Architect. Responsible for information architecture, component library, and API integration strategy.
            </p>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                border: '1px solid #dddddd',
                padding: '16px',
                borderRadius: '2px',
                lineHeight: 1.8,
                color: '#111111',
              }}
            >
              $ stack --list<br />
              &gt; TypeScript / React<br />
              &gt; Tailwind CSS<br />
              &gt; Framer Motion
            </div>
          </div>
        </section>

        {/* Card 3 — The Challenge (span 2, dark) */}
        <section
          id="process"
          className="sm:col-span-2"
          style={{
            backgroundColor: '#111111',
            color: '#ffffff',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#999999',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            THE_CHALLENGE
          </span>
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Complexity at Scale
          </h2>
          <p style={{ fontSize: '14px', color: '#888888', lineHeight: 1.6, maxWidth: '480px' }}>
            The existing system suffered from high cognitive load, with loan officers navigating 14+ disjointed views per application. Error rates in data entry were exceeding 8.4% monthly.
          </p>
        </section>

        {/* Card 4 — Process Workflow (span 2) */}
        <section
          className="sm:col-span-2"
          style={{
            backgroundColor: '#F7F7F7',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#999999',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            PROCESS_WORKFLOW
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { num: '01.', title: 'Workflow Review', desc: 'Mapping the 22-step lifecycle of a commercial loan.' },
              { num: '02.', title: 'Info Restructuring', desc: 'Normalizing data structures for cross-departmental visibility.' },
              { num: '03.', title: 'Refinement', desc: 'High-fidelity prototyping of the "Single Source of Truth" dashboard.' },
              { num: '04.', title: 'Validation', desc: 'Stress testing the UI with 500+ concurrent simulated entries.' },
            ]?.map((step) => (
              <div
                key={step?.num}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  paddingLeft: '12px',
                  borderLeft: '1px solid #111111',
                  lineHeight: 1.6,
                  color: '#111111',
                }}
              >
                <strong>{step?.num} {step?.title}</strong><br />
                {step?.desc}
              </div>
            ))}
          </div>
        </section>
      </main>

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
          }}
        >
          ← Back to Case Studies
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
