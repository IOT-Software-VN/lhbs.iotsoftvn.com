'use client'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { NEWS_ITEMS, EVENT_ITEMS, GALLERY_ITEM } from '../../constants'
import { NewsColumn } from './news-column'
import { EventsColumn } from './events-column'
import { GalleryColumn } from './gallery-column'

const backgroundImage = '/images/base/lhbs-hac-bg.png'

export function NewsEventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className='w-full h-full bg-white font-sans relative overflow-hidden flex flex-col'>
      {/* Background Image - Subtle */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          top: '0%'
        }}
      />

      {/* Content with relative z-index */}
      <div className='grow w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 relative z-10 overflow-y-auto no-scrollbar py-8 md:py-12 flex flex-col justify-center'>
        {/* Centered Header */}
        <div className='flex flex-col items-center mb-8 md:mb-12 shrink-0'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h3 className='text-xs md:text-sm lg:text-base font-bold text-brand-gold uppercase tracking-[0.2em] mb-2 text-center'>
              Cập nhật mới nhất
            </h3>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-green uppercase tracking-tight text-center drop-shadow-sm leading-tight'>
              Tin tức & Sự kiện
            </h2>
          </motion.div>
        </div>

        {/* 3 Column Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 grow h-full pt-4'>
          {/* Column 1: TIN TỨC */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NewsColumn newsItems={NEWS_ITEMS} backgroundImage={backgroundImage} />
          </motion.div>

          {/* Column 2: SỰ KIỆN */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <EventsColumn eventItems={EVENT_ITEMS} backgroundImage={backgroundImage} />
          </motion.div>

          {/* Column 3: HÌNH ẢNH */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GalleryColumn galleryItem={GALLERY_ITEM} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
