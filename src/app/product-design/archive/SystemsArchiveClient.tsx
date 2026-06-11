'use client';

import React from 'react';
import CinematicRouteLink from '@/components/motion/CinematicRouteLink';
import type { DesignArchiveItem } from '@/data/product-content';

const filters = [
  'All Systems',
  'Banking UX',
  'Design Systems',
  'Typography',
  'Platform Design',
  'Mobile',
] as const;

type Filter = (typeof filters)[number];

function matchesFilter(item: DesignArchiveItem, filter: Filter) {
  if (filter === 'All Systems') return true;
  const haystack = [item.category, item.title, item.description, ...item.tags]
    .join(' ')
    .toLowerCase();
  if (filter === 'Banking UX') return /bank|finance|loan|devotional|transaction/.test(haystack);
  if (filter === 'Design Systems')
    return /system|brand|visual|component|campaign|print|packaging/.test(haystack);
  if (filter === 'Typography') return /type|typography|editorial|text|campaign/.test(haystack);
  if (filter === 'Platform Design')
    return /platform|web|rideshare|logistics|commerce|responsive/.test(haystack);
  if (filter === 'Mobile') return /mobile|app|screen|tracking|tourism|rideshare/.test(haystack);
  return true;
}

function projectIndex(index: number) {
  return `PD-${String(771 + index).padStart(3, '0')}`;
}

export default function SystemsArchiveClient({ items }: { items: DesignArchiveItem[] }) {
  const [activeFilter, setActiveFilter] = React.useState<Filter>('All Systems');
  const visibleItems = React.useMemo(
    () => items.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter, items]
  );

  return (
    <>
      <div className="systems-archive__filters" role="tablist" aria-label="Filter systems archive">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="systems-archive__filter"
            aria-selected={activeFilter === filter}
            role="tab"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="systems-archive__grid" aria-live="polite">
        {visibleItems.map((item, index) => (
          <article key={item.id} id={item.id} className="systems-card">
            <div className="systems-card__media">
              <img src={item.img} alt={item.alt} loading="lazy" />
              <span className="systems-card__tint" aria-hidden="true" />
            </div>
            <div className="systems-card__frame" aria-hidden="true">
              <span className="systems-card__corner systems-card__corner--tl" />
              <span className="systems-card__corner systems-card__corner--tr" />
              <span className="systems-card__corner systems-card__corner--bl" />
              <span className="systems-card__corner systems-card__corner--br" />
            </div>
            <div className="systems-card__content">
              <div className="systems-card__mini">
                <span>{item.year.replace('Portfolio ', '')}</span>
                <span>{projectIndex(index)}</span>
              </div>
              <div>
                <h2 className="systems-card__title">
                  <CinematicRouteLink
                    href={`/product-design/archive#${item.id}`}
                    kind="tile"
                    title="Indexing System"
                    subtitle={`${projectIndex(index)} / ${item.category}`}
                    numeral={String(index + 1).padStart(2, '0')}
                    indexLabel={projectIndex(index)}
                    images={[item.img, '/assets/motion/product-system-loop.svg']}
                  >
                    {item.title}
                  </CinematicRouteLink>
                </h2>
                <p className="systems-card__client">{item.category}</p>
                <p className="systems-card__desc">{item.description}</p>
              </div>
              <div className="systems-card__tags">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleItems.length === 0 && (
        <p className="systems-archive__empty">
          No systems match this filter yet. The archive is still being indexed.
        </p>
      )}
    </>
  );
}
