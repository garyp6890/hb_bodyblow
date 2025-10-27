import React, { useState } from 'react';
import { Gift, Coins, Building2, Package, Briefcase, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const givingOptions = [
  {
    id: 'one-time',
    icon: Gift,
    title: "One-Time Gifts",
    description: "Make an immediate impact",
    mascot: "https://i.imgur.com/PtYhNoU.png",
    color: "bg-[#991b1b]",
    hoverColor: "hover:bg-[#991b1b]",
    textColor: "group-hover:text-[#991b1b]",
    details: {
      description: "Your one-time gift creates immediate impact for our friends",
      features: [
        "Support specific programs",
        "Honor a loved one",
        "100% tax-deductible"
      ],
      impact: "A gift of $50 provides art supplies for creative expression activities"
    }
  },
  {
    id: 'monthly',
    icon: Coins,
    title: "Monthly Giving",
    description: "Sustain our mission",
    mascot: "https://i.imgur.com/rDYeZ8R.png",
    color: "bg-[#1a1a3a]",
    hoverColor: "hover:bg-[#1a1a3a]",
    textColor: "group-hover:text-[#1a1a3a]",
    details: {
      description: "Join our community of monthly supporters",
      features: [
        "Convenient automatic payments",
        "Flexible giving levels",
        "Ongoing program support"
      ],
      impact: "$25/month provides weekly recreational activities"
    }
  },
  {
    id: 'corporate',
    icon: Building2,
    title: "Corporate Giving",
    description: "Partner for change",
    mascot: "https://i.imgur.com/kFODM5H.png",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-600",
    textColor: "group-hover:text-purple-600",
    details: {
      description: "Create lasting community impact through partnership",
      features: [
        "Employee matching gifts",
        "Sponsorship opportunities",
        "Volunteer programs"
      ],
      impact: "Corporate partners help expand our reach and impact"
    }
  },
  {
    id: 'in-kind',
    icon: Package,
    title: "Gifts in Kind",
    description: "Donate needed items",
    mascot: "https://i.imgur.com/W2qevzJ.png",
    color: "bg-green-600",
    hoverColor: "hover:bg-green-600",
    textColor: "group-hover:text-green-600",
    details: {
      description: "Support our programs with needed supplies and equipment",
      features: [
        "View our wish list",
        "Equipment donations",
        "Program supplies"
      ],
      impact: "In-kind gifts directly support daily activities"
    }
  },
  {
    id: 'legacy',
    icon: Briefcase,
    title: "Legacy Giving",
    description: "Create lasting impact",
    mascot: "https://i.imgur.com/W2qevzJ.png",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-500",
    textColor: "group-hover:text-orange-500",
    details: {
      description: "Leave a lasting legacy through planned giving",
      features: [
        "Estate planning",
        "Charitable trusts",
        "Memorial gifts"
      ],
      impact: "Ensure our mission continues for generations"
    }
  }
];

export default function WaysToGive() {
  const [activeTab, setActiveTab] = useState('one-time');
  const activeOption = givingOptions.find(opt => opt.id === activeTab)!;

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Ways to Give</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Every gift makes a difference. Choose the giving option that works best for you 
          and help us create more opportunities for our friends.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-200">
          {givingOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`flex-1 min-w-[160px] flex flex-col items-center gap-2 p-4 transition-all group relative ${
                  activeTab === option.id ? option.color + ' text-white' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  activeTab === option.id ? 'bg-white/20' : 'bg-gray-100 ' + option.textColor
                }`}>
                  <Icon className={`w-6 h-6 ${
                    activeTab === option.id ? 'text-white' : 'text-gray-600 ' + option.textColor
                  }`} />
                </div>
                <div className="text-center">
                  <div className="font-semibold">{option.title}</div>
                  <div className={`text-sm ${
                    activeTab === option.id ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {option.description}
                  </div>
                </div>
                {activeTab === option.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{activeOption.title}</h3>
              <p className="text-gray-600 mb-6">{activeOption.details.description}</p>
              
              <div className="space-y-4 mb-8">
                {activeOption.details.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${activeOption.color}`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className={`${activeOption.color} text-white p-4 rounded-lg mb-6`}>
                <div className="font-semibold mb-1">Your Impact</div>
                <div className="text-white/90 text-sm">{activeOption.details.impact}</div>
              </div>

              {activeTab === 'legacy' ? (
                <Link 
                  to="/get-involved/legacy-giving"
                  className={`${activeOption.color} text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2`}
                >
                  <BookOpen className="w-5 h-5 mr-1" />
                  Explore Legacy Giving
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <button className={`${activeOption.color} text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2`}>
                  Start Giving
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="relative aspect-square">
              <img
                src={activeOption.mascot}
                alt="Program Mascot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}