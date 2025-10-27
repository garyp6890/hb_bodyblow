import React from 'react';
import { Quote } from 'lucide-react';

export default function SuccessStorySection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1560523159-4a9692d222f9?auto=format&fit=crop&q=80" 
              alt="Art therapy activity" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900"></div>
          </div>
          
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative mb-6">
              <Quote className="w-12 h-12 text-green-500 mb-2" />
              <h2 className="text-2xl font-bold text-white mb-4">How Art Supplies Made a Difference</h2>
              <p className="text-white/90 text-lg italic leading-relaxed">
                "When someone donated those art supplies, they didn't just give us markers and paper - 
                they gave Michael a voice. For a young man who struggles with verbal communication, 
                art has become his way of sharing his thoughts and feelings with the world."
              </p>
              
              <footer className="mt-4 text-green-400 font-semibold">
                — Jordan, Day Program Coordinator
              </footer>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-white/90">
                Michael discovered his love for drawing through our art therapy program, which is 
                made possible by generous donations of art supplies. What started as simple 
                coloring activities has blossomed into a profound means of self-expression and 
                confidence building. Your gifts in kind directly enable these transformative experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}