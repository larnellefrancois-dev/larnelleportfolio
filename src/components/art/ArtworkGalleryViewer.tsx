'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import type { ArtworkItem } from '@/data/realms-content';
import { useGameStore } from '@/state/gameStore';
import { audioEngine } from '@/sound/AudioEngine';

interface ArtworkGalleryViewerProps {
  artworks: ArtworkItem[];
}

export default function ArtworkGalleryViewer({ artworks }: ArtworkGalleryViewerProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const lastTriggerRef = React.useRef<HTMLButtonElement | null>(null);
  const activeWork = activeIndex === null ? null : artworks[activeIndex];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Studying a work in the viewer counts toward the Curator achievement.
  React.useEffect(() => {
    if (activeWork) useGameStore.getState().recordArtworkViewed(String(activeWork.id));
  }, [activeWork]);

  const curator = useGameStore((s) => s.achievements.includes('curator'));

  const openWork = (index: number, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActiveIndex(index);
    audioEngine.play('confirm');
  };

  const closeViewer = React.useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => lastTriggerRef.current?.focus(), 0);
  }, []);

  const handleCloseClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      closeViewer();
    },
    [closeViewer]
  );

  const showRelativeWork = React.useCallback(
    (direction: -1 | 1) => {
      audioEngine.play('hover');
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + artworks.length) % artworks.length;
      });
    },
    [artworks.length]
  );

  React.useEffect(() => {
    if (!activeWork) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') showRelativeWork(-1);
      if (event.key === 'ArrowRight') showRelativeWork(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeWork, closeViewer, showRelativeWork]);

  return (
    <>
      <style>
        {`
          .art-gallery-card:focus-visible {
            outline: 2px solid #f7e6b7;
            outline-offset: 4px;
          }

          .art-gallery-card__image {
            transform: scale(1.01);
            animation: art-card-breath 18s ease-in-out infinite alternate;
          }

          .art-gallery-card:hover .art-gallery-card__image,
          .art-gallery-card:focus-visible .art-gallery-card__image {
            transform: scale(1.06);
            filter: sepia(0.06) contrast(1.14) brightness(1.04) !important;
          }

          .art-gallery-card:hover .art-gallery-card__caption,
          .art-gallery-card:focus-visible .art-gallery-card__caption {
            transform: translateY(-4px);
          }

          .art-gallery-card__caption {
            transition: transform 220ms ease;
          }

          .art-viewer-control:hover,
          .art-viewer-control:focus-visible {
            border-color: rgba(247,230,183,0.58) !important;
            background-color: rgba(212,178,113,0.16) !important;
          }

          .art-viewer-modal {
            animation: art-viewer-fade 240ms ease-out both;
          }

          .art-viewer-image-pane img {
            animation: art-viewer-kenburns 18s ease-in-out infinite alternate;
          }

          .art-viewer-aside {
            animation: art-viewer-slide 360ms cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          @keyframes art-card-breath {
            from { transform: scale(1.01) translate3d(-0.8%, -0.8%, 0); }
            to { transform: scale(1.055) translate3d(0.8%, 0.8%, 0); }
          }

          @keyframes art-viewer-fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes art-viewer-slide {
            from { opacity: 0; transform: translateX(22px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes art-viewer-kenburns {
            from { transform: scale(1); }
            to { transform: scale(1.035); }
          }

          @media (max-width: 760px) {
            .art-viewer-modal {
              align-items: stretch !important;
              padding: 12px !important;
            }

            .art-viewer-shell {
              grid-template-columns: minmax(0, 1fr) !important;
              grid-template-rows: minmax(0, 1fr) auto !important;
              max-height: calc(100dvh - 24px) !important;
            }

            .art-viewer-image-pane img {
              max-height: 58dvh !important;
            }

            .art-viewer-aside {
              padding: 18px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .art-gallery-card__image,
            .art-viewer-modal,
            .art-viewer-image-pane img,
            .art-viewer-aside {
              animation: none !important;
            }
          }
        `}
      </style>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '6px',
        }}
      >
        {artworks.map((work, index) => (
          <button
            key={work.id}
            className="art-gallery-card"
            type="button"
            onClick={(event) => openWork(index, event.currentTarget)}
            aria-label={`Open ${work.title}`}
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              backgroundColor: '#1a0f08',
              cursor: 'zoom-in',
              border: 0,
              padding: 0,
              textAlign: 'left',
            }}
          >
            <div
              className="art-gallery-card__image"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${work.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'sepia(0.18) contrast(1.08)',
                transition: 'transform 220ms ease, filter 220ms ease',
              }}
            />
            <div
              className="art-gallery-card__caption"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(13,8,4,0.95) 0%, rgba(13,8,4,0.3) 50%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  color: '#f7e6b7',
                  marginBottom: '4px',
                }}
              >
                {work.title}
              </p>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.5rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(212,178,113,0.5)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {work.medium} · {work.year}
              </p>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.62rem',
                  lineHeight: 1.55,
                  color: 'rgba(247,230,183,0.68)',
                }}
              >
                {work.description ?? work.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {mounted &&
        activeWork &&
        createPortal(
          <div
            className="art-viewer-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeWork.title}
            onClick={closeViewer}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(12px, 3vw, 28px)',
              backgroundColor: 'rgba(7, 4, 2, 0.92)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <button
              className="art-viewer-control"
              type="button"
              aria-label="Close viewer"
              onClick={handleCloseClick}
              onPointerDown={(event) => event.stopPropagation()}
              style={{
                position: 'fixed',
                top: '18px',
                right: '18px',
                zIndex: 2,
                border: '1px solid rgba(212,178,113,0.32)',
                backgroundColor: 'rgba(13, 8, 4, 0.82)',
                color: '#f7e6b7',
                minWidth: '72px',
                height: '42px',
                paddingInline: '12px',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--font-mono-portal)',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Close
            </button>

            <div
              className="art-viewer-shell"
              onClick={(event) => event.stopPropagation()}
              style={{
                width: 'min(1180px, 100%)',
                maxHeight: 'calc(100dvh - 56px)',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 360px)',
                gap: '1px',
                backgroundColor: 'rgba(212,178,113,0.14)',
                border: '1px solid rgba(212,178,113,0.2)',
                overflow: 'hidden',
              }}
            >
              <div
                className="art-viewer-image-pane"
                style={{
                  minHeight: 'min(720px, calc(100dvh - 56px))',
                  position: 'relative',
                  display: 'grid',
                  placeItems: 'center',
                  backgroundColor: 'rgba(26, 15, 8, 0.55)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={activeWork.img}
                  alt={activeWork.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 'calc(100dvh - 56px)',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  className="art-viewer-control"
                  type="button"
                  aria-label="Previous artwork"
                  onClick={(event) => {
                    event.stopPropagation();
                    showRelativeWork(-1);
                  }}
                  style={{
                    position: 'absolute',
                    left: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: '1px solid rgba(212,178,113,0.32)',
                    backgroundColor: 'rgba(13, 8, 4, 0.7)',
                    color: '#f7e6b7',
                    minWidth: '42px',
                    height: '42px',
                    paddingInline: '12px',
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Prev
                </button>
                <button
                  className="art-viewer-control"
                  type="button"
                  aria-label="Next artwork"
                  onClick={(event) => {
                    event.stopPropagation();
                    showRelativeWork(1);
                  }}
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: '1px solid rgba(212,178,113,0.32)',
                    backgroundColor: 'rgba(13, 8, 4, 0.7)',
                    color: '#f7e6b7',
                    minWidth: '42px',
                    height: '42px',
                    paddingInline: '12px',
                    fontFamily: 'var(--font-mono-portal)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Next
                </button>
              </div>

              <aside
                className="art-viewer-aside"
                style={{
                  backgroundColor: 'rgba(13, 8, 4, 0.96)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '32px',
                  overflowY: 'auto',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono-portal)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.26em',
                      textTransform: 'uppercase',
                      color: 'rgba(212,178,113,0.45)',
                      marginBottom: '14px',
                    }}
                  >
                    Artwork {(activeIndex ?? 0) + 1} / {artworks.length} · {activeWork.medium} ·{' '}
                    {activeWork.year}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      color: '#f7e6b7',
                      marginBottom: '18px',
                    }}
                  >
                    {activeWork.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body-serif)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'rgba(240,230,211,0.72)',
                    }}
                  >
                    {activeWork.description ?? activeWork.alt}
                  </p>
                  {curator && (
                    <div
                      style={{
                        marginTop: '22px',
                        padding: '16px',
                        border: '1px dashed rgba(212,178,113,0.35)',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.55rem',
                          letterSpacing: '0.24em',
                          textTransform: 'uppercase',
                          color: 'rgba(212,178,113,0.7)',
                          marginBottom: '10px',
                        }}
                      >
                        Curator layer · process notes
                      </p>
                      <p
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.68rem',
                          lineHeight: 1.7,
                          color: 'rgba(247,230,183,0.6)',
                        }}
                      >
                        PLATE {String((activeIndex ?? 0) + 1).padStart(3, '0')} ·{' '}
                        {activeWork.medium} · CATALOGUED {activeWork.year}. Surface worked in
                        layered passes; the underdrawing remains deliberately visible where the
                        light falls. Studio record retained in the physical archive.
                      </p>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
