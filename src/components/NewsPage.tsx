import { useState } from 'react'
import { Link } from 'react-router-dom'
import { newsArticles, newsPage } from '../data/siteContent'

function NewsCardImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)

  if (!src.trim() || failed) {
    return (
      <div className="news-card-image news-card-image--placeholder" aria-hidden="true">
        <span>Photo</span>
      </div>
    )
  }

  return (
    <img
      className="news-card-image"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export function NewsPage() {
  return (
    <article className="template-page">
      <header className="template-header">
        <h2>{newsPage.title}</h2>
        {newsPage.newsletterUrl ? (
          <p className="template-intro">
            {newsPage.introBefore}
            <a href={newsPage.newsletterUrl} target="_blank" rel="noreferrer">
              {newsPage.newsletterLinkText}
            </a>
          </p>
        ) : null}
      </header>

      <div className="news-grid">
        {newsArticles.map((article) => (
          <article key={article.slug} className="news-card">
            <Link to={`/news/${article.slug}`} className="news-card-link">
              <NewsCardImage src={article.image} alt={article.imageAlt} />
              <div className="news-card-body">
                <h3>{article.heading}</h3>
                <p>{article.excerpt}</p>
                <span className="news-card-cta">Read article</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </article>
  )
}
