'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  span: number;
  dark?: boolean;
  caseStudySlug?: string;
  workSlug?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const projects: Project[] = [
  {
    id: 'hsbc-design-system',
    tag: 'Design System',
    title: 'Unified - NCB Oasis Design System',
    description: 'Built and evolved a reusable design system to support more consistent, scalable, and accessible digital product design across a large banking environment spanning retail banking, commercial banking and web and mobile.',
    metrics: [
      { value: '47', label: 'Countries Aligned' },
      { value: '340+', label: 'Components Built' },
    ],
    span: 2,
    caseStudySlug: 'hsbc-design-system',
  },
  {
    id: 'enterprise-platform',
    tag: 'Product Design',
    title: 'Enterprise Banking Loans Management',
    description: 'Improved the usability of a complex internal loan-operations used by internal stakeholders by refining task flow, information structure, and interface clarity.',
    metrics: [
      { value: '40%', label: 'Faster Tasks' },
      { value: '+28', label: 'NPS Points' },
    ],
    span: 2,
    dark: true,
    workSlug: 'enterprise-loans',
  },
  {
    id: 'accessibility-programme',
    tag: 'Mortgage',
    title: 'Mortgage Journeys',
    description: 'Redesigned customer-facing mortgage experiences to improve hierarchy, reduce friction, and make next steps easier to understand and act on.',
    metrics: [
      { value: '78%', label: 'Fewer Issues' },
      { value: '12', label: 'Products Audited' },
    ],
    span: 1,
  },
  {
    id: 'design-ops',
    tag: 'Editorial Design',
    title: 'The Gleaner',
    description: 'Contributed to the design system and editorial experience direction for a content-rich publishing platform, with a focus on structure, consistency, and reading flow.',
    metrics: [
      { value: '40+', label: 'Reusable Patterns' },
      { value: '200', label: 'Content-Rich Platform Design' },
    ],
    span: 1,
  },
  {
    id: 'mobile-banking',
    tag: 'Auto Loans',
    title: 'Auto Loan Experience',
    description: 'Improved the structure and usability of auto loan journeys so users could better understand the offering, their options, and how to move forward.',
    metrics: [
      { value: '39M', label: 'Customers Served' },
      { value: '4.8★', label: 'App Store Rating' },
    ],
    span: 2,
  },
  {
    id: 'token-architecture',
    tag: 'Product Design',
    title: 'WeLink Caribbean',
    description: 'A platform designed to help users discover skilled workers across the Caribbean through clearer browsing, stronger structure, and more practical service discovery.',
    metrics: [
      { value: 'metric', label: 'Discovery and Structure' },
      { value: 'Did not launch', label: 'Platform Concept' },
    ],
    span: 2,
    dark: true,
  },
  {
    id: 'type-design',
    tag: 'Typography / Type Design',
    title: 'Designing a Typeface for a National Brand',
    description: 'Designing a custom institutional typeface from stakeholder discovery through geometric construction, glyph balancing, and optimized deployment across digital banking infrastructure.',
    metrics: [
      { value: '450+', label: 'Glyphs Designed' },
      { value: 'Custom', label: 'Type System' },
    ],
    span: 2,
    caseStudySlug: 'type-design',
  },
];

export default function WorkPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      className="max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SiteHeader activePage="Work" />

      {/* Page Intro */}
      <section className="py-10 sm:py-16 pb-12 sm:pb-20 max-w-[800px]">
        <h1
          className="font-light text-ink-black mb-6"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 200, letterSpacing: '-0.03em' }}
        >
          Work
        </h1>
        <p
          className="text-ink-gray font-light"
          style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: 1.6, fontWeight: 300 }}
        >
          Selected projects across banking, internal tools, editorial systems, and product experiences. Focused on clarity, structure, usability, and systems thinking.
        </p>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {projects.map((project) => {
          const href = project.workSlug
            ? `/work/${project.workSlug}`
            : project.caseStudySlug
            ? `/case-studies/${project.caseStudySlug}`
            : null;

          const cardContent = (
            <>
              <span
                style={{
                  fontSize: '9px',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.1em',
                  color: project.dark ? '#999' : '#999999',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                {project.tag}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                  color: project.dark ? '#ffffff' : '#111111',
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: project.dark ? '#999' : '#666666',
                  marginBottom: '32px',
                }}
              >
                {project.description}
              </p>
              <div
                className="mt-auto grid"
                style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}
              >
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <span
                      style={{
                        fontSize: '32px',
                        fontWeight: 200,
                        display: 'block',
                        color: project.dark ? '#ffffff' : '#111111',
                      }}
                    >
                      {m.value}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.05em',
                        color: '#999',
                      }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
              {href && (
                <div
                  className="mt-6"
                  style={{ borderTop: '1px solid #E5E5E5', paddingTop: '16px' }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      color: project.dark ? '#ffffff' : '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    View Project
                    <span
                      style={{
                        transform: hoveredId === project.id ? 'translate(4px, -4px)' : 'translate(0,0)',
                        transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        display: 'inline-block',
                      }}
                    >
                      →
                    </span>
                  </span>
                </div>
              )}
            </>
          );

          // On mobile all cards are full width; on sm they span 1 col each (2-col grid);
          // on lg they use their defined span within the 4-col grid
          const spanClass = project.span === 2 ? 'sm:col-span-1 lg:col-span-2' : 'sm:col-span-1 lg:col-span-1';

          return href ? (
            <Link
              key={project.id}
              href={href}
              className={`no-underline ${project.dark ? 'card-dark' : 'card-base'} p-6 sm:p-10 flex flex-col col-span-1 ${spanClass}`}
              style={{
                minHeight: '280px',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {cardContent}
            </Link>
          ) : (
            <div
              key={project.id}
              className={`${project.dark ? 'card-dark' : 'card-base'} p-6 sm:p-10 flex flex-col col-span-1 ${spanClass}`}
              style={{
                minHeight: '280px',
                cursor: 'default',
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {cardContent}
            </div>
          );
        })}
      </div>

      <SiteFooter />
    </div>
  );
}
