import React from 'react';
import { Trophy, Medal, Users } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center">
        <div className="relative">
          <img
            src="https://i.imgur.com/kFODM5H.png"
            alt="Special Olympics Mascot"
            className="w-32 h-32 mx-auto mb-8"
          />
        </div>
        <p className="text-xl text-gray-700 mb-12">
          Happiness Bag proudly partners with Special Olympics Indiana to offer individuals with 
          intellectual and developmental disabilities the chance to train, compete, and excel in 
          various sports year-round. These programs promote confidence, teamwork, and inclusion, 
          creating opportunities for athletes to push their boundaries and achieve greatness.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-500/10 rounded-xl p-6 text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Excellence</h3>
          <p className="text-gray-600">Pushing boundaries and achieving personal bests</p>
        </div>
        
        <div className="bg-green-500/10 rounded-xl p-6 text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Medal className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Competition</h3>
          <p className="text-gray-600">From local events to state championships</p>
        </div>
        
        <div className="bg-green-500/10 rounded-xl p-6 text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Community</h3>
          <p className="text-gray-600">Building lasting friendships and support networks</p>
        </div>
      </div>
    </div>
  );
}