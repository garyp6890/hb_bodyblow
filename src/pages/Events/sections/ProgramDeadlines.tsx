import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const deadlines = [
  {
    program: "Summer Day Camp",
    deadline: "April 15, 2024",
    description: "Registration deadline for our 8-week summer program",
    link: "/programs/apply"
  },
  {
    program: "Special Olympics Track & Field",
    deadline: "March 30, 2024",
    description: "Medical form submission and registration deadline",
    link: "/programs/special-olympics"
  },
  {
    program: "Bowling League",
    deadline: "March 25, 2024",
    description: "Spring season registration closes",
    link: "/programs/recreational"
  }
];

export default function ProgramDeadlines() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white">Important Deadlines</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {deadlines.map((deadline, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-500 font-medium">{deadline.deadline}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{deadline.program}</h3>
              <p className="text-gray-300 text-sm mb-4">{deadline.description}</p>
              <a
                href={deadline.link}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}