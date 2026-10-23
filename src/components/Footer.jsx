import { Link } from 'react-router-dom'
import { SHOP, whatsappLink } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span className="brand-text">{SHOP.name}<sup className="trademark">™</sup><small>enterprise</small></span>
          </div>
          <p className="footer-tag">Curated everyday essentials, delivered with care across India.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Reach us</h4>
          <a href={`tel:${SHOP.phone}`}>+91 {SHOP.phone}</a>
          <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
          <p>{SHOP.address}</p>
        </div>
        <div>
          <h4>Order on WhatsApp</h4>
          <p>Fast replies, easy ordering.</p>
          <a className="wa-btn" href={whatsappLink(`Hi ${SHOP.name}, I would like to know more about your products.`)} target="_blank" rel="noreferrer">Chat now</a>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} {SHOP.name}™ Enterprise</span>
        <span>Made for everyday living</span>
      </div>
    </footer>
  )
}
