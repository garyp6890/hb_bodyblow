import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
          Invest in a Mission That Changes Lives
        </h2>
        <p className="text-xl text-gray-600">
          Since 1971, Happiness Bag has been built on advocacy, volunteerism, and the generosity 
          of people like you. Every moment of your time, every resource you share, and every gift 
          you give creates lasting opportunities for individuals with intellectual and developmental 
          disabilities in the Wabash Valley.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Founded on Love</h3>
          <p className="text-gray-600 text-center">
            Built by passionate advocates who believed in creating opportunities for all
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Community Driven</h3>
          <p className="text-gray-600 text-center">
            Powered by volunteers and supporters who make our mission possible
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Life-Changing Impact</h3>
          <p className="text-gray-600 text-center">
            Creating opportunities that transform lives and build inclusive communities
          </p>
        </div>
      </div>
    </div>
  );
}