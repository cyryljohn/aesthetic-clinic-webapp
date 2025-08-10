import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundBeams = () => {
  const beams = [
    { delay: 0, duration: 7, initialX: 10, initialY: -10 },
    { delay: 3, duration: 8, initialX: 600, initialY: -10 },
    { delay: 5, duration: 6, initialX: 100, initialY: -10 },
    { delay: 2, duration: 9, initialX: 500, initialY: -10 },
    { delay: 4, duration: 7, initialX: 300, initialY: -10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4b93c5" stopOpacity="0" />
            <stop offset="50%" stopColor="#4b93c5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4b93c5" stopOpacity="0" />
          </linearGradient>
        </defs>
        {beams.map((beam, index) => (
          <motion.line
            key={index}
            x1={beam.initialX}
            y1={beam.initialY}
            x2={beam.initialX}
            y2="110%"
            stroke="url(#beam-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0],
              y1: ['-10%', '110%'],
              y2: ['-10%', '110%'],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
};