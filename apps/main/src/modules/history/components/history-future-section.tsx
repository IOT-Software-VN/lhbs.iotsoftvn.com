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
      description: 'Áp dụng công nghệ giáo dục tiên tiến trong giảng dạy'
    },
    {
      icon: Globe,
      title: 'Mở rộng quốc tế',
      description: 'Tăng cường hợp tác với các đối tác giáo dục toàn cầu'
    },
    {
      icon: Heart,
      title: 'Phát triển bền vững',
      description: 'Nuôi dưỡng thế hệ công dân có trách nhiệm với cộng đồng'
    }
  ]

  return (
    <section ref={ref} className='relative w-full py-20 md:py-32 bg-white overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(#1e5338_1px,transparent_1px)] [background-size:24px_24px] opacity-5' />
      <div className='absolute inset-0 bg-linear-to-b from-brand-green/5 via-transparent to-brand-green/10' />

      <div className='absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-green/20 to-transparent' />
      <div className='absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-green/20 to-transparent' />

      <div className='relative z-10 container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center max-w-4xl mx-auto mb-12 md:mb-16'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mx-auto mb-6 rounded-full shadow-[0_2px_10px_rgba(250,186,30,0.3)]' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-green uppercase tracking-tight mb-4 md:mb-6'>
            Hướng về <span className='text-brand-gold drop-shadow-sm'>tương lai</span>
          </h2>
          <p className='text-base md:text-lg lg:text-xl text-brand-green/60 font-light max-w-2xl mx-auto leading-relaxed'>
            LHBS tiếp tục hành trình kiến tạo thế hệ công dân toàn cầu với tầm nhìn và sứ mệnh rõ ràng cho 10 năm tới
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16'>
          {futureGoals.map((goal, index) => {
            const Icon = goal.icon
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group relative bg-white rounded-xl p-6 md:p-8 border-2 border-brand-green/10 hover:border-brand-green transition-all duration-300 shadow-md hover:shadow-xl'
              >
                <div className='w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300'>
                  <Icon
                    className='w-7 h-7 md:w-8 md:h-8 text-brand-green group-hover:text-brand-gold transition-colors duration-300'
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className='text-lg md:text-xl font-bold text-brand-green mb-2 transition-colors'>{goal.title}</h3>
                <p className='text-sm md:text-base text-brand-green/60 font-light leading-relaxed transition-colors group-hover:text-brand-green/80'>
                  {goal.description}
                </p>

                <div className='absolute bottom-0 left-0 w-full h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl' />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          <Link
            href='/tam-nhin-su-menh'
            className='group inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-sm md:text-base uppercase tracking-wider rounded-full hover:bg-brand-gold hover:text-brand-green transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'
          >
            Tầm nhìn & Sứ mệnh
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
          </Link>

          <Link
            href='/cot-moc-dang-nho'
            className='group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-brand-green font-bold text-sm md:text-base uppercase tracking-wider rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300'
          >
            Cột mốc đáng nhớ
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className='mt-16 md:mt-24 text-center'
        >
          <span className='text-6xl md:text-8xl lg:text-9xl font-black text-brand-green/5 uppercase tracking-tight select-none'>
            2026+
          </span>
        </motion.div>
      </div>
    </section>
  )
}
