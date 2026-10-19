import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { products, categories } from '../data'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const location = useLocation()
  const [active, setActive] = useState(location.state?.category || 'All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')

  const list = useMemo(() => {
    let out = products.filter((p) =>
      (active === 'All' || p.category === active) &&
      (p.name + p.category + p.desc).toLowerCase().includes(query.toLowerCase()))
    if (sort === 'low') out = [...out].sort((a, b) => a.price - b.price)
    if (sort === 'high') out = [...out].sort((a, b) => b.price - a.price)
    return out
  }, [active, query, sort])

  return (
    <div className="page">
      <section className="shop-head">
        <div className="container">
          <p className="eyebrow">The collection</p>
          <h1>Shop everything</h1>
          <div className="shop-tools">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products…" />
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="chips">
          {categories.map((c) => (
            <button key={c} type="button" className={active === c ? 'chip active' : 'chip'} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="empty-note">No products match your search.</p>
        ) : (
          <div className="grid">
            {list.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  )
}
