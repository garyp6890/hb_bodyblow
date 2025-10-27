import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import ProgramCategories from './sections/ProgramCategories';
import WellnessSection from './sections/WellnessSection';
import ApplySection from './sections/ApplySection';
import IntroSection from './sections/IntroSection';

export default function Programs() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Our Programs"
        description="Empowering Lives Through Tailored Care"
        mediaUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <ProgramCategories />
        <WellnessSection />
        <ApplySection />
        <LearnMoreSection page="programs" />
      </div>
    </div>
  );
}