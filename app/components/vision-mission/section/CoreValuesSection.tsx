import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BookOpen, Shield, Lightbulb, Heart, Globe, Play, Pause, Volume2, VolumeX } from 'lucide-react'

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
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/1-1.jpg' // Placeholder, replace with real asset
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
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg'
    },
    {
        id: 'global_competence',
        icon: Globe,
        title: 'Trách nhiệm',
        description: 'Chủ động và có trách nhiệm với bản thân, cộng đồng và môi trường; hành động vì sự phát triển bền vững.',
        image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/573186746_804888342173308_4889398892092085854_n.jpg'
    }
]

const COLORS = {
    GREEN: '#1e5338',
    SECTION_GREEN: '#00602f',
    YELLOW: '#faba1e',
    WHITE: '#ffffff'
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function CoreValuesSection() {
    const [activeTab, setActiveTab] = useState(0)
    const selectedValue = CORE_VALUES[activeTab]

    return (
        <section className="relative w-full py-12 md:py-24 bg-[#00602f] text-white overflow-hidden">
            {/* Container */}
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col items-start mb-12">
                    {/* Line Decoration */}
                    <div className="bg-[#faba1e] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />

                    {/* Main Title */}
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                        <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-black uppercase tracking-tight leading-none drop-shadow-2xl">
                            Giá trị cốt lõi
                        </h2>
                    </div>
                    <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl font-light">
                        Giá trị cốt lõi của Trường Song ngữ Lạc Hồng - LHBS
                    </p>
                </div>

                {/* Content Container with Tabs */}
                <div className="flex flex-col items-center justify-center max-w-[1100px] mx-auto">

                    {/* Tabs Navigation - Centered above content */}
                    <div className="flex flex-nowrap items-center justify-center gap-2 md:gap-4 mb-8 w-full">
                        {CORE_VALUES.map((value, index) => {
                            const isActive = activeTab === index
                            return (
                                <button
                                    key={value.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                                        relative flex flex-col md:flex-row items-center justify-center gap-2 px-2 py-2 md:px-3 md:py-4 
                                        border transition-all duration-300 rounded-lg group flex-1 h-auto md:h-[72px] min-w-0
                                        ${isActive
                                            ? 'bg-white border-white text-[#1e5338] shadow-[0_10px_30px_rgba(0,0,0,0.2)] scale-105 z-10'
                                            : 'bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                                        }
                                    `}
                                >
                                    <value.icon
                                        className={`w-6 h-6 shrink-0 transition-colors ${isActive ? 'text-[#1e5338]' : 'text-white'}`}
                                        strokeWidth={2}
                                    />
                                    <div className="flex flex-col items-center md:items-start leading-tight min-w-0">
                                        <span className={`text-[10px] font-medium uppercase tracking-wider ${isActive ? 'opacity-80' : 'opacity-60'}`}>
                                            {/* Optionally showing EN title if needed or just styling */}
                                        </span>
                                        <span className="text-sm font-bold uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                                            {value.title}
                                        </span>
                                    </div>

                                    {/* Triangle Pointer */}
                                    {isActive && (
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 transform" />
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {/* Content Area - Aligned with the tabs container */}
                    <div className="relative w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col gap-8 w-full"
                            >
                                {/* Media Section */}
                                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-black/20">
                                    <img
                                        src={selectedValue.image}
                                        alt={selectedValue.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    {/* Play Button Simulation */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                        </div>
                                    </div>

                                    {/* Controls Simulation */}
                                    <div className="absolute bottom-4 right-4 flex gap-2">
                                        <div className="p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
                                            <Pause className="w-4 h-4" />
                                        </div>
                                        <div className="p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
                                            <VolumeX className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full text-white">
                                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-[#faba1e]">
                                        {selectedValue.title}
                                    </h3>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-white/90">
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
