import { pageTemplates } from '../data/siteContent'
import type { PageId, TemplateSection } from '../types'

type TemplatePageProps = {
  pageId: Exclude<PageId, 'home' | 'roster'>
}

function TemplateSectionContent({ section }: { section: TemplateSection }) {
  return (
    <>
      {section.body ? <p>{section.body}</p> : null}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      {section.bullets && section.bullets.length > 0 ? (
        <ul className="template-list">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export function TemplatePage({ pageId }: TemplatePageProps) {
  const page = pageTemplates[pageId]

  return (
    <article className="template-page">
      <header className="template-header">
        <h2>{page.title}</h2>
        {page.intro ? <p className="template-intro">{page.intro}</p> : null}
      </header>
      <div className="template-sections">
        {page.sections.map((section) => (
          <section key={section.heading} className="template-card">
            <h3>{section.heading}</h3>
            <TemplateSectionContent section={section} />
          </section>
        ))}
      </div>
    </article>
  )
}
