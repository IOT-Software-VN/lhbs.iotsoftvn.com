import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Globe, Facebook } from 'lucide-react'
import { useState } from 'react'
import { campusData, type CampusInfo } from '../../mock-data'
import { cn } from '@/lib/utils'

interface CampusInfoSectionProps {
  onNavigate?: (path: string) => void
}

export function CampusInfoSection({ onNavigate }: CampusInfoSectionProps) {
  const [activePreschool, setActivePreschool] = useState<number>(0)

  const handleWebsiteClick = (website: string) => {
    if (onNavigate) {
      onNavigate(website)
    } else {
      window.open(website, '_blank', 'noopener,noreferrer')
    }
  }

  // Phân loại dữ liệu
  const highSchool = campusData[0] // Phổ thông
  const preschools = campusData.slice(1) // 3 cơ sở mầm non

  return (
    <section className='w-full py-12 md:py-24 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, var(--color-brand-green) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 relative z-10 space-y-16 md:space-y-24'>
        {/* ========== PHẦN 1: TRƯỜNG PHỔ THÔNG ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className='flex flex-col items-center text-center mb-8 md:mb-12'>
            <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3'>Bậc Phổ thông</p>
            <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-brand-green'>
              {highSchool.shortName}
            </h2>
          </div>

          {/* Campus Info Split Layout */}
          <CampusInfoSplit campus={highSchool} onWebsiteClick={handleWebsiteClick} />
        </motion.div>

        {/* ========== PHẦN 2: HỆ THỐNG MẦM NON ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title */}
          <div className='flex flex-col items-center text-center mb-8 md:mb-12'>
            <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3'>
              Hệ thống Mầm non - {preschools.length} cơ sở
            </p>
            <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-brand-green'>
              Trường Mầm non Song ngữ Lạc Hồng
            </h2>
          </div>

          {/* Tabs cho 3 cơ sở mầm non */}
          <div className='flex justify-center mb-8 md:mb-12'>
            <div className='inline-flex flex-wrap justify-center gap-2 p-2 bg-gray-100 rounded-full'>
              {preschools.map((campus, index) => (
                <button
                  key={campus.id}
                  onClick={() => setActivePreschool(index)}
                  className={cn(
                    'px-5 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300',
                    activePreschool === index
                      ? 'bg-brand-green text-white shadow-lg scale-105'
                      : 'bg-transparent text-brand-green hover:bg-white'
                  )}
                >
                  {campus.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Display selected preschool */}
          <CampusInfoSplit campus={preschools[activePreschool]} onWebsiteClick={handleWebsiteClick} />
        </motion.div>
      </div>
    </section>
  )
}

interface CampusInfoSplitProps {
  campus: CampusInfo
  onWebsiteClick: (website: string) => void
}

function CampusInfoSplit({ campus }: CampusInfoSplitProps) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_10px_50px_rgba(0,0,0,0.08)]'>
      {/* LEFT: Google Map */}
      <div className='relative h-[350px] md:h-[450px] lg:h-auto lg:min-h-[500px]'>
        <iframe
          src={campus.mapEmbedUrl}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title={`Bản đồ ${campus.shortName}`}
          className='absolute inset-0 w-full h-full'
        />
      </div>

      {/* RIGHT: Campus Information */}
      <div className='p-8 md:p-10 lg:p-12 flex flex-col justify-center'>
        {/* Header */}
        <div className='mb-4 w-20 h-1 bg-brand-gold rounded-full' />

        <div className=''>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-black text-brand-green mb-3 leading-tight'>
            {campus.name}
          </h3>
        </div>

        {/* Contact Details */}
        <div className='space-y-5 mb-8'>
          {/* Address */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center'>
              <MapPin className='w-5 h-5 text-brand-green' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-1 font-bold'>Địa chỉ</p>
              <p className='text-base md:text-lg text-gray-800 leading-relaxed'>{campus.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center'>
              <Phone className='w-5 h-5 text-brand-green' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-1 font-bold'>Điện thoại</p>
              <a
                href={`tel:${campus.phone.replace(/\s/g, '')}`}
                className='text-base md:text-lg text-brand-green hover:text-brand-gold transition-colors font-semibold'
              >
                {campus.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center'>
              <Mail className='w-5 h-5 text-brand-green' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-1 font-bold'>Email</p>
              <a
                href={`mailto:${campus.email}`}
                className='text-base md:text-lg text-brand-green hover:text-brand-gold transition-colors font-medium'
              >
                {campus.email}
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <a
            target='_blank'
            href={campus.website}
            className='flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold hover:bg-[#e5a812] text-brand-green font-bold text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <Globe className='w-5 h-5' />
            <span>Truy cập Website</span>
          </a>

          <a
            href={campus.facebook}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3 px-8 py-4 bg-brand-green hover:bg-[#163d2a] text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <Facebook className='w-5 h-5' />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  )
}
