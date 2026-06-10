export type MotionRealm = 'home' | 'product' | 'art' | 'literature';

export interface MotionAsset {
  id: string;
  realm: MotionRealm;
  title: string;
  caption: string;
  posterSrc: string;
  videoSrc?: string;
  alt: string;
  credit: 'Remotion' | 'HyperFrames' | 'Site motion system';
}

export const motionAssets = {
  homePortal: {
    id: 'home-portal-loop',
    realm: 'home',
    title: 'Portal Field',
    caption: 'A cinematic gateway loop for the three realms.',
    posterSrc: '/assets/motion/home-portal-loop.svg',
    videoSrc: '/assets/motion/home-portal-loop.webm',
    alt: 'Abstract portal rings, starlight, and a red diagonal signal field.',
    credit: 'Remotion',
  },
  productSystem: {
    id: 'product-system-loop',
    realm: 'product',
    title: 'System Grid',
    caption: 'Interface geometry, scan lines, and component-grid motion.',
    posterSrc: '/assets/motion/product-system-loop.svg',
    videoSrc: '/assets/motion/product-system-loop.webm',
    alt: 'Cyan interface grid with luminous product-system lines.',
    credit: 'Remotion',
  },
  artGallery: {
    id: 'art-gallery-loop',
    realm: 'art',
    title: 'Gallery Light Sweep',
    caption: 'Brush light, gold dust, and slow studio atmosphere.',
    posterSrc: '/assets/motion/art-gallery-loop.svg',
    videoSrc: '/assets/motion/art-gallery-loop.webm',
    alt: 'Gold brush strokes and warm gallery light over a dark field.',
    credit: 'Remotion',
  },
  paleSignal: {
    id: 'pale-interval-signal-loop',
    realm: 'literature',
    title: 'Pale Interval Signal',
    caption: 'A redacted signal loop for ICSE archive pages.',
    posterSrc: '/assets/motion/pale-interval-signal-loop.svg',
    videoSrc: '/assets/motion/pale-interval-signal-loop.webm',
    alt: 'Twin moons, red signal rupture, and pale waveform lines.',
    credit: 'Remotion',
  },
  veyrathSignal: {
    id: 'veyrath-signal',
    realm: 'literature',
    title: 'Veyrath Signal',
    caption: 'A pulsing lore signal for the world that listens back.',
    posterSrc: '/assets/hyperframes/veyrath-signal.svg',
    videoSrc: '/assets/motion/pale-interval-signal-loop.webm',
    alt: 'A cinematic Veyrath signal poster with blue mineral light and red archive lines.',
    credit: 'HyperFrames',
  },
  twinMoonBloom: {
    id: 'twin-moon-bloom',
    realm: 'literature',
    title: 'Twin-Moon Bloom',
    caption: 'Kaen waking under twin-moon alignment.',
    posterSrc: '/assets/hyperframes/twin-moon-bloom.svg',
    videoSrc: '/assets/motion/pale-interval-signal-loop.webm',
    alt: 'Twin moons above a blue-white mineral bloom in a dark alien field.',
    credit: 'HyperFrames',
  },
  archiveRupture: {
    id: 'archive-rupture',
    realm: 'literature',
    title: 'Archive Rupture',
    caption: 'A corrupted ICSE record breaking open.',
    posterSrc: '/assets/hyperframes/archive-rupture.svg',
    videoSrc: '/assets/motion/pale-interval-signal-loop.webm',
    alt: 'A red archive rupture splitting a dark document field.',
    credit: 'HyperFrames',
  },
} satisfies Record<string, MotionAsset>;

export const realmHeroMotion: Record<MotionRealm, MotionAsset> = {
  home: motionAssets.homePortal,
  product: motionAssets.productSystem,
  art: motionAssets.artGallery,
  literature: motionAssets.paleSignal,
};

export const hyperFrameLoreAssets = [
  motionAssets.veyrathSignal,
  motionAssets.twinMoonBloom,
  motionAssets.archiveRupture,
];
