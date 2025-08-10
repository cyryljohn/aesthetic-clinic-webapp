import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      category: 'Injectable Treatments',
      services: [
        {
          name: 'Botox® / Dysport®',
          description: 'Smooth wrinkles and prevent new lines from forming with neuromodulator injections.',
          duration: '15-30 min',
          price: 'From $300',
        },
        {
          name: 'Dermal Fillers',
          description: 'Restore volume, enhance lips, and contour facial features with hyaluronic acid fillers.',
          duration: '30-45 min',
          price: 'From $600',
        },
        {
          name: 'Skin Boosters',
          description: 'Improve skin quality, hydration, and elasticity from within.',
          duration: '20-30 min',
          price: 'From $450',
        },
      ],
    },
    {
      category: 'Skin Treatments',
      services: [
        {
          name: 'HydraFacial',
          description: 'Deep cleanse, extract, and hydrate skin with this advanced facial treatment.',
          duration: '45-60 min',
          price: 'From $250',
        },
        {
          name: 'Chemical Peels',
          description: 'Improve skin texture, tone, and clarity with medical-grade peels.',
          duration: '30-45 min',
          price: 'From $200',
        },
        {
          name: 'Microneedling',
          description: 'Stimulate collagen production for smoother, firmer skin.',
          duration: '45-60 min',
          price: 'From $350',
        },
      ],
    },
    {
      category: 'Hair Restoration',
      services: [
        {
          name: 'PRP Hair Treatment',
          description: 'Stimulate hair growth and thickness with platelet-rich plasma therapy.',
          duration: '60-90 min',
          price: 'From $800',
        },
        {
          name: 'Hair Loss Consultation',
          description: 'Comprehensive assessment and personalized treatment plan for hair loss.',
          duration: '30 min',
          price: 'Free',
        },
      ],
    },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container-max section-padding">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hoverable className="h-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {service.duration}
                      </span>
                      <span className="font-semibold text-primary-600">
                        {service.price}
                      </span>
                    </div>
                    <Button variant="outline" size="small" fullWidth>
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Not sure which treatment is right for you?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book a free consultation with our experts to discuss your goals and create a personalized treatment plan.
          </p>
          <Button variant="primary" size="large">
            Book Free Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;