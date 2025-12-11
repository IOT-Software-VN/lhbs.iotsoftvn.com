import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ImQuotesRight } from 'react-icons/im'
import bgAcademicBilingual from '@/images/home-page/section-03-bg.png'
import founderImage from '@/images/home-page/section-03.png'

// ==================== SECTION 2: Founding Message ====================
export default function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id='founding-message-section'
      ref={ref}
      className='w-full h-dvh bg-[#00602F] relative snap-start overflow-hidden flex flex-col'
    >
      {/* Background Pattern - Fully Visible */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${bgAcademicBilingual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className='w-full max-w-[1920px] mx-auto flex flex-col md:grid md:grid-cols-2 grow relative z-10 h-full max-h-dvh'>
        {/* Left: Founder Image */}
        <motion.div
          className='relative w-full order-2 md:order-1 shrink-0 md:shrink md:h-full overflow-hidden min-h-[30vh] md:min-h-0'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={founderImage}
            alt="The late People's Teacher, Dr. Do Huu Tai - Founder of LHBS"
            className='w-full h-full object-cover object-top'
            loading='lazy'
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className='relative w-full h-full flex flex-col order-1 md:order-2 bg-[#00602F]/95 md:bg-transparent overflow-hidden'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Scrollable Container for Text Content */}
          <div className='w-full h-full overflow-y-auto no-scrollbar p-6 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center'>
            <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
              {/* Header Group */}
              <div>
                <div className='bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
                <h3 className='text-sm md:text-xl font-bold text-[#FABA1E] uppercase tracking-[0.15em] mb-2'>
                  Founder's Message
                </h3>
                <h2 className='text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none drop-shadow-2xl'>
                  Educational <br /> Philosophy
                </h2>
              </div>

              {/* Quote Icon */}
              <div className='text-[#FABA1E] text-3xl md:text-5xl lg:text-6xl opacity-80'>
                <ImQuotesRight />
              </div>

              {/* Body Copy */}
              <p className='text-white/90 text-base md:text-lg lg:text-xl font-light leading-relaxed'>
                LHBS is committed to creating a humanistic learning environment that nurtures and educates young
                generations to appreciate Vietnamese heritage and identity while embracing global knowledge, skills, and
                citizenship—contributing positively to themselves, their communities, and society.
              </p>

              {/* Attribution */}
              <div className='border-l-4 border-[#FABA1E] pl-4 md:pl-6'>
                <p className='text-lg md:text-2xl text-white font-bold uppercase tracking-wide mb-1'>Dr. Do Huu Tai</p>
                <p className='text-xs md:text-base text-[#FABA1E] uppercase tracking-wider font-semibold'>
                  The late People's Teacher & Founder of LHBS
                </p>
              </div>

              {/* CTA Button */}
              <div className='pt-2'>
                <motion.button
                  onClick={() => onNavigate('/our-school/about-us')}
                  className='group relative px-8 py-3 md:px-10 md:py-4 bg-[#FABA1E] text-[#1E5338] font-bold text-xs md:text-base uppercase tracking-widest rounded-sm 
                           hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
                >
                  <span className='relative z-10'>Learn More</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
