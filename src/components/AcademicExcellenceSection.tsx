import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import aeImage1 from '../assets/hero-01.jpg';
import aeImage2 from '../assets/hero-01.jpg';
import aeImage3 from '../assets/hero-01.jpg';

interface AECardData {
  variant: 'A' | 'B';
  image: string;
  title: string;
  body: string;
  alt: string;
}

export function AcademicExcellenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cards: AECardData[] = [
    {
      variant: 'A',
      image: aeImage1,
      title: 'Student-Centered Learning',
      body: 'Personalized education that adapts to each learner\'s needs, fostering curiosity and independent thinking.',
      alt: 'Student engaged in focused hands-on learning activity'
    },
    {
      variant: 'B',
      image: aeImage2,
      title: 'Bilingual Integration',
      body: 'Seamless Vietnamese-English curriculum ensuring fluency and cultural competence in both languages.',
      alt: 'Students performing in school music ensemble with brass instruments'
    },
    {
      variant: 'A',
      image: aeImage3,
      title: 'Holistic Development',
      body: 'Nurturing physical, emotional, and social growth alongside academic achievement.',
      alt: 'Student athlete demonstrating physical excellence in outdoor sports activity'
    },
    {
      variant: 'B',
      image: 'https://images.unsplash.com/photo-1758685733987-54952cd1c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMHN0dWRlbnQlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYyOTYyMDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'STEM Excellence',
      body: 'Advanced science, technology, engineering, and mathematics programs preparing students for future innovation.',
      alt: 'Students conducting hands-on science experiments in laboratory setting'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative motif - top right */}
      <div 
        className="absolute top-8 right-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        📚
      </div>

      {/* Decorative motif - bottom left */}
      <div 
        className="absolute bottom-8 left-8 text-9xl text-[#1a5336] opacity-[0.06] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        🎓
      </div>

      {/* Header - Centered */}
      <div className="text-center max-w-[760px] mx-auto mb-16 relative z-10">
        <motion.h2
          className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          15 years solid foundation for Academic Excellence
        </motion.h2>
        
        <motion.p
          className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Serving over 2,000 students across Kindergarten through High School, LHBS has established 
          itself as a leader in bilingual education. Our commitment to academic rigor, cultural 
          integration, and holistic student development has shaped generations of global citizens.
        </motion.p>
      </div>

      {/* Mosaic 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          >
            <AECard {...card} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// ==================== AE CARD COMPONENT ====================
interface AECardProps extends AECardData {}

function AECard({ variant, image, title, body, alt }: AECardProps) {
  if (variant === 'A') {
    // Variant A: Photo Tall + Bottom Overlay
    return (
      <div className="relative h-[500px] md:h-[600px] overflow-hidden group">
        {/* Image */}
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300"
          whileHover={{ scale: 1.02 }}
        />
        
        {/* Overlay at bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1a5336] p-5 md:p-6 shadow-lg">
          <h3 className="font-['Crimson_Pro'] text-xl md:text-2xl text-white mb-2">
            {title}
          </h3>
          <p className="font-['Lexend_Deca'] text-sm text-white/90 leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    );
  } else {
    // Variant B: Top Overlay Block + Photo Below
    return (
      <div className="flex flex-col h-[500px] md:h-[600px]">
        {/* Overlay block at top */}
        <div className="bg-[#1a5336] p-5 md:p-6 shadow-lg flex-shrink-0">
          <h3 className="font-['Crimson_Pro'] text-xl md:text-2xl text-white mb-2">
            {title}
          </h3>
          <p className="font-['Lexend_Deca'] text-sm text-white/90 leading-relaxed">
            {body}
          </p>
        </div>
        
        {/* Image below */}
        <div className="relative flex-1 overflow-hidden group">
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>
    );
  }
}
