import React from 'react';
import { MessageSquare, Clock, Heart } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Your Voice Matters</h2>
        <p className="text-xl text-gray-600">
          At Happiness Bag, we're dedicated to providing adapted, educational, and recreational 
          services that encourage the unique potential of children and adults with disabilities. 
          Your feedback helps us create a more inclusive and accessible environment for everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Open Communication</h3>
          <p className="text-gray-600 text-center">
            We welcome all feedback - positive and constructive - to help us grow and improve
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Timely Response</h3>
          <p className="text-gray-600 text-center">
            We commit to reviewing and responding to all suggestions within 48 hours
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Continuous Improvement</h3>
          <p className="text-gray-600 text-center">
            Your insights help us enhance our programs and services
          </p>
        </div>
      </div>
    </div>
  );
}