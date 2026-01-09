'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../primitives/carousel'

export interface Testimonial {
  quote: string
  parentName: string
  parentWork: string
}

interface TestimonialQuoteSectionProps {
  testimonials: Testimonial[]
  imagePath?: string
  backgroundColor?: string
  imageOptimized?: boolean
}

export function TestimonialQuoteSection({
  testimonials,
  imagePath = '/images/base/360.png',
  backgroundColor = 'bg-white',
  imageOptimized = true
}: TestimonialQuoteSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className={`w-full min-h-[400px] md:min-h-[500px] ${backgroundColor} overflow-hidden relative py-8 md:py-12`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* --- 360 BIRD IMAGE: Absolute Bottom Right (Flush with edges) --- */}
      <div className='absolute bottom-0 right-0 z-30 h-full max-h-full w-auto flex items-end justify-end pointer-events-none'>
        <div className='h-[70%] md:h-[85%] lg:h-[110%] w-auto aspect-square relative translate-y-0 lg:translate-y-0 pointer-events-auto transition-transform hover:scale-105 duration-500 origin-bottom-right'>
          <a
            href='https://360.lhu.edu.vn/'
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full relative group outline-none'
          >
            <div className='w-full h-full relative'>
              <Image
                src={imagePath}
                alt='360 Tour Bird'
                fill
                className='object-contain object-bottom-right drop-shadow-xl brightness-[0.875] contrast-[1.1]'
                sizes='(max-width: 768px) 50vw, 30vw'
                {...(imageOptimized ? { quality: 90 } : { unoptimized: true })}
              />
            </div>
          </a>
        </div>
      </div>

      <div className='w-full h-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 relative z-20'>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mb-8 md:mb-12'
        >
          <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-green uppercase tracking-tight drop-shadow-2xl'>
            LHBS trong tôi là
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center'>
          {/* --- LEFT COLUMN: CONTENT (Carousel) --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:col-span-8 xl:col-span-9 flex items-center'
          >
            <div className='w-full'>
              <Carousel className='w-full flex items-center relative' opts={{ loop: true }}>
                {/* Custom Navigation */}
                <CarouselPrevious className='absolute left-0 -ml-2 md:-ml-8 h-auto w-auto border-none bg-transparent text-brand-gold hover:bg-transparent hover:text-[#d49e19] [&_svg]:size-8 md:[&_svg]:size-12 transition-transform hover:scale-110 z-40' />

                <CarouselContent className='cursor-grab active:cursor-grabbing'>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className='flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 px-8 md:px-12 py-2'>
                        {/* Icon Quote */}
                        <div className='shrink-0 pt-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                            fill='currentColor'
                            className='w-6 h-6 md:w-10 md:h-10 text-brand-gold opacity-90'
                          >
                            <path d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z' />
                          </svg>
                        </div>

                        <div className='flex flex-col w-full text-center md:text-left'>
                          <blockquote className='font-sans text-base md:text-xl lg:text-2xl text-brand-green/95 leading-relaxed font-medium tracking-wide line-clamp-4 md:line-clamp-none'>
                            {testimonial.quote}
                          </blockquote>

                          <div className='mt-3 md:mt-5 w-full flex justify-center md:justify-end items-center gap-2'>
                            <div className='text-center md:text-right'>
                              <p className='text-brand-green text-sm md:text-base font-bold tracking-widest uppercase'>
                                {testimonial.parentName}
                              </p>
                              <p className='text-brand-green/60 text-[10px] md:text-xs font-medium uppercase tracking-wide'>
                                {testimonial.parentWork}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselNext className='absolute right-0 -mr-2 md:-mr-8 h-auto w-auto border-none bg-transparent text-brand-gold hover:bg-transparent hover:text-[#d49e19] [&_svg]:size-8 md:[&_svg]:size-12 transition-transform hover:scale-110 z-40' />
              </Carousel>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: SPACER (Reserves space for the absolute image) --- */}
          <div className='hidden lg:block lg:col-span-4 xl:col-span-3 h-full pointer-events-none'></div>
        </div>
      </div>
    </motion.section>
  )
}
