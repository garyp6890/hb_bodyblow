import React from 'react';

export default function VisionSection() {
  return (
    <div className="relative mt-12 md:mt-24">
      <div className="absolute inset-0 bg-yellow-500 rounded-3xl" />
      <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center container mx-auto px-4 py-8 md:py-16">
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl" />
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-12 shadow-xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8 text-white">Our Vision</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left">
              Our vision for Happiness Bag, Inc. is to be the premier provider of services and
programs that enhance participation of adults and children with disabilities in the Wabash Valley.
            </p>
          </div>
        </div>
      
        <div className="relative">
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-xl">
            <blockquote className="relative text-2xl md:text-3xl font-bold italic text-gray-800 text-center">
              Seeing their reaction, their engagement with each other and the community—that's our why.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}