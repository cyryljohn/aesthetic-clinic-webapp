import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Features from '../components/home/Features';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <CTA />
    </>
  );
};

export default HomePage;