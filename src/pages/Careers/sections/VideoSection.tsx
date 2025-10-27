import React from 'react';
import { Play } from 'lucide-react';

interface VideoSectionProps {
  showVideo: boolean;
  setShowVideo: (show: boolean) => void;
}

export default function VideoSection({ showVideo, setShowVideo }: VideoSectionProps) {
  return (
    <div className="max-w-2xl mx-auto mb-20">
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
        {!showVideo ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <img
              src="https://img.youtube.com/vi/AoDXVxiYZuI/maxresdefault.jpg"
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-50"
            />
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="bg-yellow-500 p-4 rounded-full transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-gray-900" />
              </div>
            </button>
          </div>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/AoDXVxiYZuI?autoplay=1"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}