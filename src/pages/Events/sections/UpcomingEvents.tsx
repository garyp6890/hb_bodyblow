import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    date: "March 15, 2024",
    title: "Spring Special Olympics Training",
    time: "3:00 PM - 5:00 PM",
    location: "Main Facility",
    category: "Sports",
    description: "First day of track and field training for the 2024 Special Olympics season."
  },
  {
    date: "March 20, 2024",
    title: "Spring Dance",
    time: "6:00 PM - 9:00 PM",
    location: "Community Center",
    category: "Social",
    description: "Annual spring celebration with music, refreshments, and fun activities."
  },
  {
    date: "March 25, 2024",
    title: "Bowling League Registration",
    time: "Final Day",
    location: "Online",
    category: "Deadline",
    description: "Last day to register for the spring bowling league season."
  }
];

export default function UpcomingEvents() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
      
      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-48">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}