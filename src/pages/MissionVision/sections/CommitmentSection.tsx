import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CommitmentSection() {
  return (
    <div className="mt-12 md:mt-24 relative px-4">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-center mb-6 md:mb-8 text-white">Our Commitment</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
            Since 1971, we have been committed to providing exceptional services and support 
            to individuals with disabilities in our community. Our dedication to this mission 
            drives everything we do, from our daily programs to our expansion efforts.
          </p>
          <button className="group bg-yellow-500 hover:bg-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all inline-flex items-center gap-2">
            Learn About Our Programs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}