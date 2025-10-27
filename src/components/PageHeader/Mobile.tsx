import React from 'react';
import { PageHeaderProps } from './types';

export default function MobileHeader({ title, description, mediaUrl, isVideo }: PageHeaderProps) {
  return (
    <div className="md:hidden relative pb-16">
      {/* Image */}
      <div className="relative overflow-hidden border-b-[8px] border-yellow-500">
        {isVideo ? (
          <iframe
            src={mediaUrl}
            className="w-full h-56"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          <img
            src={mediaUrl}
            alt={title}
            className="w-full h-56 object-cover object-center"
          />
        )}
      </div>

      {/* Centered Content Tile */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
        <div className="bg-gray-900 rounded-xl shadow-xl px-4 py-3 text-center w-[300px] sm:w-[340px]">
          <div className="relative z-10 space-y-1.5">
            <h1 className="text-lg sm:text-xl font-bold tracking-tighter text-white mx-auto whitespace-normal">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}