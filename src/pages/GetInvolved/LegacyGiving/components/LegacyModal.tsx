import React from 'react';
import { X } from 'lucide-react';

interface LegacyModalProps {
  onClose: () => void;
}

const LegacyModal: React.FC<LegacyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="pt-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-700">Start Your Legacy Journey</h2>
          
          <p className="mb-4 text-gray-700">
            Thank you for your interest in creating a lasting impact through our Legacy Giving program. 
            By including our organization in your estate plans, you're ensuring that your values and commitment 
            to supporting individuals with disabilities continue for generations to come.
          </p>
          
          <div className="mb-6 rounded-lg bg-orange-50 p-4">
            <h3 className="mb-2 text-lg font-semibold text-orange-700">Next Steps</h3>
            <ul className="ml-5 list-disc text-gray-700">
              <li className="mb-2">Schedule a confidential consultation with our legacy planning team</li>
              <li className="mb-2">Receive personalized guidance based on your charitable goals</li>
              <li className="mb-2">Learn about potential tax benefits and giving strategies</li>
              <li>Create a legacy plan that aligns with your values and vision</li>
            </ul>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="I'm interested in learning more about..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-md bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Request Information
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Your information will be kept confidential and used only to contact you about legacy giving opportunities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyModal;