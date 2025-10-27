import React from 'react';

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export default function Section({
  title,
  description,
  children,
  className = '',
  background = 'white'
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section className={`py-20 ${bgStyles[background]} ${className}`}>
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}