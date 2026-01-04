import {
  EducationLevel,
  TheNumbers,
  TestimonialQuoteSection,
  NewsEventsSection,
  HeroCarousel,
  ProgramsSection
} from '../components'

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <EducationLevel />
      <TheNumbers />
      <ProgramsSection />
      <NewsEventsSection />
      <TestimonialQuoteSection />
    </>
  )
}
