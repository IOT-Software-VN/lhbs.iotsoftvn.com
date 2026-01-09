'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { type SchoolLevel } from '../types'

interface StickyNavProps {
  activeSection: SchoolLevel
  onNavigate: (level: SchoolLevel) => void
  isVisible?: boolean
}

export function StickyNav({ activeSection, onNavigate, isVisible = true }: StickyNavProps) {
  const navItems: { id: SchoolLevel; label: string }[] = [
    { id: 'preschool', label: 'Mầm non' },
    { id: 'primary', label: 'Tiểu học' },
    { id: 'secondary', label: 'THCS' },
    { id: 'high', label: 'THPT' }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='fixed left-8 top-1/2 -translate-y-1/2 z-51 hidden xl:flex flex-col items-center gap-2 select-none'
        >
          {/* --- Navigation Items with Moving Lac Bird --- */}
          {/* No gap needed because items have fixed height */}
          <div className='flex flex-col items-center mt-2 relative w-full'>
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  // Fixed height (h-24 = 96px) ensures enough space for the bird+label
                  // without pushing other items (no resizing/layout shift)
                  className='group relative flex flex-col items-center justify-center outline-none h-24 w-28 transition-colors'
                  aria-label={`Go to ${item.label}`}
                >
                  {isActive ? (
                    <motion.div
                      layoutId='lac-bird-indicator'
                      className='flex flex-col items-center z-10'
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25
                      }}
                    >
                      <Image
                        src='/images/base/lhbs.png'
                        alt='Active indicator'
                        width={60}
                        height={45}
                        className='object-contain drop-shadow-[0_0_12px_rgba(255,184,0,0.6)]'
                      />

                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className='mt-2 whitespace-nowrap text-sm font-extrabold uppercase tracking-widest text-[#FFB800] text-center drop-shadow-sm'
                      >
                        {item.label}
                      </motion.span>
                    </motion.div>
                  ) : (
                    // Dot is centered within the fixed area
                    <div className='w-2 h-2 rounded-full bg-gray-400 group-hover:bg-gray-300 transition-all duration-300 group-hover:scale-150' />
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
