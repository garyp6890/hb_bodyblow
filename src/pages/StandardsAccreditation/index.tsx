import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import StandardsSection from './sections/StandardsSection';
import CARFSection from './sections/CARFSection';
import MedicaidSection from './sections/MedicaidSection';
import ResourcesSection from './sections/ResourcesSection';

export default function StandardsAccreditation() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Standards & Accreditation"
        description="Excellence in Disability Services"
        mediaUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        <StandardsSection />
        <CARFSection />
        <MedicaidSection />
        <ResourcesSection />
        <div className="mt-20">
          <LearnMoreSection page="standards" />
        </div>
      </div>
    </div>
  );
}