'use client';
import React, { useEffect, useState } from 'react';
import { ACHIEVEMENTS, DISCOVERY_TOTAL } from '@/data/discovery-map';
import { useDiscoveryCount, useGameStore } from '@/state/gameStore';
import { audioEngine } from '@/sound/AudioEngine';

/** Save-data station on the Making-Of page: progress readout, the full
    achievement index (earned vs sealed), the Systems Analyst annotation
    layer, and the reset control. */
export default function ArchiveSaveStation() {
  const [mounted, setMounted] = useState(false);
  const achievements = useGameStore((s) => s.achievements);
  const resetSave = useGameStore((s) => s.resetSave);
  const { found } = useDiscoveryCount();
  const [confirming, setConfirming] = useState(false);
  const analyst = achievements.includes('systems-analyst');

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="ds-container ds-section" aria-labelledby="save-station-title">
      <p className="ds-eyebrow">ICSE Archive · Save Data</p>
      <h2
        id="save-station-title"
        style={{ fontSize: 'var(--step-2)', margin: '0 0 var(--space-sm)' }}
      >
        Archive Save Station
      </h2>
      <p className="ds-lede" style={{ maxWidth: '52ch' }}>
        This portfolio remembers your expedition. Discoveries{' '}
        <strong>
          {found}/{DISCOVERY_TOTAL}
        </strong>{' '}
        · Records {achievements.length}/{ACHIEVEMENTS.length}.
      </p>

      <ul
        style={{
          listStyle: 'none',
          margin: 'var(--space-md) 0',
          padding: 0,
          display: 'grid',
          gap: '8px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
        {ACHIEVEMENTS.map((achievement) => {
          const earned = achievements.includes(achievement.id);
          return (
            <li
              key={achievement.id}
              style={{
                border: `1px solid ${earned ? 'var(--accent)' : 'color-mix(in srgb, var(--accent) 25%, transparent)'}`,
                borderRadius: '3px',
                padding: '14px 16px',
                fontFamily: 'var(--font-mono)',
                opacity: earned ? 1 : 0.55,
              }}
            >
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.18em', margin: '0 0 6px' }}>
                {earned ? '◉' : '◌'} {achievement.title.toUpperCase()}
              </p>
              <p
                style={{
                  fontSize: '0.68rem',
                  lineHeight: 1.6,
                  margin: 0,
                  color: 'color-mix(in srgb, currentColor 70%, transparent)',
                }}
              >
                {earned ? achievement.reward : achievement.description}
              </p>
            </li>
          );
        })}
      </ul>

      {analyst && (
        <div
          style={{
            border: '1px dashed var(--accent)',
            borderRadius: '3px',
            padding: '18px 20px',
            margin: '0 0 var(--space-md)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <p
            style={{
              fontSize: '0.58rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: '0 0 10px',
            }}
          >
            Systems Analyst annotations · unlocked
          </p>
          <p style={{ fontSize: '0.72rem', lineHeight: 1.7, margin: 0 }}>
            Build notes: the three realms run on one design-token system (void/gold/crimson/cyan),
            one persistent WebGL canvas, a synthesized Web Audio score, and a localStorage save file
            — every &ldquo;case study&rdquo; you opened is itself a screen in the larger machine you
            just finished analyzing.
          </p>
        </div>
      )}

      {!confirming ? (
        <button type="button" className="ds-btn ds-btn--ghost" onClick={() => setConfirming(true)}>
          Purge save data
        </button>
      ) : (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}>
            Erase all discoveries and records?
          </span>
          <button
            type="button"
            className="ds-btn"
            onClick={() => {
              resetSave();
              audioEngine.play('denied');
              setConfirming(false);
            }}
          >
            Confirm purge
          </button>
          <button
            type="button"
            className="ds-btn ds-btn--ghost"
            onClick={() => setConfirming(false)}
          >
            Keep save
          </button>
        </div>
      )}
    </section>
  );
}
