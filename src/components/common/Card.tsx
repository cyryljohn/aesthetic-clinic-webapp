import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-lg p-6';
  const hoverStyles = hoverable ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : '';
  
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;