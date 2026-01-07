'use client'

import { cn } from '@lhbs/utils'
import type { HistoryChapter } from '../../types'

interface ProgressRailProps {
  chapters: HistoryChapter[]
  activeId: string
  className?: string
}

export function ProgressRail({ chapters, activeId, className }: ProgressRailProps) {
  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -20
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className={cn('flex flex-col items-center justify-center p-8 h-full', className)}>
      <div className='relative flex flex-col items-start gap-0 w-full max-w-[200px]'>
        <div className='absolute left-[15px] top-6 bottom-6 w-px bg-brand-green/10 -z-10' />

        {chapters.map((chapter, index) => {
          const isActive = chapter.id === activeId
          const activeIndex = chapters.findIndex((c) => c.id === activeId)
          const isPassed = index < activeIndex

          return (
            <div key={chapter.id} className='relative flex items-center group py-6 w-full'>
              <button
                onClick={() => scrollToChapter(chapter.id)}
                className='relative flex items-center justify-center focus:outline-hidden group/btn shrink-0 mr-6'
                aria-label={`Go to ${chapter.label}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div
                  className={cn(
                    'absolute -inset-2 rounded-full border transition-all duration-300 opacity-0 scale-50',
                    isActive
                      ? 'opacity-100 scale-100 border-brand-gold'
                      : 'group-hover/btn:opacity-50 group-hover/btn:scale-100 group-hover/btn:border-brand-green/20'
                  )}
                />

                <div
                  className={cn(
                    'w-[30px] h-[30px] rounded-full transition-all duration-300 z-10 flex items-center justify-center border-2 text-[10px] font-bold',
                    isActive
                      ? 'bg-brand-green border-brand-green text-brand-gold scale-110 shadow-lg'
                      : isPassed
                      ? 'bg-white border-brand-green text-brand-green'
                      : 'bg-white border-brand-green/20 text-brand-green/40 group-hover/btn:border-brand-green group-hover/btn:text-brand-green'
                  )}
                >
                  <div
                    className={cn(
                      'rounded-full transition-all duration-300',
                      isActive ? 'w-2 h-2 bg-brand-gold' : 'w-1.5 h-1.5 bg-current opacity-50'
                    )}
                  />
                </div>
              </button>

              <div
                className={cn(
                  'flex flex-col transition-all duration-300 cursor-pointer',
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-60 group-hover:opacity-100'
                )}
                onClick={() => scrollToChapter(chapter.id)}
              >
                <span
                  className={cn(
                    'text-sm font-bold uppercase tracking-wider mb-0.5 transition-colors',
                    isActive ? 'text-brand-green' : 'text-brand-green/60 group-hover:text-brand-green'
                  )}
                >
                  {chapter.label}
                </span>

                <span
                  className={cn(
                    'text-xs font-mono transition-colors',
                    isActive ? 'text-brand-gold font-bold' : 'text-brand-green/40 group-hover:text-brand-green/70'
                  )}
                >
                  {chapter.years}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
