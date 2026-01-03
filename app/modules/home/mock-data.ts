export interface SchoolLevel {
  id: string
  title: string
  subtitle: string
  descriptions: string[]
  image: string
  slug: string
  learnMoreUrl?: string
}

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: 'galaxy-kc',
    title: 'MẦM NON',
    subtitle: '18 tháng - 3 tuổi',
    descriptions: [
      'Chương trình mầm non hiện đại với phương pháp quốc tế.',
      'Chương trình tích hợp kết hợp Bộ GD&ĐT và chuẩn toàn cầu.',
      'Tập trung phát triển thể chất, nhân cách và kỹ năng xã hội.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-03.png',
    slug: '/campus/galaxy-kc'
  },

  {
    id: 'elementary',
    title: 'TIỂU HỌC',
    subtitle: 'Lớp 1 - Lớp 5',
    descriptions: [
      'Chương trình song ngữ toàn diện với nền tảng vững chắc.',
      'Phát triển toàn diện nhấn mạnh sáng tạo và tư duy logic.',
      'Hoạt động hấp dẫn xây dựng sự tự tin và khám phá.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-02.png',
    slug: '/campus/elementary',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/primary-school'
  },

  {
    id: 'middle',
    title: 'TRUNG HỌC CƠ SỞ',
    subtitle: 'Lớp 6 - Lớp 9',
    descriptions: [
      'Chương trình học thuật tập trung kỹ năng tư duy phản biện.',
      'Học tập dựa trên dự án khuyến khích làm việc nhóm và đổi mới.',
      'Chuẩn bị cho những thách thức học thuật cao hơn.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program.jpg',
    slug: '/campus/middle-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/secondary-school'
  },

  {
    id: 'highschool',
    title: 'TRUNG HỌC PHỔ THÔNG',
    subtitle: 'Lớp 10 - Lớp 12',
    descriptions: [
      'Chương trình học thuật nâng cao phù hợp chuẩn quốc tế.',
      'Định hướng chuyên biệt cho con đường đại học và nghề nghiệp.',
      'Cơ hội lãnh đạo và xuất sắc trong hoạt động ngoại khóa.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-01.png',
    slug: '/campus/high-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/high-school'
  }
]
