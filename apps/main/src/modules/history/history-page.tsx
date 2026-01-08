import { HistoryTimeline, HistoryMilestonesGrid, HistoryFutureSection } from './components'
import { BreadcrumbSection, SubPageHero, TestimonialQuoteSection } from '@lhbs/ui'
import { HISTORY_BREADCRUMB_ITEMS, HERO_BACKGROUND_IMAGE } from './constants'
import { TESTIMONIALS } from '@/data/testimonials-data'

export function HistoryPage() {
  return (
    <main className='bg-white overflow-hidden'>
      <SubPageHero
        title='Lịch sử hình thành'
        subtitle='Kiến tạo tương lai - Vươn tầm quốc tế'
        backgroundImage={HERO_BACKGROUND_IMAGE}
      />

      <BreadcrumbSection items={HISTORY_BREADCRUMB_ITEMS} />

      {/* Main Timeline */}
      <HistoryTimeline />

      <HistoryMilestonesGrid />

      <HistoryFutureSection />

      <TestimonialQuoteSection testimonials={TESTIMONIALS} imagePath='/images/base/360.png' />
    </main>
  )
}
