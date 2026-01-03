import { useRef, useState, useMemo, useEffect, type ReactNode } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, useInView } from 'motion/react'
import {
  History,
  Heart,
  Rocket,
  ArrowRight,
  Compass,
  Users,
  Award,
  Video,
  Gift,
  Share2,
  BookOpen,
  MessageCircle,
  Camera
} from 'lucide-react'

import { cn } from '@/lib/utils'

interface TheLHBSEdgeProps {
  onNavigate?: (path: string) => void
}

interface EdgeSection {
  id: string
  icon: ReactNode
  title: string
  titleFull: string
  subtitle: string
  description: string
  features: Array<{ title: string; desc: string; icon: ReactNode }>
  imageUrl: string
  timeRange: string
}

// Milestone Content based on 15th Anniversary Plan
const edgeSections: EdgeSection[] = [
  {
    id: 'past',
    icon: <History className='w-6 h-6' />,
    title: 'QUÁ KHỨ',
    titleFull: 'TÔN VINH QUÁ KHỨ',
    subtitle: 'Honor the Past',
    timeRange: 'Tháng 08/2026 - 09/2026',
    description:
      'Hành trình nhìn lại chặng đường 15 năm (2011-2026) đầy tự hào, tôn vinh những giá trị nền tảng và con người đã kiến tạo nên LHBS của ngày hôm nay.',
    features: [
      { title: 'Alumni Gallery', desc: 'Câu chuyện thành công cựu học sinh', icon: <Users className='w-5 h-5' /> },
      { title: 'Thanh xuân LHBS', desc: 'Cuộc thi video kỷ niệm mái trường', icon: <Video className='w-5 h-5' /> },
      { title: 'LHBS Milestone', desc: 'Chuỗi bài viết lịch sử phát triển', icon: <History className='w-5 h-5' /> },
      { title: 'LHBS Pride', desc: 'Vinh danh thành tích học sinh', icon: <Award className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1528642463367-1d30f31fbb0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'present',
    icon: <Heart className='w-6 h-6' />,
    title: 'HIỆN TẠI',
    titleFull: 'TRÂN TRỌNG HIỆN TẠI',
    subtitle: 'Embrace the Present',
    timeRange: 'Tháng 01/2026 - 10/2026',
    description:
      'Lan tỏa yêu thương và khẳng định chất lượng giáo dục vững chắc thông qua các hoạt động kết nối cộng đồng, tri ân và sẻ chia giá trị thực.',
    features: [
      { title: 'Hoạt động Từ thiện', desc: 'Tặng sách, học bổng & quà tặng', icon: <Gift className='w-5 h-5' /> },
      { title: 'Quà tặng 15 năm', desc: 'Tri ân GVNV, Phụ huynh & Đối tác', icon: <Heart className='w-5 h-5' /> },
      { title: 'Review hay nhận quà', desc: 'Cuộc thi chia sẻ cảm nhận', icon: <Share2 className='w-5 h-5' /> },
      { title: 'Kết nối giáo dục', desc: 'Chuyên đề phương pháp giảng dạy', icon: <BookOpen className='w-5 h-5' /> },
      { title: 'LHBS Testimonial', desc: 'Chia sẻ từ Phụ huynh', icon: <MessageCircle className='w-5 h-5' /> },
      { title: 'Anh em một mái trường', desc: 'Cuộc thi ảnh gia đình LHBS', icon: <Camera className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop'
  },
  {
    id: 'future',
    icon: <Rocket className='w-6 h-6' />,
    title: 'TƯƠNG LAI',
    titleFull: 'KIẾN TẠO TƯƠNG LAI',
    subtitle: 'Envision the Future',
    timeRange: 'Tháng 11/2026',
    description:
      'Khẳng định tầm nhìn giáo dục song ngữ tiêu chuẩn quốc tế, sẵn sàng cho chặng đường mới với tâm thế vững vàng và khát vọng vươn xa.',
    features: [
      { title: 'Hành trình 15 năm', desc: 'Video công chiếu đặc biệt', icon: <Video className='w-5 h-5' /> },
      { title: 'Đêm nhạc & Vinh danh', desc: 'Sự kiện kỷ niệm trọng đại', icon: <Award className='w-5 h-5' /> },
      { title: 'Định hướng 5 năm tới', desc: 'Công bố chiến lược phát triển', icon: <Compass className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop'
  }
]

export function TheLHBSEdge() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLElement>(null)
  const yOffsetHeader = 80 // Height of sticky header approximately

  const scrollToTab = (index: number) => {
    const element = document.getElementById(`milestone-${index}`)
    if (element) {
      const yOffset = -yOffsetHeader // Sticky header offset
      const top = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: top, behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} className='relative w-full bg-linear-to-b from-[#013b1d] to-lhbs-green-dark text-white'>
      <div className='flex flex-col lg:flex-row relative'>
        {/* Left Content Column - SCROLLABLE */}
        <div className='w-full lg:w-[60%] flex flex-col'>
          {edgeSections.map((section, index) => (
            <MilestoneSection key={section.id} section={section} index={index} onInView={() => setActiveTab(index)} />
          ))}
        </div>

        {/* Right Navigation Column - RETRO DESIGN (No Steps) */}
        <div className='hidden lg:flex lg:w-[40%] h-screen sticky top-0 flex-col justify-center items-center  py-20 px-6 md:px-12 lg:px-20'>
          <div className='relative w-full max-w-lg'>
            <div className='relative space-y-12 z-10'>
              {/* Vertical Timeline Line */}
              <div className='absolute left-7 lg:left-8 top-7 lg:top-8 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0'>
                <motion.div
                  className='absolute top-0 left-0 w-full bg-brand-gold shadow-[0_0_15px_rgba(250,186,30,0.3)] origin-top'
                  style={{ height: `${(activeTab / (edgeSections.length - 1)) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              </div>

              {edgeSections.map((item, index) => {
                const isActive = activeTab === index
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToTab(index)}
                    className='group relative w-full flex items-center gap-6 lg:gap-10 transition-all duration-700 outline-none text-left'
                  >
                    {/* Icon Box */}
                    <div className='relative shrink-0 z-20'>
                      <div
                        className={cn(
                          'w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-700 relative overflow-hidden border',
                          isActive
                            ? 'bg-brand-gold border-brand-gold text-lhbs-green-dark shadow-[0_0_40px_rgba(250,186,30,0.3)] scale-110'
                            : 'bg-[#004d26] border-white/5 text-white/40 group-hover:border-brand-gold/50 group-hover:text-white group-hover:scale-110 shadow-lg'
                        )}
                      >
                        <div
                          className={cn(
                            'transition-transform duration-700',
                            isActive ? 'scale-110' : 'group-hover:scale-110'
                          )}
                        >
                          {item.icon}
                        </div>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId='glow-dot'
                          className='absolute inset-0 bg-brand-gold rounded-2xl blur-2xl opacity-20'
                        />
                      )}
                    </div>

                    {/* Text Info */}
                    <div
                      className={cn(
                        'flex flex-col text-left space-y-2 transition-all duration-700 w-full',
                        isActive ? 'opacity-100' : 'opacity-30 group-hover:opacity-70'
                      )}
                    >
                      {/* REMOVED STEP INDICATOR */}

                      <h4
                        className={cn(
                          'text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter transition-all duration-700 leading-none',
                          isActive
                            ? 'text-white translate-x-1 lg:translate-x-2'
                            : 'text-white/20 group-hover:text-white/40'
                        )}
                      >
                        {item.title}
                      </h4>

                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-700',
                          isActive ? 'max-h-12 opacity-100 mt-1' : 'max-h-0 opacity-0'
                        )}
                      >
                        <p
                          className={cn(
                            'text-[10px] lg:text-[11px] font-bold text-brand-gold/90 uppercase tracking-widest leading-tight transition-transform duration-700',
                            isActive ? 'translate-x-1 lg:translate-x-2' : ''
                          )}
                        >
                          {item.timeRange}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Nav Indicator (Bottom) */}
        <div className='lg:hidden fixed bottom-6 left-0 w-full px-6 flex justify-center z-50 pointer-events-none'>
          <div className='bg-[#004d26]/90 backdrop-blur-md rounded-full px-4 py-2 flex gap-2 border border-white/10 pointer-events-auto shadow-2xl'>
            {edgeSections.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToTab(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  activeTab === i ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Sub Component for individual sections to handle InView logic
function MilestoneSection({ section, index, onInView }: { section: EdgeSection; index: number; onInView: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' }) // Trigger when center of section is in view

  useEffect(() => {
    if (isInView) {
      onInView()
    }
  }, [isInView, onInView])

  return (
    <div
      id={`milestone-${index}`}
      ref={ref}
      className='min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 relative'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.8 }}
        className='max-w-4xl space-y-12'
      >
        <div className='space-y-8'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-1 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
              <span className='text-sm font-black tracking-[0.2em] text-brand-gold uppercase'>KỶ NIỆM 15 NĂM</span>
            </div>
          </div>

          <div className='relative space-y-4'>
            <h3 className='text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black text-white tracking-tight uppercase leading-none drop-shadow-xl'>
              {section.titleFull}
            </h3>
            {/* <div className='inline-flex'>
              <span className="bg-brand-gold text-[#00602f] text-base md:text-lg font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {section.timeRange}
              </span>
            </div> */}
          </div>

          <p className='text-xl md:text-2xl text-white/90 font-medium font-serif italic max-w-2xl'>
            "{section.subtitle}"
          </p>
        </div>

        <div className='max-w-3xl'>
          <p className='text-lg md:text-xl text-white/80 font-light leading-relaxed border-l-2 border-brand-gold/30 pl-6'>
            {section.description}
          </p>
        </div>

        {/* Feature Cards - Clean & Minimal */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-6'>
          {section.features.map((feature) => (
            <div
              key={feature.title}
              className='group flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 hover:-translate-y-1'
            >
              <div className='shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-lhbs-green-dark transition-all duration-500'>
                {feature.icon}
              </div>
              <div>
                <h5 className='text-base font-bold text-white uppercase mb-1 group-hover:text-brand-gold transition-colors'>
                  {feature.title}
                </h5>
                <p className='text-sm text-white/60 leading-snug font-medium'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
