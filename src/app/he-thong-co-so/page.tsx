import type { Metadata } from 'next'
import { CampusPage } from '@/modules/campus'

export const breadcrumbItems = [{ label: 'Trang chủ', path: '/' }, { label: 'Hệ thống cơ sở giáo dục' }]

export const metadata: Metadata = {
  title: 'Hệ thống cơ sở giáo dục | LHBS',
  description: 'Khám phá hệ thống cơ sở vật chất hiện đại của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <CampusPage />
}
