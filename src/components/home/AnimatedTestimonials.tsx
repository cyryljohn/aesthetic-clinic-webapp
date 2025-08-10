import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceImages } from '../../utils/images';

const AnimatedTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah M.',
      treatment: 'Botox & Fillers',
      rating: 5,
      text: 'Absolutely amazing experience! The team is professional, caring, and the results exceeded my expectations. I look refreshed and natural.',
      image: serviceImages.results[0],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Jessica L.',
      treatment: 'HydraFacial',
      rating: 5,
      text: 'The best facial I\'ve ever had! My skin has never looked better. The clinic is beautiful and the staff makes you feel so comfortable.',
      image: serviceImages.results[1],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Michael R.',
      treatment: 'Hair Restoration',
      rating: 5,
      text: 'Life-changing results! The PRP treatment really works. I\'m seeing new hair growth and my confidence is back. Highly recommend!',
      image: serviceImages.results[2],
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            whileHover={{ scale: 1.05 }}
          >
            Client Success Stories
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Real People</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our clients have to say about their transformation journey
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image Side */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${testimonials[activeIndex].gradient} opacity-30`} />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">4.9</p>
                    <div className="flex text-yellow-400">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-2xl text-yellow-400"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.p
                    className="text-xl text-gray-300 italic mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonials[activeIndex].text}"
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-primary-400">
                    {testimonials[activeIndex].treatment}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-primary-600 to-secondary-600'
                      : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;