import { useState } from 'react'
import { Link } from 'react-router'
import lhbs from '@assets/images/base/lhbs.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@sites/index'
import { ChevronRight, Clock, Sparkles, Sprout } from 'lucide-react'

const learningCards = [
  {
    id: 1,
    title: 'Individual Learning Pace',
    description:
      'Each student progresses at a pace that suits their abilities, ensuring they feel confident, supported, and never overwhelmed.',
    icon: Clock
  },
  {
    id: 2,
    title: 'Tailored Instruction & Activities',
    description:
      "Lessons are thoughtfully adapted to each child's strengths, needs, and interests, helping them stay engaged and develop a genuine love for learning.",
    icon: Sparkles
  },
  {
    id: 3,
    title: 'Focused Guidance for Growth',
    description:
      'Teachers provide targeted support and feedback, helping students overcome challenges, build essential skills, and achieve steady, meaningful progress.',
    icon: Sprout
  }
]

const stats = [
  { value: '2', label: 'Campuses' },
  { value: '26', label: 'Classrooms' },
  { value: '34', label: 'Teachers' }
]

interface OverviewSectionProps {
  onNavigate: (path: string) => void
}

export default function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'high'>('primary')

  return (
    <section id='overview' className='py-16 md:py-24 pb-0! bg-white'>
      <div className='max-w-[1440px] mx-auto px-4 md:px-20'>
        {/* Section Header - Personalized Learning Method */}
        <div className='flex flex-col items-center mb-16'>
          <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-wide drop-shadow-sm text-center'>
            Personalized learning method
          </h3>
        </div>

        {/* Carousel Cards - Above Timeline */}
        <div className='mb-20 max-w-6xl mx-auto'>
          <Carousel
            opts={{
              align: 'center',
              loop: true
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-4 md:-ml-6 pb-4'>
              {learningCards.map((card) => (
                <CarouselItem key={card.id} className='pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3'>
                  <div className='group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center'>
                    {/* Icon Circle */}
                    <div className='mb-8 w-20 h-20 rounded-full bg-[#f8fcf5] flex items-center justify-center group-hover:bg-[#1E5338] group-hover:scale-110 transition-all duration-300'>
                      <card.icon
                        strokeWidth={1.5}
                        className='w-10 h-10 text-[#1E5338] group-hover:text-[#FABA1E] transition-colors duration-300'
                      />
                    </div>

                    {/* Title */}
                    <h3 className='text-xl md:text-2xl font-bold text-[#1A5336] mb-4 group-hover:text-[#006b3d] transition-colors'>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className='text-gray-600 font-medium text-sm md:text-[15px] leading-relaxed group-hover:text-gray-900 transition-colors'>
                      {card.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex -left-4 w-12 h-12 border-2 border-[#1E5338]/20 bg-white text-[#1E5338] hover:bg-[#1E5338] hover:text-white transition-all' />
            <CarouselNext className='hidden md:flex -right-4 w-12 h-12 border-2 border-[#1E5338]/20 bg-white text-[#1E5338] hover:bg-[#1E5338] hover:text-white transition-all' />
          </Carousel>
        </div>

        {/* Timeline with 5 Dots */}
        <div className='mb-20'>
          <div className='max-w-3xl mx-auto px-4'>
            <div className='relative h-20'>
              {/* Line */}
              <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#E5E7EB] rounded-full overflow-hidden'>
                <div
                  className='absolute top-0 left-0 h-full bg-[#FABA1E] transition-all duration-500 ease-out rounded-full'
                  style={{
                    width: activeTab === 'primary' ? '25%' : activeTab === 'secondary' ? '50%' : '75%'
                  }}
                />
              </div>

              {/* Dot 1 */}
              <button
                onClick={() => setActiveTab('primary')}
                className='absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 z-10 bg-[#FABA1E] outline-4 outline-white outline'
              />

              {/* Dot 2 - LHBS Image with white background */}
              <div className='absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none pointer-events-none'>
                {/* White circle background to create gap */}
                <div className='absolute inset-0 bg-white rounded-full w-16 h-16 -translate-x-[2px] -translate-y-[2px] shadow-sm'></div>
                {/* LHBS Image */}
                <img
                  src={lhbs}
                  alt='LHBS'
                  className='w-14 h-14 object-contain relative z-10 grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>

              {/* Dot 3 */}
              <button
                onClick={() => setActiveTab('secondary')}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 z-10 outline-4 outline-white outline
                  ${
                    activeTab === 'secondary'
                      ? 'bg-[#FABA1E] scale-125 shadow-lg'
                      : 'bg-[#E5E7EB] hover:bg-gray-300 hover:scale-110'
                  }`}
              />

              {/* Dot 4 */}
              <button
                onClick={() => setActiveTab('high')}
                className={`absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 z-10 outline-4 outline-white outline
                  ${
                    activeTab === 'high'
                      ? 'bg-[#FABA1E] scale-125 shadow-lg'
                      : 'bg-[#E5E7EB] hover:bg-gray-300 hover:scale-110'
                  }`}
              />

              {/* Dot 5 */}
              <button className='absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 z-10 bg-[#E5E7EB] outline-4 outline-white outline' />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Row - Full Width */}
      <div className='w-full'>
        <div className='grid grid-cols-12 max-w-[1920px] mx-auto'>
          {/* Left Column - Green Background */}
          <div className='col-span-12 lg:col-span-6 bg-[#1A5336] py-16 px-8 flex items-center justify-center relative overflow-hidden'>
            <div className='absolute inset-0 bg-[#000000]/10'></div>
            <button
              className='relative z-10 flex items-center gap-4 text-white hover:text-[#FABA1E] transition-all duration-300 group'
              onClick={() => onNavigate('/milestones')}
            >
              <span className='text-3xl md:text-4xl font-black uppercase tracking-widest'>Explore the milestones</span>
              <div className='w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-[#FABA1E] group-hover:border-[#FABA1E] group-hover:text-[#1A5336] transition-all duration-300'>
                <ChevronRight className='w-6 h-6 transition-transform group-hover:translate-x-0.5' />
              </div>
            </button>
          </div>

          {/* Right Column - Yellow Background with Stats */}
          <div className='col-span-12 lg:col-span-6 bg-[#FABA1E] py-16 px-8'>
            <div className='grid grid-cols-3 gap-0 h-full max-w-2xl mx-auto'>
              {stats.map((stat, index) => (
                <div key={index} className='relative flex flex-col items-center justify-center group'>
                  {/* Divider */}
                  {index > 0 && (
                    <div className='absolute left-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-[#1A5336]/20'></div>
                  )}

                  {/* Stat Content */}
                  <div className='text-center transform transition-transform duration-300 group-hover:-translate-y-2'>
                    <h3 className='text-5xl md:text-7xl font-black text-[#1A5336] mb-3 leading-none tracking-tighter'>
                      {stat.value}
                    </h3>
                    <p className='text-[#1A5336] font-bold text-sm md:text-base uppercase tracking-widest'>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
