import React from 'react';
import ResourceCard from '../components/ResourceCard';
import { resourceLinks } from '../../../data/resourceLinks';

export default function ResourcesSection() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
        Disability Resources
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover a wide range of disability resources, including accessible solutions, 
        support services, and tools to empower individuals in the Wabash Valley and beyond.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {resourceLinks.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}