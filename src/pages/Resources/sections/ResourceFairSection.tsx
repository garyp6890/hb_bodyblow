import React from 'react';
import { Play } from 'lucide-react';

interface ResourceFairProps {
  onVideoSelect: (videoId: string) => void;
}

export default function ResourceFairSection({ onVideoSelect }: ResourceFairProps) {
  const videos = [
    {
      title: "1st Annual Resource Fair",
      videoId: "E_WhWP6P-jk",
      thumbnail: "https://img.youtube.com/vi/E_WhWP6P-jk/maxresdefault.jpg"
    },
    {
      title: "2nd Annual Resource Fair",
      videoId: "J76aIDWidAA",
      thumbnail: "https://img.youtube.com/vi/J76aIDWidAA/maxresdefault.jpg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-6">
        Happiness Bag Disability Resource Fair
      </h2>
      <p className="text-xl text-gray-600 text-center mb-8">
        Our annual Disability Resource Fair connects individuals with disabilities and their families 
        to resources and support in the Wabash Valley. With over 40 organizations and providers, 
        the fair serves as a "one-stop shop" for learning about various services and programs.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {videos.map((video) => (
          <div key={video.videoId} className="relative">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-50"
              />
              <button
                onClick={() => onVideoSelect(video.videoId)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="bg-yellow-500 p-4 rounded-full transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-gray-900" />
                </div>
              </button>
            </div>
            <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
          </div>
        ))}
      </div>

      <div className="bg-yellow-500 rounded-xl p-8 text-black">
        <h3 className="text-xl font-semibold mb-4">Resource Fair Featured Services & Activities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Music therapy opportunities</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Respite care information</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Financial assistance programs</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Special Olympics registration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Medicaid waiver guidance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Community support services</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}