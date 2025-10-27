import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-[#991b1b] to-[#7f1d1d] rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h2 className="text-4xl font-black tracking-tighter text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest stories, updates, and ways to get involved.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-[#991b1b] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}