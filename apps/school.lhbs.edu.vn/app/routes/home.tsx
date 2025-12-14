import { useState, useEffect } from 'react'
import type { Route } from './+types/home'
import { useOutletContext } from 'react-router'
import {
  StudentAchievementsSection,
  TestimonialQuoteSection,
  NewsEventsSection,
  HeroCarousel,
  AcademicSection,
  OverviewSection,
  GlobalRankingSection
} from '@/components/home-page'
import ScrollToTop from '@sites/index'
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'LHBS - Trường Song Ngữ Lạc Hồng' },
    { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }
  ]
}

export default function Home() {
  const { onNavigate } = useOutletContext<{ onNavigate: (path: string) => void }>()

  return (
    <>
      <HeroCarousel onNavigate={onNavigate} />
      <OverviewSection onNavigate={onNavigate} />
      <AcademicSection />
      <GlobalRankingSection />
      <StudentAchievementsSection />
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      <ScrollToTop />
      {/* <LetsBeginCTA onNavigate={onNavigate} /> */}
    </>
  )
}
