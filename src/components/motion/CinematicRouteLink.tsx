'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import Link, { type LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { sectionFromPath, realmFromSection } from '@/lib/site-nav';
import { useEngineStore } from '@/state/engineStore';
import { audioEngine } from '@/sound/AudioEngine';

type TransitionKind = 'realm' | 'archive' | 'tile';

interface CinematicRouteLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps | 'href'
> {
  href: LinkProps['href'];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  kind?: TransitionKind;
  title?: string;
  subtitle?: string;
  numeral?: string;
  indexLabel?: string;
  images?: string[];
  children: React.ReactNode;
}

const defaultFlashImages = [
  '/assets/images/veyrath-kaen-bloom.png',
  '/assets/images/art/nocturne-bloom.jpg',
  '/assets/images/portfolio-shipme-ui.jpg',
  '/assets/images/art/shine-archive.jpg',
];

function toHrefString(href: LinkProps['href']) {
  return typeof href === 'string' ? href : href.pathname || '/';
}

function toPathname(href: LinkProps['href']) {
  const hrefString = toHrefString(href);
  return hrefString.split(/[?#]/)[0] || '/';
}

function currentInternalHref() {
  if (typeof window === 'undefined') return '/';
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function TransitionOverlay({
  kind,
  title,
  subtitle,
  numeral,
  indexLabel,
  images,
}: Required<Pick<CinematicRouteLinkProps, 'kind'>> &
  Pick<CinematicRouteLinkProps, 'title' | 'subtitle' | 'numeral' | 'indexLabel' | 'images'>) {
  const flashImages = images && images.length > 0 ? images : defaultFlashImages;
  const headline = title || (kind === 'archive' ? 'Accessing Archive' : 'Opening Realm');
  const letters = headline.split('');

  return createPortal(
    <div className={`cinematic-gate cinematic-gate--${kind}`} role="status" aria-live="polite">
      <div className="cinematic-gate__film" aria-hidden="true" />
      <div className="cinematic-gate__scratches" aria-hidden="true" />
      <div className="cinematic-gate__frame" aria-hidden="true">
        <span className="cinematic-gate__corner cinematic-gate__corner--tl" />
        <span className="cinematic-gate__corner cinematic-gate__corner--tr" />
        <span className="cinematic-gate__corner cinematic-gate__corner--bl" />
        <span className="cinematic-gate__corner cinematic-gate__corner--br" />
      </div>

      <div className="cinematic-gate__top">
        <span>
          System // <b>{kind === 'archive' ? 'Loading' : 'Transit'}</b>
        </span>
        <span>Seq. {kind === 'archive' ? '01' : '03'}</span>
      </div>

      <div className="cinematic-gate__crosshair" aria-hidden="true" />
      <div className="cinematic-gate__flashes" aria-hidden="true">
        {flashImages.slice(0, 4).map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            className={`cinematic-gate__flash cinematic-gate__flash--${index + 1}`}
          />
        ))}
      </div>

      <div className="cinematic-gate__content">
        <div className="cinematic-gate__numeral">
          {numeral || (kind === 'archive' ? 'I' : 'III')}
        </div>
        <div className="cinematic-gate__title">
          {letters.map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ animationDelay: `${0.08 + index * 0.035}s` }}>
              {letter === ' ' ? '\u00a0' : letter}
            </span>
          ))}
        </div>
        {subtitle && <p className="cinematic-gate__subtitle">{subtitle}</p>}
      </div>

      <div className="cinematic-gate__meta">
        <span>
          Status <b>100%</b>
        </span>
        <span>
          Index <b>{indexLabel || (kind === 'archive' ? 'VY-0031' : 'LF-2026')}</b>
        </span>
        <span>
          Signal <b>Active</b>
        </span>
      </div>
    </div>,
    document.body
  );
}

export default function CinematicRouteLink({
  href,
  kind = 'realm',
  title,
  subtitle,
  numeral,
  indexLabel,
  images,
  children,
  onClick,
  target,
  ...props
}: CinematicRouteLinkProps) {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const [transitioning, setTransitioning] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const pushTimer = React.useRef<number | null>(null);
  const releaseTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  React.useEffect(() => {
    if (!transitioning) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [transitioning]);

  React.useEffect(() => {
    setTransitioning(false);
    useEngineStore.getState().setGateTarget(null);
  }, [pathname]);

  React.useEffect(() => {
    return () => {
      if (pushTimer.current) window.clearTimeout(pushTimer.current);
      if (releaseTimer.current) window.clearTimeout(releaseTimer.current);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === '_blank'
    ) {
      return;
    }

    const hrefString = toHrefString(href);
    if (!hrefString.startsWith('/')) return;

    event.preventDefault();

    if (hrefString === pathname || hrefString === currentInternalHref()) {
      setTransitioning(false);
      return;
    }

    if (pushTimer.current) window.clearTimeout(pushTimer.current);
    if (releaseTimer.current) window.clearTimeout(releaseTimer.current);

    const pushDelay = reducedMotion ? 120 : kind === 'archive' ? 1350 : 1050;

    // Let the 3D scene fly its camera while the overlay plays.
    useEngineStore.getState().setGateTarget(realmFromSection(sectionFromPath(toPathname(href))));
    audioEngine.play(kind === 'archive' ? 'declassify' : 'portal');

    setTransitioning(true);
    pushTimer.current = window.setTimeout(() => {
      router.push(hrefString);
    }, pushDelay);
    releaseTimer.current = window.setTimeout(() => {
      setTransitioning(false);
    }, pushDelay + 2200);
  };

  return (
    <>
      <Link href={href} target={target} onClick={handleClick} {...props}>
        {children}
      </Link>
      {transitioning && (
        <TransitionOverlay
          kind={kind}
          title={title}
          subtitle={subtitle}
          numeral={numeral}
          indexLabel={indexLabel}
          images={images}
        />
      )}
    </>
  );
}
