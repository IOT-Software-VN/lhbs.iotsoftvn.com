'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function VisionSection() {
  return (
    <section className='relative w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 md:px-8 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left: Text Content - ORDER 2 on mobile to be below image, ORDER 1 on Desktop */}
          <motion.div
            className='order-2 lg:order-1 flex flex-col items-start'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-20 md:h-1.5 mb-6 rounded-full' />

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-brand-green uppercase tracking-tight mb-6 md:mb-8 leading-tight'>
              Tầm nhìn
            </h2>

            <div className='flex flex-col gap-4 text-base md:text-lg lg:text-xl text-[#333] font-light leading-relaxed text-justify'>
              <p>
                Trường Song ngữ Lạc Hồng là{' '}
                <span className='font-bold text-brand-gold'>trường song ngữ hàng đầu tại Đồng Nai</span>, nơi mỗi học
                sinh được nuôi dưỡng để phát triển toàn diện về trí tuệ, nhân cách và năng lực hội nhập toàn cầu trong
                thời đại số.
              </p>
              <p>
                Nhà trường gìn giữ và lan tỏa{' '}
                <span className='font-bold text-brand-gold'>giá trị văn hóa Việt Nam</span>, đồng thời khơi dậy tư duy
                sáng tạo, tinh thần học tập suốt đời và ý thức trách nhiệm với cộng đồng, giúp học sinh trở thành những{' '}
                <span className='font-bold text-brand-gold'>công dân nhân ái, tự tin, sáng tạo</span> và thích ứng trong
                thế giới không ngừng đổi thay.
              </p>
            </div>
          </motion.div>

          {/* Right: Image with Stepped Block Effect - ORDER 1 on mobile */}
          <motion.div
            className='order-1 lg:order-2 relative'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative Stepped Block (background) */}
            <div className='absolute top-8 left-8 w-full h-full bg-brand-gold/20 rounded-3xl -z-10' />
            <div className='absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-brand-green/10 rounded-3xl -z-20' />

            {/* Main Image Container */}
            <div className='relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3'>
              <Image
                src='https://lhbs.edu.vn/wp-content/uploads/2025/02/333A1050.jpg'
                alt='Vision - Tầm nhìn LHBS'
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
