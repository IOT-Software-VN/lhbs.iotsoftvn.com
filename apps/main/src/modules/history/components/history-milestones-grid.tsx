'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { MILESTONE_HIGHLIGHTS } from '../constants'
import type { MilestoneHighlight } from '../types'

export function HistoryMilestonesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className='relative w-full py-24 md:py-32 bg-gray-50/50 overflow-hidden'>
      {/* Subtle Background */}
      <div className='absolute inset-0 bg-[radial-gradient(#1e5338_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-[0.03]' />

      <div className='relative z-10 container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center max-w-3xl mx-auto mb-16 md:mb-24'
        >
          <div className='bg-brand-gold w-20 h-2 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-brand-green uppercase tracking-tight mb-4'>
            Con số <span className='text-brand-gold'>tự hào</span>
          </h2>
          <p className='text-lg md:text-xl text-brand-green/70 font-light'>
            Thành tựu rực rỡ qua 15 năm phát triển bền vững
          </p>
        </motion.div>

        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6'>
          {MILESTONE_HIGHLIGHTS.map((milestone, index) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MilestoneCard({
  milestone,
  index,
  isInView
}: {
  milestone: MilestoneHighlight
  index: number
  isInView: boolean
}) {
  const Icon = milestone.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      className='group relative bg-white rounded-2xl p-6 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(30,83,56,0.1)] transition-all duration-300 border border-transparent hover:border-brand-green/20'
    >
      <div className='flex flex-col items-center text-center h-full justify-between gap-4'>
        <div className='w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand-green/5 flex items-center justify-center group-hover:bg-brand-green group-hover:rotate-3 transition-all duration-300'>
          <Icon className='w-6 h-6 md:w-7 md:h-7 text-brand-green/70 group-hover:text-white transition-colors duration-300' />
        </div>

        <div className='flex flex-col items-center gap-1'>
          <AnimatedValue value={milestone.value} isInView={isInView} delay={0.3 + 0.1 * index} />
          <h3 className='text-sm md:text-base font-bold text-brand-green uppercase tracking-wide'>{milestone.label}</h3>
        </div>

        {milestone.description && (
          <p className='text-xs text-brand-green/50 font-medium leading-tight px-2'>{milestone.description}</p>
        )}
      </div>
    </motion.div>
  )
}

function AnimatedValue({ value, isInView, delay }: { value: string; isInView: boolean; delay: number }) {
  const [displayValue, setDisplayValue] = useState('0')
  // Simple regex to split number and suffix (e.g. "15+")
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value

  useEffect(() => {
    if (!isInView || !target) {
      if (!target && value !== '0') setDisplayValue(value) // Fallback for non-numeric
      return
    }

    const duration = 2000
    const start = performance.now() + delay * 1000
    let frame: number

    const tick = (now: number) => {
      const elapsed = now - start
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick)
        return
      }
      const p = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - p, 4) // easeOutQuart

      setDisplayValue(Math.floor(ease * target).toString())

      if (p < 1) frame = requestAnimationFrame(tick)
      else setDisplayValue(target.toString())
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target, delay, value])

  return (
    <span className='text-3xl md:text-4xl font-black text-brand-green group-hover:text-brand-gold transition-colors duration-300 tabular-nums tracking-tighter'>
      {target > 0 ? displayValue : ''}
      <span className='text-brand-gold group-hover:text-brand-green ml-0.5 text-2xl md:text-3xl transition-colors duration-300'>
        {suffix}
      </span>
    </span>
  )
}
