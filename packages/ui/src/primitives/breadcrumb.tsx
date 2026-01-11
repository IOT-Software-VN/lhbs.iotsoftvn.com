import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  textClassName?: string
  activeTextClassName?: string
  separatorClassName?: string
}

export function Breadcrumb({
  items,
  className = '',
  textClassName = 'text-black/70 hover:text-black',
  activeTextClassName = 'text-black font-medium',
  separatorClassName = 'text-black/50'
}: BreadcrumbProps) {
  return (
    <nav aria-label='Breadcrumb' className={`flex items-center gap-2 ${className}`}>
      {/* Home Icon */}
      <Link href='/' className={`flex items-center transition-colors ${textClassName}`} aria-label='Trang chủ'>
        <Home className='w-4 h-4' />
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className='flex items-center gap-2'>
            <ChevronRight className={`w-4 h-4 ${separatorClassName}`} />

            {isLast || !item.path ? (
              <span className={`text-xs md:text-base ${activeTextClassName}`}>{item.label}</span>
            ) : (
              <Link href={item.path} className={`text-xs md:text-base transition-colors ${textClassName}`}>
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
