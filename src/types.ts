export type PageId =
  | 'home'
  | 'roster'
  | 'about'
  | 'news'
  | 'recruitment'
  | 'donations'
  | 'contact'
  | 'merch'

export type RosterMember = {
  id: string
  name: string
  photo: string
  officerPosition: string
  role: string
  major: string
  hometown: string
  graduatingClass: number
}

export type RosterClassSection = {
  graduatingClass: number
  members: RosterMember[]
}

export type TemplateSection = {
  heading: string
  body?: string
  paragraphs?: readonly string[]
  bullets?: readonly string[]
}

export type PageTemplate = {
  title: string
  intro?: string
  /** Banner above section content — file in public/, e.g. /about/hero.png */
  heroImage?: string
  sections: readonly TemplateSection[]
}

export type NewsArticle = {
  slug: string
  heading: string
  excerpt: string
  image: string
  imageAlt: string
  paragraphs: readonly string[]
}
