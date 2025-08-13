import React from 'react';
import { Linkedin, Mail, Users } from 'lucide-react';
import { mockData } from '../mock';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-navy-blue/5 to-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-blue mb-6">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get to know the passionate leaders driving innovation in our FinTech community
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.team.map((member) => (
            <div 
              key={member.id}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Users className="w-4 h-4 text-navy-blue" />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-navy-blue group-hover:text-blue-800 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="inline-block bg-gold/20 text-navy-blue px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    {member.role}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-navy-blue/10 hover:bg-navy-blue text-navy-blue hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gold/20 hover:bg-gold text-navy-blue hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-navy-blue mb-6">
            Want to Join Our Leadership Team?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help grow our community and drive innovation in financial technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Express Interest
            </button>
            <button 
              onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gold text-navy-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              See Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;