import React from 'react';
import { ArrowRight, Heart, Users, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GetInvolvedSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-[#1a1a3a] to-[#1a1a3a]/90 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Make a Difference Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating supportive, enriching environments where individuals with disabilities can thrive and live independently.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Support Our Mission</h3>
              <p className="text-white/80 text-sm">Help us provide quality residential care</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Volunteer</h3>
              <p className="text-white/80 text-sm">Share your time and skills</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Partner With Us</h3>
              <p className="text-white/80 text-sm">Collaborate to expand housing options</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white hover:bg-gray-100 text-red-500 px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}