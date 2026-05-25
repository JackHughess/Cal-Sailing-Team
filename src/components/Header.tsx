import { navLinks, site } from '../data/siteContent'

export function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        <span className="logo-mark" aria-hidden="true">
          ⛵
        </span>
        <span className="logo-text">{site.name}</span>
      </a>
      <nav className="site-nav" aria-label="Main">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="btn btn-primary btn-sm" href="#join">
        Join
      </a>
    </header>
  )
}
