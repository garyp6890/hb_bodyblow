import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const ScrollHeader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transform transition-transform duration-300 md:block hidden ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-48">
          <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/">
              <img
                src="https://i.imgur.com/UWaFG9K.png"
                alt="Happiness Bag Logo"
                className="h-64 w-auto cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <Link to="/programs" className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black px-8 py-3 rounded-full font-medium transition-all cursor-pointer">
              Programs
            </Link>
            <Link to="/careers" className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black px-8 py-3 rounded-full font-medium transition-all cursor-pointer">
              Careers
            </Link>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all">
              Donate
            </button>
            <button className="group relative p-3 hover:bg-gray-100 hover:scale-105 rounded-full transition-all ml-1">
              <Search className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-900 group-hover:w-1/2 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHeader;