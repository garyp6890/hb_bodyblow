import React from 'react';
import { Heart, Users, GraduationCap, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Meaningful Impact",
    description: "Make a real difference in our friend's lives through our innovative programs and supportive community."
  },
  {
    icon: Users,
    title: "Supportive Team",
    description: "Join a passionate team dedicated to creating positive change and fostering personal growth."
  },
  {
    icon: GraduationCap,
    title: "Growth Opportunities",
    description: "Continuous learning and development through training, mentorship, and advancement opportunities."
  },
  {
    icon: Sparkles,
    title: "Great Benefits",
    description: "Competitive pay, health insurance, paid time off, and a positive work environment."
  }
];

export default function BenefitsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div key={benefit.title} className="flex flex-col items-center group">
            <div className="bg-yellow-500 p-3 rounded-lg mb-4">
              <Icon className="w-6 h-6 text-gray-900" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg transform group-hover:scale-105 transition-all w-full">
              <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}