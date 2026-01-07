'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@lhbs/ui'
import { TESTIMONIALS } from '@/data/testimonials-data'
import { Quote } from 'lucide-react'

export function HistoryTestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className='w-full min-h-[500px] bg-brand-green overflow-hidden relative py-20'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className='absolute bottom-0 right-0 z-30 h-full max-h-full w-auto flex items-end justify-end pointer-events-none'>
        <div className='h-[70%] md:h-[85%] lg:h-[110%] w-auto aspect-square relative translate-y-0 lg:translate-y-0 pointer-events-auto transition-transform hover:scale-105 duration-500 origin-bottom-right'>
          <div className='w-full h-full relative opacity-60'>
            <Image
              src='/images/base/360.png'
              alt='360 Tour Bird'
              fill
              className='object-contain object-bottom-right'
              sizes='(max-width: 768px) 50vw, 30vw'
            />
          </div>
        </div>
      </div>

      <div className='w-full h-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 relative z-20'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mb-12 md:mb-16'
        >
          <div className='bg-brand-gold w-20 h-2 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white uppercase tracking-tight drop-shadow-2xl'>
            LHBS <span className='text-brand-gold'>Trong Tôi</span>
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:col-span-8 xl:col-span-9 flex items-center'
          >
            <div className='w-full'>
              <Carousel className='w-full flex items-center relative' opts={{ loop: true }}>
                <CarouselPrevious className='absolute left-0 -ml-2 md:-ml-8 h-auto w-auto border-none bg-transparent text-brand-gold hover:bg-transparent hover:text-white [&_svg]:size-8 md:[&_svg]:size-12 transition-transform hover:scale-110 z-40' />

                <CarouselContent className='cursor-grab active:cursor-grabbing'>
                  {TESTIMONIALS.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-8 md:px-12 py-2'>
                        <div className='shrink-0 pt-2'>
                          <Quote className='w-8 h-8 md:w-12 md:h-12 text-brand-gold/90 fill-brand-gold/20' />
                        </div>

                        <div className='flex flex-col w-full text-center md:text-left'>
                          <blockquote className='font-sans text-lg md:text-2xl lg:text-3xl text-white font-medium leading-relaxed tracking-wide line-clamp-4 md:line-clamp-none italic'>
                            &quot;{testimonial.quote}&quot;
                          </blockquote>

                          <div className='mt-6 md:mt-8 w-full flex justify-center md:justify-end items-center gap-2'>
                            <div className='text-center md:text-right'>
                              <p className='text-white text-base md:text-lg font-bold tracking-widest uppercase'>
                                {testimonial.parentName}
                              </p>
                              <p className='text-brand-gold text-xs md:text-sm font-medium uppercase tracking-wide'>
                                {testimonial.parentWork}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselNext className='absolute right-0 -mr-2 md:-mr-8 h-auto w-auto border-none bg-transparent text-brand-gold hover:bg-transparent hover:text-white [&_svg]:size-8 md:[&_svg]:size-12 transition-transform hover:scale-110 z-40' />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
