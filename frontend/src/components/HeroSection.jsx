import React from 'react';
import { ArrowRight, TrendingUp, Zap, Users } from 'lucide-react';
import { mockData } from '../mock';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gold/20 text-navy-blue rounded-full text-sm font-medium animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                New Club Alert!
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-navy-blue leading-tight">
                {mockData.hero.title}
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-gold">
                {mockData.hero.tagline}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {mockData.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group bg-navy-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-navy-blue text-navy-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-navy-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-blue">4</div>
                <div className="text-sm text-gray-600">Core Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-blue">∞</div>
                <div className="text-sm text-gray-600">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-blue">2024</div>
                <div className="text-sm text-gray-600">Year Founded</div>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative Elements */}
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="absolute top-20 right-0 bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-bold text-navy-blue">Market Analysis</h3>
                <p className="text-gray-600 text-sm">Real-time insights</p>
              </div>
              
              <div className="absolute top-64 left-0 bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Users className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-bold text-navy-blue">Networking</h3>
                <p className="text-gray-600 text-sm">Connect & collaborate</p>
              </div>
              
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-navy-blue text-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">FinTech</div>
                  <p className="text-blue-200">Future is Now</p>
                </div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-navy-blue to-gold rounded-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;