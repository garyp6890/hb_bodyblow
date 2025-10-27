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

export default function EstatePlanningSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-[#1a1a3a] rounded-xl p-8 text-yellow-500">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
          Leave a Lasting Legacy
        </h1>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          Consider including Happiness Bag in your estate planning to create a lasting impact for generations to come.
        </p>  
        <h2 className="text-2xl font-bold text-center mb-4">Legacy of Generosity</h2>
        <p className="text-white text-center mb-12">
          Recognizing individuals and estates whose generosity leaves a lasting legacy at Happiness Bag.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {legacyDonors.map((donor, index) => (
            <div key={index} className="bg-[#991b1b] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">{donor.name}</h3>
              {donor.estate && (
                <div className="text-yellow-500 text-sm font-medium mb-2">{donor.estate}</div>
              )}
              <div className="bg-yellow-500/20 px-3 py-1 rounded-full text-yellow-500 text-sm font-medium inline-block mb-4">
                {donor.amount}
              </div>
              <p className="text-sm text-white">{donor.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/get-involved/legacy-giving"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2"
          >
            Learn About Legacy Giving
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}