import React from 'react';
import { Heart, Users, Star, Globe } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with transparency, honesty, and dedication to our mission."
  },
  {
    icon: Star,
    title: "Empowerment",
    description: "We provide opportunities and support to help our friends reach their full potential."
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "With a Friends-First approach we foster a welcoming and inclusive environment where everyone feels valued and respected."
  },
  {
    icon: Globe,
    title: "Community",
    description: "We believe in the power of connection and work to build strong relationships between our friends, families, and the broader community."
  }
];

export default function ValuesSection() {
  return (
    <div className="relative py-8 md:py-12">
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8 text-gray-900">Our Values</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="relative pt-16 mb-12 sm:mb-0 group"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-yellow-500" strokeWidth={2} />
                  </div>
                </div>
                <div className="bg-primary-red rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-500">{value.title}</h3>
                  </div>
                  <p className="text-white text-center">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}