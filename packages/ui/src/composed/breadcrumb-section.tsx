import { Breadcrumb, type BreadcrumbItem } from '../primitives/breadcrumb'
import { cn } from '@lhbs/utils'

interface BreadcrumbSectionProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
  className?: string
  backgroundColor?: string
}

export function BreadcrumbSection({ items, variant = 'light', className, backgroundColor }: BreadcrumbSectionProps) {
  const isDark = variant === 'dark'

  const bgClass = backgroundColor || (isDark ? 'bg-brand-green' : 'bg-white')

  return (
    <div className={cn('w-full py-12 md:py-20 relative z-10 flex items-center', bgClass, className)}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <Breadcrumb
          items={items}
          {...(isDark && {
            textClassName: 'text-white',
            activeTextClassName: 'text-white font-medium',
            separatorClassName: 'text-white'
          })}
        />
      </div>
    </div>
  )
}
