import { homeAbout, homeEventsHeading, upcomingEvents } from '../data/siteContent'
import { PhotoGallery } from './PhotoGallery'

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <PhotoGallery />
        <div className="home-about-short">
          <h2>{homeAbout.heading}</h2>
          {homeAbout.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="home-events">
        <h2>{homeEventsHeading}</h2>
        <ul>
          {upcomingEvents.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
