import React from 'react';
import { Calendar } from 'lucide-react';

export default function FeaturedStory() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Sarah's Journey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 text-white/90 mb-2">
                <Calendar className="w-4 h-4" />
                <span>March 2024</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Sarah's Journey to Independence</h2>
            </div>
          </div>
          
          <div className="p-8">
            <div className="text-yellow-500 font-semibold mb-4">Featured Story</div>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "Through Happiness Bag's support, I've gained independence and confidence I never thought possible."
            </blockquote>
            <p className="text-gray-600 mb-6">
              Sarah's journey with Happiness Bag began five years ago when she joined our Residential 
              Program. Through dedicated support and skill development, she has achieved remarkable 
              independence, now living in her own apartment and working part-time at a local business.
            </p>
            <p className="text-gray-600 mb-6">
              Her success story exemplifies our mission of empowering individuals with disabilities 
              to live fulfilling, independent lives. Sarah's determination, combined with the 
              comprehensive support of our programs, has led to transformative outcomes that inspire 
              others in our community.
            </p>
            <div className="text-sm text-gray-500">
              Program: Residential Habilitation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}