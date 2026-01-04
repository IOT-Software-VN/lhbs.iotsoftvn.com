'use client'

import { motion } from 'motion/react'
import { Download, FileText, Clock } from 'lucide-react'
import { useState } from 'react'
import { formDocuments, formCategories } from '../../mock-data'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function FormsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('admission')
  const [failedIframes, setFailedIframes] = useState<Set<string>>(new Set())

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  const handleIframeError = (formId: string) => {
    setFailedIframes((prev) => new Set(prev).add(formId))
  }

  const filteredForms = formDocuments.filter((form) => form.category === activeCategory)

  return (
    <section className='w-full py-12 md:py-24 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #1e5338 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center text-center mb-12 md:mb-16'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3'>Biểu mẫu & Tài liệu</p>
          <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-brand-green'>
            Biểu mẫu cho phụ huynh
          </h2>
          <p className='text-base md:text-lg text-gray-600 mt-4 max-w-2xl'>
            Tải xuống các biểu mẫu cần thiết cho các thủ tục liên quan đến học sinh
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center mb-12 md:mb-16'
        >
          <div className='inline-flex flex-wrap justify-center gap-2 md:gap-3 p-2 bg-white rounded-full border-2 border-gray-200 shadow-lg'>
            {formCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-brand-green text-white shadow-lg scale-105'
                    : 'bg-transparent text-brand-green hover:bg-gray-50'
                )}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Forms Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5'
        >
          {filteredForms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className='bg-white rounded-xl overflow-hidden border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col'>
                {/* Header */}
                <div className='bg-linear-to-r from-lhbs-green to-lhbs-green-dark p-3 md:p-4 relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-24 h-24 bg-lhbs-yellow opacity-10 rounded-full -mr-12 -mt-12' />
                  <div className='relative z-10 flex items-start gap-3'>
                    <div className='shrink-0 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center'>
                      <FileText className='w-5 h-5 text-white' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-sm md:text-base font-bold text-white leading-snug mb-1 line-clamp-2 min-h-10'>
                        {form.name}
                      </h3>
                      <div className='flex items-center gap-1.5 text-[10px] text-white/80'>
                        <Clock className='w-3 h-3 shrink-0' />
                        <span className='truncate'>{form.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col'>
                  {/* PDF Preview */}
                  <div className='overflow-hidden bg-gray-50'>
                    {failedIframes.has(form.id || '') ? (
                      <div className='w-full h-[300px] flex items-center justify-center relative'>
                        <Image
                          src='/images/base/placeholder.png'
                          alt='Placeholder'
                          fill
                          className='object-contain opacity-60'
                        />
                      </div>
                    ) : (
                      <iframe
                        src={form.pdfUrl}
                        className='w-full h-[300px] border-0'
                        title={form.name}
                        loading='lazy'
                        onError={() => handleIframeError(form.id || '')}
                      />
                    )}
                  </div>

                  <p className='text-xs text-gray-600 leading-relaxed mb-3 flex-1 line-clamp-2 px-3 md:px-4 pt-3'>
                    {form.description}
                  </p>

                  <div className='flex items-center justify-between mb-3 pt-2 border-t border-gray-100 px-3 md:px-4'>
                    <span className='text-[10px] text-gray-500 font-medium truncate'>{form.fileSize}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-2 px-3 md:px-4 pb-3 md:pb-4'>
                    <button
                      onClick={() => handleDownload(form.pdfUrl)}
                      className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-lhbs-yellow hover:bg-[#e5a812] text-lhbs-green font-bold text-xs rounded-full transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md'
                    >
                      <Download className='w-3.5 h-3.5' />
                      <span>Tải xuống</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredForms.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-center py-12'>
            <FileText className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <p className='text-gray-500 text-lg'>Chưa có biểu mẫu nào trong danh mục này</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
