import type { Route } from './+types/LearningPathPage'
import { OverviewSection } from '../components'
import { SubPageHero } from '@/components/common/SubPageHero'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/Breadcrumb'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Lộ trình học tập - LHBS' },
    {
      name: 'description',
      content: 'Khám phá lộ trình học tập toàn diện từ Mầm non đến Trung học Phổ thông tại LHBS.'
    }
  ]
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Chương trình đào tạo' },
  { label: 'Lộ trình học tập' }
]

export function LearningPathPage() {
  const handleNavigate = (path: string) => {
    // navigate logic if needed, currently passed to OverviewSection
    window.location.href = path
  }

  return (
    <>
      <SubPageHero
        title='LỘ TRÌNH HỌC TẬP'
        subtitle='Hành trình kiến tạo tương lai vững chắc'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <OverviewSection onNavigate={handleNavigate} />
    </>
  )
}

export default LearningPathPage
