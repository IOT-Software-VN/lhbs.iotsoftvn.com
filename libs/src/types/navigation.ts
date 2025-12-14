export interface NavChild {
  id: string
  label: string
  path: string
  description?: string
}

export interface NavParent {
  id: string
  label: string
  path: string
  description: string
  children: NavChild[]
  cta?: {
    text: string
    path: string
  }
}

export interface MoreLink {
  label: string
  path: string
}

export interface NavigationData {
  siteNavigation: NavParent[]
  moreLinks: MoreLink[]
}
