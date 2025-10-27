import React from 'react';
import { BookOpen, Heart, Shield, Gift } from 'lucide-react';

export default function WhatIsSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-6">What Is Legacy Giving?</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Planned giving is a powerful way to extend your impact beyond your lifetime. Whether through a will, 
          trust, or charitable gift annuity, your legacy gift sustains Happiness Bag's mission to empower 
          individuals with disabilities for generations to come.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Legacy Giving Options */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3 border-orange-200">Legacy Giving Options</h3>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <BookOpen className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1">Estate Planning and Bequests</div>
              <p className="text-gray-600">Include Happiness Bag in your will with a specific amount or percentage</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <Gift className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1">Charitable Remainder or Lead Trusts</div>
              <p className="text-gray-600">Create a trust that benefits both Happiness Bag and your beneficiaries</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <Heart className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1">Beneficiary Designations</div>
              <p className="text-gray-600">Name Happiness Bag as a beneficiary of your life insurance or retirement accounts</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <Shield className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-1">Endowments and Memorial Gifts</div>
              <p className="text-gray-600">Establish a named fund that provides ongoing support in memory of a loved one</p>
            </div>
          </div>
        </div>

        {/* Your Impact */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-3 border-orange-200">Your Impact</h3>
          
          <div className="rounded-xl p-5 bg-gradient-to-br from-orange-50 to-orange-100 space-y-2">
            <h4 className="font-semibold text-orange-700 mb-2">Ensure our programs continue for years to come</h4>
            <p className="text-gray-600">
              Your legacy gift provides a stable foundation for Happiness Bag's future, ensuring we can 
              continue to serve individuals with disabilities for generations.
            </p>
          </div>
          
          <div className="rounded-xl p-5 bg-gradient-to-br from-orange-50 to-orange-100 space-y-2">
            <h4 className="font-semibold text-orange-700 mb-2">Support future expansion and innovation</h4>
            <p className="text-gray-600">
              Help us grow, adapt to changing needs, and implement new approaches that enhance the quality 
              of life for our friends.
            </p>
          </div>
          
          <div className="rounded-xl p-5 bg-gradient-to-br from-orange-50 to-orange-100 space-y-2">
            <h4 className="font-semibold text-orange-700 mb-2">Be remembered as a Partner in Happiness</h4>
            <p className="text-gray-600">
              Join our Legacy Partners in Happiness and be recognized for your commitment to creating lasting 
              change in the lives of individuals with disabilities.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="#start-legacy" 
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
        >
          Explore Your Legacy Options
        </a>
      </div>
    </div>
  );
}