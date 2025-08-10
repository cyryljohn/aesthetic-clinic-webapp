import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import calendlyService from '../../services/calendlyService';

const LightCTA: React.FC = () => {
  const handleBookingClick = () => {
    calendlyService.openPopupWidget({
      text: 'Book Your Free Consultation',
      color: '#4b93c5',
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full"
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
          className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
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
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Limited Time Offer
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Begin Your Beauty Journey?
          </h2>
          
          <p className="text-lg mb-8 text-white/90 leading-relaxed">
            Book your consultation today and let our experts create a personalized treatment plan just for you. 
            Your journey to enhanced natural beauty starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleBookingClick}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
              >
                Book Free Consultation
              </button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-200 border-2 border-white/30">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (416) 555-0123
                </span>
              </button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🎁', title: 'Free', subtitle: 'Initial Consultation' },
              { icon: '💳', title: 'Flexible', subtitle: 'Payment Plans Available' },
              { icon: '✨', title: '100%', subtitle: 'Satisfaction Guaranteed' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-2xl font-bold mb-1">{item.title}</p>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LightCTA;