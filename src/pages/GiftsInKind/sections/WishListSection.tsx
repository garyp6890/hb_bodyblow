import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function WishListSection() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Shop Our Amazon Wish List</h2>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg">
              Your in-kind donations directly support our mission by providing essential supplies and equipment 
              for our programs. Every item you contribute helps us create a more inclusive and supportive 
              environment for individuals with disabilities.
            </p>
            
            <a 
              href="https://www.amazon.com/hz/wishlist/ls/2XVAVFE1OH2SN?ref_=wl_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-2 hover:scale-105"
            >
              View Our Amazon Wish List
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="mt-6 text-sm text-gray-500">
              When you shop our Amazon Wish List, items are shipped directly to Happiness Bag, 
              making your donation process quick and convenient.
            </p>
          </div>
          
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?auto=format&fit=crop&q=80"
              alt="Amazon Wish List Shopping"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}