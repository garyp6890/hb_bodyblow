import React from 'react';
import { Building2, Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const impacts = [
  {
    icon: Building2,
    title: "Economic Impact",
    metrics: [
      "100+ local jobs created",
      "$3.45M annual economic contribution",
      "Local vendor partnerships"
    ]
  },
  {
    icon: Heart,
    title: "Family Support",
    metrics: [
      "150+ families supported",
      "24/7 respite care services",
      "Parent support groups"
    ]
  },
  {
    icon: Users,
    title: "Community Engagement",
    metrics: [
      "25+ community events annually",
      "Volunteer opportunities",
      "Public awareness programs"
    ]
  }
];

export default function CommunityImpact() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Community Impact</h2>
        <p className="text-xl text-gray-600">
          Our impact extends beyond individual services to create lasting positive change 
          in the Wabash Valley community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {impacts.map((impact) => {
          const Icon = impact.icon;
          return (
            <div key={impact.title} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{impact.title}</h3>
              </div>
              <ul className="space-y-3">
                {impact.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Partner With Us
        </h3>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Join us in creating a more inclusive and supportive community. Together, we can make 
          an even greater impact in the lives of individuals with disabilities.
        </p>
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
        >
          Become a Partner
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}