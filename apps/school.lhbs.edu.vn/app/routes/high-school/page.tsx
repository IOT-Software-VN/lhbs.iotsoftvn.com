import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { useOutletContext } from 'react-router';
import { 
  StudentAchievementsSection, 
  LetsBeginCTA, 
  TestimonialQuoteSection, 
  NewsEventsSection, 
  HeroCarousel, 
  TypicalDaySection, 
  AcademicSection, 
  GlobalRankingSection,
  FacilitiesSection,
  ActivitiesSection } from '@/components/high-school'
import ScrollToTop from '@sites/index';


export function meta({}: Route.MetaArgs) {
  return [
    { title: 'High School - LHBS Lạc Hồng Bilingual School' }, 
    { name: 'description', content: 'LHBS High School - Empowering students from Grade 10-12 through rigorous academic programs, bilingual education, and leadership development for university success.' },
    { name: 'keywords', content: 'LHBS High School, Trường THPT Lạc Hồng, bilingual high school Vietnam, international curriculum, university preparation' }
  ]
}

export default function Home() {
  const { onNavigate } = useOutletContext<{ onNavigate: (path: string) => void }>();
  
  return(
    <>
    
      <HeroCarousel onNavigate={onNavigate} />
      <TypicalDaySection/>
      <AcademicSection onNavigate={onNavigate} />
      <StudentAchievementsSection/>
      <FacilitiesSection/>
      <ActivitiesSection/>
      <GlobalRankingSection/>
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      {/* <LetsBeginCTA onNavigate={onNavigate} /> */}
      <ScrollToTop/>
    </>
  )
}
