import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import MissionSection from './sections/MissionSection';
import ValuesSection from './sections/ValuesSection';
import VisionSection from './sections/VisionSection';
import CommitmentSection from './sections/CommitmentSection';
import GetInvolvedSection from './sections/GetInvolvedSection';

export default function MissionVision() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Mission & Vision"
        description="Empowering Lives, Building Community."
        mediaUrl="https://lh3.googleusercontent.com/p/AF1QipO9-12FAOCU-4wdZshN0L-odtLFpd0IDkAJoOVe=s680-w680-h510"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <MissionSection />
          <VisionSection />
          <CommitmentSection />
          <ValuesSection />
          <GetInvolvedSection />
          <LearnMoreSection page="mission-vision" />
        </div>
      </div>
    </div>
  );
}