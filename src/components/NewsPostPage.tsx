import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getNewsArticle } from '../data/siteContent'
import { PageHero } from './PageHero'

export function NewsPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getNewsArticle(slug) : undefined

  useEffect(() => {
    if (article) {
      document.title = `${article.heading} | Cal Sailing Team`
    }
  }, [article])

  if (!article) {
    return <Navigate to="/news" replace />
  }

  return (
    <article className="template-page">
      <header className="template-header">
        <p className="news-back">
          <Link to="/news">← Back to News</Link>
        </p>
        <h2>{article.heading}</h2>
      </header>

      <PageHero src={article.image} alt={article.imageAlt} />

      <div className="template-sections">
        <section className="template-card news-post-body">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </section>
      </div>
    </article>
  )
}
