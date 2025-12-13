import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import backgroundImage from '@assets/images/home-page/section-news/Layer_5.png'

export default function NewsEventsSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Column 1: TIN TỨC (News) - 1 main image + 2 text items
  const newsItems = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      date: '06/09/2025',
      title: 'A Letter to LHBS Students on the Opening Day of the New School Year',
      link: '/news/1'
    },
    {
      date: '04/09/2025',
      title: 'LHBS Launches Professional Educational Expert Network',
      link: '/news/2'
    },
    {
      date: '29/05/2025',
      title: 'What is Bilingual Education? Benefits of Bilingual Schools',
      link: '/news/3'
    }
  ]

  // Column 2: SỰ KIỆN (Events) - 1 main image + 2 small images with titles
  const eventItems = [
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
      date: '22/04/2025',
      title: 'How Long Does the Terrible Twos Last? Parenting Tips',
      link: '/events/1'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
      title: '10 Effective Study Methods for Students',
      link: '/events/2'
    },
    {
      image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
      title: 'What is Holistic Education? Key Elements',
      link: '/events/3'
    }
  ]

  // Column 3: HÌNH ẢNH (Gallery) - 1 large image
  const galleryItem = {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    title: 'LHBS Students Engaging in Holistic Educational Activities',
    link: '/gallery/1'
  }

  return (
    <section ref={ref} className='w-full h-dvh bg-white font-sans relative overflow-hidden flex flex-col'>
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
            <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h3 className='text-xs md:text-sm lg:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-2 text-center'>
              Latest Updates
            </h3>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-tight text-center drop-shadow-sm'>
              News & Events
            </h2>
          </motion.div>
        </div>

        {/* 3 Column Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 grow h-full pt-4'>
          {/* Column 1: TIN TỨC */}
          <motion.div
            className='border-l-4 border-gray-100 pl-4 md:pl-6 flex flex-col relative group/col h-full'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='absolute -left-[4px] top-0 w-[4px] h-12 bg-[#FABA1E] group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
            <h3 className='text-xl md:text-2xl font-black text-[#1E5338] mb-4 md:mb-6 uppercase tracking-wide shrink-0'>
              News
            </h3>

            {/* Main Image Item - Fixed Aspect Ratio */}
            <div className='mb-6 cursor-pointer group shrink-0' onClick={() => onNavigate(newsItems[0].link)}>
              <div className='relative overflow-hidden rounded-sm shadow-md'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none' />
                <div className='absolute left-4 bottom-4 right-4 text-white pointer-events-none'>
                  <div className='flex items-end gap-3'>
                    <div className='text-white/90 font-black text-4xl leading-none'>
                      {newsItems[0].date.split('/')[0]}
                      <span className='block text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1'>
                        {newsItems[0].date.split('/').slice(1).join('-')}
                      </span>
                    </div>
                    <h4 className='text-sm md:text-base font-bold leading-tight line-clamp-2 drop-shadow-md group-hover:text-[#FABA1E] transition-colors mb-1'>
                      {newsItems[0].title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* List Items - Flexible Height */}
            <div className='flex flex-col gap-4 mb-6 grow'>
              {newsItems.slice(1).map((item, index) => (
                <div
                  key={index}
                  className='p-3 cursor-pointer bg-gray-50 border border-gray-100 hover:border-[#1E5338]/20 hover:bg-[#FABA1E]/10 transition-all rounded-sm group/item grow flex items-center'
                  onClick={() => onNavigate(item.link)}
                >
                  <div className='flex items-center gap-4 w-full'>
                    <div className='flex flex-col items-center shrink-0 text-[#1E5338]/80 w-14'>
                      <span className='text-3xl font-black leading-none'>{item.date.split('/')[0]}</span>
                      <span className='text-[10px] font-bold uppercase tracking-wider text-gray-400'>
                        {item.date.split('/').slice(1).join('-')}
                      </span>
                    </div>
                    <h4 className='text-sm font-bold text-[#1E5338] line-clamp-2 group-hover/item:text-[#FABA1E] transition-colors leading-snug'>
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className='mt-auto pt-2 shrink-0'>
              <button
                onClick={() => onNavigate('/news')}
                className='flex items-center gap-3 px-6 py-2.5 bg-[#1E5338] text-white font-bold uppercase tracking-wide text-xs rounded-full hover:bg-[#FABA1E] hover:text-[#1E5338] transition-all shadow-lg group/btn'
              >
                <span>View More</span>
                <ArrowRight className='w-3.5 h-3.5' />
              </button>
            </div>
          </motion.div>

          {/* Column 2: SỰ KIỆN */}
          <motion.div
            className='border-l-4 border-gray-100 pl-4 md:pl-6 flex flex-col relative group/col h-full'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='absolute -left-[4px] top-0 w-[4px] h-12 bg-[#FABA1E] group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
            <h3 className='text-xl md:text-2xl font-black text-[#1E5338] mb-4 md:mb-6 uppercase tracking-wide shrink-0'>
              Events
            </h3>

            {/* Main Image Item - Fixed Aspect Ratio */}
            <div className='mb-6 cursor-pointer group shrink-0' onClick={() => onNavigate(eventItems[0].link)}>
              <div className='relative overflow-hidden rounded-sm shadow-md'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={eventItems[0].image}
                    alt={eventItems[0].title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none' />
                <div className='absolute left-4 bottom-4 right-4 text-white pointer-events-none'>
                  <div className='flex items-end gap-3'>
                    <div className='text-white/90 font-black text-4xl leading-none'>
                      {(eventItems[0].date || '01/01').split('/')[0]}
                      <span className='block text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1'>
                        {(eventItems[0].date || '01/01/2025').split('/').slice(1).join('-')}
                      </span>
                    </div>
                    <h4 className='text-sm md:text-base font-bold leading-tight line-clamp-2 drop-shadow-md group-hover:text-[#FABA1E] transition-colors mb-1'>
                      {eventItems[0].title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* List Items (Small Images) - Flexible Height */}
            <div className='grid grid-cols-2 gap-4 mb-6 grow content-start'>
              {eventItems.slice(1).map((item, index) => (
                <div
                  key={index}
                  className='cursor-pointer group/item flex flex-col h-full'
                  onClick={() => onNavigate(item.link)}
                >
                  <div className='relative overflow-hidden w-full aspect-video rounded-sm mb-3 shadow-sm'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110'
                    />
                  </div>
                  <div className='shrink-0'>
                    <h4 className='text-xs font-bold text-[#1E5338] line-clamp-3 group-hover/item:text-[#FABA1E] transition-colors uppercase leading-tight'>
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className='mt-auto pt-2 shrink-0'>
              <button
                onClick={() => onNavigate('/events')}
                className='flex items-center gap-3 px-6 py-2.5 bg-[#1E5338] text-white font-bold uppercase tracking-wide text-xs rounded-full hover:bg-[#FABA1E] hover:text-[#1E5338] transition-all shadow-lg group/btn'
              >
                <span>View More</span>
                <ArrowRight className='w-3.5 h-3.5' />
              </button>
            </div>
          </motion.div>

          {/* Column 3: HÌNH ẢNH - Full Height */}
          <motion.div
            className='border-l-4 border-gray-100 pl-4 md:pl-6 flex flex-col relative group/col h-full'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className='absolute -left-[4px] top-0 w-[4px] h-12 bg-[#FABA1E] group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
            <h3 className='text-xl md:text-2xl font-black text-[#1E5338] mb-4 md:mb-6 uppercase tracking-wide shrink-0'>
              Gallery
            </h3>

            {/* Large Image - Takes remaining height */}
            <div
              className='cursor-pointer group grow flex flex-col mb-4 relative'
              onClick={() => onNavigate(galleryItem.link)}
            >
              <div className='relative overflow-hidden rounded-sm shadow-md w-full grow'>
                <img
                  src={galleryItem.image}
                  alt={galleryItem.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />

                {/* Gallery Icon Overlay */}
                <div className='absolute bottom-4 right-4 bg-black/40 p-2 rounded-lg backdrop-blur-xs'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6 text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title Below Image */}
            <h4
              className='text-base font-bold text-[#1E5338] leading-tight drop-shadow-sm group-hover:text-[#FABA1E] transition-colors mb-6 cursor-pointer'
              onClick={() => onNavigate(galleryItem.link)}
            >
              {galleryItem.title}
            </h4>

            {/* View More Button */}
            <div className='mt-auto pt-2 shrink-0'>
              <button
                onClick={() => onNavigate('/gallery')}
                className='flex items-center gap-3 px-6 py-2.5 bg-[#1E5338] text-white font-bold uppercase tracking-wide text-xs rounded-full hover:bg-[#FABA1E] hover:text-[#1E5338] transition-all shadow-lg group/btn'
              >
                <span>View More</span>
                <ArrowRight className='w-3.5 h-3.5' />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
