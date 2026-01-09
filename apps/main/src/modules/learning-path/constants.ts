import type { BreadcrumbItem } from '@lhbs/ui'
import {
  Baby,
  Star,
  BookOpen,
  GraduationCap,
  Globe,
  Award,
  Heart,
  Mic,
  Rocket,
  School,
  Blocks,
  LifeBuoy,
  Bot,
  Briefcase,
  Code,
  Languages,
  Search,
  FileText
} from 'lucide-react'
import { type SchoolLevel, type SchoolLevelData } from './types'

export const schoolData: Record<SchoolLevel, SchoolLevelData> = {
  preschool: {
    title: 'Mầm non Galaxy',
    grade: '(18 tháng - 5 tuổi)',
    description:
      'Giai đoạn "Cửa sổ vàng" để khơi dậy tiềm năng thông qua phương pháp "Học qua chơi", phát triển đa giác quan và làm quen Tiếng Anh tự nhiên với giáo viên nước ngoài.',
    link: 'https://bienhoa.galaxy.edu.vn',
    competencies: [
      'Phát triển Thể chất & Vận động thô/tinh',
      'Nhận thức & Toán học sơ đẳng',
      'Tự lập & Kỹ năng xã hội (Social Skills)',
      'Cảm thụ Nghệ thuật & Sáng tạo'
    ],
    certificates: [
      { name: 'Bộ GD&ĐT', icon: School, logo: null },
      {
        name: 'Tiếng Anh GVNN',
        icon: Globe,
        logo: 'https://blog.englishcentral.com/wp-content/uploads/2022/05/cropped-ec.png'
      },
      {
        name: 'Montessori Inspired',
        icon: Blocks,
        logo: 'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
      },
      {
        name: 'Kỹ năng sống',
        icon: LifeBuoy,
        logo: 'https://advantagesschool.com/wp-content/uploads/2022/10/asi-logo.png'
      }
    ],
    icon: Baby
  },
  primary: {
    title: 'Tiểu học',
    grade: '(Lớp 1 - 5)',
    description:
      'Xây dựng nền tảng kiến thức vững chắc với chương trình Song ngữ (Bộ GD&ĐT + Cambridge). Chú trọng phát triển tư duy khoa học (STEM), tài chính (JA) và văn hóa đọc.',
    link: 'https://school.lhbs.edu.vn/tieu-hoc',
    competencies: [
      'Tiếng Anh Cambridge (Starters/Movers/Flyers)',
      'Tư duy STEM & Robotics (UBTech)',
      'Tài chính cá nhân (Junior Achievement)',
      'Văn hóa đọc (Reading A-Z)'
    ],
    certificates: [
      {
        name: 'Cambridge YLE',
        icon: Award,
        logo: 'https://vectorseek.com/wp-content/uploads/2023/08/Cambridge-English-Language-Assessment-Logo-Vector.svg-.png'
      },
      {
        name: 'STEM Robotics',
        icon: Bot,
        logo: 'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
      },
      {
        name: 'Junior Achievement',
        icon: Briefcase,
        logo: 'https://blog.englishcentral.com/wp-content/uploads/2022/05/cropped-ec.png'
      },
      { name: 'Reading A-Z', icon: BookOpen, logo: null }
    ],
    icon: Star
  },
  secondary: {
    title: 'Trung\u00A0học Cơ\u00A0sở',
    grade: '(Lớp 6 - 9)',
    description:
      'Giai đoạn tăng tốc và định hình tư duy phản biện. Chương trình Song ngữ nâng cao, học qua dự án (PBL) và các hoạt động công dân toàn cầu giúp học sinh khám phá bản sắc.',
    link: 'https://school.lhbs.edu.vn/trung-hoc-co-so',
    competencies: [
      'Tiếng Anh Cambridge (KET/PET)',
      'Tư duy Công dân toàn cầu (Global Citizen)',
      'Kỹ năng Tranh biện (Debate) & Hùng biện',
      'Công nghệ AI & Lập trình Alpha Mini'
    ],
    certificates: [
      {
        name: 'Cambridge KET/PET',
        icon: Award,
        logo: 'https://vectorseek.com/wp-content/uploads/2023/08/Cambridge-English-Language-Assessment-Logo-Vector.svg-.png'
      },
      {
        name: 'AI & Coding',
        icon: Code,
        logo: 'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
      },
      {
        name: 'Debate & Public Speaking',
        icon: Mic,
        logo: 'https://blog.englishcentral.com/wp-content/uploads/2022/05/cropped-ec.png'
      },
      { name: 'Global Projects', icon: Globe, logo: null }
    ],
    icon: GraduationCap
  },
  high: {
    title: 'Trung\u00A0học Phổ\u00A0thông',
    grade: '(Lớp 10 - 12)',
    description:
      'Giai đoạn về đích, tập trung tối đa cho kỳ thi Tốt nghiệp THPT và chuẩn bị hồ sơ Đại học/Du học. Cơ hội nhận bằng Tú tài Mỹ (Dual Diploma) và chứng chỉ IELTS.',
    link: 'https://school.lhbs.edu.vn/trung-hoc-pho-thong',
    competencies: [
      'Chứng chỉ IELTS 4.0 - 6.0+',
      'Tú tài Mỹ (ASI Dual Diploma) - Tùy chọn',
      'Năng lực Nghiên cứu khoa học & Tự học',
      'Định hướng Nghề nghiệp & Du học'
    ],
    certificates: [
      {
        name: 'IELTS Preparation',
        icon: Languages,
        logo: 'https://vectorseek.com/wp-content/uploads/2023/08/Cambridge-English-Language-Assessment-Logo-Vector.svg-.png'
      },
      {
        name: 'ASI Dual Diploma',
        icon: Award,
        logo: 'https://advantagesschool.com/wp-content/uploads/2022/10/asi-logo.png'
      },
      {
        name: 'Career Orient',
        icon: Rocket,
        logo: 'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
      },
      { name: 'Research Skills', icon: Search, logo: null }
    ],
    icon: GraduationCap
  }
}

export const LEARNING_PATH_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Chương trình đào tạo' },
  { label: 'Lộ trình học tập' }
]
