'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue } from 'motion/react'
import { type SchoolLevel } from '../types'

interface CurvedTimelineProps {
  levels: SchoolLevel[]
}

export function CurvedTimeline({ levels }: CurvedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pathDefinition, setPathDefinition] = useState<string>('')
  const [svgHeight, setSvgHeight] = useState(0)

  // Use ResizeObserver to reliably track layout changes (images loading, etc)
  useEffect(() => {
    if (!containerRef.current) return

    const calculatePath = () => {
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (!containerRect) return

      // We need absolute coordinates relative to the DOM to account for scrolling
      // BUT for SVG inside 'absolute', we want coordinates relative to that container.
      // Since container is absolute inset-0 of the parent 'relative' wrapper,
      // we can just use offsetLeft/Top if they are direct children, but they are deep in DOM.
      // Easiest is: getBoundingClientRect of Node - getBoundingClientRect of Container.

      const points = levels
        .map((level) => {
          // Look for the dedicated anchor point first
          const el =
            document.getElementById(`timeline-anchor-${level}`) || document.getElementById(`timeline-node-${level}`)
          if (!el) return null

          const rect = el.getBoundingClientRect()
          // Anchor is 0x0 centered, so just use left/top
          const x = rect.left - containerRect.left
          const y = rect.top - containerRect.top
          return { x, y }
        })
        .filter(Boolean) as { x: number; y: number }[]

      if (points.length === 0) return

      // Adjust SVG height
      const lastPoint = points[points.length - 1]
      setSvgHeight(lastPoint.y + 200)

      // Start path at top center
      const startX = containerRect.width / 2
      const startY = 0

      // SMOOTH BEZIER LOGIC
      let path = `M ${startX} ${startY}`

      // First segment: Start -> 1st Point with a nice "Intro Curve"
      path += ` C ${startX} ${points[0].y * 0.5}, ${points[0].x} ${points[0].y * 0.5}, ${points[0].x} ${points[0].y}`

      // Subsequent segments
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i]
        const next = points[i + 1]
        const midY = (current.y + next.y) / 2

        // S-Curve logic
        path += ` C ${current.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`
      }

      // End tail - fade out
      path += ` L ${points[points.length - 1].x} ${points[points.length - 1].y + 150}`

      setPathDefinition(path)
    }

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(calculatePath)
    })

    observer.observe(document.body)
    calculatePath()
    window.addEventListener('resize', calculatePath)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', calculatePath)
    }
  }, [levels])

  // Scroll Sync Tuning: PIXEL PERFECT MATCH
  // using manual calculation instead of relative percentages to ensure
  // variable speed content is matched exactly by the scan line.
  const maskHeight = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      // Absolute top of the container relative to document
      const containerTop = rect.top + window.scrollY

      // The "Active Point" is the center of the viewport
      const centerOfViewport = window.scrollY + window.innerHeight * 0.5

      // Calculate how far the center of viewport is into the container
      const currentHeight = centerOfViewport - containerTop

      // Clamp between 0 and full height
      // We allow it to go slightly beyond to ensure full completion at end
      maskHeight.set(Math.max(0, currentHeight))
    }

    // Initial calc
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [svgHeight]) // Recalc if SVG height changes

  return (
    <div ref={containerRef} className='absolute inset-0 pointer-events-none z-0 hidden md:block'>
      <svg width='100%' height={svgHeight} className='overflow-visible'>
        <defs>
          {/* Main Gradient for the Line */}
          <linearGradient id='beam-gradient' x1='0%' y1='0%' x2='0%' y2='100%' gradientUnits='userSpaceOnUse'>
            <stop offset='0%' stopColor='#006b3d' stopOpacity='1' />
            <stop offset='100%' stopColor='#FABA1E' stopOpacity='1' />
          </linearGradient>

          {/* MASK: Hard cut for precise "Scan Line" effect */}
          <mask id='path-mask' maskUnits='userSpaceOnUse'>
            <motion.rect x='0' y='0' width='100%' style={{ height: maskHeight }} fill='white' />
          </mask>
        </defs>

        {/* Base Track (Gray Dots) - Always Visible */}
        <path
          id='timeline-curve-track'
          d={pathDefinition}
          fill='none'
          stroke='#E5E7EB'
          strokeWidth='6'
          strokeLinecap='round'
          strokeDasharray='0 20'
          className='opacity-30'
        />

        {/* Footprint Trail (Walking on the path) */}
        {/* We use textPath to align footprints to the curve orientation */}
        <text
          dy='5'
          style={{
            fontSize: '20px',
            letterSpacing: '24px',
            filter: 'grayscale(1) sepia(1) saturate(5) hue-rotate(90deg) drop-shadow(0 2px 4px rgba(0,107,61,0.3))',
            mixBlendMode: 'normal',
            opacity: 1
          }}
          mask='url(#path-mask)'
        >
          <textPath href='#timeline-curve-track' startOffset='0' fill='#006b3d'>
            {/* 
                 Repeat footprints to fill the line. 
                 SVG Height / approx 40px per step
               */}
            {Array.from({ length: Math.ceil(svgHeight / 40) })
              .map(() => '👣')
              .join('')}
          </textPath>
        </text>

        {/* The Glowing Beam (Colored Dots) - REVEALED by Mask */}
        {/* Kept as a subtle underline/glow for the footprints */}
        <motion.path
          d={pathDefinition}
          fill='none'
          stroke='url(#beam-gradient)'
          strokeWidth='6'
          strokeLinecap='round'
          strokeDasharray='0 20'
          mask='url(#path-mask)'
          className='drop-shadow-[0_0_8px_rgba(250,186,30,0.3)] opacity-50'
        />

        {/* Optional "Head" Glowing Dot - Positioned at bottom of mask? 
            Hard to map SVG path coord to Y without complex math (getPointAtLength).
            For now, the scan line effect is the priority.
        */}
      </svg>
    </div>
  )
}
