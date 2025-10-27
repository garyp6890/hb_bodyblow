import React, { useState } from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import IntroSection from './sections/IntroSection';
import BenefitsSection from './sections/BenefitsSection';
import PositionsSection from './sections/PositionsSection';
import TestimonialSection from './sections/TestimonialSection';
import VideoSection from './sections/VideoSection';
import JobOpeningSection from './sections/JobOpeningSection';
import ApplicationSection from './sections/ApplicationSection';

export default function Careers() {
  const [showVideo, setShowVideo] = useState(false);
  
  const handleDownload = () => {
    // In a real application, this would be a link to your actual application PDF
    window.open('/application.pdf', '_blank');
  };

  const handleUpload = () => {
    // Create a file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // In a real application, you would handle the file upload here
        alert('Application received! We will review it and get back to you soon.');
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Join Our Team"
        description="Make a Difference Every Day"
        mediaUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto mb-20">
          <IntroSection />
          <BenefitsSection />
          <PositionsSection />
          <TestimonialSection />
          <VideoSection showVideo={showVideo} setShowVideo={setShowVideo} />
          <JobOpeningSection />
          <ApplicationSection onDownload={handleDownload} onUpload={handleUpload} />
        </div>

        <div className="mt-20">
          <LearnMoreSection page="careers" />
        </div>
      </div>
    </div>
  );
}