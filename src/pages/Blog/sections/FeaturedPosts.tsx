import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredPosts } from '../../../data/blogPosts';

export default function FeaturedPosts() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Stories</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
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
                <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}