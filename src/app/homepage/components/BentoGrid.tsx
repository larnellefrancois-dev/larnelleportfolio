'use client';
import React, { useRef, useEffect, useState } from 'react';
import AboutCard from './cards/AboutCard';
import FeaturedWorkCard from './cards/FeaturedWorkCard';
import TeamVelocityCard from './cards/TeamVelocityCard';
import EnterpriseSystemCard from './cards/EnterpriseSystemCard';
import TeamsLedCard from './cards/TeamsLedCard';
import DesignSystemsCard from './cards/DesignSystemsCard';
import CodeImageCard from './cards/CodeImageCard';
import PrototypingCard from './cards/PrototypingCard';
import DesignLeadershipCard from './cards/DesignLeadershipCard';
import LeadingCreativeCard from './cards/LeadingCreativeCard';
import BuildingAccessibleCard from './cards/BuildingAccessibleCard';
import LetsTalkCard from './cards/LetsTalkCard';

function RevealWrapper({
  children,
  delay = 0,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: visible
          ? `opacity 0.6s cubic-bezier(0.215,0.61,0.355,1) ${delay}ms, transform 0.6s cubic-bezier(0.215,0.61,0.355,1) ${delay}ms`
          : 'none',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export default function BentoGrid() {
  return (
    <>
      {/* Desktop bento grid */}
      <div
        className="hidden lg:grid"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}
      >
        {/* Row 1 */}
        <RevealWrapper delay={0} style={{ gridColumn: 'span 2' }}>
          <AboutCard />
        </RevealWrapper>
        <RevealWrapper delay={80} style={{ gridColumn: 'span 2' }}>
          <FeaturedWorkCard />
        </RevealWrapper>

        {/* Row 2 */}
        <RevealWrapper delay={0}><TeamVelocityCard /></RevealWrapper>
        <RevealWrapper delay={80}><EnterpriseSystemCard /></RevealWrapper>
        <RevealWrapper delay={160}><TeamsLedCard /></RevealWrapper>
        <RevealWrapper delay={240}><DesignSystemsCard /></RevealWrapper>

        {/* Row 3 */}
        <RevealWrapper delay={0} style={{ gridColumn: 'span 2' }}>
          <CodeImageCard />
        </RevealWrapper>
        <RevealWrapper delay={80}><PrototypingCard /></RevealWrapper>
        <RevealWrapper delay={160}><DesignLeadershipCard /></RevealWrapper>

        {/* Row 4 + 5 */}
        <RevealWrapper delay={0} style={{ gridRow: 'span 2' }}>
          <LeadingCreativeCard />
        </RevealWrapper>
        <RevealWrapper delay={80} style={{ gridColumn: 'span 2' }}>
          <BuildingAccessibleCard />
        </RevealWrapper>
        <RevealWrapper delay={160}><LetsTalkCard /></RevealWrapper>
      </div>

      {/* Mobile stacked layout */}
      <div className="flex flex-col gap-1 lg:hidden">
        {[
          <AboutCard key="about" />,
          <FeaturedWorkCard key="featured" />,
          <TeamVelocityCard key="team-velocity" />,
          <EnterpriseSystemCard key="enterprise" />,
          <TeamsLedCard key="teams-led" />,
          <DesignSystemsCard key="design-systems" />,
          <CodeImageCard key="code-image" />,
          <PrototypingCard key="prototyping" />,
          <DesignLeadershipCard key="design-leadership" />,
          <LeadingCreativeCard key="leading-creative" />,
          <BuildingAccessibleCard key="building-accessible" />,
          <LetsTalkCard key="lets-talk" />,
        ].map((card, i) => (
          <RevealWrapper key={i} delay={0}>
            {card}
          </RevealWrapper>
        ))}
      </div>
    </>
  );
}