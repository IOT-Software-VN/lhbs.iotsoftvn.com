import { Baby, Star, BookOpen, GraduationCap, Zap, Globe, Award, Palette, Brain, Heart, Coins, Mic, Rocket, PenTool } from 'lucide-react'

export type SchoolLevel = 'preschool' | 'primary' | 'secondary' | 'high'

export interface Certificate {
  name: string
  icon: any
  description?: string
}

export const schoolData: Record<SchoolLevel, {
  title: string
  grade: string
  description: string
  link: string
  competencies: string[]
  certificates: Certificate[]
  icon: any
}> = {
  preschool: {
    title: 'Mầm non Galaxy',
    grade: '(18 tháng - 5 tuổi)',
    description: 'Giai đoạn "Cửa sổ vàng" để khơi dậy tiềm năng thông qua phương pháp "Học qua chơi", phát triển đa giác quan và làm quen Tiếng Anh tự nhiên với giáo viên nước ngoài.',
    link: 'https://bienhoa.galaxy.edu.vn', // Defaulting to Bien Hoa for main button, maybe handle split later if requested strictly
    competencies: [
      'Phát triển Thể chất & Vận động thô/tinh',
      'Nhận thức & Toán học sơ đẳng',
      'Tự lập & Kỹ năng xã hội (Social Skills)',
      'Cảm thụ Nghệ thuật & Sáng tạo'
    ],
    certificates: [
      { name: 'Bộ GD&ĐT', icon: BookOpen },
      { name: 'Tiếng Anh GVNN', icon: Globe },
      { name: 'Montessori Inspired', icon:  Palette }, // Symbolic
      { name: 'Kỹ năng sống', icon: Heart }
    ],
    icon: Baby
  },
  primary: {
    title: 'Tiểu học',
    grade: '(Lớp 1 - 5)',
    description: 'Xây dựng nền tảng kiến thức vững chắc với chương trình Song ngữ (Bộ GD&ĐT + Cambridge). Chú trọng phát triển tư duy khoa học (STEM), tài chính (JA) và văn hóa đọc.',
    link: 'https://school.lhbs.edu.vn/tieu-hoc',
    competencies: [
      'Tiếng Anh Cambridge (Starters/Movers/Flyers)',
      'Tư duy STEM & Robotics (UBTech)',
      'Tài chính cá nhân (Junior Achievement)',
      'Văn hóa đọc (Reading A-Z)'
    ],
    certificates: [
      { name: 'Cambridge YLE', icon: Award },
      { name: 'STEM Robotics', icon: Zap },
      { name: 'Junior Achievement', icon: Coins },
      { name: 'Reading A-Z', icon: BookOpen }
    ],
    icon: Star
  },
  secondary: {
    title: 'Trung học Cơ sở',
    grade: '(Lớp 6 - 9)',
    description: 'Giai đoạn tăng tốc và định hình tư duy phản biện. Chương trình Song ngữ nâng cao, học qua dự án (PBL) và các hoạt động công dân toàn cầu giúp học sinh khám phá bản sắc.',
    link: 'https://school.lhbs.edu.vn/trung-hoc-co-so',
    competencies: [
      'Tiếng Anh Cambridge (KET/PET)',
      'Tư duy Công dân toàn cầu (Global Citizen)',
      'Kỹ năng Tranh biện (Debate) & Hùng biện',
      'Công nghệ AI & Lập trình Alpha Mini'
    ],
    certificates: [
      { name: 'Cambridge KET/PET', icon: Award },
      { name: 'AI & Coding', icon: Brain },
      { name: 'Debate & Public Speaking', icon: Mic },
      { name: 'Global Projects', icon: Globe }
    ],
    icon: BookOpen
  },
  high: {
    title: 'Trung học Phổ thông',
    grade: '(Lớp 10 - 12)',
    description: 'Giai đoạn về đích, tập trung tối đa cho kỳ thi Tốt nghiệp THPT và chuẩn bị hồ sơ Đại học/Du học. Cơ hội nhận bằng Tú tài Mỹ (Dual Diploma) và chứng chỉ IELTS.',
    link: 'https://school.lhbs.edu.vn/trung-hoc-pho-thong',
    competencies: [
      'Chứng chỉ IELTS 4.0 - 6.0+',
      'Tú tài Mỹ (ASI Dual Diploma) - Tùy chọn',
      'Năng lực Nghiên cứu khoa học & Tự học',
      'Định hướng Nghề nghiệp & Du học'
    ],
    certificates: [
      { name: 'IELTS Preparation', icon: Globe },
      { name: 'ASI Dual Diploma', icon: Award }, // American School International
      { name: 'Career Orient', icon: Rocket },
      { name: 'Research Skills', icon: PenTool }
    ],
    icon: GraduationCap
  }
}
