import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GivingDetailsProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

export default function GivingDetails({
  title,
  description,
  features,
  ctaText,
  onCtaClick,
  image,
  testimonial
}: GivingDetailsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {testimonial && (
          <blockquote className="border-l-4 border-yellow-500 pl-4 mb-6">
            <p className="text-lg italic text-gray-600 mb-2">{testimonial.quote}</p>
            <footer className="text-gray-500">— {testimonial.author}</footer>
          </blockquote>
        )}

        <button
          onClick={onCtaClick}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}