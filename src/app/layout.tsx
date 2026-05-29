import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { LoadingBar, PageTransition } from '../components/ui/PageTransition';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'),
  title: 'L.F. Chambers — Image. Interface. Story.',
  description: 'Multidisciplinary creative portfolio spanning Art, Product Design, and Literature. L.F. Chambers / Larnelle Chambers.',
  keywords: ['product design', 'UX design', 'art', 'literature', 'design systems', 'L.F. Chambers', 'Larnelle Chambers'],
  authors: [{ name: 'L.F. Chambers' }],
  creator: 'L.F. Chambers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://larnelle.me',
    siteName: 'L.F. Chambers',
    title: 'L.F. Chambers — Image. Interface. Story.',
    description: 'Multidisciplinary creative portfolio spanning Art, Product Design, and Literature.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'L.F. Chambers — multidisciplinary creative portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L.F. Chambers — Image. Interface. Story.',
    description: 'Multidisciplinary creative portfolio spanning Art, Product Design, and Literature.',
    images: ['/assets/images/app_logo.png'],
    creator: '@larnelle',
  },
  alternates: {
    canonical: 'https://larnelle.me',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Portal fonts: Cinzel, Cormorant Garamond, Space Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'L.F. Chambers',
              alternateName: 'Larnelle Chambers',
              url: 'https://larnelle.me',
              sameAs: [
                'https://www.linkedin.com/in/larnelle-chambers-143b3b329/',
              ],
              jobTitle: 'Multidisciplinary Creative',
              description: 'Multidisciplinary creative working across Art, Product Design, and Literature.',
            }),
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Flarnellepo4855back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body style={{ overflowX: 'hidden' }}>
        <LoadingBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}