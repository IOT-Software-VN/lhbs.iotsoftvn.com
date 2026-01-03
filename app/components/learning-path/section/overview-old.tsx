import { useState } from 'react'
import { motion } from 'motion/react'
import cardlhbs from '@/images/base/card-lhbs.png'
import lhbs from '@/images/base/lhbs.png'

interface OverviewSectionProps {
  onNavigate: (path: string) => void
}

const schoolData = {
  primary: {
    title: 'Primary School',
    grade: '(Grade 1 - 5)',
    description:
      'Building strong foundations in a nurturing environment where young learners develop essential skills, creativity, and a love for learning.',
    link: '/primary-school'
  },
  secondary: {
    title: 'Secondary School',
    grade: '(Grade 6 - 9)',
    description:
      'Developing critical thinking and academic excellence through comprehensive bilingual education that prepares students for advanced studies.',
    link: '/secondary-school'
  },
  high: {
    title: 'High School',
    grade: '(Grade 10 - 12)',
    description:
      'Empowering students to achieve their highest potential through rigorous academic programs, university preparation, and leadership development.',
    link: '/high-school'
  }
}

export default function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'high'>('secondary')

  return (
    <section id='overview' className='py-20 md:py-32 bg-white overflow-hidden relative'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#FABA1E]/5 to-transparent rounded-bl-full -z-10' />

      <div className='max-w-screen-2xl mx-auto px-6 md:px-12'>
        {/* Title Section - Synchronized Style */}
        <div className='flex flex-col items-center mb-20 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h2 className='text-sm md:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-3'>
              Learning Pathway
            </h2>
            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight 
            bg-gradient-to-r from-[#006b3d] to-[#004d2c] 
            bg-clip-text text-transparent 
            inline-block uppercase 
            drop-shadow-sm'
            >
              Curriculum Overview
            </h1>
            <p className='mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed'>
              Our curriculum fosters holistic development by balancing academics, creative exploration, and
              social-emotional growth. We blend evidence-based methods with hands-on experiences.
            </p>
          </motion.div>
        </div>

        {/* Timeline Navigation */}
        <div className='mb-20'>
          <div className='grid grid-cols-3 mb-12 text-center relative z-10'>
            {(['primary', 'secondary', 'high'] as const).map((level) => (
              <div
                key={level}
                className={`cursor-pointer transition-all duration-300 ${activeTab === level ? 'scale-110' : 'opacity-50 hover:opacity-80'}`}
                onClick={() => setActiveTab(level)}
              >
                <h3
                  className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${activeTab === level ? 'text-[#006b3d]' : 'text-gray-400'}`}
                >
                  {level === 'primary' ? 'Primary' : level === 'secondary' ? 'Secondary' : 'High School'}
                </h3>
                <p
                  className={`text-sm md:text-base font-medium ${activeTab === level ? 'text-[#FABA1E]' : 'text-gray-400'}`}
                >
                  {schoolData[level].grade}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Bar */}
          <div className='max-w-4xl mx-auto px-10 md:px-20 relative h-12 flex items-center justify-center'>
            {/* Background Line */}
            <div className='absolute inset-x-0 h-[2px] bg-gray-200 rounded-full' />

            {/* Active Progress Line */}
            <div
              className='absolute h-[3px] bg-gradient-to-r from-[#006b3d] to-[#FABA1E] rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(250,186,30,0.3)]'
              style={{
                left: '0%',
                width: activeTab === 'primary' ? '15%' : activeTab === 'secondary' ? '50%' : '100%'
              }}
            />

            {/* Dots */}
            <div
              className={`absolute left-0 w-4 h-4 rounded-full border-4 border-white shadow-md cursor-pointer transition-all duration-300
                    ${activeTab === 'primary' ? 'bg-[#FABA1E] scale-125' : 'bg-[#006b3d]'}`}
              onClick={() => setActiveTab('primary')}
            />

            {/* Center Image Group */}
            <div
              className='absolute left-1/2 -translate-x-1/2 cursor-pointer group'
              onClick={() => setActiveTab('secondary')}
            >
              <div
                className={`relative w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-4 transition-all duration-300 ${activeTab === 'secondary' ? 'border-[#FABA1E] scale-110' : 'border-gray-100'}`}
              >
                <img src={lhbs} alt='LHBS' className='w-10 h-10 object-contain' />
              </div>
            </div>

            <div
              className={`absolute right-0 w-4 h-4 rounded-full border-4 border-white shadow-md cursor-pointer transition-all duration-300
                    ${activeTab === 'high' ? 'bg-[#FABA1E] scale-125' : 'bg-[#006b3d]'}`}
              onClick={() => setActiveTab('high')}
            />
          </div>
        </div>

        {/* Content Section: Certificates + Active Info Card */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch'>
          {/* Left Column - Certificates (Fixed Title Style) */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-1 h-8 bg-[#FABA1E] rounded-full' />
              <h3 className='text-2xl md:text-3xl font-bold text-[#006b3d] uppercase tracking-wide'>Certifications</h3>
            </div>

            <div className='grid grid-cols-2 gap-6 grow'>
              {/* Certificate Items - Cleaner White Cards with Hover Lift */}
              {[
                {
                  name: 'STEAM',
                  img: 'https://img.freepik.com/free-vector/stem-education-logo-banner-with-learning-elements_1308-60691.jpg'
                },
                { name: 'Advantages', img: 'https://vi.englishcentral.com/images/og-image.png' },
                {
                  name: 'English Central',
                  img: 'https://advantagesschool.com/wp-content/uploads/2024/10/advantages-school-international-logo.jpg'
                },
                {
                  name: 'Cambridge',
                  img: 'https://download.logo.wine/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.png'
                }
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className='group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FABA1E]/30 transition-all duration-300 flex flex-col items-center justify-center text-center'
                >
                  <div className='h-20 w-full flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-500'>
                    <img src={cert.img} alt={cert.name} className='max-h-full max-w-full object-contain' />
                  </div>
                  <p className='text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-[#006b3d] transition-colors'>
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic School Card */}
          <div className='relative flex flex-col items-center justify-center'>
            {/* Vertical Divider for Large Screens */}
            <div className='hidden lg:block absolute left-[-2.5rem] top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent' />

            {/* Dynamic Card */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full h-full bg-gradient-to-br from-[#006b3d] to-[#004d2c] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between group'
            >
              {/* Background Decor */}
              <div className='absolute top-0 right-0 w-64 h-64 bg-[#FABA1E] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none' />
              <div className='absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-[80px] opacity-10 -ml-10 -mb-10 pointer-events-none' />

              <div className='relative z-10'>
                <div className='inline-block px-3 py-1 bg-[#FABA1E]/20 border border-[#FABA1E]/50 rounded-full text-[#FABA1E] text-xs font-bold uppercase tracking-widest mb-6'>
                  {schoolData[activeTab].grade}
                </div>
                <h3 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>{schoolData[activeTab].title}</h3>
                <p className='text-white/80 text-lg leading-relaxed mb-8 max-w-md'>
                  {schoolData[activeTab].description}
                </p>

                <button
                  onClick={() => onNavigate(schoolData[activeTab].link)}
                  className='group/btn inline-flex items-center gap-3 px-8 py-4 bg-[#FABA1E] text-[#003820] font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Learn More
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

              {/* Card Image Decoration */}
              <div className='absolute bottom-0 right-0 w-2/3 md:w-1/2 translate-y-10 group-hover:translate-y-6 transition-transform duration-500'>
                <img
                  src={cardlhbs}
                  alt='LHBS Decoration'
                  className='w-full h-auto object-contain drop-shadow-2xl opacity-90'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
