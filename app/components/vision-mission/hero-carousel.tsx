import { motion } from 'motion/react'
import { Breadcrumb, type BreadcrumbItem } from '~/Breadcrumb'

interface HeroProps {
  onNavigate: (path: string) => void
}

export default function VisionMissionHero({ onNavigate }: HeroProps) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Tầm nhìn & Sứ mệnh' }
  ]

  return (
    <section className='relative w-full h-[80vh] min-h-[400px] flex flex-col justify-end overflow-hidden font-sans'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src="https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg"
          alt='Vision Mission Banner'
          className='w-full h-full object-cover object-center'
        />
        {/* Dark Overlay for Text Contrast - Gradient to clear top but dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pb-12 md:pb-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-start'
        >
          {/* Breadcrumbs */}
          {/* <div className='mb-6 opacity-90 hover:opacity-100 transition-opacity'>
            <Breadcrumb
              items={breadcrumbItems}
              textClassName="text-white/70 hover:text-white"
              activeTextClassName="text-white font-medium"
              separatorClassName="text-white/50"
            />
          </div> */}

          {/* Decorative Line */}
          <div className='bg-[#FDB913] w-12 h-1 md:w-20 md:h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />

          {/* Title */}
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight drop-shadow-2xl mb-4 leading-tight'>
            Tầm nhìn & Sứ mệnh
          </h1>

          {/* Subtitle */}
          <p className='text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed'>
            Kiến tạo tương lai - Vươn tầm quốc tế
          </p>
        </motion.div>
      </div>
    </section>
  )
}
