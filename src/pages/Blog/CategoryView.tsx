import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import { getPostsByCategory } from '../../data/blogPosts';
import BlogPostGrid from './components/BlogPostGrid';
import Newsletter from './sections/Newsletter';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CategoryView() {
  const { category } = useParams<{ category: string }>();
  
  // Convert URL-friendly format back to category name
  const categoryName = category
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '';
  
  const posts = getPostsByCategory(categoryName as any);
  
  if (posts.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <PageHeader
          title="Category Not Found"
          description="Please check the URL and try again"
          mediaUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
        />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-xl mb-8">We couldn't find any posts in this category.</p>
          <Link to="/blog" className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
            <ArrowLeft className="mr-2" /> Back to all posts
          </Link>
        </div>
      </div>
    );
  }
  
  const isCategoryLegacyGiving = categoryName === 'Legacy Giving';
  const isCategoryCorporateGiving = categoryName === 'Corporate Giving';
  const isCategoryGiftsInKind = categoryName === 'Gifts In Kind';
  
  let mediaUrl = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80";
  let subheading = "Blog Posts";
  
  if (isCategoryLegacyGiving) {
    mediaUrl = "https://images.unsplash.com/photo-1589535277368-bacf11ae303c?auto=format&fit=crop&q=80";
    subheading = "Legacy Planning & Charitable Impact Resources";
  } else if (isCategoryCorporateGiving) {
    mediaUrl = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80";
    subheading = "Corporate Partnership & Business Giving Resources";
  } else if (isCategoryGiftsInKind) {
    mediaUrl = "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80";
    subheading = "Non-Cash Donation Information & Guides";
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title={categoryName}
        description={subheading}
        mediaUrl={mediaUrl}
      />
      
      <div className="container mx-auto px-4 py-20">
        {isCategoryLegacyGiving && (
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our curated guides on legacy planning, charitable tools, and estate 
              strategies—designed to help you create lasting impact for the causes you care about.
            </p>
          </div>
        )}

        {isCategoryCorporateGiving && (
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover strategic ways for your business to partner with Happiness Bag. Our corporate giving guides 
              provide actionable insights for meaningful partnerships that benefit both your business and our community.
            </p>
          </div>
        )}

        {isCategoryGiftsInKind && (
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how non-cash donations directly support our programs and make an immediate difference in the 
              lives of our friends. From art supplies to professional services, in-kind gifts are vital to our success.
            </p>
          </div>
        )}
        
        <BlogPostGrid posts={posts} />
        <Newsletter />
      </div>
    </div>
  );
}