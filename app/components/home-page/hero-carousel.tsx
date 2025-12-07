import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { AnimatedHighlight } from '~/components/animated-highlight'
import { ScrollIndicator } from '~/components/ScrollIndicator'
import Herobg from '@/images/home-page/Hero-bg.png'

interface HeroProps {
  onNavigate: (path: string) => void
}

export default function HeroCarousel({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(true)

  // Only background images array - content stays the same
  const backgroundImages = [
    Herobg,
    // 'https://lhbs.edu.vn/wp-content/uploads/2025/08/IMG_0057.jpg',
    'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/543157713_759809520014524_6243659489729173596_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFpZW4UkWopXLqUwnApPxzx6Sldju96q1rpKV2O73qrWlVgT_N9-qqIf8pv8uUhxEi4rgsx8AI2JKqSn1pil16h&_nc_ohc=yu4yLYaebQ0Q7kNvwGtodRu&_nc_oc=Adn7HVWs-KKiiFver-Sdn3LQEDs0TbEms4LZ0qLqJi4sZwIVys-IZlz3_97J6i3XmTk&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=aax7A0hj7hhJKvywZYorng&oh=00_AflCXcNX4DQf4t8pNoI3cZ6kDATevPjhSufI1C85MDCGrg&oe=693B8DE4'
  ]

  // Auto-play functionality
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
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const toggleVisibility = () => setIsContentVisible(!isContentVisible)

  return (
    <section
      className='relative w-full h-screen min-h-[600px] flex items-end overflow-hidden snap-start cursor-pointer'
      onClick={toggleVisibility}
    >
      {/* Background Image with smooth transition */}
      <div className='absolute inset-0 z-0'>
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
            <img
              src={image}
              alt='LHBS campus with students'
              className='w-full h-full object-cover'
              style={{ filter: 'brightness(0.9)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Primary Dark Overlay covering full screen for base readability - Fades out on click */}
      <motion.div
        className='absolute inset-0 z-10 bg-black/10'
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Gradient focusing on the bottom-left text area - Fades out on click */}
      <motion.div
        className='absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent'
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Content Container - Fades out on click */}
      <motion.div
        className='relative z-20 w-full px-4 md:px-12 lg:px-16 pb-16 md:pb-24 lg:pb-32'
        animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className='max-w-[1920px] mx-auto w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            {/* Left Content Column */}
            <motion.div
              className='lg:col-span-8 flex flex-col items-start'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative Line & Subtitle Group */}
              <motion.div
                className='flex flex-col items-start mb-6'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
                <h2 className='text-xl md:text-2xl font-bold text-[#FABA1E] uppercase tracking-[0.2em] leading-none drop-shadow-md'>
                  Welcome to LHBS
                </h2>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='mb-6'
              >
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] md:leading-none drop-shadow-2xl uppercase tracking-tight'>
                  <span className='block mb-2 lg:mb-4'>Vietnamese Culture</span>
                  <span className='block text-white/90'>International Vision</span>
                </h1>
              </motion.div>

              {/* Tagline/Description */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-white/90 text-lg md:text-2xl font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-lg'
              >
                #A solid stepping stone to becoming a global citizen
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onNavigate('/admissions')
                  }}
                  className='group relative px-10 py-5 bg-[#FABA1E] text-[#1E5338] font-bold text-sm md:text-base uppercase tracking-widest rounded-sm 
                           hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
                >
                  <span className='relative z-10'>Discover Now</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Custom Carousel Indicators (Pill + Dots style) */}
      <motion.div
        className='absolute bottom-10 right-4 md:right-12 z-30 flex items-center gap-3'
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
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              index === currentSlide
                ? 'w-12 bg-[#FABA1E] shadow-[0_0_10px_rgba(250,186,30,0.6)]'
                : 'w-1.5 bg-white/40 hover:bg-white hover:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div animate={{ opacity: isContentVisible ? 1 : 0 }} transition={{ duration: 0.5 }}>
        <ScrollIndicator targetSectionId='solid-education-level' />
      </motion.div>
    </section>
  )
}
