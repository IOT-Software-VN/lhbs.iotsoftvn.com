export interface NavChild {
  id: string
  label: string
  path?: string
  url?: string
  description?: string
  isExternal?: boolean
}

export interface NavParent {
  id: string
  label: string
  path: string
  description: string
  children: NavChild[]
  cta?: {
    text: string
    path: string
  }
}

// More/Additional Links (right column in mega menu)
export interface MoreLink {
  label: string
  path: string
  isExternal?: boolean
}

export const moreLinks: MoreLink[] = [
  { label: 'Tin tức & Sự kiện', path: '/tin-tuc-su-kien' },
  { label: 'Tuyển dụng', path: '/tuyen-dung' },
  { label: 'Liên hệ', path: '/lien-he' }
]

// External School Links (with external domains)
export interface SchoolLink {
  label: string
  url: string
  isExternal: true
}

export const schoolLinks: SchoolLink[] = [
  { label: 'Mầm non Galaxy - Trấn Biên', url: 'https://bienhoa.galaxy.edu.vn', isExternal: true },
  { label: 'Mầm non Galaxy - Long Khánh', url: 'https://longkhanh.galaxy.edu.vn', isExternal: true },
  { label: 'Khối phổ thông (Cấp 1-2-3)', url: 'https://school.lhbs.edu.vn', isExternal: true }
]

// New sitemap based on concept slide
export const siteNavigation: NavParent[] = [
  {
    id: 'about-lhbs',
    label: 'Giới thiệu chung',
    path: '/gioi-thieu',
    description: 'Tìm hiểu về LHBS',
    children: [
      {
        id: 'about-vision',
        label: 'Tầm nhìn & Sứ mệnh',
        path: '/tam-nhin-su-menh',
        description: 'Định hướng và cam kết của LHBS'
      },
      {
        id: 'about-history',
        label: 'Lịch sử hình thành',
        path: '/lich-su-hinh-thanh',
        description: 'Hành trình phát triển của LHBS'
      },
      {
        id: 'about-milestones',
        label: 'Các cột mốc đáng nhớ',
        path: '/cot-moc-dang-nho',
        description: 'Những thành tựu nổi bật'
      },
      {
        id: 'about-leadership',
        label: 'Ban lãnh đạo và giám hiệu',
        path: '/ban-lanh-dao',
        description: 'Đội ngũ lãnh đạo LHBS'
      },
      {
        id: 'about-transparency',
        label: 'Công khai thông tin',
        path: '/cong-khai-thong-tin',
        description: 'Thông tin công khai theo quy định'
      }
    ]
  },
  {
    id: 'education-program',
    label: 'Chương trình đào tạo',
    path: '/chuong-trinh-dao-tao',
    description: 'Chương trình học toàn diện',
    children: [
      {
        id: 'education-pathway',
        label: 'Lộ trình học tập',
        path: '/lo-trinh-hoc-tap',
        description: 'Lộ trình phát triển liên tục từ mẫu giáo đến phổ thông'
      }
    ]
  },
  {
    id: 'campuses',
    label: 'Hệ thống cơ sở',
    path: '/he-thong-co-so',
    description: 'Các cơ sở giáo dục',
    children: [
      {
        id: 'campuses-info',
        label: 'Thông tin các cơ sở giáo dục',
        path: '/he-thong-co-so',
        description: 'Hệ thống cơ sở giáo dục của LHBS'
      },
      {
        id: 'campuses-galaxy-tb',
        label: 'Mầm non Galaxy - Trấn Biên',
        url: 'https://bienhoa.galaxy.edu.vn',
        description: 'Mầm non Galaxy cơ sở Trấn Biên',
        isExternal: true
      },
      {
        id: 'campuses-galaxy-lk',
        label: 'Mầm non Galaxy - Long Khánh',
        url: 'https://longkhanh.galaxy.edu.vn',
        description: 'Mầm non Galaxy cơ sở Long Khánh',
        isExternal: true
      },
      {
        id: 'campuses-school',
        label: 'Khối phổ thông (Cấp 1-2-3)',
        url: 'https://school.lhbs.edu.vn',
        description: 'Trường phổ thông LHBS',
        isExternal: true
      }
    ]
  }
]
