import React from 'react';
import Link from 'next/link';

export default function TeamVelocityCard() {
  return (
    <Link
      href="/about"
      className="group card-base p-8 flex flex-col justify-between relative overflow-hidden no-underline"
      style={{ minHeight: '320px', textDecoration: 'none', color: '#111111' }}
    >
      <span className="arrow-hover absolute top-6 right-6 text-[14px]">↗</span>
      <span
        className="text-[9px] uppercase text-ink-light mb-4 block"
        style={{ letterSpacing: '0.1em' }}
      >
        Background
      </span>
      <h3
        className="font-light text-ink-black leading-tight mb-4"
        style={{
          fontSize: '28px',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          maxWidth: '90%',
        }}
      >
        Practice &amp; Craft
      </h3>
      {/* Terminal block */}
      <div
        className="mt-auto border-t pt-5 w-full"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          color: '#333',
          borderColor: '#E5E5E5',
        }}
      >
        &gt; Discipline: Product &amp; Systems Design
        <br />
        &gt; Years Active: 7+
        <br />
        &gt; Focus: Accessibility, Systems, Strategy
      </div>
    </Link>
  );
}
