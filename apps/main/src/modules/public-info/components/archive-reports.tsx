'use client'

import { motion } from 'motion/react'
import { Download, FileText } from 'lucide-react'
import { annualReports } from '../constants'

export function ArchiveReportsSection() {
  const archiveReports = annualReports.filter((report) => !report.featured)

  const handleDownload = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = url.split('/').pop() || 'document.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (archiveReports.length === 0) return null

  return (
    <section className='w-full mb-12 py-8 md:py-12 bg-gray-50 border-t border-gray-100 relative overflow-hidden'>
      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        {/* Subtle Header */}
        <div className='flex items-center gap-4 mb-6 md:mb-8 opacity-70'>
          <div className='h-px flex-1 bg-gray-300'></div>
          <h3 className='text-sm font-bold text-gray-500 uppercase tracking-widest'>Lưu trữ báo cáo</h3>
          <div className='h-px flex-1 bg-gray-300'></div>
        </div>

        {/* Reports Grid - Compact */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {archiveReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className='group bg-white rounded-xl p-4 border border-gray-200 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-md flex items-center gap-4 cursor-pointer'
                onClick={() => handleDownload(report.pdfUrl)}
              >
                {/* Icon */}
                <div className='shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors'>
                  <FileText className='w-5 h-5 text-gray-400 group-hover:text-brand-gold transition-colors' />
                </div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between mb-1'>
                    <span className='text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-brand-gold/10 group-hover:text-brand-gold-dark transition-colors'>
                      {report.year}
                    </span>
                    <Download className='w-3.5 h-3.5 text-gray-300 group-hover:text-brand-green transition-colors' />
                  </div>
                  <h4
                    className='text-sm font-bold text-gray-700 truncate group-hover:text-brand-green transition-colors'
                    title={report.title}
                  >
                    {report.title}
                  </h4>
                  <div className='flex items-center gap-2 mt-1 text-xs text-gray-400'>
                    <span>{report.fileSize}</span>
                    <span>•</span>
                    <span>{report.publishDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
