import React from 'react';
import LightHero from '../components/home/LightHero';
import EnhancedServices from '../components/home/EnhancedServices';
import LightFeatures from '../components/home/LightFeatures';
import LightTestimonials from '../components/home/LightTestimonials';
import LightCTA from '../components/home/LightCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <LightHero />
      <EnhancedServices />
      <LightFeatures />
      <LightTestimonials />
      <LightCTA />
    </>
  );
};

export default HomePage;