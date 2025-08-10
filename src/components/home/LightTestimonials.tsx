import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceImages } from '../../utils/images';

const LightTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah M.',
      treatment: 'Botox & Fillers',
      rating: 5,
      text: 'Absolutely amazing experience! The team is professional, caring, and the results exceeded my expectations. I look refreshed and natural.',
      image: serviceImages.results[0],
      gradient: 'from-purple-100 to-pink-100',
    },
    {
      name: 'Jessica L.',
      treatment: 'HydraFacial',
      rating: 5,
      text: 'The best facial I\'ve ever had! My skin has never looked better. The clinic is beautiful and the staff makes you feel so comfortable.',
      image: serviceImages.results[1],
      gradient: 'from-blue-100 to-cyan-100',
    },
    {
      name: 'Michael R.',
      treatment: 'Hair Restoration',
      rating: 5,
      text: 'Life-changing results! The PRP treatment really works. I\'m seeing new hair growth and my confidence is back. Highly recommend!',
      image: serviceImages.results[2],
      gradient: 'from-emerald-100 to-teal-100',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4b93c5 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-primary-700 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Client Success Stories
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Real People</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about their transformation journey
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <motion.div
                  className="relative h-[400px] md:h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].gradient} opacity-20`} />
                  
                  {/* Rating badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Verified Client</p>
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <svg className="w-12 h-12 text-primary-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">
                      {testimonials[activeIndex].text}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-gray-900 font-semibold text-lg">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-primary-600 text-sm">
                        {testimonials[activeIndex].treatment}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.button
                        onClick={prevTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      <motion.button
                        onClick={nextTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full'
                    : 'w-2 h-2 bg-gray-300 rounded-full'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightTestimonials;