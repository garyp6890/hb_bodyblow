import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { regularPosts } from '../../../data/blogPosts';

export default function LatestPosts() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Posts</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {regularPosts.map((post) => (
          <Link 
            key={post.id}
            to={`/blog/${post.slug}`} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-3/5 p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="inline-block bg-yellow-500 text-black text-xs px-2 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}