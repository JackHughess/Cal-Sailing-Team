import siteData from '../../content/site.json'
import type {
  NewsArticle,
  PageId,
  PageTemplate,
  RosterClassSection,
  RosterMember,
} from '../types'

type SiteJson = typeof siteData

const content = siteData as SiteJson

export const site = content.site
export const navItems = content.nav as { id: PageId; label: string }[]
export const pageTitles = content.pageTitles as Record<PageId, string>
export const galleryImages = content.gallery
export const homeAbout = content.home.about
export const upcomingEvents = content.home.upcomingEvents
export const homeEventsHeading = content.home.eventsHeading
export const socialLinks = content.socialLinks
export const rosterMembers = content.rosterMembers as RosterMember[]
export const rosterPage = content.roster
export const newsPage = {
  title: content.news.title,
  introBefore: content.news.introBefore,
  newsletterLinkText: content.news.newsletterLinkText,
  newsletterUrl: content.news.newsletterUrl,
}
export const newsArticles = content.news.articles as NewsArticle[]

export const pageTemplates = content.pages as Record<
  Exclude<PageId, 'home' | 'roster' | 'news'>,
  PageTemplate
>

export function getRosterByClass(): RosterClassSection[] {
  const byClass = new Map<number, RosterMember[]>()

  for (const member of rosterMembers) {
    const group = byClass.get(member.graduatingClass) ?? []
    group.push(member)
    byClass.set(member.graduatingClass, group)
  }

  return [...byClass.entries()]
    .sort(([a], [b]) => a - b)
    .map(([graduatingClass, members]) => ({
      graduatingClass,
      members: [...members].sort((a, b) => a.name.localeCompare(b.name)),
    }))
}

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}
