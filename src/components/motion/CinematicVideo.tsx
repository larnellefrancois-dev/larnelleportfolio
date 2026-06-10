'use client';

import React from 'react';
import type { MotionAsset } from '@/data/motion-assets';
import ProceduralMotionStory from './ProceduralMotionStory';
import usePrefersReducedMotion from './usePrefersReducedMotion';

interface CinematicVideoProps {
  asset: MotionAsset;
  className?: string;
  intensity?: 'ambient' | 'hero' | 'feature';
  showCaption?: boolean;
}

export default function CinematicVideo({
  asset,
  className,
  intensity = 'ambient',
  showCaption = false,
}: CinematicVideoProps) {
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = React.useState(false);
  const [videoFailed, setVideoFailed] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const showVideo = Boolean(asset.videoSrc && !reduced && !videoFailed);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (paused) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Background tabs can reject autoplay temporarily; keep the media mounted
      // so it can start once the browser allows playback.
    });
  }, [paused, showVideo]);

  return (
    <figure
      className={[
        'cinematic-video',
        `cinematic-video--${intensity}`,
        showVideo ? 'cinematic-video--video' : 'cinematic-video--poster',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={asset.alt}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          className="cinematic-video__media"
          poster={asset.posterSrc}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src={asset.videoSrc} type="video/webm" />
        </video>
      ) : (
        <img className="cinematic-video__media" src={asset.posterSrc} alt="" aria-hidden="true" />
      )}
      <div className="cinematic-video__veil" aria-hidden="true" />
      <div className="cinematic-video__grain" aria-hidden="true" />
      <ProceduralMotionStory asset={asset} paused={paused} reduced={reduced} />
      {showCaption && (
        <figcaption className="cinematic-video__caption">
          <span>{asset.title}</span>
          <small>{asset.caption}</small>
        </figcaption>
      )}
      {showVideo && (
        <button
          type="button"
          className="cinematic-video__pause"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
        >
          {paused ? 'Play' : 'Pause'}
        </button>
      )}
    </figure>
  );
}
