import React from 'react';

export default function MobileContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-yellow-500 py-1 px-4 md:hidden">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="tel:812.234.8837"
          className="text-xs font-medium text-black hover:text-gray-800 transition-colors"
        >
          p: 812.234.8837
        </a>
        <div className="flex items-center gap-4">
          <a 
            href="#updates"
            className="text-xs font-medium text-black hover:text-gray-800 transition-colors"
          >
            Receive Email Updates
          </a>
          <a 
            href="#donate"
            className="text-xs font-medium text-black hover:text-gray-800 transition-colors"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}