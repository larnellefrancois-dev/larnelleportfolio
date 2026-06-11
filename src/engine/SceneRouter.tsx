'use client';
import type { RealmId } from '@/data/discovery-map';
import type { QualityTier } from '@/state/gameStore';
import PortalHubScene from './scenes/PortalHubScene';
import LiteratureScene from './scenes/LiteratureScene';
import ArtScene from './scenes/ArtScene';
import ProductScene from './scenes/ProductScene';
import ParticleField from './particles/ParticleField';

/* Maps the current realm to its scene inside the single persistent canvas:
   the navigable hub on the portal, a bespoke atmosphere per realm elsewhere.
   Each scene disposes its own geometries/materials on unmount so the shared
   WebGL context never accumulates orphans across route changes. */

interface Props {
  realm: RealmId;
  isPortal: boolean;
  tier: QualityTier;
}

export default function SceneRouter({ realm, isPortal, tier }: Props) {
  if (isPortal) return <PortalHubScene tier={tier} />;
  if (realm === 'literature') return <LiteratureScene tier={tier} />;
  if (realm === 'art') return <ArtScene tier={tier} />;
  if (realm === 'product') return <ProductScene tier={tier} />;

  // Neutral pages (contact, about, making-of): the shared gold starfield.
  const divisor = tier === 1 ? 4 : 1;
  return (
    <group>
      <ParticleField
        count={Math.round(900 / divisor)}
        color="#a3c4eb"
        spread={18}
        size={0.07}
        opacity={0.55}
        drift={0.005}
        parallax={0.35}
        seed={7}
      />
      <ParticleField
        count={Math.round(260 / divisor)}
        color="#e8d099"
        spread={10}
        size={0.13}
        opacity={0.8}
        drift={-0.012}
        parallax={0.9}
        seed={5}
      />
    </group>
  );
}
