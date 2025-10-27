import React from 'react';
import { FileText, ArrowRight, Calendar, Phone, Users } from 'lucide-react';

export default function StartYourLegacy() {
  return (
    <div id="start-legacy" className="max-w-6xl mx-auto mb-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Legacy Today</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Creating your legacy is easier than you might think. Here's how to begin your journey
          toward making a lasting impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Steps Section */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
              <span className="text-orange-600 font-semibold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Connect with Us</h3>
              <p className="text-gray-600">
                Schedule a confidential conversation with our legacy giving team to discuss your
                philanthropic goals and vision.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
              <span className="text-orange-600 font-semibold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Explore Options</h3>
              <p className="text-gray-600">
                Learn about different giving vehicles and which might be the best fit for your
                financial situation and charitable objectives.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
              <span className="text-orange-600 font-semibold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Consult Your Advisors</h3>
              <p className="text-gray-600">
                Speak with your financial advisor, attorney, or tax professional about
                integrating charitable giving into your estate plan.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
              <span className="text-orange-600 font-semibold">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Create Your Legacy</h3>
              <p className="text-gray-600">
                Formalize your intentions through the appropriate legal documents and let us know
                about your plans so we can welcome you to our Legacy Partners in Happiness.
              </p>
            </div>
          </div>
        </div>
        
        {/* Ways to Get Started Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 border-b pb-3 border-orange-200">Ways to Get Started</h3>
          
          <div className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5">
            <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Schedule a Conversation</h4>
              <p className="text-gray-600 text-sm mb-2">
                Set up a time to discuss your legacy goals with our team
              </p>
              <button className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center gap-1">
                Book a Meeting <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5">
            <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Request Information</h4>
              <p className="text-gray-600 text-sm mb-2">
                Receive our legacy planning package with sample language for your will
              </p>
              <button className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center gap-1">
                Request Package <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5">
            <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
              <Phone className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Call Our Team</h4>
              <p className="text-gray-600 text-sm mb-2">
                Speak directly with our legacy giving specialist
              </p>
              <a 
                href="tel:812.234.8837"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center gap-1"
              >
                812.234.8837 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5 mt-6">
            {/* Schedule a Tour CTA Tile */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5 h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Schedule a Happiness Tour</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  See firsthand how your donation will help our friends. Tours can be conducted virtually or in person at our facility.
                </p>
                <button className="mt-auto bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium inline-flex items-center justify-center gap-1">
                  Schedule a Tour <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Legal Information Tile */}
            <div className="bg-orange-600 rounded-lg p-5 text-white h-full">
              <h4 className="font-medium mb-3">Legal Information</h4>
              <p className="text-sm mb-2">
                When including Happiness Bag in your will or trust, please use our legal name and tax ID:
              </p>
              <div className="bg-white/10 rounded-lg p-3 mb-3 text-sm">
                <p className="font-medium">Happiness Bag, Inc.</p>
                <p>3833 Union Road</p>
                <p>Terre Haute, IN 47805</p>
                <p>Tax ID: 35-1109914</p>
              </div>
              <p className="text-xs text-white/80">
                The information provided is not intended as legal or tax advice. Please consult with 
                professional advisors concerning the financial, legal and tax implications of your charitable gift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}