'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import RealmNav from '@/components/RealmNav';

const HERO_TEXT = 'CASE_STUDIES.txt';

interface Metric {
  value: string;
  label: string;
  showStar?: boolean;
}

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: Metric[];
  span: number;
  dark?: boolean;
  href: string;
}

const projects: Project[] = [
  {
    id: 'ncb-design-system',
    tag: 'DESIGN SYSTEM · WEB & MOBILE',
    title: 'Building a Design System for a National Bank',
    description:
      'Building and evolving a living design system that improved team efficiency, strengthened collaboration, and created a more reliable foundation for design at scale across web and mobile.',
    metrics: [
      { value: '2000+', label: 'COMPONENTS CREATED' },
      { value: '76%', label: 'ADOPTION RATE' },
    ],
    span: 2,
    dark: true,
    href: '/case-studies/ncb-design-system',
  },
  {
    id: 'mobile-banking',
    tag: 'MOBILE DESIGN · BANKING',
    title: 'Improving a Large-Scale Mobile Banking App',
    description:
      'Helping transition a large-scale banking product to a stronger, more consistent design system through component creation, design system adoption, and quality support.',
    metrics: [
      { value: '1M+', label: 'DOWNLOADS' },
      { value: '4.6', label: 'GOOGLE PLAY RATING', showStar: true },
    ],
    span: 1,
    href: '/case-studies/mobile-banking',
  },
  {
    id: 'typeface',
    tag: 'TYPOGRAPHY / TYPE DESIGN',
    title: 'Designing a Typeface for a National Brand',
    description:
      'Designing a custom institutional typeface from stakeholder discovery through geometric construction, glyph balancing, and optimized deployment across digital banking infrastructure.',
    metrics: [
      { value: '450+', label: 'GLYPHS DESIGNED' },
      { value: 'Custom', label: 'TYPE SYSTEM' },
    ],
    span: 2,
    href: '/case-studies/type-design',
  },
  {
    id: 'mortgage',
    tag: 'MORTGAGE · PRODUCT DESIGN',
    title: 'Redesigning Mortgage Journeys for Clearer Next Steps',
    description:
      'Redesigned customer-facing mortgage experiences to improve clarity, reduce friction, and make next steps easier to understand and act on.',
    metrics: [
      { value: 'Journey', label: 'FOCUSED APPROACH' },
      { value: 'UX-Led', label: 'EFFORT' },
    ],
    span: 1,
    href: '/case-studies/mortgage',
  },
  {
    id: 'gleaner',
    tag: 'EDITORIAL DESIGN',
    title: 'Modernizing The Gleaner for Digital Reading',
    description:
      'Contributed to the design system and editorial experience direction for a content-rich publishing platform.',
    metrics: [
      { value: '40+', label: 'REUSABLE PATTERNS' },
      { value: '200', label: 'CONTENT TEMPLATES' },
    ],
    span: 1,
    dark: true,
    href: '/case-studies/gleaner',
  },
  {
    id: 'auto',
    tag: 'AUTO LOANS · PRODUCT DESIGN',
    title: 'Simplifying the Auto Loan Journey for Better Decision-Making',
    description:
      'Improved the structure and usability of the auto loan journey so users could better understand the offering, their options, and the steps required to move forward with confidence.',
    metrics: [
      { value: 'Hierarchy', label: 'CORE FOCUS' },
      { value: 'CTA clarity', label: 'KEY IMPROVEMENT' },
    ],
    span: 2,
    href: '/case-studies/auto',
  },
  {
    id: 'welink',
    tag: 'PRODUCT DESIGN · PLATFORM CONCEPT',
    title: 'Designing a Caribbean Service Discovery Platform',
    description:
      'A concept platform designed to help users discover skilled workers across the Caribbean through clearer browsing, stronger structure, and more practical service discovery.',
    metrics: [
      { value: 'Discovery', label: 'CORE FOCUS' },
      { value: 'Concept', label: 'PROJECT STAGE' },
    ],
    span: 2,
    href: '/case-studies/welink',
  },
  {
    id: 'banking-loans',
    tag: 'PRODUCT DESIGN',
    title: 'Streamlining an Internal Loans Management Platform',
    description:
      'Improved the usability of a complex internal loan-operations platform used by internal stakeholders by refining task flow, information structure, and interface clarity.',
    metrics: [
      { value: '40%', label: 'FASTER TASKS' },
      { value: '+28', label: 'NPS POINTS' },
    ],
    span: 1,
    dark: true,
    href: '/case-studies/banking-loans',
  },
];

function ArrowIcon({ dark, hovered }: { dark?: boolean; hovered: boolean }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{
        width: '20px',
        height: '20px',
        color: dark ? (hovered ? '#ffffff' : '#52525b') : hovered ? '#000000' : '#a1a1aa',
        transform: hovered && !prefersReducedMotion ? 'translate(4px, -4px)' : 'translate(0, 0)',
        transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
        flexShrink: 0,
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: '28px', height: '28px', marginLeft: '2px', marginTop: '-4px' }}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function RevealWrapper({
  children,
  delay = 0,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: visible
          ? `opacity 0.65s cubic-bezier(0.215,0.61,0.355,1) ${delay}ms, transform 0.65s cubic-bezier(0.215,0.61,0.355,1) ${delay}ms`
          : 'none',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default function CaseStudiesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTapId, setActiveTapId] = useState<string | null>(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(HERO_TEXT);
      setTypingDone(true);
      return;
    }
    let i = 0;
    const speed = 60;
    const timer = setInterval(() => {
      i++;
      setTypedText(HERO_TEXT.slice(0, i));
      if (i >= HERO_TEXT.length) {
        clearInterval(timer);
        setTypingDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((c) => !c);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <>
      <RealmNav brandName="Larnelle Chambers" />
      <div
        className="bg-white text-zinc-900 min-h-screen flex flex-col"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div
          className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-8"
          style={{ paddingTop: '72px' }}
        ></div>

        <main className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="mt-16 md:mt-24 mb-20 md:mb-32 max-w-3xl">
            <h1
              className="font-light tracking-tight mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.1 }}
            >
              {typedText}
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '0.85em',
                  background: 'currentColor',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.1s',
                }}
              />
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light max-w-2xl">
              A selection of deeper project stories across design systems, banking journeys,
              internal tools, editorial platforms, and product structure work.
            </p>
          </section>

          {/* 3-Column Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32">
            {projects.map((project, index) => {
              const isHovered = hoveredId === project.id;
              const isActiveTap = activeTapId === project.id;
              const colSpan = project.span === 2 ? 'lg:col-span-2' : 'lg:col-span-1';
              const bgColor = project.dark
                ? isHovered || isActiveTap
                  ? '#000000'
                  : '#121212'
                : isHovered || isActiveTap
                  ? '#f0f0f0'
                  : '#f9f9f9';

              // Stagger: 0, 80, 160ms cycling through columns
              const staggerDelay = (index % 3) * 80;

              return (
                <RevealWrapper
                  key={project.id}
                  delay={staggerDelay}
                  className={`${colSpan}`}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href={project.href}
                    className="flex flex-col justify-between cursor-pointer h-full"
                    style={{
                      backgroundColor: bgColor,
                      color: project.dark ? '#ffffff' : '#000000',
                      padding: 'clamp(32px, 4vw, 56px)',
                      minHeight: '480px',
                      transition: prefersReducedMotion ? 'none' : 'background-color 0.5s ease',
                      textDecoration: 'none',
                      borderRadius: '2px',
                      outline: isActiveTap
                        ? `2px solid ${project.dark ? '#ffffff' : '#000000'}`
                        : 'none',
                      outlineOffset: isActiveTap ? '2px' : '0px',
                    }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onTouchStart={() => setActiveTapId(project.id)}
                    onTouchEnd={() => setActiveTapId(null)}
                    onTouchCancel={() => setActiveTapId(null)}
                  >
                    {/* Top: tag + arrow */}
                    <div className="flex flex-col">
                      <div
                        className="flex justify-between items-start"
                        style={{ marginBottom: '48px' }}
                      >
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: project.dark ? '#71717a' : '#a1a1aa',
                          }}
                        >
                          {project.tag}
                        </span>
                        <ArrowIcon dark={project.dark} hovered={isHovered || isActiveTap} />
                      </div>

                      {/* Title + description */}
                      <div>
                        <h2
                          className="font-normal tracking-tight"
                          style={{
                            fontSize:
                              project.span === 2
                                ? 'clamp(1.75rem, 3vw, 2.75rem)'
                                : 'clamp(1.5rem, 2.5vw, 2.25rem)',
                            lineHeight: project.span === 2 ? 1.1 : 1.2,
                            marginBottom: '24px',
                            color: project.dark ? '#ffffff' : '#000000',
                          }}
                        >
                          {project.title}
                        </h2>
                        <p
                          className="font-light"
                          style={{
                            fontSize: project.span === 2 ? '16px' : '14px',
                            lineHeight: 1.6,
                            color: project.dark ? '#d4d4d8' : '#71717a',
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom: metrics */}
                    <div className="flex flex-wrap gap-6 md:gap-8">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div
                            className="font-light"
                            style={{
                              fontSize: project.span === 2 ? '28px' : '24px',
                              lineHeight: 1,
                              marginBottom: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              color: project.dark ? '#ffffff' : '#000000',
                            }}
                          >
                            {metric.value}
                            {metric.showStar && <StarIcon />}
                          </div>
                          <div
                            className="font-light"
                            style={{
                              fontSize: '10px',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: project.dark ? '#a1a1aa' : '#71717a',
                            }}
                          >
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Link>
                </RevealWrapper>
              );
            })}
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
