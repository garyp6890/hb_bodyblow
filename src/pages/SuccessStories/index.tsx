import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import StoriesGrid from './sections/StoriesGrid';
import FeaturedStory from './sections/FeaturedStory';
import ProgramStories from './sections/ProgramStories';
import ShareStory from './sections/ShareStory';

export default function SuccessStories() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Success Stories"
        description="Celebrating Achievements and Transformations"
        mediaUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <FeaturedStory />
        <ProgramStories />
        <StoriesGrid />
        <ShareStory />
      </div>
    </div>
  );
}