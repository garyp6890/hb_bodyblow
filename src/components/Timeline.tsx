import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const timelineEvents = [
  {
    year: 1971,
    title: "Happiness Bag Founded",
    description: "Started as a touring theater company",
    image: "https://givebutter.s3.amazonaws.com/profiles/TyxJWLgWYGcFhmGjW7i7fDxP74XAnGfmrT7v03Bd.png",
    type: "image"
  },
  {
    year: 1987,
    title: "Educational Focus",
    description: "Shifted focus to educational and recreational programs",
    image: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?auto=format&fit=crop&q=80",
    type: "image"
  },
  {
    year: 1997,
    title: "New Facility",
    description: "Moved to the current facility thanks to anonymous donors",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    type: "video",
    videoId: "q49pdB4fCb0"
  },
  {
    year: 2017,
    title: "Expansion Vision",
    description: "Facility expansion plans emerge\nas community needs grow",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    type: "image"
  },
  {
    year: 2020,
    title: "Expansion Planning",
    description: "Board approves facility expansion plan;\ intensifies fundraising efforts",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    type: "image"
  },
  {
    year: 2023,
    title: "Expansion Award",
    description: "Vigo County Council Approves ARPA funds for expansion",
    image: "https://i3.ytimg.com/vi/1pBgFNxFYwQ/maxresdefault.jpg",
    type: "video",
    videoId: "1pBgFNxFYwQ"
  },
  {
    year: 2024,
    title: "Expansion Project",
    description: "Groundbreaking for 12,000 sq. ft. expansion project",
    image: "https://bloximages.newyork1.vip.townnews.com/wthitv.com/content/tncms/assets/v3/editorial/3/f0/3f0c6d96-867f-11ef-ac5d-772a98c2265f/6706eb2d3e572.image.png?crop=1163%2C611%2C0%2C5&resize=438%2C230&order=crop%2Cresize",
    type: "image"
  }
];

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  const openVideo = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedVideo(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-12">Our Story</h1>
        
        <div className="relative">
          <button 
            onClick={() => scrollTimeline('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar gap-8 py-8 px-12"
            style={{ scrollBehavior: 'smooth' }}
          >
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex-none w-64 cursor-pointer transition-transform hover:scale-105 ${
                  index === activeEvent ? 'ring-2 ring-yellow-500' : ''
                }`}
                onClick={() => setActiveEvent(index)}
              >
                <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    {event.type === 'video' && event.videoId && (
                      <button
                        onClick={(e) => openVideo(event.videoId!, e)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
                      >
                        <Play className="w-16 h-16 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
                      </button>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold mb-2">{event.year}</div>
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scrollTimeline('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <blockquote className="text-center mt-12 text-xl italic text-gray-600 max-w-3xl mx-auto">
          <p>
            "Happiness Bag is more than just a day service or summer service. It's like a family."
          </p>
          <footer className="text-right text-gray-600 mt-2">— Mother of a Happiness Bag Friend</footer>
        </blockquote>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                src={selectedVideo}
                className="absolute inset-0 w-full h-full rounded-lg border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Event Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}