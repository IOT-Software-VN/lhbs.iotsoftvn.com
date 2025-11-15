import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import birdMotif from '../assets/hero-01.jpg';
import items01 from '../assets/items-01.png';
import items02 from '../assets/items-02.png';
import items03 from '../assets/items-03.png';

export function LetsBeginCTA({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const lbTitle = "Let's Begin";
  const lbSubcopy = "Begin your child's journey to bilingual excellence and global citizenship today";
  const lbCtaText = "ENQUIRE NOW";
  const lbCtaLink = "/admissions/apply-now";

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden"
      style={{ 
        minHeight: '420px',
        backgroundColor: '#064e29ff'
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#14432b]/15 to-transparent"
        aria-hidden="true"
      />

      {/* Decorative Bird Motif - Top Left */}
      <div 
        className="absolute top-8 left-8 w-40 h-40 lg:w-52 lg:h-52 opacity-[0.10] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Decorative Bird Motif - Top Right */}
      <div 
        className="absolute top-8 right-8 w-40 h-40 lg:w-52 lg:h-52 opacity-[0.08] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
        style={{ transform: 'scaleX(-1)' }}
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Decorative Bird Motif - Bottom Left */}
      <div 
        className="absolute bottom-8 left-8 w-40 h-40 lg:w-52 lg:h-52 opacity-[0.12] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
        style={{ transform: 'rotate(0deg)' }}
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Decorative Bird Motif - Bottom Right */}
      <div 
        className="absolute bottom-8 right-8 w-40 h-40 lg:w-52 lg:h-52 opacity-[0.09] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
        style={{ transform: 'scale(-1, -1)' }}
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Content Group - Centered */}
      <div className="relative z-10 h-full min-h-[420px] md:min-h-[440px] lg:min-h-[480px] flex items-center justify-center px-4 md:px-20 py-24">
        <motion.div
          className="max-w-[720px] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Title */}
          <h2 className=" text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-4">
            {lbTitle}
          </h2>
          
          {/* Subcopy */}
          <p className=" text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed">
            {lbSubcopy}
          </p>
          
          {/* CTA Button */}
          <motion.button
            onClick={() => onNavigate(lbCtaLink)}
            className="px-12 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold cursor-pointer hover:bg-[#e0a615] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fffae9] focus:ring-offset-2 focus:ring-offset-[#1a5336] w-full md:w-auto"
            aria-label={lbCtaText}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {lbCtaText}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
