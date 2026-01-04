import type { Metadata } from 'next'
import { HomePage } from '@/modules/home'

export const metadata: Metadata = {
  title: 'LHBS - Trường Song Ngữ Lạc Hồng',
  description: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS'
}

export default function Home() {
  return <HomePage />
}
