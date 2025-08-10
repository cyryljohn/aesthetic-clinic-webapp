import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { serviceImages } from '../../utils/images';
import calendlyService from '../../services/calendlyService';

const LightHero: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  const handleBookingClick = () => {
    calendlyService.openPopupWidget({
      text: 'Book Your Free Consultation',
      color: '#4b93c5',
    });
  };

  const floatingImages = [
    { src: serviceImages.botox[0], delay: 0, x: -200, y: -100 },
    { src: serviceImages.fillers[0], delay: 0.5, x: 200, y: -50 },
    { src: serviceImages.facial[0], delay: 1, x: -150, y: 100 },
    { src: serviceImages.skinBoosters[0], delay: 1.5, x: 180, y: 80 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Soft animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cream-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Decorative dots pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #4b93c5 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-primary-700 text-sm mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Now Open in Toronto
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              <span className="block">Reveal Your</span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Natural Beauty
              </motion.span>
            </h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Experience the perfect blend of artistry and science with Toronto's premier 
              aesthetic clinic. Our expert team delivers personalized treatments that enhance 
              your natural beauty and boost your confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" size="large" onClick={handleBookingClick}>
                  <span className="flex items-center gap-2">
                    Book Free Consultation
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="px-8 py-4 border-2 border-primary-200 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200 shadow-sm">
                  View Our Services
                </button>
              </motion.div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { value: '500+', label: 'Happy Clients', delay: 1.7 },
                { value: '15+', label: 'Expert Specialists', delay: 1.9 },
                { value: '4.9★', label: 'Google Rating', delay: 2.1 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay }}
                  className="text-center"
                >
                  <motion.p
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: stat.delay }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Elegant Image Gallery */}
          <motion.div
            className="relative h-[600px] hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Central Image with soft shadow */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 z-10"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src={serviceImages.hero} 
                  alt="Beautiful result" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Floating Images with white frames */}
            {floatingImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute w-32 h-40 rounded-2xl overflow-hidden shadow-xl bg-white p-1.5"
                style={{
                  top: '50%',
                  left: '50%',
                  x: img.x,
                  y: img.y,
                }}
                animate={{
                  y: [img.y, img.y - 20, img.y],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: img.delay,
                }}
              >
                <img 
                  src={img.src} 
                  alt="" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            ))}

            {/* Decorative circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.circle
                cx="50%"
                cy="50%"
                r="150"
                fill="none"
                stroke="url(#gradient-light)"
                strokeWidth="0.5"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="200"
                fill="none"
                stroke="url(#gradient-light)"
                strokeWidth="0.5"
                opacity="0.15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4b93c5" />
                  <stop offset="100%" stopColor="#00848b" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LightHero;