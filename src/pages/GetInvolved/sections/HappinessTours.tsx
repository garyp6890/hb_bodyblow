import React from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

export default function HappinessTours() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-4xl font-bold text-center mb-8">Find Happiness Today!</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 mb-8">
                Join us for a free Happiness Tour and experience firsthand the incredible work happening 
                at Happiness Bag. Guided by those who know it best—our friends, their families, and our 
                dedicated team—you'll explore our mission, programs, and community impact in a meaningful way.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                  <span>Tours available weekly</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>3833 Union Road, Terre Haute</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-500" />
                  <span>Small groups for personal experience</span>
                </div>
              </div>

              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
                Schedule Your Tour
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Happiness Tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <blockquote className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg italic mb-2">
                  "Visiting Happiness Bag changed my perspective on what's possible."
                </p>
                <footer className="text-sm">— Recent Tour Participant</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}