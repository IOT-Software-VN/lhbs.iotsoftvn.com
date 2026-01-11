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

      {/* Custom Breadcrumb with Timeline-style decorations */}
      <div className='relative w-full bg-brand-green overflow-hidden'>
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/10 pointer-events-none' />

        {/* Decorative Orbs */}
        <div className='absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] opacity-[0.08] -mr-[250px] pointer-events-none mix-blend-screen' />
        <div className='absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-[0.05] -mr-[200px] pointer-events-none mix-blend-overlay' />

        {/* Background Pattern */}
        <div className='absolute inset-0 bg-[radial-gradient(#faba1e_0.5px,transparent_0.5px)] bg-size-[40px_40px] opacity-[0.03] pointer-events-none' />

        {/* Breadcrumb Content */}
        <BreadcrumbSection items={HISTORY_BREADCRUMB_ITEMS} variant='dark' backgroundColor='bg-transparent' />
      </div>

      {/* Main Timeline */}
      <HistoryTimeline />

      <HistoryMilestonesGrid />

      <HistoryFutureSection />

      <TestimonialQuoteSection testimonials={TESTIMONIALS} imagePath='/images/base/360.png' />
    </main>
  )
}
