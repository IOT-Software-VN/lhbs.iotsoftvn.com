import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { PdfDocumentViewer } from './pdf-document-viewer'

interface PdfFullscreenModalProps {
  file: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  initialPage?: number
}

export function PdfFullscreenModal({ file, isOpen, onOpenChange, initialPage = 0 }: PdfFullscreenModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className='min-w-screen h-dvh w-screen p-0 border-0 rounded-none bg-black/60 backdrop-blur-md flex flex-col overflow-hidden focus:outline-none z-9999'
      >
        {/* We don't use DialogHeader here to maximize space, controls are inside Viewer */}
        <div className='flex-1 w-full h-full p-4 md:p-6 overflow-hidden'>
          <PdfDocumentViewer
            file={file}
            mode='fullscreen'
            onToggleFullscreen={() => onOpenChange(false)}
            initialPage={initialPage}
            className='h-full w-full'
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
