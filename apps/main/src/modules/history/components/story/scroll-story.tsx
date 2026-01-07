'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { cn } from '@lhbs/utils'
import { ProgressRail } from './progress-rail'
import { ChapterSection } from './chapter-section'
import { HISTORY_CHAPTERS } from '../../constants'

export function ScrollStory() {
  const [activeId, setActiveId] = useState<string>(HISTORY_CHAPTERS[0].id)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    HISTORY_CHAPTERS.forEach((chapter) => {
      const element = document.getElementById(chapter.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div ref={containerRef} className='relative w-full bg-white text-brand-green overflow-hidden'>
      <div className='fixed inset-0 pointer-events-none z-0 bg-white' />
      <div className='fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent opacity-40' />

      <div className='lg:hidden sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-brand-green/10 shadow-sm transition-all duration-300'>
        <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide px-4 py-3 snap-x'>
          {HISTORY_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeId

            return (
              <button
                id={`mobile-nav-${chapter.id}`}
                key={chapter.id}
                onClick={() => {
                  const el = document.getElementById(chapter.id)
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 120
                    window.scrollTo({ top: y, behavior: 'smooth' })
                  }
                }}
                className={cn(
                  'flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap snap-center uppercase tracking-wider border',
                  isActive
                    ? 'bg-brand-green text-brand-gold border-brand-green shadow-md'
                    : 'bg-white text-brand-green/60 border-brand-green/10 hover:text-brand-green hover:border-brand-green/30'
                )}
              >
                {chapter.label}
              </button>
            )
          })}
        </div>
        <motion.div style={{ scaleX }} className='absolute bottom-0 left-0 h-0.5 bg-brand-gold origin-left w-full' />
      </div>

      <div className='relative z-10 flex items-start'>
        <div className='hidden lg:block sticky top-0 h-screen w-[20%] xl:w-[25%] flex-col justify-center border-r border-brand-green/5 bg-white/50 backdrop-blur-sm z-30'>
          <ProgressRail chapters={HISTORY_CHAPTERS} activeId={activeId} />
        </div>

        <div className='flex-1 flex flex-col min-w-0'>
          {HISTORY_CHAPTERS.map((chapter, index) => (
            <ChapterSection key={chapter.id} chapter={chapter} index={index} />
          ))}

          <div className='h-[10vh]' />
        </div>
      </div>
    </div>
  )
}
