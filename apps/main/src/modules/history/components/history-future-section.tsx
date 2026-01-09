'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight, Rocket, Heart, Globe } from 'lucide-react'
import Link from 'next/link'

export function HistoryFutureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const futureGoals = [
    {
      icon: Rocket,
      title: 'Đổi mới sáng tạo',
      description: 'Tiên phong áp dụng công nghệ giáo dục 4.0 và phương pháp giảng dạy hiện đại.'
    },
    {
      icon: Globe,
      title: 'Mở rộng quốc tế',
      description: 'Kiến tạo mạng lưới đối tác giáo dục toàn cầu, mang đến cơ hội du học tại chỗ.'
    },
    {
      icon: Heart,
      title: 'Phát triển bền vững',
      description: 'Nuôi dưỡng thế hệ công dân toàn cầu có trách nhiệm, đạo đức và trí tuệ.'
    }
  ]

  return (
    <section ref={ref} className='relative w-full py-24 md:py-32 bg-gray-50/50 overflow-hidden'>
      {/* Subtle Background - Giống HistoryMilestonesGrid */}
      <div className='absolute inset-0 bg-[radial-gradient(#1e5338_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-[0.03]' />

      <div className='relative z-10 container mx-auto px-4 md:px-8'>
        {/* Header - Đồng bộ với HistoryMilestonesGrid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center max-w-3xl mx-auto mb-16 md:mb-24'
        >
          <div className='bg-brand-gold w-20 h-2 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-green uppercase tracking-tight mb-4'>
            Hướng về <span className='text-brand-gold'>tương lai</span>
          </h2>
          <p className='text-lg md:text-xl text-brand-green/70 font-light'>
            Tiếp nối hành trình kiến tạo tri thức, LHBS cam kết vững bước trên con đường đổi mới và hội nhập.
          </p>
        </motion.div>

        {/* Cards Grid - Đồng bộ với HistoryMilestonesGrid card style */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16'>
          {futureGoals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className='group relative bg-white rounded-2xl p-6 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(30,83,56,0.1)] transition-all duration-300 border border-transparent hover:border-brand-green/20'
              >
                {/* Icon - Đồng bộ với HistoryMilestonesGrid */}
                <div className='flex flex-col h-full justify-between gap-4'>
                  <div className='w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand-green/5 flex items-center justify-center group-hover:bg-brand-green group-hover:rotate-3 transition-all duration-300'>
                    <Icon className='w-6 h-6 md:w-7 md:h-7 text-brand-green/70 group-hover:text-white transition-colors duration-300' />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <h3 className='text-base md:text-lg font-bold text-brand-green uppercase tracking-wide'>
                      {goal.title}
                    </h3>
                    {goal.description && (
                      <p className='text-sm text-brand-green/50 font-medium leading-tight'>{goal.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button - Đồng bộ với branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='flex justify-center'
        >
          <Link
            href='/gioi-thieu/tam-nhin-su-menh'
            className='group inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-bold rounded-full uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-xl shadow-brand-gold/30 hover:-translate-y-1 hover:shadow-2xl'
          >
            <span>Tầm nhìn & Sứ mệnh</span>
            <ArrowRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
