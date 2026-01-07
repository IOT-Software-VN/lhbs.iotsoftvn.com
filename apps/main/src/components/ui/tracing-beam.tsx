'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring } from 'motion/react'
import { cn } from '@lhbs/utils'

// LHBS Brand Colors
const LHBS_GREEN = '#1e5338'
const LHBS_GOLD = '#faba1e'

export interface TracingBeamProps {
  children: React.ReactNode
  className?: string
  /** Primary color for gradient start. Default: LHBS Green (#1e5338) */
  colorPrimary?: string
  /** Accent color for gradient end. Default: LHBS Gold (#faba1e) */
  colorAccent?: string
  /** Show glow effect on the beam. Default: true */
  showGlow?: boolean
}

export function TracingBeam({
  children,
  className,
  colorPrimary = LHBS_GREEN,
  colorAccent = LHBS_GOLD,
  showGlow = true
}: TracingBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight)
      }
    }

    updateHeight()

    // Recalculate on resize
    const resizeObserver = new ResizeObserver(updateHeight)
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  // Smooth spring animation for gradient position
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 300,
    damping: 60,
    restDelta: 0.001
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 300,
    damping: 60,
    restDelta: 0.001
  })

  // Unique gradient ID to avoid conflicts when multiple instances
  const gradientId = `tracing-beam-gradient-${React.useId()}`
  const glowFilterId = `tracing-beam-glow-${React.useId()}`

  return (
    <motion.div ref={containerRef} className={cn('relative mx-auto h-full w-full max-w-4xl', className)}>
      {/* SVG Tracing Beam */}
      <div className='absolute top-3 -left-4 md:-left-20 pointer-events-none'>
        {/* Start Node Marker */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border-2 shadow-sm'
          style={{
            borderColor: colorPrimary,
            boxShadow: showGlow ? `0 0 12px ${colorPrimary}40` : 'none'
          }}
        >
          <motion.div
            className='h-2 w-2 rounded-full'
            style={{ backgroundColor: colorAccent }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Tracing Line SVG */}
        <svg viewBox={`0 0 20 ${svgHeight}`} width='20' height={svgHeight} className='ml-4 block' aria-hidden='true'>
          <defs>
            {/* Glow filter */}
            {showGlow && (
              <filter id={glowFilterId}>
                <feGaussianBlur stdDeviation='2' result='coloredBlur' />
                <feMerge>
                  <feMergeNode in='coloredBlur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            )}

            {/* Gradient definition */}
            <motion.linearGradient id={gradientId} gradientUnits='userSpaceOnUse' x1='0' x2='0' y1={y1} y2={y2}>
              <stop offset='0%' stopColor={colorPrimary} stopOpacity='0' />
              <stop offset='10%' stopColor={colorPrimary} />
              <stop offset='60%' stopColor={colorAccent} />
              <stop offset='100%' stopColor={colorAccent} stopOpacity='0' />
            </motion.linearGradient>
          </defs>

          {/* Background track */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill='none'
            stroke='currentColor'
            strokeOpacity='0.1'
            strokeWidth='1.5'
            className='text-neutral-400'
          />

          {/* Active gradient path */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill='none'
            stroke={`url(#${gradientId})`}
            strokeWidth='2'
            strokeLinecap='round'
            filter={showGlow ? `url(#${glowFilterId})` : undefined}
            className='motion-reduce:hidden'
          />
        </svg>
      </div>

      {/* Content */}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}
