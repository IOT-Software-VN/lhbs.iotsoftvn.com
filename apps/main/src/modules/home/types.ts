import type { LucideIcon } from 'lucide-react'

export interface SchoolLevel {
  id: string
  title: string
  subtitle: string
  descriptions: string[]
  image: string
  slug: string
  learnMoreUrl?: string
}

export interface NewsItem {
  image?: string
  date: string
  title: string
  link: string
}

export interface EventItem {
  image?: string
  date?: string
  title: string
  link: string
}

export interface GalleryItem {
  image: string
  title: string
  link: string
}

export interface UniversityLogo {
  id: number
  name: string
  image: string
}

export interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
  fullDescription: string
  image: string
  alt: string
}
