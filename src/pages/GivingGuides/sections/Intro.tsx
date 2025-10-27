import React from 'react';
import { BookOpen, Heart, DollarSign } from 'lucide-react';

export default function Intro() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Discover Smarter Ways to Give</h2>
        <p className="text-xl text-gray-600 mb-12">
          Explore our comprehensive collection of giving guides covering legacy planning, corporate partnerships, 
          gifts in kind, and more—designed to help you create lasting impact for the causes you care about while 
          maximizing benefits for all involved.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Expert Advice</h3>
          <p className="text-gray-600">
            Practical tips and strategies from charitable giving specialists
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Meaningful Legacy</h3>
          <p className="text-gray-600">
            Create lasting impact for the organizations you care about
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Strategic Benefits</h3>
          <p className="text-gray-600">
            Approaches that maximize impact while offering potential advantages
          </p>
        </div>
      </div>
    </div>
  );
}