import { useState } from 'react'

type PageHeroProps = {
  src?: string
  /** Omit for decorative banners (About, Recruitment). Set for meaningful images (e.g. news posts). */
  alt?: string
}

export function PageHero({ src, alt = '' }: PageHeroProps) {
  const [failed, setFailed] = useState(false)
  const imageSrc = src?.trim() ?? ''

  return (
    <div className="page-hero">
      {imageSrc && !failed ? (
        <img
          className="page-hero-image"
          src={imageSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="page-hero-placeholder" aria-hidden="true">
          <span>Photo</span>
        </div>
      )}
    </div>
  )
}
