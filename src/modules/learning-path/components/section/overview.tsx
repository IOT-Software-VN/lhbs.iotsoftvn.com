import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, ChevronRight, Star } from 'lucide-react'
import { schoolData, type SchoolLevel } from '../../constants'
const cardlhbs = '/images/base/card-lhbs.png'

interface OverviewSectionProps {
  onNavigate: (path: string) => void
}

export function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<SchoolLevel>('preschool')

  // Helper to get position for progress bar based on 4 steps: 0%, 33%, 66%, 100%
  const getProgressWidth = () => {
    switch (activeTab) {
      case 'preschool':
        return '0%'
      case 'primary':
        return '33%'
      case 'secondary':
        return '66%'
      case 'high':
        return '100%'
    }
  }

  return (
    <section id='overview' className='py-20 md:py-32 bg-white overflow-hidden relative'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-b from-brand-gold/5 to-transparent rounded-bl-full -z-10' />

      <div className='max-w-screen-2xl mx-auto px-6 md:px-12'>
        {/* Title Section */}
        <div className='flex flex-col items-center mb-16 md:mb-20 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h2 className='text-sm md:text-base font-bold text-brand-gold uppercase tracking-[0.2em] mb-3'>
              Lộ trình liền mạch
            </h2>
            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight 
            bg-linear-to-r from-[#006b3d] to-[#004d2c] 
            bg-clip-text text-transparent 
            inline-block uppercase 
            drop-shadow-sm'
            >
              TỔNG QUAN CHƯƠNG TRÌNH
            </h1>
            <p className='mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed'>
              Hệ thống giáo dục LHBS cung cấp lộ trình đào tạo khép kín từ Mầm non đến Trung học Phổ thông, đảm bảo sự
              phát triển liên tục và bền vững cho từng học sinh.
            </p>
          </motion.div>
        </div>

        {/* Timeline Navigation */}
        <div className='mb-16 md:mb-24'>
          <div className='grid grid-cols-2 md:grid-cols-4 mb-12 text-center relative z-10 gap-y-8 max-w-6xl mx-auto'>
            {(['preschool', 'primary', 'secondary', 'high'] as const).map((level) => (
              <div
                key={level}
                className={`cursor-pointer transition-all duration-300 group ${activeTab === level ? 'scale-105' : 'opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveTab(level)}
              >
                <h3
                  className={`text-lg md:text-xl font-bold mb-1 transition-colors ${activeTab === level ? 'text-[#006b3d]' : 'text-gray-500 group-hover:text-[#006b3d]'}`}
                >
                  {schoolData[level].title.replace('School', '')}
                </h3>
                <p
                  className={`text-xs md:text-sm font-medium ${activeTab === level ? 'text-brand-gold' : 'text-gray-400'}`}
                >
                  {schoolData[level].grade}
                </p>
              </div>
            ))}
          </div>

          <div className='hidden md:block max-w-6xl mx-auto px-16 relative h-12'>
            <div className='flex items-center justify-between relative w-full h-full'>
              <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-100 rounded-full' />
              <div
                className='absolute top-1/2 -translate-y-1/2 h-1 bg-linear-to-r from-[#006b3d] to-brand-gold rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(250,186,30,0.3)]'
                style={{ left: '0', width: getProgressWidth() }}
              />
              {(['preschool', 'primary', 'secondary', 'high'] as const).map((level) => {
                const isActive = activeTab === level
                const Icon = schoolData[level].icon
                return (
                  <div
                    key={level}
                    onClick={() => setActiveTab(level)}
                    className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 bg-white
                                ${isActive ? 'border-brand-gold scale-125 shadow-lg' : 'border-gray-200 hover:border-[#006b3d]/50'}
                            `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#006b3d]' : 'text-gray-400'}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* REDESIGNED CONTENT SECTION: Single Premium Card */}
        <div className='max-w-6xl mx-auto relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className='relative w-full overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#006b3d] to-[#004d2c] shadow-2xl group min-h-[500px]'
            >
              {/* Background Effects */}
              <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] opacity-[0.15] -mr-32 -mt-32 pointer-events-none' />
              <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-[0.08] -ml-20 -mb-20 pointer-events-none' />

              {/* Logo Watermark - Bottom Right (Higher Z-Index but behind main content) */}
              <Image
                src={cardlhbs}
                alt='LHBS Logo'
                width={600}
                height={600}
                className='absolute bottom-0 right-0 w-auto h-32 md:h-56 object-contain opacity-10 pointer-events-none translate-x-[10%] translate-y-[10%] z-0'
              />

              <div className='relative z-10 p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                {/* Left Column: Core Info */}
                <div className='space-y-8'>
                  <div>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6 shadow-inner'>
                      <SchoolIcon level={activeTab} />
                      <span>{schoolData[activeTab].grade}</span>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                      {schoolData[activeTab].title}
                    </h2>
                    <p className='text-lg text-white/90 leading-relaxed font-light text-justify'>
                      {schoolData[activeTab].description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate(schoolData[activeTab].link)}
                    className='group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-white text-lhbs-green-dark font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-[#003820] transition-all duration-300 shadow-lg hover:shadow-brand-gold/30'
                  >
                    Tìm hiểu chi tiết
                    <ChevronRight className='w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform' />
                  </button>
                </div>

                {/* Right Column: Competencies & Highlights */}
                <div className='bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl relative z-10'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='p-2 bg-brand-gold/20 rounded-lg text-brand-gold'>
                      <Star className='w-5 h-5 fill-current' />
                    </div>
                    <h3 className='text-lg font-bold text-white uppercase tracking-wider'>Khung năng lực cốt lõi</h3>
                  </div>

                  <ul className='space-y-4'>
                    {schoolData[activeTab].competencies.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className='flex items-start gap-4 group/item'
                      >
                        <div className='mt-1 p-0.5 rounded-full bg-brand-gold/20 text-brand-gold group-hover/item:bg-brand-gold group-hover/item:text-[#004d2c] transition-colors'>
                          <CheckCircle2 className='w-4 h-4' />
                        </div>
                        <span className='text-white/90 text-sm md:text-base font-medium leading-normal'>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Row: Trust Indicators / Certificates (Dynamic) */}
          <div className='mt-16 border-t border-gray-100 pt-10'>
            <h4 className='text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8'>
              Chương trình & Chứng chỉ
            </h4>
            <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
              {schoolData[activeTab].certificates.map((cert, idx) => (
                <div key={idx} className='flex flex-col items-center gap-2 group cursor-default'>
                  <div className='p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-[#006b3d] group-hover:bg-[#006b3d]/10 transition-all duration-300 scale-100 group-hover:scale-110 shadow-sm group-hover:shadow-md border border-transparent group-hover:border-[#006b3d]/20'>
                    <cert.icon className='w-8 h-8 md:w-10 md:h-10' />
                  </div>
                  <span className='text-xs md:text-sm font-bold text-gray-500 text-center max-w-[120px] group-hover:text-lhbs-green-dark transition-colors'>
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SchoolIcon({ level }: { level: SchoolLevel }) {
  const Icon = schoolData[level].icon
  return <Icon className='w-4 h-4' />
}
