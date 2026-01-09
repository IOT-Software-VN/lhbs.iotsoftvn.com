'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'

interface InfoCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
  onClick: () => void
}

export function InfoCard({ icon: Icon, title, description, index, onClick }: InfoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
      className='group relative h-full cursor-pointer'
      onClick={onClick}
    >
      {/* Main Card Container */}
      <div className='relative h-full flex flex-col items-center bg-white rounded-2xl p-8 md:p-10 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
        {/* Floating Icon Container */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.15, type: 'spring', stiffness: 200 }}
          className='relative -mt-16 mb-6'
        >
          {/* Icon Circle with Glow Effect */}
          <div className='relative w-24 h-24 md:w-28 md:h-28'>
            {/* Outer Glow Ring */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-[#FDB913]/20 to-[#FDB913]/5 blur-xl group-hover:from-[#FDB913]/40 group-hover:to-[#FDB913]/10 transition-all duration-500' />

            {/* Main Icon Circle */}
            <div className='relative w-full h-full rounded-full bg-gradient-to-br from-[#FDB913] to-[#f5a700] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500'>
              <Icon className='w-12 h-12 md:w-14 md:h-14 text-white stroke-[2.5]' />
            </div>

            {/* Decorative Ring */}
            <div className='absolute -inset-2 rounded-full border-2 border-[#FDB913]/20 group-hover:border-[#FDB913]/40 transition-colors duration-500' />
          </div>
        </motion.div>

        {/* Content Area - Center Aligned */}
        <div className='flex flex-col items-center text-center space-y-4 flex-1'>
          {/* Title */}
          <h3 className='text-lg md:text-xl lg:text-2xl font-black text-brand-green uppercase tracking-wide leading-tight transition-colors duration-300 group-hover:text-[#FDB913]'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-sm md:text-base text-gray-600 leading-relaxed max-w-sm'>{description}</p>
        </div>

        {/* Subtle Bottom Accent */}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#FDB913]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>
    </motion.div>
  )
}
