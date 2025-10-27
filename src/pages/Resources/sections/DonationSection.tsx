import React from 'react';
import { Heart } from 'lucide-react';

export default function DonationSection() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-gray-900 rounded-xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-yellow-500" />
          </div>
          
          <p className="text-lg text-center mb-8">
            The team at Happiness Bag works tirelessly to maintain this comprehensive list of 
            disability resources, ensuring you have access to the latest and most accurate information.
          </p>

          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105">
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}