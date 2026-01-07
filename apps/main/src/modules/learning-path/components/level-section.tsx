'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { CheckCircle2, ChevronRight, Star } from 'lucide-react'
import { schoolData } from '../constants'
import { type SchoolLevel } from '../types'
import { SchoolIcon } from './school-icon'
import { cn } from '@lhbs/utils'

const cardlhbs = '/images/base/card-lhbs.png'

interface LevelSectionProps {
  level: SchoolLevel
  index: number
  onNavigate: (path: string) => void
}

export function LevelSection({ level, index, onNavigate }: LevelSectionProps) {
  const isEven = index % 2 === 0
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div
      ref={containerRef}
      id={`section-${level}`}
      className={cn('relative min-h-[80vh] flex items-center py-20 md:py-32', isEven ? 'justify-start' : 'justify-end')}
    >
      <div
        className={cn(
          'relative w-full md:w-[90%] lg:w-[85%] grid md:grid-cols-2 gap-12 lg:gap-20 items-center',
          isEven ? '' : 'md:grid-flow-dense'
        )}
      >
        {/* Visual/Image Side - Alternates */}
        <div className={cn('relative group', isEven ? 'md:order-1' : 'md:order-2')}>
          {/* Floating Glass Card Effect */}
          <motion.div
            style={{ y, opacity }}
            className='relative z-10 w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-linear-to-br from-[#006b3d] to-[#004d2c]'
          >
            {/* Background Orbs */}
            <div className='absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold rounded-full blur-[80px] opacity-[0.2] -mr-10 -mt-10 mix-blend-screen' />
            <div className='absolute bottom-0 left-0 w-[200px] h-[200px] bg-white rounded-full blur-[60px] opacity-[0.1] -ml-10 -mb-10 mix-blend-overlay' />

            {/* Large Golden Icon - Reference Style */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'>
              <SchoolIcon
                level={level}
                className='w-40 h-40 md:w-56 md:h-56 text-brand-gold drop-shadow-[0_0_30px_rgba(250,186,30,0.4)]'
              />
            </div>

            {/* Logo Watermark */}
            <Image
              src={cardlhbs}
              alt='LHBS Logo'
              width={500}
              height={500}
              className='absolute bottom-0 right-0 w-3/4 h-auto object-contain opacity-[0.05] pointer-events-none translate-x-[20%] translate-y-[20%] z-0 rotate-[-10deg]'
            />

            {/* Dynamic Check List overlay */}
            <div className='absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-[#004d2c]/90 via-transparent to-transparent'>
              <div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transform transition-transform group-hover:scale-[1.02]'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-2 bg-brand-gold rounded-lg text-[#004d2c] shadow-lg shadow-brand-gold/20'>
                    <Star className='w-5 h-5 fill-current' />
                  </div>
                  <h3 className='text-base font-bold text-white uppercase tracking-wider'>Năng lực cốt lõi</h3>
                </div>
                <ul className='space-y-3'>
                  {schoolData[level].competencies.slice(0, 3).map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle2 className='w-4 h-4 text-brand-gold mt-0.5 shrink-0' />
                      <span className='text-sm text-white/90 line-clamp-1'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decorative Dots - Right Side (Reference Image 2 Style) */}
            <div className='absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20'>
              {[...Array(5)].map((_, i) => (
                <div key={i} className='w-2.5 h-2.5 rounded-full bg-white/50 shadow-sm backdrop-blur-sm' />
              ))}
            </div>
          </motion.div>

          {/* Decorative Elements behind */}
          <div
            className={cn(
              'absolute top-10 -z-10 w-full h-full border-2 border-brand-gold/30 rounded-[2.5rem]',
              isEven ? '-left-6 rotate-3' : '-right-6 -rotate-3'
            )}
          />
        </div>

        {/* Content Side - Alternates */}
        <div className={cn('space-y-6 md:space-y-8', isEven ? 'md:order-2' : 'md:order-1')}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-[#006b3d] text-xs font-bold uppercase tracking-widest mb-6 relative z-20 bg-white'>
              {/* Explicit Anchor Point for Timeline Calculation */}
              <div id={`timeline-anchor-${level}`} className='absolute left-1/2 top-1/2 w-0 h-0' />

              <SchoolIcon level={level} />
              <span>{schoolData[level].grade}</span>
            </div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#006b3d] mb-6 leading-tight uppercase'>
              {schoolData[level].title}
            </h2>

            <p className='text-lg text-gray-600 leading-relaxed font-light text-justify mb-8'>
              {schoolData[level].description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(schoolData[level].link)}
              className='group inline-flex items-center gap-3 px-8 py-4 bg-[#006b3d] text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-[#003820] transition-colors shadow-xl shadow-[#006b3d]/20'
            >
              Khám phá ngay
              <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
            </motion.button>

            {/* Certificate badges small row */}
            <div className='mt-10 pt-8 border-t border-gray-100 flex gap-6 overflow-x-auto pb-2 scrollbar-hide'>
              {schoolData[level].certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className='flex flex-col items-center gap-2 min-w-[60px] opacity-60 hover:opacity-100 transition-opacity'
                >
                  <cert.icon className='w-6 h-6 text-gray-400 group-hover:text-[#006b3d]' />
                  <span className='text-[10px] font-bold text-gray-400 uppercase text-center max-w-[80px]'>
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
