import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import calendlyService from '../../services/calendlyService';

const LightCTA: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleBookingClick = () => {
    calendlyService.openPopupWidget({
      text: 'Book Your Free Consultation',
      color: '#5f8a74',
    });
  };

  const testimonials = [
    { text: "Changed my life completely!", author: "Sarah M.", rating: 5 },
    { text: "Professional and amazing results", author: "Jennifer L.", rating: 5 },
    { text: "Best decision I've ever made", author: "Emily R.", rating: 5 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-sage-50 via-white to-olive-50 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(95, 138, 116, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(125, 145, 110, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(95, 138, 116, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(95, 138, 116, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Leaf Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-10">
              <path d="M17 8C17 10.21 16.21 12.31 14.81 13.9C13.41 15.5 11.61 16.5 9.61 16.82C7.61 17.14 5.57 16.73 3.85 15.67C2.13 14.61 0.83 12.97 0.21 11.04C-0.41 9.11 -0.31 7.01 0.49 5.14C1.29 3.27 2.74 1.74 4.59 0.85C6.44 -0.04 8.57 -0.24 10.55 0.29C12.53 0.82 14.24 2.04 15.39 3.7C16.54 5.36 17.04 7.35 16.82 9.35L21 13L17 17L13 13L16.82 9.35C17 8.9 17 8.45 17 8Z" fill="currentColor" className="text-sage-600"/>
            </svg>
          </motion.div>
        ))}

        {/* Animated Circles */}
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(125, 145, 110, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(95, 138, 116, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
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
          className="max-w-5xl mx-auto"
        >
          {/* Animated Badge */}
          <motion.div className="text-center mb-8">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sage-100 to-olive-100 rounded-full text-sage-700 text-sm font-bold tracking-wider uppercase shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                boxShadow: [
                  '0 4px 20px rgba(95, 138, 116, 0.2)',
                  '0 4px 40px rgba(125, 145, 110, 0.3)',
                  '0 4px 20px rgba(95, 138, 116, 0.2)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
              Limited Time Offer - Save 20%
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Main Heading with Gradient Animation */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900">Ready to Begin Your</span>
            <br />
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
              Beauty Transformation?
            </motion.span>
          </motion.h2>
          
          {/* Interactive Testimonial Carousel */}
          <div className="mb-10">
            <div className="flex justify-center gap-2 mb-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === index 
                      ? 'w-8 bg-gradient-to-r from-sage-600 to-olive-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <p className="text-lg text-gray-700 italic mb-2">"{testimonials[activeTab].text}"</p>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-yellow-400 text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">- {testimonials[activeTab].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3D Card Style CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glowing backdrop */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sage-600 to-olive-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <button
                onClick={handleBookingClick}
                className="relative px-12 py-6 bg-gradient-to-r from-sage-600 to-olive-600 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  <motion.span
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    📅
                  </motion.span>
                  Book Your Free Consultation
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </button>
            </motion.div>
            
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="relative px-12 py-6 bg-white text-sage-700 font-bold text-lg rounded-2xl shadow-xl border-2 border-sage-200 transition-all duration-300 hover:shadow-2xl hover:border-sage-300 transform hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  <motion.span
                    animate={{ 
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  >
                    📞
                  </motion.span>
                  Call (416) 555-0123
                </span>
              </button>
            </motion.div>
          </div>
          
          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: '🎁', 
                title: 'Free Consultation', 
                subtitle: 'No obligation assessment',
                color: 'sage',
                details: 'Get expert advice tailored to your needs'
              },
              { 
                icon: '💳', 
                title: 'Flexible Payment', 
                subtitle: 'Plans starting at $99/mo',
                color: 'olive',
                details: 'Interest-free financing available'
              },
              { 
                icon: '✨', 
                title: '100% Guarantee', 
                subtitle: 'Results you\'ll love',
                color: 'sage',
                details: 'Or your money back, no questions asked'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <motion.div
                  className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                    item.color === 'sage' 
                      ? 'border-sage-200 hover:border-sage-400' 
                      : 'border-olive-200 hover:border-olive-400'
                  }`}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Animated Icon */}
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={hoveredFeature === index ? {
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    item.color === 'sage' ? 'text-sage-700' : 'text-olive-700'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>
                  
                  {/* Expandable details */}
                  <AnimatePresence>
                    {hoveredFeature === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-gray-500 mt-2"
                      >
                        {item.details}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  
                  {/* Progress indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${
                      item.color === 'sage' 
                        ? 'bg-gradient-to-r from-sage-400 to-sage-600' 
                        : 'bg-gradient-to-r from-olive-400 to-olive-600'
                    } rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Animated Trust Badges */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {['5000+ Happy Clients', 'Licensed & Insured', '10+ Years Experience', 'Award Winning'].map((badge, i) => (
              <motion.div
                key={badge}
                className="flex items-center gap-2 text-gray-600"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-sage-200 to-olive-200 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-4 h-4 text-sage-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span className="text-sm font-medium">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LightCTA;