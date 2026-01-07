import { schoolData } from '../constants'
import { type SchoolLevel } from '../types'
import { motion } from 'motion/react'

interface TimelineNavigationProps {
  activeTab: SchoolLevel
  onTabChange: (level: SchoolLevel) => void
}

export function TimelineNavigation({ activeTab, onTabChange }: TimelineNavigationProps) {
  const levels: SchoolLevel[] = ['preschool', 'primary', 'secondary', 'high']

  const getProgressWidth = () => {
    const currentIndex = levels.indexOf(activeTab)
    const total = levels.length - 1
    return `${(currentIndex / total) * 100}%`
  }

  const getProgressHeight = () => {
    const currentIndex = levels.indexOf(activeTab)
    const total = levels.length - 1
    return `${(currentIndex / total) * 100}%`
  }

  return (
    <div className='mb-8 md:mb-24 relative'>
      {/* Mobile Vertical Timeline */}
      <div className='md:hidden flex flex-col pl-4 border-l-2 border-gray-100 relative space-y-8 py-2 ml-4'>
        {/* Vertical Progress Bar Background */}
        <div className='absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gray-100' />

        {/* Vertical Active Progress Bar */}
        <motion.div
          className='absolute left-[-2px] top-0 w-[2px] bg-linear-to-b from-[#006b3d] to-brand-gold z-10'
          initial={false}
          animate={{ height: getProgressHeight() }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {levels.map((level) => {
          const isActive = activeTab === level
          const isPast = levels.indexOf(level) <= levels.indexOf(activeTab)
          const Icon = schoolData[level].icon

          return (
            <div key={level} className='relative pl-6 cursor-pointer group' onClick={() => onTabChange(level)}>
              {/* Node Indicator */}
              <motion.div
                className={`absolute left-[-1.15rem] top-1 w-9 h-9 rounded-full border-2 flex items-center justify-center bg-white z-20 transition-all duration-300 ${
                  isActive
                    ? 'border-brand-gold shadow-[0_0_0_4px_rgba(250,186,30,0.2)] text-[#006b3d]'
                    : isPast
                    ? 'border-[#006b3d] text-[#006b3d]'
                    : 'border-gray-200 text-gray-300'
                }`}
                animate={{ scale: isActive ? 1.1 : 1 }}
              >
                <Icon className='w-4 h-4' />
              </motion.div>

              <div>
                <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-[#006b3d]' : 'text-gray-500'}`}>
                  {schoolData[level].title}
                </h3>
                <p className='text-xs text-gray-400 font-medium'>{schoolData[level].grade}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop Horizontal Timeline */}
      <div className='hidden md:block'>
        {/* Tab Headers */}
        <div className='grid grid-cols-4 mb-16 text-center relative z-10 max-w-6xl mx-auto'>
          {levels.map((level) => (
            <div
              key={level}
              className={`cursor-pointer transition-all duration-300 group ${
                activeTab === level ? 'scale-105' : 'opacity-60 hover:opacity-100'
              }`}
              onClick={() => onTabChange(level)}
            >
              <h3
                className={`text-xl font-bold mb-1 transition-colors ${
                  activeTab === level ? 'text-[#006b3d]' : 'text-gray-500 group-hover:text-[#006b3d]'
                }`}
              >
                {schoolData[level].title.replace('School', '')}
              </h3>
              <p className={`text-sm font-medium ${activeTab === level ? 'text-brand-gold' : 'text-gray-400'}`}>
                {schoolData[level].grade}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Timeline */}
        <div className='max-w-6xl mx-auto px-16 relative h-12'>
          <div className='flex items-center justify-between relative w-full h-full'>
            <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-100 rounded-full' />
            <motion.div
              className='absolute top-1/2 -translate-y-1/2 h-1 bg-linear-to-r from-[#006b3d] to-brand-gold rounded-full shadow-[0_0_10px_rgba(250,186,30,0.3)] z-0'
              style={{ left: '0' }}
              initial={false}
              animate={{ width: getProgressWidth() }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            {levels.map((level) => {
              const isActive = activeTab === level
              const isPast = levels.indexOf(level) <= levels.indexOf(activeTab)
              const Icon = schoolData[level].icon

              return (
                <motion.div
                  key={level}
                  onClick={() => onTabChange(level)}
                  className={`relative z-10 w-14 h-14 rounded-full border-4 flex items-center justify-center cursor-pointer bg-white transition-colors duration-300 ${
                    isActive
                      ? 'border-brand-gold shadow-lg'
                      : isPast
                      ? 'border-[#006b3d]'
                      : 'border-gray-200 hover:border-[#006b3d]/50'
                  }`}
                  animate={{ scale: isActive ? 1.25 : 1 }}
                  whileHover={{ scale: isActive ? 1.25 : 1.1 }}
                >
                  <Icon className={`w-6 h-6 ${isActive || isPast ? 'text-[#006b3d]' : 'text-gray-300'}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
