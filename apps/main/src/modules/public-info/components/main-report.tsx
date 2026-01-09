'use client'

import { motion } from 'motion/react'
import { Download, Calendar, FileCheck } from 'lucide-react'
import { annualReports } from '../constants'
import dynamic from 'next/dynamic'

const PdfSimpleViewer = dynamic(() => import('@lhbs/ui').then((mod) => mod.PdfSimpleViewer), { ssr: false })

export function MainReportSection() {
  const featuredReport = annualReports.find((report) => report.featured) || annualReports[0]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = featuredReport.pdfUrl
    link.download = featuredReport.title + '.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className='w-full py-8 md:py-12 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, var(--color-brand-green) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className='w-full px-4 md:px-6 lg:px-8 relative z-10'>
        {/* Simplified Header & Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-7xl mx-auto mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4'
        >
          <div>
            <div className='flex items-center gap-3 mb-2'>
              <span className='px-3 py-1 bg-brand-gold text-brand-green text-xs font-black rounded-full uppercase shadow-sm'>
                Mới nhất
              </span>
              <span className='text-gray-500 font-medium text-sm'>Năm học {featuredReport.year}</span>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green leading-tight'>
              {featuredReport.title}
            </h2>
          </div>

          <div className='flex gap-3'>
            <button
              onClick={handleDownload}
              className='flex items-center gap-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg'
            >
              <Download className='w-4 h-4' />
              <span>Tải báo cáo</span>
            </button>
          </div>
        </motion.div>

        {/* PDF Slider - Compact Height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-7xl mx-auto'
        >
          {/* Added instruction text or helper if needed */}
          <div className='mb-2 flex justify-end'>
            <div className='flex items-center gap-4 text-xs text-gray-500'>
              <div className='flex items-center gap-1.5'>
                <Calendar className='w-3.5 h-3.5 text-brand-gold' />
                <span>{featuredReport.publishDate}</span>
              </div>
              <div className='w-px h-3 bg-gray-300' />
              <div className='flex items-center gap-1.5'>
                <FileCheck className='w-3.5 h-3.5 text-brand-gold' />
                <span>{featuredReport.fileSize}</span>
              </div>
            </div>
          </div>

          <PdfSimpleViewer file={featuredReport.pdfUrl} className='min-h-125min-h-[550px]' height={550} />
        </motion.div>
      </div>
    </section>
  )
}
