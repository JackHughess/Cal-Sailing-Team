import { about } from '../data/siteContent'

export function About() {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2>{about.heading}</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <ul className="highlight-cards">
          {about.highlights.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
