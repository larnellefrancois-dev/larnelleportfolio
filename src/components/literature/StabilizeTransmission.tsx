'use client';

import React, { useMemo, useState } from 'react';

const MONO = "'Space Mono', monospace";
const SERIF = "'Cormorant Garamond', serif";
const DISPLAY = "'Cinzel', serif";
const BORDER = 'rgba(138,28,42,0.3)';
const BODY = 'rgba(212,197,181,0.72)';
const GOLD = '#f7e6b7';
const RED = '#b32435';
const BLUE = 'rgba(125,167,217,0.9)';

const targets = {
  carrier: 31,
  absence: 68,
  rhythm: 43,
};

const fragments = [
  {
    label: 'Carrier',
    text: 'Rheal is not the destination. It is the medium.',
  },
  {
    label: 'Absence',
    text: 'The missing section has edges. It does not scatter like damage.',
  },
  {
    label: 'Rhythm',
    text: 'Three. Four. Three. Door, click, waveform, mark.',
  },
  {
    label: 'Warning',
    text: 'Do not answer with the wound. Love is not return.',
  },
];

function scoreAxis(value: number, target: number) {
  return Math.max(0, 100 - Math.abs(value - target) * 3);
}

function WaveGrid({
  carrier,
  absence,
  rhythm,
}: {
  carrier: number;
  absence: number;
  rhythm: number;
}) {
  const points = useMemo(() => {
    const rows: string[] = [];
    for (let i = 0; i <= 48; i += 1) {
      const x = (i / 48) * 100;
      const y =
        50 +
        Math.sin((i + carrier) * 0.34) * 16 +
        Math.cos((i + absence) * 0.18) * 11 +
        (i % 7 === 0 ? (rhythm - 43) * 0.18 : 0);
      rows.push(`${x.toFixed(2)},${Math.max(8, Math.min(92, y)).toFixed(2)}`);
    }
    return rows.join(' ');
  }, [carrier, absence, rhythm]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ width: '100%', height: '180px', display: 'block' }}
    >
      <defs>
        <linearGradient id="signalGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(125,167,217,0.35)" />
          <stop offset="45%" stopColor="#f7e6b7" />
          <stop offset="100%" stopColor="#b32435" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="rgba(5,6,16,0.82)" />
      {Array.from({ length: 12 }).map((_, index) => (
        <line
          key={`v-${index}`}
          x1={index * 9}
          x2={index * 9}
          y1="0"
          y2="100"
          stroke="rgba(212,197,181,0.05)"
          strokeWidth="0.2"
        />
      ))}
      {Array.from({ length: 7 }).map((_, index) => (
        <line
          key={`h-${index}`}
          x1="0"
          x2="100"
          y1={index * 16}
          y2={index * 16}
          stroke="rgba(212,197,181,0.05)"
          strokeWidth="0.2"
        />
      ))}
      <polyline
        points={points}
        fill="none"
        stroke="url(#signalGradient)"
        strokeWidth="1.3"
        vectorEffect="non-scaling-stroke"
      />
      <rect x="60" y="0" width="12" height="100" fill="rgba(0,0,0,0.35)" />
      <rect x="62" y="0" width="8" height="100" fill="rgba(247,230,183,0.08)" />
    </svg>
  );
}

export default function StabilizeTransmission() {
  const [carrier, setCarrier] = useState(18);
  const [absence, setAbsence] = useState(40);
  const [rhythm, setRhythm] = useState(76);
  const [contained, setContained] = useState(false);

  const carrierScore = scoreAxis(carrier, targets.carrier);
  const absenceScore = scoreAxis(absence, targets.absence);
  const rhythmScore = scoreAxis(rhythm, targets.rhythm);
  const stability = Math.round((carrierScore + absenceScore + rhythmScore) / 3);
  const unlockedCount = Math.min(
    4,
    Math.floor(stability / 25) + (contained && stability >= 88 ? 1 : 0)
  );
  const stable = stability >= 88;

  return (
    <section
      aria-labelledby="pi-stabilize-title"
      style={{
        border: `1px solid ${BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.55)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(280px, 0.9fr)' }}
        className="pi-engine-grid"
      >
        <div style={{ padding: '28px', borderRight: `1px solid ${BORDER}` }}>
          <p
            style={{
              fontFamily: MONO,
              fontSize: '0.55rem',
              letterSpacing: '0.18em',
              color: RED,
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            VY-0031 signal recovery
          </p>
          <h3
            id="pi-stabilize-title"
            style={{
              fontFamily: DISPLAY,
              fontSize: '1.35rem',
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: GOLD,
              margin: '0 0 14px',
            }}
          >
            Stabilize The Transmission
          </h3>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: '1.05rem',
              color: BODY,
              lineHeight: 1.65,
              margin: '0 0 22px',
            }}
          >
            Align carrier, absence, and rhythm until the waveform stops trying to become a message.
            The final fragment only resolves after the core is correctly contained.
          </p>

          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: '3px',
              overflow: 'hidden',
              marginBottom: '22px',
            }}
          >
            <WaveGrid carrier={carrier} absence={absence} rhythm={rhythm} />
          </div>

          <div
            role="meter"
            aria-valuenow={stability}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Signal stability"
            style={{
              height: '12px',
              borderRadius: '999px',
              border: `1px solid ${BORDER}`,
              overflow: 'hidden',
              backgroundColor: 'rgba(212,197,181,0.06)',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${stability}%`,
                background: stable
                  ? `linear-gradient(90deg, ${BLUE}, ${GOLD})`
                  : 'linear-gradient(90deg, rgba(125,167,217,0.8), #b32435)',
                transition: 'width 0.24s ease',
              }}
            />
          </div>
          <p
            aria-live="polite"
            style={{
              fontFamily: MONO,
              fontSize: '0.76rem',
              color: stable ? GOLD : BODY,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Stability {stability}% / {stable ? 'interval bounded' : 'pattern still feeding back'}
          </p>
        </div>

        <div style={{ padding: '28px', display: 'grid', gap: '18px', alignContent: 'start' }}>
          {[
            ['Carrier', carrier, setCarrier, 'Rheal carrier alignment'],
            ['Absence', absence, setAbsence, 'Structured gap boundary'],
            ['Rhythm', rhythm, setRhythm, '3-4-3 return pattern'],
          ].map(([label, value, setter, help]) => (
            <div key={String(label)}>
              <label
                htmlFor={`pi-${String(label).toLowerCase()}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontFamily: MONO,
                  fontSize: '0.6rem',
                  color: 'rgba(212,197,181,0.56)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                <span>{String(help)}</span>
                <span>{String(value).padStart(2, '0')}</span>
              </label>
              <input
                id={`pi-${String(label).toLowerCase()}`}
                type="range"
                min={0}
                max={100}
                value={value as number}
                onChange={(event) =>
                  (setter as React.Dispatch<React.SetStateAction<number>>)(
                    Number(event.target.value)
                  )
                }
                style={{ width: '100%', accentColor: label === 'Absence' ? GOLD : RED }}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => setContained((value) => !value)}
            style={{
              fontFamily: MONO,
              fontSize: '0.6rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: contained ? GOLD : BODY,
              background: contained ? 'rgba(125,167,217,0.12)' : 'transparent',
              border: `1px solid ${contained ? 'rgba(247,230,183,0.5)' : BORDER}`,
              borderRadius: '2px',
              padding: '13px',
              cursor: 'pointer',
            }}
          >
            {contained ? 'Core Contained / Not An Archive' : 'Label The Core'}
          </button>

          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '16px' }}>
            <p
              style={{
                fontFamily: MONO,
                fontSize: '0.58rem',
                color: RED,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                margin: '0 0 12px',
              }}
            >
              Recovered fragments
            </p>
            <div style={{ display: 'grid', gap: '10px' }}>
              {fragments.map((fragment, index) => {
                const unlocked = index < unlockedCount;
                return (
                  <article
                    key={fragment.label}
                    style={{
                      border: `1px solid ${unlocked ? 'rgba(247,230,183,0.35)' : 'rgba(138,28,42,0.18)'}`,
                      borderRadius: '2px',
                      padding: '12px',
                      backgroundColor: unlocked ? 'rgba(247,230,183,0.04)' : 'rgba(0,0,0,0.14)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: MONO,
                        fontSize: '0.54rem',
                        color: unlocked ? BLUE : 'rgba(212,197,181,0.34)',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        margin: '0 0 6px',
                      }}
                    >
                      {fragment.label}
                    </p>
                    <p
                      style={{
                        fontFamily: SERIF,
                        fontSize: '1rem',
                        color: unlocked ? GOLD : 'rgba(212,197,181,0.34)',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {unlocked ? fragment.text : '░░░ fragment unresolved ░░░'}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
