'use client'

import Image from 'next/image'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ScrollIndicator } from '@lhbs/ui'

const HERO_BACKGROUND_IMAGE_1 = '/images/home-page/hero-section/hero-1.jpg'
const HERO_BACKGROUND_IMAGE_2 = '/images/home-page/hero-section/hero-2.jpg'
const HERO_BACKGROUND_IMAGE_3 = '/images/home-page/hero-section/hero-3.jpg'
const HERO_BACKGROUND_IMAGE_4 = '/images/home-page/hero-section/hero-4.jpg'

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(true)

  const backgroundImages = [HERO_BACKGROUND_IMAGE_1, HERO_BACKGROUND_IMAGE_2]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, backgroundImages.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const toggleVisibility = () => setIsContentVisible(!isContentVisible)

  return (
    <section
      className='relative w-full h-dvh flex flex-col overflow-hidden snap-start cursor-pointer group'
      onClick={toggleVisibility}
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0 select-none'>
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className='absolute inset-0'
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1.05 : 1.15
            }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: 10, ease: 'linear' }
            }}
          >
            <Image
              src={image}
              alt='Hero Background'
              fill
              priority={index === 0}
              quality={90}
              className='object-cover object-center'
              sizes='100vw'
              style={{ filter: 'brightness(0.9)' }}
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      {/* Overlays */}
      <motion.div
        className='absolute inset-0 z-10 bg-black/10'
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className='absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none'
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Content Overlay Container */}
      <motion.div
        className='absolute inset-0 z-20 w-full h-full flex flex-col justify-end pb-12 md:pb-20 xl:pb-28 2xl:pb-32 px-4 md:px-12 lg:px-16 pointer-events-none'
        animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scrollable Text Area - Allows content to fit or scroll in smaller viewports */}
        <div className='w-full max-w-[1920px] mx-auto max-h-[85vh] no-scrollbar pointer-events-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            <motion.div
              className='lg:col-span-9 xl:col-span-8 flex flex-col items-start'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative Line & Subtitle */}
              <motion.div
                className='flex flex-col items-start mb-2 md:mb-4'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
                <h2 className='text-xs md:text-sm lg:text-base font-bold text-brand-gold uppercase tracking-[0.2em] leading-none drop-shadow-md'>
                  Chào mừng đến với Song Ngữ Lạc Hồng
                </h2>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='mb-2 md:mb-4 lg:mb-6'
              >
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl min-[1800px]:text-7xl font-black text-white leading-[1.1] drop-shadow-2xl uppercase tracking-tight'>
                  <span className='block mb-1 md:mb-2'>Văn hóa Việt Nam</span>
                  <span className='block text-white/90'>Tầm nhìn quốc tế</span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-white/90 text-sm md:text-base lg:text-lg font-medium mb-4 md:mb-6 lg:mb-8 max-w-xl lg:max-w-2xl leading-relaxed drop-shadow-lg'
              >
                #Bước đệm vững chắc trở thành công dân toàn cầu
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='mb-2'
              >
                <Link
                  href='/admissions'
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className='group relative inline-block px-5 py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 bg-brand-gold text-brand-green font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-widest rounded-sm md:rounded 
                           hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
                >
                  <span className='relative z-10'>Tư vấn ngay</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Indicators */}
      <motion.div
        className='absolute bottom-6 md:bottom-10 right-4 md:right-12 z-30 flex items-center gap-2 md:gap-3'
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              goToSlide(index)
            }}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ease-out ${
              index === currentSlide
                ? 'w-8 md:w-12 bg-brand-gold shadow-[0_0_10px_rgba(250,186,30,0.6)]'
                : 'w-1 md:w-1.5 bg-white/40 hover:bg-white hover:w-2 md:hover:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>

      <motion.div animate={{ opacity: isContentVisible ? 1 : 0 }} transition={{ duration: 0.5 }}>
        <ScrollIndicator targetSectionId='solid-education-level' />
      </motion.div>
    </section>
  )
}
