import { TheLHBSEdge } from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { BreadcrumbSection } from '@/components/common/breadcrumb-section'
import { TestimonialQuoteSection } from '@/components/common/testimonial-quote-section'
import { TESTIMONIALS } from '@/data/testimonials-data'
import { MILESTONE_BREADCRUMB_ITEMS } from '../constants'

export function MilestonePage() {
  return (
    <>
      <SubPageHero
        title='CỘT MỐC ĐÁNG NHỚ'
        subtitle='Hành trình vươn tầm xuất sắc của LHBS'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />
      <BreadcrumbSection items={MILESTONE_BREADCRUMB_ITEMS} variant='dark' />
      <TheLHBSEdge />
      <TestimonialQuoteSection testimonials={TESTIMONIALS} />
    </>
  )
}
