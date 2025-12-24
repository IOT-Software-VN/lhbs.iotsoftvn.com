import { motion, useInView, animate } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { TrendingUp, HeartHandshake, MonitorSmartphone, type LucideIcon } from 'lucide-react'
const whyChooseData = [
  {
    icon: TrendingUp,
    title: 'Lộ trình học tập cá nhân hóa',
    description:
      'Mỗi học sinh được thiết kế chương trình học phù hợp với năng lực và mục tiêu phát triển riêng.'
  },
  {
    icon: HeartHandshake,
    title: 'Lấy học sinh làm trung tâm',
    description:
      'Phương pháp giảng dạy chủ động, khuyến khích tư duy sáng tạo độc lập và phát triển kỹ năng.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Tiên phong ứng dụng công nghệ',
    description:
      'Tích hợp công nghệ hiện đại vào mọi hoạt động giảng dạy, tạo môi trường học tập tương tác.'
  }
]

// University/College logos for the carousel
const universityLogos = [
  {
    id: 1,
    name: 'English Central',
    image: 'https://www.englishcentral.com/dist/all/20251203121549/assets/ec-logo.53e56416598b3d50cbe5.png'
  },
  {
    id: 2,
    name: 'STEM',
    image:
      'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
  },
  {
    id: 3,
    name: 'ASI',
    image: 'https://advantagesschool.com/wp-content/uploads/2022/10/asi-logo.png'
  },
  {
    id: 4,
    name: 'Cambridge',
    image: 'https://www.cambridgeassessment.org.uk/Images/Simon-brand-blog-newest-logo.png'
  }
]

// InfoCard Component with modern premium design and floating icons
function InfoCard({
  icon: Icon,
  title,
  description,
  index
}: {
  icon: LucideIcon
  title: string
  description: string
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
      className='group relative h-full'
    >
      {/* Main Card Container */}
      <div className='relative h-full flex flex-col items-center bg-white rounded-2xl p-8 md:p-10 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'>
        {/* Floating Icon Container */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.15, type: 'spring', stiffness: 200 }}
          className='relative -mt-16 mb-6'
        >
          {/* Icon Circle with Glow Effect */}
          <div className='relative w-24 h-24 md:w-28 md:h-28'>
            {/* Outer Glow Ring */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-[#FDB913]/20 to-[#FDB913]/5 blur-xl group-hover:from-[#FDB913]/40 group-hover:to-[#FDB913]/10 transition-all duration-500' />
            
            {/* Main Icon Circle */}
            <div className='relative w-full h-full rounded-full bg-gradient-to-br from-[#FDB913] to-[#f5a700] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500'>
              <Icon className='w-12 h-12 md:w-14 md:h-14 text-white stroke-[2.5]' />
            </div>
            
            {/* Decorative Ring */}
            <div className='absolute -inset-2 rounded-full border-2 border-[#FDB913]/20 group-hover:border-[#FDB913]/40 transition-colors duration-500' />
          </div>
        </motion.div>

        {/* Content Area - Center Aligned */}
        <div className='flex flex-col items-center text-center space-y-4 flex-1'>
          {/* Title */}
          <h3 className='text-lg md:text-xl lg:text-2xl font-black text-[#005C42] uppercase tracking-wide leading-tight transition-colors duration-300 group-hover:text-[#FDB913]'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-sm md:text-base text-gray-600 leading-relaxed max-w-sm'>
            {description}
          </p>
        </div>

        {/* Subtle Bottom Accent */}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#FDB913]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>
    </motion.div>
  )
}

export default function TheNumbers() {
  const [api, setApi] = useState<CarouselApi>()

  // Infinite Autoplay effect
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      // Check if we can scroll next to avoid errors/jumps if content fits perfectly
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollNext()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className='relative w-full h-full bg-white overflow-hidden font-sans flex flex-col'>
      {/* Scrollable Container */}
      <div className='grow w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 overflow-y-auto no-scrollbar py-8 md:py-16 flex flex-col justify-center'>
        {/* Header - Left Aligned */}
        <div className='flex flex-col items-start mb-8 md:mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-[#FDB913] w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />
            <h2 className='text-xs md:text-sm lg:text-base font-bold text-[#FDB913] uppercase tracking-[0.2em] leading-none drop-shadow-md mb-2'>
              Giá trị cốt lõi
            </h2>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#005C42] uppercase tracking-tight drop-shadow-2xl'
          >
            Tại sao chọn LHBS
          </motion.h2>
        </div>

        {/* Info Cards Grid - Extra top padding for floating icons */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 pt-16'>
          {whyChooseData.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        {/* University Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='relative w-full'
        >
          {/* Section Header */}
          <div className='flex flex-col items-center mb-6 md:mb-10'>
            <div className='bg-[#FDB913] w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />
            <h3 className='text-xl md:text-2xl lg:text-3xl font-black text-[#005C42] uppercase tracking-wide drop-shadow-sm text-center'>
              Chương trình hợp tác
            </h3>
          </div>

          <Carousel
            setApi={setApi}
            className='w-full px-2 md:px-10'
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: false,
              dragFree: true
            }}
          >
            <CarouselContent className='-ml-4'>
              {[...universityLogos, ...universityLogos, ...universityLogos].map((logo, index) => (
                <CarouselItem key={`${logo.id}-${index}`} className='pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4'>
                  <div className='h-full p-2'>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className='flex items-center justify-center h-24 md:h-28 bg-gray-50/30 border border-gray-200 rounded-sm p-4 transition-all duration-300 cursor-pointer group hover:border-[#FDB913] hover:bg-white hover:shadow-lg'
                    >
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className='max-h-full max-w-full object-contain transition-all duration-500'
                        loading='lazy'
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation - Minimal Arrows */}
            <div className='hidden md:block'>
              <CarouselPrevious className='h-auto w-auto border-none bg-transparent text-[#FDB913] hover:bg-transparent hover:text-[#d49e19] -left-8 [&_svg]:size-12 md:[&_svg]:size-16 transition-transform hover:scale-110' />
              <CarouselNext className='h-auto w-auto border-none bg-transparent text-[#FDB913] hover:bg-transparent hover:text-[#d49e19] -right-8 [&_svg]:size-12 md:[&_svg]:size-16 transition-transform hover:scale-110' />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
