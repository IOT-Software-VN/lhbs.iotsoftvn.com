import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BookOpen, Award, Link2, GraduationCap } from 'lucide-react';
import img1 from '../assets/hero-01.jpg';
import img2 from '../assets/hero-01.jpg';
import img3 from '../assets/hero-01.jpg';

interface StatCardData {
  icon: React.ReactNode;
  value: string;
  body: string;
}

interface PhotoCardData {
  image: string;
  alt: string;
}

export function EducationPillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Column 1: StatCard + PhotoCard
  const col1: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Users className="w-12 h-12" />,
      value: '+6,000',
      body: 'Students have graduated from LHBS, equipped with bilingual excellence and global perspectives'
    } as StatCardData,
    {
      image: img1,
      alt: 'LHBS students winning NASA Space Apps Challenge with ATMOS GUARD project'
    } as PhotoCardData
  ];

  // Column 2: PhotoCard + StatCard
  const col2: (StatCardData | PhotoCardData)[] = [
    {
      image: img2,
      alt: 'Students engaged in collaborative computer-based learning activities'
    } as PhotoCardData,
    {
      icon: <BookOpen className="w-12 h-12" />,
      value: '+10,000',
      body: 'Hours of bilingual instruction annually, ensuring fluency and cultural competence in both languages'
    } as StatCardData
  ];

  // Column 3: StatCard + PhotoCard
  const col3: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Award className="w-12 h-12" />,
      value: '96.04%',
      body: 'University acceptance rate with students admitted to top institutions worldwide'
    } as StatCardData,
    {
      image: img3,
      alt: 'Students participating in hands-on STEM robotics project'
    } as PhotoCardData
  ];

  // Column 4: StatCard + PhotoCard + StatCard
  const col4: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Link2 className="w-12 h-12" />,
      value: '+6',
      body: 'Partnerships with international schools across Asia, Europe, and North America'
    } as StatCardData,
    {
      image: 'https://images.unsplash.com/photo-1686213011698-8e70cb7ed011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjI4NDIzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'LHBS graduation ceremony celebrating student achievements'
    } as PhotoCardData,
    {
      icon: <GraduationCap className="w-12 h-12" />,
      value: '+980',
      body: 'Alumni pursuing higher education at prestigious universities globally each year'
    } as StatCardData
  ];

  const columns = [col1, col2, col3, col4];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative motif - top left */}
      <div 
        className="absolute top-8 left-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        ✨
      </div>

      {/* Decorative motif - bottom right */}
      <div 
        className="absolute bottom-8 right-8 text-9xl text-[#1a5336] opacity-[0.06] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        🎯
      </div>

      {/* Header - Centered */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          LHBS UNIQUE Education Pillars
        </motion.h2>
      </div>

      {/* Masonry 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + colIndex * 0.1 }}
          >
            {column.map((card, cardIndex) => (
              <div key={cardIndex}>
                {isStatCard(card) ? (
                  <StatCard {...card} />
                ) : (
                  <PhotoCard {...card} />
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Type guard
function isStatCard(card: StatCardData | PhotoCardData): card is StatCardData {
  return 'value' in card;
}

// ==================== STAT CARD COMPONENT ====================
function StatCard({ icon, value, body }: StatCardData) {
  return (
    <div className="bg-[#1a5336] p-6 md:p-7 flex flex-col">
      {/* Icon */}
      <div className="text-[#fffae9] mb-3">
        {icon}
      </div>

      {/* Value */}
      <h3 className="font-['Crimson_Pro'] text-4xl md:text-5xl text-white mb-3">
        {value}
      </h3>

      {/* Body */}
      <p className="font-['Lexend_Deca'] text-sm text-white/90 leading-relaxed">
        {body}
      </p>
    </div>
  );
}

// ==================== PHOTO CARD COMPONENT ====================
function PhotoCard({ image, alt }: PhotoCardData) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-auto object-cover"
        style={{ aspectRatio: '1 / 1.2' }}
      />
    </div>
  );
}
