import { pageTemplates } from '../data/siteContent'
import type { PageId } from '../types'

type TemplatePageProps = {
  pageId: Exclude<PageId, 'home'>
}

export function TemplatePage({ pageId }: TemplatePageProps) {
  const page = pageTemplates[pageId]

  return (
    <article className="template-page">
      <header className="template-header">
        <h2>{page.title}</h2>
        <p className="template-intro">{page.intro}</p>
      </header>
      <div className="template-sections">
        {page.sections.map((section) => (
          <section key={section.heading} className="template-card">
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
            <p className="template-placeholder">Content coming soon — edit in siteContent.ts</p>
          </section>
        ))}
      </div>
    </article>
  )
}
