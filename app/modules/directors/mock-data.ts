const founderImage = '/images/base/thay-tai.png'

export interface Director {
  id: string | number
  image: string
  name: string
  role1: string
  role2?: string
}

export const leadershipData: Director[] = [
  {
    id: 1,
    image: founderImage,
    name: 'Cố Nhà giáo nhân dân - Tiến sĩ Đỗ Hữu Tài',
    role1: 'Nhà sáng lập',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 2,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/04/CoLanHuong-201x300.jpg',
    name: 'Bà Nguyễn Thị Lan Hương',
    role1: 'Chủ tịch Hội đồng quản trị Công ty TNHH Hương Nguyên',
    role2: 'Chủ đầu tư Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 3,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2022/10/MG_9775-blur-185x300.jpg',
    name: 'Tiến sĩ Đỗ Thị Lan Đài',
    role1: 'Thành viên Hội đồng quản trị Công ty TNHH Hương Nguyên',
    role2: 'Chủ tịch Hội đồng quản trị Trường Đại học Lạc Hồng'
  },
  {
    id: 4,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2022/05/55900a55f39705c95c86-scaled-e1689042031581-200x300.jpg',
    name: 'Cô Trần Thị Hoa',
    role1: 'Phó Hiệu trưởng',
    role2: 'Hành chính quản trị'
  }
]

export const preschoolData: Director[] = [
  {
    id: 'p1',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2023/08/DANG-THI-TUYET_HIEU-TRUONG-MN_LHBS-01-01-200x300.jpg',
    name: 'Cô Đặng Thị Tuyết',
    role1: 'Hiệu trưởng',
    role2: 'Mầm non Song ngữ Lạc Hồng – Biên Hoà'
  },
  {
    id: 'p2',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2023/10/Co-Kieu_LHBS-2-200x300.jpg',
    name: 'Cô Hoàng Thị Ngọc Kiều',
    role1: 'Phó Hiệu trưởng',
    role2: 'Mầm non Song ngữ Lạc Hồng – Biên Hoà'
  },
  {
    id: 'p3',
    image:
      'https://lhbs.edu.vn/wp-content/uploads/elementor/thumbs/NGUYEN-THI-MONG-HUYEN_HIEU-PHO-MN_LHBS-qb9k7xd646xvjekkzkfb0extuzqmzu7npmnd6xc52w.jpg',
    name: 'Cô Nguyễn Thị Mộng Huyền',
    role1: 'Phó Hiệu trưởng',
    role2: 'Mầm non Song ngữ Lạc Hồng – Biên Hoà'
  }
]

export const highSchoolData: Director[] = [
  {
    id: 'h1',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/08/z6919167807030_50bfac5d1dbb89531e6e5552034497ae.jpg',
    name: 'Cô Hoàng Thị Diễm Trang',
    role1: 'Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 'h2',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/06/BL8Q9322-e1689041913717-193x300.jpg',
    name: 'Cô Nguyễn Thị Thuật',
    role1: 'Phó Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 'h3',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2023/07/IMG_1664-e1689041977870.jpg',
    name: 'Cô Trương Thu Trang',
    role1: 'Phó Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 'h4',
    image:
      'https://lhbs.edu.vn/wp-content/uploads/elementor/thumbs/IMG_1652-e1688982179811-q97axoc3co13x600s1xy9svvclttxr106ih49ar1dk.jpg',
    name: 'Cô Nguyễn Thị Thu Thảo',
    role1: 'Phó Hiệu trưởng',
    role2: 'Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  }
]
