import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

export default function WellnessSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-yellow-500 mb-6">
            Wellness Coordination Program
          </h2>
          <p className="text-xl text-white">
            The Happiness Bag Wellness Coordination Program provides a holistic approach to supporting the overall health and well-being of each participant. This program supports individuals navigate the complexities of healthcare and wellness by providing education, support, and advocacy. Our wellness coordinator works with individuals to monitor vitals, as well as address their unique needs and goals related to physical, mental, and emotional health. We collaborate with other providers and resources to ensure comprehensive care and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-white font-semibold mb-2">Personalized Care</h3>
            <p className="text-gray-300 text-sm">Individual healthcare plans tailored to specific needs</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-white font-semibold mb-2">Professional Oversight</h3>
            <p className="text-gray-300 text-sm">Supervised by registered nurses and healthcare professionals</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-300 text-sm">Round-the-clock access to healthcare guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
}