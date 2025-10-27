import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import ProgressSection from './sections/ProgressSection';
import BuilderSection from './sections/BuilderSection';
import TimelineSection from './sections/TimelineSection';
import VideoUpdates from './sections/VideoUpdates';
import DonateSection from './sections/DonateSection';

export default function Expansion() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Expansion Project"
        description="Building for Our Future"
        mediaUrl="https://ecrodgers.com/wp-content/uploads/2023/03/Happiness-Bag-shovel-dig-980x581.png"
      />
      
      <div className="container mx-auto px-4 py-20">
        <ProgressSection />
        <TimelineSection />
        <VideoUpdates />
        <BuilderSection />
        <DonateSection />
      </div>
    </div>
  );
}