import React from 'react';
import { BookOpen, Users, Lightbulb, Award, Target, Eye } from 'lucide-react';
import { mockData } from '../mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
            About Our Club
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the next generation of financial innovators at IIT Delhi Abu Dhabi
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-navy-blue to-blue-900 text-white p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-gold mr-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              {mockData.about.mission}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold to-yellow-500 text-navy-blue p-8 rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-navy-blue mr-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-navy-blue/80 text-lg leading-relaxed">
              {mockData.about.vision}
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-blue text-center mb-12">
            What We Offer
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.about.offerings.map((offering, index) => {
              const icons = [BookOpen, Users, Lightbulb, Award, Target];
              const IconComponent = icons[index % icons.length];
              
              return (
                <div 
                  key={index}
                  className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-gold/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-navy-blue" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-800 font-medium leading-relaxed group-hover:text-navy-blue transition-colors duration-300">
                        {offering}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-navy-blue/5 to-gold/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-navy-blue mb-6">
            Ready to Shape the Future of Finance?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join a community of passionate students exploring cutting-edge financial technologies and building tomorrow's solutions today.
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-navy-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;