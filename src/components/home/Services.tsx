import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Anti-Wrinkle Injections',
      description: 'Smooth fine lines and wrinkles with our precision treatments for a youthful appearance.',
      icon: '💉',
      color: 'from-primary-400 to-primary-600',
    },
    {
      title: 'Dermal Fillers',
      description: 'Restore volume and enhance facial contours with our premium filler treatments.',
      icon: '✨',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      title: 'Facial Treatments',
      description: 'Rejuvenate your skin with our luxurious facial treatments tailored to your needs.',
      icon: '🌟',
      color: 'from-sage-400 to-sage-600',
    },
    {
      title: 'Skin Boosters',
      description: 'Hydrate and revitalize your skin from within for a natural, healthy glow.',
      icon: '💧',
      color: 'from-primary-400 to-secondary-400',
    },
    {
      title: 'Acne/Scar Treatments',
      description: 'Advanced solutions to treat acne and reduce the appearance of scars effectively.',
      icon: '🎯',
      color: 'from-cream-400 to-cream-600',
    },
    {
      title: 'Hair Loss Treatments',
      description: 'Restore confidence with our innovative hair restoration and growth treatments.',
      icon: '🌿',
      color: 'from-sage-500 to-secondary-500',
    },
  ];
  
  return (
    <section className="bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of science and artistry with our comprehensive range of aesthetic treatments
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hoverable className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                  <button className="mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors text-left">
                    Learn More →
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;