import React from 'react';
import { Laugh, HandshakeIcon, DollarSign } from 'lucide-react';

export default function ImpactSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Your Impact</h2>
          <p className="text-xl text-gray-300">
            Every item you donate helps us create a more vibrant, supportive, and engaging environment
            for our friends. Your generosity makes a tangible difference in the lives of those we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Laugh className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Enhanced Programs</h3>
            <p className="text-gray-300 text-center">
              Your donations enrich our daily activities and specialized programs with quality materials
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <HandshakeIcon className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Resource Availability</h3>
            <p className="text-gray-300 text-center">
              Ensure our participants always have the tools and resources they need to thrive
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Operational Efficiency</h3>
            <p className="text-gray-300 text-center">
              Reduce operational costs, allowing more funds to directly support our mission
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/get-involved"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105"
          >
            Explore Other Ways to Give
          </a>
        </div>
      </div>
    </div>
  );
}