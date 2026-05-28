import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, site } from '../data/siteContent'
import { pathFromPageId } from '../routes'
import type { PageId } from '../types'

type HeaderProps = {
  activePage: PageId
}

export function Header({ activePage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 769px)').matches) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link to="/" className="site-brand" onClick={() => setMenuOpen(false)}>
          <img
            src="/cal-sailing-flag.png"
            alt=""
            className="site-logo"
            width={127}
            height={74}
          />
          <span className="site-title">{site.name}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-label">{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="nav-toggle-icon" aria-hidden="true">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      <nav
        id="main-nav"
        className={`site-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Main"
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={pathFromPageId(item.id)}
                className={({ isActive }) =>
                  isActive || activePage === item.id ? 'active' : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
