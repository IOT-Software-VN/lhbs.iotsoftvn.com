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
import lhbslogo from '@/images/base/logo.png'
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
    name: 'University Logo 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RMIT_University_Logo.svg/1200px-RMIT_University_Logo.svg.png'
  },
  {
    id: 2,
    name: 'Van Lang University',
    image: 'https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Dai-Hoc-Van-Lang-H.png'
  },
  {
    id: 3,
    name: 'FPTU',
    image:
      'https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png'
  },
  {
    id: 4,
    name: 'VG University',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/VGU-Logo.png'
  },
  {
    id: 5,
    name: 'BKHCM',
    image: 'https://media.loveitopcdn.com/3807/logo-bach-khoa-dongphucsongphu2.png'
  },
  {
    id: 6,
    name: 'CSU',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/CSU_San_Marcos_seal.svg/1200px-CSU_San_Marcos_seal.svg.png'
  },
  {
    id: 7,
    name: 'NYU',
    image: 'https://logos-world.net/wp-content/uploads/2021/09/NYU-Logo.png'
  },
  {
    id: 8,
    name: 'Nevada University',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/University-of-nevada-vertical-blue.svg'
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
      // scrollNext() combined with loop: true creates the seamless infinite effect
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className='relative w-full bg-white py-20 md:py-32 overflow-hidden font-sans'>
      <div className='w-full px-4 md:px-12 lg:px-16 max-w-[1920px] mx-auto'>
        {/* Header - Left Aligned to match Education Level style */}
        <div className='flex flex-col items-start mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h2 className='text-xl md:text-2xl font-bold text-[#FABA1E] uppercase tracking-[0.2em] leading-none drop-shadow-md mb-4'>
              Our Achievements
            </h2>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-5xl md:text-6xl lg:text-7xl font-black text-[#1E5338] uppercase tracking-tight drop-shadow-2xl'
          >
            By the numbers
          </motion.h2>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mb-32 border-y border-gray-200 py-16'
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
                className='mb-4'
              >
                <RollingNumber
                  value={stat.number}
                  className='block text-6xl md:text-7xl lg:text-8xl font-black leading-none text-[#FABA1E] drop-shadow-[0_4px_10px_rgba(250,186,30,0.3)]'
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <p className='text-lg md:text-2xl font-medium text-[#1E5338]/90 uppercase tracking-wider'>
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
          <div className='flex flex-col items-center mb-12'>
            <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h3 className='text-3xl md:text-4xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center'>
              College Acceptance
            </h3>
          </div>

          <Carousel
            setApi={setApi}
            className='w-full px-4 md:px-10'
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: false,
              dragFree: true
            }}
          >
            <CarouselContent className='-ml-4'>
              {universityLogos.map((logo) => (
                <CarouselItem key={logo.id} className='pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5'>
                  <div className='h-full p-2'>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className='flex items-center justify-center h-32 bg-gray-50/30 border border-gray-200 rounded-sm p-6 transition-all duration-300 cursor-pointer group hover:border-[#FABA1E] hover:bg-white hover:shadow-lg'
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
              <CarouselPrevious className='h-auto w-auto border-none bg-transparent text-[#FABA1E] hover:bg-transparent hover:text-[#d49e19] -left-12 [&_svg]:size-20 transition-transform hover:scale-110' />
              <CarouselNext className='h-auto w-auto border-none bg-transparent text-[#FABA1E] hover:bg-transparent hover:text-[#d49e19] -right-12 [&_svg]:size-20 transition-transform hover:scale-110' />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
