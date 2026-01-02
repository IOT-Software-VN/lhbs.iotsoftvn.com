import { useState, useRef, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useMotionValue
} from 'motion/react'
import {
  Globe,
  Layers,
  GraduationCap,
  Heart,
  ArrowRight,
  ArrowDown,
  Compass,
  BookOpen,
  Languages,
  Cpu,
  Award,
  CheckCircle2,
  Zap,
  MessageCircle,
  ShieldCheck,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface TheLHBSEdgeProps {
  onNavigate?: (path: string) => void
}

interface EdgeSection {
  id: string
  icon: React.ReactNode
  title: string
  titleFull: string
  subtitle: string
  description: string
  features: Array<{ title: string; desc: string; icon: React.ReactNode }>
  imageUrl: string
  stats: { value: string; label: string }
  partners?: Array<{ name: string; logoUrl?: string; icon: string }>
}

// Accurate Educational Strategy Content
const edgeSections: EdgeSection[] = [
  {
    id: 'culture',
    icon: <Globe className='w-6 h-6' />,
    title: 'VĂN HÓA',
    titleFull: 'VĂN HÓA VIỆT',
    subtitle: 'Bản sắc Việt – Tầm nhìn Quốc tế',
    description:
      'LHBS không chỉ dạy kiến thức, chúng tôi xây dựng nền tảng để học sinh tự tin bước ra thế giới mà vẫn giữ trọn bản sắc dân tộc, sự tử tế và lòng biết ơn.',
    features: [
      { title: 'Am tường cội nguồn', desc: 'Sâu sắc bản sắc', icon: <Compass className='w-5 h-5' /> },
      { title: 'Tự tin toàn cầu', desc: 'Bản lĩnh quốc tế', icon: <Globe className='w-5 h-5' /> },
      { title: 'Lòng nhân ái', desc: 'Giá trị sống tốt', icon: <Heart className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1528642463367-1d30f31fbb0c?q=80&w=2070&auto=format&fit=crop',
    stats: { value: '100%', label: 'GIÁ TRỊ CỐT LÕI' }
  },
  {
    id: 'ecosystem',
    icon: <Layers className='w-6 h-6' />,
    title: 'HỆ SINH THÁI',
    titleFull: 'HỆ SINH THÁI 5-TRONG-1',
    subtitle: 'Phát triển toàn diện – Cá nhân hóa',
    description:
      'Chương trình học tích hợp toàn diện giúp học sinh phát triển cân bằng giữa học thuật chuẩn Bộ GD&ĐT, công nghệ tương lai và kỹ năng sống đỉnh cao.',
    features: [
      { title: 'Học thuật chuẩn mực', desc: 'Chương trình Bộ GD&ĐT', icon: <BookOpen className='w-5 h-5' /> },
      { title: 'Anh ngữ chuẩn Cambridge', desc: 'Sử dụng như ngôn ngữ thứ 2', icon: <Languages className='w-5 h-5' /> },
      { title: 'STEM & AI-Robotics', desc: 'Làm chủ công nghệ 4.0', icon: <Cpu className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
    stats: { value: '05', label: 'LĨNH VỰC TRỌNG TÂM' },
    partners: [
      {
        name: 'Cambridge',
        icon: 'CAM',
        logoUrl: 'https://www.cambridgeinternational.org/images/cambridge-international-logo.png'
      },
      { name: 'STEM', icon: 'STM' },
      { name: 'AI/Robotics', icon: 'AIR' }
    ]
  },
  {
    id: 'dual-diploma',
    icon: <GraduationCap className='w-6 h-6' />,
    title: 'LỘ TRÌNH',
    titleFull: 'BẰNG KÉP QUỐC TẾ',
    subtitle: 'Dual Diploma (Vietnam - USA)',
    description:
      'Sở hữu đồng thời bằng tốt nghiệp Việt Nam và Hoa Kỳ (ASI - Cognia), mở cánh cửa tuyển thẳng đại học Mỹ không cần IELTS/TOEFL.',
    features: [
      { title: 'Bằng tốt nghiệp Hoa Kỳ', desc: 'Hợp tác cùng ASI', icon: <Award className='w-5 h-5' /> },
      { title: 'Chuẩn kiểm định Cognia', desc: 'Chất lượng toàn cầu', icon: <CheckCircle2 className='w-5 h-5' /> },
      { title: 'Tiết kiệm 2 năm', desc: 'Tăng tốc tương lai', icon: <Zap className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop',
    stats: { value: '02', label: 'BẰNG TỐT NGHIỆP' },
    partners: [
      {
        name: 'ASI',
        icon: 'ASI',
        logoUrl: 'https://www.american-schooling.com/wp-content/uploads/2021/05/logo_asi.png'
      },
      { name: 'Cognia', icon: 'COG', logoUrl: 'https://www.cognia.org/wp-content/themes/cognia/assets/images/logo.svg' }
    ]
  },
  {
    id: 'well-being',
    icon: <Heart className='w-6 h-6' />,
    title: 'HẠNH PHÚC',
    titleFull: 'HẠNH PHÚC HỌC ĐƯỜNG',
    subtitle: 'Thấu hiểu – Đồng hành – Yêu thương',
    description:
      'Môi trường học tập hạnh phúc là nơi mỗi học sinh được lắng nghe, được tôn trọng sự khác biệt và được hỗ trợ tâm lý chuyên sâu 24/7.',
    features: [
      { title: 'Tham vấn tâm lý', desc: 'Đội ngũ chuyên gia', icon: <MessageCircle className='w-5 h-5' /> },
      { title: 'Trường học an toàn', desc: 'Bảo vệ thể chất & tinh thần', icon: <ShieldCheck className='w-5 h-5' /> },
      { title: 'Cộng đồng gắn kết', desc: 'Gia đình & Nhà trường', icon: <Users className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    stats: { value: '24/7', label: 'CHĂM SÓC TẬN TÂM' }
  }
]

export default function TheLHBSEdge() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  })

  const indexY = useTransform(smoothProgress, [0, 1], ['5%', '-20%'])

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const index = Math.min(Math.floor(latest * edgeSections.length), edgeSections.length - 1)
    if (index !== activeTab && index >= 0) setActiveTab(index)
  })

  const scrollToTab = (index: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const containerTop = rect.top + window.scrollY
    const sectionHeight = rect.height / edgeSections.length
    const scrollTarget = containerTop + index * sectionHeight + 100
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' })
  }

  const activeSection = edgeSections[activeTab]

  return (
    <section
      ref={containerRef}
      className='relative w-full bg-[#06100b] text-white isolate'
      style={{ height: `${edgeSections.length * 100}vh` }}
    >
      {/* Background Layer */}
      <div className='sticky top-0 left-0 w-full h-screen overflow-hidden z-0'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className='absolute inset-0'
          >
            <img src={activeSection.imageUrl} alt='' className='w-full h-full object-cover opacity-30 contrast-125' />
            {/* Elegant Gradients */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#06100b] via-[#06100b]/80 to-transparent lg:block hidden' />
            <div className='absolute inset-0 bg-gradient-to-b from-[#06100b] via-transparent to-[#06100b] lg:hidden block' />
            <div className='absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none' />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Glow */}
        <motion.div
          className='absolute inset-0 z-10 pointer-events-none opacity-20'
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(250,186,30,0.08), transparent 100%)`
            )
          }}
        />

        {/* Large Decorative Index */}
        <motion.div
          style={{ y: indexY }}
          className='absolute right-[10%] bottom-[5%] text-[25vw] font-black text-white/3 select-none pointer-events-none leading-none font-sans hidden lg:block uppercase italic'
        >
          {activeSection.id.substring(0, 3)}
        </motion.div>
      </div>

      <div className='sticky top-0 left-0 w-full h-screen z-10 flex flex-col lg:flex-row overflow-hidden'>
        {/* Left Content Column */}
        <div className='w-full lg:w-[60%] h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-40 relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className='max-w-4xl space-y-12'
            >
              <div className='space-y-10'>
                <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-4'>
                    <motion.div
                      key={`line-${activeTab}`}
                      initial={{ width: 0 }}
                      animate={{ width: 40 }}
                      className='h-px bg-[#FABA1E]/60'
                    />
                    <span className='text-[11px] font-black tracking-[0.4em] text-[#FABA1E] uppercase'>
                      0{activeTab + 1} &mdash; SỰ KHÁC BIỆT CỦA LHBS
                    </span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className='text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase pl-14'
                  >
                    KIẾN TẠO CÔNG DÂN TOÀN CẦU
                  </motion.span>
                </div>

                <div className='relative'>
                  <h3 className='text-6xl md:text-8xl lg:text-9xl xl:text-[120px] font-black text-white tracking-tighter uppercase leading-tight drop-shadow-2xl'>
                    {(() => {
                      const words = activeSection.titleFull.split(' ')
                      const mid = Math.ceil(words.length / 2)
                      return (
                        <>
                          <span className='block'>{words.slice(0, mid).join(' ')}</span>
                          <span className='block text-[#FABA1E] text-balance'>{words.slice(mid).join(' ')}</span>
                        </>
                      )
                    })()}
                  </h3>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='text-xl md:text-2xl text-white/60 font-medium font-serif italic'
                >
                  "{activeSection.subtitle}"
                </motion.p>
              </div>

              <div className='max-w-2xl border-l-2 border-[#FABA1E]/20 pl-8'>
                <p className='text-lg md:text-xl text-white/70 font-light leading-relaxed font-serif'>
                  {activeSection.description}
                </p>
              </div>

              {/* Feature Cards - Redesigned for Glassmorphism */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {activeSection.features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className='relative group overflow-hidden bg-white/3 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/8 transition-all duration-500 hover:-translate-y-1'
                  >
                    <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all'>
                      <span className='text-3xl font-black italic'>0{i + 1}</span>
                    </div>

                    <div className='flex flex-col gap-4'>
                      <div className='w-10 h-10 rounded-xl bg-[#FABA1E]/10 flex items-center justify-center text-[#FABA1E] group-hover:bg-[#FABA1E] group-hover:text-[#06100b] transition-all duration-500'>
                        {feature.icon}
                      </div>

                      <div className='space-y-1'>
                        <h5 className='text-sm font-bold text-white uppercase group-hover:text-[#FABA1E] transition-colors'>
                          {feature.title}
                        </h5>
                        <p className='text-[10px] text-white/40 leading-relaxed uppercase font-semibold tracking-wider group-hover:text-white/60 transition-colors'>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                    <div className='absolute bottom-0 left-0 h-1 w-0 bg-[#FABA1E] group-hover:w-full transition-all duration-700' />
                  </div>
                ))}
              </div>

              <div className='flex items-center gap-8'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='px-10 py-5 bg-[#FABA1E] text-[#06100b] font-black text-sm uppercase tracking-widest rounded-full shadow-[0_20px_40px_rgba(250,186,30,0.2)] flex items-center gap-4 group'
                >
                  Tìm hiểu ngay
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform' />
                </motion.button>

                <div className='flex items-center gap-4 text-white/40'>
                  <div className='flex -space-x-4'>
                    {[1, 2, 3].map((n) => (
                      <div key={n} className='w-10 h-10 rounded-full border-2 border-[#06100b] bg-white/10' />
                    ))}
                  </div>
                  <span className='text-[10px] font-bold uppercase tracking-widest'>Join 500+ Students</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Navigation Column - Editorial Redesign */}
        <div className='flex lg:w-[40%] h-full flex-col justify-center items-center relative border-l border-white/5 bg-[#06100b]/20 py-20'>
          <div className='relative w-full max-w-lg px-6 md:px-12 lg:px-20'>
            {/* <div className='mb-16 lg:mb-24 flex flex-col items-center text-center relative z-10'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-8 h-px bg-[#FABA1E]' />
                <h4 className='text-[10px] font-black tracking-[0.6em] text-[#FABA1E] uppercase'>HÀNH TRÌNH LHBS</h4>
                <div className='w-8 h-px bg-[#FABA1E]' />
              </div>
              <p className='text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium'>
                Khám phá những giá trị độc bản
              </p>
            </div> */}

            <div className='relative space-y-12 z-10'>
              {/* Minimalist Vertical Timeline - Now positioned correctly relative to items */}
              <div className='absolute left-7 lg:left-8 top-7 lg:top-8 bottom-7 lg:bottom-8 w-px bg-white/10 -translate-x-1/2 z-0'>
                <motion.div
                  className='absolute top-0 left-0 w-full bg-[#FABA1E] shadow-[0_0_15px_rgba(250,186,30,0.3)] origin-top'
                  animate={{
                    height: `${(activeTab / (edgeSections.length - 1)) * 100}%`
                  }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              </div>
              {edgeSections.map((item, index) => {
                const isActive = activeTab === index
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToTab(index)}
                    className={cn(
                      'group relative w-full flex items-center gap-6 lg:gap-10 transition-all duration-700 outline-none'
                    )}
                  >
                    <div className='relative shrink-0 z-20'>
                      <div
                        className={cn(
                          'w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-700 relative overflow-hidden border',
                          isActive
                            ? 'bg-[#FABA1E] border-[#FABA1E] text-[#06100b] shadow-[0_0_40px_rgba(250,186,30,0.3)] scale-110'
                            : 'bg-[#06100b] border-white/10 text-white/40 group-hover:border-[#FABA1E]/50 group-hover:text-white group-hover:scale-110 shadow-lg'
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
                          className='absolute inset-0 bg-[#FABA1E] rounded-2xl blur-2xl opacity-20'
                        />
                      )}
                    </div>

                    <div
                      className={cn(
                        'flex flex-col text-left space-y-2 transition-all duration-700',
                        isActive ? 'opacity-100' : 'opacity-30 group-hover:opacity-70'
                      )}
                    >
                      <div className='flex items-center gap-3'>
                        <span
                          className={cn(
                            'text-[11px] font-black uppercase tracking-[0.3em] transition-colors',
                            isActive ? 'text-[#FABA1E]' : 'text-white/20'
                          )}
                        >
                          Step 0{index + 1}
                        </span>
                        {isActive && (
                          <motion.div initial={{ width: 0 }} animate={{ width: 30 }} className='h-px bg-[#FABA1E]/30' />
                        )}
                      </div>
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
                            'text-[9px] lg:text-[10px] font-bold text-[#FABA1E]/50 uppercase tracking-[0.2em] leading-tight max-w-[200px] lg:max-w-none transition-transform duration-700',
                            isActive ? 'translate-x-1 lg:translate-x-2' : ''
                          )}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Indicator */}
        <div className='lg:hidden absolute bottom-8 left-0 w-full px-6 flex justify-between items-center'>
          <div className='flex gap-2'>
            {edgeSections.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-1 rounded-full transition-all duration-500',
                  activeTab === i ? 'w-12 bg-[#FABA1E]' : 'w-4 bg-white/20'
                )}
              />
            ))}
          </div>
          <span className='text-[10px] font-black text-white/40 tracking-[0.5em]'>SCROLL</span>
        </div>
      </div>

      {/* Floating Scroll Guide - Centered like Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className='fixed bottom-12 left-1/2 -translate-x-1/2 z-50 hidden xl:flex flex-col items-center gap-6 pointer-events-none'
      >
        <div className='flex flex-col items-center gap-4'>
          <div className='relative w-14 h-14 flex items-center justify-center border border-white/10 rounded-full backdrop-blur-sm'>
            <ArrowDown className='w-5 h-5 text-[#FABA1E] animate-bounce' />
            <div className='absolute inset-0 rounded-full border-t-2 border-[#FABA1E] animate-[spin_3s_linear_infinite]' />
          </div>
          <span className='text-[10px] font-black uppercase tracking-[0.6em] text-white/30'>Experience LHBS</span>
        </div>
      </motion.div>
    </section>
  )
}

