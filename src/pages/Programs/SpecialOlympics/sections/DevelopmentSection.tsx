import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: "Unified Fitness Program",
    description: "Bringing athletes and peers together through fitness activities like group workouts, yoga, and mindfulness sessions.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
  },
  {
    title: "Athlete Leadership Programs",
    description: "A platform to develop leadership and advocacy skills, empowering athletes to take on roles as mentors and community ambassadors.",
    image: "https://images.unsplash.com/photo-1553289038-8eb9d2374b91?auto=format&fit=crop&q=80"
  },
  {
    title: "Champs Pilot Program",
    description: "Aimed at promoting social inclusion through activities affecting system-wide change.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
];

export default function DevelopmentSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-green-500" />
          <h2 className="text-3xl font-bold">Future Special Olympics Programs</h2>
        </div>

        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          At Happiness Bag, we're always looking for innovative ways to expand our Special Olympics 
          offerings and provide even more opportunities for our athletes to thrive. Here's a glimpse 
          into exciting programs currently in development:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              
              <div className="relative p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-green-500">{program.title}</h3>
                <p className="text-gray-300 text-sm flex-1">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Be Part of What's Next!</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us bring these exciting programs to life! Support our efforts through donations, 
            volunteering, or spreading the word. Together, we can create even more opportunities 
            for inclusion and growth.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
            Support New Programs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}