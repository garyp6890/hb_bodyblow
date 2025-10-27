import React from 'react';

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img
            src="https://i.imgur.com/W2qevzJ.png"
            alt="Recreational Programs Mascot"
            className="w-32 h-32 object-contain"
          />
        </div>
        <p className="text-xl text-black mb-8">
          Happiness Bag's Recreational Programs are the heart of our mission, providing individuals 
          with intellectual and developmental disabilities opportunities for fun, fitness, and 
          friendship. As the only recreational facility of its kind in the Wabash Valley, these 
          programs are tailored to meet diverse needs while fostering inclusion and personal growth.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-500/10 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-orange-600 mb-2">Inclusive Environment</h3>
          <p className="text-gray-600">Every activity is tailored to accommodate diverse abilities</p>
        </div>
        <div className="bg-orange-500/10 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-orange-600 mb-2">Community Connections</h3>
          <p className="text-gray-600">Build friendships and foster a sense of belonging</p>
        </div>
        <div className="bg-orange-500/10 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-orange-600 mb-2">Health & Wellness</h3>
          <p className="text-gray-600">Stay active, improve coordination, and enjoy meaningful engagement</p>
        </div>
        <div className="md:col-span-3 text-center mt-4">
          <p className="text-lg text-orange-500">
            Whether you're looking to stay active, try something new, or simply enjoy time with friends, 
            the Happiness Bag recreational programs make it possible in a judgment-free and supportive environment.
          </p>
        </div>
      </div>
    </div>
  );
}