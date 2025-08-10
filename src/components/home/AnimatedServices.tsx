import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxCard } from '../ui/ParallaxCard';
import { SpotlightCard } from '../ui/SpotlightCard';
import { serviceImages } from '../../utils/images';
import { Link } from 'react-router-dom';

const AnimatedServices: React.FC = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const services = [
    {
      title: 'Anti-Wrinkle Injections',
      description: 'Smooth fine lines and wrinkles with precision Botox & Dysport treatments.',
      image: serviceImages.botox[0],
      price: 'From $300',
      duration: '15-30 min',
      benefits: ['Instant results', 'No downtime', 'Lasts 3-4 months'],
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Dermal Fillers',
      description: 'Restore volume and enhance facial contours with premium hyaluronic acid fillers.',
      image: serviceImages.fillers[0],
      price: 'From $600',
      duration: '30-45 min',
      benefits: ['Natural results', 'Immediate effect', 'Lasts 6-18 months'],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      title: 'Facial Treatments',
      description: 'Rejuvenate your skin with our luxurious HydraFacial and chemical peels.',
      image: serviceImages.facial[0],
      price: 'From $250',
      duration: '45-60 min',
      benefits: ['Deep cleansing', 'Hydration boost', 'Glowing skin'],
      gradient: 'from-teal-600 to-cyan-600',
    },
    {
      title: 'Skin Boosters',
      description: 'Hydrate and revitalize your skin from within for a natural, healthy glow.',
      image: serviceImages.skinBoosters[0],
      price: 'From $450',
      duration: '20-30 min',
      benefits: ['Deep hydration', 'Improved texture', 'Long-lasting'],
      gradient: 'from-emerald-600 to-green-600',
    },
    {
      title: 'Acne/Scar Treatments',
      description: 'Advanced solutions to treat acne and reduce the appearance of scars.',
      image: serviceImages.acneTreatment[0],
      price: 'From $350',
      duration: '45-60 min',
      benefits: ['Clear skin', 'Scar reduction', 'Even tone'],
      gradient: 'from-orange-600 to-amber-600',
    },
    {
      title: 'Hair Loss Treatments',
      description: 'Restore confidence with innovative PRP hair restoration treatments.',
      image: serviceImages.hairLoss[0],
      price: 'From $800',
      duration: '60-90 min',
      benefits: ['Natural growth', 'No surgery', 'Proven results'],
      gradient: 'from-indigo-600 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative bg-gray-950 py-20 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b93c5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 backdrop-blur-sm rounded-full text-primary-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Premium Services
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Natural Beauty</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of science and artistry with our comprehensive range of aesthetic treatments
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <ParallaxCard 
                image={service.image}
                className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-600/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Service Title & Price */}
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} text-white`}>
                      {service.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 pt-4 border-t border-gray-800">
                    {service.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        >
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.span>
                        {benefit}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="pt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/services"
                      className="block w-full text-center py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300"
                    >
                      Learn More →
                    </Link>
                  </motion.div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SpotlightCard className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Not sure which treatment is right for you?
            </h3>
            <p className="text-gray-400 mb-6">
              Book a free consultation with our experts to discuss your goals and create a personalized treatment plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300"
            >
              Book Free Consultation
            </motion.button>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedServices;