import React from 'react';
import { Users, Clock, Calendar, Heart } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '250+',
    label: 'Friends Served',
    description: 'Active participants across all programs'
  },
  {
    icon: Clock,
    value: '168,960',
    label: 'Annual Service Hours',
    description: 'Direct support hours provided'
  },
  {
    icon: Calendar,
    value: '50+',
    label: 'Years of Service',
    description: 'Serving the Wabash Valley'
  },
  {
    icon: Heart,
    value: '95%',
    label: 'Satisfaction Rate',
    description: 'From friends and families'
  }
];

export default function MetricsOverview() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
          Impact by the Numbers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Every number represents a life touched, a milestone achieved, and a step toward 
          greater independence and inclusion in our community.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="font-semibold text-gray-900 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}