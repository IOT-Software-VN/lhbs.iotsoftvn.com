import { useState, useEffect } from 'react';
import type { Route } from './+types/home'
import { useOutletContext } from 'react-router';
import { 
  LetsBeginCTA, 
  TestimonialQuoteSection, 
  NewsEventsSection, 
  HeroCarousel, 
  TypicalDaySection, 
  AcademicSection, 
  FacilitiesSection,
  OverviewSection,
  ActivitiesSection
  } from '@/components/secondary-school'
import ScrollToTop from '@sites/index';


export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Secondary School - LHBS Lạc Hồng Bilingual School' }, 
    { name: 'description', content: 'LHBS Secondary School - Empowering students from Grade 06-09 through rigorous academic programs, bilingual education, and comprehensive development preparing for high school success.' },
    { name: 'keywords', content: 'LHBS Secondary School, Trường THCS Lạc Hồng, bilingual secondary school Vietnam, middle school education, international curriculum, grade 6-9' }
  ]
}

export default function SecondaryShoolPage() {
  const { onNavigate } = useOutletContext<{ onNavigate: (path: string) => void }>();
  
  return(
    <>
    
      <HeroCarousel onNavigate={onNavigate} />
      <OverviewSection onNavigate={onNavigate} />
      <AcademicSection onNavigate={onNavigate} />
      <FacilitiesSection/>
      <TypicalDaySection/>
      <ActivitiesSection/>
      <NewsEventsSection onNavigate={onNavigate} />
      <TestimonialQuoteSection onNavigate={onNavigate} />
      {/* <LetsBeginCTA onNavigate={onNavigate} /> */}
      <ScrollToTop/>
    </>
  )
}
