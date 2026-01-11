import { SubPageHero, BreadcrumbSection, TestimonialQuoteSection } from '@lhbs/ui'
import { DirectorsWelcomeSection, DirectorsCarousel, StudentAchievementsSection } from './components'
import { DIRECTORS_BREADCRUMB_ITEMS } from './constants'
import { TESTIMONIALS } from '@/data/testimonials-data'

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
      <TestimonialQuoteSection testimonials={TESTIMONIALS} imagePath='/images/base/360.png' />
      {/* <StudentAchievementsSection /> */}
    </>
  )
}
