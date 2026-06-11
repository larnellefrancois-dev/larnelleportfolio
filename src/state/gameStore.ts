'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ACHIEVEMENTS,
  countDiscoveries,
  type ProgressSnapshot,
  type RealmId,
} from '@/data/discovery-map';

export type QualityTier = 0 | 1 | 2;

export interface ToastData {
  id: string;
  title: string;
  description: string;
  reward: string;
}

interface GameState extends ProgressSnapshot {
  hasBooted: boolean;
  muted: boolean;
  volume: number;
  qualityOverride: QualityTier | null;

  /* Transient (never persisted) */
  contextLost: boolean;
  toastQueue: ToastData[];
  achievements: string[];

  recordRealmVisit: (realm: RealmId) => void;
  recordDeclassified: (docId: string) => void;
  recordLocationVisit: (locationId: string) => void;
  recordExcerptRead: (excerptId: string) => void;
  recordArtworkViewed: (artworkId: string) => void;
  recordCaseStudyOpened: (slug: string) => void;
  recordSignalDecoded: (code: string) => void;

  setBooted: () => void;
  setMuted: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  setQualityOverride: (tier: QualityTier | null) => void;
  setContextLost: (lost: boolean) => void;
  popToast: () => void;
  resetSave: () => void;
}

const EMPTY_PROGRESS: ProgressSnapshot & { achievements: string[] } = {
  visitedRealms: [],
  declassifiedDocs: [],
  visitedLocations: [],
  readExcerpts: [],
  viewedArtworks: [],
  openedCaseStudies: [],
  decodedSignals: [],
  achievements: [],
};

/** Append `id` to `list` if absent, then re-evaluate achievements and queue
    toasts for any newly earned ones. All record* actions funnel through here. */
function withRecorded(
  state: GameState,
  key: keyof ProgressSnapshot,
  id: string
): Partial<GameState> {
  if (state[key].includes(id)) return {};
  const next: ProgressSnapshot = {
    visitedRealms: state.visitedRealms,
    declassifiedDocs: state.declassifiedDocs,
    visitedLocations: state.visitedLocations,
    readExcerpts: state.readExcerpts,
    viewedArtworks: state.viewedArtworks,
    openedCaseStudies: state.openedCaseStudies,
    decodedSignals: state.decodedSignals,
    [key]: [...state[key], id],
  };
  const earned = ACHIEVEMENTS.filter(
    (a) => !state.achievements.includes(a.id) && a.isUnlocked(next)
  );
  return {
    ...next,
    achievements: earned.length
      ? [...state.achievements, ...earned.map((a) => a.id)]
      : state.achievements,
    toastQueue: earned.length
      ? [
          ...state.toastQueue,
          ...earned.map((a) => ({
            id: a.id,
            title: a.title,
            description: a.description,
            reward: a.reward,
          })),
        ]
      : state.toastQueue,
  };
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      ...EMPTY_PROGRESS,
      hasBooted: false,
      muted: false,
      volume: 0.7,
      qualityOverride: null,
      contextLost: false,
      toastQueue: [],

      recordRealmVisit: (realm) =>
        set((s) => (realm === 'home' ? {} : withRecorded(s, 'visitedRealms', realm))),
      recordDeclassified: (docId) => set((s) => withRecorded(s, 'declassifiedDocs', docId)),
      recordLocationVisit: (locationId) =>
        set((s) => withRecorded(s, 'visitedLocations', locationId)),
      recordExcerptRead: (excerptId) => set((s) => withRecorded(s, 'readExcerpts', excerptId)),
      recordArtworkViewed: (artworkId) => set((s) => withRecorded(s, 'viewedArtworks', artworkId)),
      recordCaseStudyOpened: (slug) => set((s) => withRecorded(s, 'openedCaseStudies', slug)),
      recordSignalDecoded: (code) => set((s) => withRecorded(s, 'decodedSignals', code)),

      setBooted: () => set({ hasBooted: true }),
      setMuted: (muted) => set({ muted }),
      setVolume: (volume) => set({ volume: Math.min(1, Math.max(0, volume)) }),
      setQualityOverride: (tier) => set({ qualityOverride: tier }),
      setContextLost: (lost) => set({ contextLost: lost }),
      popToast: () => set((s) => ({ toastQueue: s.toastQueue.slice(1) })),
      resetSave: () => set({ ...EMPTY_PROGRESS, hasBooted: false, toastQueue: [] }),
    }),
    {
      name: 'lfc-archive-save',
      partialize: (s) => ({
        visitedRealms: s.visitedRealms,
        declassifiedDocs: s.declassifiedDocs,
        visitedLocations: s.visitedLocations,
        readExcerpts: s.readExcerpts,
        viewedArtworks: s.viewedArtworks,
        openedCaseStudies: s.openedCaseStudies,
        decodedSignals: s.decodedSignals,
        achievements: s.achievements,
        hasBooted: s.hasBooted,
        muted: s.muted,
        volume: s.volume,
        qualityOverride: s.qualityOverride,
      }),
    }
  )
);

/** Convenience selector for the HUD counter. */
export function useDiscoveryCount(): { found: number } {
  const found = useGameStore((s) =>
    countDiscoveries({
      visitedRealms: s.visitedRealms,
      declassifiedDocs: s.declassifiedDocs,
      visitedLocations: s.visitedLocations,
      readExcerpts: s.readExcerpts,
      viewedArtworks: s.viewedArtworks,
      openedCaseStudies: s.openedCaseStudies,
      decodedSignals: s.decodedSignals,
    })
  );
  return { found };
}
