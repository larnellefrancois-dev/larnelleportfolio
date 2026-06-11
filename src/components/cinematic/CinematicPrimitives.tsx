'use client';

import React from 'react';
import type {
  CharacterDossier,
  LiteratureExcerpt,
  ProtocolDocument,
  SurveyLocation,
} from '@/data/realms-content';
import { useGameStore } from '@/state/gameStore';
import { audioEngine } from '@/sound/AudioEngine';

const SCRAMBLE_GLYPHS = '█▓▒░ABCDEFGHIKLMNORSTVY0134579·—';

/** Text that resolves left-to-right out of archive static. Skips itself for
    reduced-motion users. */
function useDecryptedText(value: string, durationMs = 620): string {
  const [display, setDisplay] = React.useState(value);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const settled = Math.floor(value.length * t);
      let out = value.slice(0, settled);
      for (let i = settled; i < value.length; i++) {
        out +=
          value[i] === ' '
            ? ' '
            : SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
      }
      setDisplay(out);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, durationMs]);

  return display;
}

type SceneTone = 'literature' | 'art' | 'product';

interface SceneFrameProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: SceneTone;
  meta?: { label: string; value: string }[];
  visual?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function SceneScroller({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`scene-scroller ${className}`}>{children}</div>;
}

export function SceneFrame({
  eyebrow,
  title,
  lede,
  tone = 'literature',
  meta,
  visual,
  children,
  className = '',
}: SceneFrameProps) {
  return (
    <section className={`scene-frame scene-frame--${tone} ${className}`}>
      <div className="scene-frame__grid">
        <div className="scene-frame__copy">
          {eyebrow && <p className="scene-frame__eyebrow">{eyebrow}</p>}
          <h1 className="scene-frame__title">{title}</h1>
          {lede && <p className="scene-frame__lede">{lede}</p>}
          {meta && (
            <div className="scene-frame__meta" aria-label="Scene metadata">
              {meta.map((item) => (
                <span key={`${item.label}-${item.value}`}>
                  <b>{item.label}</b>
                  {item.value}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>
        {visual && <div className="scene-frame__visual">{visual}</div>}
      </div>
    </section>
  );
}

export function NavCoreVisualizer() {
  return (
    <div className="nav-core-visual" aria-label="Animated NAIAD navigation core and Veyrath orbit">
      <div className="nav-core-visual__stars" aria-hidden="true" />
      <div className="nav-core-visual__orbit nav-core-visual__orbit--outer" aria-hidden="true" />
      <div className="nav-core-visual__orbit nav-core-visual__orbit--inner" aria-hidden="true" />
      <div className="nav-core-visual__planet" aria-hidden="true">
        <span />
      </div>
      <div className="nav-core-visual__moon nav-core-visual__moon--one" aria-hidden="true" />
      <div className="nav-core-visual__moon nav-core-visual__moon--two" aria-hidden="true" />
      <div className="nav-core-visual__dashboard" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="nav-core-visual__wave" aria-hidden="true" />
      <p className="nav-core-visual__label">NAIAD NAV CORE // VY-0031</p>
    </div>
  );
}

export function ArchiveGate({
  protocols,
  transmissions,
}: {
  protocols: ProtocolDocument[];
  transmissions: { id: string; timestamp: string; text: string | null; corrupted: boolean }[];
}) {
  return (
    <section className="archive-gate" aria-labelledby="archive-gate-title">
      <div className="archive-gate__film" aria-hidden="true" />
      <div className="archive-gate__corner archive-gate__corner--tl" aria-hidden="true" />
      <div className="archive-gate__corner archive-gate__corner--tr" aria-hidden="true" />
      <div className="archive-gate__corner archive-gate__corner--bl" aria-hidden="true" />
      <div className="archive-gate__corner archive-gate__corner--br" aria-hidden="true" />

      <header className="archive-gate__header">
        <span>ICSE // Protocol Seven</span>
        <span>Access Level: Contested</span>
      </header>

      <div className="archive-gate__layout">
        <aside className="archive-gate__panel">
          <p className="archive-gate__panel-label">Mission Briefing</p>
          <h2 id="archive-gate-title">Enter VY-0031</h2>
          <p>
            Veyrath is not presented as a page. It is a recovered instrument: orbit, surface,
            signal, and dossier records all responding to the reader's attention.
          </p>
          <div className="archive-gate__meters">
            <span style={{ '--meter': '76%' } as React.CSSProperties}>Signal integrity</span>
            <span style={{ '--meter': '42%' } as React.CSSProperties}>Archive confidence</span>
            <span style={{ '--meter': '91%' } as React.CSSProperties}>Hazard pressure</span>
          </div>
        </aside>

        <div className="archive-gate__schematic" aria-label="Veyrath archive schematic">
          <svg viewBox="0 0 600 460" role="img" aria-labelledby="schematic-title">
            <title id="schematic-title">Veyrath mission schematic</title>
            <defs>
              <radialGradient id="gate-core" cx="50%" cy="50%" r="50%">
                <stop stopColor="#7da7d9" stopOpacity="0.95" />
                <stop offset="0.56" stopColor="#b32435" stopOpacity="0.42" />
                <stop offset="1" stopColor="#05060f" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="300" cy="230" r="128" fill="url(#gate-core)" />
            <circle cx="300" cy="230" r="168" fill="none" stroke="rgba(247,230,183,.26)" />
            <circle
              cx="300"
              cy="230"
              r="214"
              fill="none"
              stroke="rgba(125,167,217,.24)"
              strokeDasharray="6 18"
            />
            <path
              d="M72 256 C180 92 368 402 532 170"
              fill="none"
              stroke="rgba(247,230,183,.48)"
              strokeWidth="2"
            />
            <path
              d="M88 352 C254 254 346 312 506 262"
              fill="none"
              stroke="rgba(179,36,53,.58)"
              strokeWidth="2"
              strokeDasharray="8 12"
            />
            {[0, 1, 2, 3, 4].map((index) => (
              <g key={index} transform={`rotate(${index * 72} 300 230)`}>
                <circle cx="300" cy="60" r="7" fill="#f7e6b7" />
                <line x1="300" y1="74" x2="300" y2="114" stroke="rgba(247,230,183,.34)" />
              </g>
            ))}
          </svg>
        </div>

        <aside className="archive-gate__panel archive-gate__panel--log">
          <p className="archive-gate__panel-label">Live Log</p>
          <ul>
            {transmissions.slice(0, 5).map((item) => (
              <li key={item.id} className={item.corrupted ? 'is-corrupt' : undefined}>
                <span>{item.timestamp}</span>
                {item.text ?? '[signal loss / pressure retained]'}
              </li>
            ))}
          </ul>
          <div className="archive-gate__protocols">
            {protocols.map((doc) => (
              <span key={doc.id}>{doc.code}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export function VeyrathOrbitEngine({
  locations,
  characters,
}: {
  locations: SurveyLocation[];
  characters: CharacterDossier[];
}) {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [scanLevel, setScanLevel] = React.useState(2);
  const active = locations[activeIndex] ?? locations[0];
  const relatedCharacters = characters.filter((character) =>
    active.related?.includes(character.slug)
  );
  const unlocked = Math.min(100, 34 + scanLevel * 17 + activeIndex * 3);

  return (
    <section className="veyrath-game" aria-labelledby="veyrath-game-title">
      <div className="veyrath-game__hud">
        <span>Orbit View // VY-0031</span>
        <span>Scan {String(scanLevel).padStart(2, '0')}</span>
      </div>
      <div className="veyrath-game__layout">
        <div className="veyrath-game__orbit" aria-label="Interactive Veyrath orbit map">
          <div className="veyrath-game__core">
            <span>Veyrath</span>
          </div>
          {locations.map((location, index) => {
            const angle = (index / locations.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * (index % 2 === 0 ? 36 : 28);
            const y = 50 + Math.sin(angle) * (index % 2 === 0 ? 36 : 28);
            const isActive = index === activeIndex;
            return (
              <button
                key={location.designation}
                type="button"
                className={`veyrath-game__node ${isActive ? 'is-active' : ''}`}
                style={{ '--x': `${x}%`, '--y': `${y}%` } as React.CSSProperties}
                aria-pressed={isActive}
                onClick={() => {
                  setActiveIndex(index);
                  setScanLevel((value) => Math.min(5, value + 1));
                }}
              >
                <span>{location.designation}</span>
              </button>
            );
          })}
          <div className="veyrath-game__ring veyrath-game__ring--1" aria-hidden="true" />
          <div className="veyrath-game__ring veyrath-game__ring--2" aria-hidden="true" />
          <div className="veyrath-game__ring veyrath-game__ring--3" aria-hidden="true" />
        </div>

        <article className="veyrath-game__surface" aria-live="polite">
          {active.img && <img src={active.img} alt={active.alt ?? active.name} />}
          <div className="veyrath-game__surface-body">
            <p className="veyrath-game__label">
              {active.designation}
              {' // '}
              {active.risk}
            </p>
            <h2 id="veyrath-game-title">{active.name}</h2>
            <p>{active.environment}</p>
            <p className="veyrath-game__signal">{active.signalNotes}</p>
            <div className="veyrath-game__progress" aria-label={`Lore unlocked ${unlocked}%`}>
              <span style={{ width: `${unlocked}%` }} />
            </div>
            <div className="veyrath-game__actions">
              <button type="button" onClick={() => setScanLevel((value) => Math.min(5, value + 1))}>
                Stabilize Scan
              </button>
              <button type="button" onClick={() => setActiveIndex(1)}>
                Return Orbit
              </button>
            </div>
            {relatedCharacters.length > 0 && (
              <div className="veyrath-game__related">
                {relatedCharacters.map((character) => (
                  <span key={character.slug}>{character.name}</span>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export function DossierViewer({ characters }: { characters: CharacterDossier[] }) {
  // "The Knot" stays withheld until the Close Reader achievement unlocks it.
  const closeReader = useGameStore((s) => s.achievements.includes('close-reader'));
  const visible = React.useMemo(
    () => (closeReader ? characters : characters.filter((c) => c.slug !== 'the-knot')),
    [characters, closeReader]
  );
  const withheldCount = characters.length - visible.length;

  const [activeSlug, setActiveSlug] = React.useState(visible[0]?.slug);
  const active = visible.find((character) => character.slug === activeSlug) ?? visible[0];
  const decryptedName = useDecryptedText(active?.name ?? '');

  if (!active) return null;

  return (
    <section className="dossier-viewer" aria-label="Classified character dossiers">
      <div className="dossier-viewer__portrait">
        {active.portraitImg ? (
          <img
            key={active.slug}
            src={active.portraitImg}
            alt={active.portraitAlt ?? active.name}
            className="dossier-viewer__portrait-img"
          />
        ) : (
          <div
            className="dossier-viewer__signal-portrait"
            aria-label={`${active.name} signal plate`}
          >
            <span />
            <span />
            <span />
            <b>{active.name}</b>
          </div>
        )}
        <div className="dossier-viewer__overlay" aria-hidden="true">
          <span>CLASSIFIED</span>
          <span>PERSONNEL</span>
          <span>DOSSIER</span>
        </div>
      </div>
      <article className="dossier-viewer__record" aria-live="polite">
        <p className="dossier-viewer__classification">{active.classification}</p>
        <h2 aria-label={active.name}>
          <span aria-hidden="true">{decryptedName}</span>
        </h2>
        <p className="dossier-viewer__role">{active.role}</p>
        {active.quote && <blockquote>{active.quote}</blockquote>}
        <p>{active.description}</p>
        {active.relationship && (
          <p className="dossier-viewer__relationship">{active.relationship}</p>
        )}
        {active.spoilerLocked && (
          <details>
            <summary>Spoiler-locked notes</summary>
            {active.spoilerLocked.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </details>
        )}
      </article>
      <div className="dossier-viewer__index">
        {visible.map((character, index) => (
          <button
            key={character.slug}
            type="button"
            aria-pressed={character.slug === active.slug}
            onClick={() => {
              setActiveSlug(character.slug);
              audioEngine.play('hover');
            }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {character.name}
          </button>
        ))}
        {withheldCount > 0 && (
          <button type="button" disabled aria-label="Dossier withheld — keep reading the excerpts">
            <span>{String(visible.length + 1).padStart(2, '0')}</span>
            ███ — SIGNAL WITHHELD
          </button>
        )}
      </div>
    </section>
  );
}

export function ArtifactViewer({
  src,
  alt,
  title,
  meta,
  children,
}: {
  src: string;
  alt: string;
  title: string;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure className="artifact-viewer">
      <img src={src} alt={alt} />
      <figcaption>
        <span>{meta ?? 'Recovered Artifact'}</span>
        <b>{title}</b>
        {children}
      </figcaption>
    </figure>
  );
}

/** Marks an excerpt as read (for the Close Reader achievement) once the
    reader has had most of it on screen for a couple of seconds. */
function ExcerptReadSensor({ excerptId }: { excerptId: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let dwell: number | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && dwell === null) {
          dwell = window.setTimeout(() => {
            useGameStore.getState().recordExcerptRead(excerptId);
            observer.disconnect();
          }, 2200);
        } else if (!entry.isIntersecting && dwell !== null) {
          window.clearTimeout(dwell);
          dwell = null;
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => {
      if (dwell !== null) window.clearTimeout(dwell);
      observer.disconnect();
    };
  }, [excerptId]);

  return <span ref={ref} aria-hidden="true" />;
}

export function ExcerptSceneDeck({ excerpts }: { excerpts: LiteratureExcerpt[] }) {
  // Cartographer clearance annotates the surface plate with survey marks.
  const cartographer = useGameStore((s) => s.achievements.includes('cartographer'));

  return (
    <div className="excerpt-scenes">
      {excerpts.map((excerpt, index) => (
        <article className="excerpt-scene" key={excerpt.id}>
          <ExcerptReadSensor excerptId={excerpt.id} />
          <div className="excerpt-scene__plate" style={{ position: 'relative' }}>
            {excerpt.plateImg && (
              <img src={excerpt.plateImg} alt={excerpt.plateAlt ?? excerpt.title} />
            )}
            {cartographer && excerpt.plateImg?.includes('veyrath-surface') && (
              <div
                aria-label="Cartographer annotation layer"
                style={{
                  position: 'absolute',
                  left: 10,
                  bottom: 10,
                  padding: '8px 12px',
                  border: '1px dashed rgba(125,167,217,0.5)',
                  background: 'rgba(5,6,15,0.78)',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.14em',
                  color: 'rgba(125,167,217,0.9)',
                  lineHeight: 1.8,
                }}
              >
                CARTOGRAPHER OVERLAY · 8/8 SITES CHARTED
                <br />
                CAL-R → CSB-31B → VY-CB → VY-SM → VY-SP → VY-DW → VY-MK → VY-WP
              </div>
            )}
          </div>
          <div className="excerpt-scene__copy">
            <p className="excerpt-scene__meta">
              {String(index + 1).padStart(2, '0')}
              {' // '}
              {excerpt.source}
              {' // '}
              {excerpt.chapter}
            </p>
            <h2>{excerpt.title}</h2>
            <div>{excerpt.text}</div>
          </div>
          <aside className="excerpt-scene__telemetry" aria-label="Excerpt telemetry">
            <span>
              Velocity <b>{index === 0 ? '0.34' : index === 1 ? '1.18' : '0.03'}</b>
            </span>
            <span>
              Pressure <b>{index === 0 ? 'Structured' : index === 1 ? 'Blooming' : 'Lost'}</b>
            </span>
            <span>
              Signal <b>{index === 2 ? 'Partial' : 'Stable'}</b>
            </span>
          </aside>
        </article>
      ))}
    </div>
  );
}
