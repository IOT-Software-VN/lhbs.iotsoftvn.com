'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'

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

export function ProgramsSection() {
  const [api, setApi] = useState<CarouselApi>()

  // Infinite Autoplay effect
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollNext()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className='relative w-full bg-white overflow-hidden font-sans py-8 md:py-16 mb-8 md:mb-12'>
      <div className='w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16'>
        {/* University Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='relative w-full'
        >
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
                      className='flex items-center justify-center h-16 md:h-20 bg-gray-50/30 border border-gray-200 rounded-sm p-4 transition-all duration-300 cursor-pointer group hover:border-brand-yellow hover:bg-white hover:shadow-lg'
                    >
                      <div className='relative w-full h-full'>
                        <Image
                          src={logo.image}
                          alt={logo.name}
                          fill
                          className='object-contain transition-all duration-500'
                          sizes='(max-width: 768px) 50vw, 25vw'
                        />
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
