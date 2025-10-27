import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Building2, School, Bath, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const constructionUpdates = [
  {
    date: "October 20, 2023",
    title: "Breaking Ground",
    description: "Heavy equipment moves in to prepare the land for construction",
    images: [
      "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "October 28, 2023",
    title: "Infrastructure Connection",
    description: "Connecting essential utilities to city infrastructure",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "November 9, 2023",
    title: "Letters of Hope",
    description: "Our friends write heartfelt notes to the construction crew",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "November 28, 2023",
    title: "Foundation Complete",
    description: "Solid foundations laid for our future growth",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "December 15, 2023",
    title: "Walls Rising",
    description: "Our dreams taking physical shape as walls go up",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "January 5, 2024",
    title: "Roof Installation",
    description: "Weather-tight milestone achieved with roof completion",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "January 20, 2024",
    title: "Windows & Doors",
    description: "Building envelope secured with windows and doors",
    images: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "February 1, 2024",
    title: "Interior Progress",
    description: "Interior walls and systems installation begins",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "February 15, 2024",
    title: "Electrical Systems",
    description: "Powering our future with electrical installation",
    images: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "March 1, 2024",
    title: "Finishing Touches",
    description: "Interior finishes bringing spaces to life",
    images: [
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80"
    ]
  },
  {
    date: "March 15, 2024",
    title: "Landscaping Begins",
    description: "Creating welcoming outdoor spaces for all",
    images: [
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80"
    ]
  }
];

export default function Expansion() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  
  const progress = 2449500;
  const goal = 3450000;
  const progressPercentage = (progress / goal) * 100;

  const nextEvent = () => {
    setActiveEvent((prev) => (prev + 1) % constructionUpdates.length);
    setActiveImageIndex(0);
  };

  const prevEvent = () => {
    setActiveEvent((prev) => (prev - 1 + constructionUpdates.length) % constructionUpdates.length);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      (prev + 1) % constructionUpdates[activeEvent].images.length
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      (prev - 1 + constructionUpdates[activeEvent].images.length) % constructionUpdates[activeEvent].images.length
    );
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-8">
          Expansion
        </h1>
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 mb-6">
            Currently, there are people waiting to join our programs due to space constraints.
            Help us expand and reach more individuals in need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Construction Gallery */}
          <div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <img
                  src={constructionUpdates[activeEvent].images[activeImageIndex]}
                  alt={constructionUpdates[activeEvent].title}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => setShowLightbox(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Multiple Images Indicator */}
                {constructionUpdates[activeEvent].images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-2">
                    <span className="font-medium">{activeImageIndex + 1}</span>
                    <span className="text-white/70">/</span>
                    <span className="text-white/70">{constructionUpdates[activeEvent].images.length}</span>
                  </div>
                )}

                {/* Image Navigation */}
                {constructionUpdates[activeEvent].images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                    {constructionUpdates[activeEvent].images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === activeImageIndex 
                            ? 'bg-white scale-110 ring-2 ring-white/30 ring-offset-2 ring-offset-black/30' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Event Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevEvent();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextEvent();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-6">
                <div className="font-semibold text-gray-500 mb-2">
                  {constructionUpdates[activeEvent].date}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {constructionUpdates[activeEvent].title}
                </h3>
                <p className="text-gray-600">
                  {constructionUpdates[activeEvent].description}
                </p>
              </div>
            </div>
          </div>

          {/* Project Goals and Progress */}
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Expansion Project Goals</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="text-white">Eight new offices and a conference room</div>
              </div>
              <div className="flex items-start gap-3">
                <School className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="text-white">Life skills classrooms and teaching kitchen</div>
              </div>
              <div className="flex items-start gap-3">
                <Bath className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="text-white">Accessible restrooms with showers</div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="text-white">Sensory room and large recreation room</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm text-white mb-2">
                <span>Progress: ${(progress / 1000000).toFixed(2)}M</span>
                <span>Goal: ${(goal / 1000000).toFixed(2)}M</span>
              </div>
              <div className="h-4 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500 transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <p className="text-lg mb-8 text-white">
              We are within $1 million of our $3.45 million goal! Your donation will help us bring this vision to life.
            </p>

            <div className="text-center">
              <Link
                to="/expansion"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center group"
              >
                Support Our Expansion
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={constructionUpdates[activeEvent].images[activeImageIndex]}
            alt={constructionUpdates[activeEvent].title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          {constructionUpdates[activeEvent].images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}