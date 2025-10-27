import React from 'react';
import { ArrowRight, Share2, Heart, Users } from 'lucide-react';

export default function GetInvolvedSection() {
  return (
    <div className="relative mt-8">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-4 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
            Join Our Mission, Share Our Vision
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-2xl mx-auto mb-6">
            Be part of a community that believes in the power of potential and the strength of inclusion.
            Together, we can create a world where every individual shines.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Support Our Mission</h3>
              <p className="text-gray-300 text-xs">Help us continue providing exceptional services</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Volunteer With Us</h3>
              <p className="text-gray-300 text-xs">Share your time and talents</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Spread the Word</h3>
              <p className="text-gray-300 text-xs">Help us reach more friends</p>
            </div>
          </div>

          <div className="text-center">
            <button className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold tracking-tight text-black bg-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center">
                Get Involved Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}