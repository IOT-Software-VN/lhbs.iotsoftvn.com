import { motion } from 'motion/react'
import { Search, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import logoImage from '@assets/images/base/logo-head.png'
import { useState, useEffect } from 'react'

interface StickyHeaderProps {
  scrolled: boolean
  onMenuClick: () => void
  onMenuClose: () => void
  menuOpen: boolean
}

export default function StickyHeader({ scrolled, onMenuClick, onMenuClose, menuOpen }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleEnquireClick = () => {
    // Handle enquire/apply now action
    navigate('/admissions/apply-now')
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    const controlHeaderVisibility = () => {
      const currentScrollY = window.scrollY

      // Always show header when menu is open
      if (menuOpen) {
        setIsVisible(true)
        lastScrollY = currentScrollY
        return
      }

      // Priority 2: Check if FoundingMessageSection is covering the header area
      const foundingSection = document.getElementById('founding-message-section')
      if (foundingSection) {
        const rect = foundingSection.getBoundingClientRect()
        // If the top of the section is near the top of the viewport (or above it)
        // AND the bottom of the section is still below the header area.
        // This means the user is currently looking at this section.
        if (rect.top <= 100 && rect.bottom > 100) {
          setIsVisible(false)
          lastScrollY = currentScrollY
          return
        }
      }

      // Priority 3: Show/Hide based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header if scrolling down and past threshold
        setIsVisible(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', controlHeaderVisibility)
    return () => window.removeEventListener('scroll', controlHeaderVisibility)
  }, [menuOpen])

  // Determine if header should be transparent (at top with menu closed)
  const isTransparent = !scrolled && !menuOpen

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 mb-2${
        isTransparent ? 'py-2' : 'py-1'
      } ${menuOpen ? 'shadow-none' : ''}`}
      style={{ minHeight: '66px' }}
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : '-100%',
        backgroundColor: isTransparent
          ? 'rgba(26, 83, 54, 0)'
          : menuOpen
            ? 'rgba(26, 83, 54, 1)'
            : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isTransparent ? 'blur(0px)' : 'blur(10px)'
      }}
      transition={{
        y: { duration: 0.3, ease: 'easeInOut' },
        backgroundColor: { duration: 0.3 },
        backdropFilter: { duration: 0.3 }
      }}
    >
      <div className='h-full w-full px-4 md:px-10 flex items-center justify-between gap-8  py-4'>
        {/* Logo - Left */}
        <motion.div
          onClick={handleLogoClick}
          className={`shrink-0 cursor-pointer ${
            isTransparent
              ? 'focus:ring-offset-[#1a5336]'
              : menuOpen
                ? 'focus:ring-offset-[#1a5336]'
                : 'focus:ring-offset-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label='Go to homepage'
        >
          <img src={logoImage} alt='LHBS - Lac Hong Bilingual School' className='h-24 w-auto rounded-none' />
        </motion.div>

        {/* Right - Actions */}
        <div className='flex items-center gap-3'>
          {/* Primary CTA Button - Apply Now */}
          <motion.button
            onClick={handleEnquireClick}
            className={`rounded-full flex items-center justify-center px-6 h-12 bg-[#FABA1E] text-[#1a5336] font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 ${
              isTransparent
                ? 'focus:ring-offset-[#1a5336]'
                : menuOpen
                  ? 'focus:ring-offset-[#1a5336]'
                  : 'focus:ring-offset-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply Now
          </motion.button>

          {/* Menu Icon */}
          <motion.button
            onClick={menuOpen ? onMenuClose : onMenuClick}
            className={`p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 ${
              isTransparent
                ? 'text-white hover:text-[#FABA1E] focus:ring-offset-[#1a5336]'
                : menuOpen
                  ? 'text-white hover:text-[#FABA1E] focus:ring-offset-[#1a5336]'
                  : 'text-[#1a5336] hover:text-[#FABA1E] focus:ring-offset-white'
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
