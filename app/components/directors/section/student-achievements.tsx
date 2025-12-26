import { motion, useInView } from 'motion/react'
import { useRef, useEffect, useState, useCallback } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const studentAchievements = [
  {
    id: 1,
    image:
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/543461130_759818933346916_1979257807565480094_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fIsdA_fAiGgQ7kNvwF40L5i&_nc_oc=AdmCcQ2qqNMRIz1SbqnLsE6pcQPUNUPEHJ8pnaenAI_DrXrG_ZL-vepQZr2g7MOupT0SNTGD-4yup6XwmFZykqF8&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=w7lOX9_ajBDpMQB_g66r2Q&oh=00_AfldLeyLfXGM8YNuGu7FRdeVtDPb_9fM_TeoN5GikB2STg&oe=693B925A',
    name: 'VAN PHÚ',
    achievement: 'ĐẠI HỌC BÁCH KHOA'
  },
  {
    id: 2,
    image:
      'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/543402169_759821123346697_2032243040218498585_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bWb6x784cHoQ7kNvwFHZAZF&_nc_oc=AdnuuyRm-m4XPKQYSN2PMFuyXTumNM0_Y-6kEkUfiye4LYWI6_oTf1vYUTq-jtUynOMCjkT3a2-asR9vJnuhGRI1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=h2xIaMXQGo8ie9uQQPHh3Q&oh=00_Afm7d3tr_-5WyL2e57y2kpKGo9Xr6IMcOgvomXac2lGPtQ&oe=693B93DA',
    name: 'ĐẶNG DOANH',
    achievement: 'ÚC - DU HỌC'
  },
  {
    id: 3,
    image:
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/543343603_759821950013281_4292234303308542164_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vQLNqYRr0TwQ7kNvwECSCGV&_nc_oc=AdkOFVZfr0-rKazJlV24LMPRF1fFOE03tLbgQmLfN-ymAnfBWqQIWHx50FNZMnS2t9OgOy09rnC7G29OKqREgpbD&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=-wKI18So16LijMHOdfE2Ug&oh=00_AflNpfleoUlpMS4l43v1P7jeYjV8SeWt_QviB6J_me1pkA&oe=693B8D04',
    name: 'KHÁNH HƯNG',
    achievement: 'ĐẠI HỌC RMIT VIỆT NAM'
  },
  {
    id: 4,
    image:
      'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/543420378_759821533346656_1832669033012096925_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kQRDjZ5qcQEQ7kNvwE9yb4A&_nc_oc=AdlWF7ooWuOD7V4C0mgH5Q5ad_PnReF_P4vybrONvUhh8qKFXmY4gKuU4f7SVdeFVO7cUhjwScIp1B-yVUaVcyoH&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=yapSSk4toEDkuTXglCltPA&oh=00_AfkpMpnx9TcOcAAlIbeCJxWWsDL_Pfz27NS0h6pbQsAQgg&oe=693B8F4D',
    name: 'TIỂU ĐÔNG',
    achievement: 'ĐẠI HỌC VĂN LANG'
  },
  {
    id: 5,
    image:
      'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/543397657_759821726679970_4407237426915228198_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wOBaT_aebjQQ7kNvwGYW8Pe&_nc_oc=Adm6oDmLbAdsOx6Ig8YHN-pWxEy-YFiVOnhQk9_RljC0LU7TfrOxSP54O2id8EGVLJMxtjyjKtdgcl5YmqohZTCh&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=ZnNc56cKA7yXXr4Lmu13hA&oh=00_AfloIG7MYb91k5wGMGxLeG2bc6BcKIeZfUKd3k4wRlhHyA&oe=693BB30D',
    name: 'GIA HƯNG',
    achievement: 'HOA KỲ - DU HỌC'
  }
]

export default function StudentAchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [emblaApi, setEmblaApi] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section ref={ref} className='relative py-20 pb-32 overflow-hidden bg-[#01482a]'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[#01482a] z-0' />

      {/* SVG Definitions for Clip Paths */}
      <svg width='0' height='0' className='absolute'>
        <defs>
          {/* Main Card Shield Shape */}
          <clipPath id='big-shield-clip' clipPathUnits='objectBoundingBox'>
            <path d='M0,0.05 C0.3,0 0.7,0 1,0.05 V0.55 C1,0.8 0.5,1 0.5,1 C0.5,1 0,0.8 0,0.55 Z' />
          </clipPath>
          {/* Inner Photo Shield Shape */}
          <clipPath id='inner-shield-clip' clipPathUnits='objectBoundingBox'>
            <path d='M0.5,0 L1,0.15 V0.6 C1,0.85 0.5,1 0.5,1 C0.5,1 0,0.85 0,0.6 V0.15 Z' />
          </clipPath>
        </defs>
      </svg>

      {/* TITLE */}
      <div className='relative z-20 w-full px-6 mb-8 flex flex-col items-center'>
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
          <h2 className='text-sm md:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-3'>
            Honoring Excellence
          </h2>
          <h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight 
          bg-gradient-to-r from-[#DE8710] via-[#FFCB66] via-[#F9AF22] via-[#FFCA67] to-[#E2901A] 
          bg-clip-text text-transparent 
          inline-block uppercase 
          drop-shadow-[0_2px_2px_rgba(148,148,148,0.3)]'
          >
            Student Achievements
          </h1>
        </motion.div>
      </div>

      {/* CAROUSEL */}
      <div className='relative w-full z-10 my-4'>
        {/* Horizontal Strip Background - Centered behind active card */}
        <div className='absolute top-1/2 left-0 w-full h-[280px] md:h-[320px] -translate-y-[45%] bg-[#006b3d] shadow-inner border-y border-[#FABA1E]/20 z-0' />

        <Carousel
          setApi={setEmblaApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            loop: true,
            align: 'center',
            containScroll: false,
            startIndex: studentAchievements.length * 1 + 2
          }}
          className='w-full z-10'
        >
          <CarouselContent className='-ml-4 md:-ml-8 items-center py-10'>
            {[...studentAchievements, ...studentAchievements, ...studentAchievements].map((item, index) => {
              const isActive = index === selectedIndex

              return (
                <CarouselItem
                  key={`${item.id}-${index}`}
                  className='pl-4 md:pl-8 basis-[85%] md:basis-[45%] lg:basis-[30%] flex justify-center'
                >
                  <div className='relative h-[550px] md:h-[620px] flex items-center justify-center w-full perspective-1000'>
                    <motion.div
                      className={cn(
                        'relative transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
                        'flex flex-col items-center',
                        'w-[340px] h-[440px] md:w-[400px] md:h-[500px]', // Fixed dimensions
                        isActive
                          ? 'scale-105 z-20 drop-shadow-[0_20px_50px_rgba(250,186,30,0.3)]'
                          : 'scale-90 opacity-60 grayscale-[0.8] z-0 drop-shadow-xl'
                      )}
                      animate={{
                        scale: isActive ? 1.05 : 0.9,
                        opacity: isActive ? 1 : 0.6
                      }}
                      initial={false}
                    >
                      {/* --- THE CARD CONTAINER --- */}
                      <div className='relative w-full h-full'>
                        {/* 1. Main Background Shape (Clipped) */}
                        <div
                          className='absolute inset-0 bg-gradient-to-b from-[#0e5c36] to-[#003820] z-10'
                          style={{ clipPath: 'url(#big-shield-clip)' }}
                        >
                          {/* Interior Texture/Pattern */}
                          <div className="absolute inset-0 bg-[url('https://lhbs.edu.vn/wp-content/themes/lhbs/assets/images/bg-pattern.png')] bg-cover opacity-10 mix-blend-overlay" />

                          {/* Faint side Laurels Background (Watermark) */}
                          <div className='absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-10 pointer-events-none'>
                            {/* Just faint graphic placeholders or gradients */}
                          </div>
                        </div>

                        {/* 2. Main Golden Border Outline (SVG Overlay) */}
                        <svg
                          viewBox='0 0 100 100'
                          className='absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-[0_0_15px_rgba(250,186,30,0.8)]'
                          preserveAspectRatio='none'
                        >
                          <path
                            d='M0,5 C30,0 70,0 100,5 V55 C100,80 50,100 50,100 C50,100 0,80 0,55 Z'
                            fill='none'
                            stroke='#FABA1E'
                            strokeWidth='1.5'
                            vectorEffect='non-scaling-stroke'
                          />
                          {/* Inner thin line */}
                          <path
                            d='M3,8 C31,3 69,3 97,8 V55 C97,78 50,97 50,97 C50,97 3,78 3,55 Z'
                            fill='none'
                            stroke='#FABA1E'
                            strokeWidth='0.5'
                            opacity='0.5'
                            vectorEffect='non-scaling-stroke'
                          />
                        </svg>

                        {/* 3. Card Content */}
                        <div className='absolute inset-0 z-30 flex flex-col items-center pt-8 md:pt-10 pb-12 px-6'>
                          {/* Top Logo - Faded White */}
                          <div className='mb-6'>
                            <img src='/images/base/logo-head.png' alt='LHBS' className='h-10 md:h-12' />
                          </div>

                          {/* Center Visual: Inner Shield + Photo */}
                          <div className='relative w-40 h-48 md:w-48 md:h-56 mb-auto flex items-center justify-center'>
                            {/* Side Wreaths (Green/Gold) */}
                            <svg
                              className='absolute -left-12 top-1/2 -translate-y-1/2 h-[90%] w-auto text-[#0a4a2e] drop-shadow-sm opacity-50'
                              viewBox='0 0 50 100'
                              fill='currentColor'
                            >
                              <path d='M40,100 C10,70 0,40 20,0 C30,20 25,60 40,100 Z' />
                              {/* Stylized leaves */}
                              <circle cx='10' cy='20' r='5' />
                              <circle cx='15' cy='40' r='6' />
                              <circle cx='10' cy='60' r='5' />
                              <circle cx='20' cy='80' r='4' />
                            </svg>
                            <svg
                              className='absolute -right-12 top-1/2 -translate-y-1/2 h-[90%] w-auto text-[#0a4a2e] drop-shadow-sm opacity-50 scale-x-[-1]'
                              viewBox='0 0 50 100'
                              fill='currentColor'
                            >
                              <path d='M40,100 C10,70 0,40 20,0 C30,20 25,60 40,100 Z' />
                              <circle cx='10' cy='20' r='5' />
                              <circle cx='15' cy='40' r='6' />
                              <circle cx='10' cy='60' r='5' />
                              <circle cx='20' cy='80' r='4' />
                            </svg>

                            {/* Inner Photo Container */}
                            <div className='relative w-full h-full p-1.5'>
                              {/* Photo Mask */}
                              <div className='w-full h-full bg-white' style={{ clipPath: 'url(#inner-shield-clip)' }}>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className='w-full h-full object-cover object-top'
                                />
                              </div>
                              {/* Photo Border */}
                              <svg
                                viewBox='0 0 100 100'
                                className='absolute inset-1.5 w-full h-full pointer-events-none z-20'
                                preserveAspectRatio='none'
                              >
                                <path
                                  d='M50,0 L100,15 V60 C100,85 50,100 50,100 C50,100 0,85 0,60 V15 Z'
                                  fill='none'
                                  stroke='#FABA1E'
                                  strokeWidth='3'
                                  vectorEffect='non-scaling-stroke'
                                  className='drop-shadow-md'
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Bottom Text */}
                          <div className='text-center w-full mt-4 flex flex-col items-center justify-end h-32 md:h-36 pb-4'>
                            <p
                              className='text-white text-2xl md:text-3xl italic mb-1 drop-shadow-md'
                              style={{ fontFamily: '"Great Vibes", cursive' }}
                            >
                              Chúc mừng
                            </p>
                            {/* Fallback font if Google Font not loaded: Serif Italic */}
                            <style>{`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}</style>

                            <h3 className='font-black text-[#FABA1E] uppercase leading-[0.9] mb-2 font-[SVN-Gotham] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide text-2xl md:text-[28px]'>
                              {item.name}
                            </h3>

                            <div className='w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FABA1E] to-transparent mb-2 opacity-70' />

                            <p className='text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight line-clamp-2 max-w-[80%] drop-shadow-sm'>
                              {item.achievement}
                            </p>

                            <div className='mt-3 text-[#FABA1E]/50 text-[8px] tracking-[0.3em] font-medium uppercase'>
                              lhbs.edu.vn
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
