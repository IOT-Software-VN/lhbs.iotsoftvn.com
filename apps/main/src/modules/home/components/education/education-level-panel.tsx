import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import type { SchoolLevel } from '../../types'
import Link from 'next/link'

interface EducationLevelPanelProps {
  item: SchoolLevel
  index: number
  isActive: boolean
  widthPercentage: string
  onMouseEnter: () => void
}

export function EducationLevelPanel({
  item,
  index,
  isActive,
  widthPercentage,
  onMouseEnter
}: EducationLevelPanelProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`
        relative h-full transition-[flex-basis] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        flex flex-col justify-end overflow-hidden group cursor-pointer shrink-0
        border-l first:border-l-0 border-white/10 transform-gpu
      `}
      style={{ flexBasis: widthPercentage }}
    >
      {/* BACKGROUND LAYER */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Wrapper handles Grayscale/Filter transition purely via CSS */}
        <div
          className={`
            absolute inset-0 w-full h-full
            transition-[filter] duration-700 ease-in-out
            ${isActive ? 'grayscale-0' : 'grayscale-50 group-hover:grayscale-0'}
          `}
        >
          {/* Inner Image handles ONLY the Scale/Ken Burns animation via CSS */}
          <div className='absolute inset-0 w-full h-full animate-ken-burns pointer-events-none'>
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes='(max-width: 768px) 100vw, 60vw'
              priority
              className='object-cover select-none'
              draggable={false}
            />
          </div>
        </div>

        {/* Dark Overlay */}
        <div
          className={`
            absolute inset-0 bg-black/40 transition-opacity duration-700
            ${isActive ? 'opacity-30' : 'opacity-60 group-hover:opacity-40'}
          `}
        />

        {/* Gradient */}
        <div
          className={`
            absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent 
            transition-all duration-500 pointer-events-none
            ${isActive ? 'h-[80%] opacity-100' : 'h-[60%] opacity-90'}
          `}
        />
      </div>

      {/* INACTIVE STATE: Vertical Text */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            key={`vertical-${item.id}`}
            className='absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-end pb-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className='flex flex-col items-center'>
              {/* Decorative Line (Vertical) */}
              <div className='bg-brand-gold w-2 h-20 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />

              {/* Subtitle (Vertical) */}
              <div className='h-[400px] flex flex-col justify-end items-center'>
                <h2
                  className='text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-widest whitespace-nowrap drop-shadow-xl'
                  style={{
                    writingMode: 'vertical-rl',
                    rotate: '180deg',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  {item.subtitle || 'Level'}
                </h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACTIVE STATE: Horizontal Text */}
      <AnimatePresence mode='wait'>
        {isActive && (
          <div
            key={`content-wrapper-${item.id}`}
            className='absolute inset-0 z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-end w-full pointer-events-none'
          >
            <motion.div
              key={`content-${item.id}`}
              className='w-[80vw] md:w-[60vw] md:max-w-4xl pointer-events-auto flex flex-col items-start'
            >
              {/* HORIZONTAL SUBTITLE */}
              <motion.div
                className='flex flex-col items-start mb-6 origin-bottom-left'
                initial={{ opacity: 0, rotate: -15, x: -10 }}
                animate={{ opacity: 1, rotate: 0, x: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: 'backOut' }}
              >
                {/* Decorative Line (Horizontal) */}
                <div className='bg-brand-gold w-20 h-2 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />

                {/* Subtitle (Horizontal) */}
                <h2 className='text-xl md:text-2xl font-bold text-brand-gold uppercase tracking-widest leading-none whitespace-nowrap drop-shadow-md'>
                  {item.subtitle || 'Level'}
                </h2>
              </motion.div>

              {/* Main Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-2xl uppercase'
              >
                {item.title}
              </motion.h3>

              {/* Descriptions */}
              <div className='space-y-5 mb-12 max-w-2xl'>
                {item.descriptions.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className='flex items-start group/item'
                  >
                    <div className='w-2 h-2 min-w-2 rounded-full bg-brand-gold mt-2.5 mr-4 shadow-[0_0_8px_rgba(250,186,30,0.6)] group-hover/item:scale-125 transition-transform duration-300' />
                    <p className='text-white/90 text-sm md:text-lg font-medium leading-relaxed drop-shadow-lg'>
                      {line}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-wrap gap-4'
              >
                {index === 0 ? (
                  <>
                    <Link
                      href='https://bh-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='group relative w-full md:w-[200px] px-6 py-4 bg-brand-gold text-brand-green font-bold rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center'
                    >
                      <span className='relative z-10'>Trấn Biên</span>
                    </Link>
                    <Link
                      href='https://lk-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='group relative w-full md:w-[200px] px-6 py-4 bg-brand-gold text-brand-green font-bold rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center'
                    >
                      <span className='relative z-10'>Long Khánh</span>
                    </Link>
                  </>
                ) : (
                  <a
                    href={item.learnMoreUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='group relative w-full md:w-[200px] px-6 py-4 bg-brand-gold text-brand-green font-bold rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center'
                  >
                    <span className='relative z-10'>Khám phá thêm</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
