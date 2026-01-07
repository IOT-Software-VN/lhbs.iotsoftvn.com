'use client'

import { useRef, useState, useEffect } from 'react'
import { type SchoolLevel } from '../types'
import { LevelSection } from './level-section'
import { StickyNav } from './sticky-nav'
import { CurvedTimeline } from './curved-timeline'

interface ScrollJourneyProps {
  onNavigate: (path: string) => void
}

export function ScrollJourney({ onNavigate }: ScrollJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeLevel, setActiveLevel] = useState<SchoolLevel>('preschool')
  const [isInPathSection, setIsInPathSection] = useState(false)
  const levels: SchoolLevel[] = ['preschool', 'primary', 'secondary', 'high']

  // Determine active section based on scroll using IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract level from ID "section-preschool" -> "preschool"
          const id = entry.target.id.replace('section-', '') as SchoolLevel
          if (levels.includes(id)) {
            setActiveLevel(id)
          }
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Stricter center focus for active state
      threshold: 0
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    levels.forEach((l) => {
      const el = document.getElementById(`section-${l}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Visibility Observer for StickyNav
  useEffect(() => {
    const containerEl = containerRef.current
    if (!containerEl) return

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInPathSection(entry.isIntersecting)
        })
      },
      {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0
      }
    )

    visibilityObserver.observe(containerEl)

    return () => visibilityObserver.disconnect()
  }, [])

  const scrollToSection = (level: SchoolLevel) => {
    const el = document.getElementById(`section-${level}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div ref={containerRef} className='relative w-full max-w-screen-2xl mx-auto px-6 md:px-12'>
      {/* New Curved Timeline - Mobile Hidden */}
      <CurvedTimeline levels={levels} />

      {/* Sticky Nav on the Left - Now with visibility toggle */}
      <StickyNav activeSection={activeLevel} onNavigate={scrollToSection} isVisible={isInPathSection} />

      {/* Sections Stack */}
      <div className='relative z-10 flex flex-col gap-0 md:gap-32 pb-32'>
        {levels.map((level, idx) => (
          <LevelSection key={level} level={level} index={idx} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  )
}
