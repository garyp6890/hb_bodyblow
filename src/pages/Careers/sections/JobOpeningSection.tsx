import React from 'react';

export default function JobOpeningSection() {
  return (
    <div className="bg-yellow-500 rounded-2xl p-6 md:p-8 text-gray-900 shadow-xl relative overflow-hidden mb-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Now Hiring: Residential Direct Support Professionals</h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-center">Happiness Bag is seeking qualified & caring individuals to join our team!</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white">
              <p className="font-semibold">Full-time, part-time, evenings, overnight and weekend shifts available</p>
            </div>
            
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white">
              <p className="font-semibold">Competitive base starting wage of $16 per hour</p>
              <p className="text-sm mt-2 text-blue-100">Potential increase after 60 days</p>
            </div>
            
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white">
              <p className="font-semibold">Wellness clinic option for FTE</p>
            </div>
            
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white">
              <p className="font-semibold">Flexibility with class schedules</p>
            </div>
            
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white md:col-span-2">
              <p className="font-semibold">Tuition assistance coming soon for ISU students</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white">
              <p className="font-semibold">Must be 18 years of age, with a valid driver's license</p>
            </div>
            
            <div className="bg-primary-blue rounded-xl p-4 md:p-6 shadow-lg text-center text-white">
              <p className="font-semibold">Able to pass criminal background & drug screening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}