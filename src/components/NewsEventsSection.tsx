import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';

interface NewsEvent {
  image: string;
  imageAlt: string;
  tag?: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

export function NewsEventsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const newsEvents: NewsEvent[] = [
    {
      image: 'https://images.unsplash.com/photo-1761469354504-8d14b3a33757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc2Mjk2Mzk5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'LHBS students receiving academic excellence awards at annual ceremony',
      tag: 'ACHIEVEMENT',
      date: 'November 8, 2025',
      title: 'LHBS Students Win National Science Competition',
      excerpt: 'Our Grade 11 students secured first place in the National STEM Innovation Challenge with their groundbreaking environmental monitoring project, beating 150 teams nationwide.',
      link: '/news/national-science-competition-win'
    },
    {
      image: 'https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGN1bHR1cmFsJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzYyOTYzOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Students celebrating cultural diversity at LHBS International Day festival',
      tag: 'EVENT',
      date: 'November 20, 2025',
      title: 'International Day Festival Celebrates Global Unity',
      excerpt: 'Join us for our annual International Day featuring cultural performances, global cuisine, art exhibitions, and interactive workshops representing 30+ countries.',
      link: '/events/international-day-2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1663246544917-9fa8f65b8359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBvcGVuJTIwaG91c2UlMjBldmVudHxlbnwxfHx8fDE3NjI5NjM5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageAlt: 'Families touring LHBS campus during open house event',
      tag: 'ADMISSIONS',
      date: 'December 7-8, 2025',
      title: 'Open House Weekend: Discover LHBS Excellence',
      excerpt: 'Experience LHBS firsthand with campus tours, curriculum showcases, student performances, and meet-and-greets with teachers and administrators. Register now for limited spots.',
      link: '/events/open-house-december-2025'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
        {/* Left: Title & Subtitle */}
        <div>
          <motion.h2
            className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            News & Events
          </motion.h2>
          
          <motion.p
            className="font-['Lexend_Deca'] text-sm text-[#212121]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stay updated with the latest achievements, events, and announcements from LHBS
          </motion.p>
        </div>

        {/* Right: View All Link */}
        <motion.button
          onClick={() => onNavigate('/news-events')}
          className="flex items-center gap-2 font-['Lexend_Deca'] text-sm text-[#1a5336] font-semibold group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 self-start md:self-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>View all news & calendar</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Cards Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {newsEvents.map((newsEvent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            <N_Card {...newsEvent} onNavigate={onNavigate} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// ==================== N_CARD COMPONENT ====================
interface N_CardProps extends NewsEvent {
  onNavigate: (path: string) => void;
}

function N_Card({ image, imageAlt, tag, date, title, excerpt, link, onNavigate }: N_CardProps) {
  const handleClick = () => {
    onNavigate(link);
  };

  return (
    <div 
      className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group h-full flex flex-col"
      onClick={handleClick}
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Optional Tag Pill */}
        {tag && (
          <div className="absolute top-3 left-3 bg-[#FABA1E] px-3 py-1">
            <span className="font-['Lexend_Deca'] text-xs text-[#1a5336] font-semibold">
              {tag}
            </span>
          </div>
        )}
      </div>

      {/* Body Panel */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Meta Row - Date */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-[#1a5336]/60" />
          <span className="font-['Lexend_Deca'] text-xs text-[#212121]/70">
            {date}
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-['Crimson_Pro'] text-xl md:text-2xl text-[#1a5336] mb-3 leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-['Lexend_Deca'] text-sm text-[#212121] mb-4 leading-relaxed line-clamp-3 flex-grow">
          {excerpt}
        </p>

        {/* Read More Link */}
        <button
          className="flex items-center gap-2 font-['Lexend_Deca'] text-sm text-[#1a5336] font-semibold group/link focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 self-start"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(link);
          }}
          aria-label={`Read more about ${title}`}
        >
          <span>Read more</span>
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
