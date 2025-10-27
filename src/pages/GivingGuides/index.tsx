import React, { useState } from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import EmailCapture from './sections/EmailCapture';
import GuidesGrid from './sections/GuidesGrid';
import Intro from './sections/Intro';
import CategoriesSection from './sections/CategoriesSection';

export default function GivingGuides() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Giving Guides"
        description="Legacy Planning & Charitable Impact Resources"
        mediaUrl="https://images.unsplash.com/photo-1589535277368-bacf11ae303c?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <Intro />
        <CategoriesSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <EmailCapture />
        <GuidesGrid category={activeCategory} />
      </div>
    </div>
  );
}