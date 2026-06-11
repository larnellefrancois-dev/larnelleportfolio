'use client';
import React from 'react';
import { useGameStore } from '@/state/gameStore';

const MONO = "'Space Mono', monospace";
const BODY = 'rgba(212,197,181,0.7)';
const BLUE = 'rgba(125,167,217,0.9)';

/** The Deep Archive: sealed until the Triune Key (all three realms visited).
    Locked, it reads as a denied-access stub; unlocked, it opens the
    TWIN-MOON-BLOOM hyperframe and a recovered fragment. */
export default function DeepArchive() {
  const unlocked = useGameStore((s) => s.achievements.includes('triune-key'));

  return (
    <section
      aria-labelledby="deep-archive-title"
      style={{
        border: `1px solid ${unlocked ? 'rgba(125,167,217,0.4)' : 'rgba(138,28,42,0.3)'}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '28px',
        transition: 'border-color 700ms ease',
      }}
    >
      <p
        id="deep-archive-title"
        style={{
          fontFamily: MONO,
          fontSize: '0.6rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: unlocked ? BLUE : 'rgba(179,36,53,0.7)',
          marginBottom: '16px',
        }}
      >
        Deep Archive · stratum II
      </p>

      {!unlocked && (
        <p
          style={{
            fontFamily: MONO,
            fontSize: '0.78rem',
            color: BODY,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          ACCESS DENIED — TRIUNE KEY REQUIRED.
          <br />
          The deep stratum opens only to readers who have walked all three realms of this archive.
          Return when the portal recognises you.
        </p>
      )}

      {unlocked && (
        <figure style={{ margin: 0 }}>
          <div
            style={{
              border: '1px solid rgba(125,167,217,0.35)',
              borderRadius: '3px',
              overflow: 'hidden',
              backgroundColor: '#05060f',
            }}
          >
            <img
              src="/assets/hyperframes/twin-moon-bloom.svg"
              alt="Hyperframe plate: Twin-Moon Bloom — blue-white light waking inside the Kaen under aligned moons."
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
            TWIN-MOON-BLOOM // Recovered under Triune clearance. When both moons align, the Kaen
            remembers every route ever walked across it — and shows them, all at once, to whoever is
            still standing there.
          </figcaption>
        </figure>
      )}
    </section>
  );
}
