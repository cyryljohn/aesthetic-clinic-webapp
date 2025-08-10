import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import calendlyService from '../../services/calendlyService';

const CTA: React.FC = () => {
  const handleBookingClick = () => {
    calendlyService.openPopupWidget({
      text: 'Book Your Free Consultation',
      color: '#4b93c5',
    });
  };

  return (
    <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Begin Your Beauty Journey?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Book your consultation today and let our experts create a personalized treatment plan just for you. 
            Your journey to enhanced natural beauty starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="large" onClick={handleBookingClick}>
              Book Free Consultation
            </Button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20">
              Call (416) 555-0123
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-bold mb-1">Free</p>
              <p className="text-sm text-white/80">Initial Consultation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-bold mb-1">Flexible</p>
              <p className="text-sm text-white/80">Payment Plans Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-2xl font-bold mb-1">100%</p>
              <p className="text-sm text-white/80">Satisfaction Guaranteed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;