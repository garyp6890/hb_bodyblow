import React from 'react';
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import ProgramsSection from './sections/ProgramsSection';
import SummerCampSection from './sections/SummerCampSection';
import MusicTherapySection from './sections/MusicTherapySection';
import CommunitySection from './sections/CommunitySection';
import ApplySection from './sections/ApplySection';
import GetInvolvedSection from './sections/GetInvolvedSection';
import LearnMoreSection from '../../../components/shared/LearnMoreSection';

export default function FacilityBased() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Facility-Based Programs"
        description="Life Skills and Enrichment"
        mediaUrl="https://i.imgur.com/hR5pAbT.jpeg"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <ProgramsSection />
        <SummerCampSection />
        <MusicTherapySection />
        <CommunitySection />
        <ApplySection />
        <GetInvolvedSection />
        <div className="mt-20">
          <LearnMoreSection page="facility-based" />
        </div>
      </div>
    </div>
  );
}