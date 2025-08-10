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
      className={`relative ${height} overflow-hidden rounded-2xl cursor-col-resize ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (bottom layer) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-800">After</span>
        </div>
      </div>

      {/* Before Image (top layer with clip) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-white">Before</span>
        </div>
      </div>

      {/* Slider Line */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
        animate={{ 
          boxShadow: isDragging 
            ? '0 0 20px rgba(255, 255, 255, 0.8)' 
            : '0 0 10px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Slider Handle */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Instruction (shows initially) */}
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        transition={{ delay: isDragging ? 0 : 3 }}
      >
        <span className="text-sm text-white">Drag to compare</span>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider;