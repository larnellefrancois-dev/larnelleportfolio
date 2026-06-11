'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import RedactedText from './RedactedText';
import type { ProtocolDocument } from '@/data/realms-content';
import { useGameStore } from '@/state/gameStore';
import { audioEngine } from '@/sound/AudioEngine';

const MONO = "'Space Mono', monospace";
const BORDER = 'rgba(138,28,42,0.3)';
const BODY = 'rgba(212,197,181,0.7)';
const GOLD = '#f7e6b7';
const BLUE = 'rgba(125,167,217,0.9)';

const HOLD_MS = 1300;

/** A classified Protocol Seven document card. Holding the DECLASSIFY control
    (pointer, or Space/Enter held on the keyboard) scrubs the seal over ~1.3s,
    lifts the redaction bars, opens the sealed annex, and records the
    clearance in the archive save. A native <details> fallback keeps the annex
    reachable without JS or the game layer. */
export default function ArchiveDocumentCard({ doc }: { doc: ProtocolDocument }) {
  const sealed = doc.classification === 'sealed';
  const declassifiedDocs = useGameStore((s) => s.declassifiedDocs);
  const recordDeclassified = useGameStore((s) => s.recordDeclassified);
  const declassified = declassifiedDocs.includes(doc.id);

  const [progress, setProgress] = useState(0);
  const holding = useRef(false);
  const raf = useRef(0);
  const lastTick = useRef(0);
  const progressRef = useRef(0);

  const stopLoop = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = 0;
  }, []);

  const loop = useCallback(
    (now: number) => {
      const delta = now - lastTick.current;
      lastTick.current = now;
      const direction = holding.current ? 1 : -2.4; // released seals re-ink fast
      const next = Math.max(0, Math.min(1, progressRef.current + (delta / HOLD_MS) * direction));
      progressRef.current = next;
      setProgress(next);
      if (next >= 1) {
        stopLoop();
        holding.current = false;
        recordDeclassified(doc.id);
        return;
      }
      if (next > 0 || holding.current) {
        raf.current = requestAnimationFrame(loop);
      } else {
        stopLoop();
      }
    },
    [doc.id, recordDeclassified, stopLoop]
  );

  const beginHold = useCallback(() => {
    if (declassified || holding.current) return;
    holding.current = true;
    audioEngine.play('declassify');
    lastTick.current = performance.now();
    stopLoop();
    raf.current = requestAnimationFrame(loop);
  }, [declassified, loop, stopLoop]);

  const endHold = useCallback(() => {
    holding.current = false;
  }, []);

  useEffect(() => stopLoop, [stopLoop]);

  return (
    <article
      data-declassified={declassified || undefined}
      style={{
        border: `1px solid ${declassified ? 'rgba(125,167,217,0.45)' : BORDER}`,
        backgroundColor: 'rgba(10,11,28,0.5)',
        borderRadius: '3px',
        padding: '24px',
        fontFamily: MONO,
        transition: 'border-color 700ms ease, box-shadow 700ms ease',
        boxShadow: declassified ? '0 0 34px rgba(125,167,217,0.12)' : 'none',
      }}
    >
      {doc.img && (
        <div
          style={{
            aspectRatio: '16 / 10',
            overflow: 'hidden',
            border: `1px solid ${BORDER}`,
            marginBottom: '16px',
            backgroundColor: '#05060f',
          }}
        >
          <img
            src={doc.img}
            alt={doc.alt ?? doc.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: declassified
                ? 'saturate(1.05) contrast(1.02)'
                : 'saturate(0.92) contrast(1.08)',
              transition: 'filter 700ms ease',
            }}
          />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '12px',
          alignItems: 'baseline',
          borderBottom: `1px solid ${BORDER}`,
          paddingBottom: '10px',
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: '#b32435' }}>
          {doc.code}
        </span>
        <span
          style={{
            fontSize: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            padding: '3px 10px',
            borderRadius: '999px',
            border: `1px solid ${declassified ? BLUE : sealed ? '#b32435' : BORDER}`,
            color: declassified ? BLUE : sealed ? '#e05a6a' : BODY,
            transition: 'color 700ms ease, border-color 700ms ease',
          }}
        >
          {declassified ? 'declassified' : doc.classification}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '1.05rem',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: '#f7e6b7',
          margin: '16px 0 12px',
        }}
      >
        {doc.title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {doc.body.map((line, i) => (
          <p
            key={i}
            style={{ position: 'relative', fontSize: '0.82rem', color: BODY, lineHeight: 1.6 }}
          >
            <RedactedText revealed={declassified}>{line}</RedactedText>
          </p>
        ))}
      </div>

      {!declassified && (
        <div style={{ marginTop: '18px' }}>
          <button
            type="button"
            aria-label={`Hold to declassify ${doc.title}`}
            onPointerDown={beginHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            onPointerCancel={endHold}
            onKeyDown={(event) => {
              if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                beginHold();
              }
            }}
            onKeyUp={(event) => {
              if (event.key === ' ' || event.key === 'Enter') endHold();
            }}
            onContextMenu={(event) => event.preventDefault()}
            style={{
              width: '100%',
              padding: '12px',
              background: progress > 0 ? 'rgba(179,36,53,0.14)' : 'transparent',
              border: `1px solid ${progress > 0 ? 'rgba(247,230,183,0.5)' : 'rgba(179,36,53,0.55)'}`,
              borderRadius: '2px',
              color: progress > 0 ? GOLD : '#e05a6a',
              fontFamily: MONO,
              fontSize: '0.6rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              touchAction: 'none',
              userSelect: 'none',
            }}
          >
            {progress > 0 ? 'Scrubbing seal…' : 'Hold to declassify'}
          </button>
          <div
            role="progressbar"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Declassification progress"
            style={{
              height: '2px',
              marginTop: '6px',
              background: 'rgba(138,28,42,0.25)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress * 100}%`,
                height: '100%',
                background: `linear-gradient(90deg, #b32435, ${GOLD})`,
                transition: holding.current ? 'none' : 'width 200ms ease',
              }}
            />
          </div>
        </div>
      )}

      {declassified && doc.spoilerLocked && doc.spoilerLocked.length > 0 && (
        <div
          style={{
            marginTop: '18px',
            padding: '14px 16px',
            border: `1px dashed rgba(125,167,217,0.4)`,
            borderRadius: '2px',
          }}
        >
          <p
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: BLUE,
              margin: '0 0 10px',
            }}
          >
            Recovered annex — P7 clearance
          </p>
          {doc.spoilerLocked.map((line, i) => (
            <p key={i} style={{ fontSize: '0.8rem', color: BODY, lineHeight: 1.6, margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      )}

      {!declassified && doc.spoilerLocked && doc.spoilerLocked.length > 0 && (
        <details style={{ marginTop: '16px' }}>
          <summary
            style={{
              cursor: 'pointer',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: '#e05a6a',
            }}
          >
            Reveal sealed annex
          </summary>
          <div style={{ marginTop: '10px' }}>
            {doc.spoilerLocked.map((line, i) => (
              <p key={i} style={{ fontSize: '0.8rem', color: BODY, lineHeight: 1.6 }}>
                {line}
              </p>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}
