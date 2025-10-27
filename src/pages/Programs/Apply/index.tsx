import React from 'react';
import Header from '../../../components/Header';
import PageHeader from '../../../components/PageHeader';
import AdmissionProcess from './sections/AdmissionProcess';
import ApplicationForm from './sections/ApplicationForm';

export default function Apply() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Apply for Programs"
        description="Begin Your Journey with Happiness Bag"
        mediaUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <AdmissionProcess />
        <ApplicationForm />
      </div>
    </div>
  );
}