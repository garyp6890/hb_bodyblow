import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-[#991b1b] to-[#7f1d1d] rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
        <h2 className="text-4xl font-black tracking-tighter text-white mb-6">
          Read Our Blog
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover stories of impact, program initiatives, community engagement, and the 
          amazing individuals who make our mission possible. Visit our blog for in-depth 
          coverage of our work and impact in the Wabash Valley.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#991b1b] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
        >
          Visit Our Blog
          <ArrowRight className="w-5 h-5" />
        </Link>
        </div>
      </div>
    </div>
  );
}