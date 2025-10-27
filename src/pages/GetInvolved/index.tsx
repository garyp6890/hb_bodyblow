import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import IntroSection from './sections/IntroSection';
import HappinessTours from './sections/HappinessTours';
import VolunteerSection from './sections/VolunteerSection';
import WaysToGive from './sections/WaysToGive';
import HappinessHuddle from './sections/HappinessHuddle';
import UpcomingEvents from './sections/UpcomingEvents';
import EmailSignup from './sections/EmailSignup';

export default function GetInvolved() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Why Get Involved?"
        description="Be Part of Something Bigger"
        mediaUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <IntroSection />
        <HappinessTours />
        <VolunteerSection />
        <WaysToGive />
        <HappinessHuddle />
        <UpcomingEvents />
        <EmailSignup />
      </div>
    </div>
  );
}