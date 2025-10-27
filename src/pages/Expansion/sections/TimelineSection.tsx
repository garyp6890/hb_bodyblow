import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const timelineEvents = [
  {
    date: "October 20, 2023",
    title: "Breaking Ground",
    description: "Heavy equipment moves in to prepare the land for construction"
  },
  {
    date: "October 28, 2023",
    title: "Infrastructure Connection",
    description: "Connecting essential utilities to city infrastructure"
  },
  {
    date: "November 28, 2023",
    title: "Foundation Complete",
    description: "Solid foundations laid for our future growth"
  },
  {
    date: "December 15, 2023",
    title: "Walls Rising",
    description: "Our dreams taking physical shape as walls go up"
  },
  {
    date: "January 5, 2024",
    title: "Roof Installation",
    description: "Weather-tight milestone achieved with roof completion"
  },
  {
    date: "March 15, 2024",
    title: "Landscaping Begins",
    description: "Creating welcoming outdoor spaces for all"
  }
];

export default function TimelineSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">Construction Timeline</h2>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-yellow-500/20" />

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white" />
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://ecrodgers.com/2023/03/3274/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold"
          >
            Read Full Project Details
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}