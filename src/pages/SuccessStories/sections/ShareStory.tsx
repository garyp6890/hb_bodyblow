import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ShareStory() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Share Your Story
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Has Happiness Bag made a difference in your life or the life of someone you love? 
          We'd love to hear your story and share it with our community.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2 hover:scale-105">
          Submit Your Story
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}