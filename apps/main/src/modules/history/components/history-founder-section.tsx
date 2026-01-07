'use client'

import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { ImQuotesRight } from 'react-icons/im'
import { FOUNDER_INFO } from '../constants'

const bgPattern = '/images/tam-nhin-su-menh-page/triet-ly-bg.png'

export function HistoryFounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className='relative w-full min-h-[80vh] md:min-h-screen bg-brand-green overflow-hidden flex items-center py-16 md:py-0'
    >
      {/* Backgrounds */}
      <div
        className='absolute inset-0 z-0 opacity-10 mix-blend-overlay'
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className='absolute inset-0 z-0 bg-linear-to-r from-black/20 to-transparent opacity-90' />

      {/* Decorative Lines */}
      <div className='absolute top-20 left-10 w-20 h-1 bg-brand-gold/30 hidden md:block' />
      <div className='absolute bottom-20 right-20 w-1 h-20 bg-white/20 hidden md:block' />

      <div className='relative z-10 w-full max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          {/* Image Column */}
          <motion.div
            className='relative w-full aspect-square lg:h-[80vh] lg:aspect-auto order-2 lg:order-1'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='absolute inset-4 lg:inset-0 lg:right-12 overflow-hidden rounded-2xl lg:rounded-none lg:rounded-r-3xl shadow-2xl'>
              <Image
                src={FOUNDER_INFO.image}
                alt={FOUNDER_INFO.name}
                fill
                className='object-cover object-top grayscale hover:grayscale-0 transition-all duration-700'
                sizes='(max-width: 1024px) 100vw, 50vw'
                priority
              />
              <div className='absolute inset-0 bg-linear-to-t from-[#00602f]/60 to-transparent' />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className='relative w-full flex flex-col justify-center order-1 lg:order-2 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 bg-brand-green/95 lg:bg-transparent'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className='max-w-2xl'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className='bg-brand-gold w-20 h-2 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />

                <h3 className='text-xl md:text-2xl font-bold text-brand-gold uppercase tracking-widest leading-none whitespace-nowrap drop-shadow-md mb-3'>
                  Người sáng lập
                </h3>

                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-8'>
                  Tầm nhìn
                  <br />
                  <span className='text-brand-gold'>Xuyên thời gian</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-brand-gold/80 text-4xl md:text-5xl mb-6'
              >
                <ImQuotesRight />
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-10 text-justify border-l-4 border-white/20 pl-6'
              >
                {FOUNDER_INFO.quote}
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className='text-2xl md:text-3xl text-white font-bold uppercase tracking-wide mb-2'>
                  {FOUNDER_INFO.name}
                </p>
                <p className='text-sm md:text-base text-brand-gold uppercase tracking-wider font-semibold'>
                  {FOUNDER_INFO.title}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
