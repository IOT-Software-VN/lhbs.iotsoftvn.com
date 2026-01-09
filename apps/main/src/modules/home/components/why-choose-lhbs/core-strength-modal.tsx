'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useEffect } from 'react'

interface CoreStrengthModalProps {
  title: string
  description: string
  fullDescription: string
  image: string
  alt: string
  onClose: () => void
}

export function CoreStrengthModal({ title, fullDescription, image, alt, onClose }: CoreStrengthModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <motion.div
      className='fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 sm:p-6 md:p-8 lg:p-12'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className='relative w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-2xl'
        style={{ maxHeight: 'min(90vh, 900px)' }}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white'
          aria-label='Close modal'
        >
          <svg className='w-4 h-4 md:w-5 md:h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div className='overflow-y-auto overflow-x-hidden' style={{ maxHeight: 'min(90vh, 900px)' }}>
          {/* Image - Responsive Height */}
          <div className='relative w-full overflow-hidden' style={{ height: 'clamp(200px, 35vh, 400px)' }}>
            <Image
              src={image}
              alt={alt}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 1024px'
              quality={85}
            />
            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
          </div>

          {/* Content - Responsive Padding */}
          <div className='p-6 sm:p-8 md:p-10 lg:p-12'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mb-3 md:mb-4 uppercase tracking-wide'>
              {title}
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 md:mb-6'>
              {fullDescription}
            </p>{' '}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
