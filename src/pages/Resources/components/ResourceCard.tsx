import React from 'react';

interface ResourceCardProps {
  name: string;
  logo: string;
  description: string;
  url: string;
}

export default function ResourceCard({ name, logo, description, url }: ResourceCardProps) {
  return (
    <div className="flip-card h-48">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-primary-blue rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
          <img
            src={logo}
            alt={name}
            className="h-12 object-contain mb-3"
          />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
        
        <div className="flip-card-back bg-primary-red text-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
          <p className="mb-3 text-sm">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-colors"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}