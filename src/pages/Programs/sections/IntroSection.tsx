import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Programs tailored to individual needs and goals"
  },
  {
    icon: Star,
    title: "Proven Excellence",
    description: "CARF-accredited services in the Wabash Valley"
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Supporting 250+ friends and their families"
  }
];

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8">
          Empowering Lives Through<br />
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Tailored Care
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 mb-12">
            At Happiness Bag, we're proud to be the Wabash Valley's premier provider of 
            comprehensive programs for individuals with intellectual and physical disabilities. 
            Our unique programs foster growth, independence, and joy in a supportive, 
            inclusive environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Although there may be some overlap, our comprehensive Programs are organized into four distinct program categories, 
          each designed to support different aspects of our friends' development and well-being.
        </p>
      </div>
    </div>
  );
}