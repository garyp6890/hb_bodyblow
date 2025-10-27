import React, { useState } from 'react';
import { Users, Calendar, Clock, Play, X } from 'lucide-react';

export default function Impact() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-16">Our Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <div className="text-3xl font-bold mb-2">250+</div>
                <div className="text-gray-400">Friends Served Annually</div>
              </div>
              
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-400">Years of Service</div>
              </div>
              
              <div className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <div className="text-3xl font-bold mb-2">5-85</div>
                <div className="text-gray-400">Age Range Served</div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-5xl text-yellow-500">"</div>
                <blockquote>
                  <p className="text-lg mb-4">
                    She was nonverbal and non-ambulatory… she couldn't walk or talk… When I brought her to Happiness Bag… they talked to her as much as they talked to me… and she was very comfortable with them because they were very comfortable with her.
                  </p>
                  <footer className="text-gray-400">
                    — Mother of a Happiness Bag Friend
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setShowVideo(true)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black p-4 rounded-full transition-colors z-10 cursor-pointer"
                >
                  <Play className="w-8 h-8" />
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/5jaX8NcLOEQ/maxresdefault.jpg"
                alt="Impact video thumbnail"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
        
        {showVideo && (
          <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowVideo(false);
            }}
          >
            <div 
              className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4"
            >
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setShowVideo(false)}
                  className="p-1 hover:bg-gray-100 rounded-full text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/5jaX8NcLOEQ?start=148&end=175&autoplay=1"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="Impact Video"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}