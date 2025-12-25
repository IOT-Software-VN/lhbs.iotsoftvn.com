import { Link } from 'react-router'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 ${className}`}>
      {/* Home Icon */}
      <Link 
        to="/" 
        className="flex items-center text-white/70 hover:text-white transition-colors"
        aria-label="Trang chủ"
      >
        <Home className="w-4 h-4" />
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-white/50" />
            
            {isLast || !item.path ? (
              <span className="text-sm md:text-base text-white font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-sm md:text-base text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
