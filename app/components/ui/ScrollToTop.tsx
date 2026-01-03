import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronUp, MessageCircle, Phone } from 'lucide-react'

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

interface CTAButton {
  id: string
  label: string
  icon: React.ReactNode
  onClick?: () => void
  href?: string
  className: string
  ariaLabel: string
  isExternal?: boolean
}

interface CTABottomFixedProps {
  zaloUrl?: string
  messengerUrl?: string
  showScrollTop?: boolean
  scrollThreshold?: number
}

const DEFAULT_PROPS = {
  zaloUrl: 'https://zalo.me/your-zalo-id',
  messengerUrl: 'https://m.me/your-messenger-id',
  showScrollTop: true,
  scrollThreshold: 300
} as const

// ============================================================================
// COMPONENT
// ============================================================================

export default function CTABottomFixed({
  zaloUrl = DEFAULT_PROPS.zaloUrl,
  messengerUrl = DEFAULT_PROPS.messengerUrl,
  showScrollTop = DEFAULT_PROPS.showScrollTop,
  scrollThreshold = DEFAULT_PROPS.scrollThreshold
}: CTABottomFixedProps) {
  const [isScrollVisible, setIsScrollVisible] = useState(false)

  // ========================================
  // HANDLERS
  // ========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  // ========================================
  // EFFECTS
  // ========================================

  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrollVisible(window.pageYOffset > scrollThreshold)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [scrollThreshold])

  // ========================================
  // BUTTON CONFIGURATIONS
  // ========================================

  // Top buttons - Zalo & Messenger (square, edge-aligned)
  const topButtons: CTAButton[] = [
    {
      id: 'zalo',
      label: 'Chat Zalo',
      icon: <Phone className="w-5 h-5" />,
      href: zaloUrl,
      className: 'bg-[#FABA1E] text-[#005C42] shadow-lg hover:shadow-xl',
      ariaLabel: 'Chat on Zalo',
      isExternal: true
    },
    {
      id: 'messenger',
      label: 'Chat Messenger',
      icon: <MessageCircle className="w-5 h-5" />,
      href: messengerUrl,
      className: 'bg-[#FABA1E] text-[#005C42] shadow-lg hover:shadow-xl',
      ariaLabel: 'Chat on Messenger',
      isExternal: true
    }
  ]

  // Bottom button - Scroll to Top (rounded)
  const scrollButton: CTAButton | null = showScrollTop && isScrollVisible
    ? {
      id: 'scroll-top',
      label: 'Scroll to top',
      icon: <ChevronUp className="w-5 h-5" />,
      onClick: scrollToTop,
      className: 'bg-[#FABA1E] text-[#005C42] shadow-lg hover:shadow-2xl',
      ariaLabel: 'Scroll to top',
      isExternal: false
    }
    : null

  // ========================================
  // RENDER
  // ========================================

  return (
    <>
      {/* Top Fixed Buttons - Zalo & Messenger (Square, Edge-aligned) */}
      <div className="fixed z-69 top-1/4 -translate-y-1/2 right-0 flex flex-col gap-1 pointer-events-auto">
        {topButtons.map((button, index) => (
          <motion.a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group rounded-none! relative w-10 h-10 transition-all duration-300 
              flex items-center justify-center overflow-visible
              ${button.className}
            `}
            aria-label={button.ariaLabel}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: index * 0.1
            }}
            whileTap={{ scale: 0.95 }}
          >
            {button.icon}

            {/* Tooltip - Same yellow color as button */}
            <span className="
              absolute right-full mr-0 px-3 py-2 h-10 text-xs font-semibold whitespace-nowrap
              opacity-0 group-hover:opacity-100 pointer-events-none shadow-xl transition-all duration-200
              flex items-center
              bg-[#FABA1E] text-[#005C42]
            ">
              {button.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Bottom Fixed Button - Scroll to Top (Rounded) */}
      {scrollButton && (
        <AnimatePresence>
          <motion.div
            className="fixed bottom-4 right-3 z-69 pointer-events-auto"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.button
              onClick={scrollButton.onClick}
              className={`
                w-12 h-12 rounded-full transition-all duration-300 
                flex items-center justify-center 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FABA1E]
                ${scrollButton.className}
              `}
              aria-label={scrollButton.ariaLabel}
              title={scrollButton.label}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              {scrollButton.icon}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}

// ============================================================================
// EXPORT DEFAULT PROPS FOR DOCUMENTATION
// ============================================================================

CTABottomFixed.defaultProps = DEFAULT_PROPS