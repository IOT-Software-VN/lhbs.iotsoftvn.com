'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@lhbs/utils'
import { edgeSections } from '../constants'
import { MilestoneSection } from './milestone-section'
import { MilestoneNavTab } from './milestone-nav-tab'

export function TheLHBSEdge() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLElement>(null)
  const yOffsetHeader = 80

  const scrollToTab = (index: number) => {
    const element = document.getElementById(`milestone-${index}`)
    if (element) {
      const yOffset = -yOffsetHeader
      const top = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: top, behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      className='relative w-full bg-linear-to-b from-[#013b1d] to-brand-green-dark text-white'
    >
      <div className='flex flex-col lg:flex-row relative'>
        {/* Left Content Column - SCROLLABLE */}
        <div className='w-full lg:w-[60%] flex flex-col'>
          {edgeSections.map((section, index) => (
            <MilestoneSection key={section.id} section={section} index={index} onInView={() => setActiveTab(index)} />
          ))}
        </div>

        {/* Right Navigation Column - RETRO DESIGN (No Steps) */}
        <div className='hidden lg:flex lg:w-[40%] h-screen sticky top-0 flex-col justify-center items-center  py-20 px-6 md:px-12 lg:px-20'>
          <div className='relative w-full max-w-lg'>
            <div className='relative space-y-12 z-10'>
              {/* Vertical Timeline Line */}
              <div className='absolute left-7 lg:left-8 top-7 lg:top-8 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0'>
                <motion.div
                  className='absolute top-0 left-0 w-full bg-brand-gold shadow-[0_0_15px_rgba(250,186,30,0.3)] origin-top'
                  style={{ height: `${(activeTab / (edgeSections.length - 1)) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              </div>

              {edgeSections.map((item, index) => (
                <MilestoneNavTab
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={activeTab === index}
                  onClick={() => scrollToTab(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav Indicator (Bottom) */}
        <div className='lg:hidden fixed bottom-6 left-0 w-full px-6 flex justify-center z-50 pointer-events-none'>
          <div className='bg-[#004d26]/90 backdrop-blur-md rounded-full px-4 py-2 flex gap-2 border border-white/10 pointer-events-auto shadow-2xl'>
            {edgeSections.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToTab(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  activeTab === i ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
