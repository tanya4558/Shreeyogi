import { Link } from 'react-router-dom'
import { SHOP } from '../data'

export default function About() {
  return (
    <div className="page">
      <section className="shop-head">
        <div className="container">
          <p className="eyebrow">Who we are</p>
          <h1>About {SHOP.name}</h1>
        </div>
      </section>

      <section className="container section about-grid">
        <div className="about-copy">
          <p className="lead">{SHOP.name} Enterprise is a Surat-based retail venture bringing together practical, playful and beautiful everyday products under one trusted roof.</p>
          <p>From art and craft kits that spark creativity, to clever kitchen and home helpers that make daily life easier, every item in our collection is handpicked for quality and value. We keep ordering simple — browse, add to cart, and checkout directly on WhatsApp for a quick, personal buying experience.</p>
          <div className="about-values">
            <div><strong>Quality first</strong><span>Every product is checked before it reaches you.</span></div>
            <div><strong>Fair prices</strong><span>Honest value on everything we sell.</span></div>
            <div><strong>Personal service</strong><span>Real conversations over WhatsApp.</span></div>
          </div>
          <Link to="/shop" className="btn btn-gold">Explore the collection</Link>
        </div>
        <aside className="about-card">
          <h3>Visit / Reach us</h3>
          <p><b>Phone</b><br />+91 {SHOP.phone}</p>
          <p><b>Email</b><br />{SHOP.email}</p>
          <p><b>Address</b><br />{SHOP.address}</p>
        </aside>
      </section>
    </div>
  )
}
