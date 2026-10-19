import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products, SHOP, whatsappLink } from '../data'
import { useCart } from '../CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="page container section">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-gold">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const buyNow = () => {
    const message = `Hi ${SHOP.name}, I want to buy ${product.name} (x${qty}) — ₹${product.price * qty}.`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="page">
      <section className="container detail">
        <nav className="crumbs"><Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span></nav>
        <div className="detail-grid">
          <div className="detail-media">
            <img src={product.image} alt={product.name} />
            <span className="card-badge">{product.badge}</span>
          </div>
          <div className="detail-info">
            <p className="card-cat">{product.category}</p>
            <h1>{product.name}</h1>
            <div className="detail-price">₹{product.price}</div>
            <p className="detail-desc">{product.desc}</p>
            <div className="detail-qty">
              <span>Quantity</span>
              <div className="qty">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
            </div>
            <div className="detail-cta">
              <button className="btn btn-gold" type="button" onClick={() => add(product, qty)}>Add to cart</button>
              <button className="btn btn-wa" type="button" onClick={buyNow}>Buy on WhatsApp</button>
            </div>
            <ul className="detail-points">
              <li>✓ Quality checked before dispatch</li>
              <li>✓ Easy ordering over WhatsApp</li>
              <li>✓ Fast delivery across India</li>
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container section">
          <div className="section-head"><h2>You may also like</h2></div>
          <div className="grid">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
