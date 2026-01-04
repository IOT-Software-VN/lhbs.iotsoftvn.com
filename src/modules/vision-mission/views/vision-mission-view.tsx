import {
  WelcomeSection,
  FoundingMessageSection,
  MissionSection,
  VisionSection,
  CoreValuesSection,
  TestimonialQuoteSection
} from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/breadcrumb'

const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Trang chủ', path: '/' }, { label: 'Tầm nhìn & Sứ mệnh' }]

export function VisionMissionPage() {
  return (
    <>
      <SubPageHero
        title='Tầm nhìn & Sứ mệnh'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <WelcomeSection />
      <FoundingMessageSection />
      <VisionSection />
      <MissionSection />
      <CoreValuesSection />
      <TestimonialQuoteSection />
    </>
  )
}
