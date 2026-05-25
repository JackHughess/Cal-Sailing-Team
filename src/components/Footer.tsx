import { contact, site } from '../data/siteContent'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="footer-brand">{site.name}</p>
        <p className="footer-note">Made for Cal sailors — customize and deploy.</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={contact.linktree} target="_blank" rel="noreferrer">
          Linktree
        </a>
      </div>
      <p className="footer-copy">© {year} {site.name}</p>
    </footer>
  )
}
