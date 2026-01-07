import { schoolData } from '../constants'
import { type SchoolLevel } from '../types'
import { cn } from '@lhbs/utils'

interface SchoolIconProps {
  level: SchoolLevel
  className?: string
}

export function SchoolIcon({ level, className }: SchoolIconProps) {
  const Icon = schoolData[level].icon
  return <Icon className={cn('w-4 h-4', className)} />
}
