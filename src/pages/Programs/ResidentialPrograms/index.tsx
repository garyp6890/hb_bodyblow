import React from 'react';
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import ServicesSection from './sections/ServicesSection';
import ClientSpotlight from './sections/ClientSpotlight';
import SuccessStory from './sections/SuccessStory';
import ApplySection from './sections/ApplySection';
import GetInvolvedSection from './sections/GetInvolvedSection';
import LearnMoreSection from '../../../components/shared/LearnMoreSection';

export default function ResidentialPrograms() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Residential Programs"
        description="Thriving at Home and Beyond."
        mediaUrl="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <ServicesSection />
        <ClientSpotlight />
        <SuccessStory />
        <ApplySection />
        <GetInvolvedSection />
        <div className="mt-20">
          <LearnMoreSection page="residential" />
        </div>
      </div>
    </div>
  );
}