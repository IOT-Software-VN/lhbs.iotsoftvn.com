import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BookOpen, Shield, Lightbulb, Heart, Globe, Play, Pause, VolumeX } from 'lucide-react'

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

interface CoreValue {
    id: string
    icon: React.ElementType
    title: string
    description: string
    image: string
}

const CORE_VALUES: CoreValue[] = [
    {
        id: 'lifelong_learning',
        icon: BookOpen,
        title: 'Hiếu học',
        description: 'Không ngừng khám phá tri thức, nuôi dưỡng đam mê học tập và phát triển bản thân suốt đời.',
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/1-1.jpg'
    },
    {
        id: 'integrity',
        icon: Shield,
        title: 'Chính trực',
        description: 'Trung thực, có đạo đức và nhất quán trong suy nghĩ, lời nói và hành động.',
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/2.jpg'
    },
    {
        id: 'creativity',
        icon: Lightbulb,
        title: 'Sáng tạo',
        description: 'Tư duy độc lập, linh hoạt, dám nghĩ, dám làm và tạo ra giá trị mới tích cực.',
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg'
    },
    {
        id: 'compassion',
        icon: Heart,
        title: 'Nhân ái',
        description: 'Sống tử tế, biết yêu thương, sẻ chia và tôn trọng sự khác biệt; quan tâm đến người khác và cộng đồng.',
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/02/333A0358.jpg'
    },
    {
        id: 'global_competence',
        icon: Globe,
        title: 'Trách nhiệm',
        description: 'Chủ động và có trách nhiệm với bản thân, cộng đồng và môi trường; hành động vì sự phát triển bền vững.',
        image: 'https://lhbs.edu.vn/wp-content/uploads/2021/07/122482938_1797344593750963_7347811336665844878_n.jpg'
    }
]

// ============================================================================
// COMPONENT
// ============================================================================

export default function CoreValuesSection() {
    const [activeTab, setActiveTab] = useState(0)
    const selectedValue = CORE_VALUES[activeTab]

    return (
        <section className="relative snap-start min-h-dvh h-auto w-full py-16 md:py-24 bg-[#00602f] text-white overflow-hidden">
            {/* Background Texture (Optional) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            {/* Container */}
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col items-start mb-6 md:mb-10">
                    <div className="bg-[#faba1e] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
                    <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-black uppercase tracking-tight leading-none drop-shadow-2xl">
                        Giá trị cốt lõi
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl font-light">
                        Những giá trị làm nên bản sắc và tinh thần Lạc Hồng
                    </p>
                </div>

                {/* Main Content Area: Split Layout */}
                <div className="flex flex-col gap-8 md:gap-10">

                    {/* Top Row: Image & Tabs */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">

                        {/* Image Container (Left Desktop, Bottom Mobile) */}
                        <div className="flex-1 w-full lg:w-[75%] order-2 lg:order-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Video/Image Container */}
                                    <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[21/9] overflow-hidden shadow-2xl bg-black/20 group">
                                        <img
                                            src={selectedValue.image}
                                            alt={selectedValue.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 cursor-pointer hover:bg-white/30 hover:scale-110 transition-all">
                                                <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                            </div>
                                        </div>

                                        {/* Controls (Visual only) */}
                                        <div className="absolute bottom-4 right-6 flex gap-3">
                                            <div className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white cursor-pointer">
                                                <Pause className="w-5 h-5" />
                                            </div>
                                            <div className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white cursor-pointer">
                                                <VolumeX className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Tabs (Right Desktop, Top Mobile) */}
                        <div className="w-full lg:w-[110px] xl:w-[130px] flex flex-row lg:flex-col gap-3 lg:gap-5 justify-center lg:justify-start order-1 lg:order-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                            {CORE_VALUES.map((value, index) => {
                                const isActive = activeTab === index
                                return (
                                    <button
                                        key={value.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`
                                            relative group flex items-center justify-center
                                            w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 
                                            rounded-full lg:rounded-l-full lg:rounded-r-none transition-all duration-300
                                            ${isActive
                                                ? 'bg-white text-[#1e5338] shadow-[0_0_15px_rgba(255,255,255,0.3)] translate-x-0' // Active
                                                : 'bg-transparent border border-white/30 text-white/60 hover:text-white hover:border-white hover:bg-white/10'
                                            }
                                        `}
                                    >
                                        <value.icon
                                            className={`relative z-10 w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-110'}`}
                                            strokeWidth={1.5}
                                        />
                                        {isActive && (
                                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#faba1e] rounded-full lg:hidden" />
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bottom Row: Text Description */}
                    <div className="w-full lg:w-[75%]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="">
                                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-3 text-[#faba1e]">
                                        {selectedValue.title}
                                    </h3>
                                    <p className="text-base md:text-lg font-light leading-relaxed text-white/90 max-w-4xl">
                                        {selectedValue.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    )
}
