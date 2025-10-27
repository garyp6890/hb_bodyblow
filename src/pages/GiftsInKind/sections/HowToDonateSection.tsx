import React from 'react';
import { ShoppingCart, Package, Mail, Phone, ArrowRight } from 'lucide-react';

export default function HowToDonateSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">How to Donate</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We've made it easy to contribute items that directly support our programs and services.
          Choose the option that works best for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#FF9900] p-3 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Shop Our Amazon Wish List</h3>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">
              Browse our curated list of needed items and have them shipped directly to us. This 
              is the most convenient way to donate specific items we currently need.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">Items ship directly to Happiness Bag</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">Our list is updated regularly with current needs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">Gift receipts can be included for tax purposes</span>
              </li>
            </ul>
          </div>
          
          <a 
            href="https://www.amazon.com/hz/wishlist/ls/2XVAVFE1OH2SN?ref_=wl_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
          >
            View Our Amazon Wish List
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-500 p-3 rounded-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Donate Items Directly</h3>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">
              If you prefer to purchase items elsewhere or have gently used items to donate, please 
              contact us to arrange a drop-off or pick-up.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">New or gently used items accepted</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">Tax receipt provided upon request</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">Convenient drop-off or pick-up options</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <p className="font-semibold">Contact to arrange donation:</p>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-500" />
              <a 
                href="mailto:donate@happinessbag.org"
                className="text-green-600 hover:underline"
              >
                donate@happinessbag.org
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <a 
                href="tel:812.234.8837"
                className="text-green-600 hover:underline"
              >
                812.234.8837
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}