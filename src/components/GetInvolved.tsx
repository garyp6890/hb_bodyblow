import React, { useState } from 'react';
import { Heart, Users, Building2, Play, X } from 'lucide-react';

export default function GetInvolved() {
  const [showVideo, setShowVideo] = useState(false);

  const donationTiers = [
    {
      amount: 50,
      description: 'can provide art supplies for a week of creative expression'
    },
    {
      amount: 100,
      description: "can sponsor a friend's participation in a field trip"
    },
    {
      amount: 500,
      description: 'can help purchase new adaptive equipment'
    }
  ];

  return (
    <div>
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-center mb-16 text-white">Get Involved</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-800 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold">Donate</h3>
              </div>
              <p className="text-white mb-6">Your contribution makes a real difference:</p>
              <div className="space-y-4 mb-8">
                {donationTiers.map((tier) => (
                  <div key={tier.amount} className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold">${tier.amount}</span>
                    <span className="text-white">{tier.description}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black px-6 py-3 rounded-full font-semibold transition-all">
                Donate Now
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold">Volunteer</h3>
              </div>
              <p className="text-white mb-6">
                Share your time and talents to make a difference in the lives of our friends. 
                Opportunities include assisting with programs, special events, and administrative tasks.
              </p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black px-6 py-3 rounded-full font-semibold transition-all">
                Become a Volunteer
              </button>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold">Corporate Sponsorships</h3>
              </div>
              <p className="text-white mb-6">
                Partner with us to make a lasting impact. Your support will help us provide 
                essential services and create a more inclusive community.
              </p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black px-6 py-3 rounded-full font-semibold transition-all">
                Become a Sponsor
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Friends Give Back</h3>
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="bg-yellow-500 hover:bg-yellow-600 hover:scale-110 text-black p-4 rounded-full transition-all z-10"
                  >
                    <Play className="w-8 h-8" />
                  </button>
                </div>
                <img
                  src="https://img.youtube.com/vi/yPIZAB1HsfA/maxresdefault.jpg"
                  alt="Teddy Bear Picnic"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <p className="text-white mb-6">
                Our friends partnered with Senior Ministries to bring joy to local dementia 
                and Alzheimer's units through the Teddy Bear Picnic initiative.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Gratitude Section */}
      <div className="bg-white w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xl text-gray-900 mb-6">
              We are deeply grateful for the individuals, businesses, and organizations 
              that partner with Happiness Bag to make our mission possible.
            </p>
            <a 
              href="/partners"
              className="text-yellow-500 hover:text-yellow-600 hover:scale-105 font-semibold inline-flex items-center gap-2 transition-all text-lg"
            >
              See our community partners
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowVideo(false);
          }}
        >
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowVideo(false)}
                className="p-1 hover:bg-gray-100 hover:scale-110 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/yPIZAB1HsfA?autoplay=1"
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Teddy Bear Picnic Initiative"
              ></iframe>
            </div>
          </div>
        </div>
      )}
     </div>
  );
}