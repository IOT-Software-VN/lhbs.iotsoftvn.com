'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react'
import { schoolData } from '../constants'
import { type SchoolLevel } from '../types'
import { SchoolIcon } from './school-icon'
import { cn } from '@lhbs/utils'

const lhbsHac = '/images/base/lhbs-hac.png'

interface LevelSectionProps {
  level: SchoolLevel
  index: number
  onNavigate: (path: string) => void
}

export function LevelSection({ level, index, onNavigate }: LevelSectionProps) {
  const isEven = index % 2 === 0
  const containerRef = useRef<HTMLDivElement>(null)
  const competencies = schoolData[level].competencies

  // Đảm bảo luôn có đủ 9 competencies (3 slides × 3 items)
  const itemsPerSlide = 3
  const totalSlides = 3

  // Tạo mảng 9 competencies bằng cách lặp lại nếu cần
  const targetCount = totalSlides * itemsPerSlide
  const extendedCompetencies: string[] = []

  if (competencies.length > 0) {
    for (let i = 0; i < targetCount; i++) {
      extendedCompetencies.push(competencies[i % competencies.length])
    }
  }

  // Chia thành 3 nhóm, mỗi nhóm 3 items
  const groupedCompetencies: string[][] = []
  for (let i = 0; i < totalSlides; i++) {
    const startIndex = i * itemsPerSlide
    const group = extendedCompetencies.slice(startIndex, startIndex + itemsPerSlide)
    groupedCompetencies.push(group)
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div
      ref={containerRef}
      id={`section-${level}`}
      className={cn(
        'relative min-h-[80vh] flex items-center py-20 md:py-32 justify-center md:justify-start md:justify-end',
        isEven ? 'md:justify-start' : 'md:justify-end'
      )}
    >
      <div
        className={cn(
          'relative w-full md:w-[90%] lg:w-[85%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center',
          isEven ? '' : 'md:grid-flow-dense'
        )}
      >
        {/* Visual/Image Side - Alternates */}
        <div className={cn('relative group order-2', isEven ? 'md:order-1' : 'md:order-2')}>
          {/* Floating Glass Card Effect */}
          <motion.div
            style={{ y, opacity }}
            className='relative z-10 w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-linear-to-br from-brand-green to-[#004d2c]'
          >
            {/* Background Orbs */}
            <div className='absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-brand-gold rounded-full blur-[80px] opacity-[0.2] -mr-10 -mt-10 mix-blend-screen' />
            <div className='absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white rounded-full blur-[60px] opacity-[0.1] -ml-10 -mb-10 mix-blend-overlay' />

            {/* Large Logo Icon - Center */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 z-0'>
              <Image
                src={lhbsHac}
                alt='LHBS Logo'
                width={400}
                height={400}
                className='w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_30px_rgba(250,186,30,0.4)]'
              />
            </div>

            {/* Dynamic Competencies Slider overlay */}
            <div className='absolute inset-0 flex flex-col justify-center overflow-hidden'>
              {/* Multi-layer gradient background with depth */}
              <div className='absolute inset-0 bg-linear-to-t from-[#004d2c]/98 via-brand-green/85 via-[#004d2c]/70 to-transparent' />
              {/* Accent glow from center */}
              <div className='absolute inset-0 bg-radial from-brand-gold/10 via-transparent to-transparent opacity-60' />
              {/* Top subtle fade */}
              <div className='absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-black/10 via-transparent to-transparent' />
              {/* Bottom subtle fade */}
              <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/10 via-transparent to-transparent' />
              {/* Animated light rays */}
              <div className='absolute top-1/2 left-1/4 -translate-y-1/2 w-px h-1/2 bg-linear-to-t from-brand-gold/20 via-brand-gold/5 to-transparent blur-sm animate-pulse' />
              <div
                className='absolute top-1/2 right-1/3 -translate-y-1/2 w-px h-1/2 bg-linear-to-t from-brand-gold/15 via-brand-gold/5 to-transparent blur-sm animate-pulse'
                style={{ animationDelay: '1s' }}
              />

              {/* Content - Direct on green background with fixed padding */}
              <div className='relative z-10 w-full flex flex-col justify-center items-center px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-10'>
                {/* Header */}
                <div className='relative flex items-center gap-2 md:gap-3 mb-3 md:mb-4 lg:mb-5 w-full'>
                  <div className='relative p-1.5 md:p-2 bg-brand-gold rounded-lg text-[#004d2c] shadow-lg shadow-brand-gold/30 ring-2 ring-brand-gold/20'>
                    <Sparkles className='w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-current' />
                    <div className='absolute -top-0.5 -right-0.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-gold rounded-full blur-sm opacity-60 animate-pulse' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] leading-tight truncate'>
                      Core Competencies
                    </h3>
                    <p className='text-[8px] md:text-[9px] lg:text-[10px] text-white/60 uppercase tracking-wider mt-0.5 truncate'>
                      Năng lực cốt lõi
                    </p>
                  </div>
                </div>

                {/* Slider Container - Fixed height to ensure content fits */}
                <div className='relative overflow-hidden flex flex-col justify-center h-[140px] md:h-[160px] lg:h-[180px] w-full'>
                  <AnimatePresence mode='wait'>
                    <motion.ul
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className='space-y-2.5 md:space-y-3 lg:space-y-4'
                    >
                      {groupedCompetencies[currentSlide]?.map((item, i) => (
                        <li key={i} className='flex items-start gap-2 md:gap-2.5 lg:gap-3 transition-all duration-200'>
                          <div className='relative shrink-0 mt-0.5'>
                            <CheckCircle2 className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-brand-gold fill-brand-gold/20 transition-all duration-200' />
                            <div className='absolute inset-0 bg-brand-gold rounded-full blur-md opacity-30' />
                          </div>
                          <span className='text-xs md:text-sm lg:text-base text-white/95 leading-snug md:leading-relaxed font-medium line-clamp-2'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </div>

                {/* Slider Indicators - Centered */}
                {totalSlides > 1 && (
                  <div className='relative mt-3 md:mt-4 lg:mt-5 flex items-center justify-center gap-1.5 md:gap-2 w-full'>
                    {groupedCompetencies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                          'relative transition-all duration-300',
                          'focus:outline-none focus:ring-2 focus:ring-brand-gold/50 rounded-full'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div
                          className={cn(
                            'h-1.5 md:h-2 rounded-full transition-all duration-300',
                            index === currentSlide
                              ? 'w-5 md:w-6 lg:w-8 bg-brand-gold shadow-[0_0_8px_rgba(250,186,30,0.6)]'
                              : 'w-1.5 md:w-2 bg-white/40 hover:bg-white/60'
                          )}
                        />
                        {index === currentSlide && (
                          <motion.div
                            layoutId='activeIndicator'
                            className='absolute inset-0 bg-brand-gold rounded-full shadow-[0_0_8px_rgba(250,186,30,0.6)]'
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Side - Alternates */}
        <div className={cn('space-y-6 md:space-y-8 relative z-20 order-1', isEven ? 'md:order-2' : 'md:order-1')}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='relative'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-brand-gold rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 relative z-30 shadow-lg shadow-brand-gold/30'>
              {/* Explicit Anchor Point for Timeline Calculation */}
              <div id={`timeline-anchor-${level}`} className='absolute left-1/2 top-1/2 w-0 h-0' />

              <SchoolIcon level={level} />
              <span>{schoolData[level].grade}</span>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-brand-green mb-6 leading-tight uppercase relative z-30 bg-white/95 px-2 py-1 rounded'>
              {schoolData[level].title}
            </h2>

            <p className='text-base md:text-lg text-gray-600 leading-relaxed font-light text-justify mb-8 relative z-30 bg-white/90 px-2 py-2 rounded'>
              {schoolData[level].description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(schoolData[level].link)}
              className='group inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-[#003820] transition-colors shadow-xl shadow-brand-green/20'
            >
              Khám phá ngay
              <ChevronRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
            </motion.button>

            {/* Certificate Logos - Like Footer */}
            <div className='mt-10 pt-8 border-t border-gray-100 flex items-center gap-3 md:gap-6 lg:gap-8 pb-2 relative z-30 overflow-x-auto scrollbar-hide'>
              {schoolData[level].certificates
                .filter((cert) => cert.logo) // Chỉ hiển thị certificates có logo
                .slice(0, 3) // Chỉ hiển thị 3 logo đầu tiên (đã đảm bảo khác nhau trong constants)
                .map((cert, idx) => (
                  <div
                    key={idx}
                    className='shrink-0 rounded-lg p-3 md:p-4 lg:p-5 h-16 md:h-20 lg:h-24 w-24 md:w-32 lg:w-40 xl:w-44 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md'
                  >
                    <div className='relative w-full h-full'>
                      <Image
                        src={cert.logo!}
                        alt={cert.name}
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 128px, (max-width: 1024px) 160px, 176px'
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
