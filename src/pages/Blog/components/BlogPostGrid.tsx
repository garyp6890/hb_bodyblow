import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../../data/blogPosts';

interface BlogPostGridProps {
  posts: BlogPost[];
}

export default function BlogPostGrid({ posts }: BlogPostGridProps) {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
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
                <span className={`
                  text-xs px-2 py-1 rounded-full
                  ${post.category === 'Giving Guides' ? 'bg-indigo-500 text-white' : 'bg-yellow-500 text-black'}
                `}>
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-indigo-500 font-medium">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}