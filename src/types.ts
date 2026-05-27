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
  sections: readonly TemplateSection[]
}
