'use client'

import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '@lhbs/utils'
import { TIMELINE_EVENTS } from '../constants'
import type { TimelineEvent } from '../types'

export function HistoryTimelineSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Smooth spring for timeline progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section
      ref={containerRef}
      className='relative w-full py-20 md:py-32 bg-linear-to-b from-white via-brand-green/5 to-white overflow-hidden'
    >
      <div className='container mx-auto px-4 md:px-8 mb-16 md:mb-24'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-3xl mx-auto'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mx-auto mb-6 rounded-full' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-brand-green uppercase tracking-tight mb-4'>
            Dòng thời gian
          </h2>
          <p className='text-base md:text-lg text-brand-green/60 font-light'>
            Những cột mốc quan trọng trong hành trình phát triển của LHBS
          </p>
        </motion.div>
      </div>

      <div className='relative container mx-auto px-4 md:px-8'>
        <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2'>
          <div className='absolute inset-0 bg-brand-green/10' />
          <motion.div
            style={{ scaleY: smoothProgress }}
            className='absolute top-0 left-0 w-full h-full bg-linear-to-b from-brand-gold via-brand-green to-brand-gold origin-top'
          />
        </div>

        <div className='lg:hidden absolute left-6 md:left-8 top-0 bottom-0 w-px'>
          <div className='absolute inset-0 bg-brand-green/10' />
          <motion.div
            style={{ scaleY: smoothProgress }}
            className='absolute top-0 left-0 w-full h-full bg-linear-to-b from-brand-gold via-brand-green to-brand-gold origin-top'
          />
        </div>

        <div className='relative'>
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineCard key={event.id} event={event} index={index} isLast={index === TIMELINE_EVENTS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TimelineCardProps {
  event: TimelineEvent
  index: number
  isLast: boolean
}

function TimelineCard({ event, index, isLast }: TimelineCardProps) {
  const isLeft = index % 2 === 0
  const Icon = event.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn('relative flex items-start gap-4 md:gap-8 mb-16 md:mb-24', isLast && 'mb-0')}
    >
      <div className='hidden lg:flex w-full items-center'>
        <div className={cn('w-[calc(50%-2rem)] flex', isLeft ? 'justify-end pr-8' : 'justify-end pr-8 order-3')}>
          {isLeft ? (
            <TimelineCardContent event={event} align='right' />
          ) : (
            <div className='text-right'>
              <YearBadge year={event.year} />
            </div>
          )}
        </div>

        <div className='relative z-10 flex items-center justify-center order-2'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={cn(
              'w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300',
              event.featured
                ? 'bg-brand-gold text-brand-green ring-4 ring-brand-gold/30'
                : 'bg-white text-brand-green border-2 border-brand-green'
            )}
          >
            {Icon && <Icon className='w-5 h-5 md:w-6 md:h-6' strokeWidth={2} />}
          </motion.div>
        </div>

        <div className={cn('w-[calc(50%-2rem)] flex', isLeft ? 'justify-start pl-8 order-3' : 'justify-start pl-8')}>
          {isLeft ? (
            <div className='text-left'>
              <YearBadge year={event.year} />
            </div>
          ) : (
            <TimelineCardContent event={event} align='left' />
          )}
        </div>
      </div>

      <div className='lg:hidden flex items-start gap-4 md:gap-6 w-full'>
        <div className='relative z-10 shrink-0'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center shadow-lg',
              event.featured
                ? 'bg-brand-gold text-brand-green ring-4 ring-brand-gold/30'
                : 'bg-white text-brand-green border-2 border-brand-green'
            )}
          >
            {Icon && <Icon className='w-5 h-5' strokeWidth={2} />}
          </motion.div>
        </div>

        <div className='flex-1 pt-1'>
          <YearBadge year={event.year} />
          <TimelineCardContent event={event} align='left' />
        </div>
      </div>
    </motion.div>
  )
}

function YearBadge({ year }: { year: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className='inline-block text-2xl md:text-3xl lg:text-4xl font-black text-brand-gold mb-2'
    >
      {year}
    </motion.span>
  )
}

interface TimelineCardContentProps {
  event: TimelineEvent
  align: 'left' | 'right'
}

function TimelineCardContent({ event, align }: TimelineCardContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn(
        'group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-lg',
        event.featured && 'ring-2 ring-brand-gold/20'
      )}
    >
      {event.image && (
        <div className='relative h-48 md:h-56 overflow-hidden'>
          <Image
            src={event.image}
            alt={event.title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-700'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent' />
          {event.featured && (
            <div className='absolute top-3 right-3 px-3 py-1 bg-brand-gold text-brand-green text-xs font-bold uppercase tracking-wider rounded-full'>
              Cột mốc quan trọng
            </div>
          )}
        </div>
      )}

      <div className={cn('p-5 md:p-6', align === 'right' && 'text-right')}>
        <h3 className='text-lg md:text-xl font-bold text-brand-green mb-1'>{event.title}</h3>
        {event.subtitle && <p className='text-sm text-brand-gold font-medium mb-3'>{event.subtitle}</p>}
        <p className='text-sm md:text-base text-brand-green/70 font-light leading-relaxed'>{event.description}</p>
      </div>

      <div
        className={cn(
          'absolute bottom-0 w-full h-1 bg-linear-to-r',
          event.featured ? 'from-brand-gold via-brand-green to-brand-gold' : 'from-brand-green to-brand-gold'
        )}
      />
    </motion.div>
  )
}
