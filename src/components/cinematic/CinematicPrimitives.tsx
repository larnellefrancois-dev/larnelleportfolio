'use client';

import React from 'react';
import type {
  CharacterDossier,
  LiteratureExcerpt,
  ProtocolDocument,
  SurveyLocation,
} from '@/data/realms-content';

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
  const [activeSlug, setActiveSlug] = React.useState(characters[0]?.slug);
  const active = characters.find((character) => character.slug === activeSlug) ?? characters[0];

  if (!active) return null;

  return (
    <section className="dossier-viewer" aria-label="Classified character dossiers">
      <div className="dossier-viewer__portrait">
        {active.portraitImg && (
          <img src={active.portraitImg} alt={active.portraitAlt ?? active.name} />
        )}
        <div className="dossier-viewer__overlay" aria-hidden="true">
          <span>CLASSIFIED</span>
          <span>PERSONNEL</span>
          <span>DOSSIER</span>
        </div>
      </div>
      <article className="dossier-viewer__record">
        <p className="dossier-viewer__classification">{active.classification}</p>
        <h2>{active.name}</h2>
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
        {characters.map((character, index) => (
          <button
            key={character.slug}
            type="button"
            aria-pressed={character.slug === active.slug}
            onClick={() => setActiveSlug(character.slug)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {character.name}
          </button>
        ))}
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

export function ExcerptSceneDeck({ excerpts }: { excerpts: LiteratureExcerpt[] }) {
  return (
    <div className="excerpt-scenes">
      {excerpts.map((excerpt, index) => (
        <article className="excerpt-scene" key={excerpt.id}>
          <div className="excerpt-scene__plate">
            {excerpt.plateImg && (
              <img src={excerpt.plateImg} alt={excerpt.plateAlt ?? excerpt.title} />
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
