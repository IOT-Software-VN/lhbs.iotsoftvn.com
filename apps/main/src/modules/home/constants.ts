import { BookOpen, UtensilsCrossed, Globe, MonitorSmartphone } from 'lucide-react'
import type { SchoolLevel, NewsItem, EventItem, GalleryItem, UniversityLogo, WhyChooseItem } from './types'

export const NEWS_ITEMS: NewsItem[] = [
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    date: '06/09/2025',
    title: 'Thư gửi học sinh LHBS nhân dịp khai giảng năm học mới',
    link: '/news/1'
  },
  {
    date: '04/09/2025',
    title: 'LHBS khởi động mạng lưới chuyên gia giáo dục chuyên nghiệp',
    link: '/news/2'
  },
  {
    date: '29/05/2025',
    title: 'Giáo dục song ngữ là gì? Lợi ích của trường song ngữ',
    link: '/news/3'
  }
]

export const EVENT_ITEMS: EventItem[] = [
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
    date: '22/04/2025',
    title: 'Giai đoạn "Terrible Twos" kéo dài bao lâu? Mẹo nuôi con',
    link: '/events/1'
  },
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
    title: '10 phương pháp học tập hiệu quả cho học sinh',
    link: '/events/2'
  },
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    title: 'Giáo dục toàn diện là gì? Các yếu tố chính',
    link: '/events/3'
  }
]

export const GALLERY_ITEM: GalleryItem = {
  image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
  title: 'Học sinh LHBS tham gia các hoạt động giáo dục toàn diện',
  link: '/gallery/1'
}

export const UNIVERSITY_LOGOS: UniversityLogo[] = [
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

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: 'galaxy-kc',
    title: 'MẦM NON',
    subtitle: '12 tháng - 5 tuổi',
    descriptions: [
      'Tôn trọng sự khác biệt của từng trẻ',
      'Phát triển toàn diện Đức - Trí - Thể Mỹ',
      'Trang bị nền tảng, kỹ năng để sẵn sàng cho tương lai hội nhập'
    ],
    image: '/images/home-page/cac-cap-hoc-section/mam-non.jpg',
    slug: '/campus/galaxy-kc'
  },

  {
    id: 'elementary',
    title: 'TIỂU HỌC',
    subtitle: 'Lớp 1 - Lớp 5',
    descriptions: [
      'Chương trình học tập cá nhân hóa.',
      'Phát triển toàn diện thể chất và trí tuệ',
      'Trang bị nền tảng, kỹ năng để sẵn sàng cho tương lai hội nhập'
    ],
    image: '/images/home-page/cac-cap-hoc-section/tieu-hoc.png',
    slug: '/campus/elementary',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/primary-school'
  },

  {
    id: 'middle',
    title: 'TRUNG HỌC CƠ SỞ',
    subtitle: 'Lớp 6 - Lớp 9',
    descriptions: [
      'Chương trình học tập cá nhân hóa',
      'Phát triển toàn diện thể chất và trí tuệ.',
      'Trang bị nền tảng, kỹ năng để sẵn sàng cho tương lai hội nhập'
    ],
    image: '/images/home-page/cac-cap-hoc-section/trung-hoc.png',
    slug: '/campus/middle-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/secondary-school'
  },

  {
    id: 'highschool',
    title: 'TRUNG HỌC PHỔ THÔNG',
    subtitle: 'Lớp 10 - Lớp 12',
    descriptions: [
      'Chương trình học tập cá nhân hóa',
      'Chương trình hướng nghiệp phù hợp với năng lực',
      'Sẵn sàng chinh phục các trường đại học hàng đầu trong nước và quốc tế'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-01.png',
    slug: '/campus/high-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/high-school'
  }
]

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    icon: BookOpen,
    title: 'Cá nhân hóa lộ\u00A0trình học\u00A0tập',
    description: 'Chương trình học, phương pháp giảng dạy phù hợp với năng lực của từng học sinh',
    fullDescription:
      'Tại LHBS, chúng tôi hiểu rằng mỗi học sinh là một cá nhân độc đáo với năng lực, sở thích và tốc độ học tập riêng biệt. Vì vậy, chúng tôi xây dựng lộ trình học tập cá nhân hóa, điều chỉnh chương trình và phương pháp giảng dạy để phù hợp với từng em, giúp các em phát triển tối đa tiềm năng của bản thân.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    alt: 'Cá nhân hóa lộ trình học tập tại LHBS'
  },
  {
    icon: Globe,
    title: 'Môi trường song\u00A0ngữ thực\u00A0chất',
    description: 'Chương trình tiếng Anh Me - Us - Our world giúp học sinh tự tin sử dụng tiếng Anh, sẵn sàng hội nhập',
    fullDescription:
      'LHBS tự hào mang đến môi trường song ngữ thực chất với chương trình tiếng Anh Me - Us - Our world, giúp học sinh không chỉ học tiếng Anh mà còn sử dụng thành thạo trong giao tiếp hàng ngày. Chúng tôi tạo điều kiện để các em tự tin hội nhập với cộng đồng quốc tế, sẵn sàng cho tương lai toàn cầu.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
    alt: 'Môi trường song ngữ thực chất tại LHBS'
  },
  {
    icon: MonitorSmartphone,
    title: 'Tiên phong ứng\u00A0dụng công\u00A0nghệ',
    description: 'Tích hợp công nghệ hiện đại vào các hoạt động giảng dạy, học tập và quản lý',
    fullDescription:
      'LHBS là đơn vị tiên phong trong việc ứng dụng công nghệ giáo dục tiên tiến. Chúng tôi tích hợp công nghệ hiện đại vào mọi hoạt động giảng dạy, học tập và quản lý, tạo ra môi trường học tập thông minh, tương tác và hiệu quả cao. Công nghệ không chỉ là công cụ hỗ trợ mà còn là nền tảng để phát triển tư duy sáng tạo và kỹ năng số cho học sinh.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
    alt: 'Tiên phong ứng dụng công nghệ tại LHBS'
  },
  {
    icon: UtensilsCrossed,
    title: 'Dinh dưỡng cân\u00A0bằng',
    description: 'Thực đơn phong phú và rõ ràng về hàm lượng',
    fullDescription:
      'LHBS quan tâm đến sức khỏe và sự phát triển toàn diện của học sinh thông qua chế độ dinh dưỡng khoa học. Thực đơn được thiết kế phong phú, đa dạng với các món ăn bổ dưỡng, đảm bảo đầy đủ dưỡng chất cần thiết. Mỗi bữa ăn đều được công bố rõ ràng về hàm lượng dinh dưỡng, giúp phụ huynh yên tâm về sức khỏe của con em mình.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    alt: 'Dinh dưỡng cân bằng tại LHBS'
  }
]
