import { SubPageHero } from '@/components/common/sub-page-hero'
import { BreadcrumbSection } from '@/components/common/breadcrumb-section'
import { DirectorsWelcomeSection, DirectorsCarousel, StudentAchievementsSection } from '../components'
import { DIRECTORS_BREADCRUMB_ITEMS } from '../constants'

export function DirectorsPage() {
  return (
    <>
      <SubPageHero
        title='Ban Lãnh đạo'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2022/11/MG_5251.jpg'
      />
      <BreadcrumbSection items={DIRECTORS_BREADCRUMB_ITEMS} />
      <DirectorsWelcomeSection />
      <DirectorsCarousel />
      <StudentAchievementsSection />
    </>
  )
}
