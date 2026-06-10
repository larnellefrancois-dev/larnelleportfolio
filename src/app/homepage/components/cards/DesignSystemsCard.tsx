import React from 'react';
import Link from 'next/link';

export default function DesignSystemsCard() {
  return (
    <Link
      href="/case-studies/banking-loans"
      className="group card-base p-8 flex flex-col justify-between relative overflow-hidden no-underline"
      style={{ minHeight: '320px', textDecoration: 'none', color: '#111111' }}
    >
      <span className="arrow-hover absolute top-6 right-6 text-[14px]">↗</span>
      <span
        className="text-[9px] uppercase text-ink-light block mb-4"
        style={{ letterSpacing: '0.1em' }}
      >
        Strategy
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
        Structuring Complexity
      </h3>
      <p className="text-[13px] text-ink-gray leading-relaxed" style={{ maxWidth: '300px' }}>
        Aligning user needs with business objectives through clear product thinking, journey design,
        and systems that reduce friction at scale.
      </p>
    </Link>
  );
}
