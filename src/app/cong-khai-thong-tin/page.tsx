import type { Metadata } from 'next'
import { PublicInfoPage } from '@/modules/public-info'

export const breadcrumbItems = [{ label: 'Trang chủ', path: '/' }, { label: 'Công khai thông tin' }]

export const metadata: Metadata = {
  title: 'Công khai thông tin | LHBS',
  description: 'Cổng thông tin công khai và minh bạch của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <PublicInfoPage />
}
