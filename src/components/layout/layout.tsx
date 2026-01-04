'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { StickyHeader } from './sticky-header'
import { Footer } from './footer'
import { FullScreenMenu } from '@/components/layout/full-screen-menu'
import ScrollToTop from '../ui/scroll-to-top'
import { ScrollProgress } from '../ui/scroll-progress'

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')

  const pathname = usePathname()
  const router = useRouter()

  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation handlers
  const handleMenuClick = () => setMenuOpen(true)
  const handleMenuClose = () => setMenuOpen(false)

  const handleNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <ScrollProgress />
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={handleMenuClose}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <StickyHeader
        scrolled={scrolled}
        onMenuClick={handleMenuClick}
        onMenuClose={handleMenuClose}
        menuOpen={menuOpen}
      />

      <main className='grow flex flex-col'>{children}</main>
      <ScrollToTop />
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
