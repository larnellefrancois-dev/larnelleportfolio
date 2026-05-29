import React from 'react';
import Link from 'next/link';

export default function DesignLeadershipCard() {
  return (
    <Link
      href="/writing/systems-governance"
      className="group card-base p-8 flex flex-col justify-between relative overflow-hidden no-underline"
      style={{ minHeight: '320px', textDecoration: 'none', color: '#111111' }}
    >
      <span className="arrow-hover absolute top-6 right-6 text-[14px]">↗</span>
      <span
        className="text-[9px] uppercase text-ink-light block mb-4"
        style={{ letterSpacing: '0.1em' }}
      >
        Perspective
      </span>
      <h3
        className="font-light text-ink-black leading-tight"
        style={{
          fontSize: '28px',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          maxWidth: '90%',
          marginBottom: '16px',
        }}
      >
        Point of View
      </h3>
      <p
        className="text-[13px] text-ink-gray leading-relaxed"
        style={{ maxWidth: '300px' }}
      >
        Developing a design practice grounded in systems thinking,
        accessibility, and the belief that good UX is invisible infrastructure.
      </p>
    </Link>
  );
}