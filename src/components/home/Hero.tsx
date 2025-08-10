import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Reveal Your Natural{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Beauty
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to Toronto's premier aesthetic clinic, where luxury meets expertise. 
              Our professional team delivers personalized treatments to enhance your natural beauty 
              and boost your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large">
                Book Consultation
              </Button>
              <Button variant="outline" size="large">
                View Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary-600">500+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">15+</p>
                <p className="text-gray-600">Expert Specialists</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">4.9★</p>
                <p className="text-gray-600">Google Rating</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-cream-100 to-sage-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl">
                  <div className="flex items-center justify-center h-[400px]">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Premium Beauty Care</p>
                      <p className="text-sm text-gray-500 mt-2">Certified & Experienced Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;