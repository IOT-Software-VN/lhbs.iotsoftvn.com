import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { HeroCarousel } from '../components/HeroCarousel';
import { AcademicExcellenceSection } from '../components/AcademicExcellenceSection';
import { BookTourCTA } from '../components/BookTourCTA';
import { EducationPillarsSection } from '../components/EducationPillarsSection';
import { LHBSLifeVideoSection } from '../components/LHBSLifeVideoSection';
import { AcademicBilingualSection } from '../components/AcademicBilingualSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { LetsBeginCTA } from '../components/LetsBeginCTA';
import { Footer } from '../components/Footer';
import heroImage from '../assets/hero-01.jpg';
import founderImage from '../assets/hero-01.jpg';
import founderPortrait from '../assets/Section-03.png';
import educationImage from '../assets/hero-01.jpg';
import items01 from '../assets/items-01.png';
import items02 from '../assets/items-02.png';
import items03 from '../assets/items-03.png';


export function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [showPillarModal, setShowPillarModal] = useState<number | null>(null);
  
  // Hero Carousel slides data
  const heroSlides = [
    {
      kicker: 'Welcome to LHBS',
      title: 'The world ahead needs people who move the world forward',
      body: 'Vietnam cultural roots, Global vision. We cultivate lifelong learners who embrace both heritage and innovation.',
      ctaText: 'ENQUIRE NOW',
      ctaLink: '/admissions/apply-now',
      cta2Text: 'LEARN MORE',
      cta2Link: '/our-school/about-us',
      image: heroImage,
      alt: 'LHBS students in a modern learning environment',
      icon: '🎓'
    },
    {
      kicker: '15 Years of Excellence',
      title: 'Building Tomorrow\'s Global Citizens Today',
      body: 'A truly bilingual education that nurtures character, ignites curiosity, and prepares students for success in an interconnected world.',
      ctaText: 'EXPLORE PROGRAMS',
      ctaLink: '/academics',
      cta2Text: 'BOOK A TOUR',
      cta2Link: '/contact/book-tour',
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxpbmd1YWwlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjI5Mjk3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Students engaged in bilingual classroom activities',
      icon: '🌏'
    },
    {
      kicker: 'Join Our Community',
      title: 'Where Vietnamese Heritage Meets International Excellence',
      body: 'Discover a learning environment that honors cultural identity while fostering global perspectives and academic achievement.',
      ctaText: 'START YOUR JOURNEY',
      ctaLink: '/admissions/apply-now',
      cta2Text: 'VIEW FACILITIES',
      cta2Link: '/our-school/facilities',
      image: 'https://images.unsplash.com/photo-1732971856110-6367a9a25303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmZXN0aXZhbCUyMGV2ZW50fGVufDF8fHx8MTc2MjkyODc5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'LHBS school festival with students and families',
      icon: '🏫'
    }
  ];
  
  return (
    <div className="relative bg-[#fffae9]">
      {/* Hero Carousel - Swipeable with multiple slides */}
      <HeroCarousel slides={heroSlides} autoplayDelay={5000} onNavigate={onNavigate} />
      
      {/* Section 1: Solid Education Foundation */}
      <SolidEducationSection onNavigate={onNavigate} />
      
            {/* Section 3: Founding Message */}
      <FoundingMessageSection onNavigate={onNavigate} />

      {/* Section 2: Academic Excellence */}
      <AcademicExcellenceSection />
      
      {/* Section 4: Book a School Tour CTA */}
      <BookTourCTA onNavigate={onNavigate} />
      
      {/* Section 5: LHBS UNIQUE Education Pillars */}
      <EducationPillarsSection />
      
      {/* Pillar Modal */}
      {showPillarModal !== null && (
        <PillarModal pillarIndex={showPillarModal} onClose={() => setShowPillarModal(null)} />
      )}
      
      {/* Section 6: LHBS Life Video */}
      <LHBSLifeVideoSection />
      
      {/* Section 7: Academic & Bilingual Identity */}
      <AcademicBilingualSection onNavigate={onNavigate} />
      
      {/* Section 8: Testimonials */}
      <TestimonialsSection />
      
      {/* Section 9: News & Events */}
      <NewsEventsSection onNavigate={onNavigate} />
      
      {/* Section 10: Let's Begin CTA */}
      <LetsBeginCTA onNavigate={onNavigate} />
      
      {/* Footer */}
      {/* <Footer onNavigate={onNavigate} /> */}
    </div>
  );
}

// ==================== SECTION 1: Solid Education Foundation ====================
function SolidEducationSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationLevels = [
    { label: 'Galaxy KG+', link: '/academics/kindergarten' },
    { label: 'LHBS Primary School +', link: '/academics/primary' },
    { label: 'LHBS Secondary School +', link: '/academics/lower-secondary' },
    { label: 'LHBS High School +', link: '/academics/upper-secondary' }
  ];

  return (
    <motion.section
      ref={ref}
      className="container relative px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto bg-[#fffae9] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative icon motif - bottom left */}
      <div 
        className="absolute bottom-8 left-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none"
        aria-hidden="true"
      >
        🎓
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content - 6 columns */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title */}
          <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-6">
            Solid education foundation to Future
          </h2>
          
          {/* Body copy */}
          <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#212121] mb-8 leading-relaxed max-w-[70ch]">
            At LHBS, we believe that a strong educational foundation is the cornerstone of lifelong success. 
            Our comprehensive programs span from early childhood through high school, providing a seamless journey 
            of bilingual excellence. Each stage is carefully designed to build upon the previous, ensuring students 
            develop critical thinking, cultural awareness, and global competence. We integrate Vietnamese heritage 
            with international standards, preparing young minds not just for academic achievement, but for meaningful 
            contribution to society.
          </p>
          
          {/* Education levels list */}
          <div className="space-y-0">
            {educationLevels.map((level, index) => (
              <EducationLevelItem
                key={index}
                label={level.label}
                link={level.link}
                onNavigate={onNavigate}
                delay={index * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Right: Image - 6 columns */}
        <motion.div
          className="relative h-[600px] md:h-[900px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={educationImage}
            alt="Students engaged in hands-on learning activities with educational materials"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// Education Level Item Component
interface EducationLevelItemProps {
  label: string;
  link: string;
  onNavigate: (path: string) => void;
  delay: number;
  isInView: boolean;
}

function EducationLevelItem({ label, link, onNavigate, delay, isInView }: EducationLevelItemProps) {
  return (
    <motion.button
      onClick={() => onNavigate(link)}
      className="w-full flex items-center justify-between px-4 md:px-6 h-[52px] md:h-[56px] border border-[#1a5336] text-left cursor-pointer hover:bg-[#fffae9]/60 transition-all group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + delay }}
      whileHover={{ borderColor: '#14432b' }}
    >
      <span className="font-['Crimson_Pro'] text-lg md:text-xl text-[#1a5336]">
        {label}
      </span>
      <motion.svg 
        className="w-5 h-5 text-[#1a5336]" 
        fill="none" 
        viewBox="0 0 24 24"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <path 
          d="M9 6L15 12L9 18" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </motion.svg>
    </motion.button>
  );
}

// ==================== SECTION 4: Founding Message ====================
export function FoundingMessageSection({ onNavigate }: FoundingMessageSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="w-full bg-[#1a5336] relative overflow-hidden sm:py-0 "
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {/* Decorative background items */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
       <motion.img src={items01} alt="" className="absolute top-10 left-5 w-32 opacity-20 z-10" initial={{ scale: 0.8, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 0.2 } : {}} transition={{ duration: 0.8, delay: 0.1 }} /> 
       <motion.img src={items02} alt="" className="absolute bottom-20 right-10 w-40 opacity-20 z-10" initial={{ scale: 0.8, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 0.2 } : {}} transition={{ duration: 0.8, delay: 0.3 }} /> 
       <motion.img src={items03} alt="" className="absolute top-1/2 right-20 w-24 opacity-20 z-10" initial={{ scale: 0.8, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 0.2 } : {}} transition={{ duration: 0.8, delay: 0.5 }} />
        <motion.img alt="" className="absolute top-[200px] left-20 w-20 opacity-20 z-10" initial={{ scale: 0.8, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 0.2 } : {}} transition={{ duration: 0.8, delay: 0.7 }} />
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Image Section */}
          <motion.div
            className="relative order-1 md:order-1 w-full overflow-hidden rounded-none md:rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={founderPortrait}
              alt="The late People's Teacher, Dr. Do Huu Tai - Founder of LHBS"
              className="w-full h-auto max-h-[600px] object-cover object-center md:w-[720px] mx-auto"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="order-2 md:order-2 flex flex-col justify-center text-start md:text-left mt-8 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-start md:justify-start mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 160 160"
                fill="none"
              >
                <path
                  d="M106.667 20C103.131 20 99.7392 21.4048 97.2387 23.9052C94.7383 26.4057 93.3335 29.7971 93.3335 33.3333V73.3333C93.3335 76.8696 94.7383 80.2609 97.2387 82.7614C99.7392 85.2619 103.131 86.6667 106.667 86.6667C108.435 86.6667 110.131 87.369 111.381 88.6193C112.631 89.8695 113.333 91.5652 113.333 93.3333V100C113.333 103.536 111.929 106.928 109.428 109.428C106.928 111.929 103.536 113.333 100 113.333C98.2321 113.333 96.5364 114.036 95.2861 115.286C94.0359 116.536 93.3335 118.232 93.3335 120V133.333C93.3335 135.101 94.0359 136.797 95.2861 138.047C96.5364 139.298 98.2321 140 100 140C110.609 140 120.783 135.786 128.284 128.284C135.786 120.783 140 110.609 140 100V33.3333C140 29.7971 138.595 26.4057 136.095 23.9052C133.594 21.4048 130.203 20 126.667 20H106.667Z"
                  fill="#FFFAE9"
                />
                <path
                  d="M33.3333 20C29.7971 20 26.4057 21.4048 23.9052 23.9052C21.4048 26.4057 20 29.7971 20 33.3333V73.3333C20 76.8696 21.4048 80.2609 23.9052 82.7614C26.4057 85.2619 29.7971 86.6667 33.3333 86.6667C35.1014 86.6667 36.7971 87.369 38.0474 88.6193C39.2976 89.8695 40 91.5652 40 93.3333V100C40 103.536 38.5952 106.928 36.0948 109.428C33.5943 111.929 30.2029 113.333 26.6667 113.333C24.8986 113.333 23.2029 114.036 21.9526 115.286C20.7024 116.536 20 118.232 20 120V133.333C20 135.101 20.7024 136.797 21.9526 138.047C23.2029 139.298 24.8986 140 26.6667 140C37.2753 140 47.4495 135.786 54.9509 128.284C62.4524 120.783 66.6667 110.609 66.6667 100V33.3333C66.6667 29.7971 65.2619 26.4057 62.7614 23.9052C60.2609 21.4048 56.8696 20 53.3333 20H33.3333Z"
                  fill="#FFFAE9"
                />
              </svg>
            </div>

            <h2 className="font-['Crimson_Pro'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#fffae9] mb-6 leading-tight">
              For ourself, our community, and our society
            </h2>

            <p className="font-['Lexend_Deca'] text-base sm:text-lg md:text-xl text-[#fffae9]/90 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate Vietnamese heritage and identity while embracing global knowledge, skills, and citizenship—contributing positively to themselves, their communities, and society.
            </p>

            <div className="mb-8">
              <p className="font-['Lexend_Deca'] text-base md:text-lg text-[#fffae9] font-semibold mb-1">
                The late People&apos;s Teacher, Dr. Do Huu Tai
              </p>
              <p className="font-['Lexend_Deca'] text-sm md:text-base text-[#fffae9]/70">
                Founder of Lac Hong Bilingual Primary - Secondary - High School
              </p>
            </div>

            <div className="flex md:justify-start pb-">
              <motion.button
                onClick={() => onNavigate("/our-school/leadership")}
                className="px-8 h-12 md:h-14 border-2 border-[#fffae9] text-[#fffae9] font-['Arial'] font-bold cursor-pointer hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ==================== PILLAR MODAL ====================
function PillarModal({ pillarIndex, onClose }: { pillarIndex: number; onClose: () => void }) {
  const pillars = [
    {
      title: 'Academic Excellence',
      icon: '🎓',
      description: 'We provide a rigorous, engaging curriculum that challenges students to think deeply, ask questions, and develop a genuine passion for learning across all disciplines.',
      points: [
        'International curriculum standards',
        'Personalized learning approaches',
        'Critical thinking development',
        'Research-based methodologies'
      ]
    },
    {
      title: 'Truly Bilingual',
      icon: '🌏',
      description: 'Our bilingual program seamlessly integrates Vietnamese and English, enabling students to think, communicate, and excel in both languages naturally.',
      points: [
        'Balanced Vietnamese-English instruction',
        'Native-speaking teachers',
        'Cultural integration',
        'Language immersion approach'
      ]
    },
    {
      title: 'International Curiosity',
      icon: '🔍',
      description: 'We foster a spirit of inquiry and exploration, encouraging students to discover, question, and understand the world around them.',
      points: [
        'Project-based learning',
        'Global perspectives',
        'Scientific exploration',
        'Creative problem-solving'
      ]
    },
    {
      title: 'Global Mindset',
      icon: '🌐',
      description: 'Students develop cultural awareness, international perspectives, and the skills to thrive in an interconnected world.',
      points: [
        'Cross-cultural competence',
        'International partnerships',
        'Study abroad opportunities',
        'Global citizenship values'
      ]
    },
    {
      title: 'Engaged Citizenship',
      icon: '🤝',
      description: 'We cultivate responsible, compassionate citizens who contribute positively to their communities and society.',
      points: [
        'Community service programs',
        'Leadership development',
        'Social responsibility',
        'Environmental stewardship'
      ]
    }
  ];

  const pillar = pillars[pillarIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{pillar.icon}</div>
              <h2 className="font-['Crimson_Pro'] text-4xl text-[#1a5336]">{pillar.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-3xl text-[#666] hover:text-[#1a5336] transition-colors"
            >
              ×
            </button>
          </div>
          
          <p className="font-['Lexend_Deca'] text-lg text-[#212121] mb-6 leading-relaxed">
            {pillar.description}
          </p>
          
          <h3 className="font-['Crimson_Pro'] text-2xl text-[#1a5336] mb-4">Key Features:</h3>
          <ul className="space-y-3 mb-8">
            {pillar.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#FABA1E] text-xl">✓</span>
                <span className="font-['Lexend_Deca'] text-[#212121]">{point}</span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={onClose}
            className="w-full px-8 py-4 bg-[#1a5336] text-white font-['Arial'] font-bold hover:bg-[#14432b] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}