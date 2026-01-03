import { useNavigate } from 'react-router'
import type { Route } from './+types/page'
import { WelcomeSection, CampusInfoSection } from '@/components/our-campus/index'
import SubPageHero from '@/components/shared-ui/sub-page-hero'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Hệ thống cơ sở giáo dục - LHBS' },
    { name: 'description', content: 'Thông tin chung cơ sở giáo dục của Trường Song ngữ Lạc Hồng - LHBS' }
  ]
}
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/Breadcrumb'

export default function OurCampusPage() {
  const navigate = useNavigate()
  const handleNavigate = (path: string) => {
    navigate(path)
  }

  const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Trang chủ', path: '/' }, { label: 'Hệ thống cơ sở giáo dục' }]

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

      <WelcomeSection onNavigate={handleNavigate} />
      <CampusInfoSection onNavigate={handleNavigate} />
    </>
  )
}
