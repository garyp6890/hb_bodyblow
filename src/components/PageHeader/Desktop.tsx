import React from 'react';
import { PageHeaderProps } from './types';
import Navigation from '../Navigation';

export default function DesktopHeader({ title, description, mediaUrl, isVideo }: PageHeaderProps) {
  return (
    <div className="hidden md:block relative">
      <div className="grid md:grid-cols-2">
      {/* Left Content */}
      <div className="bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
        <div className="relative px-20 h-[320px] flex items-end pb-12">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tighter text-white">
              {title}
            </h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/10 to-gray-900" />
        {isVideo ? (
          <iframe
            src={mediaUrl}
            className="w-full h-[320px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          <img
            src={mediaUrl}
            alt={title}
            className="w-full h-[320px] object-cover object-center"
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-yellow-500" />
      </div>
      <Navigation isVisible={false} isMobileMenuOpen={false} />
    </div>
  );
}