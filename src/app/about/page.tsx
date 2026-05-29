'use client';
import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/app/homepage/components/SiteHeader';
import SiteFooter from '@/app/homepage/components/SiteFooter';

const expertise = [
  { num: '01', label: 'UX Strategy' },
  { num: '02', label: 'Product Design' },
  { num: '03', label: 'Design Systems' },
  { num: '04', label: 'Information Architecture' },
  { num: '05', label: 'UI Design' },
  { num: '06', label: 'Content & Flow Design' },
];

const timeline = [
  { year: 'Recent', role: 'UX/UI Designer', org: 'NCB Jamaica', desc: 'Digital product design across web, mobile, lending, onboarding, and design systems.' },
  { year: 'Selected Work', role: 'Product & Systems Design', org: 'Independent / Concept / Client Work', desc: 'Editorial experiences, service concepts, redesign directions, and scalable interface systems.' },
  { year: 'Earlier', role: 'Visual & Web Design', org: 'Freelance & Creative Work', desc: 'Built a foundation in interface craft, visual design, and digital communication that continues to shape my product work.' },
  { year: 'Ongoing', role: 'Systems, Type & Structure', org: 'Self-initiated Exploration', desc: 'Exploring type systems, semantic structure, component thinking, and the relationship between design language and product clarity.' },
];

export default function AboutPage() {
  return (
    <div
      className="max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SiteHeader activePage="About" />
      {/* Page Intro */}
      <section className="py-10 sm:py-16 pb-12 sm:pb-20 max-w-[800px]">
        <h1
          className="font-light text-ink-black mb-6"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 200, letterSpacing: '-0.03em' }}
        >
          About
        </h1>
        <p
          className="text-ink-gray font-light"
          style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: 1.6, fontWeight: 300 }}
        >
          Product and systems designer based in Jamaica, focused on making complex digital experiences clearer, more scalable, and easier to use across banking, web platforms, and design systems.
        </p>
      </section>

      {/* Main Grid — Bio + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 mb-1">
        {/* Bio — full width on mobile, span 3 on desktop */}
        <div className="card-base p-6 sm:p-10 lg:col-span-3">
          <span
            className="text-ink-light block mb-5"
            style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Background
          </span>
          <h2
            className="text-ink-black font-light mb-6"
            style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Product, Systems &amp; Structure
          </h2>
          <p
            className="text-ink-gray mb-6"
            style={{ fontSize: '14px', lineHeight: 1.6 }}
          >
            I&apos;m a UX/UI and product designer with 7+ years of experience designing digital experiences across web, mobile, and service-led platforms. Much of my work sits at the intersection of product design and systems thinking — improving not just the screen in front of the user, but the structure, logic, and reusable foundations behind it.
          </p>
          <p
            className="text-ink-gray"
            style={{ fontSize: '14px', lineHeight: 1.6 }}
          >
            My background includes enterprise banking, design systems, customer journeys, editorial experiences, and concept products. I&apos;m especially drawn to work that simplifies complexity: improving hierarchy, clarifying flows, strengthening interface consistency, and building the kind of systems that help teams design better at scale.
          </p>
        </div>

        {/* Stats — full width on mobile, span 1 on desktop */}
        <div className="card-dark p-6 sm:p-10 flex flex-col justify-between lg:col-span-1" style={{ color: '#ffffff' }}>
          <span
            className="block mb-5"
            style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}
          >
            By the Numbers
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            {[
              { value: '7+', label: 'Years Experience' },
              { value: 'Web + Mobile', label: 'Platforms Designed' },
              { value: 'Banking + Editorial', label: 'Sectors Covered' },
              { value: '700k+', label: 'Users Impacted' },
            ]?.map((stat) => (
              <div key={stat?.label}>
                <span
                  className="block"
                  style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 200, color: '#ffffff', lineHeight: 1.1 }}
                >
                  {stat?.value}
                </span>
                <span
                  style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999' }}
                >
                  {stat?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row — Expertise + Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
        {/* Expertise */}
        <div className="card-base p-6 sm:p-10">
          <span
            className="text-ink-light block mb-5"
            style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Expertise
          </span>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {expertise?.map((item) => (
              <li
                key={item?.num}
                className="flex justify-between items-center"
                style={{ padding: '16px 0', borderBottom: '1px solid #E5E5E5' }}
              >
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#999' }}
                >
                  {item?.num}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 400 }}>{item?.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="card-base p-6 sm:p-10">
          <span
            className="text-ink-light block mb-5"
            style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Experience
          </span>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {timeline?.map((item) => (
              <li
                key={item?.year}
                style={{ padding: '16px 0', borderBottom: '1px solid #E5E5E5' }}
              >
                <span
                  className="block text-ink-light mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}
                >
                  {item?.year}
                </span>
                <span className="block text-ink-black" style={{ fontSize: '13px', fontWeight: 500 }}>
                  {item?.role}
                </span>
                <span className="block text-ink-gray" style={{ fontSize: '12px', marginBottom: '4px' }}>
                  {item?.org}
                </span>
                <span className="block text-ink-gray" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                  {item?.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="card-base p-6 sm:p-10">
          <span
            className="text-ink-light block mb-5"
            style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Connect
          </span>
          <h3
            className="text-ink-black font-light mb-6"
            style={{ fontSize: 'clamp(20px, 3.5vw, 28px)', fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Let&apos;s build something clear, useful, and scalable.
          </h3>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/in/larnelle-chambers-143b3b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-pill-hover bg-ink-black text-white px-6 py-3 rounded-full no-underline"
              style={{ fontSize: '11px', fontWeight: 500 }}
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1H_-6YX6X2yfuDNX_TOukg5FmKpg9DFI5/view?usp=drive_open"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-pill-hover border border-ink-black text-ink-black px-6 py-3 rounded-full no-underline"
              style={{ fontSize: '11px', fontWeight: 500 }}
            >
              View Résumé
            </a>
            <Link
              href="/contact"
              className="nav-pill-hover border border-ink-black text-ink-black px-6 py-3 rounded-full no-underline"
              style={{ fontSize: '11px', fontWeight: 500 }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="card-base p-6 sm:p-10">
          <span
            className="text-ink-light block mb-5"
            style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Philosophy
          </span>
          <p
            className="text-ink-gray"
            style={{ fontSize: '14px', lineHeight: 1.6 }}
          >
            Great design is invisible. It is the absence of friction, the presence of clarity, and the feeling that something was made exactly for you. My goal is always to build systems that enable that feeling at scale.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
