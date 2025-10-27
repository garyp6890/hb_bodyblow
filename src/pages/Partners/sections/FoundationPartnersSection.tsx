import React, { useState } from 'react';

interface Foundation {
  name: string;
  logo: string;
  description: string;
  impact: string;
}

const foundations: Foundation[] = [
  {
    name: "Wabash Valley Community Foundation",
    logo: "https://wvcf.org/wp-content/uploads/2019/03/wvcf-logo.png",
    description: "Supporting local initiatives through strategic grant-making",
    impact: "Awarded a portion of a $200,000 2023 grant, enabling Happiness Bag expansion initiatives."
  },
  {
    name: "Gregory L. Gibson Charitable Foundation",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    description: "Empowering community growth through charitable giving",
    impact: "$5,000 donation in 2023 to support general operations at Happiness Bag."
  },
  {
    name: "The India Association",
    logo: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80",
    description: "Fostering cultural exchange and community support",
    impact: "Donated $40,000 in 2016 to purchase equipment for a computer lab."
  }
];

export default function FoundationPartnersSection() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (foundationName: string) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(foundationName)) {
        next.delete(foundationName);
      } else {
        next.add(foundationName);
      }
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
        Foundation Partners
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        These foundations ensure that Happiness Bag can continue to provide vital services. 
        Their generosity helps us reach new heights and serve more of our friends every year.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {foundations.map(foundation => (
          <div
            key={foundation.name}
            className="flip-card h-80 w-72 mx-auto cursor-pointer"
            onClick={() => toggleCard(foundation.name)}
          >
            <div className={`flip-card-inner ${
              flippedCards.has(foundation.name) ? 'rotate-y-180' : ''
            }`}>
              <div className="flip-card-front bg-[#1a1a3a] rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={foundation.logo}
                    alt={foundation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1 bg-yellow-500 w-full" />
                <div className="p-4 flex items-center justify-center flex-1">
                  <h3 className="text-lg font-bold text-white text-center leading-tight">
                    {foundation.name}
                  </h3>
                </div>
              </div>
              <div className="flip-card-back bg-[#991b1b] text-white rounded-xl p-6 shadow-lg">
                <div className="flip-card-content h-full flex flex-col justify-center">
                  <p className="text-base mb-4 leading-relaxed">{foundation.impact}</p>
                  <div className="mt-auto text-center">
                    <span className="text-sm opacity-75">Click to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#991b1b] rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">Interested in Foundation Giving?</h3>
        <p className="text-white mb-6">
          Learn how your foundation can make a lasting impact through donor-advised funds 
          and other strategic charitable giving.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition-all">
          Explore Foundation Opportunities
        </button>
      </div>
    </div>
  );
}