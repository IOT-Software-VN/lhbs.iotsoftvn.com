import { useState } from 'react'
import { SCHOOL_LEVELS } from '@/components/home-page/mock-data'
import { motion, AnimatePresence } from 'motion/react'

export default function EducationLevel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id='solid-education-level'
      className='w-full h-screen flex overflow-hidden relative bg-[#050505] snap-start'
    >
      {SCHOOL_LEVELS.map((item, index) => {
        const isActive = index === activeIndex
        // Calculation for width
        const widthPercentage = isActive ? '60%' : `${40 / (SCHOOL_LEVELS.length - 1)}%`

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`
              relative h-full transition-[flex-basis] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
              flex flex-col justify-end overflow-hidden group cursor-pointer grow
              border-l first:border-l-0 border-white/10
            `}
            style={{ flexBasis: widthPercentage }}
          >
            {/* 
              BACKGROUND LAYER 
              Fixed conflict: Separated Ken Burns (Scale) from Grayscale (CSS Filter)
            */}
            <div className='absolute inset-0 overflow-hidden'>
              {/* Wrapper handles Grayscale/Filter transition purely via CSS */}
              <div
                className={`
                     absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
                     ${isActive ? 'grayscale-0' : 'grayscale-50 group-hover:grayscale-0'}
                   `}
              >
                {/* Inner Motion Div handles ONLY the Scale/Ken Burns animation */}
                <motion.div
                  className='absolute inset-0 bg-cover bg-center will-change-transform'
                  style={{ backgroundImage: `url(${item.image})` }}
                  animate={{ scale: [1, 1.15] }}
                  transition={{
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                />
              </div>

              {/* Dark Overlay - Adjusted opacity for readability */}
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

            {/* 
              ------------------------------------------------
              INACTIVE STATE: Vertical Text
              ------------------------------------------------
            */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  className='absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-end pb-12'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <div className='flex flex-col items-center'>
                    {/* Decorative Line (Vertical) */}
                    <div className='bg-[#FABA1E] w-px h-20 mb-6 rounded-full' />

                    {/* Subtitle (Vertical) */}
                    <h2
                      className='text-3xl md:text-4xl font-bold text-white uppercase tracking-widest whitespace-nowrap drop-shadow-xl'
                      style={{
                        writingMode: 'vertical-rl',
                        rotate: '180deg',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                      }}
                    >
                      {item.subtitle || 'Level'}
                    </h2>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 
              ------------------------------------------------
              ACTIVE STATE: Horizontal Text (In Flow)
              ------------------------------------------------
            */}
            <AnimatePresence mode='wait'>
              {isActive && (
                <div className='absolute inset-0 z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-end w-full pointer-events-none'>
                  <motion.div className='w-full max-w-[90%] md:max-w-4xl pointer-events-auto flex flex-col items-start'>
                    {/* 
                        HORIZONTAL SUBTITLE (Former Vertical Text)
                        Falls/Rotates in from -90deg.
                     */}
                    <motion.div
                      className='flex flex-col items-start mb-6 origin-bottom-left'
                      initial={{ opacity: 0, rotate: -15, x: -10 }}
                      animate={{ opacity: 1, rotate: 0, x: 0 }}
                      transition={{ duration: 0.6, ease: 'backOut' }}
                    >
                      {/* Decorative Line (Horizontal) */}
                      <div className='bg-[#FABA1E] w-20 h-1 mb-6 rounded-full' />

                      {/* Subtitle (Horizontal) */}
                      <h2 className='text-xl md:text-2xl font-bold text-[#FABA1E] uppercase tracking-widest leading-none whitespace-nowrap drop-shadow-md'>
                        {item.subtitle || 'Level'}
                      </h2>
                    </motion.div>

                    {/* Main Title (h3) */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className='text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] drop-shadow-2xl'
                    >
                      {item.title}
                    </motion.h3>

                    <div className='space-y-4 mb-10 max-w-2xl'>
                      {item.descriptions.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                          className='flex items-start'
                        >
                          <span className='text-[#FABA1E] mr-3 mt-1.5 text-lg'>•</span>
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
                          <a
                            href='https://bh-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                            className='px-8 py-4 bg-[#FABA1E] text-[#1E5338] font-bold rounded-sm hover:bg-white transition-all uppercase tracking-widest text-xs md:text-sm shadow-2xl hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto'
                          >
                            Bien Hoa
                          </a>
                          <a
                            href='https://lk-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                            className='px-8 py-4 bg-[#FABA1E] text-[#1E5338] font-bold rounded-sm hover:bg-white transition-all uppercase tracking-widest text-xs md:text-sm shadow-2xl hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto'
                          >
                            Long Khanh
                          </a>
                        </>
                      ) : (
                        <a
                          href={item.learnMoreUrl}
                          target='_blank'
                          rel='noreferrer'
                          className='px-10 py-4 border-2 border-[#FABA1E] text-[#FABA1E] font-bold rounded-sm hover:bg-[#FABA1E] hover:text-[#1E5338] transition-all uppercase tracking-widest text-xs md:text-sm shadow-xl hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto'
                        >
                          Discover More
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </section>
  )
}
