import React, { useState } from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import QuoteSection from './sections/QuoteSection';
import EmergencyNotice from './sections/EmergencyNotice';
import ResourcesSection from './sections/ResourcesSection';
import ResourceFairSection from './sections/ResourceFairSection';
import DonationSection from './sections/DonationSection';
import GetInvolvedSection from './sections/GetInvolvedSection';
import VideoModal from './components/VideoModal';

export default function Resources() {
  const [showVideo, setShowVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Resources"
        description="Supporting Our Community Together"
        mediaUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        <QuoteSection />
        <EmergencyNotice />
        <DonationSection />
        <ResourcesSection />
        <ResourceFairSection onVideoSelect={(videoId) => setShowVideo(videoId)} />
        <GetInvolvedSection />
      </div>
      <div className="container mx-auto px-4 pb-8">
        <LearnMoreSection page="resources" />
      </div>

      {showVideo && (
        <VideoModal
          videoId={showVideo}
          onClose={() => setShowVideo(null)}
        />
      )}
    </div>
  );
}