import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import MetricsOverview from './sections/MetricsOverview';
import ProgramBreakdown from './sections/ProgramBreakdown';
import ServiceHours from './sections/ServiceHours';
import FinancialImpact from './sections/FinancialImpact';
import SuccessStories from './sections/SuccessStories';
import CommunityImpact from './sections/CommunityImpact';
import BlogSection from './sections/BlogSection';

export default function Impact() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Our Impact"
        description="Making a Difference in the Wabash Valley"
        mediaUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <MetricsOverview />
        <ProgramBreakdown />
        <ServiceHours />
        <FinancialImpact />
        <SuccessStories />
        <CommunityImpact />
        <BlogSection />
      </div>
    </div>
  );
}