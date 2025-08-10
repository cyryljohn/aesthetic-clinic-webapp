import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  height?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  className = '',
  height = 'h-96',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => setIsDragging(false));
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', () => setIsDragging(false));
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', () => setIsDragging(false));
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', () => setIsDragging(false));
      };
    }
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${height} overflow-hidden rounded-2xl cursor-ew-resize group ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Enhanced After Image (bottom layer) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Enhanced After Label */}
        <motion.div 
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sage-400 to-olive-400 rounded-full blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="relative bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-white/50">
              <span className="text-sm font-bold bg-gradient-to-r from-sage-600 to-olive-600 bg-clip-text text-transparent uppercase tracking-wider">
                After
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Before Image (top layer with clip) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Enhanced Before Label */}
        <motion.div 
          className="absolute bottom-4 left-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gray-500 rounded-full blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="relative bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-gray-700/50">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Before
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Slider Line with gradient */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1"
        style={{ 
          left: `${sliderPosition}%`,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.9), rgba(255,255,255,0.3))'
        }}
        animate={{ 
          boxShadow: isDragging 
            ? '0 0 30px rgba(255, 255, 255, 0.9), 0 0 60px rgba(95, 138, 116, 0.5)' 
            : '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(125, 145, 110, 0.3)'
        }}
      >
        {/* Enhanced Slider Handle */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 w-16 h-16 -ml-2 -mt-2 rounded-full border-2 border-white/50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Main handle */}
          <motion.div 
            className="relative w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-white/50"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              rotate: isDragging ? 0 : [0, 5, -5, 0],
            }}
            transition={{
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Left-Right Arrow Icon */}
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18m-4-4l4 4m0 0l-4 4" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Decorative dots along the line */}
        <motion.div 
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </motion.div>


      {/* Hover effect indicators */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
    </div>
  );
};

export default BeforeAfterSlider;