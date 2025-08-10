import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedFeatures: React.FC = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const features = [
    {
      title: 'Expert Team',
      description: 'Board-certified specialists with years of experience in aesthetic medicine',
      icon: '👨‍⚕️',
      gradient: 'from-blue-500 to-purple-500',
      delay: 0,
    },
    {
      title: 'Premium Products',
      description: 'We use only FDA-approved, high-quality products from trusted brands',
      icon: '💎',
      gradient: 'from-emerald-500 to-teal-500',
      delay: 0.1,
    },
    {
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to your unique needs and goals',
      icon: '❤️',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.2,
    },
    {
      title: 'Latest Technology',
      description: 'State-of-the-art equipment and cutting-edge treatment techniques',
      icon: '⚡',
      gradient: 'from-amber-500 to-orange-500',
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(75, 147, 197, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(0, 132, 139, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 50% 100%, rgba(75, 147, 197, 0.05) 0%, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 backdrop-blur-sm rounded-full text-primary-400 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Why Choose Us
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Difference</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-600/50 transition-all duration-300">
                {/* Glowing effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, rgba(75, 147, 197, 0.1) 0%, transparent 70%)`,
                  }}
                />

                {/* Icon with animated gradient background */}
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-20 blur-xl`} />
                  <div className={`relative w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-center text-sm">
                  {feature.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '50%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;