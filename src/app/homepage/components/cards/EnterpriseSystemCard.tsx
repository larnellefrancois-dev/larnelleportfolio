import React from 'react';
import Link from 'next/link';

export default function EnterpriseSystemCard() {
  return (
    <Link
      href="/case-studies"
      className="group card-dark p-8 flex flex-col justify-between relative overflow-hidden no-underline"
      style={{ minHeight: '320px', textDecoration: 'none', color: '#ffffff' }}
    >
      <span className="arrow-hover absolute top-6 right-6 text-[14px] text-white">↗</span>
      <span
        className="text-[9px] uppercase block mb-4"
        style={{ letterSpacing: '0.1em', color: '#888' }}
      >
        Systems
      </span>
      <h3
        className="font-light text-white leading-tight"
        style={{
          fontSize: '28px',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          maxWidth: '90%',
          marginBottom: '16px',
        }}
      >
        Coherence at Scale
      </h3>
      <p
        className="text-[13px] leading-relaxed"
        style={{ color: '#888', marginBottom: '20px', maxWidth: '300px' }}
      >
        Design systems built for consistency, governance, and accessibility — reducing fragmentation
        across complex product ecosystems.
      </p>
      {/* Terminal block */}
      <div
        className="mt-auto border-t pt-5 w-full"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          color: '#aaa',
          borderColor: '#333',
        }}
      >
        &gt; tokens → components → patterns
        <span className="cursor-blink" />
      </div>
    </Link>
  );
}
