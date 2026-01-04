'use client'

import { useRouter } from 'next/navigation'
import { WelcomeSection, CampusInfoSection } from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/breadcrumb'

const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Trang chủ', path: '/' }, { label: 'Hệ thống cơ sở giáo dục' }]

export function CampusPage() {
  const router = useRouter()
  const handleNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <SubPageHero
        title='Hệ thống cơ sở giáo dục'
        subtitle='Cơ sở giáo dục thuộc trường Song ngữ Lạc Hồng'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2022/11/BL8Q8839-scaled.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <WelcomeSection />
      <CampusInfoSection onNavigate={handleNavigate} />
    </>
  )
}
