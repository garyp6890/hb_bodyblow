import React from 'react';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import FeaturedPosts from './sections/FeaturedPosts';
import LatestPosts from './sections/LatestPosts';
import Categories from './sections/Categories';
import Newsletter from './sections/Newsletter';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Our Blog"
        description="Stories of Impact, Growth, and Community"
        mediaUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <FeaturedPosts />
        <Categories />
        <LatestPosts />
        <Newsletter />
      </div>
    </div>
  );
}