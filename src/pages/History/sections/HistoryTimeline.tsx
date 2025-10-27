import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { timelineEvents } from '../../../data/timelineData';
import VideoModal from './VideoModal';

export default function HistoryTimeline() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="relative pt-32 pb-4 overflow-hidden z-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-float-fast" />
      </div>
      <div className="container mx-auto px-4">
        <div className="relative z-30 flex justify-center mb-24">
          <div className="bg-yellow-500 w-full md:w-auto md:min-w-[600px] rounded-2xl px-8 md:px-12 py-8 md:py-10 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 text-center leading-tight">
              <span className="block mb-2">50 Years of</span>
              <span className="block">Building Community</span>
            </h1>
            <div className="flex items-center justify-center mt-4">
              <div className="h-1 w-32 bg-gray-900/30" />
            </div>
            <div className="mt-4 text-center text-gray-900/75 text-lg md:text-xl font-medium">
              A Legacy of Happiness Since 1971
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-[50%] top-8 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-500 to-yellow-500 glow-timeline" />

            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`timeline-item relative flex items-start md:items-center mb-24 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-[50%] w-6 md:w-8 h-6 md:h-8 -ml-3 md:-ml-4 bg-gray-900 rounded-full border-4 border-yellow-500 z-10 shadow-lg shadow-yellow-500/20" />

                {/* Content Box */}
                <div 
                  className={`w-[85%] md:w-[45%] group ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                > 
                  <div 
                    className="flip-card h-[360px] cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <div className={`flip-card-inner ${
                      flippedCards.has(index) ? 'rotate-y-180' : ''
                    }`}>
                      {/* Front of Card */}
                      <div className="flip-card-front rounded-2xl overflow-hidden bg-[#991b1b]">
                        <div className="relative h-[280px]">
                          <div className="absolute bottom-4 left-4">
                            <div className="inline-block px-3 py-1 bg-yellow-500 rounded-md text-[#991b1b] text-3xl font-bold">
                              {event.year}
                            </div>
                          </div>
                          <img
                            src={event.image}
                            alt={`${event.title} - ${event.year}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-white/90 line-clamp-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Back of Card */}
                      <div className="flip-card-back bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                        <div className="relative h-[240px]">
                          <img 
                            src={event.type === 'video' ? `https://i3.ytimg.com/vi/${event.videoId}/maxresdefault.jpg` : event.image}
                            alt={`${event.title} - ${event.year}`}
                            className="w-full h-full object-cover transition-transform duration-300"
                          />
                          <div className="absolute bottom-4 left-4">
                            <div className="inline-block px-3 py-1 bg-yellow-500 rounded-md text-[#991b1b] text-3xl font-bold">
                              {event.year}
                            </div>
                          </div>
                          {event.type === 'video' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedVideo(event.videoId);
                              }} 
                              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 hover:bg-black/20"
                            >
                              <Play className="w-12 md:w-16 h-12 md:h-16 text-yellow-500 opacity-75 hover:opacity-100 transition-all transform hover:scale-110" />
                            </button>
                          )}
                        </div>
                        <div className="h-1 w-full bg-[#991b1b] relative z-10" />
                        <div className="bg-gray-900 p-4 h-[120px] flex items-start">
                          {event.year === 2024 ? (
                            <div className="flex flex-col items-center gap-2 w-full">
                              <p className="text-white/90 leading-relaxed text-center">
                                {event.description}
                              </p>
                              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold transition-all">
                                Support Our Expansion
                              </button>
                            </div>
                          ) : (
                            <p className="text-white/90 leading-relaxed text-sm md:text-base">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}