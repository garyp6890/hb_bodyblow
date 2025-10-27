import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegacyDonor {
  name: string;
  estate?: string;
  amount: string;
  description: string;
}

const legacyDonors: LegacyDonor[] = [
  {
    name: "Diana Williams",
    estate: "Jay Chickadaunce Estate",
    amount: "$235,000",
    description: "Legacy donation ensuring the future of Happiness Bag's services. Their generosity sustains our mission and empowers our friends to thrive."
  },
  {
    name: "Robert Thompson",
    estate: "Thompson Family Trust",
    amount: "$180,000",
    description: "A transformative gift that helps expand our programs and reach more individuals in need of our services."
  },
  {
    name: "Margaret Anderson",
    estate: "Anderson Memorial Fund",
    amount: "$150,000",
    description: "Supporting innovative programs and ensuring long-term sustainability of our mission."
  }
];

export default function LegacyDonors() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-8">Legacy of Generosity</h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        We honor those whose thoughtful planning and generous hearts continue to make a 
        lasting impact at Happiness Bag. Their legacy lives on through every smile, achievement, 
        and moment of joy experienced by our friends.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {legacyDonors.map((donor, index) => (
          <div key={index} className="bg-orange-600 rounded-xl p-6 text-white hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl mb-2">{donor.name}</h3>
            {donor.estate && (
              <div className="text-orange-200 text-sm font-medium mb-2">{donor.estate}</div>
            )}
            <div className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-200 text-sm font-medium inline-block mb-3">
              {donor.amount}
            </div>
            <p className="text-white/90 text-sm">{donor.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-orange-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-orange-800">Join our Legacy Partners in Happiness</h3>
        <p className="text-orange-900/80 mb-6 max-w-3xl mx-auto">
          When you include Happiness Bag in your estate plans, you become part of our Legacy 
          Partners in Happiness—a community of forward-thinking individuals committed to 
          ensuring our mission continues for generations to come.
        </p>
        <a 
          href="#legacy-partners" 
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105"
        >
          Learn About Legacy Partners in Happiness
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}