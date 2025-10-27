import React from 'react';
import { Building2 } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="relative">
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        
        <div className="relative text-center">
          <div className="flex justify-center mb-8">
            <img
              src="https://i.imgur.com/rDYeZ8R.png"
              alt="Facility Programs Mascot"
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <p className="text-xl text-gray-700 mb-12">
            Welcome to Happiness Bag's Facility-Based Programs, the foundation of our mission to empower 
            individuals with disabilities. As the only CARF-accredited provider in the Wabash Valley to deilver recreational and educational programs designed for individuals with disabilities, 
            we deliver personalized services that promote independence, enhance daily living skills, 
            and foster a strong sense of community. Our inclusive programs create opportunities for 
            growth, connection, and joy, ensuring every individual has the tools and support they 
            need to thrive.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-500/10 rounded-xl p-6 text-center">
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">CARF-Accredited</h3>
          <p className="text-gray-600">Excellence in disability support services</p>
        </div>
        
        <div className="bg-blue-500/10 rounded-xl p-6 text-center">
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Personalized Care</h3>
          <p className="text-gray-600">Tailored programs for individual needs</p>
        </div>
        
        <div className="bg-blue-500/10 rounded-xl p-6 text-center">
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Life Skills Focus</h3>
          <p className="text-gray-600">Building independence and confidence</p>
        </div>
      </div>
    </div>
  );
}