import React from 'react';


const footerCols = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', href: '/homepage' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Writing', href: '/writing' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    heading: 'Expertise',
    links: [
      { label: 'UX Strategy', href: '/work' },
      { label: 'Visual Design', href: '/work' },
      { label: 'Product Design', href: '/work' },
      { label: 'Leadership', href: '/about' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/larnelle-chambers-143b3b329/', external: true },
      { label: 'Résumé', href: 'https://drive.google.com/file/d/1H_-6YX6X2yfuDNX_TOukg5FmKpg9DFI5/view?usp=drive_open', external: true },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'chambersuiux@gmail.com', href: 'mailto:chambersuiux@gmail.com', external: true },
    ],
    extra: true,
  },
];

export default function SiteFooter() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
    </div>
  );
}