import React from 'react';

interface LegacyHeroSectionProps {
  openModal: () => void;
}

const LegacyHeroSection: React.FC<LegacyHeroSectionProps> = ({ openModal }) => {
  return (
    <section className="mb-20">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              Create Your Legacy of Impact
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Your legacy gift can transform the lives of individuals with disabilities for generations to come. 
              Discover how thoughtful estate planning can create lasting impact while securing your family's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openModal}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Start Your Legacy Plan
              </button>
              <a 
                href="#contact" 
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Speak With an Advisor
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1560523159-6b681a1fc295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Legacy giving impact" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyHeroSection;