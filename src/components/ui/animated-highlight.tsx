import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedHighlightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  backgroundColor?: string;
}

export function AnimatedHighlight({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  backgroundColor = '#95F371'
}: AnimatedHighlightProps) {
  return (
    <span className={`relative inline-block${className}`}>
      {/* Animated highlight background */}
      <motion.span
        className="absolute inset-0 -left-3 -right-3 md:-left-4 md:-right-4 -top-1 -bottom-1"
        style={{ 
          backgroundColor,
          zIndex: 0,
          originX: 0 // Animation starts from left
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
        }}
      />
      {/* Text content */}
      <span className="relative">{children}</span>
    </span>
  );
}

// Utility class variant for direct Tailwind usage
export const animatedHighlightClasses = {
  container: 'relative inline-block',
  background: 'absolute inset-0 -left-3 -right-3 md:-left-4 md:-right-4 -top-1 -bottom-1 origin-left',
  text: 'relative'
};