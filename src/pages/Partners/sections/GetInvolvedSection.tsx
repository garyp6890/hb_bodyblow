import React from 'react';
import { ArrowRight, Building2, HandshakeIcon, Heart } from 'lucide-react';

export default function GetInvolvedSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 md:p-8 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-center mb-3 md:mb-4 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
          Partners in Purpose, Partners in Change
        </h1>
        <p className="text-sm md:text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-4 md:mb-6">
          Join our network of partners who believe in creating lasting impact through meaningful collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-10">
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-white font-semibold mb-2">Corporate Partnership</h3>
            <p className="text-gray-300 text-sm">Make a lasting impact through strategic business collaboration</p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-white font-semibold mb-2">Foundation Support</h3>
            <p className="text-gray-300 text-sm">Transform lives through strategic charitable giving</p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <HandshakeIcon className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-white font-semibold mb-2">Service Partnership</h3>
            <p className="text-gray-300 text-sm">Support our mission through professional services</p>
          </div>
        </div>

        <div className="text-center">
          <button className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold tracking-tight text-black bg-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-yellow-400 hover:scale-105 w-full md:w-auto">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
            <span className="relative flex items-center">
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}