import React from 'react';
import { Package, Heart, DollarSign } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
          What Are Gifts in Kind?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Gifts in Kind are donations of goods and services instead of cash. When you donate items or supplies, 
          you're directly supporting our programs and making a tangible impact in the lives of our friends.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Tangible Support</h3>
          <p className="text-gray-600">
            Provide essential supplies our friends use daily in their programs and activities
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Meaningful Impact</h3>
          <p className="text-gray-600">
            Every item donated makes a direct difference in our daily operations and activities
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Cost Reduction</h3>
          <p className="text-gray-600">
            Help us direct more financial resources to expanding programs and services
          </p>
        </div>
      </div>
    </div>
  );
}