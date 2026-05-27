import { useEffect, useState } from 'react'
import { galleryImages } from '../data/siteContent'

const ROTATE_MS = 4500

function CarouselSlideImage({
  src,
  alt,
  index,
}: {
  src: string
  alt: string
  index: number
}) {
  const [failed, setFailed] = useState(false)
  const imageSrc = src.trim()

  if (!imageSrc || failed) {
    return (
      <div
        className={`carousel-placeholder carousel-tone-${(index % 3) + 1}`}
        role="img"
        aria-label={alt}
      >
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <img
      className="carousel-slide-image"
      src={imageSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length)
    }, ROTATE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => setActiveIndex(index)

  return (
    <section className="photo-carousel" aria-label="Team photos" aria-live="polite">
      <div className="carousel-viewport">
        {galleryImages.map((image, index) => (
          <figure
            key={`${image.alt}-${index}`}
            className={`carousel-slide ${index === activeIndex ? 'is-active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            <CarouselSlideImage src={image.image} alt={image.alt} index={index} />
          </figure>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          aria-label="Previous photo"
          onClick={() =>
            goTo((activeIndex - 1 + galleryImages.length) % galleryImages.length)
          }
        >
          ‹
        </button>
        <div className="carousel-dots" role="tablist" aria-label="Choose photo">
          {galleryImages.map((image, index) => (
            <button
              key={`${image.alt}-${index}`}
              type="button"
              role="tab"
              className={index === activeIndex ? 'is-active' : undefined}
              aria-selected={index === activeIndex}
              aria-label={`Show ${image.alt}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-arrow"
          aria-label="Next photo"
          onClick={() => goTo((activeIndex + 1) % galleryImages.length)}
        >
          ›
        </button>
      </div>
    </section>
  )
}
