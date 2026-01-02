import type { Route } from './+types/page'
import { TheLHBSEdge, TestimonialQuoteSection } from '@/components/milestone'
import SubPageHero from '@/components/shared-ui/hero-carousel'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Cột mốc phát triển - LHBS' },
    {
      name: 'description',
      content: 'Tìm hiểu về những cột mốc phát triển và lợi thế giáo dục của Trường Song ngữ Lạc Hồng - LHBS'
    }
  ]
}

import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/components/Breadcrumb'

export default function MilestonePage() {
  const handleNavigate = (path: string) => {
    window.location.href = path
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Cột mốc đáng nhớ' }
  ]

  return (
    <>
      <SubPageHero
        title="CỘT MỐC ĐÁNG NHỚ"
        subtitle="Hành trình vươn tầm xuất sắc của LHBS"
        backgroundImage="https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg"
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-[#013b1d] pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb
            textClassName='text-white '
            activeTextClassName='text-white font-medium'
            separatorClassName='text-white'
            items={breadcrumbItems} />
        </div>
      </div>

      <TheLHBSEdge />
      <TestimonialQuoteSection onNavigate={handleNavigate} />
    </>
  )
}
