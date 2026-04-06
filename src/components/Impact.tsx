import React, { useState, useEffect } from 'react';
import { Users, Calendar, Clock, Play, X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { getImpactStats, getFeaturedTestimonial, ImpactStat, Testimonial } from '../lib/impact';
import { getExpansionSettings } from '../lib/expansion';

export default function Impact() {
  const [stats, setStats] = useState<ImpactStat[]>([]);
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [videoId, setVideoId] = useState<string>('5jaX8NcLOEQ');
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const [impactStats, featuredTestimonial, expansionSettings] = await Promise.all([
        getImpactStats(),
        getFeaturedTestimonial(),
        getExpansionSettings()
      ]);
      setStats(impactStats);
      setTestimonial(featuredTestimonial);
      setVideoId(expansionSettings.videoId);
    };
    loadData();
  }, []);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Users: LucideIcons.Users,
      Clock: LucideIcons.Clock,
      Calendar: LucideIcons.Calendar,
    };
    return icons[iconName] || LucideIcons.Users;
  };

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-16">Our Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {stats.map((stat) => {
                const Icon = getIcon(stat.iconName);
                return (
                  <div key={stat.id} className="text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {testimonial && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-5xl text-yellow-500">"</div>
                  <blockquote>
                    <p className="text-lg mb-4">
                      {testimonial.quote}
                    </p>
                    <footer className="text-gray-400">
                      — {testimonial.attribution}
                    </footer>
                  </blockquote>
                </div>
              </div>
            )}
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
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
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
                  src={`https://www.youtube.com/embed/${videoId}?start=148&end=175&autoplay=1`}
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