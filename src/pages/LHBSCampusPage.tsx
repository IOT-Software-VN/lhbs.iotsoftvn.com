import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface LHBSCampusPageProps {
  onNavigate: (path: string) => void;
}

export function LHBSCampusPage({ onNavigate }: LHBSCampusPageProps) {
  return (
    <div className="relative ">
      {/* Section 1: Hero */}
      <HeroSection onNavigate={onNavigate} />
      
      {/* Section 2: Intro - Environment Made for Learning */}
      <IntroSection />
      
      {/* Section 3: Facilities Highlight */}
      <FacilitiesHighlightSection onNavigate={onNavigate} />
      
      {/* Section 4: Experience Carousel */}
      <ExperienceCarouselSection />
      
      {/* Section 5: Admissions CTA */}
      <AdmissionsCTASection onNavigate={onNavigate} />
      
      {/* Section 6: Newsletter/Contact */}
      <NewsletterSection />
    </div>
  );
}

// ==================== SECTION 1: HERO ====================
function HeroSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'LHBS Campus' }
  ];

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[65vh] md:min-h-[70vh] flex flex-col overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lhbs.edu.vn/wp-content/uploads/2021/04/MG_5271_Recovered.jpg"
          alt="LHBS Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black" style={{ opacity: 0.35 }} />

      {/* Breadcrumbs inside Hero */}
      <nav 
        className="relative z-20 w-full px-4 md:px-20 pt-3 pb-2"
        style={{ marginTop: '76px' }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 flex-wrap">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />}
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className=" text-sm text-[#fffae9]/90 hover:text-[#FABA1E] transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className=" text-sm text-[#fffae9] font-medium">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex-1 flex items-center" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left spacer on desktop */}
          <div className="hidden lg:block lg:col-span-1" />
          
          {/* Right Content Column */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center py-12 lg:py-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Page Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className=" text-[#FABA1E] uppercase tracking-[0.15em]">
                LHBS Campus
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" text-white mb-6 md:mb-8"
              style={{ fontSize: '48px', lineHeight: '1.24' }}
            >
              An environment made for lifelong learning
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" text-white/90 text-base md:text-lg leading-relaxed max-w-[600px]"
            >
              LHBS is a K–12 bilingual school in Biên Hòa that nurtures future global leaders through active 
              learning, 21st-century education, and a deep respect for Vietnamese cultural values.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== SECTION 2: INTRO ====================
function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto "
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Heading */}
          <h2 
            className=" text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.2' }}
          >
            An environment made for learning
          </h2>
          
          {/* Body Copy */}
          <div className="space-y-4  text-base md:text-lg text-[#212121] leading-relaxed">
            <p>
              Established in 2011 in Biên Hòa, Lac Hong Bilingual School offers a modern bilingual education 
              that empowers students to unlock their full potential. Our comprehensive K–12 program blends 
              Vietnamese national curriculum standards with international best practices, preparing learners 
              for success in a globalized world.
            </p>
            <p>
              Situated on nearly 2 hectares of calm, green surroundings, the LHBS campus provides a safe and 
              inspiring environment dedicated entirely to K–12 learning. From bright, spacious classrooms to 
              state-of-the-art laboratories and collaborative learning spaces, every facility is designed to 
              support active, student-centered education.
            </p>
            <p>
              Our mission is to be a high-quality school that meets both national and international standards, 
              weaving Vietnamese culture and community values into a future-ready educational experience. At LHBS, 
              we cultivate not only academic excellence but also character, creativity, and global citizenship.
            </p>
          </div>
        </motion.div>
        
        {/* Right: Image */}
        <motion.div
          className="relative h-[400px] md:h-[550px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://lhbs.edu.vn/wp-content/uploads/2021/05/MG_5222.jpg"
            alt="Modern LHBS classroom environment"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 3: FACILITIES HIGHLIGHT ====================
function FacilitiesHighlightSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const facilities = [
    'Modern classrooms for Kindergarten to High School',
    'Science laboratories and STEAM/STEM rooms',
    'ICT and AI-Robotics spaces',
    'Library and self-study areas',
    'Multi-purpose hall, playgrounds and sports areas',
    'Support services: medical room, canteen and school bus facilities'
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 
          className=" text-[#1a5336] mb-4"
          style={{ fontSize: '48px', lineHeight: '1.2' }}
        >
          Our modern learning facilities
        </h2>
        <p className=" text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed">
          LHBS provides purpose-built classrooms, laboratories, and shared spaces that support bilingual 
          learning and 21st-century skills including STEAM/STEM, ICT, English proficiency, and essential 
          soft skills for future success.
        </p>
      </motion.div>

      {/* Facilities Checklist */}
      <motion.div
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a5336] flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className=" text-[#212121] text-base leading-relaxed">
                {facility}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          onClick={() => onNavigate('/our-school/facilities')}
          className="px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Facilities
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

// ==================== SECTION 4: EXPERIENCE CAROUSEL ====================
function ExperienceCarouselSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    {
      image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxpbmd1YWwlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MzA4NzkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bilingual learning environment',
      description: 'English–Vietnamese learning excellence with 12 years of 100% high school graduation rates, preparing students for university success both in Vietnam and abroad.'
    },
    {
      image: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGlubm92YXRpb24lMjBwcm9qZWN0fGVufDF8fHx8MTc2MzA4NzkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'STEAM & innovation',
      description: 'Cutting-edge STEAM/STEM programs, AI–Robotics labs, and hands-on projects that develop critical thinking, creativity, and problem-solving skills for the future.'
    },
    {
      image: 'https://images.unsplash.com/photo-1762242663610-fd1c2eb98a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG11c2ljJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzYzMDg3OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Arts & creativity',
      description: 'Rich arts programs including music, visual arts, drama, and performance opportunities through school festivals, concerts, and cultural events.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558696149-f2cf87eb99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHMlMjBoYXBweXxlbnwxfHx8fDE3NjMwNDgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Student life & services',
      description: 'Safe full-day environment with comprehensive support services including counselling, school bus, medical care, library resources, and nutritious canteen meals.'
    },
    {
      image: 'https://images.unsplash.com/photo-1686213011371-2aff28a08f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjMwMDU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Global pathways',
      description: 'Dual Diploma Programs, 2+2 university pathways, summer study abroad opportunities, and comprehensive university roadmaps for international education.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto "
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 
          className=" text-[#1a5336] mb-4"
          style={{ fontSize: '48px', lineHeight: '1.2' }}
        >
          A learning environment like no other
        </h2>
        <p className=" text-base md:text-lg text-[#212121] max-w-3xl mx-auto leading-relaxed">
          LHBS blends Vietnamese culture, bilingual learning, and global programs including Dual Diploma and 
          summer study abroad to create a unique campus experience that prepares students for worldwide opportunities.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 px-4"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="py-8">
                      <h3 className=" text-3xl md:text-4xl text-[#1a5336] mb-4">
                        {experience.title}
                      </h3>
                      <p className=" text-[#212121] text-base md:text-lg leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-[#1a5336] text-[#1a5336] hover:bg-[#1a5336] hover:text-white transition-colors flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#1a5336]' : 'bg-[#1a5336]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 5: ADMISSIONS CTA ====================
function AdmissionsCTASection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative py-32 px-4 md:px-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558696149-f2cf87eb99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHMlMjBoYXBweXxlbnwxfHx8fDE3NjMwNDgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="LHBS Community"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[#1a5336]" style={{ opacity: 0.85 }} />

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className=" text-white mb-6"
          style={{ fontSize: '48px', lineHeight: '1.2' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcoming you from the start
        </motion.h2>

        {/* Body Text */}
        <motion.p
          className=" text-white/90 text-base md:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We invite you to discover more about LHBS admissions, tuition and fees, scholarship opportunities, 
          and our enrollment process. Connect with our counselling team to learn how LHBS can support your 
          child's educational journey from kindergarten through high school graduation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => onNavigate('/admissions')}
            className="px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More About Admissions
          </motion.button>
          
          <motion.button
            onClick={() => onNavigate('/admissions/apply-now')}
            className="px-8 h-12 border-2 border-white text-white  font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#1a5336] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a School Tour
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 6: NEWSLETTER ====================
function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="relative py-16 px-4 md:px-20 max-w-[1440px] mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className=" text-3xl text-[#1a5336] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay connected with LHBS
        </motion.h3>
        
        <motion.p
          className=" text-[#212121] text-base mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Subscribe to receive the latest news, events, and updates from our school community.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 h-12 border-2 border-[#1a5336]/30 bg-white  text-[#212121] focus:outline-none focus:border-[#1a5336]"
          />
          <button className="px-6 h-12 bg-[#1a5336] text-white  font-bold uppercase text-sm tracking-wider hover:bg-[#14432b] transition-colors">
            Subscribe
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}