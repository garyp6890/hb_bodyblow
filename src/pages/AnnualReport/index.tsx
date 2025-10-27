import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import ReportOverview from './sections/ReportOverview';
import ReportHighlights from './sections/ReportHighlights';
import DownloadSection from './sections/DownloadSection';
import ComplianceSection from './sections/ComplianceSection';

export default function AnnualReport() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Annual Reports"
        description="Transparency and Accountability in Action"
        mediaUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <ReportOverview />
        <ReportHighlights />
        <DownloadSection />
        <ComplianceSection />
      </div>
    </div>
  );
}