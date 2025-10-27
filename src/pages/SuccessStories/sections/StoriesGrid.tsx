import React from 'react';
import { Calendar } from 'lucide-react';

const stories = [
  {
    name: "Robert's Achievement",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    program: "Special Olympics",
    quote: "Winning my first medal showed me what I'm capable of achieving."
  },
  {
    name: "Lisa's Growth",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    program: "Day Programs",
    quote: "I've learned so many new skills and made wonderful friends."
  },
  {
    name: "Tom's Independence",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    program: "Residential",
    quote: "Living independently has changed my life completely."
  },
  {
    name: "Maria's Journey",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    program: "Recreational",
    quote: "The recreational programs have helped me stay active and social."
  },
  {
    name: "James's Victory",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    program: "Special Olympics",
    quote: "Competing has taught me the value of dedication and practice."
  },
  {
    name: "Anna's Success",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    program: "Day Programs",
    quote: "The support I've received has helped me achieve my goals."
  }
];

export default function StoriesGrid() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">More Success Stories</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{story.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{story.name}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-yellow-500 font-semibold text-sm mb-3">
                {story.program}
              </div>
              <blockquote className="text-gray-600 italic">
                "{story.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}