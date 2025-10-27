import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Residential Programs",
    description: "Residential Programs provide support, respite to 24/7 care, promote independence, ensuring health, safety, and community engagement.",
    mascot: "https://i.imgur.com/PtYhNoU.png",
    color: "from-red-600 to-red-700 opacity-95",
    href: "/programs/residential"
  },
  {
    title: "Facility-Based Programs",
    description: "Structured day programs and summer activities focused on skill-building, social interaction, and personal growth.",
    mascot: "https://i.imgur.com/rDYeZ8R.png",
    color: "from-blue-600 to-blue-700 opacity-95",
    href: "/programs/facility-based"
  },
  {
    title: "Recreational Programs",
    description: "Provide inclusive, engaging activities that promote fitness, socialization, and fun for individuals with disabilities.",
    mascot: "https://i.imgur.com/W2qevzJ.png",
    color: "from-orange-500 to-orange-600 opacity-95",
    href: "/programs/recreational"
  },
  {
    title: "Special Olympics Programs",
    description: "Year-round sports training and competition opportunities that build confidence and athletic skills.",
    mascot: "https://i.imgur.com/kFODM5H.png",
    color: "from-green-600 to-green-700 opacity-95",
    href: "/programs/special-olympics"
  }
];

export default function ProgramCategories() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <div key={program.title} id={program.title.toLowerCase().replace(' programs', '')} className="relative">
            <div className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} rounded-2xl transform transition-transform group-hover:scale-[1.02]`} />
              <div className="relative p-6 flex flex-col h-full">
                <div>
                  <div className="flex justify-center mb-6">
                    <img
                      src={program.mascot}
                      alt="Program Mascot"
                      className={`w-20 h-20 object-contain ${program.title === "Special Olympics Programs" ? "scale-[1.75]" : ""}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{program.title}</h3>
                  <p className="text-white text-center mb-6 text-base font-medium">{program.description}</p>
                </div>
                <div className="mt-auto flex justify-center">
                  <Link 
                    to={program.href}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 group-hover:scale-105 whitespace-nowrap text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <blockquote className="text-center mt-16">
        <p className="text-2xl text-gray-700 italic mb-4 max-w-4xl mx-auto">
          "I wouldn't have been able to work and provide for our family. Happiness Bag is more than just 
          a day service or a summer service it's like a family. They provide support to the family, I mean 
          the heart of Happiness Bag is our friends."
        </p>
        <footer className="text-lg text-gray-600">
          — Thankful Happiness Bag Parent
        </footer>
      </blockquote>
    </div>
  );
}