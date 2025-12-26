import { motion } from 'motion/react'
import { Breadcrumb, type BreadcrumbItem } from '~/Breadcrumb'

interface WelcomeSectionProps {
    onNavigate: (path: string) => void
}

export default function WelcomeSection({ onNavigate }: WelcomeSectionProps) {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Trang chủ', path: '/' },
        { label: 'Tầm nhìn & Sứ mệnh' }
    ]
    return (
        <section className='w-full min-h-screen snap-start bg-white flex flex-col relative overflow-hidden'>

            {/* Background Decoration */}
            <div className='absolute inset-0 z-0 flex items-center justify-center pb-12 pointer-events-none'>
                <img
                    src="/images/base/lhbs-hac.png"
                    alt=""
                    className='w-[90%] md:w-[60%] lg:w-[60%] h-auto object-contain opacity-10'
                />
            </div>

            {/* Breadcrumb Container - In Flow */}
            <div className='w-full pt-24 pb-4 md:pb-6 relative z-10'>
                <div className='container mx-auto px-4 md:px-8 lg:px-12'>
                    <div className='opacity-90 hover:opacity-100 transition-opacity'>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            </div>

            {/* Main Content - Takes remaining space and centers */}
            <div className='flex-1 w-full flex items-center pb-24 relative z-10'>
                <div className='container mx-auto px-4 md:px-8 lg:px-12'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='max-w-4xl mx-auto text-center'
                    >
                        {/* Decorative Top Line */}
                        <div className='flex justify-center mb-8 md:mb-12'>
                            <div className='bg-[#FDB913] w-16 h-1 rounded-full' />
                        </div>

                        {/* Content */}
                        <p className='text-lg md:text-2xl lg:text-3xl text-[#1E5338] font-light leading-relaxed md:leading-relaxed lg:leading-relaxed'>
                            Trường Song ngữ Lạc Hồng cam kết kiến tạo một <span className='font-bold text-[#FDB913]'>môi trường học tập</span> - nơi nuôi dưỡng, hướng dẫn và giáo dục thế hệ trẻ biết <span className='font-bold text-[#FDB913]'>trân trọng cội nguồn và bản sắc dân tộc Việt Nam</span>, sẵn sàng <span className='font-bold text-[#FDB913]'>hội nhập quốc tế</span> với kiến thức, kỹ năng và phẩm chất <span className='font-bold text-[#FDB913]'>công dân toàn cầu</span>, mang đến những thay đổi tích cực trong tương lai cho bản thân và cộng đồng
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
