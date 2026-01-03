import { useState, useCallback, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize } from 'lucide-react'
import { cn } from '@/lib/utils'

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

interface PdfDocumentViewerProps {
  file: string
  mode: 'inline' | 'fullscreen'
  onToggleFullscreen: () => void
  initialPage?: number
  className?: string
}

export function PdfDocumentViewer({
  file,
  mode,
  onToggleFullscreen,
  initialPage = 0,
  className
}: PdfDocumentViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentSnap, setCurrentSnap] = useState<number>(initialPage)
  const [scale, setScale] = useState<number>(1.0)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    axis: 'x',
    align: 'center',
    containScroll: 'trimSnaps',
    startIndex: initialPage
  })

  // Update container width on mount/resize
  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector(`.pdf-container-${mode}`)
      if (container) {
        setContainerWidth(container.clientWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [mode])

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentSnap(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const isFullscreen = mode === 'fullscreen'

  return (
    <div
      className={cn(
        'flex flex-col h-full transition-all duration-300',
        // In fullscreen, we rely on the Modal layout logic
        // In inline, we apply standard card styling
        !isFullscreen && 'relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100',
        className
      )}
    >
      {/* Controls Bar */}
      <div
        className={cn(
          'flex items-center justify-between px-4 py-3 z-10 shadow-sm transition-colors shrink-0',
          isFullscreen
            ? 'bg-white/10 text-white rounded-xl mb-4 backdrop-blur-md border border-white/10'
            : 'bg-white border-b border-gray-200'
        )}
      >
        <div className='flex items-center gap-2'>
          <span
            className={cn(
              'text-sm font-bold px-3 py-1 rounded-full',
              isFullscreen ? 'bg-white/20 text-white' : 'bg-gray-100 text-lhbs-green'
            )}
          >
            Trang {currentSnap + 1} / {numPages || '--'}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <button
            onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
            className={cn(
              'p-2 rounded-full transition-colors',
              isFullscreen ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100 text-gray-600'
            )}
            title='Thu nhỏ'
          >
            <ZoomOut className='w-5 h-5' />
          </button>
          <span className={cn('text-xs font-medium min-w-12 text-center', isFullscreen ? 'text-white' : '')}>
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((s) => Math.min(3.0, s + 0.1))}
            className={cn(
              'p-2 rounded-full transition-colors',
              isFullscreen ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100 text-gray-600'
            )}
            title='Phóng to'
          >
            <ZoomIn className='w-5 h-5' />
          </button>

          <div className={cn('w-px h-6 mx-2', isFullscreen ? 'bg-white/20' : 'bg-gray-300')} />

          <button
            onClick={onToggleFullscreen}
            className={cn(
              'p-2 rounded-full transition-colors',
              isFullscreen ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100 text-gray-600'
            )}
            title={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
          >
            {isFullscreen ? <Minimize className='w-5 h-5' /> : <Maximize className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Slider Area */}
      <div
        className={cn(
          'relative flex-1 bg-gray-50/50 overflow-hidden group w-full flex flex-col',
          `pdf-container-${mode}`,
          isFullscreen ? 'rounded-xl' : ''
        )}
      >
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className='flex items-center justify-center h-full min-h-[300px]'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-lhbs-green'></div>
            </div>
          }
          error={
            <div className='flex items-center justify-center h-full min-h-[300px] text-red-500 font-medium'>
              Không thể tải tài liệu PDF.
            </div>
          }
          className='h-full flex-1'
        >
          <div className='overflow-hidden h-full ' ref={emblaRef}>
            <div className='flex touch-pan-y touch-pinch-zoom h-full items-start'>
              {Array.from(new Array(numPages), (_, index) => (
                <div
                  className={cn(
                    'flex-[0_0_100%] min-w-0 relative pl-4 flex justify-center h-full overflow-y-hidden',
                    // In inline mode, we allow vertical scroll inside the slide if it overflows
                    // In fullscreen, we try to fit, but also allow scroll if zoomed
                    'overflow-y-auto scrollbar-hide custom-scrollbar pt-4 pb-20'
                  )}
                  key={`page_${index + 1}`}
                >
                  <div
                    className='shadow-2xl rounded-sm bg-white relative transition-transform duration-300 origin-top'
                    style={{
                      width: 'fit-content',
                      height: 'fit-content'
                    }}
                  >
                    <Page
                      pageNumber={index + 1}
                      // Layout Logic:
                      // Fullscreen: Fit Height (window.innerHeight * 0.85)
                      // Inline: Full PDF Height (render at reasonable scale or height, container limits visibility)
                      height={isFullscreen ? window.innerHeight * 0.85 : 1000}
                      scale={scale}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className='max-w-full overflow-y-hidden'
                      loading={<div className='h-[600px] w-[400px] bg-white animate-pulse' />}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Document>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white text-brand-green shadow-lg rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 z-20'
          disabled={currentSnap === 0}
        >
          <ChevronLeft className='w-6 h-6 md:w-8 md:h-8' />
        </button>

        <button
          onClick={scrollNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white text-brand-green shadow-lg rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 z-20'
          disabled={currentSnap === numPages - 1}
        >
          <ChevronRight className='w-6 h-6 md:w-8 md:h-8' />
        </button>
      </div>
    </div>
  )
}
