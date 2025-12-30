export interface FooterData {
  schoolName: string
  address: string
  phone: string
  email: string
  copyright: string
}

export interface FooterLink {
  label: string
  url: string
}

export interface SocialLink {
  platform: string
  url: string
}

export interface PartnerLogo {
  id: number
  name: string
  image: string
}

export const footerData: FooterData = {
  schoolName: 'Trường Song Ngữ Lạc Hồng',
  address: '152/16 Huỳnh Văn Nghệ, KP Tân Lại, P. Trấn Biên, Đồng Nai.',
  phone: '+0251 3952 953',
  email: 'tuyensinh@lhbs.vn',
  copyright: '© 2025 Lac Hong Bilingual School. All rights reserved.'
}

export const footerLinksGroup1: FooterLink[] = [
  { label: 'Về chúng tôi', url: '/our-school/about-us' },
  { label: 'Chương trình học', url: '/academics' },
  { label: 'Tuyển sinh', url: '/admissions' },
  { label: 'Tin tức & Sự kiện', url: '/news-events' }
]

export const footerLinksGroup2: FooterLink[] = [
  { label: 'Tuyển dụng', url: '/contact/careers' },
  { label: 'Liên hệ', url: '/contact' }
]

export const socialLinks: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com/lhbs' },
  { platform: 'instagram', url: 'https://instagram.com/lhbs' },
  { platform: 'twitter', url: 'https://twitter.com/lhbs' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/lhbs' }
]

export const partnerLogos: PartnerLogo[] = [
  {
    id: 1,
    name: 'English Central',
    image: 'https://www.englishcentral.com/dist/all/20251203121549/assets/ec-logo.53e56416598b3d50cbe5.png'
  },
  {
    id: 2,
    name: 'STEM',
    image:
      'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
  },
  {
    id: 3,
    name: 'ASI',
    image: 'https://advantagesschool.com/wp-content/uploads/2022/10/asi-logo.png'
  },
  {
    id: 4,
    name: 'Cambridge',
    image: 'https://www.cambridgeassessment.org.uk/Images/Simon-brand-blog-newest-logo.png'
  }
]
