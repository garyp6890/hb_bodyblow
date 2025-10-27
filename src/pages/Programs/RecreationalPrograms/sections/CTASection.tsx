import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Join the Fun Today!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to get started? Explore our programs and discover the joy of recreation at Happiness Bag.
          </p>
          <Link
            to="/programs/apply"
            className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2 hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}