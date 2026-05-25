import { site } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">UC Berkeley · Student club</p>
        <h1>{site.tagline}</h1>
        <p className="hero-lead">{site.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#join">
            Join the club
          </a>
          <a className="btn btn-secondary" href="#events">
            Upcoming events
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="wave-card">
          <div className="wave-lines" />
          <span className="boat-icon">⛵</span>
        </div>
      </div>
    </section>
  )
}
