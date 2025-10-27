import React, { useState } from 'react';
import { Calendar, BookOpen, ArrowRight, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  givingGuidesPosts, 
  corporateGivingPosts, 
  giftsInKindPosts,
  getPostsByCategory
} from '../../../data/blogPosts';

type GivingCategory = 'all' | 'legacy' | 'corporate' | 'gifts-in-kind';

export default function GuidesGrid() {
  const [activeCategory, setActiveCategory] = useState<GivingCategory>('all');

  const getCategoryPosts = () => {
    switch (activeCategory) {
      case 'legacy':
        return givingGuidesPosts;
      case 'corporate':
        return corporateGivingPosts;
      case 'gifts-in-kind':
        return giftsInKindPosts;
      case 'all':
      default:
        return [...givingGuidesPosts, ...corporateGivingPosts, ...giftsInKindPosts];
    }
  };

  const getCategoryDescription = () => {
    switch (activeCategory) {
      case 'legacy':
        return "Create a lasting impact through planned giving. These guides help you explore ways to support our mission while securing your legacy and caring for loved ones.";
      case 'corporate':
        return "Discover how your company can make a meaningful difference. From matching gifts to volunteer programs, explore strategic ways to partner with us for community impact.";
      case 'gifts-in-kind':
        return "Support our mission with non-cash donations. Learn how your goods, services, and expertise directly benefit our programs and the friends we serve.";
      case 'all':
      default:
        return "Explore our comprehensive library of giving guides covering legacy planning, corporate partnerships, and in-kind donations to find the perfect way to support our mission.";
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          onClick={() => setActiveCategory('all')} 
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            activeCategory === 'all' 
              ? 'bg-indigo-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          All Guides
        </button>
        <button 
          onClick={() => setActiveCategory('legacy')} 
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            activeCategory === 'legacy' 
              ? 'bg-orange-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          Legacy Giving
        </button>
        <button 
          onClick={() => setActiveCategory('corporate')} 
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            activeCategory === 'corporate' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          Corporate Giving
        </button>
        <button 
          onClick={() => setActiveCategory('gifts-in-kind')} 
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            activeCategory === 'gifts-in-kind' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          Gifts in Kind
        </button>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">
          {activeCategory === 'all' ? 'Our Giving Guides' : 
           activeCategory === 'legacy' ? 'Legacy Giving Guides' : 
           activeCategory === 'corporate' ? 'Corporate Giving Guides' : 
           'Gifts in Kind Guides'}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {getCategoryDescription()}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {getCategoryPosts().map((post) => (
          <Link 
            key={post.id}
            to={`/blog/${post.slug}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  post.category === 'Legacy Giving' ? 'bg-orange-500 text-white' :
                  post.category === 'Corporate Giving' ? 'bg-blue-500 text-white' :
                  post.category === 'Gifts in Kind' ? 'bg-green-500 text-white' :
                  'bg-indigo-500 text-white'
                }`}>
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-indigo-500 font-medium">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/blog/category/giving-guides"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
        >
          <LayoutGrid className="w-5 h-5" />
          View All Guides in Blog
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}