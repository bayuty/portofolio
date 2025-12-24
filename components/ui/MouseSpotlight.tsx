import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseSpotlight: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation config
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  
  // Create sprung values for x and y
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Primary ambient glow */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] z-0"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }} 
      />
      
      {/* Secondary highlight core */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] z-0 mix-blend-screen"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }} 
      />
    </>
  );
};

export default MouseSpotlight;