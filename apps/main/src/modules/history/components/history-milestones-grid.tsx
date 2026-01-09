'use client'

import { motion, useInView, animate } from 'motion/react'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

const DISTINCTIONS = [
  {
    id: 'years',
    value: '15',
    label: 'NĂM KINH NGHIỆM'
  },
  {
    id: 'teachers',
    value: '250',
    label: 'GIÁO VIÊN KINH NGHIỆM'
  },
  {
    id: 'students',
    value: '2,600',
    label: 'HỌC SINH TẤT CẢ CẤP HỌC'
  }
]

function RollingNumber({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const isPercentage = value.includes('%')
  const hasComma = value.includes(',')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: 'circOut',
        onUpdate(val) {
          const rounded = Math.round(val)
          const formatted = hasComma ? rounded.toLocaleString('en-US') : rounded.toString()
          node.textContent = isPercentage ? `${formatted}%` : formatted
        }
      })
      return () => controls.stop()
    } else {
      node.textContent = isPercentage ? '0%' : '0'
    }
  }, [isInView, numericValue, isPercentage, hasComma])

  return (
    <span ref={ref} className={className}>
      {isPercentage ? '0%' : '0'}
    </span>
  )
}

export function HistoryMilestonesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className='relative w-full py-20 md:py-32 bg-white overflow-hidden'>
      <div className='absolute top-0 left-0 right-0 h-32 md:h-40 bg-linear-to-b from-gray-100 via-gray-50/50 to-transparent pointer-events-none' />

      {/* Logo Watermark - Center, Full Section */}
      <div className='hidden lg:flex pointer-events-none absolute inset-0 z-0 overflow-hidden items-center justify-center'>
        <div className='relative w-full h-full opacity-[0.03]'>
          <Image
            src='/images/base/lhbs-hac.png'
            alt='LHBS Logo Watermark'
            fill
            className='object-contain'
            sizes='100vw'
          />
        </div>
      </div>

      <div className='relative z-10 container mx-auto px-4 md:px-8 lg:px-16'>
        {/* Header - Left Aligned */}
        <div className='flex flex-col items-start mb-8 md:mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h2 className='text-xs md:text-sm lg:text-base font-bold text-brand-gold uppercase tracking-[0.2em] leading-none drop-shadow-md mb-2'>
              THÀNH TỰU CỦA CHÚNG TÔI
            </h2>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-green uppercase tracking-tight drop-shadow-2xl'
          >
            CON SỐ TỰ HÀO
          </motion.h2>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-12 md:mb-20 border-y border-gray-200 py-8 md:py-12'
        >
          {DISTINCTIONS.map((stat, index) => (
            <div
              key={stat.id}
              className={`relative flex flex-col items-center text-center ${
                index < DISTINCTIONS.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              {/* Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className='mb-2 md:mb-4'
              >
                <RollingNumber
                  value={stat.value}
                  className='block text-5xl md:text-6xl lg:text-7xl font-black leading-none text-brand-gold drop-shadow-[0_4px_10px_rgba(250,186,30,0.3)]'
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <p className='text-sm md:text-lg lg:text-xl font-medium text-brand-green/90 uppercase tracking-wider'>
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
