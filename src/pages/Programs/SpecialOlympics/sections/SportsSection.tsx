import React, { useState } from 'react';
import { Timer, Waves, Bike, Trophy, Target, Flag, Dumbbell } from 'lucide-react';

const sports = [
  {
    title: "Track & Field",
    icon: Timer,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
    description: "Track and Field remains a cornerstone of Special Olympics, offering athletes the chance to compete in running, jumping, and throwing events.",
    schedule: "Practices start in April",
    location: "Area 7 Spring and Summer Games",
    features: [
      "Multiple events for diverse abilities",
      "State Summer Games qualification",
      "Age and skill-based divisions"
    ]
  },
  {
    title: "Aquatics",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80",
    description: "Our aquatics program offers athletes the chance to develop swimming skills and compete in a range of water-based events.",
    schedule: "Practices begin in April",
    location: "Area 7 Spring and Summer Games",
    features: [
      "Multiple swimming styles",
      "Relay races and team events",
      "State-level competition opportunities"
    ]
  },
  {
    title: "Cycling",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80",
    description: "Cycling offers athletes the freedom and thrill of competing on two-wheel bikes, tandems, or tricycles.",
    schedule: "Training begins in April",
    location: "State Summer Games",
    features: [
      "Various race formats, including Unified divisions",
      "Multiple distance options",
      "Safety-focused training"
    ]
  },
  {
    title: "Bowling",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1553190920-a9c7432283e6?auto=format&fit=crop&q=80",
    description: "Bowling combines skill, focus, and camaraderie in a fun, inclusive setting.",
    schedule: "Year-round program",
    location: "Multiple venues",
    features: [
      "Adaptive equipment available",
      "Youth program (ages 5-8)",
      "Regular competitions"
    ]
  },
  {
    title: "Basketball",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80",
    description: "Basketball is one of our most popular team sports, fostering teamwork and athletic excellence.",
    schedule: "December - April",
    location: "State Tournament in April",
    features: [
      "Multiple skill divisions",
      "Team and individual skills",
      "Regular tournaments"
    ]
  },
  {
    title: "Cornhole",
    icon: Target,
    image: "https://images.unsplash.com/photo-1596731498067-aa4ec1a4376b?auto=format&fit=crop&q=80",
    description: "A favorite for all ages, Corn Toss combines precision and friendly competition.",
    schedule: "Starts mid-July",
    location: "Various venues",
    features: [
      "Traditional & unified teams",
      "Multiple board options",
      "Regular tournaments"
    ]
  },
  {
    title: "Bocce Ball",
    icon: Flag,
    image: "https://images.unsplash.com/photo-1591491653056-4314430901ee?auto=format&fit=crop&q=80",
    description: "A game of strategy and precision, perfect for athletes seeking a slower-paced yet highly competitive sport.",
    schedule: "Practices begin in April",
    location: "Area 7 Spring Games",
    features: [
      "Individual & team play",
      "Unified competition options",
      "State Games qualification"
    ]
  },
  {
    title: "Flag Football",
    icon: Flag,
    image: "https://images.unsplash.com/photo-1591491653056-4314430901ee?auto=format&fit=crop&q=80",
    description: "Provides an opportunity for athletes and Unified partners to come together and play flag football.",
    schedule: "Practices begin in August",
    location: "State Championship Grand Park, Westfield",
    features: [
      "Fair & competative divisioning",
      "Unified competition options",
      "State Games qualification"
    ]
  }
];

export default function SportsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToTab = (index: number) => {
    setActiveTab(index);
    const tabsContainer = document.getElementById('sports-tabs');
    const selectedTab = document.getElementById(`sport-tab-${index}`);
    if (tabsContainer && selectedTab) {
      const containerWidth = tabsContainer.offsetWidth;
      const scrollPosition = selectedTab.offsetLeft - (containerWidth / 2) + (selectedTab.offsetWidth / 2);
      tabsContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12">Special Olympics Programs</h2>
      
      <blockquote className="text-center italic text-xl md:text-2xl text-gray-600 mb-8">
        "Let me win. But if I cannot win, let me be brave in the attempt."
        <footer className="text-sm md:text-base text-gray-500 mt-2">
          — SPECIAL OLYMPICS ATHLETES' OATH
        </footer>
      </blockquote>
      
      <div 
        id="sports-tabs"
        className="flex md:grid md:grid-cols-8 gap-2 mb-4 md:mb-8 overflow-x-auto p-2 -mx-4 px-4 md:mx-0 md:px-2 snap-x snap-mandatory"
      >
        {sports.map((sport, index) => {
          const Icon = sport.icon;
          return (
            <button
              id={`sport-tab-${index}`}
              key={sport.title}
              onClick={() => scrollToTab(index)}
              className={`p-3 md:p-4 rounded-xl transition-all flex-shrink-0 min-w-[90px] md:min-w-0 snap-center ${
                activeTab === index
                  ? 'bg-green-500 text-white'
                  : 'bg-green-500/10 hover:bg-green-500/20'
              }`}
            >
              <Icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1.5 md:mb-2 ${
                activeTab === index ? 'text-white' : 'text-green-500'
              }`} />
              <span className={`text-xs md:text-sm font-medium ${
                activeTab === index ? 'text-white' : 'text-green-700'
              }`}>
                {sport.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
        <div className="relative h-48 sm:h-64 md:h-96">
          <img
            src={sports[activeTab].image}
            alt={sports[activeTab].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{sports[activeTab].title}</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <span className="bg-green-500 text-white px-2.5 py-1 rounded-full text-xs sm:text-sm">
                {sports[activeTab].schedule}
              </span>
              <span className="bg-green-500 text-white px-2.5 py-1 rounded-full text-xs sm:text-sm">
                {sports[activeTab].location}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">{sports[activeTab].description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {sports[activeTab].features.map((feature, index) => (
              <div key={index} className="bg-green-500/10 rounded-lg p-3 sm:p-4">
                <span className="text-green-700 text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}