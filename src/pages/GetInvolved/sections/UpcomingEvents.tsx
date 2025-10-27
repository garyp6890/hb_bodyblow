import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
  {
    date: "March 15, 2024",
    title: "Spring Special Olympics Training",
    time: "3:00 PM",
    location: "Main Facility",
    category: "Sports"
  },
  {
    date: "March 20, 2024",
    title: "Spring Dance",
    time: "6:00 PM",
    location: "Community Center",
    category: "Social"
  },
  {
    date: "April 1, 2024",
    title: "Volunteer Orientation",
    time: "5:30 PM",
    location: "Training Room",
    category: "Training"
  }
];

export default function UpcomingEvents() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gray-900 p-6">
          <h2 className="text-2xl font-bold text-white text-center">Upcoming Events</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {events.map((event, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-48">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{event.title}</h3>
                  <span className="inline-block bg-yellow-500/10 text-yellow-600 text-sm px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                <div className="space-y-2 md:w-48">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold"
          >
            View Full Calendar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}