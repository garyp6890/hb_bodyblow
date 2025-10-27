import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import LearnMoreSection from '../../components/shared/LearnMoreSection';
import HistoryTimeline from './sections/HistoryTimeline';

export default function History() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="History"
        description="Our Journey Through the Years."
        mediaUrl="https://lh3.googleusercontent.com/p/AF1QipO9-12FAOCU-4wdZshN0L-odtLFpd0IDkAJoOVe=s680-w680-h510"
      />

      <HistoryTimeline />
      
      <div className="container mx-auto px-4 pb-20">
        <LearnMoreSection page="history" />
      </div>
    </div>
  );
}