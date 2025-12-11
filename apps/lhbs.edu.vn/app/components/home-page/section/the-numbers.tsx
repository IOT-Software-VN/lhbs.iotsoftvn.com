import { motion, useInView, animate } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
const statsData = [
  {
    number: '11',
    description: 'Years of excellence'
  },
  {
    number: '250',
    description: 'Experienced Teachers'
  },
  {
    number: '2,600',
    description: 'Students of all grades'
  }
]

// University/College logos for the carousel
const universityLogos = [
  {
    id: 1,
    name: 'English Central',
    image: 'https://www.englishcentral.com/dist/all/20251203121549/assets/ec-logo.53e56416598b3d50cbe5.png'
  },
  {
    id: 2,
    name: 'STEM',
    image:
      'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
  },
  {
    id: 3,
    name: 'ASI',
    image: 'https://advantagesschool.com/wp-content/uploads/2022/10/asi-logo.png'
  },
  {
    id: 4,
    name: 'Cambridge',
    image: 'https://www.cambridgeassessment.org.uk/Images/Simon-brand-blog-newest-logo.png'
  }
]

function RollingNumber({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  // Parse value logic
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const isPercentage = value.includes('%')
  const hasComma = value.includes(',')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (isInView) {
      // Animate from 0 to the target number
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
      // Reset to 0 when out of view
      node.textContent = isPercentage ? '0%' : '0'
    }
  }, [isInView, numericValue, isPercentage, hasComma])

  return (
    <span ref={ref} className={className}>
      {isPercentage ? '0%' : '0'}
    </span>
  )
}

export default function TheNumbers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Infinite Autoplay effect
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      // Check if we can scroll next to avoid errors/jumps if content fits perfectly
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollNext()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className='relative w-full h-dvh bg-white overflow-hidden font-sans flex flex-col'>
      {/* Scrollable Container */}
      <div className='grow w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 overflow-y-auto no-scrollbar py-8 md:py-16 flex flex-col justify-center'>
        {/* Header - Left Aligned */}
        <div className='flex flex-col items-start mb-8 md:mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h2 className='text-xs md:text-sm lg:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] leading-none drop-shadow-md mb-2'>
              Our Achievements
            </h2>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E5338] uppercase tracking-tight drop-shadow-2xl'
          >
            Distinctions
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
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center ${
                index < statsData.length - 1 ? 'md:border-r border-gray-200' : ''
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
                  value={stat.number}
                  className='block text-5xl md:text-6xl lg:text-7xl font-black leading-none text-[#FABA1E] drop-shadow-[0_4px_10px_rgba(250,186,30,0.3)]'
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <p className='text-sm md:text-lg lg:text-xl font-medium text-[#1E5338]/90 uppercase tracking-wider'>
                  {stat.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* University Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='relative w-full'
        >
          {/* Section Header */}
          <div className='flex flex-col items-center mb-6 md:mb-10'>
            <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h3 className='text-xl md:text-3xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center'>
              Partnership Program
            </h3>
          </div>

          <Carousel
            setApi={setApi}
            className='w-full px-2 md:px-10'
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: false,
              dragFree: true
            }}
          >
            <CarouselContent className='-ml-4'>
              {[...universityLogos, ...universityLogos, ...universityLogos].map((logo, index) => (
                <CarouselItem key={`${logo.id}-${index}`} className='pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4'>
                  <div className='h-full p-2'>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className='flex items-center justify-center h-24 md:h-28 bg-gray-50/30 border border-gray-200 rounded-sm p-4 transition-all duration-300 cursor-pointer group hover:border-[#FABA1E] hover:bg-white hover:shadow-lg'
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className='max-h-full max-w-full object-contain transition-all duration-500'
                        loading='lazy'
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation - Minimal Arrows */}
            <div className='hidden md:block'>
              <CarouselPrevious className='h-auto w-auto border-none bg-transparent text-[#FABA1E] hover:bg-transparent hover:text-[#d49e19] -left-8 [&_svg]:size-12 md:[&_svg]:size-16 transition-transform hover:scale-110' />
              <CarouselNext className='h-auto w-auto border-none bg-transparent text-[#FABA1E] hover:bg-transparent hover:text-[#d49e19] -right-8 [&_svg]:size-12 md:[&_svg]:size-16 transition-transform hover:scale-110' />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
