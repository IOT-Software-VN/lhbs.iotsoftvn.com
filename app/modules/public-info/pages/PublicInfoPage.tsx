import type { Route } from './+types/PublicInfoPage'
import { MainReportSection, ArchiveReportsSection, FormsSection } from '../components'
import { SubPageHero } from '@/components/common/SubPageHero'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/Breadcrumb'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Công khai thông tin - LHBS' },
    { name: 'description', content: 'Công khai thông tin thường niên của Trường Song ngữ Lạc Hồng - LHBS' }
  ]
}

const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Trang chủ', path: '/' }, { label: 'Công khai thông tin' }]

export function PublicInfoPage() {
  return (
    <>
      <SubPageHero
        title='CÔNG KHAI THÔNG TIN'
        subtitle='Báo cáo thường niên và quy chế hoạt động chính thức của Trường Song ngữ Lạc Hồng'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <MainReportSection />
      <FormsSection />
      <ArchiveReportsSection />
    </>
  )
}

export default PublicInfoPage
