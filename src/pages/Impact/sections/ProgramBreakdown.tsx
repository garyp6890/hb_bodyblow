import React, { useEffect, useRef } from 'react';
import { Building2, Users, Trophy, Home } from 'lucide-react';

const programs = [
  {
    name: 'Facility-Based',
    icon: Building2,
    participants: 120,
    color: 'blue',
    details: [
      'Adult Day Program',
      'Summer Day Camp',
      'Music Therapy'
    ]
  },
  {
    name: 'Residential',
    icon: Home,
    participants: 45,
    color: 'red',
    details: [
      'Residential Habilitation',
      'Respite Care',
      'PAC Services'
    ]
  },
  {
    name: 'Recreational',
    icon: Trophy,
    participants: 65,
    color: 'orange',
    details: [
      'Sports Programs',
      'Social Activities',
      'Community Events'
    ]
  },
  {
    name: 'Special Olympics',
    icon: Users,
    participants: 85,
    color: 'green',
    details: [
      'Multiple Sports',
      'Year-round Training',
      'State Competitions'
    ]
  }
];

export default function ProgramBreakdown() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Chart drawing logic would go here
        // For now, we'll use a simpler visualization
      }
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Program Participation Breakdown</h2>
      
      <div className="grid md:grid-cols-4 gap-6">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <div key={program.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`bg-${program.color}-500 p-4 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-lg font-bold">{program.name}</h3>
                </div>
                <div className="text-3xl font-bold mb-2">{program.participants}</div>
                <div className="text-sm opacity-90">Active Participants</div>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {program.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <p className="text-center text-gray-600">
          Note: Some friends participate in multiple programs, leading to overlap in participation numbers.
        </p>
      </div>
    </div>
  );
}