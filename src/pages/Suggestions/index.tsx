import React, { useState } from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import SuggestionsForm from './sections/SuggestionsForm';

export default function Suggestions() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Suggestions & Accessibility"
        description="Help Us Serve You Better"
        mediaUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <SuggestionsForm />
      </div>
    </div>
  );
}