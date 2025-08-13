import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-navy-blue">
              IIT Delhi Abu Dhabi
              <span className="block text-sm font-medium text-gold">FinTech Club</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-navy-blue transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-navy-blue transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-navy-blue transition-colors duration-200 font-medium"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-navy-blue transition-colors duration-200 font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-navy-blue px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-blue transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-gold text-navy-blue rounded-md font-semibold hover:bg-yellow-400 transition-all duration-200 mt-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;