import React from 'react';
import { Heart, Users, Building2, Trophy, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../data/blogPosts';

const categoryIcons = {
  'Success Stories': Heart,
  'Program Updates': Users,
  'Community Impact': Building2,
  'Special Olympics': Trophy,
  'Volunteer Stories': Sparkles,
  'Giving Guides': BookOpen
};

const categoryColors = {
  'Success Stories': 'bg-pink-500',
  'Program Updates': 'bg-blue-500',
  'Community Impact': 'bg-green-500',
  'Special Olympics': 'bg-purple-500',
  'Volunteer Stories': 'bg-yellow-500',
  'Giving Guides': 'bg-indigo-500'
};

export default function Categories() {
  const categories = getCategories();
  
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          // @ts-ignore - we know these exist
          const Icon = categoryIcons[category.name] || BookOpen;
          // @ts-ignore - we know these exist
          const color = categoryColors[category.name] || 'bg-gray-500';
          
          return (
            <Link
              key={category.name}
              to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center"
            >
              <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-1">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count} posts</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}