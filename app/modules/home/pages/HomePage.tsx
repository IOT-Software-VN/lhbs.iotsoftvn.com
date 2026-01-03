import { useNavigate } from 'react-router'
import type { Route } from './+types/HomePage'
import {
  EducationLevel,
  TheNumbers,
  TestimonialQuoteSection,
  NewsEventsSection,
  HeroCarousel,
  ProgramsSection
} from '../components'
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'LHBS - Trường Song Ngữ Lạc Hồng' },
    { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }
  ]
}

export function HomePage() {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }
  return (
    <>
      <HeroCarousel onNavigate={handleNavigate} />
      <EducationLevel />
      <TheNumbers />
      <ProgramsSection />
      <NewsEventsSection onNavigate={handleNavigate} />
      <TestimonialQuoteSection />
    </>
  )
}
export
default
HomePage
