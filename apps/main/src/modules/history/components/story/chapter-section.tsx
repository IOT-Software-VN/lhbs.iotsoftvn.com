'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { cn } from '@lhbs/utils'
import type { HistoryChapter } from '../../types'

interface ChapterSectionProps {
  chapter: HistoryChapter
  index: number
}

export function ChapterSection({ chapter, index }: ChapterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0, 1], [50, -50])
  const yImage = useTransform(scrollYProgress, [0, 1], [25, -25])

  const startYear = chapter.years.replace('[', '').split('–')[0].split('-')[0]

  return (
    <section
      ref={sectionRef}
      id={chapter.id}
      className='relative w-full min-h-[90vh] flex items-center justify-center py-24 lg:py-0 snap-start'
    >
      <motion.div className='absolute right-[5%] top-1/2 -translate-y-1/2 w-full text-right pointer-events-none select-none z-0'>
        <span className='text-[25vw] font-black text-brand-green/5 leading-none tracking-tighter mix-blend-multiply'>
          {startYear}
        </span>
      </motion.div>

      <div className='container relative z-10 mx-auto px-4 md:px-8'>
        <div className={cn('flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center')}>
          <motion.div style={{ y: yText }} className='lg:col-span-6 lg:col-start-1 flex flex-col justify-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.8 }}
            >
              <div className='flex flex-col items-start mb-6'>
                <div className='bg-brand-gold w-8 h-1 md:w-12 md:h-1.5 mb-3 rounded-full shadow-[0_2px_10px_rgba(250,186,30,0.3)]' />
                <span className='text-brand-green text-sm md:text-base font-bold uppercase tracking-[0.2em]'>
                  {chapter.label}
                </span>
              </div>

              <h2 className='text-3xl md:text-5xl lg:text-6xl font-black text-brand-green mb-8 leading-[1.1] uppercase tracking-tight'>
                {chapter.title}
              </h2>

              <div className='relative pl-6 border-l-2 border-brand-gold'>
                <p className='text-lg md:text-xl text-brand-green/80 font-medium leading-relaxed text-justify'>
                  {chapter.description}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className='lg:col-span-6 lg:col-start-7 w-full lg:h-[70vh] flex items-center justify-center'>
            <motion.div style={{ y: yImage }} className='relative w-full aspect-[4/5] lg:aspect-[3/4] max-h-[70vh]'>
              <motion.div
                className='relative w-full h-full shadow-[0_20px_60px_-15px_rgba(30,83,56,0.15)] rounded-2xl overflow-hidden bg-white border border-brand-green/5'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {chapter.mediaContent
                  ? chapter.mediaContent
                  : chapter.image && (
                      <Image
                        src={chapter.image}
                        alt={chapter.title}
                        fill
                        className='object-cover hover:scale-110 transition-transform duration-700'
                        sizes='(max-width: 768px) 100vw, 50vw'
                      />
                    )}

                <div className='absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-green/80 to-transparent z-10' />

                <div className='absolute bottom-6 left-6 z-20'>
                  <span className='block text-4xl lg:text-5xl font-black text-white px-2 -ml-2 leading-none select-none tracking-tight drop-shadow-md'>
                    {chapter.years.replace('[', '').replace(']', '')}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
