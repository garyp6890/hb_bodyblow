import React from 'react';
import { Building2, Users, Heart, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const progress = 2449500;
const goal = 3450000;
const progressPercentage = (progress / goal) * 100;

const features = [
  {
    icon: Building2,
    title: "New Facilities",
    description: "Eight new offices, conference room, and expanded program spaces"
  },
  {
    icon: Users,
    title: "Increased Capacity",
    description: "Ability to serve more friends in our community"
  },
  {
    icon: Heart,
    title: "Enhanced Programs",
    description: "Life skills classrooms and teaching kitchen"
  },
  {
    icon: Star,
    title: "Better Experience",
    description: "Sensory room and large recreation room"
  }
];

export default function ProgressSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Building Our Future</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our 12,000 square foot expansion project will transform our ability to serve the 
          Wabash Valley community, providing essential spaces for programs, activities, and support services.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Progress Tracker */}
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Fundraising Progress</h3>
          <div className="mb-8">
            <div className="flex justify-between text-sm text-white mb-2">
              <span>Progress: ${(progress / 1000000).toFixed(2)}M</span>
              <span>Goal: ${(goal / 1000000).toFixed(2)}M</span>
            </div>
            <div className="h-4 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <p className="text-lg text-white">
            We are within $1 million of our $3.45 million goal! Your support will help us create 
            more spaces for happiness.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 mt-6"
          >
            Support Our Expansion
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}