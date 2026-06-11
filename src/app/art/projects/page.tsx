import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import {
  SceneFrame,
  SceneScroller,
  ArtifactViewer,
} from '@/components/cinematic/CinematicPrimitives';
import { artProjects } from '@/data/realms-content';

export const metadata: Metadata = {
  title: 'Projects — Art — L.F. Chambers',
  description: 'Selected art projects, collections, and visual studies by L.F. Chambers.',
};

export default function ArtProjectsPage() {
  return (
    <SceneScroller>
      <SceneFrame
        tone="art"
        eyebrow="Ars Visualis // Collections"
        title="Series, Studies, and Ongoing Work"
        lede="Selected collections and visual studies — each series is a room of its own, hung in sequence."
        meta={[
          { label: 'Series', value: String(artProjects.length) },
          { label: 'Wing', value: 'M·I' },
          { label: 'Status', value: 'Open' },
        ]}
        visual={
          artProjects[0] ? (
            <ArtifactViewer
              src={artProjects[0].img}
              alt={artProjects[0].alt}
              title={artProjects[0].title}
              meta="Lead series"
            />
          ) : undefined
        }
      >
        <p className="ds-prose" style={{ maxWidth: '58ch', color: 'rgba(240,230,211,.6)' }}>
          Scroll — each series occupies its own frame below.
        </p>
      </SceneFrame>

      {artProjects.map((project, index) => (
        <SceneFrame
          key={project.id}
          tone="art"
          eyebrow={`${String(index + 1).padStart(2, '0')} // ${project.type} · ${project.year}`}
          title={project.title}
          lede={project.description}
          visual={
            <ArtifactViewer
              src={project.img}
              alt={project.alt}
              title={project.title}
              meta={`${project.type} — ${project.year}`}
            />
          }
        >
          <div style={{ marginTop: 28 }}>
            <Link href="/art/gallery" className="ds-btn ds-btn--ghost">
              View works in the gallery
            </Link>
          </div>
        </SceneFrame>
      ))}
    </SceneScroller>
  );
}
