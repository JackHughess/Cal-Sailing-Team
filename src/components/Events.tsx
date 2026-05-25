import { events } from '../data/siteContent'

export function Events() {
  return (
    <section className="section section-alt" id="events">
      <div className="section-header">
        <h2>Upcoming events</h2>
        <p>Update dates and locations in <code>src/data/siteContent.ts</code>.</p>
      </div>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.title} className="event-card">
            <time className="event-date">{event.date}</time>
            <div>
              <h3>{event.title}</h3>
              <p className="event-location">{event.location}</p>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
