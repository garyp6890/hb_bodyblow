import React from 'react';
import { Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SummerCampSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-[#1a1a3a] to-[#1a1a3a]/90 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sun className="w-12 h-12 text-yellow-400" />
            <h2 className="text-3xl font-bold">Summer Day Camp Program</h2>
          </div>

          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Happiness Bag's Summer Day Camp stands out as the Wabash Valley's only summer camp 
            exclusively designed for individuals with disabilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Program Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>8-week program during Vigo County School Corporation's summer break</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>Monday through Friday, 8:00 AM to 4:00 PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>Structured, routine-oriented activities</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>Arts and crafts, outdoor recreation, music activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>Social skill-building games tailored to abilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2" />
                  <span>Safe, judgment-free space for all participants</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/programs/apply"
              className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}