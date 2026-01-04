import { FoundingMessageSection, MissionSection, VisionSection, CoreValuesSection } from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { BreadcrumbSection } from '@/components/common/breadcrumb-section'
import { SchoolCommitmentSection } from '@/components/common/school-commitment-section'
import { TestimonialQuoteSection } from '@/components/common/testimonial-quote-section'
import { TESTIMONIALS } from '@/data/testimonials-data'
import { VISION_MISSION_BREADCRUMB_ITEMS } from '../constants'

export function VisionMissionPage() {
  return (
    <>
      <SubPageHero
        title='Tầm nhìn & Sứ mệnh'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg'
      />
      <BreadcrumbSection items={VISION_MISSION_BREADCRUMB_ITEMS} />
      <SchoolCommitmentSection />
      <FoundingMessageSection />
      <VisionSection />
      <MissionSection />
      <CoreValuesSection />
      <TestimonialQuoteSection testimonials={TESTIMONIALS} backgroundColor='bg-[#f2f2f28d]' imageOptimized={false} />
    </>
  )
}
