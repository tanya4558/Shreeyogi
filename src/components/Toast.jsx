import { useCart } from '../CartContext'

export default function Toast() {
  const { toast, setIsOpen, setToast } = useCart()
  if (!toast) return null
  return (
    <div className="toast" role="status">
      <span className="toast-ico">✓</span>
      {toast}
      <button type="button" onClick={() => { setToast(''); setIsOpen(true) }}>View cart</button>
    </div>
  )
}
