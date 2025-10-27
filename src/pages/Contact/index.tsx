import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import ContactForm from './sections/ContactForm';
import ContactInfo from './sections/ContactInfo';
import MapSection from './sections/MapSection';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Contact Us"
        description="We're Here to Help"
        mediaUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <ContactInfo />
        <ContactForm />
        <MapSection />
      </div>
    </div>
  );
}