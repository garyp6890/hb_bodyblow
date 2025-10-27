import React, { useState } from 'react';

interface ServiceProvider {
  name: string;
  logo: string;
  impact: string;
  website: string;
}

const serviceProviders: ServiceProvider[] = [
  {
    name: "Local HVAC Services",
    logo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&h=300&q=80",
    impact: "Annual maintenance and emergency service support valued at $15,000",
    website: "https://example.com/hvac"
  },
  {
    name: "Green Thumb Landscaping",
    logo: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=400&h=300&q=80",
    impact: "Monthly landscaping services and seasonal beautification projects",
    website: "https://example.com/landscaping"
  },
  {
    name: "Quality Cleaning Services",
    logo: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=400&h=300&q=80",
    impact: "Weekly deep cleaning services and special event preparation",
    website: "https://example.com/cleaning"
  },
  {
    name: "Security Solutions",
    logo: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&h=300&q=80",
    impact: "Comprehensive security system monitoring and maintenance",
    website: "https://example.com/security"
  }
];

export default function ServicePartnersSection() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (partnerName: string) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(partnerName)) {
        next.delete(partnerName);
      } else {
        next.add(partnerName);
      }
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
        Service Partners
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Our service partners ensure our facility runs smoothly and safely, allowing us to focus on what matters most - our friends.
      </p>
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {serviceProviders.map(provider => (
          <div
            key={provider.name}
            className="flip-card h-80 cursor-pointer"
            onClick={() => toggleCard(provider.name)}
          >
            <div className={`flip-card-inner ${
              flippedCards.has(provider.name) ? 'rotate-y-180' : ''
            }`}>
              <div className="flip-card-front bg-[#1a1a3a] rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1 bg-yellow-500 w-full" />
                <div className="p-4 flex items-center justify-center flex-1">
                  <h3 className="text-lg font-bold text-white text-center leading-tight">
                    {provider.name}
                  </h3>
                </div>
              </div>
              <div className="flip-card-back bg-[#991b1b] text-white rounded-xl p-6 shadow-lg">
                <div className="flip-card-content h-full flex flex-col justify-center">
                  <p className="text-base mb-4 leading-relaxed">{provider.impact}</p>
                  <a
                    href={provider.website}
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
        <h3 className="text-2xl font-bold text-yellow-500 mb-4">Become a Service Partner</h3>
        <p className="text-white mb-6">
          Help us maintain excellence in our facilities and services through your expertise.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition-all">
          Partner With Us
        </button>
      </div>
    </div>
  );
}