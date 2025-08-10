import React, { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  delay?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = '',
  delay = 0,
}) => {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({ triggerOnce: true });
  const wordsArray = words.split(' ');

  useEffect(() => {
    if (inView) {
      animate(
        'span',
        {
          opacity: 1,
          filter: 'blur(0px)',
        },
        {
          duration: 0.5,
          delay: stagger(0.08, { startDelay: delay }),
        }
      );
    }
  }, [inView, animate, delay]);

  return (
    <div ref={ref} className={className}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block mr-2"
            style={{ filter: 'blur(10px)' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};