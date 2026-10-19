import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'
import { SHOP, whatsappLink } from '../data'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, remove, changeQty, total, clear } = useCart()
  if (!isOpen) return null

  const checkout = () => {
    const lines = items.map((i) => `• ${i.name} x${i.qty} — ₹${i.price * i.qty}`).join('\n')
    const message = `Hi ${SHOP.name}, I would like to order:\n${lines}\n\nTotal: ₹${total}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <button className="drawer-backdrop" aria-label="Close cart" type="button" onClick={() => setIsOpen(false)} />
      <aside className="drawer" aria-label="Shopping cart">
        <div className="drawer-head">
          <h3>Your Cart</h3>
          <button type="button" aria-label="Close" onClick={() => setIsOpen(false)}>×</button>
        </div>
        {items.length === 0 ? (
          <div className="drawer-empty">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn btn-gold" onClick={() => setIsOpen(false)}>Start shopping</Link>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {items.map((i) => (
                <div className="drawer-item" key={i.id}>
                  <img src={i.image} alt="" />
                  <div>
                    <h4>{i.name}</h4>
                    <p>₹{i.price}</p>
                    <div className="qty">
                      <button type="button" onClick={() => changeQty(i.id, -1)} aria-label="Decrease">−</button>
                      <span>{i.qty}</span>
                      <button type="button" onClick={() => changeQty(i.id, 1)} aria-label="Increase">+</button>
                    </div>
                  </div>
                  <button className="remove" type="button" onClick={() => remove(i.id)} aria-label="Remove">×</button>
                </div>
              ))}
            </div>
            <div className="drawer-foot">
              <div className="drawer-total"><span>Total</span><strong>₹{total}</strong></div>
              <button className="btn btn-wa" type="button" onClick={checkout}>Order on WhatsApp</button>
              <button className="drawer-clear" type="button" onClick={clear}>Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
