import React from 'react';
import { Calendar, Clock, ArrowRight, Lightbulb } from 'lucide-react';
import { mockData } from '../mock';

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
            Events & Activities
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exciting journey and upcoming opportunities in the world of financial technology
          </p>
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Calendar className="w-6 h-6 text-gold mr-3" />
            <h3 className="text-3xl font-bold text-navy-blue">Recent Highlights</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.pastEvents.map((event) => (
              <div 
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center text-gold font-semibold group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Lightbulb className="w-6 h-6 text-gold mr-3" />
            <h3 className="text-3xl font-bold text-navy-blue">Coming Soon</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="group bg-white border-2 border-dashed border-gold/30 rounded-2xl p-8 hover:border-gold hover:bg-gold/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-2xl group-hover:bg-gold/30 transition-colors duration-300">
                    <Clock className="w-8 h-8 text-navy-blue" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-navy-blue group-hover:text-blue-800 transition-colors duration-300">
                    {event.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="inline-block bg-navy-blue/10 text-navy-blue px-4 py-2 rounded-full text-sm font-semibold">
                    {event.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interest CTA */}
        <div className="mt-16 text-center bg-navy-blue rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">
            Have Ideas for Our Next Event?
          </h3>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            We're always looking for fresh perspectives and innovative event ideas from our community members.
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-navy-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Share Your Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;