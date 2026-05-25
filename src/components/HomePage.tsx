import { Link } from 'react-router-dom'
import { homeAboutShort, site, upcomingEvents } from '../data/siteContent'
import { PhotoGallery } from './PhotoGallery'

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <PhotoGallery />
        <div className="home-about-short">
          <h2>{site.heading}</h2>
          <p>{homeAboutShort}</p>
          <Link to="/about" className="home-about-link">
            Read full story on About →
          </Link>
        </div>
      </section>

      <section className="home-events">
        <h2>UPCOMING EVENTS</h2>
        <ul>
          {upcomingEvents.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
