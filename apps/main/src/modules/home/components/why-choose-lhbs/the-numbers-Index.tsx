'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { WHY_CHOOSE_DATA } from '../../constants'
import { type WhyChooseItem } from '../../types'
import { InfoCard } from './info-card'
import { CoreStrengthModal } from './core-strength-modal'

export function TheNumbersSection() {
  const [selectedStrength, setSelectedStrength] = useState<WhyChooseItem | null>(null)

  return (
    <section className='relative w-full h-full bg-white overflow-hidden font-sans flex flex-col'>
      {/* White Section - Why Choose LHBS */}
      <div className='w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 py-8 md:py-16'>
        {/* Header - Left Aligned */}
        <div className='flex flex-col items-start mb-8 md:mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-green uppercase tracking-tight drop-shadow-2xl'
          >
            Tại sao chọn LHBS
          </motion.h2>
        </div>

        {/* Info Cards Grid - Extra top padding for floating icons */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20 pt-16'>
          {WHY_CHOOSE_DATA.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              onClick={() => setSelectedStrength(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStrength && (
          <CoreStrengthModal
            title={selectedStrength.title}
            description={selectedStrength.description}
            fullDescription={selectedStrength.fullDescription}
            image={selectedStrength.image}
            alt={selectedStrength.alt}
            onClose={() => setSelectedStrength(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
