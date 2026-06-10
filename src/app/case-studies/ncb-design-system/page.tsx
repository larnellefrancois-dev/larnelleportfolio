import type { Metadata } from 'next';
import NCBDesignSystemClient from './NCBDesignSystemClient';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://larnellepo4855.builtwithrocket.new'
  ),
  title: 'Oasis: The NCB Design System — Larnelle Chambers',
  description:
    'How a fragmented component library evolved into a versioned, living design system with 2000+ components, 65% adoption rate, and 70% faster handoff across web and mobile.',
  openGraph: {
    title: 'Oasis: The NCB Design System — Larnelle Chambers',
    description:
      'How a fragmented component library evolved into a versioned, living design system with 2000+ components, 65% adoption rate, and 70% faster handoff across web and mobile.',
    url: 'https://larnellepo4855.builtwithrocket.new/case-studies/ncb-design-system',
    siteName: 'Larnelle Chambers — Product & Systems Design',
    type: 'article',
    images: [
      {
        url: '/assets/images/portfolio_work_tile.png',
        width: 1200,
        height: 630,
        alt: 'NCB Unified Design System — component library and design tokens overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oasis: The NCB Design System — Larnelle Chambers',
    description:
      'How a fragmented component library evolved into a versioned, living design system with 2000+ components, 65% adoption rate, and 70% faster handoff.',
    images: ['/assets/images/portfolio_work_tile.png'],
  },
  alternates: {
    canonical: 'https://larnellepo4855.builtwithrocket.new/case-studies/ncb-design-system',
  },
};

export default function NCBDesignSystemPage() {
  return <NCBDesignSystemClient />;
}
