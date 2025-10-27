import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import ImpactSection from './sections/ImpactSection';
import FoundationPartnersSection from './sections/FoundationPartnersSection';
import EstatePlanningSection from './sections/EstatePlanningSection';
import BusinessPartnersSection from './sections/BusinessPartnersSection';
import ServicePartnersSection from './sections/ServicePartnersSection';
import GetInvolvedSection from './sections/GetInvolvedSection';

export default function Partners() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Partners in Happiness"
        description="Together, We Make a Difference"
        mediaUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
            Building Community Through Partnership
          </h1>
          <p className="text-xl text-gray-600">
            This page celebrates the extraordinary generosity of our partners, foundations, and supporters. 
            From donations to services, their contributions create a ripple effect of joy and opportunity. 
            Join us in making an impact today.
          </p>
        </div>

        <ImpactSection />
        <FoundationPartnersSection />
        <EstatePlanningSection />
        <BusinessPartnersSection />
        <ServicePartnersSection />
        <GetInvolvedSection />
        <div className="mt-24">
          <LearnMoreSection page="partners" />
        </div>
      </div>
    </div>
  );
}