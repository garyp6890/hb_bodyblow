import React from 'react';
import { ArrowRight, Calendar, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GetInvolvedSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating memorable experiences and making a difference in our community.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Attend Events</h3>
              <p className="text-white/80 text-sm">Join our community gatherings</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Volunteer</h3>
              <p className="text-white/80 text-sm">Help make our events successful</p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Join Programs</h3>
              <p className="text-white/80 text-sm">Participate in our activities</p>
            </div>
          </div>

          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-yellow-500 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Learn More About Getting Involved
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}