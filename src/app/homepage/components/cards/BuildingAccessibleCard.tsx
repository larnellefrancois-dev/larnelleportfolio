import React from 'react';
import Link from 'next/link';

export default function BuildingAccessibleCard() {
  return (
    <Link
      href="/writing/semantic-tokens-architecture"
      className="group card-base p-8 flex flex-col justify-between relative overflow-hidden no-underline"
      style={{ minHeight: '320px', textDecoration: 'none', color: '#111111' }}
    >
      <span className="arrow-hover absolute top-6 right-6 text-[14px]">↗</span>
      <span
        className="text-[9px] uppercase text-ink-light block mb-4"
        style={{ letterSpacing: '0.1em' }}
      >
        Process
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
        Accessible by Default
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
        &gt; Semantic tokens first
        <br />
        &gt; Component contracts
        <br />
        &gt; Accessibility at every layer
        <span className="cursor-blink-dark" />
      </div>
    </Link>
  );
}