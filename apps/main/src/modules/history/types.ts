import type { ElementType } from 'react'
import type { ReactNode } from 'react'

export interface HistoryChapter {
  id: string
  label: string
  years: string
  title: string
  description: string
  image?: string
  mediaContent?: ReactNode
}

// Legacy types for reused components
// Legacy types for reused components
export interface MilestoneHighlight {
  id: string
  icon: ElementType
  value: string
  label: string
  description?: string
}
