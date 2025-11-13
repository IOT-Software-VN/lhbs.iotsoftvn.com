import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  quote: string;
  avatar: string;
  avatarAlt: string;
  name: string;
  role: string;
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials: Testimonial[] = [
    {
      quote: "LHBS has transformed our daughter's education. The bilingual program is exceptional—she speaks both Vietnamese and English fluently. The teachers are dedicated, and the international curriculum prepares her for a global future.",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      avatarAlt: 'Mrs. Nguyen Thi Lan, parent',
      name: 'Mrs. Nguyen Thi Lan',
      role: 'Parent of Grade 8 Student'
    },
    {
      quote: "As an alumnus, I can say LHBS gave me the foundation to succeed at university abroad. The critical thinking skills, bilingual fluency, and cultural awareness I gained here were invaluable. I'm grateful for the opportunities LHBS provided.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      avatarAlt: 'Tran Minh Quan, alumnus',
      name: 'Tran Minh Quan',
      role: 'Class of 2018 Alumnus, University of Melbourne'
    },
    {
      quote: "Teaching at LHBS is incredibly rewarding. The school's commitment to bilingual excellence and holistic development creates an environment where both teachers and students thrive. The community support and professional development are outstanding.",
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      avatarAlt: 'Ms. Emily Carter, teacher',
      name: 'Ms. Emily Carter',
      role: 'English Language Teacher, 5 years at LHBS'
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
      {/* Header - Centered */}
      <div className="text-center mb-16">
        <motion.h2
          className="font-['Crimson_Pro'] text-4xl md:text-5xl lg:text-6xl text-[#1a5336] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What Our Community Says
        </motion.h2>
        
        <motion.p
          className="font-['Lexend_Deca'] text-sm text-[#212121] max-w-[720px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hear from parents, students, and teachers about their experiences at LHBS and how our bilingual 
          education has made a lasting impact on their lives and future success.
        </motion.p>
      </div>

      {/* Cards Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <T_Card {...testimonial} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// ==================== T_CARD COMPONENT ====================
interface T_CardProps extends Testimonial {}

function T_Card({ quote, avatar, avatarAlt, name, role }: T_CardProps) {
  return (
    <div className="bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-3">
        <Quote className="w-6 h-6 md:w-7 md:h-7 text-[#FABA1E]" />
      </div>

      {/* Quote Text */}
      <blockquote className="font-['Lexend_Deca'] text-base text-[#212121] mb-4 leading-relaxed flex-grow">
        "{quote}"
      </blockquote>

      {/* Author Block */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#1a5336]/10">
        {/* Avatar */}
        <div className="w-12 h-12 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={avatar}
            alt={avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <div className="flex-1 min-w-0">
          <p className="font-['Lexend_Deca'] text-sm text-[#1a5336] font-semibold truncate">
            {name}
          </p>
          <p className="font-['Lexend_Deca'] text-xs text-[#212121]/70 line-clamp-2">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
