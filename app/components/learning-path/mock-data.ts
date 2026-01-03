import { GraduationCap, BookOpen, Baby, Star, Zap, Globe, Award } from 'lucide-react'

export type SchoolLevel = 'preschool' | 'primary' | 'secondary' | 'high'

export const schoolData: Record<SchoolLevel, {
  title: string
  grade: string
  description: string
  link: string
  competencies: string[]
  icon: any
}> = {
  preschool: {
    title: 'Mầm non Galaxy',
    grade: '(18 tháng - 5 tuổi)',
    description: 'Khơi dậy tiềm năng đầu đời thông qua phương pháp "Học qua chơi", phát triển đa giác quan và làm quen với ngôn ngữ thứ hai một cách tự nhiên.',
    link: '/mam-non',
    competencies: [
      'Phát triển thể chất & vận động',
      'Làm quen Tiếng Anh chuẩn mực',
      'Kỹ năng tự phục vụ & xã hội',
      'Tư duy sáng tạo & Thẩm mỹ'
    ],
    icon: Baby
  },
  primary: {
    title: 'Tiểu học',
    grade: '(Lớp 1 - 5)',
    description: 'Xây dựng nền tảng học thuật vững chắc và nhân cách tốt đẹp. Học sinh được phát triển toàn diện về kiến thức, kỹ năng và tư duy song ngữ.',
    link: '/tieu-hoc',
    competencies: [
      'Thành thạo Tiếng Việt & Tiếng Anh',
      'Tư duy Toán học & Khoa học',
      'Kỹ năng giao tiếp & Hợp tác',
      'Giáo dục phẩm chất & Lối sống'
    ],
    icon: Star
  },
  secondary: {
    title: 'Trung học Cơ sở',
    grade: '(Lớp 6 - 9)',
    description: 'Giai đoạn tăng tốc với chương trình học thuật chuyên sâu, rèn luyện tư duy phản biện và hình thành bản sắc cá nhân độc đáo.',
    link: '/trung-hoc-co-so',
    competencies: [
      'Tiếng Anh học thuật & Chứng chỉ',
      'Tư duy phản biện & Giải quyết vấn đề',
      'Năng lực Công nghệ thông tin',
      'Kỹ năng Lãnh đạo bản thân'
    ],
    icon: BookOpen
  },
  high: {
    title: 'Trung học Phổ thông',
    grade: '(Lớp 10 - 12)',
    description: 'Chuẩn bị hành trang vững vàng cho Cánh cửa Đại học và Cuộc sống. Định hướng nghề nghiệp rõ ràng và hoàn thiện năng lực công dân toàn cầu.',
    link: '/trung-hoc-pho-thong',
    competencies: [
      'Định hướng Đại học & Du học',
      'Năng lực Nghiên cứu khoa học',
      'Tư duy Khởi nghiệp & Dự án',
      'Chứng chỉ Quốc tế (IELTS/SAT)'
    ],
    icon: GraduationCap
  }
}

export const partnerCerts = [
  { name: 'STEAM', icon: Zap },
  { name: 'Song ngữ', icon: Globe },
  { name: 'English Central', icon: BookOpen },
  { name: 'Cambridge', icon: Award }
]
