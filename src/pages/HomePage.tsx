import React from 'react';
import LightHero from '../components/home/LightHero';
import LightServices from '../components/home/LightServices';
import LightFeatures from '../components/home/LightFeatures';
import LightTestimonials from '../components/home/LightTestimonials';
import LightCTA from '../components/home/LightCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <LightHero />
      <LightServices />
      <LightFeatures />
      <LightTestimonials />
      <LightCTA />
    </>
  );
};

export default HomePage;