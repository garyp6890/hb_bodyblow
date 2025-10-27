import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../utils/constants';

interface MobileMenuProps {
  isVisible: boolean;
  isOpen: boolean;
  onItemClick: () => void;
}

export default function MobileMenu({ isVisible, isOpen, onItemClick }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleDropdown = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div
      className={`md:hidden fixed top-0 left-0 w-64 h-screen bg-gray-900 shadow-lg transition-all duration-300 z-[70] transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col pt-32 h-full overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            <div 
              className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              onClick={() => {
                if (item.items) {
                  toggleDropdown(item.label);
                } else if (item.href) {
                  onItemClick();
                }
              }}
            >
              {item.href ? (
                <Link
                  to={item.href}
                  className="flex-1"
                  onClick={onItemClick}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="flex-1">{item.label}</span>
              )}
              {item.items && (
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedItems.includes(item.label) ? 'rotate-180' : ''
                  }`}
                />
              )}
            </div>
            {item.items && (
              <div 
                className={`overflow-hidden transition-all duration-200 bg-gray-900 ${
                  expandedItems.includes(item.label) ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="h-1 bg-yellow-500 w-full" />
                {item.items.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.label}
                    to={dropdownItem.href}
                    className="block px-8 py-3 text-white hover:text-yellow-500 text-sm transition-colors cursor-pointer"
                    onClick={onItemClick}
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
  );
}