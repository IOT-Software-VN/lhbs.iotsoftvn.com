import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import type { Route } from './+types/home'
import { EducationLevel, TheNumbers, FoundingMessageSection, CoreStrengthsSection, CoreStrengthModal } from '@/components/home-page'
import { HeroCarousel, NewsEventsSection, TestimonialQuoteSection, type HeroContent } from "@sites/index"
export function meta({}: Route.MetaArgs) {
  return [{ title: 'LHBS - Trường Song Ngữ Lạc Hồng' }, { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }]
}

export default function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('home-page');

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const [showCoreStrengthModal, setShowCoreStrengthModal] = useState<{ title: string; description: string; points: string[]; image: string; alt: string } | null>(null);

  // Hero content với i18n
  const heroContent: HeroContent = {
    subtitle: t('hero.subtitle'),
    decorativeLineColor: '#FABA1E',
    title: {
      line1: t('hero.title.line1'),
      line2: t('hero.title.line2')
    },
    tagline: t('hero.tagline'),
    ctaButton: {
      text: t('hero.ctaButton.text'),
      url: '/admissions'
    }
  };

    return(
    <>
      <HeroCarousel content={heroContent} onNavigate={handleNavigate} />
      <EducationLevel />
      <TheNumbers/>
      <FoundingMessageSection onNavigate={handleNavigate} />
      {/* Section xxx: Core Strengths - 5 Pillars */}
      <CoreStrengthsSection showModal={showCoreStrengthModal} setShowModal={setShowCoreStrengthModal} />
      {showCoreStrengthModal && (
        <CoreStrengthModal
          title={showCoreStrengthModal.title}
          description={showCoreStrengthModal.description}
          points={showCoreStrengthModal.points}
          image={showCoreStrengthModal.image}
          alt={showCoreStrengthModal.alt}
          onClose={() => setShowCoreStrengthModal(null)}
        />
      )}
      <NewsEventsSection onNavigate={handleNavigate} />
      <TestimonialQuoteSection onNavigate={handleNavigate} />
    </>
  )
}
