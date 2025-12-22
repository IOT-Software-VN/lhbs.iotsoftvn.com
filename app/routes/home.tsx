import { useNavigate } from 'react-router';
import type { Route } from './+types/home'
import { EducationLevel, TheNumbers, TestimonialQuoteSection, FoundingMessageSection, NewsEventsSection, HeroCarousel, TheLHBSEdge} from '@/components/home-page'
export function meta({}: Route.MetaArgs) {
  return [{ title: 'LHBS - Trường Song Ngữ Lạc Hồng' }, { name: 'description', content: 'Chào mừng tới Trường Song Ngữ Lạc Hồng - LHBS' }]
}

export default function Home() {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
    return(
    <>
      <HeroCarousel onNavigate={handleNavigate} />
      <EducationLevel />
      <TheLHBSEdge onNavigate={handleNavigate} />
      <TheNumbers/>
      <FoundingMessageSection onNavigate={handleNavigate} />
      <NewsEventsSection onNavigate={handleNavigate} />
      <TestimonialQuoteSection onNavigate={handleNavigate} />
    </>
  )
}
