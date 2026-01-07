import Image from 'next/image'
import { motion } from 'motion/react'
import { CheckCircle2, ChevronRight, Star, GraduationCap } from 'lucide-react'
import { schoolData } from '../constants'
import { type SchoolLevel } from '../types'
import { SchoolIcon } from './school-icon'

const cardlhbs = '/images/base/card-lhbs.png'

interface LevelCardProps {
  level: SchoolLevel
  onNavigate: (path: string) => void
}

export function LevelCard({ level, onNavigate }: LevelCardProps) {
  return (
    <motion.div
      key={level}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'backOut' }}
      className='relative w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#006b3d] shadow-2xl group min-h-[500px] border border-white/10'
    >
      {/* Dynamic Background Gradient */}
      <div className='absolute inset-0 bg-linear-to-br from-[#006b3d] to-[#004d2c] z-0' />

      {/* Decorative Orbs */}
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold rounded-full blur-[100px] opacity-[0.2] -mr-20 -mt-20 pointer-events-none mix-blend-screen' />
      <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#66a382] rounded-full blur-[80px] opacity-[0.2] -ml-10 -mb-10 pointer-events-none mix-blend-overlay' />

      {/* Logo Watermark */}
      <Image
        src={cardlhbs}
        alt='LHBS Logo'
        width={600}
        height={600}
        className='absolute bottom-0 right-0 w-auto h-40 md:h-64 object-contain opacity-[0.07] pointer-events-none translate-x-[15%] translate-y-[15%] z-0 rotate-[-10deg]'
      />

      <div className='relative z-10 p-6 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start md:items-center'>
        {/* Left Column: Core Info */}
        <div className='space-y-6 md:space-y-8'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 border border-white/20 rounded-full text-brand-gold text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-4 md:mb-6 shadow-inner'
            >
              <SchoolIcon level={level} />
              <span>{schoolData[level].grade}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight'
            >
              {schoolData[level].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-base md:text-lg text-white/90 leading-relaxed font-light text-justify md:text-left'
            >
              {schoolData[level].description}
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => onNavigate(schoolData[level].link)}
            className='group/btn inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-[#006b3d] font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-[#003820] transition-all duration-300 shadow-xl hover:shadow-brand-gold/40 hover:-translate-y-1'
          >
            Tìm hiểu chi tiết
            <ChevronRight className='w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform' />
          </motion.button>
        </div>

        {/* Right Column: Competencies & Stats */}
        <div className='relative'>
          {/* Glass Card */}
          <div className='bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 md:p-10 shadow-2xl relative z-10 overflow-hidden'>
            {/* Subtle internal shine */}
            <div className='absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent pointer-events-none' />

            <div className='flex items-center gap-3 mb-6 pb-6 border-b border-white/10'>
              <div className='p-2.5 bg-brand-gold rounded-xl text-[#004d2c] shadow-lg shadow-brand-gold/20'>
                <Star className='w-6 h-6 fill-current' />
              </div>
              <h3 className='text-lg md:text-xl font-bold text-white uppercase tracking-wider'>Năng lực cốt lõi</h3>
            </div>

            <ul className='space-y-4'>
              {schoolData[level].competencies.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className='flex items-start gap-4 group/item'
                >
                  <div className='mt-0.5 p-1 rounded-full bg-white/20 text-brand-gold shadow-sm group-hover/item:bg-brand-gold group-hover/item:text-[#004d2c] transition-colors duration-300'>
                    <CheckCircle2 className='w-4 h-4' />
                  </div>
                  <span className='text-white/95 text-sm md:text-base font-medium leading-snug'>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Added decorative highlight at bottom */}
            <div className='mt-8 pt-6 border-t border-white/10 flex items-center justify-between opacity-80'>
              <span className='text-xs text-white/60 font-mono tracking-widest'>LHBS EDUCATION SYSTEM</span>
              <GraduationCap className='w-5 h-5 text-brand-gold/50' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
