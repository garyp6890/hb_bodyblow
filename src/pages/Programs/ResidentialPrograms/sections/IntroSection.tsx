import React from 'react';
import { Home, Heart, Clock } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img
            src="https://i.imgur.com/PtYhNoU.png"
            alt="Residential Programs Mascot"
            className="w-32 h-32 object-contain"
          />
        </div>
        <p className="text-xl text-gray-700 mb-12">
          At Happiness Bag, our Residential Programs are designed to provide individuals with 
          disabilities the tools, support, and encouragement they need to thrive in their own 
          homes and communities. From 24/7 Residential Habilitation services to short-term 
          respite care, we prioritize safety, skill-building, and independence while offering 
          peace of mind to families. These services ensure that every individual receives 
          personalized care and attention in an inclusive and supportive environment.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-500/10 rounded-xl p-6 text-center">
          <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-red-700 mb-2">24/7 Support</h3>
          <p className="text-gray-600">Comprehensive care and supervision when needed</p>
        </div>
        
        <div className="bg-red-500/10 rounded-xl p-6 text-center">
          <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-red-700 mb-2">Personalized Care</h3>
          <p className="text-gray-600">Tailored support for individual needs and goals</p>
        </div>
        
        <div className="bg-red-500/10 rounded-xl p-6 text-center">
          <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-red-700 mb-2">Flexible Options</h3>
          <p className="text-gray-600">From full-time care to respite services</p>
        </div>
      </div>
    </div>
  );
}