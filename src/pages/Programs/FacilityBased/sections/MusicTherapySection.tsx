import React from 'react';
import { Music } from 'lucide-react';

export default function MusicTherapySection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80"
            alt="Music Therapy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Music Therapy</h2>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-700 mb-8 leading-relaxed">
            In partnership with Rhythm Gardens Music, Happiness Bag provides a space on-site for music therapy. 
            Rhythm Garden's certified music therapists provide individualized services to meet the specific goals 
            of each person. Musical and therapeutic techniques are utilized to address a variety of needs, including 
            communication, physical movement, sensory integration and emotional expression. This is a Medicaid-waiver service.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 rounded-lg p-4">
              <span className="text-blue-700">Communication Development</span>
            </div>
            <div className="bg-blue-500/10 rounded-lg p-4">
              <span className="text-blue-700">Physical Movement</span>
            </div>
            <div className="bg-blue-500/10 rounded-lg p-4">
              <span className="text-blue-700">Emotional Expression</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}