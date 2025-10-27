import React from 'react';
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import ProgramsSection from './sections/ProgramsSection';
import CalendarSection from './sections/CalendarSection';
import DevelopmentSection from './sections/DevelopmentSection';
import CTASection from './sections/CTASection';
import LearnMoreSection from '../../../components/shared/LearnMoreSection';

export default function RecreationalPrograms() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Recreational Programs"
        description="Fun, Fitness, and Belonging for All"
        mediaUrl="https://i.imgur.com/0GiqYOo.jpeg"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <ProgramsSection />
        <CalendarSection />
        <DevelopmentSection />
        <CTASection />
        <div className="mt-20">
          <LearnMoreSection page="recreational" />
        </div>
      </div>
    </div>
  );
}