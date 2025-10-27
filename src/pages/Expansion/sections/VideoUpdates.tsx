import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    title: "Construction Update 1",
    description: "Initial groundbreaking and site preparation",
    thumbnail: "https://img.youtube.com/vi/Utb7BD4UP3I/maxresdefault.jpg",
    videoId: "Utb7BD4UP3I"
  },
  {
    title: "Construction Update 2",
    description: "Foundation work and structural progress",
    thumbnail: "https://img.youtube.com/vi/paRJRTr_AcM/maxresdefault.jpg",
    videoId: "paRJRTr_AcM"
  },
  {
    title: "Construction Update 3",
    description: "Latest developments and next steps",
    thumbnail: "https://img.youtube.com/vi/5XLKZtKfjEA/maxresdefault.jpg",
    videoId: "5XLKZtKfjEA"
  }
];

export default function VideoUpdates() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">Construction Updates</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.videoId} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors">
                <button
                  onClick={() => setActiveVideo(video.videoId)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="bg-yellow-500 p-4 rounded-full transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-gray-900" />
                  </div>
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 hover:bg-gray-100 rounded-full transition-all hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Construction Update"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}