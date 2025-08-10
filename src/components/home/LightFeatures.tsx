import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LightFeatures: React.FC = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const features = [
    {
      title: 'Expert Team',
      description: 'Board-certified specialists with years of experience in aesthetic medicine',
      icon: '👨‍⚕️',
      gradient: 'from-blue-400 to-blue-600',
      bg: 'from-blue-50 to-blue-100',
      delay: 0,
    },
    {
      title: 'Premium Products',
      description: 'We use only FDA-approved, high-quality products from trusted brands',
      icon: '💎',
      gradient: 'from-emerald-400 to-emerald-600',
      bg: 'from-emerald-50 to-emerald-100',
      delay: 0.1,
    },
    {
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to your unique needs and goals',
      icon: '❤️',
      gradient: 'from-pink-400 to-pink-600',
      bg: 'from-pink-50 to-pink-100',
      delay: 0.2,
    },
    {
      title: 'Latest Technology',
      description: 'State-of-the-art equipment and cutting-edge treatment techniques',
      icon: '⚡',
      gradient: 'from-amber-400 to-amber-600',
      bg: 'from-amber-50 to-amber-100',
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-100 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-primary-700 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Why Choose Us
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Difference</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and patient satisfaction sets us apart
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Icon with gradient background */}
                <motion.div
                  className="relative w-20 h-20 mx-auto mb-6"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} rounded-2xl`} />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '30%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="text-gray-700 font-medium">Award Winning</span>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-700 font-medium">Safe & Certified</span>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-gray-700 font-medium">5-Star Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LightFeatures;