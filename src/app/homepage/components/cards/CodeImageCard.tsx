import React from 'react';
import Link from 'next/link';

export default function CodeImageCard() {
  return (
    <Link
      href="/work"
      className="group card-img-wrapper relative overflow-hidden no-underline"
      style={{ minHeight: '320px', display: 'block', textDecoration: 'none' }}
    >
      {/* Background image with grayscale/saturation transition */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0"
        style={{
          backgroundImage: 'url(/assets/images/iStock-2177184278-1775233995703.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Black gradient overlay for readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      <div className="relative z-20 p-8" style={{ minHeight: '320px' }}>
        <span
          className="text-[9px] uppercase block"
          style={{
            letterSpacing: '0.1em',
            color: 'white',
          }}
        >
          Work
        </span>
      </div>
    </Link>
  );
}
