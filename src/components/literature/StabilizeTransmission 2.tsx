'use client';
import React, { useState } from 'react';

const MONO = "'Space Mono', monospace";
const SERIF = "'Cormorant Garamond', serif";
const BORDER = 'rgba(138,28,42,0.3)';

const TARGET = 72; // hidden stability window centre
const TOLERANCE = 6;

/**
 * Scaffold for the future "Stabilize the Transmission" mini-game.
 * For now it is a single-slider alignment toy: bring the dial into the
 * (hidden) stability window to reveal a buried fragment. Keyboard
 * accessible via a native range input.
 *
 * TODO (game): expand into multi-axis waveform alignment, scoring, and a
 * sequence of unlockable fragments. Keep it lightweight + reduced-motion safe.
 */
export default function StabilizeTransmission() {
  const [value, setValue] = useState(20);
  const distance = Math.abs(value - TARGET);
  const stability = Math.max(0, Math.round(100 - (distance / TARGET) * 100));
  const locked = distance <= TOLERANCE;

  return (
    <section
      aria-labelledby="pi-stabilize-title"
      style={{
        border: `1px solid ${BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '32px',
        textAlign: 'center',
      }}
    >
      <h3
        id="pi-stabilize-title"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#b32435',
          marginBottom: '8px',
        }}
      >
        Stabilize the Transmission
      </h3>
      <p
        style={{
          fontFamily: SERIF,
          fontSize: '1.05rem',
          color: 'rgba(212,197,181,0.7)',
          maxWidth: '46ch',
          margin: '0 auto 24px',
          lineHeight: 1.6,
        }}
      >
        Align the signal to recover a buried fragment. (Prototype — a fuller mini-game is planned.)
      </p>

      <div
        role="meter"
        aria-valuenow={stability}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Signal stability"
        style={{
          height: '10px',
          maxWidth: '32rem',
          margin: '0 auto 20px',
          borderRadius: '999px',
          border: `1px solid ${BORDER}`,
          overflow: 'hidden',
          backgroundColor: 'rgba(212,197,181,0.06)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${stability}%`,
            background: 'linear-gradient(90deg, rgba(125,167,217,0.8), #b32435)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <label
        htmlFor="pi-stabilize-range"
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
        }}
      >
        Adjust signal alignment
      </label>
      <input
        id="pi-stabilize-range"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: '100%', maxWidth: '32rem', accentColor: '#b32435' }}
      />

      <p
        aria-live="polite"
        style={{
          fontFamily: MONO,
          fontSize: '0.8rem',
          color: 'rgba(212,197,181,0.7)',
          marginTop: '16px',
        }}
      >
        Stability: {stability}% {locked ? '· LOCKED' : '· searching…'}
      </p>

      {locked && (
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: '#f7e6b7',
            marginTop: '16px',
          }}
        >
          “…the interval is not a place. It is the pause before it answers.”
        </p>
      )}
    </section>
  );
}
