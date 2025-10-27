import React from 'react';
import { BookOpen, Building2, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryOverview() {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-8">Giving Categories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
          <div className="h-1 bg-orange-500 w-full"></div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Legacy Giving</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Create a lasting impact through estate planning, charitable annuities, and planned giving options that 
              secure your legacy while supporting our mission for generations to come.
            </p>
            <Link 
              to="/get-involved/legacy-giving"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
            >
              Explore Legacy Giving
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
          <div className="h-1 bg-blue-500 w-full"></div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Corporate Giving</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Partner your business with Happiness Bag through matching gifts, volunteer grants, sponsorships, 
              and strategic philanthropy that benefits both the community and your company.
            </p>
            <a 
              href="#corporate"
              onClick={() => document.querySelector('button[data-category="corporate"]')?.click()}
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
            >
              Explore Corporate Giving
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
          <div className="h-1 bg-green-500 w-full"></div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Gifts in Kind</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Support our programs directly with non-cash donations of goods, services, and expertise that 
              meet immediate needs and enhance the quality of our programs.
            </p>
            <Link 
              to="/gifts-in-kind"
              className="inline-flex items-center text-green-500 hover:text-green-600 font-medium"
            >
              Explore Gifts in Kind
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}