import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import calendlyService from '../../services/calendlyService';

const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Services', path: '/services', icon: '💆‍♀️' },
    { name: 'About', path: '/about', icon: '✨' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleBookingClick = () => {
    calendlyService.openPopupWidget({
      text: 'Book Your Free Consultation',
      color: '#5f8a74',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-gradient-to-b from-white/90 to-white/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-max">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Animated Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-sage-500 to-olive-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white font-bold text-xl">AC</span>
              </motion.div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-sage-400 to-olive-400 rounded-2xl opacity-30 blur"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
            <div>
              <motion.h1 
                className="text-xl font-display font-bold bg-gradient-to-r from-sage-700 to-olive-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Aesthetic Clinic
              </motion.h1>
              <motion.p 
                className="text-xs text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Toronto's Premium Beauty Care
              </motion.p>
            </div>
          </Link>
          
          {/* Desktop Navigation with Animations */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="relative group px-4 py-2"
                >
                  <span className={`flex items-center gap-2 font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-sage-600'
                      : 'text-gray-700 group-hover:text-sage-600'
                  }`}>
                    <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    {item.name}
                  </span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-500 to-olive-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Animated Book Button */}
            <motion.button
              onClick={handleBookingClick}
              className="relative ml-4 px-6 py-3 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="relative z-10 font-semibold text-white">
                Book Now
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sage-600 to-olive-600 rounded-lg"
                initial={{ opacity: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-olive-600 to-sage-600 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.span
                className="absolute block w-6 h-0.5 bg-gray-800"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute block w-6 h-0.5 bg-gray-800"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute block w-6 h-0.5 bg-gray-800"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 8,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
        
        {/* Mobile Menu with Animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
                        isActive(item.path)
                          ? 'bg-sage-50 text-sage-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  onClick={() => {
                    handleBookingClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 py-3 bg-gradient-to-r from-sage-600 to-olive-600 text-white font-semibold rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default ModernHeader;