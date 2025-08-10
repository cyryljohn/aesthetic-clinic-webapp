import React from 'react';
import AnimatedHero from '../components/home/AnimatedHero';
import AnimatedServices from '../components/home/AnimatedServices';
import AnimatedFeatures from '../components/home/AnimatedFeatures';
import AnimatedTestimonials from '../components/home/AnimatedTestimonials';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <AnimatedHero />
      <AnimatedServices />
      <AnimatedFeatures />
      <AnimatedTestimonials />
      <CTA />
    </>
  );
};

export default HomePage;