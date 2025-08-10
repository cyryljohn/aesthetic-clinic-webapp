import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { serviceImages } from '../../utils/images';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const LightServices: React.FC = () => {
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
      color: 'primary',
    },
    {
      title: 'Dermal Fillers',
      description: 'Restore volume and enhance facial contours with premium hyaluronic acid fillers.',
      image: serviceImages.fillers[0],
      price: 'From $600',
      duration: '30-45 min',
      benefits: ['Natural results', 'Immediate effect', 'Lasts 6-18 months'],
      color: 'secondary',
    },
    {
      title: 'Facial Treatments',
      description: 'Rejuvenate your skin with our luxurious HydraFacial and chemical peels.',
      image: serviceImages.facial[0],
      price: 'From $250',
      duration: '45-60 min',
      benefits: ['Deep cleansing', 'Hydration boost', 'Glowing skin'],
      color: 'sage',
    },
    {
      title: 'Skin Boosters',
      description: 'Hydrate and revitalize your skin from within for a natural, healthy glow.',
      image: serviceImages.skinBoosters[0],
      price: 'From $450',
      duration: '20-30 min',
      benefits: ['Deep hydration', 'Improved texture', 'Long-lasting'],
      color: 'cream',
    },
    {
      title: 'Acne/Scar Treatments',
      description: 'Advanced solutions to treat acne and reduce the appearance of scars.',
      image: serviceImages.acneTreatment[0],
      price: 'From $350',
      duration: '45-60 min',
      benefits: ['Clear skin', 'Scar reduction', 'Even tone'],
      color: 'primary',
    },
    {
      title: 'Hair Loss Treatments',
      description: 'Restore confidence with innovative PRP hair restoration treatments.',
      image: serviceImages.hairLoss[0],
      price: 'From $800',
      duration: '60-90 min',
      benefits: ['Natural growth', 'No surgery', 'Proven results'],
      color: 'secondary',
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
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Subtle pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #4b93c5 0, #4b93c5 1px, transparent 1px, transparent 15px)`,
        }}
      />

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-primary-700 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Premium Services
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Natural Beauty</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
              >
                <motion.div
                  className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {service.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <span className={`w-5 h-5 rounded-full bg-${service.color}-100 flex items-center justify-center flex-shrink-0`}>
                            <svg className={`w-3 h-3 text-${service.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {benefit}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to="/services"
                        className="block w-full text-center py-3 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-lg hover:from-primary-100 hover:to-secondary-100 transition-all duration-300 font-medium"
                      >
                        Learn More →
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </Tilt>
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
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Not sure which treatment is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation with our experts to discuss your goals and create a personalized treatment plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LightServices;