import React from 'react';
import { ArrowRight, BookOpen, Shield, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="rounded-2xl overflow-hidden bg-orange-600 text-white">
        <div className="pt-16 pb-20 px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white mb-6">
              Create a Legacy That Transforms Lives
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Empower individuals with disabilities for generations to come through planned giving. Your legacy ensures our mission continues to create happiness and opportunity.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Estate Planning</h3>
                <p className="text-white/80 text-sm">Include Happiness Bag in your will or trust</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Lasting Impact</h3>
                <p className="text-white/80 text-sm">Support our mission far into the future</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-white font-semibold mb-2">Tax Benefits</h3>
                <p className="text-white/80 text-sm">Enjoy potential tax advantages while giving</p>
              </div>
            </div>
            
            <a 
              href="#start-legacy"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
            >
              Start Your Legacy Plan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}