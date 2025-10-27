import React from 'react';
import { Building2, Home, Trophy, Users } from 'lucide-react';

const programStories = [
  {
    program: 'Facility-Based',
    icon: Building2,
    story: {
      name: "Michael",
      achievement: "Mastered new life skills",
      quote: "The day program helped me learn to cook and manage my daily routine."
    }
  },
  {
    program: 'Residential',
    icon: Home,
    story: {
      name: "Emily",
      achievement: "Living independently",
      quote: "I now have my own apartment and feel confident in my abilities."
    }
  },
  {
    program: 'Recreational',
    icon: Trophy,
    story: {
      name: "David",
      achievement: "Sports achievement",
      quote: "Through sports, I've made friends and learned teamwork."
    }
  },
  {
    program: 'Special Olympics',
    icon: Users,
    story: {
      name: "Jessica",
      achievement: "State champion",
      quote: "Winning gold showed me I can achieve anything."
    }
  }
];

export default function ProgramStories() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Program Success Stories</h2>
      
      <div className="grid md:grid-cols-4 gap-6">
        {programStories.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.program} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold">{item.program}</h3>
              </div>
              
              <blockquote className="text-gray-600 italic mb-4">
                "{item.story.quote}"
              </blockquote>
              
              <div className="text-sm">
                <div className="font-semibold">{item.story.name}</div>
                <div className="text-gray-500">{item.story.achievement}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}