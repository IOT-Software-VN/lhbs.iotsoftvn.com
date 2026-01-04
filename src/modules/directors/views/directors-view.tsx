import { SubPageHero } from '@/components/common/sub-page-hero'
import { WelcomeSection, DirectorsCarousel, StudentAchievementsSection } from '../components'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/breadcrumb'

const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Trang chủ', path: '/' }, { label: 'Ban lãnh đạo' }]

export function DirectorsPage() {
  return (
    <>
      <SubPageHero
        title='Ban Lãnh đạo'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2022/11/MG_5251.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <WelcomeSection />
      <DirectorsCarousel />
      <StudentAchievementsSection />
    </>
  )
}
