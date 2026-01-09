'use client'

import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const logoImage = '/images/base/logo-head.png'
import { useState, useEffect } from 'react'

interface StickyHeaderProps {
  scrolled: boolean
  onMenuClick: () => void
  onMenuClose: () => void
  menuOpen: boolean
}

export function StickyHeader({ scrolled, onMenuClick, onMenuClose, menuOpen }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }

  const handleEnquireClick = () => {
    router.push('/admissions/apply-now')
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    const controlHeaderVisibility = () => {
      const currentScrollY = window.scrollY

      if (menuOpen) {
        setIsVisible(true)
        lastScrollY = currentScrollY
        return
      }

      const foundingSection = document.getElementById('founding-message-section')
      if (foundingSection) {
        const rect = foundingSection.getBoundingClientRect()

        if (rect.top <= 100 && rect.bottom > 100) {
          setIsVisible(false)
          lastScrollY = currentScrollY
          return
        }
      }

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', controlHeaderVisibility)
    return () => window.removeEventListener('scroll', controlHeaderVisibility)
  }, [menuOpen])

  const isTransparent = !scrolled && !menuOpen

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 mb-2${isTransparent ? 'py-2' : 'py-1'} ${
        menuOpen ? 'shadow-none' : ''
      }`}
      style={{ minHeight: '66px' }}
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : '-100%',
        backgroundColor: isTransparent
          ? 'rgba(1, 92, 52, 0)'
          : menuOpen
            ? 'rgba(1, 92, 52, 1)'
            : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isTransparent ? 'blur(0px)' : 'blur(10px)'
      }}
      transition={{
        y: { duration: 0.3, ease: 'easeInOut' },
        backgroundColor: { duration: 0.3 },
        backdropFilter: { duration: 0.3 }
      }}
    >
      <div className='h-full w-full px-4 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-2 md:gap-8 py-2 md:py-4'>
        {/* Logo - Left (Desktop) / Bottom Center (Mobile) */}

        <motion.div
          onClick={handleLogoClick}
          className={`shrink-0 cursor-pointer w-full flex justify-center md:w-auto md:block ${
            isTransparent
              ? 'focus:ring-offset-brand-green-dark'
              : menuOpen
                ? 'focus:ring-offset-brand-green-dark'
                : 'focus:ring-offset-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label='Go to homepage'
        >
          <div className='relative h-20 md:h-28 w-auto aspect-[3/1]'>
            <Image
              src={logoImage}
              alt='LHBS - Lac Hong Bilingual School'
              fill
              className='object-contain object-left'
              sizes='(max-width: 768px) 250px, 400px'
              priority
            />
          </div>
        </motion.div>
        {/* Right - Actions (Desktop) / Top Right (Mobile) */}
        <div className='w-full flex justify-end md:w-auto items-center gap-3'>
          {/* Primary CTA Button - Apply Now */}
          <motion.button
            onClick={handleEnquireClick}
            className={`rounded-full flex items-center justify-center px-4 md:px-6 h-10 md:h-12 bg-brand-gold text-brand-green-dark font-bold uppercase text-xs md:text-sm tracking-wider hover:bg-brand-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
              isTransparent
                ? 'focus:ring-offset-brand-green-dark'
                : menuOpen
                  ? 'focus:ring-offset-brand-green-dark'
                  : 'focus:ring-offset-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ĐĂNG KÝ NGAY
          </motion.button>

          {/* Menu Icon */}
          <motion.button
            onClick={menuOpen ? onMenuClose : onMenuClick}
            className={`p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
              isTransparent
                ? 'text-white hover:text-brand-gold focus:ring-offset-brand-green-dark'
                : menuOpen
                  ? 'text-white hover:text-brand-gold focus:ring-offset-brand-green-dark'
                  : 'text-brand-green-dark hover:text-brand-gold focus:ring-offset-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
