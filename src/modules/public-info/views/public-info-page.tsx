import { MainReportSection, ArchiveReportsSection, FormsSection } from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { BreadcrumbSection } from '@/components/common/breadcrumb-section'
import { PUBLIC_INFO_BREADCRUMB_ITEMS } from '../constants'

export function PublicInfoPage() {
  return (
    <>
      <SubPageHero
        title='CÔNG KHAI THÔNG TIN'
        subtitle='Báo cáo thường niên và quy chế hoạt động chính thức của Trường Song ngữ Lạc Hồng'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />
      <BreadcrumbSection items={PUBLIC_INFO_BREADCRUMB_ITEMS} />
      <MainReportSection />
      <FormsSection />
      <ArchiveReportsSection />
    </>
  )
}
