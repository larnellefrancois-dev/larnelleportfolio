'use client';

import React from 'react';
import Link from 'next/link';
import { galleryArtworks } from '@/data/realms-content';
import { PRODUCT_WORK } from '@/data/product-content';
import {
  commissionBriefOptions,
  creativeTimeline,
  makingOfEntries,
  mythologyThreads,
  studioNotes,
} from '@/data/creative-experiences';

const panel: React.CSSProperties = {
  border: '1px solid color-mix(in srgb, var(--accent) 24%, transparent)',
  background:
    'linear-gradient(180deg, color-mix(in srgb, var(--surface) 82%, transparent), color-mix(in srgb, var(--bg) 90%, transparent))',
  boxShadow: '0 28px 90px -58px rgba(0,0,0,0.9)',
};

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
};

export function PortalConstellation() {
  const [active, setActive] = React.useState(1);
  const previews = [
    {
      label: 'Art',
      href: '/art/gallery',
      src: galleryArtworks[0]?.img,
      note: 'Studio wall online',
    },
    {
      label: 'Product',
      href: '/product-design/case-studies',
      src: PRODUCT_WORK[0]?.img,
      note: 'Systems command ready',
    },
    {
      label: 'Literature',
      href: '/literature/archive',
      src: '/assets/images/veyrath-kaen-bloom.png',
      note: 'Veyrath archive listening',
    },
  ];

  return (
    <section
      className="portal-constellation"
      style={{
        position: 'absolute',
        left: '50%',
        bottom: '74px',
        zIndex: 4,
        width: 'min(840px, calc(100% - 32px))',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '10px',
        alignItems: 'end',
        pointerEvents: 'auto',
      }}
      aria-label="Living realm previews"
    >
      <div
        style={{
          ...panel,
          minHeight: '118px',
          display: 'grid',
          gridTemplateColumns: '96px 1fr',
          gap: '14px',
          padding: '12px',
          overflow: 'hidden',
        }}
      >
        <img
          src={previews[active]?.src}
          alt=""
          aria-hidden="true"
          style={{ width: '96px', height: '96px', objectFit: 'cover', filter: 'contrast(1.08)' }}
        />
        <div style={{ alignSelf: 'center', minWidth: 0 }}>
          <p style={{ ...mono, color: 'var(--accent)', fontSize: '0.58rem', marginBottom: '8px' }}>
            Live portal preview
          </p>
          <h2 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', marginBottom: '8px' }}>
            {previews[active]?.label}
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '12px' }}>
            {previews[active]?.note}
          </p>
          <Link className="ds-btn ds-btn--ghost" href={previews[active]?.href ?? '/'}>
            Open preview
          </Link>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '6px' }}>
        {previews.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            style={{
              width: '42px',
              height: '42px',
              border: '1px solid rgba(247,230,183,0.24)',
              borderRadius: '999px',
              background: active === index ? 'var(--accent)' : 'rgba(5,6,15,0.68)',
              color: active === index ? 'var(--accent-contrast)' : 'var(--text)',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export function AmbientSoundControl() {
  const audioRef = React.useRef<{ ctx: AudioContext; osc: OscillatorNode; gain: GainNode } | null>(
    null
  );
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    return () => {
      audioRef.current?.ctx.close();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    if (enabled) {
      audioRef.current?.gain.gain.setTargetAtTime(0, audioRef.current.ctx.currentTime, 0.08);
      window.setTimeout(() => {
        audioRef.current?.ctx.close();
        audioRef.current = null;
      }, 180);
      setEnabled(false);
      return;
    }

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 86;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.setTargetAtTime(0.025, ctx.currentTime, 0.12);
    audioRef.current = { ctx, osc, gain };
    setEnabled(true);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      style={{
        position: 'fixed',
        right: '18px',
        bottom: '18px',
        zIndex: 70,
        border: '1px solid color-mix(in srgb, var(--accent) 36%, transparent)',
        background: 'rgba(5,6,15,0.74)',
        color: 'var(--text)',
        padding: '10px 12px',
        borderRadius: '999px',
        ...mono,
        fontSize: '0.56rem',
      }}
    >
      {enabled ? 'Sound on' : 'Ambient'}
    </button>
  );
}

export function StudioWall() {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Acrylic', 'Graphite', 'Ink', 'Charcoal'];
  const visible =
    filter === 'All'
      ? galleryArtworks
      : galleryArtworks.filter((work) => work.medium.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section style={{ marginBottom: '48px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={filter === item ? 'ds-btn ds-btn--primary' : 'ds-btn ds-btn--ghost'}
            style={{ minHeight: '36px', padding: '0.55em 0.95em' }}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        style={{
          ...panel,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1px',
          padding: '1px',
          marginBottom: '18px',
        }}
      >
        {visible.slice(0, 10).map((work, index) => (
          <a
            key={work.id}
            href={`#art-${work.id}`}
            style={{
              minHeight: index % 3 === 0 ? '230px' : '180px',
              position: 'relative',
              overflow: 'hidden',
              background: '#120a05',
            }}
          >
            <img
              src={work.img}
              alt={work.alt}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'saturate(1.06)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '10px',
                right: '10px',
                bottom: '10px',
                color: '#f7e6b7',
                fontFamily: 'var(--font-display)',
                textShadow: '0 2px 18px #000',
              }}
            >
              {work.title}
            </span>
          </a>
        ))}
      </div>
      <div className="ds-grid ds-grid--3">
        {studioNotes.map((note) => (
          <div key={note} className="ds-card" style={{ padding: '18px' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>{note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductCommandCenter() {
  const [active, setActive] = React.useState(PRODUCT_WORK[0]?.id);
  const current = PRODUCT_WORK.find((work) => work.id === active) ?? PRODUCT_WORK[0];
  const stats = [
    ['Studies', PRODUCT_WORK.length],
    ['Featured', PRODUCT_WORK.filter((work) => work.featured).length],
    ['Domains', new Set(PRODUCT_WORK.flatMap((work) => work.tags)).size],
    ['Mode', 'Live'],
  ];

  return (
    <section style={{ ...panel, padding: 'clamp(18px, 3vw, 28px)', marginBottom: '32px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(260px, 0.9fr)',
          gap: '18px',
        }}
      >
        <div>
          <p className="ds-eyebrow">Case Study Command Center</p>
          <h2 style={{ fontSize: 'var(--step-2)', margin: '8px 0 12px' }}>
            Select a project to inspect the design system behind the work.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '8px',
              margin: '18px 0',
            }}
          >
            {stats.map(([label, value]) => (
              <div key={label} style={{ border: '1px solid var(--border)', padding: '14px' }}>
                <strong style={{ display: 'block', color: 'var(--accent)', fontSize: '1.45rem' }}>
                  {value}
                </strong>
                <span style={{ ...mono, fontSize: '0.55rem', color: 'var(--text-faint)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
            {PRODUCT_WORK.map((work) => (
              <button
                key={work.id}
                type="button"
                onClick={() => setActive(work.id)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '12px',
                  textAlign: 'left',
                  padding: '12px 14px',
                  border: '1px solid color-mix(in srgb, var(--accent) 22%, transparent)',
                  background:
                    work.id === active
                      ? 'color-mix(in srgb, var(--accent) 16%, transparent)'
                      : 'transparent',
                }}
              >
                <span>{work.title}</span>
                <span style={{ ...mono, color: 'var(--text-faint)', fontSize: '0.52rem' }}>
                  {work.type}
                </span>
              </button>
            ))}
          </div>
        </div>
        <aside style={{ border: '1px solid var(--border)', padding: '18px', minWidth: 0 }}>
          {current?.img && (
            <img
              src={current.img}
              alt={current.alt ?? ''}
              style={{
                width: '100%',
                aspectRatio: '16/10',
                objectFit: 'cover',
                marginBottom: '16px',
              }}
            />
          )}
          <p style={{ ...mono, color: 'var(--accent)', fontSize: '0.56rem' }}>
            {current?.client} / {current?.year}
          </p>
          <h3 style={{ fontSize: 'var(--step-1)', margin: '8px 0' }}>{current?.title}</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '14px' }}>
            {current?.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {current?.tags.map((tag) => (
              <span key={tag} className="ds-tag">
                {tag}
              </span>
            ))}
          </div>
          <Link
            className="ds-btn ds-btn--primary"
            href={current?.href ?? '/product-design/case-studies'}
          >
            Open case study
          </Link>
        </aside>
      </div>
    </section>
  );
}

export function ArchivePuzzleLayer() {
  const [unlocked, setUnlocked] = React.useState(false);
  const [code, setCode] = React.useState('');
  const valid = code.trim().toLowerCase() === 'nara';

  return (
    <section style={{ ...panel, padding: '24px', marginBottom: '64px' }}>
      <p className="ds-eyebrow">Archive Puzzle Layer</p>
      <h2 style={{ fontSize: 'var(--step-2)', margin: '8px 0 12px' }}>
        Protocol Seven sealed note
      </h2>
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '64ch' }}>
        The archive accepts one refusal-word. It is not a password. It is the concept that keeps
        grief from becoming an entrance.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '18px' }}>
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Enter refusal-word"
          aria-label="Archive refusal word"
          style={{
            flex: '1 1 220px',
            minHeight: '44px',
            border: '1px solid rgba(179,36,53,0.35)',
            background: 'rgba(5,6,15,0.72)',
            color: 'var(--text)',
            padding: '0 14px',
            fontFamily: 'var(--font-mono)',
          }}
        />
        <button type="button" className="ds-btn ds-btn--primary" onClick={() => setUnlocked(valid)}>
          Stabilize
        </button>
      </div>
      <div
        style={{
          marginTop: '18px',
          border: '1px solid rgba(179,36,53,0.22)',
          padding: '18px',
          minHeight: '96px',
        }}
      >
        {unlocked ? (
          <p style={{ color: 'var(--text)', lineHeight: 1.75 }}>
            NARA CONFIRMED: love remains love without becoming return. The wound stays visible, but
            the archive cannot use it as a door.
          </p>
        ) : (
          <p style={{ color: 'rgba(212,197,181,0.48)', lineHeight: 1.75 }}>
            [SEALED] ...repeat is not rescue... the clean version lies by removing the shape...
            answer only with the word that refuses return...
          </p>
        )}
      </div>
    </section>
  );
}

export function MythologyIndex() {
  return (
    <section className="ds-container ds-section">
      <p className="ds-eyebrow">Personal Mythology</p>
      <h1 style={{ fontSize: 'var(--step-3)', margin: '8px 0 14px' }}>
        The same symbols keep crossing the work.
      </h1>
      <p className="ds-lede" style={{ maxWidth: '66ch', marginBottom: 'var(--space-lg)' }}>
        Art, interface, and fiction are not separate portfolios here. They are three ways of asking
        how people read systems, survive rupture, and make meaning from marks.
      </p>
      <div className="ds-grid ds-grid--auto">
        {mythologyThreads.map((thread) => (
          <article key={thread.symbol} className="ds-card" style={{ padding: '22px' }}>
            <p className="ds-card__meta">{thread.realm}</p>
            <h2 className="ds-card__title" style={{ margin: '8px 0' }}>
              {thread.symbol}
            </h2>
            <p className="ds-card__excerpt" style={{ marginBottom: '14px' }}>
              {thread.meaning}
            </p>
            <p
              style={{ ...mono, color: 'var(--text-faint)', fontSize: '0.55rem', lineHeight: 1.6 }}
            >
              {thread.proof}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function InteractiveTimeline() {
  const [active, setActive] = React.useState(creativeTimeline.length - 1);
  const current = creativeTimeline[active];
  return (
    <section className="ds-container ds-section--tight">
      <p className="ds-eyebrow">Interactive Timeline</p>
      <h2 className="ds-section-intro__title" style={{ margin: '8px 0 18px' }}>
        Creative chronology
      </h2>
      <div style={{ ...panel, padding: '22px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(86px, 1fr))',
            gap: '8px',
            marginBottom: '22px',
          }}
        >
          {creativeTimeline.map((item, index) => (
            <button
              key={item.year}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              style={{
                border: '1px solid var(--border)',
                background: active === index ? 'var(--accent)' : 'transparent',
                color: active === index ? 'var(--accent-contrast)' : 'var(--text)',
                padding: '14px 8px',
                ...mono,
                fontSize: '0.58rem',
              }}
            >
              {item.year}
            </button>
          ))}
        </div>
        <p style={{ ...mono, color: 'var(--accent)', fontSize: '0.56rem' }}>{current.realm}</p>
        <h3 style={{ fontSize: 'var(--step-2)', margin: '8px 0' }}>{current.title}</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '62ch' }}>
          {current.detail}
        </p>
      </div>
    </section>
  );
}

export function CommissionBriefBuilder() {
  const [format, setFormat] = React.useState(commissionBriefOptions.formats[0]);
  const [medium, setMedium] = React.useState(commissionBriefOptions.mediums[1]);
  const [mood, setMood] = React.useState(commissionBriefOptions.moods[0]);
  const subject = encodeURIComponent(`Commission Inquiry: ${format}`);
  const body = encodeURIComponent(
    `Format: ${format}\nMedium: ${medium}\nMood: ${mood}\nTimeline:\nDimensions:\nReference notes:`
  );

  const group = (
    label: string,
    options: string[],
    value: string,
    setValue: (value: string) => void
  ) => (
    <fieldset style={{ border: '1px solid rgba(212,178,113,0.16)', padding: '14px', minWidth: 0 }}>
      <legend style={{ ...mono, color: 'rgba(212,178,113,0.55)', fontSize: '0.55rem' }}>
        {label}
      </legend>
      <div style={{ display: 'grid', gap: '8px', marginTop: '10px' }}>
        {options.map((option) => (
          <label
            key={option}
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              color: 'rgba(240,230,211,0.76)',
            }}
          >
            <input type="radio" checked={value === option} onChange={() => setValue(option)} />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <section style={{ ...panel, padding: '24px', marginTop: '48px' }}>
      <p className="ds-eyebrow">Build a Commission Brief</p>
      <h2 style={{ fontSize: 'var(--step-2)', margin: '8px 0 18px' }}>
        Shape the inquiry before sending it.
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
        }}
      >
        {group('Format', commissionBriefOptions.formats, format, setFormat)}
        {group('Medium', commissionBriefOptions.mediums, medium, setMedium)}
        {group('Mood', commissionBriefOptions.moods, mood, setMood)}
      </div>
      <div
        style={{
          border: '1px solid rgba(212,178,113,0.16)',
          marginTop: '16px',
          padding: '16px',
          color: 'rgba(240,230,211,0.75)',
          lineHeight: 1.65,
        }}
      >
        <strong style={{ color: '#f7e6b7' }}>Draft:</strong> I am interested in a{' '}
        {format.toLowerCase()} using {medium.toLowerCase()}, with a {mood.toLowerCase()} feeling.
      </div>
      <a
        className="ds-btn ds-btn--primary"
        href={`mailto:chambersuiux@gmail.com?subject=${subject}&body=${body}`}
        style={{ marginTop: '18px' }}
      >
        Send brief
      </a>
    </section>
  );
}

export function MakingOfLab() {
  return (
    <section className="ds-container ds-section">
      <p className="ds-eyebrow">Making Of</p>
      <h1 style={{ fontSize: 'var(--step-3)', margin: '8px 0 14px' }}>
        Motion credits and build notes
      </h1>
      <p className="ds-lede" style={{ maxWidth: '64ch', marginBottom: 'var(--space-lg)' }}>
        A transparent lab for the portfolio itself: what is generated, what is local, and what is
        designed to be swapped into richer media later.
      </p>
      <div className="ds-grid ds-grid--auto">
        {makingOfEntries.map((entry) => (
          <article key={entry.title} className="ds-card" style={{ padding: '22px' }}>
            <p className="ds-card__meta">{entry.type}</p>
            <h2 className="ds-card__title" style={{ margin: '8px 0' }}>
              {entry.title}
            </h2>
            <p className="ds-card__excerpt" style={{ marginBottom: '16px' }}>
              {entry.detail}
            </p>
            <Link className="ds-btn ds-btn--ghost" href={entry.href}>
              Inspect
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
