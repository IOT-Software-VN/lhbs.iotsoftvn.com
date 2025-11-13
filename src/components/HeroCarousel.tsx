import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  kicker?: string;
  title: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  cta2Text?: string;
  cta2Link?: string;
  image: string;
  alt: string;
  icon?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoplayDelay?: number;
  onNavigate?: (path: string) => void;
}

export function HeroCarousel({ slides, autoplayDelay = 5000, onNavigate }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Navigate to specific slide
  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay logic
  useEffect(() => {
    if (isHovered || isFocused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered, isFocused, autoplayDelay, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Handle drag end
  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  return (
    <div
      ref={carouselRef}
      className="relative h-[600px] md:h-[900px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      role="region"
      aria-label="Hero Carousel"
      aria-live="polite"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <HeroSlide
          key={currentIndex}
          slide={slides[currentIndex]}
          direction={direction}
          prefersReducedMotion={prefersReducedMotion}
          isDragging={isDragging}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          onNavigate={onNavigate}
        />
      </AnimatePresence>

      {/* Navigation Arrows - Desktop & Tablet */}
      <div className="hidden md:block">
        <HeroArrowLeft onClick={prevSlide} />
        <HeroArrowRight onClick={nextSlide} />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3 md:gap-4">
        {slides.map((_, index) => (
          <HeroDot
            key={index}
            isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
            index={index}
          />
        ))}
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {slides.length}
      </div>
    </div>
  );
}

// ==================== HERO SLIDE ====================
interface HeroSlideProps {
  slide: HeroSlide;
  direction: number;
  prefersReducedMotion: boolean;
  isDragging: boolean;
  onDragStart: () => void;
  onDragEnd: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  onNavigate?: (path: string) => void;
}

function HeroSlide({
  slide,
  direction,
  prefersReducedMotion,
  isDragging,
  onDragStart,
  onDragEnd,
  onNavigate
}: HeroSlideProps) {
  const x = useMotionValue(0);
  const backgroundX = useTransform(x, [-100, 100], [10, -10]);

  const slideVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 }
      }
    : {
        enter: (direction: number) => ({
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        }),
        center: {
          x: 0,
          opacity: 1
        },
        exit: (direction: number) => ({
          x: direction < 0 ? 1000 : -1000,
          opacity: 0
        })
      };

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.4 }
  };

  return (
    <motion.div
      className="absolute inset-0"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{ x, cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slide.image})`,
          x: prefersReducedMotion ? 0 : backgroundX
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-[640px] text-center">
          {/* Kicker */}
          {slide.kicker && (
            <motion.p
              className="font-['Lexend_Deca'] text-[#FABA1E] text-sm md:text-base uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {slide.kicker}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            className="font-['Crimson_Pro'] text-white text-4xl md:text-6xl lg:text-7xl text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14 }}
          >
            {slide.title}
          </motion.h1>

          {/* Body */}
          <motion.p
            className="font-['Lexend_Deca'] text-white/90 text-base md:text-lg lg:text-xl text-center mb-8 md:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            {slide.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            <button
              onClick={() => onNavigate?.(slide.ctaLink)}
              className="w-full md:w-auto px-8 h-12 bg-[#1a5336] text-white font-['Arial'] font-bold cursor-pointer hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
            >
              {slide.ctaText}
            </button>

            {slide.cta2Text && slide.cta2Link && (
              <button
                onClick={() => onNavigate?.(slide.cta2Link)}
                className="w-full md:w-auto px-8 h-12 border-2 border-white text-white font-['Arial'] font-bold cursor-pointer hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
              >
                {slide.cta2Text}
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Icon (optional) */}
      {slide.icon && (
        <div
          className="absolute top-20 right-20 text-white text-9xl opacity-10 pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          {slide.icon}
        </div>
      )}
    </motion.div>
  );
}

// ==================== HERO ARROW LEFT ====================
function HeroArrowLeft({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] cursor-pointer"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
    </button>
  );
}

// ==================== HERO ARROW RIGHT ====================
function HeroArrowRight({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] cursor-pointer"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
    </button>
  );
}

// ==================== HERO DOT ====================
interface HeroDotProps {
  isActive: boolean;
  onClick: () => void;
  index: number;
}

function HeroDot({ isActive, onClick, index }: HeroDotProps) {
  return (
    <button
      onClick={onClick}
      className={`
        transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FABA1E]
        ${isActive 
          ? 'w-10 h-3 md:w-12 md:h-3 bg-white' 
          : 'w-3 h-3 bg-white/50 hover:bg-white/75'
        }
      `}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={isActive ? 'true' : 'false'}
    />
  );
}
