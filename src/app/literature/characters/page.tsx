import type { Metadata } from 'next';
import React from 'react';
import DetailPageTemplate from '@/components/DetailPageTemplate';
import CharacterDossierCard from '@/components/literature/CharacterDossierCard';
import { charactersPageData, paleIntervalCharacters } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Characters — The Pale Interval — L.F. Chambers',
  description:
    'Character dossiers from The Pale Interval by L.F. Chambers — Sela Mares, Adra Mares, NAIAD, and the ICSE Archivist. Spoiler-safe by default.',
};

export default function CharactersPage() {
  return (
    <DetailPageTemplate {...charactersPageData}>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {paleIntervalCharacters.map((character) => (
          <CharacterDossierCard key={character.slug} character={character} />
        ))}
      </div>
    </DetailPageTemplate>
  );
}
