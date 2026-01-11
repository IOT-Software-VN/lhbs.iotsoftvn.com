'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { SCHOOL_LEVELS } from '../../constants'
import { EducationLevelPanel } from './education-level-panel'
import { EducationLevelPanelMobile } from './education-level-panel-moblie'

export function EducationLevelSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseEnter = useCallback((index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index)
    }, 100)
  }, [])

  // Mobile view
  if (isMobile) {
    return <EducationLevelPanelMobile levels={SCHOOL_LEVELS} />
  }

  // Desktop view
  return (
    <section
      id='solid-education-level'
      className='w-full h-dvh flex overflow-hidden relative bg-[#050505] snap-start isolate'
    >
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s linear infinite alternate;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
      {SCHOOL_LEVELS.map((item, index) => {
        const isActive = index === activeIndex
        const widthPercentage = isActive ? '60%' : `${40 / (SCHOOL_LEVELS.length - 1)}%`

        return (
          <EducationLevelPanel
            key={item.id}
            item={item}
            index={index}
            isActive={isActive}
            widthPercentage={widthPercentage}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        )
      })}
    </section>
  )
}
