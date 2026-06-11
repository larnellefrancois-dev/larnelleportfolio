import type { Metadata } from 'next';
import React from 'react';
import { MakingOfLab } from '@/components/creative/CreativeExperiences';
import ArchiveSaveStation from '@/components/hud/ArchiveSaveStation';

export const metadata: Metadata = {
  title: 'Making Of — L.F. Chambers',
  description:
    'Motion credits, build notes, and creative-system documentation for the L.F. Chambers portfolio.',
};

export default function MakingOfPage() {
  return (
    <>
      <MakingOfLab />
      <ArchiveSaveStation />
    </>
  );
}
