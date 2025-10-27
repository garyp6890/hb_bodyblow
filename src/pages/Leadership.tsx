import React from 'react';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader/index';
import { Link } from 'react-router-dom';
import { Users, Building2 } from 'lucide-react';

export default function Leadership() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Leadership"
        description="Guiding Our Mission Forward"
        mediaUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic">
            "True leaders don't create followers; they build communities of shared purpose, empowering every voice to be heard."
          </blockquote>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Administrative Team */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Admin Team" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
              /> 
              <div className="absolute top-4 right-4 bg-yellow-500 p-3 rounded-full">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Admin Team</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Led by Executive Director Jodi Moan, our admin team brings decades of combined experience in disability services. Their dedication to our mission drives our daily operations, ensuring every friend receives the support and opportunities they deserve. This passionate group works tirelessly to create an environment where joy and growth flourish.
              </p>
              <Link
                to="/admin-team"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-full font-semibold transition-colors text-sm md:text-base"
              >
                View Profiles
              </Link>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="Board of Directors"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 p-3 rounded-full">
                <Building2 className="w-6 h-6 text-gray-900" />
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Board of Directors</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Board of Directors brings diverse expertise and unwavering commitment to guide Happiness Bag's strategic direction. These community leaders volunteer their time and talents to ensure our organization's sustainability and growth. Their collective wisdom helps spread happiness throughout our community, one smile at a time.
              </p>
              <Link
                to="/board"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-full font-semibold transition-colors"
              >
                View Profiles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}