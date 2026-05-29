'use client';
import React, { useMemo, useState } from 'react';
import { paleIntervalTransmissions, transmissionTitle } from '@/data/realms-content';

const ACCENT = '#b32435';
const GOLD = '#f7e6b7';
const BODY = 'rgba(212,197,181,0.75)';
const BORDER = 'rgba(138,28,42,0.3)';
const MONO = "'Space Mono', monospace";

/** Decorative animated waveform built from a deterministic SVG polyline. */
function Waveform() {
  const { line, ghost } = useMemo(() => buildPaths(7), []);
  return (
    <svg
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
      role="img"
      aria-label="A pale animated signal waveform"
      style={{ width: '100%', height: '90px', color: ACCENT, display: 'block', marginBottom: '8px' }}
    >
      <path className="pi-waveform-line pi-waveform-line--ghost" d={ghost} fill="none" stroke="rgba(125,167,217,0.4)" strokeWidth={1.5} strokeLinecap="round" />
      <path className="pi-waveform-line" d={line} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function buildPaths(seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const points = 60;
  const mid = 60;
  const build = (amp: number) => {
    let d = `M 0 ${mid}`;
    for (let i = 1; i <= points; i++) {
      const x = (i / points) * 600;
      const y = mid + (rand() - 0.5) * amp * Math.sin(i * 0.7);
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  };
  return { line: build(70), ghost: build(95) };
}

/**
 * Interactive "Signal Console". Users select waveform segments to reveal
 * recovered transmission fragments; corrupted segments show as damaged.
 * Every segment is a real <button> (keyboard operable), the readout is an
 * aria-live region, and a full text transcript is always rendered so no
 * content is locked behind interaction (SEO + accessibility).
 */
export default function SignalConsole() {
  const [activeId, setActiveId] = useState(paleIntervalTransmissions[0].id);
  const active =
    paleIntervalTransmissions.find((f) => f.id === activeId) ?? paleIntervalTransmissions[0];

  return (
    <section
      aria-labelledby="pi-console-title"
      style={{
        border: `1px solid ${BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '28px',
      }}
    >
      <p
        id="pi-console-title"
        style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(179,36,53,0.7)', marginBottom: '16px' }}
      >
        Signal Console · {transmissionTitle}
      </p>

      <Waveform />

      {/* Segment selector track */}
      <div
        role="group"
        aria-label="Transmission segments — select to reveal"
        style={{ position: 'relative', height: '48px', margin: '8px 0 20px', borderRadius: '3px', border: `1px solid ${BORDER}`, background: 'repeating-linear-gradient(90deg, rgba(212,197,181,0.05) 0 2px, transparent 2px 7px)' }}
      >
        {paleIntervalTransmissions.map((frag) => {
          const isActive = frag.id === activeId;
          return (
            <button
              key={frag.id}
              type="button"
              className="pi-seg"
              aria-pressed={isActive}
              aria-label={`Segment ${frag.timestamp}${frag.corrupted ? ', corrupted' : ''}`}
              onClick={() => setActiveId(frag.id)}
              style={{
                position: 'absolute',
                top: '8px',
                bottom: '8px',
                left: `${frag.position}%`,
                transform: 'translateX(-50%)',
                width: '4px',
                padding: 0,
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
                background: frag.corrupted
                  ? 'repeating-linear-gradient(0deg, rgba(125,167,217,0.9) 0 3px, transparent 3px 6px)'
                  : isActive
                    ? GOLD
                    : ACCENT,
                opacity: isActive ? 1 : 0.7,
              }}
            />
          );
        })}
      </div>

      {/* Live readout */}
      <div
        aria-live="polite"
        style={{ minHeight: '72px', padding: '16px', border: `1px solid ${BORDER}`, borderRadius: '3px', backgroundColor: '#080510', fontFamily: MONO, fontSize: '0.9rem', color: BODY, lineHeight: 1.6 }}
      >
        <span style={{ color: ACCENT, letterSpacing: '0.1em' }}>{active.timestamp}</span>{' '}
        {active.corrupted || active.text === null ? (
          <span style={{ color: 'rgba(125,167,217,0.8)', letterSpacing: '0.3em' }}>
            ░░░ signal lost ░░░
            <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
              corrupted segment, no recoverable audio
            </span>
          </span>
        ) : (
          <span style={{ color: GOLD }}>{active.text}</span>
        )}
      </div>

      {/* Always-available fallback transcript */}
      <details style={{ marginTop: '16px' }}>
        <summary style={{ cursor: 'pointer', fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(179,36,53,0.7)' }}>
          Full recovered transcript
        </summary>
        <ul style={{ listStyle: 'none', padding: '12px 0 0', margin: 0 }}>
          {paleIntervalTransmissions.map((f) => (
            <li key={f.id} style={{ fontFamily: MONO, fontSize: '0.8rem', color: BODY, padding: '3px 0' }}>
              [{f.timestamp}] {f.corrupted ? '— signal lost —' : f.text}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
