import type { Metadata } from 'next'
import { VisionMissionPage } from '@/modules/vision-mission'

export const metadata: Metadata = {
  title: 'Tầm nhìn & Sứ mệnh',
  description: 'Tầm nhìn, sứ mệnh và giá trị cốt lõi của Trường Song Ngữ Lạc Hồng'
}

export default function Page() {
  return <VisionMissionPage />
}
