import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { cn } from '@/lib/utils'

// PDF Worker is configured in the slider component globally or here too if needed
// Providing it here in case this component is used independently
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

interface PdfSimpleViewerProps {
  file: string
  className?: string
  height?: number
}

export function PdfSimpleViewer({ file, className, height = 300 }: PdfSimpleViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <div
      className={cn('w-full bg-gray-50 border border-gray-100 rounded-lg overflow-hidden relative group', className)}
      style={{ height }}
    >
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className='flex items-center justify-center h-full w-full bg-gray-100'>
            <div className='animate-pulse w-8 h-8 rounded-full bg-gray-300'></div>
          </div>
        }
        error={
          <div className='flex items-center justify-center h-full w-full text-xs text-red-500 bg-red-50 p-2 text-center'>
            PDF Error
          </div>
        }
        className='w-full h-full overflow-y-auto custom-scrollbar'
      >
        <div className='flex flex-col items-center gap-4 py-4'>
          {/* Render all pages vertically but small */}
          {Array.from(new Array(numPages), (_el, index) => (
            <div
              key={`page_${index + 1}`}
              className='shadow-md bg-white w-[90%] transition-transform hover:scale-[1.02] duration-300'
            >
              <Page
                pageNumber={index + 1}
                width={250} // Fixed small width for preview
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </div>
      </Document>

      {/* Overlay for interaction hint */}
      <div className='absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors pointer-events-none' />
    </div>
  )
}
