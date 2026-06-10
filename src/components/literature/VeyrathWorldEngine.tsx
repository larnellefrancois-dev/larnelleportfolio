'use client';

import React, { useMemo, useState } from 'react';
import { paleIntervalLocations, type RiskClass } from '@/data/realms-content';

const MONO = "'Space Mono', monospace";
const SERIF = "'Cormorant Garamond', serif";
const DISPLAY = "'Cinzel', serif";
const BORDER = 'rgba(138,28,42,0.34)';
const BODY = 'rgba(212,197,181,0.72)';
const GOLD = '#f7e6b7';
const RED = '#b32435';
const BLUE = 'rgba(125,167,217,0.9)';

const RISK: Record<RiskClass, string> = {
  nominal: 'rgba(125,167,217,0.8)',
  caution: '#d4b271',
  restricted: '#e05a6a',
  sealed: '#b32435',
};

const clickerStates = [
  {
    label: 'Normal',
    pattern: 'click click click · click click click click · click click click',
    meaning: 'Local movement. Clickers are present and tracking the field.',
  },
  {
    label: 'Silence',
    pattern: '... ... ...',
    meaning:
      'Danger transition. Eclipses, Hollow appearances, and deep pressure events often arrive after silence.',
  },
  {
    label: '3-4-3',
    pattern: 'click click click / click click click click / click click click',
    meaning:
      'Countdown or threshold marker. The same rhythm appears in the waveform and door slabs.',
  },
  {
    label: 'After Ithe',
    pattern: 'click ... click ... click',
    meaning: 'Slower, grief-adjacent rhythm. The field is learning through a specific absence.',
  },
];

const recurrenceRows = [
  {
    version: 'Crash',
    retained: 'Impact pattern, beacon fire, Sela reaching for the core',
    proof: 'None yet',
  },
  {
    version: 'Summit I',
    retained: 'Sela memory fragments, altered death order, route compulsion',
    proof: 'White mineral cut survives as density shift',
  },
  {
    version: 'Rescue',
    retained: 'Extraction marker, warning burst, compromised leaving',
    proof: 'NOT AN ARCHIVE label survives containment',
  },
  {
    version: 'Refusal',
    retained: 'Group line, disabled core, nara selected over answer',
    proof: 'Loop does not restart',
  },
];

function getBloomPhase(value: number) {
  if (value < 22)
    return {
      label: 'Dormant Kaen',
      note: 'Black mineral records pressure without visible response.',
      glow: 0.08,
    };
  if (value < 47)
    return {
      label: 'Pre-alignment',
      note: 'Clickers thin out. Sparks gather near Bleeder roots.',
      glow: 0.24,
    };
  if (value < 76)
    return {
      label: 'Twin-Moon Bloom',
      note: 'Blue-white light wakes inside the Kaen and reveals remembered passage.',
      glow: 0.74,
    };
  return {
    label: 'Afterglow',
    note: 'The route looks changed behind the group. The road is counting.',
    glow: 0.34,
  };
}

export default function VeyrathWorldEngine() {
  const [activeLocation, setActiveLocation] = useState(
    paleIntervalLocations[1]?.designation ?? paleIntervalLocations[0].designation
  );
  const [bloom, setBloom] = useState(58);
  const [clickerIndex, setClickerIndex] = useState(2);
  const [survivorView, setSurvivorView] = useState(false);
  const [proofMarks, setProofMarks] = useState(1);
  const [refused, setRefused] = useState(false);
  const phase = getBloomPhase(bloom);
  const location =
    paleIntervalLocations.find((loc) => loc.designation === activeLocation) ??
    paleIntervalLocations[0];

  const pathPoints = useMemo(
    () =>
      paleIntervalLocations
        .map((_, index) => {
          const x = 10 + (index % 4) * 27;
          const y = index < 4 ? 28 + index * 7 : 67 - (index - 4) * 8;
          return `${x},${y}`;
        })
        .join(' '),
    []
  );

  return (
    <section
      aria-labelledby="veyrath-engine-title"
      style={{
        border: `1px solid ${BORDER}`,
        borderRadius: '4px',
        background: 'linear-gradient(180deg, rgba(10,11,28,0.78), rgba(5,5,10,0.95))',
        overflow: 'hidden',
        boxShadow: '0 28px 80px -42px rgba(0,0,0,0.9)',
      }}
    >
      <div
        style={{
          position: 'relative',
          minHeight: '340px',
          padding: '32px',
          display: 'grid',
          alignItems: 'end',
          backgroundImage:
            'linear-gradient(180deg, rgba(4,5,12,0.15), rgba(4,5,12,0.92)), url(/assets/images/veyrath-kaen-bloom.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 62% 62%, rgba(125,167,217,${phase.glow}), transparent 38%)`,
            mixBlendMode: 'screen',
            transition: 'background 0.35s ease',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '720px' }}>
          <p
            style={{
              fontFamily: MONO,
              fontSize: '0.58rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(247,230,183,0.72)',
              marginBottom: '12px',
            }}
          >
            ICSE / NAIAD interactive field engine
          </p>
          <h2
            id="veyrath-engine-title"
            style={{
              fontFamily: DISPLAY,
              fontSize: 'clamp(1.9rem, 5vw, 3.3rem)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: GOLD,
              margin: 0,
            }}
          >
            Veyrath Does Not Wait To Be Found
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: '1.15rem',
              color: 'rgba(240,230,211,0.86)',
              lineHeight: 1.65,
              maxWidth: '58ch',
              marginTop: '16px',
            }}
          >
            A living archive is the wrong term, so ICSE redacts it. Survivor records are less
            polite: Veyrath listens through grief, mineral, rhythm, and return.
          </p>
        </div>
      </div>

      <div style={{ padding: '28px', display: 'grid', gap: '24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(280px, 0.9fr)',
            gap: '24px',
          }}
          className="pi-engine-grid"
        >
          <article
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: '3px',
              padding: '22px',
              backgroundColor: 'rgba(5,6,16,0.72)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '16px',
                flexWrap: 'wrap',
              }}
            >
              <h3
                style={{
                  fontFamily: DISPLAY,
                  color: GOLD,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  margin: 0,
                }}
              >
                Veyrath Atlas
              </h3>
              <button
                type="button"
                onClick={() => setSurvivorView((value) => !value)}
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: survivorView ? GOLD : BODY,
                  background: 'transparent',
                  border: `1px solid ${survivorView ? 'rgba(247,230,183,0.6)' : BORDER}`,
                  borderRadius: '2px',
                  padding: '9px 12px',
                  cursor: 'pointer',
                }}
              >
                {survivorView ? 'Survivor View' : 'ICSE View'}
              </button>
            </div>

            <div
              style={{
                position: 'relative',
                minHeight: '260px',
                border: `1px solid ${BORDER}`,
                borderRadius: '3px',
                overflow: 'hidden',
                background:
                  'radial-gradient(circle at 50% 52%, rgba(125,167,217,0.14), transparent 28%), radial-gradient(circle at 48% 44%, rgba(179,36,53,0.2), transparent 36%), #050611',
              }}
            >
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                <polyline
                  points={pathPoints}
                  fill="none"
                  stroke="rgba(247,230,183,0.28)"
                  strokeWidth="0.4"
                  strokeDasharray="1.2 1.4"
                />
                <path
                  d="M 0 76 C 22 54, 38 82, 60 58 S 88 30, 100 40"
                  fill="none"
                  stroke={`rgba(125,167,217,${phase.glow})`}
                  strokeWidth="1.2"
                />
              </svg>
              {paleIntervalLocations.map((loc, index) => {
                const x = 10 + (index % 4) * 27;
                const y = index < 4 ? 28 + index * 7 : 67 - (index - 4) * 8;
                const active = loc.designation === activeLocation;
                return (
                  <button
                    key={loc.designation}
                    type="button"
                    onClick={() => setActiveLocation(loc.designation)}
                    aria-pressed={active}
                    aria-label={`Inspect ${loc.name}`}
                    style={{
                      position: 'absolute',
                      left: `${x}%`,
                      top: `${y}%`,
                      width: '18px',
                      height: '18px',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      border: `1px solid ${active ? GOLD : RISK[loc.risk]}`,
                      background: active ? GOLD : '#090a18',
                      boxShadow: active
                        ? `0 0 0 7px rgba(247,230,183,0.12), 0 0 28px ${RISK[loc.risk]}`
                        : `0 0 18px ${RISK[loc.risk]}`,
                      cursor: 'pointer',
                    }}
                  />
                );
              })}
            </div>

            <div aria-live="polite" style={{ marginTop: '18px' }}>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.16em',
                  color: RISK[location.risk],
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {location.designation} / {location.risk}
              </p>
              <h4
                style={{
                  fontFamily: DISPLAY,
                  color: GOLD,
                  fontWeight: 400,
                  fontSize: '1.35rem',
                  margin: '0 0 8px',
                }}
              >
                {location.name}
              </h4>
              <p style={{ fontFamily: SERIF, color: BODY, lineHeight: 1.65, margin: 0 }}>
                {survivorView ? location.signalNotes : location.environment}
              </p>
            </div>
          </article>

          <div style={{ display: 'grid', gap: '16px' }}>
            <article
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: '3px',
                padding: '22px',
                backgroundColor: 'rgba(5,6,16,0.72)',
              }}
            >
              <h3
                style={{
                  fontFamily: DISPLAY,
                  color: GOLD,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  margin: '0 0 14px',
                }}
              >
                Bloom Timer
              </h3>
              <label
                htmlFor="bloom-range"
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,197,181,0.54)',
                }}
              >
                Twin-moon alignment
              </label>
              <input
                id="bloom-range"
                type="range"
                min={0}
                max={100}
                value={bloom}
                onChange={(event) => setBloom(Number(event.target.value))}
                style={{ width: '100%', margin: '14px 0', accentColor: BLUE }}
              />
              <p
                style={{
                  fontFamily: MONO,
                  color: BLUE,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  margin: '0 0 8px',
                }}
              >
                {phase.label}
              </p>
              <p style={{ fontFamily: SERIF, color: BODY, lineHeight: 1.6, margin: 0 }}>
                {phase.note}
              </p>
            </article>

            <article
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: '3px',
                padding: '22px',
                backgroundColor: 'rgba(5,6,16,0.72)',
              }}
            >
              <h3
                style={{
                  fontFamily: DISPLAY,
                  color: GOLD,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  margin: '0 0 14px',
                }}
              >
                Clicker Rhythm
              </h3>
              <div
                role="tablist"
                aria-label="Clicker warning states"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '6px',
                  marginBottom: '14px',
                }}
              >
                {clickerStates.map((state, index) => (
                  <button
                    key={state.label}
                    type="button"
                    role="tab"
                    aria-selected={clickerIndex === index}
                    onClick={() => setClickerIndex(index)}
                    style={{
                      minHeight: '34px',
                      fontFamily: MONO,
                      fontSize: '0.52rem',
                      color: clickerIndex === index ? GOLD : BODY,
                      background: clickerIndex === index ? 'rgba(179,36,53,0.22)' : 'transparent',
                      border: `1px solid ${clickerIndex === index ? 'rgba(247,230,183,0.44)' : BORDER}`,
                      borderRadius: '2px',
                      cursor: 'pointer',
                    }}
                  >
                    {state.label}
                  </button>
                ))}
              </div>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '0.8rem',
                  color: clickerIndex === 1 ? RED : GOLD,
                  lineHeight: 1.7,
                  margin: '0 0 10px',
                }}
              >
                {clickerStates[clickerIndex].pattern}
              </p>
              <p style={{ fontFamily: SERIF, color: BODY, lineHeight: 1.6, margin: 0 }}>
                {clickerStates[clickerIndex].meaning}
              </p>
            </article>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 0.8fr)',
            gap: '24px',
          }}
          className="pi-engine-grid"
        >
          <article
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: '3px',
              padding: '22px',
              backgroundColor: 'rgba(5,6,16,0.72)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '14px',
                flexWrap: 'wrap',
              }}
            >
              <h3
                style={{
                  fontFamily: DISPLAY,
                  color: GOLD,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  margin: 0,
                }}
              >
                Recurrence Proof Board
              </h3>
              <button
                type="button"
                onClick={() => setProofMarks((value) => Math.min(value + 1, 4))}
                style={{
                  fontFamily: MONO,
                  fontSize: '0.55rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  background: 'transparent',
                  border: '1px solid rgba(247,230,183,0.42)',
                  borderRadius: '2px',
                  padding: '9px 12px',
                  cursor: 'pointer',
                }}
              >
                Cut White Mineral
              </button>
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {recurrenceRows.map((row, index) => (
                <div
                  key={row.version}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px 1fr 1fr',
                    gap: '12px',
                    alignItems: 'start',
                    padding: '12px 0',
                    borderTop: index === 0 ? 'none' : '1px solid rgba(138,28,42,0.2)',
                  }}
                  className="pi-proof-row"
                >
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: '0.58rem',
                      color: index < proofMarks ? GOLD : 'rgba(212,197,181,0.34)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      margin: 0,
                    }}
                  >
                    {row.version}
                  </p>
                  <p style={{ fontFamily: SERIF, color: BODY, lineHeight: 1.5, margin: 0 }}>
                    {row.retained}
                  </p>
                  <p
                    style={{
                      fontFamily: SERIF,
                      color: index < proofMarks ? BLUE : 'rgba(212,197,181,0.34)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {index < proofMarks ? row.proof : '[no persistent mark]'}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: '3px',
              padding: '22px',
              backgroundColor: 'rgba(5,6,16,0.72)',
            }}
          >
            <h3
              style={{
                fontFamily: DISPLAY,
                color: GOLD,
                fontWeight: 400,
                letterSpacing: '0.08em',
                margin: '0 0 14px',
              }}
            >
              Present Fact
            </h3>
            <p style={{ fontFamily: SERIF, color: BODY, lineHeight: 1.65, margin: '0 0 18px' }}>
              The archive wants the phrase completed. The ending asks for something harder.
            </p>
            <div style={{ display: 'grid', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setRefused(false)}
                style={{
                  fontFamily: MONO,
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: refused ? BODY : RED,
                  background: 'transparent',
                  border: `1px solid ${refused ? BORDER : 'rgba(179,36,53,0.7)'}`,
                  borderRadius: '2px',
                  padding: '12px',
                  cursor: 'pointer',
                }}
              >
                Complete The Signal
              </button>
              <button
                type="button"
                onClick={() => setRefused(true)}
                style={{
                  fontFamily: MONO,
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: refused ? GOLD : BODY,
                  background: refused ? 'rgba(125,167,217,0.12)' : 'transparent',
                  border: `1px solid ${refused ? 'rgba(247,230,183,0.55)' : BORDER}`,
                  borderRadius: '2px',
                  padding: '12px',
                  cursor: 'pointer',
                }}
              >
                Refuse Return
              </button>
            </div>
            <p
              aria-live="polite"
              style={{
                fontFamily: SERIF,
                color: refused ? GOLD : 'rgba(224,90,106,0.82)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                lineHeight: 1.55,
                margin: '18px 0 0',
              }}
            >
              {refused
                ? 'Nara: the wound remains open without becoming an entrance.'
                : 'The route brightens. The Knot receives another answer.'}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
