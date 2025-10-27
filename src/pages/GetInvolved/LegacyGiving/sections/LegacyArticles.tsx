import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { givingGuidesPosts } from '../../../../data/blogPosts';

export default function LegacyArticles() {
  const featuredGuides = givingGuidesPosts.slice(0, 6);
  
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-6">Legacy Giving Guides</h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Our comprehensive library of legacy planning resources helps you create a lasting impact
        for the causes you care about while taking care of your loved ones.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {featuredGuides.map((guide) => (
          <Link
            key={guide.id}
            to={`/blog/${guide.slug}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {guide.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.excerpt}</p>
              <div className="flex items-center text-orange-600 font-medium">
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center">
        <Link
          to="/blog/category/giving-guides"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          Explore All Legacy Guides
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}