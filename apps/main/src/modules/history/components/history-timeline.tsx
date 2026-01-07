'use client'

import { useRef, useMemo } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { cn } from '../utils/cn'
import Image from 'next/image'
import { Rocket, Building2, Globe, Target, Award, CheckCircle2 } from 'lucide-react'
import { HISTORY_CHAPTERS } from '../constants'

const CONFIG = {
  ITEM_HEIGHT: 400,
  TRUNK_X: 60,
  BRANCH_X: 140,
  CURVE_H: 80,
  GAP_RADIUS: 55 // Radius of the mask gap around each node
}

const CHAPTER_ICONS = [Rocket, Building2, Globe, Target, Award] as const

interface TimelineItem {
  id: string
  label: string
  years: string
  title: string
  description: string
  image?: string
  type: 'TRUNK' | 'BRANCH_START' | 'BRANCH' | 'MERGE'
  x: number
  y: number
  Icon: React.ElementType
}

export function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  // Calculate Git Flow Path Logic - CONTINUOUS VERSION for perfect scroll sync
  const { graphData, totalHeight, trunkPath, branchPath, activeStoryPath } = useMemo(() => {
    const nodeTypes: TimelineItem['type'][] = ['TRUNK', 'BRANCH_START', 'BRANCH', 'MERGE', 'TRUNK']

    const data: TimelineItem[] = HISTORY_CHAPTERS.map((chapter, index) => {
      const type = nodeTypes[index] || 'TRUNK'
      const x = type === 'BRANCH' ? CONFIG.BRANCH_X : CONFIG.TRUNK_X
      const y = index * CONFIG.ITEM_HEIGHT + CONFIG.ITEM_HEIGHT / 2

      return {
        ...chapter,
        type,
        x,
        y,
        Icon: CHAPTER_ICONS[index] || CheckCircle2
      }
    })

    const totalH = data.length * CONFIG.ITEM_HEIGHT

    // 1. TRUNK PATH: Perfectly straight vertical line (No segments)
    const trunkPath = `M ${CONFIG.TRUNK_X} 0 L ${CONFIG.TRUNK_X} ${totalH}`

    // 2. BRANCH PATH: Parallel flow with smooth cubic curves (No segments)
    const bStart = data[1]
    const bCommit = data[2]
    const bMerge = data[3]
    let branchPath = ''

    if (bStart && bCommit && bMerge) {
      const h = CONFIG.CURVE_H
      branchPath = `M ${CONFIG.TRUNK_X} ${bStart.y} `
      const sCurveY = bStart.y + 40
      branchPath += `L ${CONFIG.TRUNK_X} ${sCurveY} `
      branchPath += `C ${CONFIG.TRUNK_X} ${sCurveY + h / 2}, ${CONFIG.BRANCH_X} ${sCurveY + h / 2}, ${
        CONFIG.BRANCH_X
      } ${sCurveY + h} `
      branchPath += `L ${CONFIG.BRANCH_X} ${bCommit.y} `
      const eCurveY = bMerge.y - h - 40
      branchPath += `L ${CONFIG.BRANCH_X} ${eCurveY} `
      branchPath += `C ${CONFIG.BRANCH_X} ${eCurveY + h / 2}, ${CONFIG.TRUNK_X} ${eCurveY + h / 2}, ${CONFIG.TRUNK_X} ${
        eCurveY + h
      } `
      branchPath += `L ${CONFIG.TRUNK_X} ${bMerge.y}`
    }

    // 3. ACTIVE STORY PATH: Continuous solid path for 1:1 scroll mapping
    let storyPath = `M ${CONFIG.TRUNK_X} 0 `
    storyPath += `L ${CONFIG.TRUNK_X} ${data[1].y} `

    const h = CONFIG.CURVE_H
    const sCurveY = data[1].y + 40
    storyPath += `L ${CONFIG.TRUNK_X} ${sCurveY} `
    storyPath += `C ${CONFIG.TRUNK_X} ${sCurveY + h / 2}, ${CONFIG.BRANCH_X} ${sCurveY + h / 2}, ${CONFIG.BRANCH_X} ${
      sCurveY + h
    } `
    storyPath += `L ${CONFIG.BRANCH_X} ${data[2].y} `

    const eCurveY = data[3].y - h - 40
    storyPath += `L ${CONFIG.BRANCH_X} ${eCurveY} `
    storyPath += `C ${CONFIG.BRANCH_X} ${eCurveY + h / 2}, ${CONFIG.TRUNK_X} ${eCurveY + h / 2}, ${CONFIG.TRUNK_X} ${
      eCurveY + h
    } `
    storyPath += `L ${CONFIG.TRUNK_X} ${data[3].y} `

    if (data[4]) {
      storyPath += `L ${CONFIG.TRUNK_X} ${data[4].y} `
    }
    storyPath += `L ${CONFIG.TRUNK_X} ${totalH}`

    return { graphData: data, totalHeight: totalH, trunkPath, branchPath, activeStoryPath: storyPath }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 15%', 'end 85%']
  })

  // Synchronized smooth animation for the continuous journey
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className='relative w-full bg-brand-green overflow-hidden py-24 lg:py-32'>
      <div className='absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/10 pointer-events-none' />

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header - International Style */}
        <div className='mb-24 flex flex-col items-center text-center'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center mb-6'
          >
            <div className='bg-brand-gold w-20 h-1.5 mb-2 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-5xl lg:text-7xl font-black text-brand-gold mb-6 leading-[1.1] drop-shadow-2xl uppercase tracking-tight'
          >
            LỊCH SỬ PHÁT TRIỂN
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl'
          >
            15 năm kiên định với sứ mệnh kiến tạo môi trường giáo dục chuẩn quốc tế.
          </motion.p>
        </div>

        <div className='relative'>
          {/* SVG Graph Layer */}
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            <svg ref={svgRef} width='100%' height={totalHeight} className='overflow-visible'>
              <defs>
                <linearGradient
                  id='beam-gradient-gold'
                  gradientUnits='userSpaceOnUse'
                  x1='0'
                  y1='0'
                  x2='0'
                  y2={totalHeight}
                >
                  <stop offset='0%' stopColor='#faba1e' />
                  <stop offset='100%' stopColor='#fff' />
                </linearGradient>

                {/* SVG MASK FOR GAPS: White = Show, Black = Hide */}
                <mask id='timeline-mask'>
                  <rect x='0' y='0' width='100%' height={totalHeight} fill='white' />
                  {graphData.map((item) => (
                    <circle key={item.id} cx={item.x} cy={item.y} r={CONFIG.GAP_RADIUS} fill='black' />
                  ))}
                </mask>
              </defs>

              <g mask='url(#timeline-mask)'>
                {/* Structure (Ghost) Paths */}
                <path d={trunkPath} stroke='rgba(255, 255, 255, 0.1)' strokeWidth='2' fill='none' />
                {branchPath && <path d={branchPath} stroke='rgba(255, 255, 255, 0.1)' strokeWidth='2' fill='none' />}

                {/* Active Beam Path (Synchronized continuous journey) */}
                <motion.path
                  d={activeStoryPath}
                  stroke='url(#beam-gradient-gold)'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: pathProgress }}
                />
              </g>
            </svg>
          </div>

          {/* Content Layer */}
          <div className='relative'>
            {graphData.map((item, index) => {
              const contentShift = item.type === 'BRANCH' ? 'lg:pl-[240px]' : 'lg:pl-[180px]'

              return (
                <div key={item.id} className='relative' style={{ height: CONFIG.ITEM_HEIGHT }}>
                  {/* Node Logo & Year - ACTIVE STATE ON SCROLL */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0.3 }}
                    whileInView={{ scale: 1.25, opacity: 1 }}
                    viewport={{ margin: '-45% 0px -45% 0px' }} // Tightened margin for focal activation
                    transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
                    className='absolute z-20 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3'
                    style={{ left: item.x }}
                  >
                    {/* Background Pulse Glow */}
                    <div className='absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full scale-150 animate-pulse pointer-events-none' />

                    <motion.div
                      className='relative w-16 h-16 md:w-24 md:h-24'
                      whileInView={{
                        filter: [
                          'drop-shadow(0 0 5px rgba(250,186,30,0.5))',
                          'drop-shadow(0 0 40px rgba(250,186,30,1))'
                        ]
                      }}
                      viewport={{ margin: '-45% 0px -45% 0px' }}
                    >
                      <Image src='/images/base/lhbs.png' alt='LHBS Logo' fill className='object-contain' />
                    </motion.div>

                    <motion.span
                      className='whitespace-nowrap text-xs md:text-sm font-black text-brand-gold drop-shadow-md bg-brand-green px-3 py-1 rounded-full border-2 border-brand-gold shadow-[0_0_20px_rgba(250,186,30,0.4)]'
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1.1 }}
                      viewport={{ margin: '-45% 0px -45% 0px' }}
                    >
                      {item.years}
                    </motion.span>
                  </motion.div>

                  {/* International Style Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    className={cn('flex flex-col justify-center h-full pl-28 pr-4 transition-all', contentShift)}
                  >
                    {/* Chapter Badge */}
                    <div className='mb-6'>
                      <span className='inline-flex px-4 py-2 bg-brand-gold text-brand-green text-[12px] font-black rounded-sm uppercase tracking-[0.2em] shadow-xl'>
                        {item.label}
                      </span>
                    </div>

                    {/* Big White Title */}
                    <div className='mb-6'>
                      <h3 className='text-3xl md:text-3xl lg:text-3xl font-black text-white uppercase tracking-tight leading-[0.95] max-w-4xl'>
                        {item.title}
                      </h3>
                    </div>

                    {/* Minimal Description */}
                    <div className='relative border-l border-white/10 pl-8'>
                      <p className='text-white/70 text-base md:text-xl font-medium leading-relaxed max-w-2xl'>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
