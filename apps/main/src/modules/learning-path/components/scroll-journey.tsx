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

  // Visibility Observer for StickyNav - Chỉ hiển thị trong khu vực các cấp học
  useEffect(() => {
    const checkVisibility = () => {
      // Lấy section đầu tiên và cuối cùng
      const firstSectionEl = document.getElementById(`section-${levels[0]}`)
      const lastSectionEl = document.getElementById(`section-${levels[levels.length - 1]}`)

      if (!firstSectionEl || !lastSectionEl) {
        setIsInPathSection(false)
        return
      }

      const firstRect = firstSectionEl.getBoundingClientRect()
      const lastRect = lastSectionEl.getBoundingClientRect()

      // Hiển thị khi:
      // 1. Section đầu tiên đã vào viewport (top < 80% viewport height)
      // 2. Section cuối cùng vẫn còn trong viewport đủ nhiều (bottom > 50% viewport height)
      //    Điều này đảm bảo ẩn sticky nav trước khi đến footer
      const hasEnteredFirstSection = firstRect.top < window.innerHeight * 0.8
      const hasNotLeftLastSection = lastRect.bottom > window.innerHeight * 0.5

      const shouldShow = hasEnteredFirstSection && hasNotLeftLastSection

      setIsInPathSection(shouldShow)
    }

    // Kiểm tra ngay lập tức
    checkVisibility()

    // Thêm scroll listener với requestAnimationFrame để tối ưu performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkVisibility)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
