import React from 'react';
import Link from 'next/link';

export default function LeadingCreativeCard() {
  return (
    <Link
      href="/writing"
      className="group card-dark p-8 flex flex-col justify-between relative overflow-hidden no-underline"
      style={{
        minHeight: '644px',
        height: '100%',
        textDecoration: 'none',
        color: '#ffffff',
      }}
    >
      <span className="arrow-hover absolute top-6 right-6 text-[14px] text-white">↗</span>
      <span
        className="text-[9px] uppercase block mb-4"
        style={{ letterSpacing: '0.1em', color: '#888' }}
      >
        Writing
      </span>
      <h3
        className="font-light text-white leading-tight"
        style={{
          fontSize: 'clamp(32px, 3.5vw, 48px)',
          fontWeight: 200,
          letterSpacing: '-0.02em',
          maxWidth: '90%',
          marginBottom: '16px',
        }}
      >
        CRAFT &amp; SYSTEMS
      </h3>
      <p
        className="text-[13px] leading-relaxed"
        style={{ color: '#888', marginTop: '20px', maxWidth: '300px' }}
      >
        Reflections on product design, accessibility, the architecture of
        digital experiences, and what it means to build things that last.
      </p>
      {/* Decorative SVG */}
      <div className="mt-auto" style={{ opacity: 0.5 }}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="20" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
        </svg>
      </div>
    </Link>
  );
}