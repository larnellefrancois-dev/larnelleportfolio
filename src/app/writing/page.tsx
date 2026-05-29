'use client';
import React from 'react';
import Link from 'next/link';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import RealmNav from '@/components/RealmNav';

interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  span: 1 | 2;
}

const articles: Article[] = [
  {
    slug: 'semantic-tokens-architecture',
    tag: 'Design Systems',
    title: 'The Architecture of Semantic Tokens: Moving Beyond Color Palettes',
    excerpt: 'In-depth exploration of why primitive color scales are no longer sufficient for complex enterprise systems and how to build a robust semantic layer that scales across multi-brand platforms.',
    date: 'MAR 24, 2024',
    span: 2,
  },
  {
    slug: 'designers-who-code',
    tag: 'Engineering',
    title: 'Bridging the Gap: Designers Who Code',
    excerpt: 'Why the "hybrid" designer is becoming a necessity for teams building high-fidelity design systems.',
    date: 'FEB 12, 2024',
    span: 1,
  },
  {
    slug: 'systems-governance',
    tag: 'Leadership',
    title: 'Systems Governance',
    excerpt: 'How to keep a system alive when you\'re managing 200+ individual contributors.',
    date: 'JAN 28, 2024',
    span: 1,
  },
  {
    slug: 'measuring-success',
    tag: 'Product',
    title: 'Measuring Success',
    excerpt: 'Defining the KPIs that actually matter for internal design system adoption.',
    date: 'DEC 04, 2023',
    span: 1,
  },
  {
    slug: 'death-of-static-mockup',
    tag: 'Opinion',
    title: 'The Death of the Static Mockup: Designing in the Final Medium',
    excerpt: 'A look into why Figma is no longer the final destination, and how rapid prototyping in code is redefining the traditional creative workflow.',
    date: 'NOV 19, 2023',
    span: 2,
  },
  {
    slug: 'type-systems',
    tag: 'Visuals',
    title: 'Type Systems',
    excerpt: 'Mastering fluid typography and modular scales in responsive layouts.',
    date: 'OCT 30, 2023',
    span: 1,
  },
];

export default function WritingPage() {
  return (
    <>
      <RealmNav brandName="Larnelle Chambers" />
    <div
      className="max-w-[1600px] mx-auto px-5 sm:px-10 py-10"
      style={{ fontFamily: "'Inter', sans-serif", paddingTop: '72px' }}
    >

      {/* Page Intro */}
      <section className="py-10 sm:py-16 pb-12 sm:pb-20 max-w-[800px]">
        <h1
          className="font-light text-ink-black mb-6"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 200, letterSpacing: '-0.03em' }}
        >
          Writing
        </h1>
        <p
          className="text-ink-gray font-light"
          style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', lineHeight: 1.6, fontWeight: 300 }}
        >
          Thoughts on design systems, engineering culture, and the intersection of architecture and digital products. Exploring how we build scalable foundations for the next generation of web experiences.
        </p>
      </section>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mb-20">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className={`article-card-link group no-underline flex flex-col col-span-1 ${article.span === 2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
            style={{
              backgroundColor: '#F7F7F7',
              padding: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              color: 'inherit',
              minHeight: '320px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#F0F0F0'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#F7F7F7'; }}
          >
            {/* Meta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <span
                style={{
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#999999',
                  display: 'block',
                }}
              >
                {article.tag}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: '#999999',
                }}
              >
                {article.date}
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 300,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                marginBottom: '20px',
                color: '#111111',
              }}
            >
              {article.title}
            </h2>

            {/* Excerpt */}
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#666666',
                marginBottom: '32px',
                flexGrow: 1,
              }}
            >
              {article.excerpt}
            </p>

            {/* Read More */}
            <div
              className="read-more-arrow"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Read Article
              <span
                className="arrow-icon"
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease',
                }}
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <SiteFooter />

      <style jsx global>{`
        .article-card-link:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </div>
    </>
  );
}
