import React, { useState } from 'react';
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import WhatIsSection from './sections/WhatIsSection';
import LegacyDonors from './sections/LegacyDonors';
import ResourceLibrary from './sections/ResourceLibrary';
import LegacyArticles from './sections/LegacyArticles';
import ContactSection from './sections/ContactSection';
import LegacyPartnersInfo from './sections/LegacyPartnersInfo';
import StartYourLegacy from './sections/StartYourLegacy';
import LegacyHeroSection from './sections/LegacyHeroSection';
import LegacyModal from './components/LegacyModal';

export default function LegacyGiving() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showLegacyModal, setShowLegacyModal] = useState(false);
  
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Legacy Giving"
        description="Create a lasting impact that transforms lives for generations"
        mediaUrl="https://images.unsplash.com/photo-1589535277368-bacf11ae303c?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <LegacyHeroSection openModal={() => setShowLegacyModal(true)} />
        <WhatIsSection />
        <LegacyDonors />
        <LegacyPartnersInfo />
        <StartYourLegacy />
        <ResourceLibrary emailSubmitted={emailSubmitted} setEmailSubmitted={setEmailSubmitted} />
        <LegacyArticles />
        <ContactSection />
      </div>

      {showLegacyModal && (
        <LegacyModal onClose={() => setShowLegacyModal(false)} />
      )}
    </div>
  );
}