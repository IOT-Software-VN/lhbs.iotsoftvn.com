// Flat Navigation Item (no parent-child hierarchy)
export interface NavItem {
  id: string
  label: string
  path: string
  description?: string
}

// External School Websites with News
export interface SchoolWebsite {
  label: string
  url: string
  description?: string
  hasNews?: boolean // Indicates if this site has news section
}

export const schoolWebsites: SchoolWebsite[] = [
  { 
    label: 'Khối Phổ thông (Cấp 1-2-3)', 
    url: 'https://school.lhbs.edu.vn',
    description: 'Tiểu học, Trung học, Phổ thông',
    hasNews: true
  },
  { 
    label: 'Mầm non Galaxy (Trấn Biên)', 
    url: 'https://bienhoa.galaxy.lhbs.edu.vn',
    description: 'Cơ sở Trấn Biên',
    hasNews: true
  },
  { 
    label: 'Mầm non Galaxy (Long Khánh)', 
    url: 'https://longkhanh.galaxy.lhbs.edu.vn',
    description: 'Cơ sở Long Khánh',
    hasNews: true
  }
]

// Flat navigation structure - single level
export const siteNavigation: NavItem[] = [
  {
    id: 'vision-mission',
    label: 'Tầm nhìn - Sứ mệnh - Giá trị cốt lõi',
    path: '/about-us/vision-mission-values',
    description: 'Tầm nhìn, sứ mệnh và giá trị cốt lõi của LHBS'
  },
  {
    id: 'history',
    label: 'Lịch sử hình thành',
    path: '/about-us/history',
    description: 'Hành trình phát triển của LHBS'
  },
  {
    id: 'milestones',
    label: 'Các cột mốc đáng nhớ',
    path: '/about-us/milestones',
    description: 'Những thành tựu nổi bật'
  },
  {
    id: 'leadership',
    label: 'Ban lãnh đạo & Ban giám hiệu',
    path: '/about-us/leadership',
    description: 'Đội ngũ lãnh đạo và quản lý'
  },
  {
    id: 'public-info',
    label: 'Công khai thông tin',
    path: '/about-us/public-information',
    description: 'Thông tin công khai và báo cáo'
  },
  {
    id: 'curriculum-framework',
    label: 'Lộ trình học tập toàn hệ thống',
    path: '/system-training/curriculum-framework',
    description: 'Chương trình giáo dục liên cấp'
  },
  {
    id: 'campus-intro',
    label: 'Giới thiệu hệ thống cơ sở',
    path: '/system-training/campus-introduction',
    description: 'Các cơ sở giáo dục trong hệ thống'
  }
]

// Legacy exports for backward compatibility
export interface NavChild {
  id: string
  label: string
  path: string
  description?: string
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

export interface MoreLink {
  label: string
  path: string
}

export const moreLinks: MoreLink[] = []
