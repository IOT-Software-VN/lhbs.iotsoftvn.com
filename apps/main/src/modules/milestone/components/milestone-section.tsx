'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { type EdgeSection } from '../types'

interface MilestoneSectionProps {
  section: EdgeSection
  index: number
  onInView: () => void
}

export function MilestoneSection({ section, index, onInView }: MilestoneSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' })

  useEffect(() => {
    if (isInView) {
      onInView()
    }
  }, [isInView, onInView])

  return (
    <div
      id={`milestone-${index}`}
      ref={ref}
      className='min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 relative'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.8 }}
        className='max-w-4xl space-y-12'
      >
        <div className='space-y-8'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-1 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
              <span className='text-sm font-black tracking-[0.2em] text-brand-gold uppercase'>KỶ NIỆM 15 NĂM</span>
            </div>
          </div>

          <div className='relative space-y-4'>
            <h3 className='text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black text-white tracking-tight uppercase leading-none drop-shadow-xl'>
              {section.titleFull}
            </h3>
          </div>

          <p className='text-xl md:text-2xl text-white/90 font-medium font-serif italic max-w-2xl'>
            "{section.subtitle}"
          </p>
        </div>

        <div className='max-w-3xl'>
          <p className='text-lg md:text-xl text-white/80 font-light leading-relaxed border-l-2 border-brand-gold/30 pl-6'>
            {section.description}
          </p>
        </div>

        {/* Feature Cards - Clean & Minimal */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-6'>
          {section.features.map((feature) => (
            <div
              key={feature.title}
              className='group flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 hover:-translate-y-1'
            >
              <div className='shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green-dark transition-all duration-500'>
                {feature.icon}
              </div>
              <div>
                <h5 className='text-base font-bold text-white uppercase mb-1 group-hover:text-brand-gold transition-colors'>
                  {feature.title}
                </h5>
                <p className='text-sm text-white/60 leading-snug font-medium'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
