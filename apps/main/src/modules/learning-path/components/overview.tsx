import { motion } from 'motion/react'
import { ScrollJourney } from './scroll-journey'

interface OverviewSectionProps {
  onNavigate: (path: string) => void
}

export function OverviewSection({ onNavigate }: OverviewSectionProps) {
  return (
    <section id='overview' className='py-16 md:py-32 bg-white overflow-hidden relative'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-b from-brand-gold/5 to-transparent rounded-bl-full -z-10 blur-3xl' />
      <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-radial from-[#006b3d]/5 to-transparent -z-10' />

      <div className='w-full'>
        {/* Title Section - Sticky Header feel */}
        <div className='flex flex-col items-center mb-12 md:mb-24 text-center px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.6)] mx-auto' />
            <h2 className='text-sm md:text-base font-bold text-brand-gold uppercase tracking-[0.25em] mb-4'>
              Hành trình học tập
            </h2>
            <h1
              className='text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight 
            bg-linear-to-r from-[#006b3d] to-[#004d2c] 
            bg-clip-text text-transparent 
            inline-block uppercase 
            drop-shadow-sm'
            >
              HỆ THỐNG GIÁO DỤC LHBS
            </h1>
            <p className='mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-xl leading-relaxed font-light'>
              Lộ trình đào tạo xuyên suốt từ <strong className='text-[#006b3d]'>Mầm non</strong> đến{' '}
              <strong className='text-[#006b3d]'>Trung học Phổ thông</strong>, kết nối tri thức và nuôi dưỡng nhân cách
              toàn cầu.
            </p>
          </motion.div>
        </div>

        {/* SCROLL JOURNEY COMPONENT */}
        <ScrollJourney onNavigate={onNavigate} />
      </div>
    </section>
  )
}
