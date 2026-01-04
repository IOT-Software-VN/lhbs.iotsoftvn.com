import {
  EducationLevelSection,
  TheNumbersSection,
  NewsEventsSection,
  HeroCarousel,
  ProgramsSection
} from '../components'
import { TestimonialQuoteSection } from '@/components/common/testimonial-quote-section'
import { TESTIMONIALS } from '@/data/testimonials-data'

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <EducationLevelSection />
      <TheNumbersSection />
      <ProgramsSection />
      <NewsEventsSection />
      <TestimonialQuoteSection testimonials={TESTIMONIALS} imagePath='/images/home-page/quote-section/360.png' />
    </>
  )
}
