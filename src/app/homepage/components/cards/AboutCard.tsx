import React from 'react';

export default function AboutCard() {
  return (
    <div
      className="card-base p-8 flex flex-col justify-between relative overflow-hidden"
      style={{ minHeight: '320px' }}
    >
      <div className="flex flex-col justify-between h-full">
        <span
          className="text-[9px] uppercase text-ink-light mb-4 block"
          style={{ letterSpacing: '0.1em' }}
        >
          ABOUT
        </span>
        <div>
          <h1
            className="font-light text-ink-black leading-tight mb-4"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              maxWidth: '90%',
            }}
          >
            DESIGN MADE FOR HUMANS
          </h1>
          <p
            className="text-[13px] text-ink-gray leading-relaxed text-left"
            style={{ maxWidth: '300px' }}
          >
            I'm Larnelle and I design digital products and the systems behind them — translating
            complexity into coherent, accessible experiences. Seven years
            working across product, UX, and systems design.
          </p>
        </div>
      </div>
    </div>
  );
}