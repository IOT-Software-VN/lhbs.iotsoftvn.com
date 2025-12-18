import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ScrollIndicator } from '@sites/index';
import Herobg from '@assets/images/home-page/section-hero/main.png'
import Bottombg from '@assets/images/home-page/section-hero/bottom.png'

interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function HeroCarousel({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Only background images array - content stays the same
  const backgroundImages = [
    Herobg,
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, backgroundImages.length]);

  return (
    <section className="relative w-full  h-screen flex items-center overflow-hidden">
      {/* Background Image with smooth transition */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{
              opacity: { duration: 1, ease: 'easeInOut' },
              // scale: { duration: 10, ease: 'linear' }
            }}
          >
            <img
              src={image}
              alt="LHBS campus with students"
              className="w-full h-full object-fit"
              style={{ filter: 'brightness(1)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Dark Overlay focused on bottom-left content area */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 z-11 bg-gradient-to-bl from-black/60 via-transparent to-transparent"
           style={{
             background: `radial-gradient(ellipse at 14% 0%,
               rgba(0, 0, 0, 0.7) 5%,
               rgba(0, 0, 0, 0.25) 15%,
               rgba(0, 0, 0, 0.1) 25%,
               transparent 70%)`
           }} /> */}

      {/* Bottom Background Image with higher z-index */}
      <div className="absolute bottom-0 pointer-events-none">
        <img
          src={Bottombg}
          alt="Bottom decoration"
          className="w-full h-full"
        />
      </div>



      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content Column - Positioned at bottom left */}
          <motion.div
            className="lg:col-span-10 flex flex-col justify-end pt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                 {/* Breadcrumb */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <nav className="flex items-center text-white/80 text-base font-medium">
                <span>LHBS School</span>
                <span className="mx-2">›</span>
                <span className="text-white">LHBS Bien Hoa Kindergarten</span>
              </nav>
            </motion.div> */}

            {/* Main Title - 2 rows as requested */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
             <h1 className="text-[#FFAE01] uppercase  text-3xl md:text-4xl lg:text-5xl leading-tight font-black drop-shadow-lg tracking-tighter">
  <span className="block">Every child is born a star</span>
</h1>

              <span className="block text-2xl md:text-3xl lg:text-xl mt-2">Our Holistic 21st-Century Education helps them shine</span>
            </motion.div>

         <div className='flex flex-row gap-3'>
             {/* CTA Button - Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <button
                onClick={() => onNavigate('/admissions')}
                className="px-6 md:px-8 h-11 text-[#FABA1E] border border-[#FABA1E] font-bold uppercase text-xs md:text-sm tracking-wider
                          transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2
                          focus:ring-offset-transparent shadow-xl drop-shadow-lg rounded-lg hover:bg-[#FABA1E] hover:text-black"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                DOWNLOAD PDF
              </button>
            </motion.div>
               {/* CTA Button - Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <button
                onClick={() => onNavigate('/admissions')}
                className="px-6 md:px-8 h-11 bg-[#FABA1E] text-black font-bold uppercase text-xs md:text-sm tracking-wider
                          hover:bg-[#e5a812] transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2
                          focus:ring-offset-transparent shadow-xl drop-shadow-lg rounded-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
              >
                ENQUIRE NOW
              </button>
            </motion.div>
         </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <ScrollIndicator targetSectionId="academic-divisions" />
    </section>
  );
}
