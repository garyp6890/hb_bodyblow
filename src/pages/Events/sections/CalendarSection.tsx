import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    date: "2024-03-15",
    title: "Spring Special Olympics Training Begins",
    type: "sports",
    time: "3:00 PM",
    location: "Main Facility"
  },
  {
    date: "2024-03-20",
    title: "Spring Dance",
    type: "social",
    time: "6:00 PM",
    location: "Community Center"
  },
  {
    date: "2024-03-25",
    title: "Bowling League Registration Deadline",
    type: "deadline",
    time: "5:00 PM",
    location: "Online"
  }
];

export default function CalendarSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Events Calendar</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-medium">
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </span>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="bg-gray-50 p-4 text-center font-medium">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {Array.from({ length: 35 }).map((_, index) => (
            <div key={index} className="bg-white p-4 min-h-[120px] relative group hover:bg-gray-50">
              <span className="text-sm text-gray-500">{index + 1}</span>
              {/* Example event dot */}
              {index === 14 && (
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}