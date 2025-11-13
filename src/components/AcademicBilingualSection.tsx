import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import birdMotif from '../assets/hero-01.jpg';
import items01 from '../assets/items-01.png';
import items02 from '../assets/items-02.png';
import items03 from '../assets/items-03.png';

interface AcademicBilingualCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export function AcademicBilingualSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 1 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const cards: AcademicBilingualCard[] = [
    {
      image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNjaWVuY2UlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2Mjg5MTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Students conducting hands-on science experiments in modern laboratory',
      title: 'STEM Excellence',
      description: 'Our rigorous science, technology, engineering, and mathematics programs foster critical thinking and innovation through hands-on learning and real-world applications.',
      link: '/academics/stem'
    },
    {
      image: 'https://images.unsplash.com/photo-1673515334717-da4d85aaf38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxpbmd1YWwlMjBjbGFzc3Jvb20lMjBsYW5ndWFnZXxlbnwxfHx8fDE3NjI5NjM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Students engaged in bilingual language instruction and cultural exchange',
      title: 'True Bilingual Education',
      description: 'Balanced Vietnamese-English curriculum delivered by native speakers, enabling students to achieve fluency and cultural competence in both languages naturally.',
      link: '/academics/bilingual-program'
    },
    {
      image: 'https://images.unsplash.com/photo-1752649937256-38d4a6a71e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFydCUyMGNyZWF0aXZlfGVufDF8fHx8MTc2Mjk2MzYyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Students expressing creativity through arts and design projects',
      title: 'Arts & Creativity',
      description: 'Comprehensive arts education nurtures creative expression, cultural appreciation, and innovative thinking through music, visual arts, drama, and design.',
      link: '/academics/arts'
    },
    {
      image: 'https://images.unsplash.com/photo-1612468552791-27742d57610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMHRlYW13b3JrfGVufDF8fHx8MTc2Mjk2MzYyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Students building teamwork and leadership through sports activities',
      title: 'Sports & Wellness',
      description: 'Holistic physical education program developing teamwork, leadership, resilience, and healthy lifestyles through diverse sports and wellness activities.',
      link: '/student-life/sports'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 mx-auto bg-[#1a5336] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Bird Motif - Top Left */}
      <div 
        className="absolute top-8 left-8 w-32 h-32 md:w-40 md:h-40 opacity-[0.10] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Decorative Bird Motif - Top Right */}
      <div 
        className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40 opacity-[0.08] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
        style={{ transform: 'scaleX(-1)' }}
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Decorative Bird Motif - Bottom Left */}
      <div 
        className="absolute bottom-8 left-8 w-64 h-64 md:w-40 md:h-22 opacity-[0.06] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
        style={{ transform: 'rotate(0deg)' }}
      >
        <img src={items02} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Header - Centered */}
      <div className="text-left mb-16 relative z-10">
        <motion.h2
          className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#fffae9]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Academic & Bilingual Identity
        </motion.h2>
      </div>

      {/* Cards Slider */}
      <div className="relative z-10 mb-16">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
          <button
            className="bg-[#fffae9]/90 hover:bg-[#fffae9] text-[#1a5336] p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
          <button
            className="bg-[#fffae9]/90 hover:bg-[#fffae9] text-[#1a5336] p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-hidden mx-12" ref={emblaRef}>
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_calc(100%-1rem)] md:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.67rem)] xl:flex-[0_0_calc(25%-0.75rem)]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <AB_Card {...card} onNavigate={onNavigate} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Slider indicators */}
        {/* <div className="flex justify-center mt-8 gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-[#fffae9] scale-110' 
                  : 'bg-[#fffae9]/40 hover:bg-[#fffae9]/60'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Section Divider - Bottom */}
      <div className="flex justify-center relative z-10">
        <motion.div
          className="h-[2px] bg-[#fffae9]/60 w-full max-w-[30%]"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </motion.section>
  );
}

// ==================== AB_CARD COMPONENT ====================
interface AB_CardProps extends AcademicBilingualCard {
  onNavigate: (path: string) => void;
}

function AB_Card({ image, alt, title, description, link, onNavigate }: AB_CardProps) {
  return (
    <div className="bg-[#fffae9] overflow-hidden group cursor-pointer" onClick={() => onNavigate(link)}>
      {/* Media Top */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3 className="font-['Crimson_Pro'] text-xl md:text-2xl text-[#1a5336] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-['Lexend_Deca'] text-sm text-[#212121] mb-4 leading-relaxed">
          {description}
        </p>

        {/* Link Row */}
        <button
          className="flex items-center gap-2 font-['Lexend_Deca'] text-sm text-[#1a5336] group/link focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(link);
          }}
        >
          <span className="font-semibold">Explore</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
