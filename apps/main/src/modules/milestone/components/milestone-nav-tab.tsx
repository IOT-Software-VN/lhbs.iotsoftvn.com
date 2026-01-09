'use client'

import { motion } from 'motion/react'
import { cn } from '@lhbs/utils'
import { type EdgeSection } from '../types'

interface MilestoneNavTabProps {
  item: EdgeSection
  index: number
  isActive: boolean
  onClick: () => void
}

export function MilestoneNavTab({ item, index: _index, isActive, onClick }: MilestoneNavTabProps) {
  return (
    <button
      onClick={onClick}
      className='group relative w-full flex items-center gap-6 lg:gap-10 transition-all duration-700 outline-none text-left'
    >
      {/* Icon Box */}
      <div className='relative shrink-0 z-20'>
        <div
          className={cn(
            'w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-700 relative overflow-hidden border',
            isActive
              ? 'bg-brand-gold border-brand-gold text-brand-green-dark shadow-[0_0_40px_rgba(250,186,30,0.3)] scale-110'
              : 'bg-[#004d26] border-white/5 text-white/40 group-hover:border-brand-gold/50 group-hover:text-white group-hover:scale-110 shadow-lg'
          )}
        >
          <div className={cn('transition-transform duration-700', isActive ? 'scale-110' : 'group-hover:scale-110')}>
            {item.icon}
          </div>
        </div>
        {isActive && (
          <motion.div layoutId='glow-dot' className='absolute inset-0 bg-brand-gold rounded-2xl blur-2xl opacity-20' />
        )}
      </div>

      {/* Text Info */}
      <div
        className={cn(
          'flex flex-col text-left space-y-2 transition-all duration-700 w-full',
          isActive ? 'opacity-100' : 'opacity-30 group-hover:opacity-70'
        )}
      >
        <h4
          className={cn(
            'text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter transition-all duration-700 leading-none',
            isActive ? 'text-white translate-x-1 lg:translate-x-2' : 'text-white/20 group-hover:text-white/40'
          )}
        >
          {item.title}
        </h4>

        <div
          className={cn(
            'overflow-hidden transition-all duration-700',
            isActive ? 'max-h-12 opacity-100 mt-1' : 'max-h-0 opacity-0'
          )}
        >
          <p
            className={cn(
              'text-[10px] lg:text-[11px] font-bold text-brand-gold/90 uppercase tracking-widest leading-tight transition-transform duration-700',
              isActive ? 'translate-x-1 lg:translate-x-2' : ''
            )}
          >
            {item.timeRange}
          </p>
        </div>
      </div>
    </button>
  )
}
