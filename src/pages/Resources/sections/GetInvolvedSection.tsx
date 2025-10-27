import React from 'react';
import { ArrowRight, Share2, BookOpen, Users } from 'lucide-react';

export default function GetInvolvedSection() {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <h2 className="text-5xl font-black tracking-tighter text-center mb-6 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
            Your Help, Their Access
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
            When you support Happiness Bag, you're not just providing resources—you're empowering 
            individuals with disabilities to access the tools, information, and opportunities they need to thrive.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Share Resources</h3>
              <p className="text-gray-300 text-sm">Help spread awareness about available support and services</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Contribute Knowledge</h3>
              <p className="text-gray-300 text-sm">Share your expertise or suggest new resources</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-white font-semibold mb-2">Join Our Network</h3>
              <p className="text-gray-300 text-sm">Become part of our resource provider network</p>
            </div>
          </div>

          <div className="text-center">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-tight text-black bg-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}