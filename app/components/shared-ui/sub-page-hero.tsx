import { motion } from "motion/react"

interface SubPageHeroProps {
    title: string
    subtitle?: string
    backgroundImage: string
}

export default function SubPageHero({
    title,
    subtitle,
    backgroundImage,
}: SubPageHeroProps) {

    return (
        <section className='relative w-full h-[80vh] min-h-[400px] flex flex-col justify-end overflow-hidden font-sans'>
            {/* Background Image */}
            <div className='absolute inset-0 z-0'>
                <img
                    src={backgroundImage}
                    alt={title}
                    className='w-full h-full object-cover object-center'
                />
                {/* Dark Overlay for Text Contrast - Gradient to clear top but dark bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className='relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pb-12 md:pb-16'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col items-start'
                >
                    {/* Decorative Line */}
                    <div className='bg-[#FDB913] w-12 h-1 md:w-20 md:h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />

                    {/* Title */}
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight drop-shadow-2xl mb-4 leading-tight'>
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className='text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed'>
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
