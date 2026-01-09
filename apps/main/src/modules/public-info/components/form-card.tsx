'use client'

import { motion } from 'motion/react'
import { Download, FileText, Clock } from 'lucide-react'
import Image from 'next/image'
import { type FormDocument } from '../types'

interface FormCardProps {
  form: FormDocument
  index: number
  failedIframes: Set<string>
  onIframeError: (formId: string) => void
  onDownload: (pdfUrl: string) => void
}

export function FormCard({ form, index, failedIframes, onIframeError, onDownload }: FormCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className='bg-white rounded-xl overflow-hidden border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col'>
        {/* Header */}
        <div className='bg-linear-to-r from-brand-green to-brand-green-dark p-3 md:p-4 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-24 h-24 bg-brand-gold opacity-10 rounded-full -mr-12 -mt-12' />
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
                onError={() => onIframeError(form.id || '')}
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
              onClick={() => onDownload(form.pdfUrl)}
              className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-brand-gold hover:bg-[#e5a812] text-brand-green font-bold text-xs rounded-full transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md'
            >
              <Download className='w-3.5 h-3.5' />
              <span>Tải xuống</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
