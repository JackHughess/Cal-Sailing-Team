import { join } from '../data/siteContent'

export function Join() {
  return (
    <section className="section" id="join">
      <div className="join-panel">
        <div>
          <h2>{join.heading}</h2>
          <ol className="join-steps">
            {join.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <a className="btn btn-primary btn-lg" href={join.cta.href}>
          {join.cta.label}
        </a>
      </div>
    </section>
  )
}
