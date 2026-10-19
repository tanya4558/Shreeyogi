import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

export default function ProductCard({ product }) {
  const { add } = useCart()
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="card-badge">{product.badge}</span>
      </Link>
      <div className="card-body">
        <p className="card-cat">{product.category}</p>
        <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        <div className="card-foot">
          <strong>₹{product.price}</strong>
          <button type="button" onClick={() => add(product)}>Add +</button>
        </div>
      </div>
    </article>
  )
}
