import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ResourcesSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Visit our Resources page for additional information, helpful links, and support services
          available in the Wabash Valley area and beyond.
        </p>
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all"
        >
          Explore Resources
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}