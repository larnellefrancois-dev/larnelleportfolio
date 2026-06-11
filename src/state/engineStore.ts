'use client';
import { create } from 'zustand';
import type { RealmId } from '@/data/discovery-map';

/* Transient (never persisted) coordination between the DOM layer and the
   3D scenes. The portal cards report hover focus here; CinematicRouteLink
   reports gate transitions so the camera can fly while the overlay plays. */

interface EngineState {
  /** Realm the pointer is currently focused on in the portal triptych. */
  hubFocus: RealmId | null;
  /** Realm a cinematic gate transition is in flight toward. */
  gateTarget: RealmId | null;
  /** Normalized document scroll (0..1) fed to backdrop scenes. */
  scrollOffset: number;
  setHubFocus: (realm: RealmId | null) => void;
  setGateTarget: (realm: RealmId | null) => void;
  setScrollOffset: (offset: number) => void;
}

export const useEngineStore = create<EngineState>()((set) => ({
  hubFocus: null,
  gateTarget: null,
  scrollOffset: 0,
  setHubFocus: (realm) => set({ hubFocus: realm }),
  setGateTarget: (realm) => set({ gateTarget: realm }),
  setScrollOffset: (offset) => set({ scrollOffset: offset }),
}));
