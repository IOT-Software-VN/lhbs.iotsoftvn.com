import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router'
import { siteNavigation, schoolWebsites } from '@/types/navigation'
import type { NavItem } from '@/types/navigation'
import { ChevronRight, ArrowRight, ExternalLink, Newspaper } from 'lucide-react'

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (path: string) => void
  currentPath: string
}

export function FullScreenMenu({ isOpen, onClose, onNavigate, currentPath }: FullScreenMenuProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  const handleNavClick = (path: string) => {
    onNavigate(path)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className='fixed inset-0 z-[60] bg-black/50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Desktop Layout */}
          {!isMobile ? (
            <motion.div
              className='fixed left-0 right-0 z-[70] bg-[#1a5336] overflow-hidden'
              style={{
                top: 'calc(72px + 2rem)',
                maxHeight: 'calc(100vh - 72px - 4rem)',
                minHeight: 'auto'
              }}
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className='max-w-[1440px] mx-auto px-12 py-6 pb-10 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff33] scrollbar-track-transparent'>
                <div className='flex gap-10'>
                  {/* Left Column - Main Navigation (55% width) */}
                  <div className='w-[55%] pr-10 border-r border-white/20'>
                    <h3 className='text-white/60 text-sm uppercase tracking-wider mb-4'>Điều hướng chính</h3>
                    <nav className='grid grid-cols-2 gap-x-5 gap-y-2.5' aria-label='Main navigation'>
                      {siteNavigation.map((item, index) => (
                        <motion.button
                          key={item.id}
                          onClick={() => handleNavClick(item.path)}
                          className={`group text-left py-3.5 px-5 rounded-lg transition-all ${
                            currentPath === item.path
                              ? 'bg-[#FABA1E]/20 text-[#FABA1E] border border-[#FABA1E]/40'
                              : 'text-white hover:bg-white/5 hover:text-white border border-white/10 hover:border-white/20'
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <div className='flex items-center justify-between gap-4S'>
                            <div className='flex-1 min-w-0'>
                              <div className='text-base font-bold leading-snug tracking-tight'>{item.label}</div>
                            </div>
                            <ChevronRight className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0' />
                          </div>
                        </motion.button>
                      ))}
                    </nav>
                  </div>

                  {/* Right Column - School Websites (45% width) */}
                  <div className='w-[45%]'>
                    <h3 className='text-white/50 text-sm uppercase tracking-wider mb-4'>Website các cấp học</h3>
                    <nav className='space-y-3' aria-label='School websites'>
                      {schoolWebsites.map((site, index) => (
                        <motion.a
                          key={index}
                          href={site.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group flex items-center gap-4 p-4 px-8 !rounded-md bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-[#FABA1E]/40'
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        >  
                          {/* Content - left aligned */}
                          <div className='flex-1 min-w-0'>
                            <h4 className='text-white/90 font-semibold text-[15px] leading-tight mb-1 group-hover:text-[#FABA1E] transition-colors'>
                              {site.label}
                            </h4>
                            {site.description && (
                              <p className='text-white/40 text-xs leading-relaxed mb-2'>{site.description}</p>
                            )}
                            {site.hasNews && (
                              <div className='inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#FABA1E]/10 border border-[#FABA1E]/30'>
                                <Newspaper className='w-3 h-3 text-[#FABA1E]' />
                                <span className='text-[10px] text-[#FABA1E] font-semibold uppercase tracking-wide'>Tin tức</span>
                              </div>
                            )}
                          </div>
                                                    {/* Icon - căn giữa theo chiều dọc */}
                          <div className='flex-shrink-0'>
                            <div className='w-10 h-10 rounded-full bg-[#FABA1E]/20 group-hover:bg-[#FABA1E]/30 transition-colors flex items-center justify-center'>
                              <ExternalLink className='w-5 h-5 text-[#FABA1E] group-hover:scale-110 transition-transform' />
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </nav>

                    {/* Info Box */}
                    <motion.div
                      className='mt-4 p-3.5 rounded-md bg-[#FABA1E]/10 border border-[#FABA1E]/30'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <p className='text-white/70 text-xs leading-relaxed'>
                        <strong className='text-[#FABA1E] font-semibold'>Lưu ý:</strong> Tin tức và sự kiện được cập nhật trên từng website cấp học tương ứng.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className='w-full h-[52px] bg-[#3a8f66] flex items-center justify-center'>
                <div className='flex items-center gap-3'>
                  <span className='text-white text-sm'>Hệ thống giáo dục song ngữ LHBS</span>
                  <button
                    className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white'
                    aria-label='Tìm hiểu thêm'
                  >
                    <ArrowRight className='w-4 h-4 text-white' />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Mobile Layout */
            <motion.div
              className='fixed left-0 right-0 bottom-0 z-[70] bg-[#1a5336] overflow-y-auto'
              style={{ top: 'calc(72px + 0.5rem)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className='p-6'>
                {/* Main Navigation */}
                <h3 className='text-white/60 text-xs uppercase tracking-wider mb-4'>Điều hướng</h3>
                <nav className='space-y-2.5 mb-8'>
                  {siteNavigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.path)}
                      className={`w-full text-left py-3.5 px-4 rounded-lg transition-all ${
                        currentPath === item.path
                          ? 'bg-[#FABA1E]/20 text-[#FABA1E] border border-[#FABA1E]/40'
                          : 'text-white/80 hover:bg-white/5 hover:text-white border border-white/10'
                      }`}
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex-1 min-w-0'>
                          <div className='text-sm font-semibold mb-1 leading-snug'>{item.label}</div>
                          {item.description && (
                            <div className='text-xs text-white/40 line-clamp-1 leading-relaxed'>{item.description}</div>
                          )}
                        </div>
                        <ChevronRight className='w-4 h-4 ml-2 shrink-0 mt-0.5' />
                      </div>
                    </button>
                  ))}
                </nav>

                {/* School Websites - Mobile */}
                <div className='pt-6 border-t border-white/20'>
                  <h3 className='text-white/60 text-xs uppercase tracking-wider mb-4'>Website các cấp học</h3>
                  <div className='space-y-3'>
                    {schoolWebsites.map((site, index) => (
                      <a
                        key={index}
                        href={site.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10'
                      >
                        <div className='flex items-start justify-between gap-3 mb-2.5'>
                          <h4 className='text-white font-semibold text-sm flex-1 leading-snug'>{site.label}</h4>
                          <ExternalLink className='w-4 h-4 text-white/40 shrink-0 mt-0.5' />
                        </div>
                        {site.description && (
                          <p className='text-white/50 text-xs mb-2.5 leading-relaxed'>{site.description}</p>
                        )}
                        {site.hasNews && (
                          <div className='flex items-center gap-2 pt-2.5 border-t border-white/10'>
                            <Newspaper className='w-3.5 h-3.5 text-[#FABA1E]/70' />
                            <span className='text-xs text-[#FABA1E]/90 font-medium'>Xem tin tức & sự kiện</span>
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Strip - Mobile */}
              <div className='sticky bottom-0 h-[52px] bg-[#3a8f66] flex items-center justify-center px-6'>
                <div className='flex items-center gap-2'>
                  <span className='text-white text-xs'>Hệ thống giáo dục LHBS</span>
                  <button
                    className='w-7 h-7 rounded-full bg-white/20 flex items-center justify-center'
                    aria-label='Tìm hiểu thêm'
                  >
                    <ArrowRight className='w-3 h-3 text-white' />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  )
}
