import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DonateSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-gray-900" />
          </div>
          
          <h2 className="text-4xl font-black tracking-tighter text-white mb-6">
            Support Our Vision
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your contribution helps us create more spaces for happiness. Join us in building 
            a brighter future for our friends and community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partners"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/get-involved"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}