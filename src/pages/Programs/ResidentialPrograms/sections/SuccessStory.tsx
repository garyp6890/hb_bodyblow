import React from 'react';
import { Star } from 'lucide-react';

export default function SuccessStory() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="A Journey to Independence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">A Journey to Independence</h2>
            </div>
            <p className="text-white/90">Meet Sarah's Story</p>
          </div>
        </div>

        <div className="p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sarah, a vibrant young woman with developmental disabilities, dreamed of living 
              independently but faced challenges in managing her daily tasks. With the help of 
              Happiness Bag's Residential Habilitation Program, Sarah was paired with a dedicated 
              support team that worked closely with her to develop essential life skills, such as 
              budgeting, meal preparation, and home safety.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Through personalized guidance, Sarah gained confidence in her abilities and began 
              participating in community activities, making friends and discovering new hobbies. 
              Today, Sarah lives in her own apartment and continues to thrive, thanks to the 
              consistent support and encouragement she receives from Happiness Bag's residential team.
            </p>

            <div className="bg-red-500/10 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-red-700 mb-4">Why It Matters</h3>
              <p className="text-gray-700">
                Sarah's story illustrates how Happiness Bag's residential services provide not just 
                housing support but also the tools and resources needed to live a fulfilling and 
                independent life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}