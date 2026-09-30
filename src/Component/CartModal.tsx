import type { CartItem } from '../data/cart'
import './CartModal.css'

interface CartModalProps {
  cart: CartItem[]
  onClose: () => void
}

function CartModal({ cart, onClose }: CartModalProps) {
  const grandTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h3>Your Cart</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.product.id}>
                    <td>{item.product.name}</td>
                    <td>৳{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>৳{(item.product.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-total">
              Total: ৳{grandTotal.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal