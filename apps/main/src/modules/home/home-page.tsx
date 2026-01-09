import { EducationLevelSection, TheNumbersSection, NewsEventsSection, HeroCarousel } from './components'
import { TestimonialQuoteSection } from '@lhbs/ui'
import { TESTIMONIALS } from '@/data/testimonials-data'

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <EducationLevelSection />
      <TheNumbersSection />
      <NewsEventsSection />
      <TestimonialQuoteSection testimonials={TESTIMONIALS} imagePath='/images/base/360.png' />
    </>
  )
}
