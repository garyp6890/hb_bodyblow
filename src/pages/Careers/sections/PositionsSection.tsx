import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

const positions = [
  {
    icon: Users,
    title: "Admin Team",
    description: "Leadership roles focused on program development, coordination, and organizational growth."
  },
  {
    icon: Heart,
    title: "Residential DSP",
    description: "Support our friends in their homes, helping them live independently and achieve their personal goals."
  },
  {
    icon: Sparkles,
    title: "Direct Support",
    description: "Work directly with our friends in day programs, activities, recreational activities, and community engagement."
  }
];

export default function PositionsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
      {positions.map((position) => {
        const Icon = position.icon;
        return (
          <div key={position.title} className="flex flex-col items-center group">
            <div className="bg-yellow-500 p-3 rounded-lg mb-4">
              <Icon className="w-6 h-6 text-gray-900" />
            </div>
            <div className="bg-primary-blue rounded-xl p-6 shadow-lg transform group-hover:scale-105 transition-all text-white w-full">
              <h3 className="text-lg md:text-xl font-bold mb-2">{position.title}</h3>
              <p className="text-blue-100">{position.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}