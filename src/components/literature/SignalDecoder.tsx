'use client';
import React, { useState } from 'react';
import { useGameStore } from '@/state/gameStore';
import { audioEngine } from '@/sound/AudioEngine';

const MONO = "'Space Mono', monospace";
const BORDER = 'rgba(138,28,42,0.3)';
const BODY = 'rgba(212,197,181,0.7)';
const GOLD = '#f7e6b7';
const BLUE = 'rgba(125,167,217,0.9)';

const TARGET_CODE = 'VY-0031';

/** Terminal where the reader can answer the repeating transmission. Entering
    the designation hidden in plain sight across the archive (VY-0031) decodes
    the signal, records the discovery, and unseals the ARCHIVE-RUPTURE
    hyperframe. Wrong answers are part of the fiction: the planet only
    responds to the structured absence. */
export default function SignalDecoder() {
  const decoded = useGameStore((s) => s.decodedSignals.includes(TARGET_CODE));
  const recordSignalDecoded = useGameStore((s) => s.recordSignalDecoded);
  const [value, setValue] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lastMiss, setLastMiss] = useState<string | null>(null);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const guess = value.trim().toUpperCase().replace(/\s+/g, '');
    if (guess === TARGET_CODE || guess === TARGET_CODE.replace('-', '')) {
      audioEngine.play('confirm');
      recordSignalDecoded(TARGET_CODE);
    } else {
      audioEngine.play('denied');
      setAttempts((n) => n + 1);
      setLastMiss(guess || '∅');
    }
    setValue('');
  };

  return (
    <section
      aria-labelledby="signal-decoder-title"
      style={{
        border: `1px solid ${decoded ? 'rgba(125,167,217,0.45)' : BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '28px',
        transition: 'border-color 700ms ease',
      }}
    >
      <p
        id="signal-decoder-title"
        style={{
          fontFamily: MONO,
          fontSize: '0.6rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: decoded ? BLUE : 'rgba(179,36,53,0.7)',
          marginBottom: '16px',
        }}
      >
        Signal Decoder · answer the repeating transmission
      </p>

      {!decoded && (
        <>
          <p
            style={{
              fontFamily: MONO,
              fontSize: '0.78rem',
              color: BODY,
              lineHeight: 1.7,
              margin: '0 0 18px',
            }}
          >
            The same designation repeats through every recovered document in this archive. Enter it
            to align the decoder. The planet does not answer noise.
          </p>
          <form onSubmit={submit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <label
              htmlFor="signal-decoder-input"
              style={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)',
              }}
            >
              Transmission designation
            </label>
            <input
              id="signal-decoder-input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="??-????"
              autoComplete="off"
              spellCheck={false}
              maxLength={12}
              style={{
                flex: '1 1 180px',
                padding: '12px 14px',
                background: '#080510',
                border: `1px solid ${BORDER}`,
                borderRadius: '2px',
                color: GOLD,
                fontFamily: MONO,
                fontSize: '0.95rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 22px',
                background: 'transparent',
                border: '1px solid rgba(179,36,53,0.7)',
                borderRadius: '2px',
                color: '#e05a6a',
                fontFamily: MONO,
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Decode
            </button>
          </form>
          <p
            aria-live="polite"
            style={{
              fontFamily: MONO,
              fontSize: '0.7rem',
              color: lastMiss ? 'rgba(224,90,106,0.85)' : 'rgba(212,197,181,0.4)',
              minHeight: '1.4em',
              margin: '12px 0 0',
              letterSpacing: '0.08em',
            }}
          >
            {lastMiss
              ? `NO STRUCTURE FOUND IN “${lastMiss}” — ATTEMPT ${String(attempts).padStart(2, '0')}`
              : 'AWAITING INPUT'}
          </p>
        </>
      )}

      {decoded && (
        <figure style={{ margin: 0 }} aria-live="polite">
          <p
            style={{
              fontFamily: MONO,
              fontSize: '0.7rem',
              color: BLUE,
              letterSpacing: '0.14em',
              margin: '0 0 14px',
            }}
          >
            SIGNAL ACQUIRED — {TARGET_CODE} · HYPERFRAME UNSEALED
          </p>
          <div
            style={{
              border: '1px solid rgba(125,167,217,0.35)',
              borderRadius: '3px',
              overflow: 'hidden',
              backgroundColor: '#05060f',
            }}
          >
            <img
              src="/assets/hyperframes/archive-rupture.svg"
              alt="Hyperframe plate: Archive Rupture — the recovered structure inside the VY-0031 transmission."
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          <figcaption
            style={{
              fontFamily: MONO,
              fontSize: '0.65rem',
              color: BODY,
              lineHeight: 1.7,
              marginTop: '12px',
            }}
          >
            ARCHIVE-RUPTURE // The gap is not damage. It is address. This plate is reconstructed
            from the structured absence Sela Mares spent twelve years learning to read.
          </figcaption>
        </figure>
      )}
    </section>
  );
}
