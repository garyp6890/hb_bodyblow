import React from 'react';
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import SportsSection from './sections/SportsSection';
import DevelopmentSection from './sections/DevelopmentSection';
import JoinSection from './sections/JoinSection';
import CalendarSection from './sections/CalendarSection';
import LearnMoreSection from '../../../components/shared/LearnMoreSection';

export default function SpecialOlympics() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Special Olympics"
        description="Achieve, Compete, and Inspire"
        mediaUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <SportsSection />
        <CalendarSection />
        <DevelopmentSection />
        <JoinSection />
        <div className="mt-20">
          <LearnMoreSection page="special-olympics" />
        </div>
      </div>
    </div>
  );
}