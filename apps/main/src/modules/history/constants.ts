import type { BreadcrumbItem } from '@lhbs/ui'
import { Calendar, Users, Award, Building2, GraduationCap, Globe } from 'lucide-react'
import type { HistoryChapter, MilestoneHighlight } from './types'

export const HISTORY_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Lịch sử hình thành' }
]

const HERO_IMG_1 = '/images/home-page/hero-section/hero-1.jpg'
const HERO_IMG_2 = '/images/home-page/hero-section/hero-2.jpg'
const HERO_IMG_3 = '/images/home-page/hero-section/hero-3.jpg'
const HERO_IMG_4 = '/images/home-page/hero-section/hero-4.jpg'

export const HISTORY_CHAPTERS: HistoryChapter[] = [
  {
    id: 'khoi-dau',
    label: 'Khởi đầu',
    years: '2011–2014',
    title: 'Khát vọng tiên phong',
    description:
      'Thành lập với sứ mệnh mang đến môi trường giáo dục song ngữ chất lượng cao đầu tiên tại khu vực. Những viên gạch đầu tiên được đặt xuống với tâm huyết của người sáng lập.',
    image: HERO_IMG_4
  },
  {
    id: 'dinh-hinh',
    label: 'Định hình',
    years: '2015–2018',
    title: 'Vững bước phát triển',
    description:
      'Xây dựng chuẩn mực giảng dạy, hoàn thiện cơ sở vật chất và khẳng định chất lượng đào tạo qua các thế hệ học sinh đầu tiên.',
    image: HERO_IMG_3
  },
  {
    id: 'mo-rong',
    label: 'Mở rộng',
    years: '2019–2022',
    title: 'Vươn xa tầm vóc',
    description:
      'Mở rộng hệ thống với các cơ sở mới, đa dạng hóa cấp học từ Mầm non đến THPT, đưa LHBS trở thành hệ thống giáo dục toàn diện.',
    image: HERO_IMG_2
  },
  {
    id: 'hoi-nhap',
    label: 'Hội nhập',
    years: '2023–2025',
    title: 'Công dân toàn cầu',
    description:
      'Đẩy mạnh hợp tác quốc tế, áp dụng công nghệ giáo dục tiên tiến 4.0 và trang bị năng lực hội nhập cho học sinh.',
    image: HERO_IMG_1
  },
  {
    id: 'hien-tai',
    label: 'Hiện tại',
    years: '2026–Now',
    title: 'Kiến tạo tương lai',
    description:
      'Tiếp tục hành trình đổi mới sáng tạo, khẳng định vị thế trường song ngữ hàng đầu và hướng tới những cột mốc rực rỡ tiếp theo.',
    image: HERO_IMG_2
  }
]

export const MILESTONE_HIGHLIGHTS: MilestoneHighlight[] = [
  {
    id: 'years',
    icon: Calendar,
    value: '15+',
    label: 'Năm thành lập',
    description: 'Hành trình giáo dục từ 2011'
  },
  {
    id: 'students',
    icon: Users,
    value: '5000+',
    label: 'Học sinh',
    description: 'Đã và đang theo học tại LHBS'
  },
  {
    id: 'graduates',
    icon: GraduationCap,
    value: '2000+',
    label: 'Cựu học sinh',
    description: 'Thành công trong cuộc sống'
  },
  {
    id: 'campuses',
    icon: Building2,
    value: '3',
    label: 'Cơ sở',
    description: 'TH-THCS-THPT và 2 Mầm non'
  },
  {
    id: 'awards',
    icon: Award,
    value: '100+',
    label: 'Giải thưởng',
    description: 'Cấp tỉnh, quốc gia và quốc tế'
  },
  {
    id: 'international',
    icon: Globe,
    value: '10+',
    label: 'Đối tác quốc tế',
    description: 'Hợp tác giáo dục toàn cầu'
  }
]

export const HERO_BACKGROUND_IMAGE = 'https://lhbs.edu.vn/wp-content/uploads/2022/11/MG_5251.jpg'

export const FOUNDER_INFO = {
  name: 'TS. Đỗ Hữu Tài',
  title: 'Cố Nhà giáo nhân dân & Người sáng lập LHBS',
  quote:
    'LHBS cam kết kiến tạo một môi trường học tập nhân văn, nuôi dưỡng và giáo dục thế hệ trẻ biết trân trọng cội nguồn và bản sắc Việt Nam, đồng thời sẵn sàng hội nhập quốc tế với tri thức, kỹ năng và phẩm chất công dân toàn cầu.',
  image: '/images/base/thay-tai.png'
}
