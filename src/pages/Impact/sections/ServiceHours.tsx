import React from 'react';
import { Clock } from 'lucide-react';

const serviceData = [
  {
    program: 'Residential Services',
    hours: 87600, // 10 homes × 24 hours × 365 days
    staffing: '24/7 Coverage',
    details: 'Round-the-clock support in residential settings'
  },
  {
    program: 'Day Programs',
    hours: 62400, // 240 days × 10 hours × average participants
    staffing: 'Weekday Coverage',
    details: 'Structured weekday programming and activities'
  },
  {
    program: 'Recreational Programs',
    hours: 12480, // Weekly programs + special events
    staffing: 'Evening & Weekend',
    details: 'Sports, social activities, and special events'
  },
  {
    program: 'Respite Care',
    hours: 6480, // Variable based on need
    staffing: 'As Needed',
    details: 'Flexible support for families and caregivers'
  }
];

export default function ServiceHours() {
  const totalHours = serviceData.reduce((acc, curr) => acc + curr.hours, 0);

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-2xl p-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock className="w-8 h-8 text-yellow-500" />
          <h2 className="text-3xl font-bold text-white">Annual Service Hours</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {serviceData.map((service) => (
            <div key={service.program} className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">
                {service.program}
              </h3>
              <div className="text-3xl font-bold text-white mb-2">
                {service.hours.toLocaleString()}
              </div>
              <div className="text-sm text-white/70 mb-2">
                Hours Annually
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/90">{service.staffing}</span>
                <span className="text-white/70">{service.details}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-500 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">
            {totalHours.toLocaleString()}
          </div>
          <div className="text-xl text-gray-900">
            Total Annual Service Hours
          </div>
        </div>
      </div>
    </div>
  );
}