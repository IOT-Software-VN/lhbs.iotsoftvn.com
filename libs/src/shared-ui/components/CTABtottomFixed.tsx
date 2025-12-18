import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronUp } from 'lucide-react'
import ZaloIcon from '../../../assets/icons/zalo-chat-new.svg'
import MessengerIcon from '../../../assets/icons/facebook-chat-new.svg'

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

export function CTABottomFixed({
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

  const buttons: CTAButton[] = [
    // Scroll to Top (conditional)
    ...(showScrollTop && isScrollVisible
      ? [
          {
            id: 'scroll-top',
            label: 'Scroll to top',
            icon: <ChevronUp className="w-7 h-7 transition-transform" />,
            onClick: scrollToTop,
            className: 'bg-[#FABA1E] hover:bg-[#e5a812] text-[#1a5336] shadow-lg hover:shadow-xl',
            ariaLabel: 'Scroll to top',
            isExternal: false
          }
        ]
      : []),

    // Zalo
    {
      id: 'zalo',
      label: 'Chat Zalo',
      icon: <img src={ZaloIcon} alt="Zalo" className="w-full h-full object-contain" />,
      href: zaloUrl,
      className: 'bg-transparent shadow-md hover:shadow-lg',
      ariaLabel: 'Chat on Zalo',
      isExternal: true
    },

    // Messenger
    {
      id: 'messenger',
      label: 'Chat Messenger',
      icon: <img src={MessengerIcon} alt="Messenger" className="w-10 h-10" />,
      href: messengerUrl,
      className: 'bg-[#0A7CFF] hover:bg-[#0868d8] shadow-md hover:shadow-lg',
      ariaLabel: 'Chat on Messenger',
      isExternal: true
    }
  ]

  // ========================================
  // RENDER
  // ========================================

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-auto">
      {buttons.map((button, index) => {
        const commonClasses = `
          w-16 h-16 rounded-full transition-all duration-300 
          flex items-center justify-center 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FABA1E]
          ${button.className}
        `

        const motionProps = {
          initial: { opacity: 0, scale: 0, x: 20 },
          animate: { opacity: 1, scale: 1, x: 0 },
          exit: { opacity: 0, scale: 0, x: 20 },
          transition: { 
            duration: 0.3, 
            ease: 'easeInOut',
            delay: index * 0.1
          },
          whileTap: { scale: 0.95 }
        }

        // Render as link for external URLs
        if (button.isExternal && button.href) {
          return (
            <AnimatePresence key={button.id}>
              <motion.a
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
                aria-label={button.ariaLabel}
                title={button.label}
                {...motionProps}
              >
                {button.icon}
              </motion.a>
            </AnimatePresence>
          )
        }

        // Render as button for internal actions
        return (
          <AnimatePresence key={button.id}>
            <motion.button
              onClick={button.onClick}
              className={commonClasses}
              aria-label={button.ariaLabel}
              title={button.label}
              {...motionProps}
            >
              {button.icon}
            </motion.button>
          </AnimatePresence>
        )
      })}
    </div>
  )
}

// ============================================================================
// EXPORT DEFAULT PROPS FOR DOCUMENTATION
// ============================================================================

CTABottomFixed.defaultProps = DEFAULT_PROPS