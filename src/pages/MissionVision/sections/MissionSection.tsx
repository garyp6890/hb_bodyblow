import React from 'react';

export default function MissionSection() {
  return (
    <div className="relative max-w-4xl mx-auto mb-8 md:mb-16 px-4">
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
      <div className="relative bg-gray-900 rounded-2xl p-6 md:p-12 shadow-xl">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8 text-white">Our Mission</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
          Happiness Bag, Inc. is dedicated to providing services and programs that
encourage the unique potential of adults and children with disabilities.
        </p>
      </div>
    </div>
  );
}