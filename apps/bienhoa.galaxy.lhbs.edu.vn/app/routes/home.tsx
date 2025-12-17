import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { LetsBeginCTA, EducationLevel, TheNumbers, TestimonialQuoteSection, EducationPillarsSection, CoreStrengthModal, CoreStrengthsSection, FoundingMessageSection, NewsEventsSection, TestimonialsSection, HeroCarousel, CollegeAcceptancesSection, EducationPillarModal, TypicalDaySection, AcademicSection, StudentCareSection } from '@/components/home-page'
import { ScrollToTop } from '@sites/index';
import { useOutletContext } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'LHBS - Trường Song Ngữ Lạc Hồng' }, { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }]
}

export default function Home() {
    const { onNavigate } = useOutletContext<{ onNavigate: (path: string) => void }>()

    return(
    <>
    
      <HeroCarousel onNavigate={onNavigate} />
      <AcademicSection onNavigate={onNavigate} />
      <TypicalDaySection />
      {/* Section xxx: Founding Message */}
      <FoundingMessageSection onNavigate={onNavigate} />
      <StudentCareSection />
      {/* Section xxx: Core Strengths - 5 Pillars */}
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      <ScrollToTop/>
    </>
  )
}
