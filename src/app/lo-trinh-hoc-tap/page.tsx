import type { Metadata } from 'next'
import { LearningPathPage } from '@/modules/learning-path'

export const metadata: Metadata = {
  title: 'Lộ trình học tập',
  description: 'Lộ trình học tập được thiết kế khoa học từ Mầm non đến Trung học phổ thông'
}

export default function Page() {
  return <LearningPathPage />
}
