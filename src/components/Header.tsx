import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ScrollHeader from './ScrollHeader';
import MobileMenu from './MobileMenu';
import MobileContactBar from './MobileContactBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MobileContactBar />
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transform transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`} style={{ top: '28px' }}>
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-36">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Static Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <Link 
                  to="/"
                  className="block hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="https://i.imgur.com/UWaFG9K.png"
                    alt="Happiness Bag Logo" 
                    className="h-52 w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* Invisible spacer to maintain layout */}
            <div className="w-8 md:w-0"></div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <Navigation 
        isVisible={!isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen}
        className={`transform transition-transform duration-300 ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Scroll Header */}
      <ScrollHeader isVisible={isScrolled} />

      {/* Mobile Menu */}
      <MobileMenu 
        isVisible={!isScrolled}
        isOpen={isMobileMenuOpen}
        onItemClick={() => setIsMobileMenuOpen(false)} />
    </>
  );
}