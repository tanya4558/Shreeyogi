import { Link } from 'react-router-dom'
import { products, categories } from '../data'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.slice(0, 8)
  const chips = categories.filter((c) => c !== 'All').slice(0, 6)

  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="pill">✦ Shreeyogi Enterprise</span>
            <h1>Everyday finds,<br /><span className="grad">beautifully</span> curated.</h1>
            <p>From art supplies to clever home essentials — discover products people love, delivered fast and ordered in a tap on WhatsApp.</p>
            <div className="hero-cta">
              <Link to="/shop" className="btn btn-gold">Shop the collection</Link>
              <Link to="/about" className="btn btn-ghost">Our story</Link>
            </div>
            <div className="hero-stats">
              <div><strong>15+</strong><span>Products</span></div>
              <div><strong>6</strong><span>Categories</span></div>
              <div><strong>24/7</strong><span>WhatsApp order</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-card hero-card-1"><img src={products[1].image} alt={products[1].name} /></div>
            <div className="hero-card hero-card-2"><img src={products[5].image} alt={products[5].name} /></div>
            <div className="hero-card hero-card-3"><img src={products[4].image} alt={products[4].name} /></div>
            <div className="hero-glow" />
          </div>
        </div>
      </section>

      <section className="container cat-strip">
        {chips.map((c) => (
          <Link key={c} to="/shop" state={{ category: c }} className="cat-chip">{c}</Link>
        ))}
      </section>

      <section className="container section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Handpicked</p>
            <h2>Featured products</h2>
          </div>
          <Link to="/shop" className="see-all">View all →</Link>
        </div>
        <div className="grid">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="container banner">
        <div className="banner-inner">
          <h2>Ready to order?</h2>
          <p>Add your favourites to the cart and checkout instantly over WhatsApp.</p>
          <Link to="/shop" className="btn btn-gold">Browse everything</Link>
        </div>
      </section>
    </div>
  )
}
