'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight, Rocket, Heart, Globe } from 'lucide-react'
import Link from 'next/link'

export function HistoryFutureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section ref={ref} className='relative w-full py-20 md:py-32 bg-white overflow-hidden'>
      {/* Abstract Background */}
      <div className='absolute inset-0 bg-linear-to-b from-transparent via-brand-green/5 to-transparent' />
      <div className='absolute -left-20 top-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl' />
      <div className='absolute -right-20 bottom-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl' />

      <div className='relative z-10 container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center max-w-4xl mx-auto mb-16'
        >
          <div className='bg-brand-gold w-20 h-2 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-green uppercase tracking-tight mb-6 drop-shadow-sm'>
            Hướng về <span className='text-brand-gold'>tương lai</span>
          </h2>
          <p className='text-brand-green/70 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto'>
            Tiếp nối hành trình kiến tạo tri thức, LHBS cam kết vững bước trên con đường đổi mới và hội nhập.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {futureGoals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className='group relative bg-white rounded-2xl p-8 border border-brand-green/10 hover:border-brand-green/30 shadow-lg hover:shadow-2xl transition-all duration-300'
              >
                <div className='w-16 h-16 rounded-2xl bg-brand-green/5 flex items-center justify-center mb-6 group-hover:bg-brand-green transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3'>
                  <Icon
                    className='w-8 h-8 text-brand-green group-hover:text-brand-gold transition-colors duration-300'
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className='text-xl font-bold text-brand-green mb-3'>{goal.title}</h3>
                <p className='text-brand-green/60 font-medium leading-relaxed'>{goal.description}</p>

                <div className='absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <ArrowRight className='w-5 h-5 text-brand-gold -rotate-45 group-hover:rotate-0 transition-transform duration-300' />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex justify-center gap-6'
        >
          <Link
            href='/gioi-thieu/tam-nhin-su-menh'
            className='inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-green font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
          >
            Tầm nhìn & Sứ mệnh
            <ArrowRight className='w-4 h-4' />
          </Link>
        </motion.div>

        <div className='mt-24 text-center opacity-10 select-none pointer-events-none'>
          <span className='text-[12vw] font-black text-brand-green tracking-tighter'>2030</span>
        </div>
      </div>
    </section>
  )
}
