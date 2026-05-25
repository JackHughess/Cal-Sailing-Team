import type { PageId } from './types'

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  roster: '/roster',
  about: '/about',
  news: '/news',
  recruitment: '/recruitment',
  donations: '/donations',
  contact: '/contact',
  merch: '/merch',
}

const pathEntries = Object.entries(PAGE_PATHS) as [PageId, string][]

export function pageIdFromPath(pathname: string): PageId {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname || '/'

  const match = pathEntries.find(([, path]) => path === normalized)
  return match?.[0] ?? 'home'
}

export function pathFromPageId(pageId: PageId): string {
  return PAGE_PATHS[pageId]
}
