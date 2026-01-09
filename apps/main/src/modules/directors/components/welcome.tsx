'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export function DirectorsWelcomeSection() {
  return (
    <section className='relative w-full py-16 md:py-24 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 md:px-8 lg:px-12'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-center'>
          {/* Left Column: Content */}
          <motion.div
            className='flex-1 flex flex-col items-start order-2 lg:order-1'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decoration */}
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />

            {/* Title (Optional, based on context) */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-brand-green uppercase tracking-tight mb-6 md:mb-8 leading-tight'>
              Lời ngỏ
            </h2>

            {/* Text Content */}
            <p className='text-base md:text-lg lg:text-xl text-[#333] font-light leading-relaxed text-justify'>
              Trường Song Ngữ Lạc Hồng theo đuổi mục tiêu trở thành một môi trường học tập thế kỷ 21 về mọi mặt, là nơi
              cung cấp cho học sinh nền tảng học vấn và những kĩ năng vững chắc, giúp các em sẵn sàng đương đầu với thử
              thách của cuộc sống cũng như thành công ở những bậc học cao hơn, đồng thời vẫn gìn giữ những giá trị văn
              hóa, truyền thống của dân tộc.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className='flex-1 w-full order-1 lg:order-2'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3'>
              <Image
                src='https://lhbs.edu.vn/wp-content/uploads/2021/04/MG_5271_Recovered.jpg'
                alt='Ban Giám Hiệu LHBS'
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
              {/* Overlay or decoration if needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
