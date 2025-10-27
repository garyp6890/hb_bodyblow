import React from 'react';
import { Building2, Award, Users, ArrowRight } from 'lucide-react';

export default function BuilderSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Our Builder: E.C. Rodgers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            E.C. Rodgers brings over 50 years of construction excellence to our expansion project, 
            with deep roots in the Wabash Valley community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Excellence</h3>
            <p className="text-gray-300">
              Family-owned since 1971, serving the Wabash Valley with quality construction services.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold mb-2">Proven Experience</h3>
            <p className="text-gray-300">
              Over five decades of commercial construction expertise and community projects.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Focus</h3>
            <p className="text-gray-300">
              Committed to building spaces that enhance our community's quality of life.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://ecrodgers.com/about-us/our-company/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Learn More About E.C. Rodgers
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}