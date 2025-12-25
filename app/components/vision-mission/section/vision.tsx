import { motion } from 'motion/react'
import { Target, Globe, Users, Lightbulb } from 'lucide-react'

const visionHighlights = [
  {
    icon: Target,
    title: 'Trường hàng đầu',
    description: 'Trường song ngữ hàng đầu tại Đồng Nai'
  },
  {
    icon: Globe,
    title: 'Hội nhập toàn cầu',
    description: 'Phát triển năng lực hội nhập trong thời đại số'
  },
  {
    icon: Users,
    title: 'Gìn giữ văn hóa',
    description: 'Lan tỏa giá trị văn hóa Việt Nam'
  },
  {
    icon: Lightbulb,
    title: 'Tư duy sáng tạo',
    description: 'Khơi dậy tinh thần học tập suốt đời'
  }
]

export default function VisionSection() {
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
              Tầm nhìn
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black text-[#005C42] uppercase tracking-tight drop-shadow-2xl leading-tight'
          >
            Định hướng tương lai
          </motion.h2>
        </div>

        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='max-w-4xl mx-auto mb-16'
        >
          <div className='bg-gradient-to-br from-[#005C42]/5 to-[#FDB913]/5 rounded-2xl p-8 md:p-12 border border-[#005C42]/10'>
            <p className='text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6'>
              Trường Song ngữ Lạc Hồng là <span className='font-bold text-[#005C42]'>trường song ngữ hàng đầu tại Đồng Nai</span>, nơi mỗi học sinh được nuôi dưỡng để phát triển toàn diện về trí tuệ, nhân cách và năng lực hội nhập toàn cầu trong thời đại số.
            </p>
            <p className='text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed'>
              Nhà trường gìn giữ và lan tỏa giá trị văn hóa Việt Nam, đồng thời khơi dậy tư duy sáng tạo, tinh thần học tập suốt đời và ý thức trách nhiệm với cộng đồng, giúp học sinh trở thành những <span className='font-bold text-[#005C42]'>công dân nhân ái, tự tin, sáng tạo và thích ứng</span> trong thế giới không ngừng đổi thay.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
