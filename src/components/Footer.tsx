import { site, socialLinks } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {site.shortName}</p>
    </footer>
  )
}
