import type { Metadata } from 'next';
import React from 'react';
import BentoGrid from '@/app/homepage/components/BentoGrid';
import SiteFooter from '@/app/homepage/components/SiteFooter';
import RealmNav from '@/components/RealmNav';

export const metadata: Metadata = {
  title: 'Product Design — Larnelle Chambers',
  description: 'Digital architecture, refined interfaces, and the logic of human interaction. UX/UI and product design portfolio by Larnelle Chambers.',
};

export default function ProductDesignPage() {
  return (
    <>
      <RealmNav brandName="Larnelle Chambers" />
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12" style={{ paddingTop: '56px' }}>
        <main>
          <BentoGrid />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
