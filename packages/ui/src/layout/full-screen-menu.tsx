'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { siteNavigation, moreLinks } from './navigation'
import type { NavParent } from './navigation'
import { ChevronRight, ArrowRight, ExternalLink } from 'lucide-react'

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (path: string) => void
  currentPath: string
}

export function FullScreenMenu({ isOpen, onClose, onNavigate, currentPath }: FullScreenMenuProps) {
  const [activeParent, setActiveParent] = useState<NavParent | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

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

  const handleParentClick = (parent: NavParent) => {
    if (activeParent?.id === parent.id) {
      setActiveParent(null)
    } else {
      setActiveParent(parent)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className='fixed inset-0 z-70 bg-black/50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Desktop Layout */}
          {!isMobile ? (
            <motion.div
              className='fixed left-0 right-0 z-71 bg-brand-green-dark overflow-hidden'
              style={{
                top: 'calc(72px + 3rem)',
                maxHeight: 'calc(100vh - 72px - 4rem)',
                minHeight: 'auto'
              }}
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Wrapper có thể cuộn toàn phần nếu cần */}
              <div className='max-w-[1440px] mx-auto px-12 py-8 pb-16 flex gap-12 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff33] scrollbar-track-transparent'>
                {/* Column 1 - Primary Navigation */}
                <div className='w-[40%] border-r border-white/20 pr-10 overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff33] scrollbar-track-transparent'>
                  <nav className='space-y-6' aria-label='Main sections'>
                    {siteNavigation.map((parent) => (
                      <button
                        key={parent.id}
                        onClick={() => handleParentClick(parent)}
                        className={`block w-full text-left text-[32px] md:text-[36px] uppercase tracking-wide transition-all group whitespace-normal wrap-break-word leading-snug ${
                          activeParent?.id === parent.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        {parent.id === 'education-program' ? (
                          <>
                            Chương trình
                            <br />
                            Đào tạo
                          </>
                        ) : (
                          parent.label
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Column 2 - Active Section Submenu */}
                <div className='w-[30%] border-r border-white/20 pr-12 overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff33] scrollbar-track-transparent'>
                  {activeParent && (
                    <div>
                      {/* Title without link - just display text */}
                      <h3 className='text-white text-[18px] mb-3 font-semibold capitalize'>{activeParent.label}</h3>

                      <nav className='space-y-3 mb-6' aria-label={`${activeParent.label} pages`}>
                        {/* Child pages */}
                        {activeParent.children.map((child) =>
                          child.isExternal && child.url ? (
                            <a
                              key={child.id}
                              href={child.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='block w-full text-left text-[15px] text-white hover:text-brand-gold transition-colors group'
                            >
                              <div className='flex items-center justify-between'>
                                <span className='truncate'>{child.label}</span>
                                <ExternalLink className='w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity' />
                              </div>
                            </a>
                          ) : (
                            <button
                              key={child.id}
                              onClick={() => handleNavClick(child.path!)}
                              className={`block w-full text-left text-[15px] transition-colors group ${
                                currentPath === child.path ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                              }`}
                            >
                              <div className='flex items-center justify-between'>
                                <span className='truncate'>{child.label}</span>
                                <ChevronRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                              </div>
                            </button>
                          )
                        )}
                      </nav>
                    </div>
                  )}
                </div>

                {/* Column 3 - Discover More & School Links */}
                <div className='w-[30%] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff33] scrollbar-track-transparent'>
                  <h3 className='text-white/60 text-[14px] uppercase tracking-wider mb-6'>Khám phá thêm</h3>
                  <nav className='space-y-3 mb-8' aria-label='Additional pages'>
                    {moreLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(link.path)}
                        className='block w-full text-left text-[15px] text-white hover:text-brand-gold transition-colors group'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='truncate'>{link.label}</span>
                          <ChevronRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Bottom Cyan Strip */}
              <div className='w-full h-[52px] bg-[#3a8f66] flex items-center justify-center mt-4'>
                <div className='flex items-center gap-3'>
                  <span className='text-white text-sm'>
                    {/* Cập nhật tiếng Việt ở đây */}
                    <a href=''>Trực thuộc Hệ thống Giáo dục Song ngữ LHBS</a>
                  </span>
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
            <motion.div
              className='fixed left-0 right-0 bottom-0 z-70 bg-brand-green-dark overflow-y-auto'
              style={{ top: 'calc(72px + 2.5rem)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className='p-6'>
                {/* Main Sections */}
                <nav className='space-y-2'>
                  {siteNavigation.map((parent) => (
                    <div key={parent.id} className=''>
                      <button
                        onClick={() => setExpandedMobile(expandedMobile === parent.id ? null : parent.id)}
                        className='w-full text-left py-4  text-[24px] text-white flex items-center justify-between'
                      >
                        {parent.id === 'education-program' ? <span>Chương trình Đào tạo</span> : parent.label}
                        <motion.div
                          animate={{ rotate: expandedMobile === parent.id ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className='w-6 h-6' />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedMobile === parent.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className='overflow-hidden pb-4'
                          >
                            <div className='space-y-2 pl-4'>
                              {parent.children.map((child) =>
                                child.isExternal && child.url ? (
                                  <a
                                    key={child.id}
                                    href={child.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center justify-between w-full py-2 text-[15px] text-white/80 hover:text-white'
                                  >
                                    <span>{child.label}</span>
                                    <ExternalLink className='w-4 h-4 opacity-60' />
                                  </a>
                                ) : (
                                  <button
                                    key={child.id}
                                    onClick={() => handleNavClick(child.path!)}
                                    className={`block w-full text-left py-2  text-[15px] ${
                                      currentPath === child.path ? 'text-brand-gold' : 'text-white/80 hover:text-white'
                                    }`}
                                  >
                                    {child.label}
                                  </button>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* Discover More - Mobile */}
                <div className='mt-8 pt-8 border-t border-white/20'>
                  <h3 className=' text-white/60 text-sm uppercase tracking-wider mb-4'>Khám phá thêm</h3>
                  <div className='space-y-2'>
                    {moreLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(link.path)}
                        className='block w-full text-left py-2  text-[15px] text-white/80 hover:text-white'
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Strip - Mobile */}
              <div className='sticky bottom-0 h-[52px] bg-[#3a8f66] flex items-center justify-center px-6'>
                <div className='flex items-center gap-2'>
                  <span className=' text-white text-xs'>LHBS Education Community</span>
                  <button
                    className='w-7 h-7 rounded-full bg-white/20 flex items-center justify-center'
                    aria-label='Learn more'
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
