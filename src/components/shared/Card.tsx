import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  icon: Icon,
  image,
  className = '',
  children
}: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {image && (
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {Icon && (
            <div className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-full">
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
}