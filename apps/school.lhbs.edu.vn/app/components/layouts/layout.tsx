import { Outlet, useNavigate, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { FullScreenMenu, CTABottomFixed, StickyHeader, Footer } from '@sites/index'
import type { NavigationData } from '@sites/index'
import { siteNavigation, moreLinks } from '@/types/navigation'
import logoImage from '@assets/images/base/logo-head.png'

// ============================================================================
// CONSTANTS
// ============================================================================

const SOCIAL_LINKS = {
  zalo: 'https://zalo.me/0908567890', // Replace with actual Zalo ID
  messenger: 'https://m.me/school.lhbs' // Replace with actual Messenger page
} as const

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState('/')

  // Navigation data for this app
  const navigationData: NavigationData = {
    siteNavigation,
    moreLinks
  }

  // Update current path when location changes
  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

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
    navigate(path)
  }
  const handleLogoClick = () => navigate('/')
  const handleApplyClick = () => navigate('/admissions/apply-now')

  return (
    <>
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={handleMenuClose}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        navigationData={navigationData}
      />

      <StickyHeader
        scrolled={scrolled}
        onMenuClick={handleMenuClick}
        onMenuClose={handleMenuClose}
        menuOpen={menuOpen}
        logoImage={logoImage}
        onLogoClick={handleLogoClick}
        onApplyClick={handleApplyClick}
      />

      <main>
        <Outlet />
      </main>

      <CTABottomFixed 
        zaloUrl={SOCIAL_LINKS.zalo}
        messengerUrl={SOCIAL_LINKS.messenger}
        showScrollTop={true}
        scrollThreshold={300}
      />

      <Footer onNavigate={handleNavigate} />
    </>
  )
}