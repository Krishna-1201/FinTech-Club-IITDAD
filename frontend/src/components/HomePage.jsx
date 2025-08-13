import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EventsSection from './EventsSection';
import ContactSection from './ContactSection';
import TeamSection from './TeamSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ContactSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default HomePage;