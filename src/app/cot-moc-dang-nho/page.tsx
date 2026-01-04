import type { Metadata } from 'next'
import { MilestonePage } from '@/modules/milestone'

export const metadata: Metadata = {
  title: 'Cột mốc đáng nhớ',
  description: 'Những cột mốc lịch sử và thành tựu đáng tự hào của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <MilestonePage />
}
