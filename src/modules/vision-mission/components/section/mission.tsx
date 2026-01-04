'use client'

import { motion } from 'motion/react'

export function MissionSection() {
  return (
    <section className='relative w-full py-20 md:py-32 bg-white flex flex-col justify-center items-center'>
      {/* Background decoration - subtle pattern or very light color if needed */}
      <div className='absolute inset-0 bg-[#f8faf9] -z-10' />

      <div className='container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-5xl mx-auto text-center'
        >
          {/* Subtitle / Tagline */}
          <div className='flex flex-col items-center mb-6'>
            <div className='bg-brand-gold w-12 h-1 md:w-20 md:h-1.5 rounded-full' />
          </div>

          {/* Main Title 60px */}
          <h2 className='text-[32px] md:text-[48px] lg:text-[60px] font-black text-brand-green uppercase tracking-tight leading-tight md:leading-tight mb-8 md:mb-12 max-w-5xl mx-auto'>
            SỨ MỆNH
          </h2>

          {/* Detailed Description */}
          <div className='flex flex-col gap-4 text-base md:text-lg lg:text-xl text-[#333] font-light leading-relaxed md:leading-relaxed'>
            <p>
              Trường Song ngữ Lạc Hồng nuôi dưỡng{' '}
              <span className='font-bold text-brand-gold'>tinh thần học hỏi suốt đời</span>, bồi dưỡng nhân cách và hình
              thành bản lĩnh hội nhập thông qua{' '}
              <span className='font-bold text-brand-gold'>nền giáo dục song ngữ toàn diện</span>, kết hợp hài hòa giá
              trị văn hóa Việt Nam với tinh hoa giáo dục quốc tế.
            </p>
            <p>
              Nhà trường giúp học sinh phát triển{' '}
              <span className='font-bold text-brand-gold'>trí tuệ, cảm xúc và năng lực toàn cầu</span> để sống nhân ái,
              tự tin và đóng góp tích cực cho xã hội.
            </p>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='h-px w-32 md:w-64 bg-linear-to-r from-transparent via-brand-gold to-transparent mx-auto mt-12 md:mt-16 opacity-50'
          />
        </motion.div>
      </div>
    </section>
  )
}
