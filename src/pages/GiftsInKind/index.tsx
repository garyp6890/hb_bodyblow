import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import WishListSection from './sections/WishListSection';
import NeedsSection from './sections/NeedsSection';
import HowToDonateSection from './sections/HowToDonateSection';
import ImpactSection from './sections/ImpactSection';
import StayConnectedSection from './sections/StayConnectedSection';
import SuccessStorySection from './sections/SuccessStorySection';

export default function GiftsInKind() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Gifts in Kind"
        description="Support Our Mission with Supplies & Equipment"
        mediaUrl="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <WishListSection />
        <NeedsSection />
        <SuccessStorySection />
        <HowToDonateSection />
        <ImpactSection />
        <StayConnectedSection />
      </div>
    </div>
  );
}