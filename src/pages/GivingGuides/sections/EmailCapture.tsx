import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EmailCapture() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-[#991b1b] to-[#7f1d1d] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want All the Guides in One Place?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get our 'Giving Happiness' booklet with all 17 guides, planning tools, and donor inspiration.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Me the Booklet
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}