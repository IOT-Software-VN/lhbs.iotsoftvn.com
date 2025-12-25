import { motion } from 'motion/react'
import { useState } from 'react'
import { BookOpen, Shield, Lightbulb, Heart, Globe } from 'lucide-react'

const coreValues = [
  {
    icon: BookOpen,
    title: 'Học tập suốt đời',
    titleEn: 'LIFELONG LEARNING',
    description: 'Nuôi dưỡng sự tò mò và niềm đam mê học hỏi suốt đời, phát triển bản thân không ngừng.',
    points: [
      'Học tập dựa trên nghiên cứu và khám phá',
      'Phát triển tư duy phản biện',
      'Kỹ năng tự học và tự định hướng',
      'Nuôi dưỡng tư duy phát triển'
    ],
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/1-1.jpg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Chính trực',
    titleEn: 'INTEGRITY',
    description: 'Hành động với sự trung thực, đạo đức và nhất quán trong suy nghĩ, lời nói và hành động.',
    points: [
      'Chương trình giáo dục nhân cách',
      'Kỹ năng ra quyết định có đạo đức',
      'Trách nhiệm cá nhân',
      'Nguyên tắc tôn trọng và trung thực'
    ],
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/2.jpg',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Sáng tạo',
    titleEn: 'CREATIVITY',
    description: 'Tư duy độc lập và linh hoạt, dám đổi mới và tạo ra thay đổi tích cực.',
    points: [
      'Nghệ thuật và biểu đạt sáng tạo',
      'Đổi mới và tư duy thiết kế',
      'Sáng tạo trong giải quyết vấn đề',
      'Phát triển kỹ năng nghệ thuật'
    ],
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Lòng nhân ái',
    titleEn: 'COMPASSION',
    description: 'Sống với sự đồng cảm, tử tế và tôn trọng sự đa dạng, quan tâm đến người khác và cộng đồng.',
    points: [
      'Đồng cảm và trí tuệ cảm xúc',
      'Chương trình phục vụ cộng đồng',
      'Hệ thống hỗ trợ đồng nghiệp',
      'Phát triển nhận thức xã hội'
    ],
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg',
    color: 'from-red-500 to-pink-600'
  },
  {
    icon: Globe,
    title: 'Năng lực toàn cầu',
    titleEn: 'GLOBAL COMPETENCE',
    description: 'Hiểu biết về thế giới đa văn hóa, tư duy toàn cầu và hành động có trách nhiệm.',
    points: [
      'Hiểu biết đa văn hóa',
      'Kỹ năng ngôn ngữ quốc tế',
      'Nhận thức toàn cầu',
      'Trách nhiệm công dân toàn cầu'
    ],
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/573186746_804888342173308_4889398892092085854_n.jpg',
    color: 'from-teal-500 to-cyan-600'
  }
]

interface CoreStrengthModalProps {
  value: typeof coreValues[0]
  onClose: () => void
}

function CoreStrengthModal({ value, onClose }: CoreStrengthModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
        style={{ maxHeight: 'min(85vh, 800px)' }}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'min(85vh, 800px)' }}>
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                <value.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{value.titleEn}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#005C42] uppercase tracking-wide">{value.title}</h2>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              {value.description}
            </p>

            <h3 className="text-lg md:text-xl font-bold text-[#005C42] mb-4 uppercase">Điểm nổi bật:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {value.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#FDB913] text-lg font-bold flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CoreStrengthsSection() {
  const [selectedValue, setSelectedValue] = useState<typeof coreValues[0] | null>(null)

  return (
    <section className='relative w-full bg-white overflow-hidden font-sans py-12 md:py-24'>
      <div className='w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-12 md:mb-16'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-[#FDB913] w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)] mx-auto' />
            <p className='text-[#FDB913] text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.2em] mb-2'>
              Giá trị cốt lõi
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black text-[#005C42] uppercase tracking-tight drop-shadow-2xl leading-tight'
          >
            Nền tảng LHBS
          </motion.h2>
        </div>

        {/* Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedValue(value)}
              className='group cursor-pointer'
            >
              <div className='bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#FDB913] hover:shadow-2xl transition-all duration-300 h-full flex flex-col'>
                {/* Image */}
                <div className='relative h-48 overflow-hidden'>
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <value.icon className='w-6 h-6 text-white' strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className='p-6 flex-1 flex flex-col'>
                  <p className='text-xs text-gray-500 uppercase tracking-wider mb-1'>{value.titleEn}</p>
                  <h3 className='text-lg md:text-xl font-bold text-[#005C42] mb-3 uppercase tracking-wide group-hover:text-[#FDB913] transition-colors'>
                    {value.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed line-clamp-3'>
                    {value.description}
                  </p>
                  <div className='mt-4 text-sm text-[#005C42] font-semibold group-hover:text-[#FDB913] transition-colors'>
                    Tìm hiểu thêm →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedValue && (
        <CoreStrengthModal value={selectedValue} onClose={() => setSelectedValue(null)} />
      )}
    </section>
  )
}