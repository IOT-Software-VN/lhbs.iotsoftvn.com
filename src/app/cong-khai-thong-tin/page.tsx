import type { Metadata } from 'next'
import { PublicInfoPage } from '@/modules/public-info'

export const metadata: Metadata = {
  title: 'Công khai thông tin',
  description: 'Cổng thông tin công khai và minh bạch của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <PublicInfoPage />
}
