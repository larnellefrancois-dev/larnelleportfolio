import React from 'react';

export default function LetsTalkCard() {
  return (
    <div
      className="card-base p-8 flex flex-col justify-between relative overflow-hidden"
      style={{ minHeight: '320px' }}
    >
      <span
        className="text-[9px] uppercase text-ink-light block"
        style={{ letterSpacing: '0.1em' }}
      >
        Contact
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
        Start a Conversation
      </h3>
      <p className="text-[13px] text-ink-gray leading-relaxed" style={{ maxWidth: '300px' }}>
        Open to product design, systems work, and collaboration. Reach out about opportunities or
        just to exchange ideas.
      </p>
      {/* Email row */}
      <a
        href="mailto:chambersuiux@gmail.com"
        className="mt-auto w-full flex items-center no-underline group"
        style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px' }}
      >
        <span style={{ fontSize: '12px', color: '#999' }}>chambersuiux@gmail.com</span>
        <span className="ml-auto text-[12px] arrow-hover">→</span>
      </a>
    </div>
  );
}
