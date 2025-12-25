import type { Route } from './+types/page'
import {
  VisionMissionHero,
  FoundingMessageSection,
  MissionSection,
  VisionSection,
  CoreValuesSection
} from '@/components/vision-mission'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Tầm nhìn & Sứ mệnh - LHBS' },
    { name: 'description', content: 'Tìm hiểu về tầm nhìn, sứ mệnh và giá trị cốt lõi của Trường Song ngữ Lạc Hồng - LHBS' }
  ]
}

export default function VisionMissionPage() {
  const handleNavigate = (path: string) => {
    window.location.href = path
  }

  return (
    <>
      <VisionMissionHero onNavigate={handleNavigate} />
      <FoundingMessageSection onNavigate={handleNavigate} />
      <MissionSection />
      <VisionSection />
      <CoreValuesSection />
    </>
  )
}
