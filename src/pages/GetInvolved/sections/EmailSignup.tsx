import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EmailSignup() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Connected to Happiness!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get updates on events, volunteer opportunities, and stories of impact delivered right to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-yellow-500 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-sm text-white/70 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
}