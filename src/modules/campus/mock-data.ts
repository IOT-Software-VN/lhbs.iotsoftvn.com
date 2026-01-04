export interface CampusInfo {
  id: string
  name: string
  shortName: string
  address: string
  email: string
  phone: string
  website: string
  facebook: string
  mapEmbedUrl: string
  description?: string
}

export const campusData: CampusInfo[] = [
  {
    id: 'high-school',
    name: 'Trường TH – THCS – THPT Song ngữ Lạc Hồng',
    shortName: 'Phổ thông - Song ngữ Lạc Hồng',
    address: 'Số 152/16 đường Huỳnh Văn Nghệ, khu phố Tân Lài, phường Trấn Biên, tỉnh Đồng Nai, Việt Nam',
    email: 'info@lhbs.vn',
    phone: '02513 952 953',
    website: 'https://lhbs.edu.vn',
    facebook: 'https://www.facebook.com/SongnguLacHong/',
    mapEmbedUrl: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=song%20ng%E1%BB%AF%20l%E1%BA%A1c%20h%E1%BB%93ng&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    description: 'Trường phổ thông với chương trình song ngữ từ Tiểu học đến THPT'
  },
  {
    id: 'preschool-bien-hoa-1',
    name: 'Trường Mầm non Song ngữ Lạc Hồng tại Biên Hòa - Cơ sở 1',
    shortName: 'Mầm non Biên Hòa - Cơ sở 1',
    address: 'Số 152/16 đường Huỳnh Văn Nghệ, khu phố Tân Lài, phường Trấn Biên, tỉnh Đồng Nai, Việt Nam',
    email: 'info@lhbs.vn',
    phone: '02518 616 716',
    website: 'https://lhbs.edu.vn',
    facebook: 'https://www.facebook.com/MamnonSongnguLacHong/',
    mapEmbedUrl: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=song%20ng%E1%BB%AF%20l%E1%BA%A1c%20h%E1%BB%93ng&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    description: 'Cơ sở 1 - Mầm non Song ngữ Lạc Hồng tại Biên Hòa'
  },
  {
    id: 'preschool-bien-hoa-2',
    name: 'Trường Mầm non Song ngữ Lạc Hồng tại Biên Hòa - Cơ sở 2',
    shortName: 'Mầm non Biên Hòa - Cơ sở 2',
    address: 'Lô D01, D02, D03, D04, khu phố Tân Lài, phường Trấn Biên, tỉnh Đồng Nai, Việt Nam',
    email: 'info@lhbs.vn',
    phone: '02513 952 179',
    website: 'https://lhbs.edu.vn',
    facebook: 'https://www.facebook.com/MamnonSongnguLacHong/',
    mapEmbedUrl: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=song%20ng%E1%BB%AF%20l%E1%BA%A1c%20h%E1%BB%93ng&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    description: 'Cơ sở 2 - Mầm non Song ngữ Lạc Hồng tại Biên Hòa'
  },
  {
    id: 'preschool-long-khanh',
    name: 'Trường Mầm non Song ngữ Lạc Hồng tại Long Khánh',
    shortName: 'Mầm non Long Khánh',
    address: 'Số 67 Nguyễn Du, KP2, phường Long Khánh, tỉnh Đồng Nai, Việt Nam',
    email: 'tvts@mnlk.lhbs.vn',
    phone: '02513 877 789',
    website: 'https://lhbs.edu.vn',
    facebook: 'https://www.facebook.com/mamnonsongngulachonglongkhanh/',
    mapEmbedUrl: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=m%E1%BA%A7m%20non%20l%E1%BA%A1c%20h%E1%BB%93ng%20long%20kh%C3%A1nh&t=&z=14&ie=UTF8&iwloc=B&output=embed',
    description: 'Mầm non Song ngữ Lạc Hồng tại Long Khánh với chương trình chất lượng cao'
  }
]
