'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { MILESTONE_HIGHLIGHTS } from '../constants'
import type { MilestoneHighlight } from '../types'

export function HistoryMilestonesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className='relative w-full py-24 md:py-32 bg-white overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(#1e5338_1px,transparent_1px)] [background-size:16px_16px] opacity-10' />

      <div className='relative z-10 container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center max-w-3xl mx-auto mb-16 md:mb-24'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mx-auto mb-6 rounded-full shadow-[0_2px_10px_rgba(250,186,30,0.3)]' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-brand-green uppercase tracking-tight mb-4'>
            Con số <span className='text-brand-gold'>tự hào</span>
          </h2>
          <p className='text-base md:text-lg text-brand-green/60 font-light'>
            Thành tựu rực rỡ qua 15 năm phát triển bền vững
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8'>
          {MILESTONE_HIGHLIGHTS.map((milestone, index) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface MilestoneCardProps {
  milestone: MilestoneHighlight
  index: number
  isInView: boolean
}

function MilestoneCard({ milestone, index, isInView }: MilestoneCardProps) {
  const Icon = milestone.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className='group relative bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-green/10 hover:border-brand-green/30 overflow-hidden'
    >
      <div className='relative z-10 flex flex-col items-center text-center'>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-green/5 flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300'
        >
          <Icon className='w-6 h-6 md:w-7 md:h-7 text-brand-green/50 group-hover:text-brand-green transition-colors duration-300' />
        </motion.div>

        <AnimatedValue value={milestone.value} isInView={isInView} delay={0.3 + 0.1 * index} />

        <p className='text-sm md:text-base font-bold text-brand-green/80 uppercase tracking-wide mb-2 group-hover:text-brand-green transition-colors'>
          {milestone.label}
        </p>

        {milestone.description && (
          <p className='text-xs md:text-sm text-brand-green/40 font-light group-hover:text-brand-green/60 transition-colors'>
            {milestone.description}
          </p>
        )}
      </div>

      <div className='absolute bottom-0 left-0 w-full h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center' />
    </motion.div>
  )
}

interface AnimatedValueProps {
  value: string
  isInView: boolean
  delay: number
}

function AnimatedValue({ value, isInView, delay }: AnimatedValueProps) {
  const [displayValue, setDisplayValue] = useState('0')

  const numericMatch = value.match(/^(\d+)(.*)$/)
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0
  const suffix = numericMatch ? numericMatch[2] : value

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const startTime = performance.now() + delay * 1000
    let animationFrame: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easedProgress * targetNumber)

      setDisplayValue(currentValue.toString())

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(targetNumber.toString())
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isInView, targetNumber, delay])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      className='text-3xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3 tabular-nums tracking-tight group-hover:text-brand-gold transition-colors'
    >
      {displayValue}
      <span className='text-brand-gold group-hover:text-brand-green ml-0.5 transition-colors'>{suffix}</span>
    </motion.span>
  )
}
