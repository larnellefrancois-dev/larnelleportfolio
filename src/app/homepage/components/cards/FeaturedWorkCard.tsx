import React from 'react';
import Link from 'next/link';

export default function FeaturedWorkCard() {
  return (
    <Link
      href="/case-studies/ncb-design-system"
      className="group card-img-wrapper relative flex flex-col justify-between overflow-hidden no-underline"
      style={{
        minHeight: '320px',
        display: 'flex',
        textDecoration: 'none',
        color: 'white'
      }}>
      
      {/* Background image - desaturated by default, saturated on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
        style={{
          backgroundImage: "url('/assets/images/iStock-2208901213_1_-1775233406320.jpg')",
          backgroundPosition: 'center center',
        }}
      />

      {/* Black gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25) 100%)'
        }} />

      {/* Content overlay */}
      <div
        className="relative z-20 flex flex-col justify-between h-full p-8"
        style={{ minHeight: '320px' }}>
        
        <span
          className="text-[9px] uppercase block"
          style={{ letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}>
          Featured Work
        </span>
        <div className="mt-auto">
          <h2
            className="font-light text-white leading-tight"
            style={{
              fontSize: 'clamp(22px, 2.5vw, 28px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
            The Design System That Transformed Design Collaboration
          </h2>
        </div>
        {/* Arrow */}
        <span
          className="arrow-hover absolute top-6 right-6 text-white text-sm"
          style={{ fontSize: '14px' }}>
          ↗
        </span>
      </div>
    </Link>
  );
}