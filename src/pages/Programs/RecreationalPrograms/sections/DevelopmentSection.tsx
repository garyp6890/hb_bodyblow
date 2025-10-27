import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function DevelopmentSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold">In Development: New Opportunities Coming Soon</h2>
        </div>

        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          At Happiness Bag, we're always looking for innovative ways to expand our recreational 
          offerings and provide even more opportunities for our friends to thrive. Here's a 
          glimpse into exciting programs currently in development:
        </p>

        <div className="bg-white/10 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Recreational Sports for Ages 3–7
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-orange-500 mb-2">Overview</h4>
              <p className="text-gray-300">
                Designed for our youngest friends, these programs will introduce foundational 
                motor skills, teamwork, and the joy of play in an inclusive environment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-500 mb-2">Why It Matters</h4>
              <p className="text-gray-300">
                Lays the groundwork for lifelong confidence and love of recreational activities.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Be Part of What's Next!</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us bring these exciting programs to life! Support our efforts through donations, 
            volunteering, or spreading the word. Together, we can create even more opportunities 
            for inclusion and growth.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
            Support New Programs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}