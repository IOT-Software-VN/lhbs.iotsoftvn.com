import type { Metadata } from 'next'
import { DirectorsPage } from '@/modules/directors'

export const metadata: Metadata = {
  title: 'Ban lãnh đạo',
  description: 'Đội ngũ ban lãnh đạo tâm huyết và giàu kinh nghiệm của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <DirectorsPage />
}
