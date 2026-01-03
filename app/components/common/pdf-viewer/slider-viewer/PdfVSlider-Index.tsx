import { useState } from 'react'
import { cn } from '@/lib/utils'
import { PdfDocumentViewer } from './PdfDocumentViewer'
import { PdfFullscreenModal } from './PdfFullscreenModal'

interface PdfVSliderProps {
  file: string
  className?: string
}

export function PdfVSlider({ file, className }: PdfVSliderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Future enhancement: We could lift state up to sync current page between inline and modal
  // For now, we just open modal at page 0 or keep them independent to avoid complexity

  return (
    <div className={cn('relative w-full', className)}>
      {/* Inline Viewer */}
      {/* User requested: Card outer size is half of PDF, inner canvas is full height */}
      {/* We implement this by setting a fixed max-height on the container (via className prop or utility) */}
      {/* and letting the PdfDocumentViewer handle the inner layout */}

      <PdfDocumentViewer
        file={file}
        mode='inline'
        onToggleFullscreen={() => setIsModalOpen(true)}
        className='w-full h-full min-h-[600px]'
      />

      {/* Fullscreen Modal */}
      <PdfFullscreenModal file={file} isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
