'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@lhbs/ui'
import { cn } from '@lhbs/utils'
import { leadershipData, preschoolData, highSchoolData } from '../constants'

type Category = 'leadership' | 'preschool' | 'highschool'

export function DirectorsCarousel() {
  const [activeCategory, setActiveCategory] = useState<Category>('leadership')

  const getDirectorsByCategory = () => {
    switch (activeCategory) {
      case 'leadership':
        return leadershipData
      case 'preschool':
        return preschoolData
      case 'highschool':
        return highSchoolData
      default:
        return leadershipData
    }
  }

  const items = getDirectorsByCategory()

  return (
    <section className='relative py-20 pb-32 overflow-hidden bg-lhbs-green-dark transition-colors duration-500'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Container without max-width constraint */}
      <div className='relative w-full px-6 mb-8'>
        {/* TITLE SECTION */}
        <div className='mb-12 md:mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-center text-center'
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <p className='text-brand-gold text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.2em] mb-2'>
              Ban lãnh đạo
            </p>
            <h2 className='text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-none 2xl:text-6xl font-black text-white uppercase tracking-tight drop-shadow-2xl'>
              Đội ngũ quản lý
            </h2>
          </motion.div>
        </div>

        {/* TABS - Shared Background Container */}
        <div className='flex justify-center mb-12 md:mb-16 relative z-20'>
          <div className='inline-flex flex-wrap justify-center gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'>
            {[
              { id: 'leadership', label: 'BAN LÃNH ĐẠO' },
              { id: 'preschool', label: 'MẦM NON' },
              { id: 'highschool', label: 'PHỔ THÔNG' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as Category)}
                className={cn(
                  'px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300',
                  activeCategory === tab.id
                    ? 'bg-white text-brand-green shadow-lg scale-105'
                    : 'bg-transparent text-white hover:bg-white/10'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className='relative w-full z-10 my-4'>
        <Carousel
          opts={{
            align: 'start',
            loop: items.length > 4
          }}
          className='w-full z-10'
        >
          <CarouselContent className='-ml-3 sm:-ml-4 md:-ml-6 lg:-ml-8 py-10 justify-center'>
            {items.map((item, index) => (
              <CarouselItem
                key={`${activeCategory}-${item.id}-${index}`}
                className='pl-3 sm:pl-4 md:pl-6 lg:pl-8 basis-[280px] xs:basis-[300px] sm:basis-[340px] md:basis-[360px] lg:basis-[400px] xl:basis-[420px]'
              >
                <div className='h-full w-full'>
                  {/* CARD UI */}
                  <div
                    className={cn(
                      'bg-white rounded-2xl overflow-hidden w-full h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:z-10',
                      'shadow-[0_20px_50px_rgba(0,92,66,0.3)] hover:shadow-[0_30px_60px_rgba(0,92,66,0.5)]'
                    )}
                  >
                    {/* IMAGE */}
                    <div className='relative w-full aspect-4/5 overflow-hidden shrink-0'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className='object-cover object-top transition-transform duration-700 group-hover:scale-110'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                      />
                      {/* Inner Glow Effect */}
                      <div className='absolute inset-0 shadow-[inset_0_0_40px_rgba(0,92,66,0.2)] pointer-events-none' />
                    </div>

                    {/* CONTENT */}
                    <div className='p-4 sm:p-5 md:p-6 flex-1 flex flex-col items-center justify-center text-center'>
                      <h3 className='text-base sm:text-lg md:text-xl font-bold text-brand-green mb-2 md:mb-3 uppercase leading-tight'>
                        {item.name}
                      </h3>

                      <div className='w-10 sm:w-12 h-0.5 bg-brand-gold mb-2 md:mb-3 opacity-50' />

                      <p className='text-xs sm:text-sm md:text-base text-[#555] font-semibold mb-1 leading-snug'>
                        {item.role1}
                      </p>

                      {item.role2 && (
                        <p className='text-xs sm:text-sm md:text-base text-[#777] leading-snug'>{item.role2}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className='left-[30] bg-white/20 hover:bg-white text-white hover:text-brand-green border-none' />
          <CarouselNext className='right-[30] bg-white/20 hover:bg-white text-white hover:text-brand-green border-none' />
        </Carousel>
      </div>
    </section>
  )
}
