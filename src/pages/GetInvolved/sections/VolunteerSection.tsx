import React from 'react';
import { Heart, Trophy, Camera, Clock, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    icon: Trophy,
    title: "Sports & Recreation",
    description: "Coach, assist, or cheer at recreational events and Special Olympics practices"
  },
  {
    icon: Heart,
    title: "Program Support",
    description: "Help with daily activities, special events, and community outings"
  },
  {
    icon: Camera,
    title: "Creative Support",
    description: "Capture moments and create content for social media and marketing"
  },
  {
    icon: Clock,
    title: "Flexible Commitment",
    description: "Choose from one-time events or ongoing volunteer opportunities"
  }
];

export default function VolunteerSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Volunteer Opportunities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Happiness Bag, there's a place for everyone to make a difference. Whether you're 
          sharing your skills, lending a hand, or spreading the word about our mission, your 
          contribution creates lasting impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {opportunities.map((opportunity, index) => {
          const Icon = opportunity.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">{opportunity.title}</h3>
              <p className="text-gray-600 text-center">{opportunity.description}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
          Become a Volunteer
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}