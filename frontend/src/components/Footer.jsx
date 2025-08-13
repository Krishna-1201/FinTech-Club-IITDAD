import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Club Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">
                IIT Delhi Abu Dhabi FinTech Club
              </h3>
              <p className="text-blue-200 leading-relaxed max-w-md">
                Pioneering the future of financial technology through innovation, collaboration, and hands-on learning experiences for students at IIT Delhi Abu Dhabi.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-blue-200">
                <MapPin className="w-5 h-5 mr-3 text-gold" />
                <span>IIT Delhi Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Mail className="w-5 h-5 mr-3 text-gold" />
                <span>contact@iitdad-fintech.com</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Phone className="w-5 h-5 mr-3 text-gold" />
                <span>+971 (0) 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-gold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-blue-200 hover:text-gold transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-blue-200 hover:text-gold transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="block text-blue-200 hover:text-gold transition-colors duration-200"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-blue-200 hover:text-gold transition-colors duration-200"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-blue-200 hover:text-gold transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-bold text-gold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <p className="text-blue-200 text-sm">
                Follow us on social media for the latest updates and announcements.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-gold rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-gold rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-gold rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © 2024 IIT Delhi Abu Dhabi FinTech Club. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-gold transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-gold transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;