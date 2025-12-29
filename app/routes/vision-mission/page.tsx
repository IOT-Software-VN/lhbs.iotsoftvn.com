import type { Route } from './+types/page'
import {
  WelcomeSection,
  FoundingMessageSection,
  MissionSection,
  VisionSection,
  CoreValuesSection,
  TestimonialQuoteSection
} from '@/components/vision-mission'
import SubPageHero from '@/components/shared-ui/hero-carousel'

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
      <SubPageHero
        title="Tầm nhìn & Sứ mệnh"
        subtitle="Kiến tạo tương lai - Vươn tầm quốc tế"
        backgroundImage="https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg"
      />
      <WelcomeSection onNavigate={handleNavigate} />
      <FoundingMessageSection onNavigate={handleNavigate} />
      <VisionSection />
      <MissionSection />
      <CoreValuesSection />
      <TestimonialQuoteSection onNavigate={handleNavigate} />
    </>
  )
}
