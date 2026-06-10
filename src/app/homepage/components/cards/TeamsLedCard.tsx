import React from 'react';

export default function TeamsLedCard() {
  return (
    <div
      className="card-base p-8 flex flex-col justify-between relative overflow-hidden"
      style={{ minHeight: '320px' }}
    >
      <span
        className="text-[9px] uppercase text-ink-light block"
        style={{ letterSpacing: '0.1em' }}
      >
        Collaboration
      </span>
      <h3
        className="font-light text-ink-black leading-tight"
        style={{
          fontSize: '28px',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          maxWidth: '90%',
          marginBottom: '8px',
        }}
      >
        Cross-Functional
      </h3>
      <div
        className="mt-auto font-light text-ink-black"
        style={{
          fontSize: '64px',
          fontWeight: 200,
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        7+
      </div>
      <span
        className="text-[10px] text-ink-light mt-2 block uppercase"
        style={{ letterSpacing: '0.05em' }}
      >
        Years Embedded in Cross-Functional Teams
      </span>
    </div>
  );
}
