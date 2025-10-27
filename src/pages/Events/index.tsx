import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import CalendarSection from './sections/CalendarSection';
import UpcomingEvents from './sections/UpcomingEvents';
import ProgramDeadlines from './sections/ProgramDeadlines';
import GetInvolvedSection from './sections/GetInvolvedSection';

export default function Events() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Events Calendar"
        description="Stay Connected with Our Community"
        mediaUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <CalendarSection />
        <UpcomingEvents />
        <ProgramDeadlines />
        <GetInvolvedSection />
      </div>
    </div>
  );
}