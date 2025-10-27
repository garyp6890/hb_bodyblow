import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    date: "April 2024",
    time: "Various Times",
    title: "Track & Field Practice Begins",
    location: "Happiness Bag Facility"
  },
  {
    date: "May 2024",
    time: "9:00 AM",
    title: "Area 7 Spring Games",
    location: "Rose-Hulman Institute of Technology"
  },
  {
    date: "June 2024",
    time: "All Day",
    title: "State Summer Games",
    location: "Indiana State University"
  },
  {
    date: "July 2024",
    time: "6:00 PM",
    title: "Corn Toss Season Begins",
    location: "Happiness Bag Outdoor Area"
  }
];

export default function CalendarSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
            View Full Calendar
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition-all hover:scale-[1.02]"
            >
              <div className="md:w-32 font-semibold text-green-500">
                {event.date}
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 md:w-32">
                <Clock className="w-4 h-4" />
                {event.time}
              </div>
              
              <div className="flex-1 font-medium text-gray-900">
                {event.title}
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 md:w-48">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}