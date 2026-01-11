'use client'

import Image from 'next/image'
import { motion, PanInfo } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { SchoolLevel } from '../../types'

interface EducationLevelPanelMobileProps {
  levels: SchoolLevel[]
}

export function EducationLevelPanelMobile({ levels }: EducationLevelPanelMobileProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragX, setDragX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % levels.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + levels.length) % levels.length)
  }

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      handlePrev()
    } else if (info.offset.x < -swipeThreshold) {
      handleNext()
    }
  }

  return (
    <section id='solid-education-level' className='w-full h-dvh flex flex-col overflow-hidden relative bg-[#050505]'>
      {/* Ken Burns Animation */}
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.2); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s linear infinite alternate;
          will-change: transform;
        }
      `}</style>

      {/* Background Images */}
      <div className='absolute inset-0 z-0'>
        {levels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1.05 : 1.1
            }}
            transition={{ duration: 0.8 }}
            className='absolute inset-0'
          >
            <div className='absolute inset-0 animate-ken-burns'>
              <Image
                src={level.image}
                alt={level.title}
                fill
                sizes='100vw'
                priority={index === 0}
                className='object-cover select-none'
                draggable={false}
              />
            </div>
          </motion.div>
        ))}

        {/* Overlays */}
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-x-0 bottom-0 h-[80%] bg-linear-to-t from-black/95 via-black/60 to-transparent' />
      </div>

      {/* Content Slider */}
      <div className='relative z-10 flex-1 flex flex-col justify-end overflow-hidden'>
        <motion.div
          className='w-full h-full flex'
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{
            x: `-${currentIndex * 100}%`
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        >
          {levels.map((level, index) => (
            <div key={level.id} className='min-w-full h-full flex flex-col justify-end px-6 pb-20 pt-24'>
              <div className='space-y-6'>
                {/* Decorative Line & Subtitle */}
                <div className='flex flex-col items-start'>
                  <div className='bg-brand-gold w-16 h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
                  <h2 className='text-base md:text-lg font-bold text-brand-gold uppercase tracking-[0.2em] leading-none drop-shadow-md'>
                    {level.subtitle || 'Level'}
                  </h2>
                </div>

                {/* Main Title */}
                <h3 className='text-4xl md:text-5xl font-black text-white leading-[1.1] drop-shadow-2xl uppercase'>
                  {level.title}
                </h3>

                {/* Descriptions */}
                <div className='space-y-3 max-w-xl'>
                  {level.descriptions.map((line, i) => (
                    <div key={i} className='flex items-start'>
                      <div className='w-1.5 h-1.5 min-w-1.5 rounded-full bg-brand-gold mt-2 mr-3 shadow-[0_0_8px_rgba(250,186,30,0.6)]' />
                      <p className='text-white/90 text-sm md:text-base font-medium leading-relaxed drop-shadow-lg'>
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex flex-col gap-3 pt-4'>
                  {index === 0 ? (
                    <>
                      <Link
                        href='https://bh-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                        className='w-full px-6 py-4 bg-brand-gold text-brand-green font-bold rounded-sm hover:bg-white active:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center'
                      >
                        Trấn Biên
                      </Link>
                      <Link
                        href='https://lk-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                        className='w-full px-6 py-4 bg-brand-gold text-brand-green font-bold rounded-sm hover:bg-white active:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center'
                      >
                        Long Khánh
                      </Link>
                    </>
                  ) : (
                    <a
                      href={level.learnMoreUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='w-full px-6 py-4 bg-brand-gold text-brand-green font-bold rounded-sm hover:bg-white active:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center'
                    >
                      Khám phá thêm
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Level Indicators */}
      <div className='absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2'>
        {levels.map((level, index) => (
          <button
            key={level.id}
            onClick={() => handleIndicatorClick(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-10 bg-brand-gold shadow-[0_0_10px_rgba(250,186,30,0.6)]'
                : 'w-1.5 bg-white/40 active:bg-white/60'
            }`}
            aria-label={`Go to ${level.title}`}
          />
        ))}
      </div>
    </section>
  )
}
