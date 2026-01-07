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
      className='relative w-full min-h-[80vh] md:min-h-dvh bg-[#00602f] overflow-hidden flex items-center'
    >
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className='absolute top-20 left-10 w-20 h-1 bg-brand-gold opacity-30 hidden md:block' />
      <div className='absolute bottom-20 left-20 w-1 h-20 bg-white opacity-20 hidden md:block' />

      <div className='relative z-10 w-full max-w-[1920px] mx-auto'>
        <div className='flex flex-col lg:grid lg:grid-cols-2 min-h-[80vh] md:min-h-dvh'>
          <motion.div
            className='relative w-full h-[50vh] lg:h-full order-2 lg:order-1 overflow-hidden'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='absolute inset-4 lg:inset-8 lg:right-0 overflow-hidden'>
              <Image
                src={FOUNDER_INFO.image}
                alt={FOUNDER_INFO.name}
                fill
                className='object-cover object-top grayscale'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
          </motion.div>

          <motion.div
            className='relative w-full flex flex-col justify-center order-1 lg:order-2 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 bg-[#00602f]/95 lg:bg-transparent'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className='max-w-xl'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_2px_10px_rgba(250,186,30,0.3)]' />
                <h3 className='text-xs md:text-sm lg:text-base font-bold text-brand-gold uppercase tracking-[0.15em] mb-2'>
                  Người sáng lập
                </h3>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6 md:mb-8'>
                  Tầm nhìn
                  <br />
                  <span className='text-brand-gold'>Xuyên thời gian</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-brand-gold text-2xl md:text-3xl lg:text-4xl mb-4'
              >
                <ImQuotesRight />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-white/90 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 md:mb-8 text-justify'
              >
                {FOUNDER_INFO.quote}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='border-l-4 border-brand-gold pl-4 md:pl-6'
              >
                <p className='text-lg md:text-xl lg:text-2xl text-white font-bold uppercase tracking-wide mb-1'>
                  {FOUNDER_INFO.name}
                </p>
                <p className='text-xs md:text-sm lg:text-base text-brand-gold uppercase tracking-wider font-semibold'>
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
