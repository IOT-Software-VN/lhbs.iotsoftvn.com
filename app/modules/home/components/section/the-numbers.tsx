import { motion, useInView, AnimatePresence } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import { TrendingUp, HeartHandshake, MonitorSmartphone, type LucideIcon } from 'lucide-react'

// Interface for modal props
interface CoreStrengthModalProps {
  title: string
  description: string
  fullDescription: string
  points: string[]
  image: string
  alt: string
  onClose: () => void
}

// Interface for card data
interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
  fullDescription: string
  image: string
  alt: string
  points: string[]
}

const whyChooseData: WhyChooseItem[] = [
  {
    icon: TrendingUp,
    title: 'Lộ trình học\u00A0tập cá\u00A0nhân\u00A0hóa',
    description: 'Mỗi học sinh được thiết kế chương trình học phù hợp với năng lực và mục tiêu phát triển riêng.',
    fullDescription:
      'LHBS cam kết mang đến cho mỗi học sinh một lộ trình học tập được thiết kế riêng, phù hợp với năng lực, sở thích và mục tiêu phát triển cá nhân. Chúng tôi tin rằng mỗi em đều có tiềm năng riêng biệt cần được phát huy.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    alt: 'Lộ trình học tập cá nhân hóa tại LHBS',
    points: [
      'Đánh giá năng lực và sở thích cá nhân',
      'Thiết kế chương trình học phù hợp',
      'Theo dõi tiến độ và điều chỉnh linh hoạt',
      'Hỗ trợ phát triển toàn diện'
    ]
  },
  {
    icon: HeartHandshake,
    title: 'Lấy\u00A0học\u00A0sinh\u00A0làm trung\u00A0tâm',
    description: 'Phương pháp giảng dạy chủ động, khuyến khích tư duy sáng tạo độc lập và phát triển kỹ năng.',
    fullDescription:
      'Triết lý giáo dục của LHBS đặt học sinh vào trung tâm của mọi hoạt động. Chúng tôi khuyến khích học sinh chủ động trong học tập, phát triển tư duy phản biện và kỹ năng giải quyết vấn đề thực tế.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
    alt: 'Lấy học sinh làm trung tâm tại LHBS',
    points: [
      'Phương pháp học tập tích cực',
      'Khuyến khích tư duy sáng tạo',
      'Phát triển kỹ năng mềm',
      'Học qua trải nghiệm thực tế'
    ]
  },
  {
    icon: MonitorSmartphone,
    title: 'Tiên phong ứng\u00A0dụng công\u00A0nghệ',
    description: 'Tích hợp công nghệ hiện đại vào mọi hoạt động giảng dạy, tạo môi trường học tập tương tác.',
    fullDescription:
      'LHBS là đơn vị tiên phong trong việc ứng dụng công nghệ giáo dục tiên tiến. Chúng tôi tích hợp các công cụ công nghệ hiện đại vào giảng dạy để tạo ra môi trường học tập tương tác, hấp dẫn và hiệu quả cao.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
    alt: 'Tiên phong ứng dụng công nghệ tại LHBS',
    points: [
      'Lớp học thông minh với công nghệ hiện đại',
      'Nền tảng học trực tuyến tương tác',
      'Ứng dụng AI hỗ trợ cá nhân hóa',
      'Thư viện số đa dạng và phong phú'
    ]
  }
]

// InfoCard Component with modern premium design and floating icons
function InfoCard({
  icon: Icon,
  title,
  description,
  index,
  onClick
}: {
  icon: LucideIcon
  title: string
  description: string
  index: number
  onClick: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
      className='group relative h-full cursor-pointer'
      onClick={onClick}
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
            <div className='absolute inset-0 rounded-full bg-linear-to-br from-brand-yellow/20 to-brand-yellow/5 blur-xl group-hover:from-brand-yellow/40 group-hover:to-brand-yellow/10 transition-all duration-500' />

            {/* Main Icon Circle */}
            <div className='relative w-full h-full rounded-full bg-linear-to-br from-brand-yellow to-[#f5a700] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500'>
              <Icon className='w-12 h-12 md:w-14 md:h-14 text-white stroke-[2.5]' />
            </div>

            {/* Decorative Ring */}
            <div className='absolute -inset-2 rounded-full border-2 border-brand-yellow/20 group-hover:border-brand-yellow/40 transition-colors duration-500' />
          </div>
        </motion.div>

        {/* Content Area - Center Aligned */}
        <div className='flex flex-col items-center text-center space-y-4 flex-1'>
          {/* Title */}
          <h3 className='text-lg md:text-xl lg:text-2xl font-black text-[#005C42] uppercase tracking-wide leading-tight transition-colors duration-300 group-hover:text-brand-yellow'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-sm md:text-base text-gray-600 leading-relaxed max-w-sm'>{description}</p>
        </div>

        {/* Subtle Bottom Accent */}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-linear-to-r from-transparent via-brand-yellow/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>
    </motion.div>
  )
}

export function TheNumbers() {
  const [selectedStrength, setSelectedStrength] = useState<WhyChooseItem | null>(null)

  return (
    <section className='relative w-full h-full bg-white overflow-hidden font-sans flex flex-col'>
      {/* White Section - Why Choose LHBS */}
      <div className='w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 py-8 md:py-16'>
        {/* Header - Left Aligned */}
        <div className='flex flex-col items-start mb-8 md:mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-brand-yellow w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#005C42] uppercase tracking-tight drop-shadow-2xl'
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
              onClick={() => setSelectedStrength(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStrength && (
          <CoreStrengthModal
            title={selectedStrength.title}
            description={selectedStrength.description}
            fullDescription={selectedStrength.fullDescription}
            points={selectedStrength.points}
            image={selectedStrength.image}
            alt={selectedStrength.alt}
            onClose={() => setSelectedStrength(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function CoreStrengthModal({ title, fullDescription, points, image, alt, onClose }: CoreStrengthModalProps) {
  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <motion.div
      className='fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 sm:p-6 md:p-8 lg:p-12'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className='relative w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-2xl'
        style={{ maxHeight: 'min(90vh, 900px)' }}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white'
          aria-label='Close modal'
        >
          <svg className='w-4 h-4 md:w-5 md:h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div className='overflow-y-auto overflow-x-hidden' style={{ maxHeight: 'min(90vh, 900px)' }}>
          {/* Image - Responsive Height */}
          <div className='relative w-full overflow-hidden' style={{ height: 'clamp(200px, 35vh, 400px)' }}>
            <img src={image} alt={alt} className='w-full h-full object-cover' />
            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
          </div>

          {/* Content - Responsive Padding */}
          <div className='p-6 sm:p-8 md:p-10 lg:p-12'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#005C42] mb-3 md:mb-4 uppercase tracking-wide'>
              {title}
            </h2>

            <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 md:mb-6'>
              {fullDescription}
            </p>

            <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-[#005C42] mb-3 md:mb-4 uppercase'>
              Điểm nổi bật:
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4'>
              {points.map((point, index) => (
                <div key={index} className='flex items-start gap-2 md:gap-3'>
                  <span className='text-brand-yellow text-lg md:text-xl font-bold shrink-0'>✓</span>
                  <span className='text-gray-700 text-sm md:text-base leading-relaxed'>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
