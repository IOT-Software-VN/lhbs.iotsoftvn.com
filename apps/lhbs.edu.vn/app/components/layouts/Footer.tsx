import { MapPin, Phone, Mail } from 'lucide-react'
import logoImage from '@/images/base/logo-head.png'

export default function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  // Footer content data
  const addressLine = '152/16 Huỳnh Văn Nghệ, KP Tân Lại, P. Trấn Biên, Đồng Nai.'
  const phone = '+0251 3952 953'
  const email = 'tuyensinh@lhbs.vn'

  const linksGroup1 = [
    { label: 'About Us', url: '/our-school/about-us' },
    { label: 'Academics', url: '/academics' },
    { label: 'Admissions', url: '/admissions' },
    { label: 'News & Events', url: '/news-events' }
  ]

  const linksGroup2 = [
    { label: 'Careers', url: '/contact/careers' },
    { label: 'Contact', url: '/contact' },
    { label: 'Privacy Policy', url: '/legal/privacy-policy' },
    { label: 'Terms of Use', url: '/legal/terms-of-use' }
  ]

  const socialLinks = [
    { platform: 'facebook', url: 'https://facebook.com/lhbs', icon: 'facebook' },
    { platform: 'instagram', url: 'https://instagram.com/lhbs', icon: 'instagram' },
    { platform: 'twitter', url: 'https://twitter.com/lhbs', icon: 'twitter' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/lhbs', icon: 'linkedin' }
  ]

  const copyrightText = '© 2025 Lac Hong Bilingual School. All rights reserved.'

  return (
    <footer className='footer relative z-50 overflow-visible font-sans text-white'>
      {/* Background Image with Original Green Gradient Overlay */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0'
          style={{ backgroundImage: `url(/images/base/Footer.jpg)` }}
        />
        {/* Original Green Radial Gradient */}
        <div
          className='absolute inset-0 z-10'
          style={{
            background: `
                radial-gradient(
                  ellipse at top left,
                  rgba(0, 96, 47, 1) 30%,
                  rgba(0, 96, 47, 0.95) 40%,
                  rgba(0, 96, 47, 0.75) 55%,
                  rgba(0, 96, 47, 0.50) 60%,
                  rgba(0, 96, 47, 0.30) 80%,
                  rgba(0, 96, 47, 0.15) 100%
                ),
                radial-gradient(
                  ellipse at top right,
                  rgba(0, 96, 47, 1) 10%,
                  rgba(0, 96, 47, 0.95) 20%,
                  rgba(0, 96, 47, 0.75) 45%,
                  rgba(0, 96, 47, 0.50) 60%,
                  rgba(0, 96, 47, 0.30) 80%,
                  rgba(0, 96, 47, 0.15) 100%
                )
              `
          }}
        />
        {/* Extra dark overlay for better text readability if needed */}
        <div className='absolute inset-0 z-10 bg-black/20 mix-blend-multiply' />
      </div>

      {/* Floating Action Buttons */}
      <div className='relative z-30 container mx-auto px-4 -translate-y-1/2'>
        <div className='flex justify-center items-center gap-6 md:gap-12'>
          {/* Inquire */}
          <CircleActionButton
            label='Inquire'
            onClick={() => onNavigate('/contact/inquire')}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
                <path d='M12 17h.01' />
              </svg>
            }
          />
          {/* Apply */}
          <CircleActionButton
            label='Apply'
            onClick={() => onNavigate('/admissions/apply')}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12 20h9' />
                <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
              </svg>
            }
          />
          {/* Visit */}
          <CircleActionButton
            label='Visit'
            onClick={() => onNavigate('/visit')}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                <circle cx='12' cy='10' r='3' />
              </svg>
            }
          />
        </div>
      </div>

      <div className='relative z-20 w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-24 pt-10 pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
          {/* Left Column: Logo & Contact Info */}
          <div className='lg:col-span-5 flex flex-col items-start'>
            <img src={logoImage} alt='LHBS Logo' className='h-20 md:h-26 w-auto mb-6' />

            <div className='space-y-4 text-sm md:text-base font-light tracking-wide text-white/90'>
              <h3 className='font-bold text-lg uppercase mb-2 text-[#FABA1E]'>Lac Hong Bilingual School</h3>
              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-[#FABA1E] shrink-0 mt-0.5' />
                <span className='leading-relaxed'>{addressLine}</span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-5 h-5 text-[#FABA1E] shrink-0' />
                <a href={`tel:${phone}`} className='hover:text-[#FABA1E] transition-colors'>
                  {phone}
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-[#FABA1E] shrink-0' />
                <a href={`mailto:${email}`} className='hover:text-[#FABA1E] transition-colors'>
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Links & Socials */}
          <div className='lg:col-span-7 flex flex-col justify-end lg:items-end'>
            {/* Navigation Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 mb-12 text-right'>
              {linksGroup1.concat(linksGroup2).map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(link.url)}
                  className='text-xs md:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#FABA1E] transition-colors text-left lg:text-right'
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className='flex items-center gap-6 mb-8'>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target='_blank'
                  rel='noreferrer'
                  className='text-white hover:text-[#FABA1E] transition-colors transform hover:-translate-y-1 duration-300'
                  aria-label={`Visit our ${social.platform}`}
                >
                  <SocialIconSVG platform={social.platform} />
                </a>
              ))}
            </div>

            <div className='flex flex-wrap items-center justify-end gap-6 mb-8'>
              <img
                src='https://resources.finalsite.net/images/f_auto,q_auto/v1704855019/saigon/xhdrp8lgsl6lzsyp1dwg/CIS_Member_icon-3_RGB.png'
                alt='CIS Member'
                className='h-12 w-auto object-contain hover:scale-105 transition-transform duration-300'
              />
              <img
                src='https://resources.finalsite.net/images/f_auto,q_auto/v1704855019/saigon/ixplefnt9uellcffrmj3/AMISMemberLogoWHITE.png'
                alt='AMIS Member'
                className='h-12 w-auto object-contain hover:scale-105 transition-transform duration-300'
              />
              <img
                src='https://acswasc.org/wp-content/uploads/2020/01/acs-logo-1.png'
                alt='WASC Accredited'
                className='h-12 w-auto object-contain hover:scale-105 transition-transform duration-300'
              />
            </div>

            {/* Copyright */}
            <div className='text-[10px] uppercase tracking-widest text-white/50'>{copyrightText}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function CircleActionButton({ label, onClick, icon }: { label: string; onClick: () => void; icon: React.ReactNode }) {
  // Use a Deep Green background for the button to match the Green theme, but lighter than bg to pop.
  // Or stick to Gold borders.
  return (
    <button
      onClick={onClick}
      className='group flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#004a25] border-4 border-[#00602F] shadow-2xl hover:bg-[#FABA1E] hover:border-white hover:scale-105 transition-all duration-300 ease-out z-40'
    >
      <div className='mb-2 text-white group-hover:text-[#004a25] transition-colors duration-300'>{icon}</div>
      <span className='text-xs md:text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#004a25] transition-colors duration-300'>
        {label}
      </span>
    </button>
  )
}

function SocialIconSVG({ platform }: { platform: string }) {
  if (platform === 'facebook')
    return (
      <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
      </svg>
    )
  if (platform === 'instagram')
    return (
      <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
      </svg>
    )
  if (platform === 'twitter')
    return (
      <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
      </svg>
    )
  if (platform === 'linkedin')
    return (
      <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
      </svg>
    )
  return null
}
