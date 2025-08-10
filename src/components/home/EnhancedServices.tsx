import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import { serviceImages } from '../../utils/images';
import Tilt from 'react-parallax-tilt';

const EnhancedServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const services = [
    {
      title: 'Anti-Wrinkle Injections',
      subtitle: 'Botox & Dysport',
      description: 'Smooth fine lines and wrinkles with precision treatments that deliver natural-looking results.',
      beforeImage: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop',
      images: [
        serviceImages.botox[0],
        serviceImages.botox[1],
        serviceImages.botox[2],
      ],
      price: 'From $300',
      duration: '15-30 min',
      benefits: ['Instant results', 'No downtime', 'Lasts 3-4 months'],
      color: 'sage',
      icon: '💉',
    },
    {
      title: 'Dermal Fillers',
      subtitle: 'Lip & Face Enhancement',
      description: 'Restore volume and enhance facial contours with premium hyaluronic acid fillers.',
      beforeImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop',
      images: [
        serviceImages.fillers[0],
        serviceImages.fillers[1],
        serviceImages.fillers[2],
      ],
      price: 'From $600',
      duration: '30-45 min',
      benefits: ['Natural results', 'Immediate effect', 'Lasts 6-18 months'],
      color: 'olive',
      icon: '💋',
    },
    {
      title: 'Facial Treatments',
      subtitle: 'HydraFacial & Peels',
      description: 'Rejuvenate your skin with our luxurious treatments for a radiant glow.',
      beforeImage: 'https://images.unsplash.com/photo-1506003094589-53954a26283f?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
      images: [
        serviceImages.facial[0],
        serviceImages.facial[1],
        serviceImages.facial[2],
      ],
      price: 'From $250',
      duration: '45-60 min',
      benefits: ['Deep cleansing', 'Hydration boost', 'Glowing skin'],
      color: 'primary',
      icon: '✨',
    },
    {
      title: 'Skin Boosters',
      subtitle: 'Profhilo & Hydration',
      description: 'Hydrate and revitalize your skin from within for lasting radiance.',
      beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop',
      images: [
        serviceImages.skinBoosters[0],
        serviceImages.skinBoosters[1],
        serviceImages.skinBoosters[2],
      ],
      price: 'From $450',
      duration: '20-30 min',
      benefits: ['Deep hydration', 'Improved texture', 'Long-lasting'],
      color: 'secondary',
      icon: '💧',
    },
    {
      title: 'Acne/Scar Treatments',
      subtitle: 'Clear Skin Solutions',
      description: 'Advanced treatments to clear acne and reduce scarring effectively.',
      beforeImage: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop',
      images: [
        serviceImages.acneTreatment[0],
        serviceImages.acneTreatment[1],
        serviceImages.acneTreatment[2],
      ],
      price: 'From $350',
      duration: '45-60 min',
      benefits: ['Clear skin', 'Scar reduction', 'Even tone'],
      color: 'cream',
      icon: '🌟',
    },
    {
      title: 'Hair Loss Treatments',
      subtitle: 'PRP & Restoration',
      description: 'Restore your confidence with innovative hair growth treatments.',
      beforeImage: 'https://images.unsplash.com/photo-1559599101-f09722fb0911?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=600&fit=crop',
      images: [
        serviceImages.hairLoss[0],
        serviceImages.hairLoss[1],
        serviceImages.hairLoss[2],
      ],
      price: 'From $800',
      duration: '60-90 min',
      benefits: ['Natural growth', 'No surgery', 'Proven results'],
      color: 'sage',
      icon: '🌿',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-sage-50/30 to-olive-50/30 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-olive-200/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-sage-100 to-olive-100 rounded-full text-sage-700 text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(95, 138, 116, 0.2)',
                '0 0 40px rgba(125, 145, 110, 0.3)',
                '0 0 20px rgba(95, 138, 116, 0.2)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ✨ Premium Services & Real Results ✨
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
            Transform Your{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 via-olive-600 to-sage-600 inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Natural Beauty
            </motion.span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the dramatic transformations our clients experience with our expert treatments
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
              onClick={() => setSelectedService(index)}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
              >
                <motion.div
                  className="h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  {/* Before/After Slider */}
                  <div className="relative">
                    <BeforeAfterSlider
                      beforeImage={service.beforeImage}
                      afterImage={service.afterImage}
                      height="h-64"
                    />
                    
                    {/* Floating Price Badge */}
                    <motion.div
                      className="absolute top-4 right-4 z-20"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className={`bg-${service.color}-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg`}>
                        {service.price}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-sage-600 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                      <motion.span 
                        className="text-3xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        {service.icon}
                      </motion.span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Duration with animated icon */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                      {service.duration}
                    </div>

                    {/* Animated Benefits */}
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {service.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className={`w-5 h-5 rounded-full bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 flex items-center justify-center flex-shrink-0`}
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: idx * 0.3,
                            }}
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
                    <motion.button
                      className={`w-full py-3 bg-gradient-to-r from-${service.color}-50 to-${service.color}-100 text-${service.color}-700 rounded-xl font-semibold hover:from-${service.color}-100 hover:to-${service.color}-200 transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details →
                    </motion.button>
                  </div>

                  {/* Image Gallery (hidden by default, shows on hover) */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex gap-2">
                      {service.images.map((img, idx) => (
                        <motion.img
                          key={idx}
                          src={img}
                          alt=""
                          className="w-20 h-20 object-cover rounded-lg"
                          whileHover={{ scale: 1.1, zIndex: 10 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServices;