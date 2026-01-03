import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Star } from 'lucide-react'
import cardlhbs from '@/images/base/card-lhbs.png'
import lhbs from '@/images/base/lhbs.png'
import { schoolData, partnerCerts, type SchoolLevel } from '../mock-data'

interface OverviewSectionProps {
  onNavigate: (path: string) => void
}

export default function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<SchoolLevel>('preschool')

  // Helper to get position for progress bar based on 4 steps: 0%, 33%, 66%, 100%
  const getProgressWidth = () => {
    switch (activeTab) {
      case 'preschool': return '0%'
      case 'primary': return '33%'
      case 'secondary': return '66%'
      case 'high': return '100%'
    }
  }

  return (
    <section id='overview' className='py-20 md:py-32 bg-white overflow-hidden relative'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#FABA1E]/5 to-transparent rounded-bl-full -z-10' />

      <div className='max-w-screen-2xl mx-auto px-6 md:px-12'>
        {/* Title Section */}
        <div className='flex flex-col items-center mb-16 md:mb-20 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h2 className='text-sm md:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-3'>
              Lộ trình liền mạch
            </h2>
            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight 
            bg-gradient-to-r from-[#006b3d] to-[#004d2c] 
            bg-clip-text text-transparent 
            inline-block uppercase 
            drop-shadow-sm'
            >
              TỔNG QUAN CHƯƠNG TRÌNH
            </h1>
            <p className='mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed'>
              Hệ thống giáo dục LHBS cung cấp lộ trình đào tạo khép kín từ Mầm non đến Trung học Phổ thông,
              đảm bảo sự phát triển liên tục và bền vững cho từng học sinh.
            </p>
          </motion.div>
        </div>

        {/* Timeline Navigation - 4 Steps */}
        <div className='mb-16 md:mb-24'>
          <div className='grid grid-cols-2 md:grid-cols-4 mb-12 text-center relative z-10 gap-y-8'>
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
                  className={`text-xs md:text-sm font-medium ${activeTab === level ? 'text-[#FABA1E]' : 'text-gray-400'}`}
                >
                  {schoolData[level].grade}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Bar Container */}
          <div className='hidden md:block max-w-6xl mx-auto px-4 relative h-12'>
            <div className='flex items-center justify-between relative w-full h-full'>
              {/* Background Line */}
              <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-100 rounded-full' />

              {/* Active Progress Line */}
              <div
                className='absolute top-1/2 -translate-y-1/2 h-[4px] bg-gradient-to-r from-[#006b3d] to-[#FABA1E] rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(250,186,30,0.3)]'
                style={{
                  left: '0',
                  width: getProgressWidth()
                }}
              />

              {/* Dots / Icons */}
              {(['preschool', 'primary', 'secondary', 'high'] as const).map((level) => {
                const isActive = activeTab === level
                const Icon = schoolData[level].icon
                return (
                  <div
                    key={level}
                    onClick={() => setActiveTab(level)}
                    className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 bg-white
                                ${isActive ? 'border-[#FABA1E] scale-125 shadow-lg' : 'border-gray-200 hover:border-[#006b3d]/50'}
                            `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#006b3d]' : 'text-gray-400'}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch'>

          {/* Left Column - Certificates */}
          <div className='lg:col-span-4 flex flex-col justify-center'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-1 h-8 bg-[#FABA1E] rounded-full' />
              <h3 className='text-2xl font-bold text-[#006b3d] uppercase tracking-wide'>Đối tác & Chứng nhận</h3>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {partnerCerts.map((cert, idx) => (
                <div
                  key={idx}
                  className='group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FABA1E]/30 transition-all duration-300 flex flex-col items-center justify-center text-center aspect-square'
                >
                  <div className='mb-3 text-gray-300 group-hover:text-[#FABA1E] transition-all duration-500 scale-110'>
                    <cert.icon className='w-8 h-8' />
                  </div>
                  <p className='text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#006b3d] transition-colors'>
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic School Card */}
          <div className='lg:col-span-8 relative'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full h-full bg-gradient-to-br from-[#006b3d] to-[#004d2c] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between group min-h-[450px]'
            >
              {/* Background Decor */}
              <div className='absolute top-0 right-0 w-64 h-64 bg-[#FABA1E] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none' />
              <div className='absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-[80px] opacity-10 -ml-10 -mb-10 pointer-events-none' />

              <div className='relative z-10 grid md:grid-cols-2 gap-10 items-start'>
                {/* Info Text */}
                <div className='space-y-6'>
                  <div>
                    <div className='inline-block px-3 py-1 bg-[#FABA1E]/20 border border-[#FABA1E]/50 rounded-full text-[#FABA1E] text-xs font-bold uppercase tracking-widest mb-4'>
                      {schoolData[activeTab].grade}
                    </div>
                    <h3 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>{schoolData[activeTab].title}</h3>
                    <p className='text-white/80 text-lg leading-relaxed'>
                      {schoolData[activeTab].description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate(schoolData[activeTab].link)}
                    className='group/btn inline-flex items-center gap-3 px-8 py-3 bg-[#FABA1E] text-[#003820] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl'
                  >
                    Tìm hiểu thêm
                    <svg
                      className='w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </button>
                </div>

                {/* Competencies List - The "Detail" part */}
                <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10'>
                  <h4 className='text-[#FABA1E] font-bold uppercase tracking-wider mb-4 flex items-center gap-2'>
                    <Star className="w-4 h-4" /> Khung năng lực cốt lõi
                  </h4>
                  <ul className='space-y-3'>
                    {schoolData[activeTab].competencies.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='flex items-start gap-3'
                      >
                        <CheckCircle2 className='w-5 h-5 text-[#FABA1E] shrink-0 mt-0.5' />
                        <span className='text-white/90 text-sm md:text-base font-medium'>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Image Decoration (Subtle) */}
              <div className='absolute bottom-0 right-0 w-64 translate-y-12 translate-x-12 opacity-10 pointer-events-none'>
                <img src={cardlhbs} alt="" className="w-full h-auto" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
