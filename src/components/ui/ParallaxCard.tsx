import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  image?: string;
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({
  children,
  className = '',
  image,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.05}
      gyroscope={true}
    >
      <motion.div
        className={`relative rounded-2xl overflow-hidden ${className}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {image && (
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        )}
        <div className="relative z-10 p-6">
          {children}
        </div>
        
        {/* Glowing effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500" />
      </motion.div>
    </Tilt>
  );
};