import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GivingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  mascot: string;
  color: string;
  onClick: () => void;
  isActive: boolean;
}

export default function GivingCard({
  icon: Icon,
  title,
  description,
  features,
  mascot,
  color,
  onClick,
  isActive
}: GivingCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-xl transition-all relative overflow-hidden group ${
        isActive ? `${color} text-white shadow-lg` : 'bg-white hover:bg-gray-50'
      }`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
        <img
          src={mascot}
          alt="Program Mascot"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${isActive ? 'bg-white/10' : 'bg-gray-100'}`}>
            <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-900'}`} />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        
        <p className={`mb-4 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>

        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full ${
                isActive ? 'bg-white' : 'bg-gray-400'
              }`} />
              <span className={isActive ? 'text-white/80' : 'text-gray-600'}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}