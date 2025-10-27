import React from 'react';
import { Share2, MessageCircle, Globe, ArrowRight } from 'lucide-react';

export default function HappinessHuddle() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Join the Happiness Huddle</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Not everyone can volunteer in person or give financially—but everyone can be an advocate. 
            By joining our Happiness Advocates Group, you'll help spread awareness and bring fresh 
            ideas to support our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Share Stories</h3>
            <p className="text-gray-300 text-center">
              Help spread the word about our impact and mission
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Engage Online</h3>
            <p className="text-gray-300 text-center">
              Join discussions and share ideas in our online community
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Build Awareness</h3>
            <p className="text-gray-300 text-center">
              Help create a more inclusive and understanding community
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
            Join the Happiness Huddle
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}