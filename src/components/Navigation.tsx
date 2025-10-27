import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../utils/constants';

interface NavigationProps {
  isVisible: boolean;
  isMobileMenuOpen: boolean;
  className?: string;
}

export default function Navigation({ isVisible, isMobileMenuOpen, className = '' }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav
      className={`fixed top-40 left-0 right-0 z-40 bg-gray-900/75 backdrop-blur-sm transform transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${className} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="container mx-auto">
        <div className="hidden md:flex items-center justify-center h-20">
          <div className="flex items-center justify-center space-x-16">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className="relative h-20 flex items-center"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Menu Label */}
                <div
                  className={`text-base font-medium flex items-center gap-1.5 transition-colors duration-200 no-underline ${
                    hoveredItem === item.label ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  } whitespace-nowrap cursor-pointer select-none`}
                  onClick={() => {
                    if (item.href) {
                      window.location.href = item.href;
                    }
                  }}
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        hoveredItem === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.items && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-gray-900/95 backdrop-blur-sm rounded-b-md shadow-lg overflow-hidden transition-all duration-200 z-50 ${
                      hoveredItem === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="h-1 bg-yellow-500 w-full" />
                    {item.items.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href || '#'}
                        className="block px-6 py-3 text-sm text-white hover:text-yellow-500 whitespace-nowrap transition-colors duration-200 hover:bg-gray-800/50 no-underline cursor-pointer"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}