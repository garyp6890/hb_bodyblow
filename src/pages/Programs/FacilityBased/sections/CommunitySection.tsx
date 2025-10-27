import React from 'react';
import { Heart, Calendar, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    title: "Annual Prom",
    description: "A night of joy and inclusivity where our friends shine",
    icon: Heart
  },
  {
    title: "Holiday Celebrations",
    description: "Festive events that bring our friends and the community together",
    icon: Calendar
  },
  {
    title: "Resource Fair",
    description: "Connecting individuals with disabilities to essential services",
    icon: Users
  }
];

export default function CommunitySection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">Community Engagement</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          At Happiness Bag, we strive to ensure that our friends remain actively engaged in the 
          community, both within and beyond our facility-based programming. We believe that 
          meaningful interaction with the public fosters inclusion, builds confidence, and creates 
          lasting connections.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fundraising Initiatives */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Fundraising Projects</h3>
            <p className="text-gray-300 mb-4">
              Our friends participate in fundraising projects that support causes they care deeply about, 
              including:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span>World Down Syndrome Day initiatives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span>Terre Haute Buddy Walk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <span>Local community support campaigns</span>
              </li>
            </ul>
          </div>

          {/* Annual Events */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Annual Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{event.title}</h4>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-lg text-gray-300 mb-4">
            Through these initiatives, we ensure that our friends are not only supported but also 
            empowered to be active participants in their community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2 hover:scale-105">
              View Photo Gallery
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2 hover:scale-105">
              View Upcoming Events
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}