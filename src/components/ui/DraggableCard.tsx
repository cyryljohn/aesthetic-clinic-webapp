import { cn } from '../../utils/cn';
import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from 'framer-motion';

export const DraggableCardBody = ({
  className,
  children,
  initialRotation = 0,
  style: customStyle,
}: {
  className?: string;
  children?: React.ReactNode;
  initialRotation?: number;
  style?: React.CSSProperties;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isMounted, setIsMounted] = useState(false);
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // Track card position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // physics biatch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig,
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig,
  );

  // Auto-return functionality
  useEffect(() => {
    let checkBounds: NodeJS.Timeout;
    let returnTimeout: NodeJS.Timeout;
    
    // Start checking bounds after component has mounted
    const startBoundsCheck = () => {
      checkBounds = setInterval(() => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Check if card is completely out of viewport
        const isOutOfBounds = 
          rect.right < 0 || 
          rect.left > viewportWidth || 
          rect.bottom < 0 || 
          rect.top > viewportHeight;
        
        if (isOutOfBounds) {
          // Clear any existing timeout
          clearTimeout(returnTimeout);
          
          // Animate back to center after a delay
          returnTimeout = setTimeout(() => {
            // Only call controls.start if component is still mounted
            if (isMounted && cardRef.current) {
              controls.start({
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  duration: 2,
                  stiffness: 50,
                  damping: 15,
                },
              });
            }
          }, 2000); // Wait 2 seconds before returning
        }
      }, 500); // Check every 500ms
    };
    
    // Start checking after a small delay to ensure component is mounted
    const mountTimeout = setTimeout(startBoundsCheck, 100);

    return () => {
      clearTimeout(mountTimeout);
      clearInterval(checkBounds);
      clearTimeout(returnTimeout);
    };
  }, [controls, isMounted]);

  useEffect(() => {
    // Set mounted state
    setIsMounted(true);
    
    // Update constraints when component mounts or window resizes
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();

    // Add resize listener
    window.addEventListener("resize", updateConstraints);

    // Clean up
    return () => {
      setIsMounted(false);
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      dragElastic={0.2}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        // Ensure component is mounted before calling controls.start
        if (isMounted && cardRef.current) {
          controls.start({
            rotateX: 0,
            rotateY: 0,
            transition: {
              type: "spring",
              ...springConfig,
            },
          });
        }
        
        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY,
        );
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
        rotate: initialRotation,
        ...customStyle,
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "overflow-hidden bg-white shadow-2xl cursor-grab active:cursor-grabbing",
        className,
      )}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};