import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BookOpen, Award, Link2, GraduationCap } from 'lucide-react';
import img061 from "../assets/Section-06-1.png"
import img062 from "../assets/Section-06-2.png"
import img063 from "../assets/Section-06-3.jpg"
import img064 from "../assets/Section-06-4.png"



interface StatCardData {
  icon: React.ReactNode;
  value: string;
  body: string;
  isExtended?: boolean;
  minHeight?: string; // Thêm prop để điều chỉnh chiều cao
}

interface PhotoCardData {
  image: string;
  alt: string;
  heightRatio?: number;
}

export default function EducationPillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const img1 = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800';
  const img2 = 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800';
  const img3 = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800';

  // Column 1: StatCard (cao hơn) + PhotoCard
  const col1: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Users className="w-12 h-12" />,
      value: '+6,000',
      body: 'Students have graduated from LHBS, equipped with bilingual excellence and global perspectives',
      isExtended: true,
      minHeight: '450px' // Tăng chiều cao StatCard
    } as StatCardData,
    {
      image: img061,
      alt: 'LHBS students winning NASA Space Apps Challenge with ATMOS GUARD project',
      heightRatio: 0.6
    } as PhotoCardData
  ];

  // Column 2: PhotoCard + StatCard (cao hơn)
  const col2: (StatCardData | PhotoCardData)[] = [
    {
      image: img062,
      alt: 'Students engaged in collaborative computer-based learning activities',
      heightRatio: 1.2
    } as PhotoCardData,
    {
      icon: <BookOpen className="w-12 h-12" />,
      value: '+10,000',
      body: 'Hours of bilingual instruction annually, ensuring fluency and cultural competence in both languages',
      isExtended: true,
      minHeight: '460px' // Tăng chiều cao StatCard
    } as StatCardData
  ];

  // Column 3: StatCard (cao hơn) + PhotoCard
  const col3: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Award className="w-12 h-12" />,
      value: '96.04%',
      body: 'University acceptance rate with students admitted to top institutions worldwide',
      isExtended: true,
      minHeight: '420px' // Tăng chiều cao StatCard
    } as StatCardData,
    {
      image: img063,
      alt: 'Students participating in hands-on STEM robotics project',
      heightRatio: 1
    } as PhotoCardData
  ];

  // Column 4: StatCard + PhotoCard + StatCard (giữ chiều cao bình thường)
  const col4: (StatCardData | PhotoCardData)[] = [
    {
      icon: <Link2 className="w-12 h-12" />,
      value: '+6',
      body: 'Partnerships with international schools across Asia, Europe, and North America'
    } as StatCardData,
    {
      image: img064,
      alt: 'LHBS graduation ceremony celebrating student achievements',
      heightRatio: 0.8
    } as PhotoCardData,
    {
      icon: <GraduationCap className="w-12 h-12" />,
      value: '+980',
      body: 'Alumni pursuing higher education at prestigious universities globally each year'
    } as StatCardData
  ];

  const columns = [col1, col2, col3, col4];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9] overflow-hidden"
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
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a5336]"
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
    </section>
  );
}

// Type guard
function isStatCard(card: StatCardData | PhotoCardData): card is StatCardData {
  return 'value' in card;
}

// ==================== STAT CARD COMPONENT ====================
function StatCard({ icon, value, body, isExtended, minHeight }: StatCardData) {
  return (
    <div 
      className={`bg-[#1a5336] p-6 md:p-8 flex flex-col justify-center items-center text-center ${isExtended ? 'min-h-[180px]' : ''}`}
      style={minHeight ? { minHeight } : {}}
    >
      {/* Icon - size lớn hơn */}
      <div className="text-[#fffae9] mb-4 scale-125 md:scale-150">
        {icon}
      </div>

      {/* Value - size lớn hơn */}
      <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">
        {value}
      </h3>

      {/* Body - size lớn hơn */}
      <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-sm">
        {body}
      </p>
    </div>
  );
}

// ==================== PHOTO CARD COMPONENT ====================
function PhotoCard({ image, alt, heightRatio = 1.2 }: PhotoCardData) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-auto object-cover"
        style={{ aspectRatio: `1 / ${heightRatio}` }}
      />
    </div>
  );
}