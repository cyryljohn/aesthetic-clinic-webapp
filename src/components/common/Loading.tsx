import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
}

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  color = 'primary',
}) => {
  const sizes = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-14 h-14',
  };
  
  const colors = {
    primary: 'border-primary-600',
    secondary: 'border-secondary-600',
    white: 'border-white',
  };
  
  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full`}
      />
    </div>
  );
};

export default Loading;