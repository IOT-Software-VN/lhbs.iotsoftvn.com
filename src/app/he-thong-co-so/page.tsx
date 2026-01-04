import type { Metadata } from 'next'
import { CampusPage } from '@/modules/campus'

export const metadata: Metadata = {
  title: 'Hệ thống cơ sở giáo dục',
  description: 'Khám phá hệ thống cơ sở vật chất hiện đại của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <CampusPage />
}
