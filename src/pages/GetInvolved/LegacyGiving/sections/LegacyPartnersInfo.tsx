import React from 'react';
import { Heart, Star, Shield } from 'lucide-react';

export default function LegacyPartnersInfo() {
  return (
    <div id="legacy-partners" className="max-w-4xl mx-auto mb-20">
      <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-4xl font-bold mb-6">Legacy Partners in Happiness</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Our Legacy Partners in Happiness are an extraordinary group of visionary donors who have 
            made the thoughtful decision to include Happiness Bag in their estate plans.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-white font-semibold mb-2">Recognition</h3>
              <p className="text-white/80 text-sm">
                Partners are recognized in our annual report, website, and at special events
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-white font-semibold mb-2">Special Events</h3>
              <p className="text-white/80 text-sm">
                Exclusive invitations to special events and milestone celebrations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-white font-semibold mb-2">Legacy Impact</h3>
              <p className="text-white/80 text-sm">
                Regular updates on how your future gift will make a difference
              </p>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Membership Benefits</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="text-orange-200 text-xl">•</span>
                <span>Personalized estate planning guidance from our team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-200 text-xl">•</span>
                <span>Invitation to annual Legacy Partners appreciation dinner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-200 text-xl">•</span>
                <span>Opportunity to designate your gift to specific programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-200 text-xl">•</span>
                <span>Regular updates on the impact of legacy gifts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-200 text-xl">•</span>
                <span>Commemorative recognition in our facility</span>
              </li>
            </ul>
          </div>
          
          <div className="text-sm text-white/80">
            <p>
              Becoming a Legacy Partner does not create a binding obligation and can be modified at any time.
              All information shared is kept strictly confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}