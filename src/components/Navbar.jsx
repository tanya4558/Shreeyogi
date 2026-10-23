import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SHOP } from '../data'
import { useCart } from '../CartContext'

export default function Navbar() {
  const { count, setIsOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ['/', 'Home'],
    ['/shop', 'Shop'],
    ['/about', 'About'],
    ['/contact', 'Contact'],
  ]

  return (
    <header className="nav-wrap">
      <div className="nav container">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">S</span>
          <span className="brand-text">{SHOP.name}<sup className="trademark">™</sup><small>enterprise</small></span>
        </Link>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="cart-pill" type="button" onClick={() => setIsOpen(true)} aria-label="Open cart">
            <span className="cart-ico">🛒</span>
            {count > 0 && <b>{count}</b>}
          </button>
          <button className="burger" type="button" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
