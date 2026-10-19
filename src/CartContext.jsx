import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('shreeyogi-cart')) || [] } catch { return [] }
  })
  const [toast, setToast] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => { localStorage.setItem('shreeyogi-cart', JSON.stringify(items)) }, [items])
  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(''), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  const add = (product, qty = 1) => {
    setItems((current) => {
      const existing = current.find((i) => i.id === product.id)
      if (existing) return current.map((i) => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
      return [...current, { ...product, qty }]
    })
    setToast(`${product.name} added to cart`)
  }
  const remove = (id) => setItems((current) => current.filter((i) => i.id !== id))
  const changeQty = (id, delta) => setItems((current) => current
    .map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
  const clear = () => setItems([])

  const count = items.reduce((t, i) => t + i.qty, 0)
  const total = items.reduce((t, i) => t + i.qty * i.price, 0)

  const value = useMemo(
    () => ({ items, add, remove, changeQty, clear, count, total, toast, setToast, isOpen, setIsOpen }),
    [items, count, total, toast, isOpen],
  )
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
