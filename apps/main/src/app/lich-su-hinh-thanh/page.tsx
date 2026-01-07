import type { Metadata } from 'next'
import { HistoryPage } from '@/modules/history'

export const metadata: Metadata = {
  title: 'Lịch sử hình thành',
  description: 'Hành trình 15 năm xây dựng và phát triển Trường Song Ngữ Lạc Hồng - từ ngày thành lập 2011 đến nay'
}

export default function Page() {
  return <HistoryPage />
}
