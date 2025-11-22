import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { BVISHero } from '../components/BVISHero';
import { AcademicExcellenceSection } from '../components/AcademicExcellenceSection';
import { BookTourCTA } from '../components/BookTourCTA';
import { EducationPillarsSection } from '../components/EducationPillarsSection';
import { LHBSLifeVideoSection } from '../components/LHBSLifeVideoSection';
import { AcademicBilingualSection } from '../components/AcademicBilingualSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { LetsBeginCTA } from '../components/LetsBeginCTA';
import { Footer } from '../components/Footer';
import { AnimatedHighlight } from '../components/ui/animated-highlight';
import heroImage from '../assets/hero-01.jpg';
import founderImage from '../assets/hero-01.jpg';
import founderPortrait from '../assets/Section-03.png';
import educationImage from '../assets/hero-01.jpg';
import items01 from '../assets/items-01.png';
import items02 from '../assets/items-02.png';
import items03 from '../assets/items-03.png';
import anniversaryImage from '../assets/anyver.png';
import bgAcademicBilingual from '../assets/bg-Academic&Bilingual.png'
import { ImQuotesRight } from "react-icons/im";

export function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [showEducationModal, setShowEducationModal] = useState<{ image: string; alt: string; title?: string; subtitle?: string } | null>(null);
  const [showCoreStrengthModal, setShowCoreStrengthModal] = useState<{ title: string; description: string; points: string[]; image: string; alt: string } | null>(null);
  
  return (
    <div className="relative bg-white">
      {/* Hero Section - Full-width BVIS style */}
      <BVISHero onNavigate={onNavigate} />
      
      {/* Section 1: Solid Education Foundation */}
      <SolidEducationSection onNavigate={onNavigate} />
      
      {/* Section 2: Founding Message */}
      <FoundingMessageSection onNavigate={onNavigate} />

       {/* Section 2.5: 15 Years Anniversary */}
      <AnniversarySection onNavigate={onNavigate} />

       {/* Section 2.75: Core Strengths - 5 Pillars */}
       <CoreStrengthsSection showModal={showCoreStrengthModal} setShowModal={setShowCoreStrengthModal} />
      
      {/* Section 3: LHBS UNIQUE Education Pillars */}
      <EducationPillarsSection showModal={showEducationModal} setShowModal={setShowEducationModal} />
      
      {/* Core Strength Modal */}
      {showCoreStrengthModal && (
        <CoreStrengthModal 
          title={showCoreStrengthModal.title}
          description={showCoreStrengthModal.description}
          points={showCoreStrengthModal.points}
          image={showCoreStrengthModal.image}
          alt={showCoreStrengthModal.alt}
          onClose={() => setShowCoreStrengthModal(null)}
        />
      )}
      
      {/* Education Pillars Modal */}
      {showEducationModal && (
        <EducationPillarModal 
          image={showEducationModal.image}
          alt={showEducationModal.alt}
          title={showEducationModal.title || ''}
          subtitle={showEducationModal.subtitle || ''}
          onClose={() => setShowEducationModal(null)}
        />
      )}
      
      {/* Section 4: LHBS Life Video */}
      <LHBSLifeVideoSection />
      
      {/* Section 5: Academic & Bilingual Identity */}
      {/* <AcademicBilingualSection onNavigate={onNavigate} /> */}
      
      {/* Section 6: Book a School Tour CTA */}
      <BookTourCTA onNavigate={onNavigate} />
      
      {/* Section 7: What Our Community Says */}
      <TestimonialsSection />
      
      {/* Section 8: News & Events */}
      <NewsEventsSection onNavigate={onNavigate} />
      
      {/* Section 9: Let's Begin CTA */}
      <LetsBeginCTA onNavigate={onNavigate} />
    </div>
  );
}

// ==================== SECTION 1: Solid Education Foundation ====================
function SolidEducationSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationLevels = [
    { label: 'Galaxy KG', link: '/academics/kindergarten' },
    { label: 'LHBS Primary School', link: '/academics/primary' },
    { label: 'LHBS Secondary School', link: '/academics/lower-secondary' },
    { label: 'LHBS High School', link: '/academics/upper-secondary' }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative mx-auto bg-white overflow-hidden flex justify-center"
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

      <div className="max-w-[1440px] grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content - 6 columns */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" py-24 px-4 md:px-20"
        >
          {/* Title - Green background only on "Solid education" */}
          <h2 
            className="text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            <AnimatedHighlight 
              delay={1.5} 
              duration={1.5}
              backgroundColor="#95F77E"
              className="text-[#1a5336]"
            >
              Solid education
            </AnimatedHighlight>
            <span className="block mt-2">
              foundation to Future
            </span>
          </h2>
          
          {/* Body copy */}
          <p className=" text-base md:text-lg text-[#212121] mb-8 leading-relaxed max-w-[70ch]">
          Lac Hong Bilingual School cultivates lifelong learning, nurtures character, and builds global readiness through a holistic bilingual education that harmonizes Vietnamese cultural values with international excellence.
The school empowers students to develop intellectually, emotionally, and globally, enabling them to live with compassion, confidence, and a strong sense of contribution to society.
          </p>
          
          {/* Education levels list */}
          <div className="space-y-3">
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
          className="relative h-full overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={heroImage}
            alt="Students engaged in hands-on learning activities with educational materials"
            className="w-full h-full object-left object-cover"
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
      className="w-full flex items-center justify-between px-4 md:px-6 h-[52px] md:h-[56px] border border-[#1a5336] text-left cursor-pointer hover:bg-gray-50 transition-all group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 rounded-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + delay }}
      whileHover={{ borderColor: '#14432b' }}
    >
      <span className=" text-lg md:text-xl text-[#1a5336]">
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

// ==================== SECTION 2: Founding Message ====================
function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      data-section="founding-message"
      className="mx-auto bg-[#1a5336] flex align-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {/* Background Academic Bilingual Image */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${bgAcademicBilingual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-[1440px] grid md:grid-cols-2 gap-16 items-stretch relative z-20">
        {/* Left: Portrait Image - 6 columns */}
        <motion.div
          className="relative h-[500px] md:h-auto overflow-hidden order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={founderPortrait}
            alt="The late People's Teacher, Dr. Do Huu Tai - Founder of LHBS"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Right: Content with Green Background - 6 columns */}
        <motion.div
          className="relative p-8 md:p-12 flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative quote mark */}
          <div className="text-[#E5A812] text-xl md:text-7xl mb-4 leading-none">
            <ImQuotesRight/>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#fffae9] mb-6">
            For ourself, our community, and our society
          </h2>
          
          {/* Body copy */}
          <p className="font-medium text-base md:text-xl text-[#fffae9]/90 mb-8 leading-relaxed">
            LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate Vietnamese heritage and identity while embracing global knowledge, skills, and citizenship—contributing positively to themselves, their communities, and society.
          </p>
          
          {/* Attribution */}
          <div className="mb-8">
            <p className=" text-sm md:text-xl text-[#fffae9] font-semibold mb-1">
              The late People's Teacher, Dr. Do Huu Tai
            </p>
            <p className=" text-xs md:text-sm text-[#fffae9]/70">
              Founder of Lac Hong Bilingual Primary - Secondary - High School
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <motion.button
              onClick={() => onNavigate('/our-school/about-us')}
              className="px-8 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold cursor-pointer hover: hover:text-[#1a5336] transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 2.5: 15 Years Anniversary ====================
function AnniversarySection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Anniversary Image - 6 columns */}
        <motion.div
          className="relative h-[650px] md:h-[750px] overflow-hidden rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={anniversaryImage}
            alt="Student holding trophy celebrating 15 years of LHBS excellence"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Right: Content - 6 columns */}
        <motion.div
          className="relative flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Title with highlight */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a5336] mb-6 leading-tight font-semi">
            15 years{' '}
            <AnimatedHighlight 
              delay={0.5} 
              duration={1.2}
              backgroundColor="#95F77E"
            >
              and continuing
            </AnimatedHighlight>
            {' '}to educate
          </h2>
          
          {/* Body copy - 3 paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="text-base md:text-lg text-[#212121] leading-relaxed">
              Founded in 2011, Lac Hong Bilingual School offers a modern education to unlock students' potential through innovative methods.
            </p>
            
            <p className="text-base md:text-lg text-[#212121] leading-relaxed">
              We celebrate each student's unique dreams and talents, providing a Learning Pathways that builds a foundation in academics, 21st-century skills, English proficiency, and values, fostering Global Citizens.
            </p>
            
            <p className="text-base md:text-lg text-[#212121] leading-relaxed">
              Our transparent international learning pathways address parental concerns, guiding students to success and future leadership roles.
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <motion.button
              onClick={() => onNavigate('/academics/overview')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336] font-bold cursor-pointer hover:bg-[#e5a812] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 2.75: Core Strengths - 5 Pillars ====================
interface CoreStrengthsSectionProps {
  showModal: { title: string; description: string; points: string[]; image: string; alt: string } | null;
  setShowModal: (modal: { title: string; description: string; points: string[]; image: string; alt: string } | null) => void;
}

function CoreStrengthsSection({ showModal, setShowModal }: CoreStrengthsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const pillars = [
    {
      title: 'ACADEMIC EXCELLENCE',
      description: 'We provide a rigorous, engaging curriculum that challenges students to think deeply, ask questions, and develop a genuine passion for learning across all disciplines.',
      points: [
        'International curriculum standards',
        'Personalized learning approaches',
        'Critical thinking development',
        'Research-based methodologies'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <path d="M32 8 L52 18 L52 38 L32 48 L12 38 L12 18 Z" strokeLinejoin="round" />
          <path d="M32 28 L32 48" />
          <path d="M22 23 L32 28 L42 23" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1758270704191-5d7255cc02dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFjYWRlbWljJTIwZXhjZWxsZW5jZXxlbnwxfHx8fDE3NjMxMDc3NzB8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      title: 'TRULY BILINGUAL',
      description: 'Our bilingual program seamlessly integrates Vietnamese and English, enabling students to think, communicate, and excel in both languages naturally.',
      points: [
        'Balanced Vietnamese-English instruction',
        'Native-speaking teachers',
        'Cultural integration',
        'Language immersion approach'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <circle cx="24" cy="24" r="16" />
          <circle cx="40" cy="40" r="16" />
          <path d="M24 16 L24 32" />
          <path d="M40 32 L40 48" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxpbmd1YWwlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjMxMDc3NzF8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      title: 'INTELLECTUAL CURIOSITY',
      description: 'We foster a spirit of inquiry and exploration, encouraging students to discover, question, and understand the world around them.',
      points: [
        'Project-based learning',
        'Global perspectives',
        'Scientific exploration',
        'Creative problem-solving'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <circle cx="32" cy="28" r="14" />
          <path d="M32 42 L32 54" />
          <path d="M26 54 L38 54" />
          <path d="M28 48 L36 48" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1758685734030-a31d96462eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGN1cmlvc2l0eSUyMHNjaWVuY2V8ZW58MXx8fHwxNzYzMTA3NzcxfDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      title: 'GLOBAL MINDSET',
      description: 'Students develop cultural awareness, international perspectives, and the skills to thrive in an interconnected world.',
      points: [
        'Cross-cultural competence',
        'International partnerships',
        'Study abroad opportunities',
        'Global citizenship values'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <circle cx="32" cy="32" r="20" />
          <ellipse cx="32" cy="32" rx="12" ry="20" />
          <path d="M12 32 L52 32" />
          <path d="M20 20 L44 20" />
          <path d="M20 44 L44 44" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1660182922635-713da2867c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBzdHVkZW50cyUyMGRpdmVyc2l0eXxlbnwxfHx8fDE3NjMxMDc3NzJ8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      title: 'ENGAGED CITIZENSHIP',
      description: 'We cultivate responsible, compassionate citizens who contribute positively to their communities and society.',
      points: [
        'Community service programs',
        'Leadership development',
        'Social responsibility',
        'Environmental stewardship'
      ],
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#1a5336" strokeWidth="1.5">
          <path d="M32 12 L36 28 L52 28 L40 38 L44 54 L32 44 L20 54 L24 38 L12 28 L28 28 Z" strokeLinejoin="round" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1758582171503-ce7b5c28bb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzYzMTA3NzcyfDA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  const handleImageClick = (pillar: typeof pillars[0]) => {
    setShowModal({
      title: pillar.title,
      description: pillar.description,
      points: pillar.points,
      image: pillar.image,
      alt: `${pillar.title} at LHBS`
    });
  };

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Top Text Block with Highlights */}
     <motion.div 
  className="text-center mb-16 max-w-full mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
>
      
  {/* Line 1 */}
  <h2 className="whitespace-nowrap font-['SVN-Gotham'] text-2xl md:text-3xl lg:text-4xl text-[#1a5336]">
    We&nbsp;
    <AnimatedHighlight delay={0.4} duration={0.6} className="px-0">educate</AnimatedHighlight>
    &nbsp;not just for success, but&nbsp;
    <AnimatedHighlight delay={0.8} duration={0.6} className="px-0">for significance.</AnimatedHighlight>
  </h2>

  {/* Line 2 */}
  <h2 className="whitespace-nowrap font-['SVN-Gotham'] text-2xl md:text-3xl lg:text-4xl text-[#1a5336] mt-4">
    We&nbsp;
    <AnimatedHighlight delay={1.0} duration={0.6} className="px-0">nurture</AnimatedHighlight>
    &nbsp;not just bright minds, but&nbsp;
    <AnimatedHighlight delay={1.4} duration={0.6} className="px-0">bright futures.</AnimatedHighlight>
  </h2>

</motion.div>


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

 {/* <div className="text-center mb-16 relative z-10">
        <motion.h2
          className=" text-4xl md:text-5xl lg:text-6xl text-[#1a5336]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Academic & Bilingual Identity
        </motion.h2>
      </div> */}

      {/* 5 Vertical Pillar Cards */}
      <div className="py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1440px] mx-auto">
          {pillars.map((pillar, index) => (
            <motion.button
              key={index}
              onClick={() => handleImageClick(pillar)}
              className="bg-[#fffae9] flex flex-col rounded-lg relative overflow-hidden cursor-pointer hover:bg-[#f5f3e7] hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FABA1E]/50 text-left"
              style={{ minHeight: '520px' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              {/* Title at top-left */}
              <div className="p-6 pb-4">
                <h3 className="font-['SVN-Gotham'] text-base md:text-2xl tracking-wider text-[#1a5336] font-semibold">
                  {pillar.title}
                </h3>
              </div>

              {/* Icon in middle */}
              <div className="flex-1 flex items-center justify-center relative z-10 py-4">
                <div className="transform scale-125">
                  {pillar.icon}
                </div>
              </div>

              {/* Circular photo overlapping bottom of icon */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div 
                  className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white group-hover:border-[#FABA1E] transition-all duration-300"
                  style={{
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                  }}
                >
                  <img 
                    src={pillar.image} 
                    alt={`${pillar.title} at LHBS`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="h-24"></div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


// ==================== CORE STRENGTH MODAL ====================
interface CoreStrengthModalProps {
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
  onClose: () => void;
}

function CoreStrengthModal({ title, description, points, image, alt, onClose }: CoreStrengthModalProps) {
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - Top Half */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content - Bottom Half */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a5336] mb-4">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-[#212121] leading-relaxed mb-8">
            {description}
          </p>

          <h3 className="text-2xl font-bold text-[#1a5336] mb-6">Key Features:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#FABA1E] text-xl font-bold">✓</span>
                <span className="text-[#212121] text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ==================== EDUCATION PILLAR MODAL ====================
interface EducationPillarModalProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  onClose: () => void;
}

function EducationPillarModal({ image, alt, title, subtitle, onClose }: EducationPillarModalProps) {
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - Top Half */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content - Bottom Half */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a5336] mb-4">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-[#212121] leading-relaxed">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}