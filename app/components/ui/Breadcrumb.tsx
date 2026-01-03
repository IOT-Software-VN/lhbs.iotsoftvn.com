import { Link } from 'react-router'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  /**
   * Class for the text color of inactive/link items.
   * Default: 'text-black/70 hover:text-black'
   */
  textClassName?: string
  /**
   * Class for the text color of the active (last) item.
   * Default: 'text-black font-medium'
   */
  activeTextClassName?: string
  /**
    * Class for certain icons or separators if needed.
    * Default: 'text-black/50'
    */
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
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 ${className}`}>
      {/* Home Icon */}
      <Link
        to="/"
        className={`flex items-center transition-colors ${textClassName}`}
        aria-label="Trang chủ"
      >
        <Home className="w-4 h-4" />
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className={`w-4 h-4 ${separatorClassName}`} />

            {isLast || !item.path ? (
              <span className={`text-sm md:text-base ${activeTextClassName}`}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className={`text-sm md:text-base transition-colors ${textClassName}`}
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
