import type { Metadata } from 'next'
import { DirectorsPage } from '@/modules/directors'

export const breadcrumbItems = [{ label: 'Trang chủ', path: '/' }, { label: 'Ban lãnh đạo' }]

export const metadata: Metadata = {
  title: 'Ban lãnh đạo | LHBS',
  description: 'Đội ngũ ban lãnh đạo tâm huyết và giàu kinh nghiệm của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <DirectorsPage />
}
