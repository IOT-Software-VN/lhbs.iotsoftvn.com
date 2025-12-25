import { motion } from 'motion/react'
import { GraduationCap, Heart, Sparkles, Users2 } from 'lucide-react'

const missionPillars = [
  {
    icon: GraduationCap,
    title: 'Học tập suốt đời',
    description: 'Nuôi dưỡng tinh thần học hỏi và khám phá tri thức không ngừng nghỉ',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Heart,
    title: 'Bồi dưỡng nhân cách',
    description: 'Hình thành nhân cách toàn diện, sống nhân ái và có trách nhiệm',
    color: 'from-red-500 to-pink-600'
  },
  {
    icon: Sparkles,
    title: 'Bản lĩnh hội nhập',
    description: 'Phát triển năng lực toàn cầu để tự tin và thích ứng',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users2,
    title: 'Đóng góp xã hội',
    description: 'Trở thành công dân tích cực, đóng góp cho cộng đồng',
    color: 'from-green-500 to-green-600'
  }
]

export default function MissionSection() {
  return (
    <section className='w-full min-h-dvh bg-[#00602F] relative snap-start flex flex-col font-sans'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className='relative w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 flex flex-col justify-center h-full py-8 md:py-12'>
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
              Sứ mệnh
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black text-white uppercase tracking-tight drop-shadow-2xl leading-tight'
          >
            Nhiệm vụ của chúng tôi
          </motion.h2>
        </div>

        {/* Main Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='max-w-4xl mx-auto mb-16'
        >
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20'>
            <p className='text-base md:text-lg lg:text-xl text-white/95 leading-relaxed mb-6'>
              Trường Song ngữ Lạc Hồng <span className='font-bold text-[#FDB913]'>nuôi dưỡng tinh thần học hỏi suốt đời</span>, bồi dưỡng nhân cách và hình thành bản lĩnh hội nhập thông qua nền giáo dục song ngữ toàn diện, kết hợp hài hòa giá trị văn hóa Việt Nam với tinh hoa giáo dục quốc tế.
            </p>
            <p className='text-base md:text-lg lg:text-xl text-white/95 leading-relaxed'>
              Nhà trường giúp học sinh <span className='font-bold text-[#FDB913]'>phát triển trí tuệ, cảm xúc và năng lực toàn cầu</span> để sống nhân ái, tự tin và đóng góp tích cực cho xã hội.
            </p>
          </div>
        </motion.div>

        {/* Mission Pillars Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {missionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className='group'
            >
              <div className='bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center'>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className='w-8 h-8 text-white' strokeWidth={2.5} />
                </div>
                <h3 className='text-lg font-bold text-[#005C42] mb-2 uppercase tracking-wide'>
                  {pillar.title}
                </h3>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
