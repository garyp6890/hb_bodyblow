import React, { useState } from 'react';

interface BusinessPartner {
  name: string;
  logo: string;
  impact: string;
  website: string;
}

const businesses: BusinessPartner[] = [
  {
    name: "Local Business 1",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    impact: "Annual fundraising events have raised over $50,000 for our programs",
    website: "https://example.com/business1"
  },
  {
    name: "Local Business 2",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    impact: "Monthly in-kind donations of essential program supplies",
    website: "https://example.com/business2"
  },
  {
    name: "Local Business 3",
    logo: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?auto=format&fit=crop&q=80",
    impact: "Provided job training and placement for 5 program participants",
    website: "https://example.com/business3"
  },
  {
    name: "Local Business 4",
    logo: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80",
    impact: "Donated computer equipment and IT support services",
    website: "https://example.com/business4"
  }
];

export default function BusinessPartnersSection() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (businessName: string) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(businessName)) {
        next.delete(businessName);
      } else {
        next.add(businessName);
      }
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
        Business Partners
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Local businesses play a vital role in supporting our mission through various forms of partnership.
        Their commitment helps us create lasting impact in our community.
      </p>
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {businesses.map(business => (
          <div
            key={business.name}
            className="flip-card h-80 cursor-pointer"
            onClick={() => toggleCard(business.name)}
          >
            <div className={`flip-card-inner ${
              flippedCards.has(business.name) ? 'rotate-y-180' : ''
            }`}>
              <div className="flip-card-front bg-[#1a1a3a] rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={business.logo}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1 bg-yellow-500 w-full" />
                <div className="p-4 flex items-center justify-center flex-1">
                  <h3 className="text-lg font-bold text-white text-center leading-tight">
                    {business.name}
                  </h3>
                </div>
              </div>
              <div className="flip-card-back bg-[#991b1b] text-white rounded-xl p-6 shadow-lg">
                <div className="flip-card-content h-full flex flex-col justify-center">
                  <p className="text-base mb-4 leading-relaxed">{business.impact}</p>
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 inline-flex items-center justify-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                  </a>
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
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">Become a Business Partner</h3>
        <p className="text-white mb-6">
          Join our network of business partners and make a difference in the lives of our friends.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition-all">
          Partner With Us
        </button>
      </div>
    </div>
  );
} 